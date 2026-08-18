"use client";
import Script from "next/script";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FooterFormSectionDark() {
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
      const submitButton = document.querySelector('.formsubmit-dark') as HTMLButtonElement;
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
            'sitekey': '6LfSYoItAAAAAGehWFygolLQdx9Sk2qkRDcG6_C_',
            'theme': 'dark',
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
    <section id="contact-us" className="relative py-10 sm:py-12 overflow-hidden bg-[#0a0a0a]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[130px] translate-y-1/2 -translate-x-1/4 pointer-events-none opacity-60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Left Column: Heading and Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
              Let's Architect <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-200">
                Your Digital Future
              </span>
            </h2>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg mb-6">
              <p>Ready to streamline your business? Our experts are standing by to help you unlock the full power of Zoho and Oracle NetSuite.</p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 opacity-60 grayscale brightness-150 hover:grayscale-0 transition-all duration-500">
              <Image src="/images/netsuiteimages/netsuitelogos/netsuitepartner1.png" alt="NetSuite Partner" width={160} height={50} className="h-10 w-auto object-contain" />
              <Image src="/images/Homeicons/Zohoffice/zoho.png" alt="Zoho Partner" width={140} height={40} className="h-8 w-auto object-contain" />
            </div>
          </motion.div>

          {/* Right Column: The Modern Zoho Web Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-400 rounded-3xl blur-3xl opacity-[0.05] -rotate-3"></div>
            <div className="relative bg-[#1a1a1a] border border-white/10 rounded-3xl p-5 sm:p-6 lg:p-7 shadow-2xl overflow-hidden backdrop-blur-sm">
              {/* Form Heading */}
              <div className="mb-4 text-center lg:text-left">
                <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">Get in Touch</h3>
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
                className="space-y-6"
              >
                {/* Zoho CRM Hidden Fields */}
                <input type="text" className="hidden" name="xnQsjsdp" defaultValue="d53cf6d2d91bd2c21647f1856ba77f750df004edeb1b81d56dde47d4e8ff036e" readOnly />
                <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
                <input type="text" className="hidden" name="xmIwtLD" defaultValue="0dbca13c9e4fae22e074d8e1a51df222b069fd131b4ed865fd39ad02a316b18241f1902d40a5e065b29b169b79077aff" readOnly />
                <input type="text" className="hidden" name="actionType" defaultValue="TGVhZHM=" readOnly />
                <input type="text" className="hidden" name="returnURL" defaultValue="https://www.agsuite.tech/thank-you" readOnly />
                <input type="text" className="hidden" id="ldeskuid" name="ldeskuid" readOnly />
                <input type="text" className="hidden" id="LDTuvid" name="LDTuvid" readOnly />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1.5">Full Name *</label>
                    <input type="text" name="Last Name" required className="w-full bg-white/5 border-2 border-transparent focus:border-blue-500 focus:bg-[#252525] rounded-xl px-4 py-3 text-white transition-all outline-none text-sm" placeholder="John Doe" />
                  </div>

                  {/* Business Email */}
                  <div>
                    <label className="block text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1.5">Business Email *</label>
                    <input type="email" data-ftype="email" name="LEADCF8" required className="w-full bg-white/5 border-2 border-transparent focus:border-blue-500 focus:bg-[#252525] rounded-xl px-4 py-3 text-white transition-all outline-none text-sm" placeholder="john@company.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Role */}
                  <div>
                    <label className="block text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1.5">Job Title *</label>
                    <input type="text" name="Designation" required className="w-full bg-white/5 border-2 border-transparent focus:border-blue-500 focus:bg-[#252525] rounded-xl px-4 py-3 text-white transition-all outline-none text-sm" placeholder="Director" />
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className="block text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1.5">Mobile *</label>
                    <input type="tel" name="Mobile" required className="w-full bg-white/5 border-2 border-transparent focus:border-blue-500 focus:bg-[#252525] rounded-xl px-4 py-3 text-white transition-all outline-none text-sm" placeholder="+91 00000 00000" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company */}
                  <div>
                    <label className="block text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1.5">Company Name *</label>
                    <input type="text" name="Company" required className="w-full bg-white/5 border-2 border-transparent focus:border-blue-500 focus:bg-[#252525] rounded-xl px-4 py-3 text-white transition-all outline-none text-sm" placeholder="Company Inc." />
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label className="block text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1.5">Service *</label>
                    <div className="relative">
                      <select name="LEADCF5" defaultValue="" onChange={(e) => { (e.target as any).ariaSelected = "true"; (window as any).addAriaSelected409531000042578178?.(); }} className="w-full bg-white/5 border-2 border-transparent focus:border-blue-500 focus:bg-[#252525] rounded-xl px-4 py-3 text-white transition-all outline-none appearance-none cursor-pointer text-sm">
                        <option value="" disabled>Select Service</option>
                        <option value="Licenses">Licenses</option>
                        <option value="AMC">AMC</option>
                        <option value="NetSuite Product /Services">NetSuite Product /Services</option>
                        <option value="Zoho Products/Services">Zoho Products/Services</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Annual Revenue */}
                  <div>
                    <label className="block text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1.5">Annual Revenue *</label>
                    <div className="relative">
                      <select name="LEADCF19" required defaultValue="" onChange={(e) => { (e.target as any).ariaSelected = "true"; (window as any).addAriaSelected409531000042578178?.(); }} className="w-full bg-white/5 border-2 border-transparent focus:border-blue-500 focus:bg-[#252525] rounded-xl px-4 py-3 text-white transition-all outline-none appearance-none cursor-pointer text-sm">
                        <option value="" disabled>Select Revenue</option>
                        <option value="Less than 8 Cr ($ 1M)">Less than 8 Cr ($ 1M)</option>
                        <option value="8 - 20 Cr ($ 1M - 2.5M)">8 - 20 Cr ($ 1M - 2.5M)</option>
                        <option value="20 - 40 Cr ($ 2.5M - 5M)">20 - 40 Cr ($ 2.5M - 5M)</option>
                        <option value="40 - 80 Cr ($ 5M - 10M)">40 - 80 Cr ($ 5M - 10M)</option>
                        <option value="80 - 120 Cr ($ 10M - 15M)">80 - 120 Cr ($ 10M - 15M)</option>
                        <option value="120 - 200 Cr ($ 15M - 25M)">120 - 200 Cr ($ 15M - 25M)</option>
                        <option value="200 - 400 Cr ($ 25M - 50M)">200 - 400 Cr ($ 25M - 50M)</option>
                        <option value="400 - 800 Cr ($ 50M - 100M)">400 - 800 Cr ($ 50M - 100M)</option>
                        <option value="800 - 2000 Cr ($ 100M - 250M)">800 - 2000 Cr ($ 100M - 250M)</option>
                        <option value="More than 2000 Cr ($ 250M+)">More than 2000 Cr ($ 250M+)</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>

                  {/* Referral Source */}
                  <div>
                    <label className="block text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1.5">Referral Source</label>
                    <div className="relative">
                      <select name="LEADCF127" defaultValue="" onChange={(e) => { (e.target as any).ariaSelected = "true"; (window as any).addAriaSelected409531000042578178?.(); }} className="w-full bg-white/5 border-2 border-transparent focus:border-blue-500 focus:bg-[#252525] rounded-xl px-4 py-3 text-white transition-all outline-none appearance-none cursor-pointer text-sm">
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
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Requirements */}
                <div>
                  <label className="block text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1.5">How We Can Help You *</label>
                  <textarea name="LEADCF123" required rows={2} className="w-full bg-white/5 border-2 border-transparent focus:border-blue-500 focus:bg-[#252525] rounded-xl px-4 py-3 text-white transition-all outline-none resize-none text-sm" placeholder="How We Can Help You*"></textarea>
                </div>

                {/* Google reCAPTCHA */}
                <div className="captcha-area transform scale-[0.9] origin-left">
                  <div data-sitekey="6LfSYoItAAAAAGehWFygolLQdx9Sk2qkRDcG6_C_" data-theme="dark" data-callback="rccallback409531000047791096" captcha-verified="false" id="recap409531000047791096" className="g-recaptcha"></div>
                  <div id="recapErr409531000047791096" style={{ fontSize: '10px', color: '#ff4d4d', marginTop: '4px', visibility: 'hidden' }}>Please verify that you are not a robot.</div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  id="formsubmit"
                  className="formsubmit-dark w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold rounded-xl shadow-xl shadow-blue-500/20 transition-all duration-300 hover:scale-[1.01] transform active:scale-[0.99] text-sm uppercase tracking-widest cursor-pointer"
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
      <Script id="wf_anal" src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=dc6cfe6eaa303bd5d195bb5352719bba230c529eae5f6f0823d0a841f9dd57657e6049706260d6effe692960c6c5bab7gid6711126e0f954ae10107c9d2bd1b386506273b37e6e0265531ba837d5c4ed25dgid10b59705091816e9551c4ebc62e953e4111c79398428255d38ea16f03d7b9f05gid0c55c5d686e2e3f755b127157834bc2774e542abc82e5c1ce5eba2a071c6fc31&tw=70c0fd3034b5b59f1ac7be0a50f49b22d50d34cb8687eb35e3649323a8c88143&version=v2" />
    </section>
  );
}




