"use client";

import { useEffect } from "react";
import { getBusinessEmailValidationMessage } from "@/app/lib/businessEmail";

let nextMessageId = 0;

const EMAIL_INPUT_SELECTOR = [
  'input[type="email"]',
  'input[name="Email"]',
  'input[name="email"]',
  'input[id="Email"]',
  'input[id="email"]',
  'input[data-ftype="email"]',
  'input[ftype="email"]',
  'input[name="LEADCF8"]',
].join(",");

function getEmailInput(target: EventTarget | null): HTMLInputElement | null {
  if (!(target instanceof HTMLInputElement)) return null;
  return target.matches(EMAIL_INPUT_SELECTOR) ? target : null;
}

function removeDescribedBy(input: HTMLInputElement, messageId: string) {
  const describedBy = (input.getAttribute("aria-describedby") || "")
    .split(/\s+/)
    .filter((id) => id && id !== messageId);

  if (describedBy.length) {
    input.setAttribute("aria-describedby", describedBy.join(" "));
  } else {
    input.removeAttribute("aria-describedby");
  }
}

function clearInlineError(input: HTMLInputElement) {
  const messageId = input.dataset.businessEmailMessageId;
  if (messageId) {
    document.getElementById(messageId)?.remove();
    removeDescribedBy(input, messageId);
    delete input.dataset.businessEmailMessageId;
  }

  input.classList.remove("business-email-invalid");
}

function showInlineError(input: HTMLInputElement, message: string) {
  let messageId = input.dataset.businessEmailMessageId;
  let messageElement = messageId
    ? document.getElementById(messageId)
    : null;

  if (!messageElement) {
    messageId = `business-email-error-${++nextMessageId}`;
    messageElement = document.createElement("span");
    messageElement.id = messageId;
    messageElement.className = "business-email-validation-message";
    messageElement.setAttribute("role", "alert");
    messageElement.setAttribute("aria-live", "polite");
    input.insertAdjacentElement("afterend", messageElement);
    input.dataset.businessEmailMessageId = messageId;
  }

  messageElement.textContent = message;
  input.classList.add("business-email-invalid");

  if (!messageId) return;

  const describedBy = new Set(
    (input.getAttribute("aria-describedby") || "")
      .split(/\s+/)
      .filter(Boolean),
  );
  describedBy.add(messageId);
  input.setAttribute("aria-describedby", Array.from(describedBy).join(" "));
}

function validateEmailInput(input: HTMLInputElement): boolean {
  const message = getBusinessEmailValidationMessage(input.value);
  input.setCustomValidity(message);

  if (message) {
    input.setAttribute("aria-invalid", "true");
    input.dataset.businessEmailError = "true";
    showInlineError(input, message);
    return false;
  }

  clearInlineError(input);
  input.removeAttribute("aria-invalid");
  delete input.dataset.businessEmailError;
  return true;
}

export default function BusinessEmailGuard() {
  useEffect(() => {
    const handleInput = (event: Event) => {
      const input = getEmailInput(event.target);
      if (input) validateEmailInput(input);
    };

    const handleBlur = (event: FocusEvent) => {
      const input = getEmailInput(event.target);
      if (input?.value.trim()) validateEmailInput(input);
    };

    const handleSubmit = (event: SubmitEvent) => {
      if (!(event.target instanceof HTMLFormElement)) return;

      const emailInputs = Array.from(
        event.target.querySelectorAll<HTMLInputElement>(EMAIL_INPUT_SELECTOR),
      );
      const invalidInput = emailInputs.find(
        (input) => !validateEmailInput(input),
      );

      if (!invalidInput) return;

      event.preventDefault();
      event.stopImmediatePropagation();
      invalidInput.focus();
      invalidInput.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    document.addEventListener("input", handleInput, true);
    document.addEventListener("blur", handleBlur, true);
    document.addEventListener("submit", handleSubmit, true);

    return () => {
      document.removeEventListener("input", handleInput, true);
      document.removeEventListener("blur", handleBlur, true);
      document.removeEventListener("submit", handleSubmit, true);
      document
        .querySelectorAll<HTMLInputElement>("[data-business-email-message-id]")
        .forEach((input) => {
          clearInlineError(input);
          input.setCustomValidity("");
          input.removeAttribute("aria-invalid");
          delete input.dataset.businessEmailError;
        });
    };
  }, []);

  return (
    <style jsx global>{`
      .business-email-invalid {
        border-color: #ef4444 !important;
        box-shadow: 0 0 0 1px rgba(239, 68, 68, 0.2) !important;
      }

      .business-email-validation-message {
        display: block;
        margin-top: 0.25rem;
        color: #dc2626;
        font-size: 11px;
        font-weight: 500;
        line-height: 1.25rem;
        white-space: normal;
      }
    `}</style>
  );
}
