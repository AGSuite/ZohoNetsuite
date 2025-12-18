"use client";
import Script from "next/script";
import { useEffect } from "react";

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



<section
  className="bg-linear-to-br from-gray-50 via-orange-50 to-purple-100 py-16 md:py-20 lg:py-24 relative bg-cover bg-center"
  style={{ backgroundImage: "url('/images/Background/footerformbg.webp')" }}
>
  <div className="max-w-7xl mx-auto px-6 md:px-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
      
      {/* Left Side: Heading Section */}
      <div className=" flex-col space-y-6">
        <span className="inline-block text-sm px-4 py-2 bg-gray-100 backdrop-blur-sm rounded-full font-medium text-gray-900">
        Let’s Get Started !!
      </span>

        <h2 className="text-xl md:text-xl lg:text-2xl font-medium text-gray-100 leading-tight">
        Optimized solutions to elevate
        your business future, at your fingertips           
        </h2>

 
      </div>


            {/* Right Side: Zoho Form */}
            <div className="bg-white/10 p-8 lg:p-7 rounded-3xl shadow-2xl">
              <div
                dangerouslySetInnerHTML={{
                  __html: `
<div id="crmWebToEntityForm" class="zcwf_lblLeft crmWebToEntityForm" style="padding-top:0px!important;margin-top:0px!important;">
<form id="webform409531000000325116" action="https://crm.zoho.in/crm/WebToLeadForm" name="WebToLeads409531000000325116" method="POST" onSubmit="javascript:document.charset='UTF-8'; return checkMandatory409531000000325116()" accept-charset="UTF-8">
 <input type="text" class="dsp" name="xnQsjsdp" value="cae9ae065232fde2e40c34423041df835a4066ff2103c546e198d684b35e9861">
 <input type="hidden" name="zc_gad" id="zc_gad" value="">
 <input type="text" class="dsp" name="xmIwtLD" value="3820b2b7a84f952a9adb8f71d02ba0d6e9247f59314524fd5d4528cf4dff99b516b0d501ae4661e854a71c2dfb2b5263">
 <input type="text" class="dsp" name="actionType" value="TGVhZHM=">
 <input type="text" class="dsp" name="returnURL" value="https&#x3a;&#x2f;&#x2f;agsuitetech.com&#x2f;contact-us&#x2f;thank-you.php">
<input type="text" class="dsp" id="ldeskuid" name="ldeskuid">
<input type="text" class="dsp" id="LDTuvid" name="LDTuvid">

<style>
html,body{margin:0px;}
*{box-sizing:border-box;}

.agsuite_container{max-width:100%;margin:0 auto;overflow:hidden;}
.zcwf_title{font-size:28px;font-weight:700;color:#f2f7f6!important;text-align:center;margin-bottom:24px;padding:0;}
.agsuite_column{width:50%;float:left;padding:0 8px;margin-bottom:16px;}
.agsuite_column-large{width:100%;float:left;padding:0 8px;margin-bottom:16px;}
.agsuite_container::after{content:"";display:table;clear:both;}

.agsuite_container input[type="text"],.agsuite_container textarea{width:100%;padding:12px 16px;font-size:15px;font-weight:400;color:#1f2937!important;background:#f9fafb!important;border:1.5px solid #d1d5db!important;border-radius:8px!important;transition:all 0.3s ease;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;}
.agsuite_container input[type="text"]:focus,.agsuite_container textarea:focus{outline:none!important;border-color:#10b981!important;background:#ffffff!important;box-shadow:0 0 0 3px rgba(16,185,129,0.1)!important;}
.agsuite_container input::placeholder,.agsuite_container textarea::placeholder{color:#9ca3af!important;font-size:15px!important;font-weight:400!important;}

.agsuite_container select,.zcwf_col_fld_slt{width:100%;padding:12px 16px;font-size:15px;color:#1f2937!important;background:#f9fafb!important;border:1.5px solid #d1d5db!important;border-radius:8px!important;height:auto!important;transition:all 0.3s ease;cursor:pointer;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;}
.agsuite_container select:focus,.zcwf_col_fld_slt:focus{outline:none!important;border-color:#10b981!important;background:#ffffff!important;box-shadow:0 0 0 3px rgba(16,185,129,0.1)!important;}
select option{color:#1f2937;background:#ffffff;padding:8px;}

.agsuite_container textarea{min-height:120px;resize:vertical;}
.captcha_column{width:100%;float:left;padding:8px;margin-top:8px;}
#submit_btn{margin:16px 0 0 0!important;text-align:center;}

.zcwf_button{width:100%;max-width:100%!important;padding:14px 24px!important;font-size:16px!important;font-weight:600!important;color:#ffffff!important;background: linear-gradient(135deg, #f87171 0%, #b91c1c 100%);
!important;border:none!important;border-radius:10px!important;cursor:pointer!important;transition:all 0.3s ease!important;box-shadow:0 4px 6px rgba(5,150,105,0.2)!important;text-transform:uppercase;letter-spacing:0.5px;}
.zcwf_button:hover{background:linear-gradient(135deg,#047857 0%,#065f46 100%)!important;box-shadow:0 6px 12px rgba(5,150,105,0.3)!important;transform:translateY(-2px);}
.zcwf_button:active{transform:translateY(0);}

.g-recaptcha{margin:16px auto;display:flex;justify-content:center;}
#recapErr409531000000325116{font-size:13px;color:#dc2626;text-align:center;margin-top:8px;visibility:hidden;}

.zcwf_row{margin:0;}
.zcwf_col_fld{float:left;width:100%;padding:0;position:relative;}
.zcwf_col_fld:after{content:'';display:table;clear:both;}
.zcwf_col_help{display:none;}
.dsp{display:none;}
.wfrm_fld_dpNn{display:none;}

#crmWebToEntityForm{color:#1f2937;max-width:100%;margin:0;padding:0;text-align:left;}
#crmWebToEntityForm.zcwf_lblLeft{width:100%;padding:0;margin:0;box-sizing:border-box;}
#crmWebToEntityForm.zcwf_lblLeft *{box-sizing:border-box;direction:ltr;}

@media (max-width:768px){
.agsuite_column{width:100%;padding:0;margin-bottom:16px;}
.agsuite_column-large{width:100%;padding:0;}
.captcha_column{width:100%;}
.zcwf_title{font-size:24px;}
#submit_btn{margin-left:0!important;}
}

@media (max-width:480px){
.agsuite_container input[type="text"],.agsuite_container textarea,.agsuite_container select{font-size:16px;padding:10px 14px;}
.zcwf_button{padding:12px 20px!important;font-size:15px!important;}
}
</style>

<div class="agsuite_container">
  <div class="zcwf_title">Get in Touch</div>
  
  <div class="agsuite_column">
    <div class="zcwf_row">
      <div class="zcwf_col_fld">
        <input type="text" id="Last_Name" aria-required="true" aria-label="Last Name" name="Last Name" placeholder="Name*" maxlength="80">
      </div>
    </div>
  </div>
  
  <div class="agsuite_column">
    <div class="zcwf_row">
      <div class="zcwf_col_fld">
        <input type="text" ftype="email" autocomplete="false" id="Email" aria-required="true" aria-label="Email" name="Email" placeholder="Business Email*" maxlength="100">
      </div>
    </div>
  </div>
  
  <div class="agsuite_column">
    <div class="zcwf_row">
      <div class="zcwf_col_fld">
        <input type="text" id="Designation" aria-required="true" aria-label="Designation" name="Designation" placeholder="Role*" maxlength="100">
      </div>
    </div>
  </div>
  
  <div class="agsuite_column">
    <div class="zcwf_row">
      <div class="zcwf_col_fld">
        <input type="text" id="Mobile" aria-required="true" aria-label="Mobile" name="Mobile" maxlength="30" placeholder="Mobile*" onkeypress="return validateNumber(event)">
      </div>
    </div>
  </div>
  
  <div class="agsuite_column">
    <div class="zcwf_row">
      <div class="zcwf_col_fld">
        <input type="text" id="Company" aria-required="true" aria-label="Company" name="Company" maxlength="200" placeholder="Company Name*">
      </div>
    </div>
  </div>
  
  <div class="agsuite_column">
    <div class="zcwf_row">
      <div class="zcwf_col_fld">
        <select class="zcwf_col_fld_slt" role="combobox" id="LEADCF5" onChange="addAriaSelected409531000000325116()" aria-required="true" aria-label="LEADCF5" name="LEADCF5">
          <option value="" disabled selected>Product/Services*</option>
          <option value="NetSuite&#x20;Product&#x20;&#x2f;Services">Oracle NetSuite</option>
          <option value="Zoho&#x20;Products&#x2f;Services">Zoho</option>
        </select>
      </div>
    </div>
  </div>
  
  <div class="agsuite_column">
    <div class="zcwf_row wfrm_fld_dpNn">
      <div class="zcwf_col_fld">
        <select class="zcwf_col_fld_slt" role="combobox" id="Lead_Source" onChange="addAriaSelected409531000000325116()" name="Lead Source">
          <option selected value="Website">Website</option>
        </select>
      </div>
    </div>
  </div>
  
  <div class="agsuite_column">
    <div class="zcwf_row">
      <div class="zcwf_col_fld">
        <select class="zcwf_col_fld_slt" role="combobox" id="LEADCF40" onChange="addAriaSelected409531000000325116()" aria-label="LEADCF40" name="LEADCF40">
          <option value="" disabled selected>Annual Revenue*</option>
          <option value="Under&#x20;&#x24;500K">Under $500K</option>
          <option value="&#x24;500k&#x20;to&#x20;&#x24;1M">$500k to $1M</option>
          <option value="&#x24;1M&#x20;to&#x20;&#x24;2M">$1M to $2M</option>
          <option value="&#x24;2M&#x20;to&#x20;&#x24;5M">$2M to $5M</option>
          <option value="&#x24;5M&#x20;to&#x20;&#x24;10M">$5M to $10M</option>
          <option value="&#x24;10M&#x20;to&#x20;&#x24;20M">$10M to $20M</option>
          <option value="&#x24;20M&#x20;to&#x20;&#x24;30M">$20M to $30M</option>
          <option value="&#x24;30M&#x20;to&#x20;&#x24;50M">$30M to $50M</option>
          <option value="&#x24;50M&#x20;to&#x20;&#x24;100M">$50M to $100M</option>
          <option value="&#x24;100M&#x20;to&#x20;&#x24;150M">$100M to $150M</option>
          <option value="&#x24;150M&#x20;to&#x20;&#x24;200M">$150M to $200M</option>
          <option value="&#x24;200M&#x20;to&#x20;&#x24;250M">$200M to $250M</option>
          <option value="&#x24;250M&#x20;to&#x20;&#x24;300M">$250M to $300M</option>
          <option value="&#x24;300M&#x20;to&#x20;&#x24;400M">$300M to $400M</option>
          <option value="&#x24;400M&#x20;to&#x20;&#x24;500M">$400M to $500M</option>
        </select>
      </div>
    </div>
  </div>
  
  <div class="agsuite_column">
    <div class="zcwf_row">
      <div class="zcwf_col_fld">
        <select class="zcwf_col_fld_slt" role="combobox" id="LEADCF41" onChange="addAriaSelected409531000000325116()" aria-label="LEADCF41" name="LEADCF41">
          <option value="" disabled selected>How did you hear about us?</option>
          <option value="Email">Email</option>
          <option value="Event">Event</option>
          <option value="Friend&#x2f;Associate">Friend/Associate</option>
          <option value="Search">Search</option>
          <option value="Social&#x20;Media">Social Media</option>
          <option value="Referral">Referral</option>
        </select>
      </div>
    </div>
  </div>
  
  <div class="agsuite_column-large">
    <div class="zcwf_row">
      <div class="zcwf_col_fld">
        <textarea id="Description" aria-required="true" aria-label="Description" name="Description" placeholder="Tell Us How We Can Help!*"></textarea>
      </div>
    </div>
  </div>
  
  <div class="captcha_column">
    <div class="g-recaptcha" data-sitekey="6Lct5nwkAAAAADdrNkjf_H3jp-0XE9dUqAjgJXQ3" data-theme="light" data-callback="rccallback409531000000325116" captcha-verified="false" id="recap409531000000325116"></div>
    <div id="recapErr409531000000325116">Captcha validation failed. If you are not a robot then please try again.</div>
    <div id="submit_btn">
      <input type="submit" id="formsubmit" class="formsubmit zcwf_button" value="Submit" aria-label="Submit">
    </div>
  </div>
</div>
</form>
</div>
                  `,
                }}
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
