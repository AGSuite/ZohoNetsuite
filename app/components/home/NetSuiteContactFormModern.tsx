"use client";
import Script from "next/script";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

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

export default function NetSuiteContactFormModern() {
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

      {/* Modern Dark Contact Form with Contact Info */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Side: Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col space-y-10"
            >
              <div>
                <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-bold text-blue-400 uppercase tracking-wider mb-6">
                  Contact
                </span>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Get in touch
                </h2>
                
                <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                  Have questions or ready to transform your business with AI automation? Reach out anytime and let's connect.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Email */}
                <div className="group relative p-6 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 rounded-2xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-600/20 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
                      <Mail className="w-6 h-6 text-blue-400 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium mb-1">Email us</p>
                      <p className="text-white font-semibold">contact@agsuitetech.com</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="group relative p-6 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 rounded-2xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-600/20 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
                      <Phone className="w-6 h-6 text-blue-400 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium mb-1">Call us</p>
                      <p className="text-white font-semibold">+1 (XXX) XXX-XXXX</p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="group relative p-6 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 rounded-2xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-600/20 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
                      <MapPin className="w-6 h-6 text-blue-400 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium mb-1">Our location</p>
                      <p className="text-white font-semibold">Global Offices</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative bg-slate-900/50 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-white/10 shadow-2xl">
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
  font-size: 28px; 
  font-weight: 700; 
  color: #fff!important; 
  text-align: left; 
  margin-bottom: 8px; 
  letter-spacing: -0.02em; 
}
.zcwf_subtitle {
  font-size: 14px;
  color: #94a3b8!important;
  margin-bottom: 32px;
  line-height: 1.6;
}
.agsuite_column { width: 50%; float: left; padding: 0 8px; margin-bottom: 16px; }
.agsuite_column-large { width: 100%; float: left; padding: 0 8px; margin-bottom: 16px; }
.agsuite_container::after { content: ""; display: table; clear: both; }

.agsuite_container input[type="text"], 
.agsuite_container textarea, 
.zcwf_col_fld_slt {
  width: 100%;
  padding: 14px 16px;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  border-radius: 12px !important;
  color: #fff !important;
  transition: all 0.3s ease;
}

.agsuite_container input:focus, 
.agsuite_container textarea:focus, 
.zcwf_col_fld_slt:focus {
  outline: none !important;
  border-color: #3b82f6 !important;
  background: rgba(59, 130, 246, 0.1) !important;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1) !important;
}

.agsuite_container input::placeholder, 
.agsuite_container textarea::placeholder {
  color: #64748b !important;
}

.zcwf_col_fld_slt {
  appearance: none;
  cursor: pointer;
  color: #94a3b8 !important;
}

select option {
  background: #1e293b;
  color: #fff;
}

.agsuite_container textarea { min-height: 120px; resize: none; }

.zcwf_button {
  width: 100%;
  padding: 16px !important;
  font-size: 15px !important;
  font-weight: 700 !important;
  color: #fff !important;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%) !important;
  border: none !important;
  border-radius: 12px !important;
  cursor: pointer !important;
  transition: all 0.3s ease !important;
  box-shadow: 0 8px 24px -8px rgba(59, 130, 246, 0.5) !important;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 8px;
}

.zcwf_button:hover {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%) !important;
  transform: translateY(-2px);
  box-shadow: 0 12px 30px -10px rgba(59, 130, 246, 0.6) !important;
}

.g-recaptcha { margin-top: 16px; display: flex; justify-content: flex-start; }
#recapErr409531000000325116 { font-size: 12px; color: #ef4444; margin-top: 10px; visibility: hidden; }
.dsp { display: none; }

@media (max-width: 640px) {
  .agsuite_column { width: 100%; padding: 0; }
}
</style>

<div class="agsuite_container">
  <div class="zcwf_title">Contact Us</div>
  <div class="zcwf_subtitle">First Name</div>
  
  <div class="agsuite_column">
    <input type="text" id="Last_Name" name="Last Name" placeholder="Your full name" maxlength="80">
  </div>
  
  <div class="agsuite_column">
    <input type="text" ftype="email" id="Email" name="Email" placeholder="Your email address" maxlength="100">
  </div>
  
  <div class="agsuite_column">
    <input type="text" id="Designation" name="Designation" placeholder="Job title" maxlength="100">
  </div>
  
  <div class="agsuite_column">
    <input type="text" id="Mobile" name="Mobile" maxlength="30" placeholder="Your phone number" onkeypress="return validateNumber(event)">
  </div>
  
  <div class="agsuite_column-large">
    <input type="text" id="Company" name="Company" maxlength="200" placeholder="Your company name">
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
    <textarea id="Description" name="Description" placeholder="Tell us about your project"></textarea>
  </div>
  
  <div class="agsuite_column-large">
    <div class="g-recaptcha" data-sitekey="6Lct5nwkAAAAADdrNkjf_H3jp-0XE9dUqAjgJXQ3" data-theme="dark" data-callback="rccallback409531000000325116" captcha-verified="false" id="recap409531000000325116"></div>
    <div id="recapErr409531000000325116">Please verify you are not a robot.</div>
    <input type="submit" id="formsubmit" class="zcwf_button" value="Submit" aria-label="Submit Form">
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
