"use client";
import Script from "next/script";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FooterFormSectionDark() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    // Define all form validation functions globally
    (window as any).addAriaSelected409531000000325116 = function () {
      const optionElem = (event as any).target;
      const previousSelectedOption = optionElem.querySelector('[aria-selected=true]');
      if (previousSelectedOption) {
        previousSelectedOption.removeAttribute('aria-selected');
      }
      optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected = 'true';
    };

    (window as any).rccallback409531000000325116 = function () {
      if (document.getElementById('recap409531000000325116')) {
        document.getElementById('recap409531000000325116')?.setAttribute('captcha-verified', 'true');
      }
      const errorElement = document.getElementById('recapErr409531000000325116');
      if (errorElement && errorElement.style.visibility === 'visible') {
        errorElement.style.visibility = 'hidden';
      }
    };

    (window as any).reCaptchaAlert409531000000325116 = function () {
      const recap = document.getElementById('recap409531000000325116');
      if (recap && recap.getAttribute('captcha-verified') === 'false') {
        const errorElement = document.getElementById('recapErr409531000000325116');
        if (errorElement) {
          errorElement.style.visibility = 'visible';
        }
        return false;
      }
      return true;
    };

    (window as any).validateEmail409531000000325116 = function () {
      const form = document.forms.namedItem('WebToLeads409531000000325116') as HTMLFormElement;
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
        }
      }
      return true;
    };

    (window as any).checkMandatory409531000000325116 = function () {
      const mndFileds = ['Company', 'Last Name', 'Designation', 'Email', 'Mobile', 'Description', 'LEADCF5', 'LEADCF40'];
      const fldLangVal = ['Company Name', 'Name', 'Role', 'Business Email', 'Mobile', 'Requirements', 'Service Interest', 'Annual Revenue'];
      const form = document.forms.namedItem('WebToLeads409531000000325116') as HTMLFormElement;
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
      if ((window as any).validateEmail409531000000325116 && !(window as any).validateEmail409531000000325116()) return false;
      if ((window as any).reCaptchaAlert409531000000325116 && !(window as any).reCaptchaAlert409531000000325116()) return false;

      (window as any).trackVisitor409531000000325116?.();
      (window as any).sendEmail?.();
      const submitButton = document.querySelector('.formsubmit-dark') as HTMLButtonElement;
      if (submitButton) {
        submitButton.setAttribute('disabled', 'true');
      }
      return true;
    };

    (window as any).sendEmail = function () {
      const form = document.forms.namedItem('WebToLeads409531000000325116') as HTMLFormElement;
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

    (window as any).trackVisitor409531000000325116 = function () {
      try {
        if ((window as any).$zoho && (window as any).$zoho.salesiq) {
          const form = document.forms.namedItem('WebToLeads409531000000325116') as HTMLFormElement;
          if (form) {
            const LDTuvidObj = form.elements.namedItem('LDTuvid') as HTMLInputElement;
            if (LDTuvidObj) {
              LDTuvidObj.value = (window as any).$zoho.salesiq.visitor.uniqueid();
            }
            const nameObj = form.elements.namedItem('Last Name') as HTMLInputElement;
            const emailObj = form.elements.namedItem('Email') as HTMLInputElement;
            if (nameObj) {
              (window as any).$zoho.salesiq.visitor.name(nameObj.value);
            }
            if (emailObj) {
              (window as any).$zoho.salesiq.visitor.email(emailObj.value);
            }
          }
        }
      } catch (err) { }
    };
  }, []);

  if (!mounted) return null;

  return (
    <section id="contact-us" className="relative py-24 overflow-hidden bg-[#0a0a0a]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[130px] translate-y-1/2 -translate-x-1/4 pointer-events-none opacity-60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Heading and Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-blue-100 text-xs font-semibold tracking-widest uppercase">Contact Us</span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.05]">
              Let's Architect <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-200">
                Your Digital Future
              </span>
            </h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-lg mb-10">
              <p>Ready to streamline your business? Our experts are standing by to help you unlock the full power of Zoho and Oracle NetSuite.</p>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Book a Consultation</p>
                  <p className="text-2xl font-bold text-white">+91 909 601 2100</p>
                </div>
              </div>
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
            <div className="absolute inset-0 bg-blue-400 rounded-[3rem] blur-3xl opacity-[0.05] -rotate-3"></div>
            <div className="relative bg-[#1a1a1a] border border-white/10 rounded-[3rem] p-8 lg:p-12 shadow-2xl overflow-hidden backdrop-blur-sm">
              {/* Form Heading */}
              <div className="mb-10 text-center lg:text-left">
                <h3 className="text-3xl font-bold text-white mb-2">Get in Touch</h3>
                <p className="text-gray-400">Fill in your details and we'll reach out within 24 hours</p>
              </div>

              <form
                id="webform409531000000325116"
                action="https://crm.zoho.in/crm/WebToLeadForm"
                name="WebToLeads409531000000325116"
                method="POST"
                onSubmit={(e) => {
                  if ((window as any).checkMandatory409531000000325116 && !(window as any).checkMandatory409531000000325116()) {
                    e.preventDefault();
                  }
                }}
                acceptCharset="UTF-8"
                className="space-y-6"
              >
                {/* Zoho CRM Hidden Fields */}
                <input type="text" className="hidden" name="xnQsjsdp" defaultValue="cae9ae065232fde2e40c34423041df835a4066ff2103c546e198d684b35e9861" readOnly />
                <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
                <input type="text" className="hidden" name="xmIwtLD" defaultValue="3820b2b7a84f952a9adb8f71d02ba0d6e9247f59314524fd5d4528cf4dff99b516b0d501ae4661e854a71c2dfb2b5263" readOnly />
                <input type="text" className="hidden" name="actionType" defaultValue="TGVhZHM=" readOnly />
                <input type="text" className="hidden" name="returnURL" defaultValue="https://agsuitetech.com/contact-us/thank-you.php" readOnly />
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
                    <input type="email" data-ftype="email" name="Email" required className="w-full bg-white/5 border-2 border-transparent focus:border-blue-500 focus:bg-[#252525] rounded-xl px-4 py-3 text-white transition-all outline-none text-sm" placeholder="john@company.com" />
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
                    <label className="block text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1.5">Solution *</label>
                    <div className="relative">
                      <select name="LEADCF5" required defaultValue="" onChange={(window as any).addAriaSelected409531000000325116} className="w-full bg-white/5 border-2 border-transparent focus:border-blue-500 focus:bg-[#252525] rounded-xl px-4 py-3 text-white transition-all outline-none appearance-none cursor-pointer text-sm">
                        <option value="" disabled>Select Solution</option>
                        <option value="NetSuite&#x20;Product&#x20;&#x2f;Services">Oracle NetSuite</option>
                        <option value="Zoho&#x20;Products&#x2f;Services">Zoho Suite</option>
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
                      <select name="LEADCF40" required defaultValue="" onChange={(window as any).addAriaSelected409531000000325116} className="w-full bg-white/5 border-2 border-transparent focus:border-blue-500 focus:bg-[#252525] rounded-xl px-4 py-3 text-white transition-all outline-none appearance-none cursor-pointer text-sm">
                        <option value="" disabled>Select Revenue</option>
                        <option value="Under&#x20;&#x24;500K">Under $500K</option>
                        <option value="&#x24;500k&#x20;to&#x20;&#x24;1M">$500k to $1M</option>
                        <option value="&#x24;1M&#x20;to&#x20;&#x24;2M">$1M to $2M</option>
                        <option value="&#x24;2M&#x20;to&#x20;&#x24;5M">$2M to $5M</option>
                        <option value="&#x24;5M&#x20;to&#x20;&#x24;10M">$5M to $10M</option>
                        <option value="&#x24;10M+">$10M+</option>
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
                      <select name="LEADCF41" defaultValue="" onChange={(window as any).addAriaSelected409531000000325116} className="w-full bg-white/5 border-2 border-transparent focus:border-blue-500 focus:bg-[#252525] rounded-xl px-4 py-3 text-white transition-all outline-none appearance-none cursor-pointer text-sm">
                        <option value="" disabled>Select Option</option>
                        <option value="Email">Email</option>
                        <option value="Event">Event</option>
                        <option value="Friend/Associate">Friend/Associate</option>
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

                <div className="hidden">
                  <select name="Lead Source" defaultValue="Website">
                    <option value="Website">Website</option>
                  </select>
                </div>

                {/* Requirements */}
                <div>
                  <label className="block text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1.5">Requirements *</label>
                  <textarea name="Description" required rows={2} className="w-full bg-white/5 border-2 border-transparent focus:border-blue-500 focus:bg-[#252525] rounded-xl px-4 py-3 text-white transition-all outline-none resize-none text-sm" placeholder="Tell us how we can help..."></textarea>
                </div>

                {/* Google reCAPTCHA */}
                <div className="captcha-area transform scale-[0.9] origin-left">
                  <div className="g-recaptcha" data-sitekey="6Lct5nwkAAAAADdrNkjf_H3jp-0XE9dUqAjgJXQ3" data-theme="dark" data-callback="rccallback409531000000325116" captcha-verified="false" id="recap409531000000325116"></div>
                  <div id="recapErr409531000000325116" style={{ fontSize: '10px', color: '#ff4d4d', marginTop: '4px', visibility: 'hidden' }}>Please verify that you are not a robot.</div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="formsubmit-dark w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold rounded-xl shadow-xl shadow-blue-500/20 transition-all duration-300 hover:scale-[1.01] transform active:scale-[0.99] text-sm"
                >
                  Send Message Now
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      <Script src="https://www.google.com/recaptcha/api.js" />
    </section>
  );
}
