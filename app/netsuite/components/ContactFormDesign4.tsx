"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Script from "next/script";

export default function ContactFormDesign4() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

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
      const submitButton = document.querySelector('.formsubmit-ns') as HTMLButtonElement;
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

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if ((window as any).checkMandatory409531000000325116 && !(window as any).checkMandatory409531000000325116()) {
      e.preventDefault();
    }
  };

  if (!isClient) return null;

  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="lazyOnload"
      />
      <section id="contact-form" className="relative py-24 bg-[#0a0a0a] overflow-hidden scroll-mt-36">
        <div className="absolute top-0 left-0 w-[900px] h-[900px] bg-blue-500/30 rounded-full blur-[150px] -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-500/25 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/3"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="rounded-[40px] bg-[#0d0d0d]/70 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-white/5 rounded-[40px]"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
              {/* Left Side - Info */}
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.12,
                      delayChildren: 0.2
                    }
                  }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col h-full justify-between p-8 lg:p-14"
              >
                <div>
                  <motion.h2 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.15]"
                  >
                    Ready to Transform{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                      Your Business?
                    </span>
                  </motion.h2>

                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                    className="space-y-4 mb-10 text-gray-300"
                  >
                    <p className="text-lg">Take the first step towards streamlined operations and accelerated growth with Oracle NetSuite.</p>
                  </motion.div>

                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                    className="mb-10"
                  >
                    <Image src="/images/netsuiteimages/netsuitelogos/netsuitepartner1.png" alt="NetSuite Partner" width={220} height={70} className="h-16 w-auto object-contain" />
                  </motion.div>

                  <div className="grid grid-cols-2 gap-4 mb-8 text-white">
                    <motion.div 
                      variants={{
                        hidden: { opacity: 0, scale: 0.95, y: 20 },
                        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
                      }}
                      className="p-5 rounded-2xl bg-white/5 border border-white/10"
                    >
                      <p className="text-3xl font-bold text-blue-400 mb-1">180+</p>
                      <p className="text-gray-400 text-sm">Successful Implementations</p>
                    </motion.div>
                    <motion.div 
                      variants={{
                        hidden: { opacity: 0, scale: 0.95, y: 20 },
                        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }
                      }}
                      className="p-5 rounded-2xl bg-white/5 border border-white/10"
                    >
                      <p className="text-3xl font-bold text-purple-400 mb-1">50+</p>
                      <p className="text-gray-400 text-sm">NetSuite Experts</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative bg-white rounded-r-[40px] p-8 lg:p-12 h-full"
              >
                <div className="relative z-10">
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Get Expert Guidance</h3>
                  <p className="text-gray-600 mb-10">Fill in your details and we'll reach out within 24 hours</p>
                </div>

                <form
                  action="https://crm.zoho.in/crm/WebToLeadForm"
                  name="WebToLeads409531000000325116"
                  method="POST"
                  onSubmit={handleFormSubmit}
                  acceptCharset="UTF-8"
                  className="space-y-5"
                >
                  <input type="text" className="hidden" name="xnQsjsdp" defaultValue="cae9ae065232fde2e40c34423041df835a4066ff2103c546e198d684b35e9861" readOnly />
                  <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
                  <input type="text" className="hidden" name="xmIwtLD" defaultValue="3820b2b7a84f952a9adb8f71d02ba0d6e9247f59314524fd5d4528cf4dff99b516b0d501ae4661e854a71c2dfb2b5263" readOnly />
                  <input type="text" className="hidden" name="actionType" defaultValue="TGVhZHM=" readOnly />
                  <input type="text" className="hidden" name="returnURL" defaultValue="https://agsuitetech.com/contact-us/thank-you.php" readOnly />
                  <input type="text" className="hidden" id="ldeskuid" name="ldeskuid" readOnly />
                  <input type="text" className="hidden" id="LDTuvid" name="LDTuvid" readOnly />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">Full Name *</label>
                      <input type="text" name="Last Name" required className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none text-sm transition-all" placeholder="John Doe" />
                    </div>

                    <div>
                      <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">Business Email *</label>
                      <input type="email" data-ftype="email" name="Email" required className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none text-sm transition-all" placeholder="john@company.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">Role *</label>
                      <input type="text" name="Designation" required className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none text-sm transition-all" placeholder="Manager" />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">Mobile *</label>
                      <input type="tel" name="Mobile" required className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none text-sm transition-all" placeholder="+91 00000 00000" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">Company Name *</label>
                      <input type="text" name="Company" required className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none text-sm transition-all" placeholder="Company Inc." />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">Solution *</label>
                      <select name="LEADCF5" required defaultValue="" onChange={(e) => { (e.target as any).ariaSelected = "true"; (window as any).addAriaSelected409531000000325116?.(); }} className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none appearance-none cursor-pointer text-sm transition-all">
                        <option value="" disabled>Select Solution</option>
                        <option value="NetSuite&#x20;Product&#x20;&#x2f;Services">Oracle NetSuite</option>
                        <option value="Zoho&#x20;Products&#x2f;Services">Zoho Suite</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">Annual Revenue *</label>
                      <select name="LEADCF40" required defaultValue="" onChange={(e) => { (e.target as any).ariaSelected = "true"; (window as any).addAriaSelected409531000000325116?.(); }} className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none appearance-none cursor-pointer text-sm transition-all">
                        <option value="" disabled>Select Revenue</option>
                        <option value="Under&#x20;&#x24;500K">Under $500K</option>
                        <option value="&#x24;500k&#x20;to&#x20;&#x24;1M">$500k to $1M</option>
                        <option value="&#x24;1M&#x20;to&#x20;&#x24;2M">$1M to $2M</option>
                        <option value="&#x24;2M&#x20;to&#x20;&#x24;5M">$2M to $5M</option>
                        <option value="&#x24;5M&#x20;to&#x20;&#x24;10M">$5M to $10M</option>
                        <option value="&#x24;10M+">$10M+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">Referral Source</label>
                      <select name="LEADCF41" defaultValue="" onChange={(e) => { (e.target as any).ariaSelected = "true"; (window as any).addAriaSelected409531000000325116?.(); }} className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none appearance-none cursor-pointer text-sm transition-all">
                        <option value="" disabled>Select Option</option>
                        <option value="Email">Email</option>
                        <option value="Event">Event</option>
                        <option value="Friend/Associate">Friend/Associate</option>
                        <option value="Search">Search</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Referral">Referral</option>
                      </select>
                    </div>
                  </div>

                  <div className="hidden">
                    <select name="Lead Source" defaultValue="Website">
                      <option value="Website">Website</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">Requirements *</label>
                    <textarea name="Description" required rows={2} className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none placeholder-gray-400 resize-none text-sm transition-all" placeholder="Share your project details..." />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-1">
                    <div className="captcha-area transform scale-90 origin-left">
                      <div className="g-recaptcha" data-sitekey="6Lct5nwkAAAAADdrNkjf_H3jp-0XE9dUqAjgJXQ3" data-theme="light" data-callback="rccallback409531000000325116" captcha-verified="false" id="recap409531000000325116"></div>
                      <div id="recapErr409531000000325116" style={{ fontSize: '10px', color: '#ef4444', marginTop: '4px', visibility: 'hidden' }}>Please verify reCAPTCHA</div>
                    </div>

                    <button type="submit" className="w-full sm:w-auto px-10 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg hover:scale-[1.02] formsubmit-ns text-sm whitespace-nowrap">
                      Send Now
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
