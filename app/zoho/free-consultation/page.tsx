"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Mail, CheckCircle, Sparkles, ShieldCheck } from 'lucide-react';

// Define global types for Zoho
declare global {
  interface Window {
    $zoho?: {
      salesiq?: {
        widgetcode: string;
        values: Record<string, unknown>;
        ready: () => void;
        visitor?: {
          uniqueid: () => string;
          name: (name: string) => void;
          email: (email: string) => void;
        };
      };
    };
    addAriaSelected409531000000398076?: (event: Event) => void;
    rccallback409531000000398076?: () => void;
    reCaptchaAlert409531000000398076?: () => boolean;
    validateEmail409531000000398076?: () => boolean;
    checkMandatory409531000000398076?: () => boolean;
    validateNumber?: (e: KeyboardEvent) => boolean;
    sendEmail?: () => void;
    trackVisitor409531000000398076?: () => void;
  }
}

export default function ZohoFreeConsultation() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const loadRecaptcha = () => {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

    const loadSalesIQ = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.id = 'zsiqscript';
      script.defer = true;
      script.src = 'https://salesiq.zoho.in/widget';
      document.head.appendChild(script);
    };

    const loadAnalytics = () => {
      const script = document.createElement('script');
      script.id = 'wf_anal';
      script.src = 'https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=e9afb9e35a2bbd47add959e56e33e0879319b2c30faae93144ceb41c12088615d10f6ceab6f573426dacb17b83561b72gidc4904c4c6a88fccfccdba12a96a9253ab1e43e0ff3c4202a2713cd70980714b0gidf9df2680fefedb48bf61611dd8257371d95c724209cd7e51551844c331b447d3gid670a6f27d1ba095ba42cef1e786b991f3bb06a823459ffd6f12a9e48fce97bba&tw=255e274a3d4071d2619df92ea60a0ab44be6cb0d7910b47114703256f4e9e7c7';
      document.head.appendChild(script);
    };

    loadRecaptcha();
    loadSalesIQ();
    loadAnalytics();

    if (typeof window !== 'undefined') {
      window.$zoho = window.$zoho || {};
      window.$zoho.salesiq = window.$zoho.salesiq || {
        widgetcode: 'siq35ed179fbb63b96bebd9bc669caab3cc7ab9252873ae18a7fd3bac7692c8ff19',
        values: {},
        ready: function () { }
      };
    }

    window.addAriaSelected409531000000398076 = function (event: Event) {
      const optionElem = event.target as HTMLSelectElement;
      const previousSelectedOption = optionElem.querySelector('[aria-selected="true"]');
      if (previousSelectedOption) {
        previousSelectedOption.removeAttribute('aria-selected');
      }
      if (optionElem.options && optionElem.options[optionElem.selectedIndex]) {
        optionElem.options[optionElem.selectedIndex].setAttribute('aria-selected', 'true');
      }
    };

    window.rccallback409531000000398076 = function () {
      const recap = document.getElementById('recap409531000000398076');
      if (recap) { recap.setAttribute('captcha-verified', 'true'); }
      const errorElement = document.getElementById('recapErr409531000000398076');
      if (errorElement && errorElement.style.visibility === 'visible') {
        errorElement.style.visibility = 'hidden';
      }
    };

    window.reCaptchaAlert409531000000398076 = function () {
      const recap = document.getElementById('recap409531000000398076');
      if (recap && recap.getAttribute('captcha-verified') === 'false') {
        const errorElement = document.getElementById('recapErr409531000000398076');
        if (errorElement) { errorElement.style.visibility = 'visible'; }
        return false;
      }
      return true;
    };

    window.validateEmail409531000000398076 = function () {
      const form = document.forms.namedItem('WebToLeads409531000000398076');
      if (!form) return true;
      const emailFld = form.querySelectorAll('[ftype="email"]');
      for (let i = 0; i < emailFld.length; i++) {
        const emailVal = (emailFld[i] as HTMLInputElement).value;
        if ((emailVal.replace(/^\s+|\s+$/g, '')).length !== 0) {
          const atpos = emailVal.indexOf('@');
          const dotpos = emailVal.lastIndexOf('.');
          if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
            alert('Please enter a valid email address.');
            (emailFld[i] as HTMLInputElement).focus();
            return false;
          }
          const restrictedDomains = /(gmail\.com|yahoo\.com|outlook\.com|live\.com)$/i;
          if (restrictedDomains.test(emailVal)) {
            alert('Gmail, Yahoo, Outlook, and Live email addresses are not allowed.');
            (emailFld[i] as HTMLInputElement).focus();
            return false;
          }
        }
      }
      return true;
    };

    window.validateNumber = function (e: KeyboardEvent) {
      const pattern = /^[0-9]$/;
      return pattern.test(e.key);
    };

    window.sendEmail = function () {
      const form = document.forms.namedItem('WebToLeads409531000000398076');
      if (!form) return;
      const formData = new FormData(form);
      fetch('https://agsuitetech.com/pricing/consultation_process.php', {
        method: 'POST',
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          if (data.status === 'success') { console.log('Email sent successfully.'); }
          else { console.error('Failed to send email:', data.error); }
        })
        .catch(error => { console.error('Error while sending email:', error); });
    };

    window.trackVisitor409531000000398076 = function () {
      try {
        if (window.$zoho?.salesiq?.visitor) {
          const form = document.forms.namedItem('WebToLeads409531000000398076');
          if (form) {
            const LDTuvidObj = form.elements.namedItem('LDTuvid') as HTMLInputElement;
            if (LDTuvidObj) { LDTuvidObj.value = window.$zoho.salesiq.visitor.uniqueid() || ''; }
            const nameField = form.elements.namedItem('Last Name') as HTMLInputElement;
            if (nameField?.value) { window.$zoho.salesiq.visitor.name(nameField.value); }
            const emailObj = form.elements.namedItem('Email') as HTMLInputElement;
            if (emailObj?.value) { window.$zoho.salesiq.visitor.email(emailObj.value); }
          }
        }
      } catch (e) { console.log('Zoho tracking error:', e); }
    };

    window.checkMandatory409531000000398076 = function () {
      const mndFileds = ['Company', 'Last Name', 'Designation', 'Email', 'Mobile', 'Description', 'LEADCF5', 'Annual_Revenue'];
      const fldLangVal = ['Company Name', 'Name', 'Role', 'Business Email', 'Mobile', 'Tell Us How We Can Help', 'Product / Services', 'Annual Revenue'];
      const form = document.forms.namedItem('WebToLeads409531000000398076');
      if (!form) return false;
      for (let i = 0; i < mndFileds.length; i++) {
        const fieldObj = form.elements.namedItem(mndFileds[i]) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
        if (fieldObj) {
          if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length === 0) {
            alert(fldLangVal[i] + ' cannot be empty.');
            fieldObj.focus();
            return false;
          } else if (fieldObj.nodeName === 'SELECT' && ((fieldObj as HTMLSelectElement).value === '-None-' || (fieldObj as HTMLSelectElement).value === '')) {
            alert(fldLangVal[i] + ' cannot be none.');
            fieldObj.focus();
            return false;
          }
        }
      }
      window.trackVisitor409531000000398076?.();
      if (!window.validateEmail409531000000398076?.()) return false;
      if (!window.reCaptchaAlert409531000000398076?.()) return false;
      window.sendEmail?.();
      const submitButton = document.querySelector('.crmWebToEntityForm .formsubmit') as HTMLInputElement;
      if (submitButton) { submitButton.disabled = true; }
      return true;
    };
  }, []);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (window.checkMandatory409531000000398076) {
      return window.checkMandatory409531000000398076();
    }
    return false;
  };

  if (!isClient) {
    return <div className="min-h-screen bg-white animate-pulse" />;
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center py-24 px-6 lg:px-10 overflow-hidden"
      style={{
        backgroundImage: "url('/images/contact/girlcontact.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Content */}
        <div className="flex flex-col space-y-10">
          <div>
            <p className="text-red-400 font-bold tracking-widest uppercase text-sm mb-4">Strategic Transformation</p>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-8">
              Book a Free <span className="text-red-500 italic block mt-2">Consultation</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed font-light max-w-lg">
              Unlock your business potential with expert Zoho & NetSuite guidance. Take the first step towards a seamless cloud operation.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { icon: CheckCircle, text: "30-Minute Expert Discovery Session" },
              { icon: Sparkles, text: "Technology Readiness Audit" },
              { icon: ShieldCheck, text: "Data-Driven Growth Implementation Plan" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 text-white">
                <div className="p-2 bg-red-600/20 backdrop-blur-md rounded-lg border border-red-500/30">
                  <item.icon className="text-red-500" size={24} />
                </div>
                <span className="text-lg font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-red-600 flex items-center justify-center text-white shadow-xl">
              <Mail size={32} />
            </div>
            <div>
              <p className="text-gray-300 text-sm">Need immediate help?</p>
              <h4 className="text-xl font-bold text-white">consult@agsuitetech.com</h4>
            </div>
          </div>
        </div>

        {/* Right Side: Zoho Form */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-[2rem] blur-xl opacity-20" />
          <div className="relative bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Speak with an Expert</h2>
              <p className="text-gray-500 text-sm">Fill out the details below and we'll reach out within 24 hours.</p>
            </div>

            <form
              id="webform409531000000398076"
              action="https://crm.zoho.in/crm/WebToLeadForm"
              name="WebToLeads409531000000398076"
              method="POST"
              onSubmit={handleFormSubmit}
              acceptCharset="UTF-8"
              className="space-y-5"
            >
              {/* Mandatory Hidden Fields */}
              <input type="text" className="hidden" name="xnQsjsdp" value="c8ca8ae9d9a028ad1829d7b6672a73889deb8a8363ec4697c92f3db46344ff6b" readOnly />
              <input type="hidden" name="zc_gad" id="zc_gad" value="" />
              <input type="text" className="hidden" name="xmIwtLD" value="2f6fbcbccdbab984b5b2558389fe0f6d28bf60ce7e3964b2b6210b4f5a840a2a0047f993325f425b93837214b9dbeabb" readOnly />
              <input type="text" className="hidden" name="actionType" value="TGVhZHM=" readOnly />
              <input type="text" className="hidden" name="returnURL" value="https://agsuitetech.com/free-consultation-now/thank-you.php" readOnly />
              <input type="text" className="hidden" id="ldeskuid" name="ldeskuid" />
              <input type="text" className="hidden" id="LDTuvid" name="LDTuvid" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="Last Name" placeholder="Full Name*" className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-500/5 focus:border-red-500 outline-none transition-all placeholder:text-gray-400 font-medium" />
                <input type="email" name="Email" placeholder="Business Email*" className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-500/5 focus:border-red-500 outline-none transition-all placeholder:text-gray-400 font-medium" />
                <input type="text" name="Designation" placeholder="Job Role*" className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-500/5 focus:border-red-500 outline-none transition-all placeholder:text-gray-400 font-medium" />
                <input type="text" name="Mobile" placeholder="Phone Number*" className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-500/5 focus:border-red-500 outline-none transition-all placeholder:text-gray-400 font-medium" />
                <input type="text" name="Company" placeholder="Company Name*" className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl md:col-span-2 focus:ring-4 focus:ring-red-500/5 focus:border-red-500 outline-none transition-all placeholder:text-gray-400 font-medium" />

                <select name="LEADCF5" className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-500/5 focus:border-red-500 outline-none transition-all font-medium text-gray-700">
                  <option value="" disabled selected>Service Interest*</option>
                  <option value="Oracle NetSuite">Oracle NetSuite</option>
                  <option value="Zoho">Zoho</option>
                </select>

                <select name="Annual_Revenue" className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-500/5 focus:border-red-500 outline-none transition-all font-medium text-gray-700">
                  <option value="" disabled selected>Annual Revenue*</option>
                  <option value="Under $500K">Under $500K</option>
                  <option value="$500k to $1M">$500k to $1M</option>
                  <option value="$1M to $2M">$1M to $2M</option>
                  <option value="$10M+">$10M+</option>
                </select>
              </div>

              <textarea name="Description" placeholder="How can we help?*" rows={4} className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-500/5 focus:border-red-500 outline-none transition-all placeholder:text-gray-400 font-medium resize-none" />

              <div className="space-y-4">
                <div id="recap409531000000398076" className="g-recaptcha flex justify-center" data-sitekey="6Lct5nwkAAAAADdrNkjf_H3jp-0XE9dUqAjgJXQ3" data-captcha-verified="false" />
                <p id="recapErr409531000000398076" className="text-xs text-red-600 invisible text-center">Please verify that you are not a robot.</p>
                <button type="submit" id="formsubmit" className="formsubmit w-full py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl font-bold uppercase tracking-widest text-sm shadow-xl hover:shadow-red-600/20 hover:-translate-y-1 transition-all">
                  Request Free Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
