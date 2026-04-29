"use client";
import Script from "next/script";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";

// Define global functions for the form

export default function NetSuiteContactFormGradient() {
  useEffect(() => {
    // Define all form validation functions globally
    (window as any).addAriaSelected409531000042578178 = function () {
      const optionElem = (event as Event & { target: HTMLSelectElement }).target;
      const previousSelectedOption = optionElem.querySelector('[aria-selected=true]');
      if (previousSelectedOption) {
        previousSelectedOption.removeAttribute('aria-selected');
      }
      optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected = 'true';
    };

    (window as any).rccallback409531000042578178 = function () {
      if (document.getElementById('recap409531000042578178')) {
        document.getElementById('recap409531000042578178')?.setAttribute('captcha-verified', 'true');
      }
      const errorElement = document.getElementById('recapErr409531000042578178');
      if (errorElement && errorElement.style.visibility === 'visible') {
        errorElement.style.visibility = 'hidden';
      }
    };

    (window as any).reCaptchaAlert409531000042578178 = function () {
      const recap = document.getElementById('recap409531000042578178');
      if (recap && recap.getAttribute('captcha-verified') === 'false') {
        const errorElement = document.getElementById('recapErr409531000042578178');
        if (errorElement) {
          errorElement.style.visibility = 'visible';
        }
        return false;
      }
      return true;
    };

    (window as any).validateEmail409531000042578178 = function () {
      const form = document.forms.namedItem('WebToLeads409531000042578178') as HTMLFormElement;
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

    (window as any).validateMobile409531000042578178 = function () {
      const form = document.forms.namedItem('WebToLeads409531000042578178') as HTMLFormElement;
      if (!form) return true;
      const mobileFld = form.elements.namedItem('Mobile') as HTMLInputElement;
      if (mobileFld) {
        const v = mobileFld.value.replace(/\D/g, '');
        if (v.length !== 10) {
          alert('Mobile number must be exactly 10 digits.');
          mobileFld.focus();
          return false;
        }
      }
      return true;
    };

    (window as any).checkMandatory409531000042578178 = function () {
      const mndFileds = ['Company', 'Last Name', 'Mobile', 'LEADCF5', 'LEADCF8', 'LEADCF19', 'LEADCF123'];
      const fldLangVal = ['Company Name', 'Name', 'POC\'s Mobile', 'Service', 'Company Email', 'Annual Revenue', 'How We Can Help You'];
      const form = document.forms.namedItem('WebToLeads409531000042578178') as HTMLFormElement;
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
            if (selectField.options[selectField.selectedIndex].value === '-None-') {
              alert(fldLangVal[i] + ' cannot be none.');
              fieldObj.focus();
              return false;
            }
          }
        }
      }
      (window as any).trackVisitor409531000042578178?.();
      if ((window as any).validateEmail409531000042578178 && !(window as any).validateEmail409531000042578178()) return false;
      if ((window as any).validateMobile409531000042578178 && !(window as any).validateMobile409531000042578178()) return false;
      if ((window as any).reCaptchaAlert409531000042578178 && !(window as any).reCaptchaAlert409531000042578178()) return false;

      (window as any).sendEmail?.();
      const submitButton = document.querySelector('.crmWebToEntityForm .formsubmit') as HTMLInputElement;
      if (submitButton) {
        submitButton.setAttribute('disabled', 'true');
      }
      return true;
    };

    window.validateNumber = function (e: KeyboardEvent) {
      const pattern = /^[0-9]$/;
      return pattern.test(e.key);
    };

    (window as any).sendEmail = function () {
      const form = document.forms.namedItem('WebToLeads409531000042578178') as HTMLFormElement;
      if (!form) return;
      const formData = new FormData(form);

      const emailData = {
        name: formData.get('Last Name'),
        email: formData.get('LEADCF8'),
        role: formData.get('Designation'),
        mobile: formData.get('Mobile'),
        company: formData.get('Company'),
        service: formData.get('LEADCF5'),
        revenue: formData.get('LEADCF19'),
        requirements: formData.get('LEADCF123'),
        platform: 'Home-Gradient'
      };

      fetch('/api/contact/netsuite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailData)
      }).catch(error => {
        console.error('Error while sending email:', error);
      });
    };

    (window as any).trackVisitor409531000042578178 = function () {
      try {
        const zoho = (window as { $zoho?: { salesiq: { visitor: { uniqueid: () => string; email: (email: string) => void } } } }).$zoho;
        if (zoho) {
          const form = document.forms.namedItem('WebToLeads409531000042578178') as HTMLFormElement;
          if (form) {
            const LDTuvidObj = form.elements.namedItem('LDTuvid') as HTMLInputElement;
            if (LDTuvidObj) {
              LDTuvidObj.value = zoho.salesiq.visitor.uniqueid();
            }
            const emailObj = form.elements.namedItem('LEADCF8') as HTMLInputElement;
            if (emailObj) {
              zoho.salesiq.visitor.email(emailObj.value);
            }
          }
        }
      } catch (e) {
        console.log('Zoho tracking error:', e);
      }
    };

    // Handle reCAPTCHA rendering for SPA navigation
    const renderRecaptcha = () => {
      if ((window as any).grecaptcha && document.getElementById('recap409531000042578178')) {
        try {
          (window as any).grecaptcha.render('recap409531000042578178', {
            'sitekey': '6LcWAs0sAAAAAEnzRj3y4c4zhunjhWHq4r7-Ci3y',
            'theme': 'dark',
            'callback': (window as any).rccallback409531000042578178
          });
        } catch (e) {
          // Already rendered
        }
      }
    };

    if ((window as any).grecaptcha) {
      renderRecaptcha();
    } else {
      const interval = setInterval(() => {
        if ((window as any).grecaptcha) {
          renderRecaptcha();
          clearInterval(interval);
        }
      }, 500);
      setTimeout(() => clearInterval(interval), 5000);
    }
  }, []);

  return (
    <>
      {/* Load required scripts */}
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="lazyOnload"
      />

      {/* COMMENTED FOR NOW - Zoho SalesIQ Chatbot */}
      {/* <Script
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
      /> */}

      <Script
        id="wf_anal_footer"
        src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=ffa911f519bdac1fd37141e7458859338a4c0807209e53fcd9161a4ef8002b597777f2d47c34393e74912d83270ec629gid2020ff77b8590645f6909775bceb1dfe9b354b521b7d31a381183051979950afgidc32afce85ab5735ae0662898fbed0b63bef845d0ee34535ca4044be79f94eb16gidc20f47455171d038199ce12255d9fb14618138cdb451a0053d17b76b5cbc594d&tw=a5bf274d720cc51e70d06319b934b2ae14a201bb6424c6ca86bd81d126e9d37e"
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
<form id="webform409531000042578178" action="https://crm.zoho.in/crm/WebToLeadForm" name="WebToLeads409531000042578178" method="POST" onSubmit="javascript:document.charset='UTF-8'; return checkMandatory409531000042578178()" accept-charset="UTF-8">
 <input type="text" class="dsp" name="xnQsjsdp" value="e8dd3e716514c8f9dcd1eb1f2bace3224b829c134dada7edb1257e30d50f8d82">
 <input type="hidden" name="zc_gad" id="zc_gad" value="">
 <input type="text" class="dsp" name="xmIwtLD" value="7ce425cbc5576979cf8d2dfa7bcaeb8eb6b6c2507daa5786fd6186f5e9214bce6b94a37008af83711e13228fec1f14a">
 <input type="text" class="dsp" name="actionType" value="TGVhZHM=">
 <input type="text" class="dsp" name="returnURL" value="https://zoho-netsuite.vercel.app/thank-you">
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
#recapErr409531000026445204 { font-size: 13px; color: #fca5a5; margin-top: 12px; text-align: center; visibility: hidden; }
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
    <input type="text" ftype="email" id="LEADCF8" name="LEADCF8" placeholder="Your email address" maxlength="100">
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
    <select class="zcwf_col_fld_slt" id="LEADCF19" name="LEADCF19" onChange="addAriaSelected409531000042578178()">
      <option value="" disabled selected>Select revenue range</option>
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
  </div>
  
  <div class="agsuite_column-large">
    <label class="field-label">MESSAGE</label>
    <textarea id="LEADCF123" name="LEADCF123" placeholder="Tell us about your project requirements"></textarea>
  </div>
  
  <div class="agsuite_column-large">
    <div class="g-recaptcha" data-sitekey="6LcWAs0sAAAAAEnzRj3y4c4zhunjhWHq4r7-Ci3y" data-theme="dark" data-callback="rccallback409531000042578178" captcha-verified="false" id="recap409531000042578178"></div>
    <div id="recapErr409531000042578178">Please verify you are not a robot.</div>
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
