"use client";
import Script from "next/script";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";

// Define global functions for the form
declare global {
  interface Window {
    addAriaSelected409531000000325116: () => void;
    rccallback409531000000325116: () => void;
    reCaptchaAlert409531000000325116: () => boolean;
    validateEmail409531000000325116: () => boolean;
    checkMandatory409531000000325116: () => boolean;
    validateNumber: (e: KeyboardEvent) => boolean;
    sendEmail: () => void;
    trackVisitor409531000000325116: () => void;
  }
}

export default function NetSuiteContactFormGradient() {
  useEffect(() => {
    // Define all form validation functions globally
    window.addAriaSelected409531000000325116 = function() {
      const optionElem = (event as Event & { target: HTMLSelectElement }).target;
      const previousSelectedOption = optionElem.querySelector('[aria-selected=true]');
      if(previousSelectedOption) {
        previousSelectedOption.removeAttribute('aria-selected');
      }
      optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected = 'true';
    };

    window.rccallback409531000000325116 = function() {
      if(document.getElementById('recap409531000000325116')) {
        document.getElementById('recap409531000000325116')?.setAttribute('captcha-verified', 'true');
      }
      const errorElement = document.getElementById('recapErr409531000000325116');
      if(errorElement && errorElement.style.visibility === 'visible') {
        errorElement.style.visibility = 'hidden';
      }
    };

    window.reCaptchaAlert409531000000325116 = function() {
      const recap = document.getElementById('recap409531000000325116');
      if(recap && recap.getAttribute('captcha-verified') === 'false') {
        const errorElement = document.getElementById('recapErr409531000000325116');
        if(errorElement) {
          errorElement.style.visibility = 'visible';
        }
        return false;
      }
      return true;
    };

    window.validateEmail409531000000325116 = function() {
      const form = document.forms.namedItem('WebToLeads409531000000325116') as HTMLFormElement;
      if (!form) return true;
      const emailFld = form.querySelectorAll('[ftype=email]');
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

    window.checkMandatory409531000000325116 = function() {
      const mndFileds = ['Company','Last Name','Designation','Email','Mobile','Description','LEADCF5','LEADCF40'];
      const fldLangVal = ['Company Name','Name','Role','Business Email','Mobile','Tell Us How We Can Help','Product / Services','Annual Revenue'];
      const form = document.forms.namedItem('WebToLeads409531000000325116') as HTMLFormElement;
      if (!form) return false;
      
      for(let i=0; i<mndFileds.length; i++) {
        const fieldObj = form.elements.namedItem(mndFileds[i]) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
        if(fieldObj) {
          if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length === 0) {
            alert(fldLangVal[i] + ' cannot be empty.');
            fieldObj.focus();
            return false;
          } else if(fieldObj.nodeName === 'SELECT') {
            const selectField = fieldObj as HTMLSelectElement;
            if(selectField.options[selectField.selectedIndex].value === '-None-') {
              alert(fldLangVal[i] + ' cannot be none.');
              fieldObj.focus();
              return false;
            }
          }
        }
      }
      window.trackVisitor409531000000325116();
      if(!window.validateEmail409531000000325116()) return false;
      if(!window.reCaptchaAlert409531000000325116()) return false;
      
      window.sendEmail();
      const submitButton = document.querySelector('.crmWebToEntityForm .formsubmit') as HTMLInputElement;
      if(submitButton) {
        submitButton.setAttribute('disabled', 'true');
      }
      return true;
    };

    window.validateNumber = function(e: KeyboardEvent) {
      const pattern = /^[0-9]$/;
      return pattern.test(e.key);
    };

    window.sendEmail = function() {
      const form = document.forms.namedItem('WebToLeads409531000000325116') as HTMLFormElement;
      if (!form) return;
      const formData = new FormData(form);
      
      fetch('https://agsuitetech.com/pricing/form_process.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          console.log('Email sent successfully.');
        } else {
          console.error('Failed to send email:', data.error);
        }
      })
      .catch(error => {
        console.error('Error while sending email:', error);
      });
    };

    window.trackVisitor409531000000325116 = function() {
      try {
        const zoho = (window as { $zoho?: { salesiq: { visitor: { uniqueid: () => string; email: (email: string) => void } } } }).$zoho;
        if(zoho) {
          const form = document.forms.namedItem('WebToLeads409531000000325116') as HTMLFormElement;
          if (form) {
            const LDTuvidObj = form.elements.namedItem('LDTuvid') as HTMLInputElement;
            if(LDTuvidObj) {
              LDTuvidObj.value = zoho.salesiq.visitor.uniqueid();
            }
            const emailObj = form.elements.namedItem('Email') as HTMLInputElement;
            if(emailObj) {
              zoho.salesiq.visitor.email(emailObj.value);
            }
          }
        }
      } catch(e) {
        console.log('Zoho tracking error:', e);
      }
    };
  }, []);

  return (
    <>
      {/* Load required scripts */}
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="lazyOnload"
      />
      
      <Script
        id="zoho-salesiq-footer"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            var $zoho = $zoho || {};
            $zoho.salesiq = $zoho.salesiq || {
              widgetcode: "siq35ed179fbb63b96bebd9bc669caab3cc7ab9252873ae18a7fd3bac7692c8ff19",
              values: {},
              ready: function(){}
            };
            var d = document;
            var s = d.createElement("script");
            s.type = "text/javascript";
            s.id = "zsiqscript";
            s.defer = true;
            s.src = "https://salesiq.zoho.in/widget";
            var t = d.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(s, t);
          `
        }}
      />
      
      <Script
        id="wf_anal_footer"
        src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=2ad153905083cc4b4058fa27687055376e156f7ad6e9fc52d9895986981cb6172bddf27a9051f3745fcf3d24b09fb012gidcf736cc89d868a9fa6150881def27ffe802f94e956bff6513de684e48d8b35c1gid0596f309f4dca6fd5d8b7704fd1d37b52bdbc54dd97c1957c613be2d12dd943agid1b08a4436f8cfc10239cf5e2aa7cda0a23e1cf9ad370739723a113c3f7318e99&tw=d44cee7b494604b05833cee35187d02e3ccf139f17b3bef4604b84b3f02bded7"
        strategy="lazyOnload"
      />

      {/* Vibrant Gradient Contact Form */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600">
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/85 to-slate-950/80" />

        {/* Decorative Blurs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
          <div className="flex flex-col items-center">
            
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Meet with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                  Our Team
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Let us show you how NetSuite can transform the way you govern and share your business data.
              </p>
            </motion.div>

            {/* Form Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full max-w-3xl"
            >
              <div className="relative bg-slate-900/70 backdrop-blur-2xl p-10 lg:p-12 rounded-3xl border border-white/20 shadow-2xl">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30" />
                
                <div className="relative">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
<div id="crmWebToEntityForm" class="zcwf_lblLeft crmWebToEntityForm">
<form id="webform409531000000325116" action="https://crm.zoho.in/crm/WebToLeadForm" name="WebToLeads409531000000325116" method="POST" onSubmit="javascript:document.charset='UTF-8'; return checkMandatory409531000000325116()" accept-charset="UTF-8">
 <input type="text" class="dsp" name="xnQsjsdp" value="cae9ae065232fde2e40c34423041df835a4066ff2103c546e198d684b35e9861">
 <input type="hidden" name="zc_gad" id="zc_gad" value="">
 <input type="text" class="dsp" name="xmIwtLD" value="3820b2b7a84f952a9adb8f71d02ba0d6e9247f59314524fd5d4528cf4dff99b516b0d501ae4661e854a71c2dfb2b5263">
 <input type="text" class="dsp" name="actionType" value="TGVhZHM=">
 <input type="text" class="dsp" name="returnURL" value="https&#x3a;&#x2f;&#x2f;agsuitetech.com&#x2f;contact-us&#x2f;thank-you.php">
<input type="text" class="dsp" id="ldeskuid" name="ldeskuid">
<input type="text" class="dsp" id="LDTuvid" name="LDTuvid">

<style>
.zcwf_title { 
  display: none;
}

.field-label {
  display: block;
  font-size: 11px;
  font-weight: 600;
  color: #e2e8f0 !important;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.agsuite_column { width: 50%; float: left; padding: 0 10px; margin-bottom: 20px; }
.agsuite_column-large { width: 100%; float: left; padding: 0 10px; margin-bottom: 20px; }
.agsuite_container::after { content: ""; display: table; clear: both; }

.agsuite_container input[type="text"], 
.agsuite_container textarea, 
.zcwf_col_fld_slt {
  width: 100%;
  padding: 16px 18px;
  font-size: 15px;
  background: rgba(15, 23, 42, 0.8) !important;
  border: 2px solid rgba(148, 163, 184, 0.2) !important;
  border-radius: 16px !important;
  color: #fff !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 500;
}

.agsuite_container input:focus, 
.agsuite_container textarea:focus, 
.zcwf_col_fld_slt:focus {
  outline: none !important;
  border-color: #60a5fa !important;
  background: rgba(30, 41, 59, 0.9) !important;
  box-shadow: 0 0 0 4px rgba(96, 165, 250, 0.1), 0 8px 16px -4px rgba(96, 165, 250, 0.2) !important;
  transform: translateY(-2px);
}

.agsuite_container input::placeholder, 
.agsuite_container textarea::placeholder {
  color: #64748b !important;
  font-weight: 400;
}

.zcwf_col_fld_slt {
  appearance: none;
  cursor: pointer;
  color: #94a3b8 !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1.5rem;
  padding-right: 3rem;
}

select option {
  background: #0f172a;
  color: #fff;
}

.agsuite_container textarea {resize: none; min-height: 120px; }

.zcwf_button {
  width: 100%;
  padding: 18px !important;
  font-size: 16px !important;
  font-weight: 700 !important;
  color: #0f172a !important;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%) !important;
  border: none !important;
  border-radius: 16px !important;
  cursor: pointer !important;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
  box-shadow: 0 10px 40px -10px rgba(139, 92, 246, 0.6) !important;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 12px;
  position: relative;
  overflow: hidden;
}

.zcwf_button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s;
}

.zcwf_button:hover::before {
  left: 100%;
}

.zcwf_button:hover {
  background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #ec4899 100%) !important;
  transform: translateY(-3px);
  box-shadow: 0 20px 50px -10px rgba(139, 92, 246, 0.8) !important;
}

.g-recaptcha { margin-top: 20px; margin-bottom: 4px; display: flex; justify-content: center; }
#recapErr409531000000325116 { font-size: 13px; color: #fca5a5; margin-top: 12px; text-align: center; visibility: hidden; }
.dsp { display: none; }

@media (max-width: 640px) {
  .agsuite_column { width: 100%; padding: 0; }
}
</style>

<div class="agsuite_container">
  <div class="agsuite_column">
    <label class="field-label">FULL NAME *</label>
    <input type="text" id="Last_Name" name="Last Name" placeholder="Your full name" maxlength="80">
  </div>
  
  <div class="agsuite_column">
    <label class="field-label">COMPANY NAME *</label>
    <input type="text" id="Company" name="Company" maxlength="200" placeholder="Your company name">
  </div>
  
  <div class="agsuite_column">
    <label class="field-label">EMAIL *</label>
    <input type="text" ftype="email" id="Email" name="Email" placeholder="Your email address" maxlength="100">
  </div>
  
  <div class="agsuite_column">
    <label class="field-label">PHONE *</label>
    <input type="text" id="Mobile" name="Mobile" maxlength="30" placeholder="Your phone number" onkeypress="return validateNumber(event)">
  </div>
  
  <div class="agsuite_column">
    <label class="field-label">JOB TITLE</label>
    <input type="text" id="Designation" name="Designation" placeholder="Your role" maxlength="100">
  </div>
  
  <div class="agsuite_column">
    <label class="field-label">ANNUAL REVENUE *</label>
    <select class="zcwf_col_fld_slt" id="LEADCF40" name="LEADCF40" onChange="addAriaSelected409531000000325116()">
      <option value="" disabled selected>Select revenue range</option>
      <option value="Under&#x20;&#x24;500K">Under $500K</option>
      <option value="&#x24;1M+">$1M+</option>
      <option value="&#x24;10M+">$10M+</option>
    </select>
  </div>
  
  <div class="agsuite_column-large">
    <label class="field-label">SERVICE INTEREST *</label>
    <select class="zcwf_col_fld_slt" id="LEADCF5" name="LEADCF5" onChange="addAriaSelected409531000000325116()">
      <option value="" disabled selected>Select a service</option>
      <option value="NetSuite&#x20;Product&#x20;&#x2f;Services">Oracle NetSuite</option>
      <option value="Zoho&#x20;Products&#x2f;Services">Zoho Suite</option>
    </select>
  </div>
  
  <div class="agsuite_column-large">
    <label class="field-label">MESSAGE</label>
    <textarea id="Description" name="Description" placeholder="Tell us about your project requirements"></textarea>
  </div>
  
  <div class="agsuite_column-large">
    <div class="g-recaptcha" data-sitekey="6Lct5nwkAAAAADdrNkjf_H3jp-0XE9dUqAjgJXQ3" data-theme="dark" data-callback="rccallback409531000000325116" captcha-verified="false" id="recap409531000000325116"></div>
    <div id="recapErr409531000000325116">Please verify you are not a robot.</div>
    <input type="submit" id="formsubmit" class="zcwf_button" value="Send Message" aria-label="Submit Form">
  </div>
</div>
</form>
</div>
                      `,
                    }}
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
