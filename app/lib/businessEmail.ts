export const BLOCKED_BUSINESS_EMAIL_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
] as const;

const EMAIL_FORMAT = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function getEmailDomain(email: string): string {
  const normalizedEmail = email.trim().toLowerCase();
  const atIndex = normalizedEmail.lastIndexOf("@");
  return atIndex >= 0 ? normalizedEmail.slice(atIndex + 1) : "";
}

export function isBlockedBusinessEmail(email: string): boolean {
  const domain = getEmailDomain(email);

  return BLOCKED_BUSINESS_EMAIL_DOMAINS.some(
    (blockedDomain) =>
      domain === blockedDomain || domain.endsWith(`.${blockedDomain}`),
  );
}

export function getBusinessEmailValidationMessage(email: string): string {
  const normalizedEmail = email.trim();

  if (!normalizedEmail) return "";

  if (!EMAIL_FORMAT.test(normalizedEmail)) {
    return "Please enter a valid email address (example@company.com).";
  }

  if (isBlockedBusinessEmail(normalizedEmail)) {
    return "Please use a business email address instead of Gmail/Yahoo/Outlook.";
  }

  return "";
}
