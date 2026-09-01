"use client";
import Script from "next/script";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MultiSelectDropdown from "../shared/MultiSelectDropdown";

export default function FooterFormSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const suffix = '409531000042578178';
    const formName = 'WebToLeads409531000042578178';

    // Define all form validation functions globally
    (window as any)[`addAriaSelected${suffix}`] = function () {
      const optionElem = (event as any).target;
      const previousSelectedOption = optionElem.querySelector('[aria-selected=true]');
      if (previousSelectedOption) {
        previousSelectedOption.removeAttribute('aria-selected');
      }
      optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected = 'true';
    };

    (window as any).rccallback409531000042578178 = function () {
      if (document.getElementById(`recap${suffix}`)) {
        document.getElementById(`recap${suffix}`)?.setAttribute('captcha-verified', 'true');
      }
      const errorElement = document.getElementById(`recapErr${suffix}`);
      if (errorElement && errorElement.style.visibility === 'visible') {
        errorElement.style.visibility = 'hidden';
      }
    };

    (window as any).reCaptchaAlert409531000042578178 = function () {
      const recap = document.getElementById(`recap${suffix}`);
      if (recap && recap.getAttribute('captcha-verified') === 'false') {
        const errorElement = document.getElementById(`recapErr${suffix}`);
        if (errorElement) {
          errorElement.style.visibility = 'visible';
        }
        return false;
      }
      return true;
    };

    (window as any).validateEmail409531000042578178 = function () {
      const form = document.forms.namedItem(formName) as HTMLFormElement;
      if (!form) return true;
      const emailFld = form.querySelectorAll('[data-ftype=email]');
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
          const domain = emailVal.split('@')[1].toLowerCase();
          const forbidden = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'live.com', 'icloud.com'];
          if (forbidden.includes(domain)) {
            alert('Please enter a business email address. Personal emails (@' + domain + ') are not accepted.');
            (emailFld[i] as HTMLInputElement).focus();
            return false;
          }
        }
      }
      return true;
    };

    (window as any).checkMandatory409531000042578178 = function () {
      const mndFileds = ['Company', 'Last Name', 'Designation', 'LEADCF8', 'Mobile', 'LEADCF19', 'LEADCF123'];
      const fldLangVal = ['Company Name', 'Name', 'Role', 'Business Email', 'Mobile', 'Annual Revenue', 'How We Can Help You'];
      const form = document.forms.namedItem(formName) as HTMLFormElement;
      if (!form) return false;

      for (let i = 0; i < mndFileds.length; i++) {
        const fieldObj = form.elements.namedItem(mndFileds[i]) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
        if (fieldObj) {
          if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length === 0) {
            alert(fldLangVal[i] + ' cannot be empty.');
            fieldObj.focus();
            return false;
          } else if (fieldObj.nodeName === 'SELECT') {
            const selectField = fieldObj as HTMLSelectElement;
            if (selectField.options[selectField.selectedIndex].value === '' || selectField.options[selectField.selectedIndex].value === '-None-') {
              alert(fldLangVal[i] + ' cannot be empty.');
              fieldObj.focus();
              return false;
            }
          }
        }
      }

      const mobileFld = form.elements.namedItem('Mobile') as HTMLInputElement;
      if (mobileFld) {
        const v = mobileFld.value.replace(/\D/g, '');
        if (v.length !== 10) {
          alert('Mobile number must be exactly 10 digits.');
          mobileFld.focus();
          return false;
        }
      }

      if ((window as any).validateEmail409531000042578178 && !(window as any).validateEmail409531000042578178()) return false;
      if ((window as any).reCaptchaAlert409531000042578178 && !(window as any).reCaptchaAlert409531000042578178()) return false;

      (window as any).trackVisitor409531000042578178?.();
      (window as any).sendEmail?.();
      const submitButton = document.querySelector('.formsubmit-light') as HTMLButtonElement;
      if (submitButton) {
        submitButton.setAttribute('disabled', 'true');
      }
      return true;
    };

    (window as any).sendEmail = function () {
      const form = document.forms.namedItem(formName) as HTMLFormElement;
      if (!form) return;
      const formData = new FormData(form);

      fetch('https://agsuitetech.com/pricing/form_process_contact.php', {
        method: 'POST',
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          console.log('Internal processing successful');
        })
        .catch(error => {
          console.error('Error in internal processing:', error);
        });
    };

    (window as any).trackVisitor409531000042578178 = function () {
      try {
        if ((window as any).$zoho && (window as any).$zoho.salesiq) {
          const form = document.forms.namedItem(formName) as HTMLFormElement;
          if (form) {
            const LDTuvidObj = form.elements.namedItem('LDTuvid') as HTMLInputElement;
            if (LDTuvidObj) {
              LDTuvidObj.value = (window as any).$zoho.salesiq.visitor.uniqueid();
            }
            const nameObj = form.elements.namedItem('Last Name') as HTMLInputElement;
            const emailObj = form.elements.namedItem('LEADCF8') as HTMLInputElement;
            if (nameObj) {
              (window as any).$zoho.salesiq.visitor.name(nameObj.value);
            }
            if (emailObj) {
              (window as any).$zoho.salesiq.visitor.email(emailObj.value);
            }
          }
        }
      } catch (e) {
        console.error('Zoho Tracking Error:', e);
      }
      return true;
    };

    // Handle reCAPTCHA rendering for SPA navigation
    const renderRecaptcha = () => {
      const container = document.getElementById(`recap${suffix}`);
      if ((window as any).grecaptcha && container) {
        try {
          // Check if already rendered
          if (container.children.length > 0) return;

          (window as any).grecaptcha.render(`recap${suffix}`, {
            'sitekey': '6LeWKowtAAAAACYRbbynrmgj7_9Oiqz-QvTAEZb7',
            'theme': 'light',
            'callback': (window as any).rccallback409531000042578178
          });
        } catch (e) {
          console.error("reCAPTCHA render error:", e);
        }
      }
    };

    if ((window as any).grecaptcha) {
      if ((window as any).grecaptcha.ready) {
        (window as any).grecaptcha.ready(renderRecaptcha);
      } else {
        renderRecaptcha();
      }
    } else {
      const interval = setInterval(() => {
        if ((window as any).grecaptcha) {
          if ((window as any).grecaptcha.ready) {
            (window as any).grecaptcha.ready(renderRecaptcha);
          } else {
            renderRecaptcha();
          }
          clearInterval(interval);
        }
      }, 300);
      setTimeout(() => clearInterval(interval), 5000);
    }
  }, []);

  if (!mounted) return null;

  return (
    <section id="contact-form" className="relative pt-2 pb-6 sm:pt-3 sm:pb-8 lg:pt-4 lg:pb-10 min-h-[calc(100vh-80px)] flex items-start justify-center overflow-hidden bg-white scroll-mt-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[130px] translate-y-1/2 -translate-x-1/4 pointer-events-none opacity-60"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left Column: Heading and Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight leading-tight">
              Let's Architect <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800">
                Your Digital Future
              </span>
            </h2>

            <div className="space-y-3 text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed max-w-lg mb-5">
              <p>Ready to streamline your business? Our experts are standing by to help you unlock the full power of Zoho and Oracle NetSuite.</p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-5 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              <Image src="/images/netsuiteimages/netsuitelogos/netsuitepartner1.png" alt="NetSuite Partner" width={140} height={45} className="h-8 sm:h-9 w-auto object-contain" />
              <Image src="/images/zoho-logos/zoho premium.png" alt="Zoho Partner" width={130} height={35} className="h-7 sm:h-8 w-auto object-contain" />
            </div>
          </motion.div>

          {/* Right Column: The Modern Zoho Web Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-600 rounded-3xl blur-3xl opacity-[0.03] -rotate-3 pointer-events-none"></div>
            <div className="relative bg-white border border-gray-100 rounded-3xl p-4 sm:p-5 lg:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden">
              {/* Form Heading */}
              <div className="mb-3 text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent tracking-tight">Get in Touch</h3>
              </div>

              <form
                id="webform409531000047791096"
                action="https://crm.zoho.in/crm/WebToLeadForm"
                name="WebToLeads409531000047791096"
                method="POST"
                onSubmit={(e) => {
                  if ((window as any).checkMandatory409531000047791096 && !(window as any).checkMandatory409531000047791096()) {
                    e.preventDefault();
                    return;
                  }
                  const targetForm = e.currentTarget;
                  const formData = new FormData(targetForm);
                  fetch('/api/contact/zoho-notification', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      name: formData.get('Last Name'),
                      email: formData.get('Email'),
                      mobile: formData.get('Mobile'),
                      role: formData.get('Designation'),
                      company: formData.get('Company'),
                      services: formData.getAll('LEADCF166'),
                      revenue: formData.get('LEADCF19'),
                      hearAbout: formData.get('LEADCF127'),
                      message: formData.get('LEADCF123'),
                      subjectTitle: 'NetSuite Contact us Form Enquiry'
                    })
                  }).catch(() => {});
                }}
                acceptCharset="UTF-8"
                className="space-y-3"
              >
                {/* Zoho CRM Hidden Fields */}
                <input type="text" className="hidden" name="xnQsjsdp" defaultValue="e79cbdec5c6e5b7d7f71b6fd074e22822590c7d5f2b4c7d541bbbb65cad7c1e9" readOnly />
                <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
                <input type="text" className="hidden" name="xmIwtLD" defaultValue="07822c70b4131fef446a0a686c99d5195d6d6ddfa0431c1f0eeb3f080cc03771374f84de08a3fd4604be9855603d3099" readOnly />
                <input type="text" className="hidden" name="Lead Source" value="Web to Leads" readOnly />
                <input type="text" className="hidden" name="actionType" defaultValue="TGVhZHM=" readOnly />
                <input type="text" className="hidden" name="returnURL" defaultValue="https://www.agsuite.tech/thank-you" readOnly />
                <input type="text" className="hidden" id="ldeskuid" name="ldeskuid" readOnly />
                <input type="text" className="hidden" id="LDTuvid" name="LDTuvid" readOnly />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Full Name */}
                  <div>
                    <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider mb-1">Full Name *</label>
                    <input type="text" name="Last Name" required className="w-full bg-blue-50/30 border border-transparent focus:border-blue-600 focus:bg-white rounded-lg px-3 py-2 text-gray-900 transition-all outline-none text-xs" placeholder="John Doe" />
                  </div>

                  {/* Business Email */}
                  <div>
                    <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider mb-1">Business Email *</label>
                    <input type="email" data-ftype="email" name="LEADCF8" required className="w-full bg-blue-50/30 border border-transparent focus:border-blue-600 focus:bg-white rounded-lg px-3 py-2 text-gray-900 transition-all outline-none text-xs" placeholder="john@company.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Role */}
                  <div>
                    <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider mb-1">Job Title *</label>
                    <input type="text" name="Designation" required className="w-full bg-blue-50/30 border border-transparent focus:border-blue-600 focus:bg-white rounded-lg px-3 py-2 text-gray-900 transition-all outline-none text-xs" placeholder="Director" />
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider mb-1">Mobile *</label>
                    <input type="tel" name="Mobile" required className="w-full bg-blue-50/30 border border-transparent focus:border-blue-600 focus:bg-white rounded-lg px-3 py-2 text-gray-900 transition-all outline-none text-xs" placeholder="+91 00000 00000" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Company */}
                  <div>
                    <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider mb-1">Company Name *</label>
                    <input type="text" name="Company" required className="w-full bg-blue-50/30 border border-transparent focus:border-blue-600 focus:bg-white rounded-lg px-3 py-2 text-gray-900 transition-all outline-none text-xs" placeholder="Company Inc." />
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider mb-1">Service *</label>
                    <MultiSelectDropdown
                      id="LEADCF5"
                      name="LEADCF5"
                      placeholder="Select Service"
                      bgClassName="bg-blue-50/30 border border-transparent focus:border-blue-600 focus:bg-white text-xs py-1.5 px-3 rounded-lg"
                      textColorClassName="text-gray-900"
                      options={[
                        "Licenses",
                        "AMC",
                        "NetSuite Product /Services",
                        "Zoho Products/Services",
                      ]}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Annual Revenue */}
                  <div>
                    <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider mb-1">Annual Revenue *</label>
                    <div className="relative">
                      <select name="LEADCF19" required defaultValue="" onChange={(e) => { (e.target as any).ariaSelected = "true"; (window as any).addAriaSelected409531000042578178?.(); }} className="w-full bg-blue-50/30 border border-transparent focus:border-blue-600 focus:bg-white rounded-lg px-3 py-2 text-gray-900 transition-all outline-none appearance-none cursor-pointer text-xs">
                        <option value="" disabled>Select Revenue</option>
                        <option value="Less than $ 1M">Less than $ 1M</option>
                        <option value="$ 1M - 2.5M">$ 1M - 2.5M</option>
                        <option value="$ 2.5M - 5M">$ 2.5M - 5M</option>
                        <option value="$ 5M - 10M">$ 5M - 10M</option>
                        <option value="$ 10M - 15M">$ 10M - 15M</option>
                        <option value="$ 15M - 25M">$ 15M - 25M</option>
                        <option value="$ 25M - 50M">$ 25M - 50M</option>
                        <option value="$ 50M - 100M">$ 50M - 100M</option>
                        <option value="$ 100M - 250M">$ 100M - 250M</option>
                        <option value="More than $ 250M">More than $ 250M</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>

                  {/* Referral Source */}
                  <div>
                    <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider mb-1">Referral Source</label>
                    <div className="relative">
                      <select name="LEADCF127" defaultValue="" onChange={(e) => { (e.target as any).ariaSelected = "true"; (window as any).addAriaSelected409531000042578178?.(); }} className="w-full bg-blue-50/30 border border-transparent focus:border-blue-600 focus:bg-white rounded-lg px-3 py-2 text-gray-900 transition-all outline-none appearance-none cursor-pointer text-xs">
                        <option value="" disabled>Select Option</option>
                        <option value="-None-">-None-</option>
                        <option value="Email">Email</option>
                        <option value="Event">Event</option>
                        <option value="Friend /Associate">Friend /Associate</option>
                        <option value="Search">Search</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Referral">Referral</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Requirements */}
                <div>
                  <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider mb-1">How We Can Help You *</label>
                  <textarea name="LEADCF123" required rows={2} className="w-full bg-blue-50/30 border border-transparent focus:border-blue-600 focus:bg-white rounded-lg px-3 py-1.5 text-gray-900 transition-all outline-none resize-none text-xs" placeholder="How We Can Help You*"></textarea>
                </div>

                {/* Google reCAPTCHA */}
                <div className="captcha-area transform scale-[0.85] origin-left my-1">
                  <div data-sitekey="6LeWKowtAAAAACYRbbynrmgj7_9Oiqz-QvTAEZb7" data-theme="light" data-callback="rccallback409531000047791096" captcha-verified="false" id="recap409531000047791096" className="g-recaptcha"></div>
                  <div id="recapErr409531000047791096" style={{ fontSize: '10px', color: 'red', marginTop: '2px', visibility: 'hidden' }}>Please verify that you are not a robot.</div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  id="formsubmit"
                  className="formsubmit-light w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-md shadow-blue-200 transition-all duration-300 hover:scale-[1.01] transform active:scale-[0.99] text-xs uppercase tracking-wider cursor-pointer"
                >
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      <Script src="https://www.google.com/recaptcha/api.js" />
      {/* Zoho CRM Web-to-Lead Analytics */}
      <Script id="wf_anal" src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=9928b42954d320356885bb078ab0c3360c484e291c9e63097274653a3641def28b6749111011c9996c331f7836c7a2e8gid872197a4e4b8e909c249edeced5a19f1d2f950e702a3b0289fff2eacb04b67b1gid273da06b7bb3796c20973a82554d312ddd92ec671fa5a6016c080db58e6ccf5agidf40ec6d150665170b0cb2e595aa0cb939a02ed9792327816f3776b9eead7fe3a&tw=48a179f0eb3b7de8eccbf4bf9c2ace934d9e1bdc655d88e07911628e929af667&version=v2" />
    </section>

  );
}




