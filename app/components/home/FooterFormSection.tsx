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

export default function FooterFormSection() {
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



<section className="relative py-24 lg:py-32 overflow-hidden bg-gray-900">
  {/* Sophisticated Background with Overlay */}
  <div 
    className="absolute inset-0 bg-cover bg-fixed bg-center transition-transform duration-[10s] hover:scale-110"
    style={{ 
      backgroundImage: "url('/images/Background/footerformbg.webp')",
      filter: "brightness(0.3) saturate(1.2)"
    }}
  />
  <div className="absolute inset-0 bg-linear-to-l from-gray-750/10 via-gray-700/10 to-transparent" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      
      {/* Left Side: Impactful Heading */}
      <motion.div 
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col space-y-8"
      >
        <div>
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-blue-400 uppercase py-2 px-4 bg-blue-500/10 border border-blue-500/20 rounded-lg mb-6">
            Partner with AGSuite
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
            Elevate Your <span className="text-blue-500">Business</span> Future.
          </h2>
          
          <p className="mt-8 text-xl text-gray-400 leading-relaxed max-w-xl font-light">
            Empower your enterprise with seamless automation and cloud solutions tailored for growth.
          </p>
        </div>

        <div className="flex items-center gap-6 pt-6">
          <div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex items-center gap-4">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full border-2 border-gray-900 overflow-hidden relative">
                <Image src="/images/people/laptopmen.webp" alt="Client 1" fill className="object-cover" sizes="40px" />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-gray-900 overflow-hidden relative">
                <Image src="/images/people/laptopgirl.webp" alt="Client 2" fill className="object-cover" sizes="40px" />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-gray-900 overflow-hidden relative">
                <Image src="/images/people/laptopmen2.webp" alt="Client 3" fill className="object-cover" sizes="40px" />
              </div>
            </div>
            <div>
              <p className="text-white font-bold text-lg leading-tight">500+</p>
              <p className="text-gray-500 text-xs">Trusted Clients</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Side: Professional White Theme Form */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative group lg:w-[100%] mx-auto"
      >
        <div className="absolute -inset-1 bg-linear-to-r from-blue-500/90 to-indigo-500/90 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>
        <div className="relative bg-white p-8 lg:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100">
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
.zcwf_title { font-size: 32px; font-weight: 800; color: #111827!important; text-align: left; margin-bottom: 30px; letter-spacing: -0.02em; }
.agsuite_column { width: 50%; float: left; padding: 0 10px; margin-bottom: 18px; }
.agsuite_column-large { width: 100%; float: left; padding: 0 10px; margin-bottom: 18px; }
.agsuite_container::after { content: ""; display: table; clear: both; }

.agsuite_container input[type="text"], 
.agsuite_container textarea, 
.zcwf_col_fld_slt {
  width: 100%;
  padding: 14px 18px;
  font-size: 14px;
  background: #f9fafb !important;
  border: 1px solid #e5e7eb !important;
  border-radius: 12px !important;
  color: #111827 !important;
  transition: all 0.3s ease;
}

.agsuite_container input:focus, 
.agsuite_container textarea:focus, 
.zcwf_col_fld_slt:focus {
  outline: none !important;
  border-color: #3b82f6 !important;
  background: #fff !important;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1) !important;
}

.agsuite_container input::placeholder, 
.agsuite_container textarea::placeholder {
  color: #9ca3af !important;
}

.zcwf_col_fld_slt {
  appearance: none;
  cursor: pointer;
}

select option {
  background: #fff;
  color: #111827;
}

.agsuite_container textarea { min-height: 100px; resize: none; }

.zcwf_button {
  width: 100%;
  padding: 16px !important;
  font-size: 15px !important;
  font-weight: 700 !important;
  color: #fff !important;
  background: #3b82f6 !important;
  border: none !important;
  border-radius: 12px !important;
  cursor: pointer !important;
  transition: all 0.3s ease !important;
  box-shadow: 0 8px 24px -8px #3b82f6 !important;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 10px;
}

.zcwf_button:hover {
  background: #2563eb !important;
  transform: translateY(-2px);
  box-shadow: 0 12px 30px -10px #3b82f6 !important;
}

.g-recaptcha { margin-top: 15px; display: flex; justify-content: flex-start; }
#recapErr409531000000325116 { font-size: 12px; color: #ef4444; margin-top: 10px; visibility: hidden; }
.dsp { display: none; }

@media (max-width: 640px) {
  .agsuite_column { width: 100%; padding: 0; }
}
</style>

<div class="agsuite_container">
  <div class="zcwf_title">Get a Consultation</div>
  
  <div class="agsuite_column">
    <input type="text" id="Last_Name" name="Last Name" placeholder="Full Name*" maxlength="80">
  </div>
  
  <div class="agsuite_column">
    <input type="text" ftype="email" id="Email" name="Email" placeholder="Business Email*" maxlength="100">
  </div>
  
  <div class="agsuite_column">
    <input type="text" id="Designation" name="Designation" placeholder="Job Title" maxlength="100">
  </div>
  
  <div class="agsuite_column">
    <input type="text" id="Mobile" name="Mobile" maxlength="30" placeholder="Mobile Number*" onkeypress="return validateNumber(event)">
  </div>
  
  <div class="agsuite_column-large">
    <input type="text" id="Company" name="Company" maxlength="200" placeholder="Company Name*">
  </div>
  
  <div class="agsuite_column">
    <select class="zcwf_col_fld_slt" id="LEADCF5" name="LEADCF5" onChange="addAriaSelected409531000000325116()">
      <option value="" disabled selected>Service Interest*</option>
      <option value="NetSuite&#x20;Product&#x20;&#x2f;Services">Oracle NetSuite</option>
      <option value="Zoho&#x20;Products&#x2f;Services">Zoho Suite</option>
    </select>
  </div>
  
  <div class="agsuite_column">
    <select class="zcwf_col_fld_slt" id="LEADCF40" name="LEADCF40" onChange="addAriaSelected409531000000325116()">
      <option value="" disabled selected>Annual Revenue*</option>
      <option value="Under&#x20;&#x24;500K">Under $500K</option>
      <option value="&#x24;1M+">$1M+</option>
      <option value="&#x24;10M+">$10M+</option>
    </select>
  </div>
  
  <div class="agsuite_column-large">
    <textarea id="Description" name="Description" placeholder="Tell us about your requirements*"></textarea>
  </div>
  
  <div class="agsuite_column-large">
    <div class="g-recaptcha" data-sitekey="6Lct5nwkAAAAADdrNkjf_H3jp-0XE9dUqAjgJXQ3" data-theme="light" data-callback="rccallback409531000000325116" captcha-verified="false" id="recap409531000000325116"></div>
    <div id="recapErr409531000000325116">Please verify you are not a robot.</div>
    <input type="submit" id="formsubmit" class="zcwf_button" value="Send Request" aria-label="Submit Form">
  </div>
</div>
</form>
</div>
              `,
            }}
          />
        </div>
      </motion.div>

    </div>

    
  </div>
</section>
    </>
  );
}
