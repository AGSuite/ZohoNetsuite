"use client";
import Script from "next/script";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

// Define global functions for the form

export default function NetSuiteContactFormModern() {
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

    (window as any).validateNumber = function (e: KeyboardEvent) {
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
        platform: 'Home-Modern'
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
          const form = document.forms.namedItem('WebToLeads409531000026445204') as HTMLFormElement;
          if (form) {
            const LDTuvidObj = form.elements.namedItem('LDTuvid') as HTMLInputElement;
            if (LDTuvidObj) {
              LDTuvidObj.value = zoho.salesiq.visitor.uniqueid();
            }
            const emailObj = form.elements.namedItem('Email') as HTMLInputElement;
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
      if ((window as any).grecaptcha && document.getElementById('recap409531000026445204')) {
        try {
          (window as any).grecaptcha.render('recap409531000026445204', {
            'sitekey': '6Lct5nwkAAAAADdrNkjf_H3jp-0XE9dUqAjgJXQ3',
            'theme': 'dark',
            'callback': (window as any).rccallback409531000026445204
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
        src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=c6bd15ef499e015212f7cfd1d94a36257616906db3378b7d58e9666a0cb004ad04cae4b2ad4b40f407ea1df9509ddfc3gid4d54f02188dbd1a4f4c8582e1cc6829be5ddd9b1ad3710ed7207deccba2aa858giddeda7992accaf02590572b916d20ede01298921dbc555b8a938ff90fe2bc82f4gid28710435a2d0ea931303f1f01e1b730e6517c1be20b1776d1746edb3c9f1c653&tw=8b4a96a610c92f39fdbddebeaa5a00b371fd965c61608708d088c2ca4821d30d"
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
#recapErr409531000042578178 { font-size: 12px; color: #ef4444; margin-top: 10px; visibility: hidden; }
.dsp { display: none; }

@media (max-width: 640px) {
  .agsuite_column { width: 100%; padding: 0; }
}
</style>

<div class="agsuite_container">
  <div class="zcwf_title">Contact Us</div>
  <div class="zcwf_subtitle">Architecting Digital Excellence</div>
  
  <div class="agsuite_column">
    <input type="text" id="Last_Name" name="Last Name" placeholder="Your full name" maxlength="80">
  </div>
  
  <div class="agsuite_column">
    <input type="text" ftype="email" id="LEADCF8" name="LEADCF8" placeholder="Your email address" maxlength="100">
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
    <select class="zcwf_col_fld_slt" id="LEADCF5" name="LEADCF5" onChange="addAriaSelected409531000042578178()">
      <option value="" disabled selected>Service*</option>
      <option value="Licenses">Licenses</option>
      <option value="AMC">AMC</option>
    </select>
  </div>
  
  <div class="agsuite_column">
    <select class="zcwf_col_fld_slt" id="LEADCF19" name="LEADCF19" onChange="addAriaSelected409531000042578178()">
      <option value="" disabled selected>Annual Revenue*</option>
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
    <textarea id="LEADCF123" name="LEADCF123" placeholder="Tell us about your project"></textarea>
  </div>
  
  <div class="agsuite_column-large">
    <div class="g-recaptcha" data-sitekey="6LcWAs0sAAAAAEnzRj3y4c4zhunjhWHq4r7-Ci3y" data-theme="dark" data-callback="rccallback409531000042578178" captcha-verified="false" id="recap409531000042578178"></div>
    <div id="recapErr409531000042578178">Please verify you are not a robot.</div>
    <input type="submit" id="formsubmit" class="zcwf_button" value="Submit" aria-label="Submit Form">
  </div>
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
