"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Mail, CheckCircle, Sparkles, ShieldCheck } from 'lucide-react';
import Script from 'next/script';


export default function ZohoFreeConsultation() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    window.addAriaSelected409531000026445204 = function (event?: any) {
      const optionElem = event.target as HTMLSelectElement;
      const previousSelectedOption = optionElem.querySelector('[aria-selected="true"]');
      if (previousSelectedOption) {
        previousSelectedOption.removeAttribute('aria-selected');
      }
      if (optionElem.options && optionElem.options[optionElem.selectedIndex]) {
        optionElem.options[optionElem.selectedIndex].setAttribute('aria-selected', 'true');
      }
    };

    window.rccallback409531000026445204 = function () {
      const recap = document.getElementById('recap409531000026445204');
      if (recap) { recap.setAttribute('captcha-verified', 'true'); }
      const errorElement = document.getElementById('recapErr409531000026445204');
      if (errorElement && errorElement.style.visibility === 'visible') {
        errorElement.style.visibility = 'hidden';
      }
    };

    window.validateEmail409531000026445204 = function () {
      const form = document.forms.namedItem('WebToLeads409531000026445204');
      if (!form) return true;
      const emailFld = form.querySelectorAll('input[type="email"], [ftype="email"]');
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

    window.checkMandatory409531000026445204 = function (e?: any) {
      const mndFileds = ['Company', 'Last Name', 'Designation', 'Email', 'Mobile', 'Annual Revenue', 'Description'];
      const fldLangVal = ['Company Name', 'Name', 'Role', 'Business Email', 'Mobile', 'Annual Revenue', 'Type Message'];
      const form = document.forms.namedItem('WebToLeads409531000026445204');
      if (!form) return false;
      for (let i = 0; i < mndFileds.length; i++) {
        const fieldObj = form.elements.namedItem(mndFileds[i]) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
        if (fieldObj) {
          if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length === 0) {
            alert(fldLangVal[i] + ' cannot be empty.');
            fieldObj.focus();
            return false;
          } else if (fieldObj.nodeName === 'SELECT' && (((fieldObj as HTMLSelectElement).value === '-None-') || ((fieldObj as HTMLSelectElement).value === ''))) {
            alert(fldLangVal[i] + ' cannot be none.');
            fieldObj.focus();
            return false;
          }
        }
      }
      
      const recap = document.getElementById('recap409531000026445204');
      if (recap && recap.getAttribute('captcha-verified') === 'false') {
          const recapErr = document.getElementById('recapErr409531000026445204');
          if (recapErr) recapErr.style.visibility = 'visible';
          return false;
      }

      window.trackVisitor409531000026445204?.();
      if (!window.validateEmail409531000026445204?.()) return false;
      
      const submitButton = document.querySelector('.crmWebToEntityForm .formsubmit') as HTMLInputElement;
      if (submitButton) { submitButton.disabled = true; }
      return true;
    };

    window.trackVisitor409531000026445204 = function () {
      try {
        if (window.$zoho?.salesiq?.visitor) {
          const form = document.forms.namedItem('WebToLeads409531000026445204');
          if (form) {
            const LDTuvidObj = form.elements.namedItem('LDTuvid') as HTMLInputElement;
            if (LDTuvidObj) { LDTuvidObj.value = window.$zoho.salesiq.visitor.uniqueid() || ''; }
            const nameField = form.elements.namedItem('Last Name') as HTMLInputElement;
            if (nameField?.value) { window.$zoho.salesiq.visitor.name(nameField.value); }
            const emailObj = form.elements.namedItem('Email') as HTMLInputElement;
            if (emailObj?.value) { window.$zoho.salesiq.visitor.email(emailObj.value); }
          }
        }
      } catch (e) { console.log('Zoho tracking error:', e); }
    };
  }, []);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (window.checkMandatory409531000026445204 && !window.checkMandatory409531000026445204()) {
      e.preventDefault();
      return false;
    }
    return true;
  };

  if (!isClient) {
    return <div className="min-h-screen bg-white animate-pulse" />;
  }

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center py-24 px-6 lg:px-10 overflow-hidden"
      style={{
        backgroundImage: "url('/images/contact/girlcontact.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Content */}
        <div className="flex flex-col space-y-10">
          <div>
            <p className="text-red-400 font-bold tracking-widest uppercase text-sm mb-4">Strategic Transformation</p>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-8">
              Book a Free <span className="text-red-500 italic block mt-2">Consultation</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed font-light max-w-lg">
              Unlock your business potential with expert Zoho & NetSuite guidance. Take the first step towards a seamless cloud operation.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { icon: CheckCircle, text: "30-Minute Expert Discovery Session" },
              { icon: Sparkles, text: "Technology Readiness Audit" },
              { icon: ShieldCheck, text: "Data-Driven Growth Implementation Plan" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 text-white">
                <div className="p-2 bg-red-600/20 backdrop-blur-md rounded-lg border border-red-500/30">
                  <item.icon className="text-red-500" size={24} />
                </div>
                <span className="text-lg font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-red-600 flex items-center justify-center text-white shadow-xl">
              <Mail size={32} />
            </div>
            <div>
              <p className="text-gray-300 text-sm">Need immediate help?</p>
              <h4 className="text-xl font-bold text-white">consult@agsuitetech.com</h4>
            </div>
          </div>
        </div>

        {/* Right Side: Zoho Form */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-[2rem] blur-xl opacity-20" />
          <div className="relative bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Speak with an Expert</h2>
              <p className="text-gray-500 text-sm">Fill out the details below and we'll reach out within 24 hours.</p>
            </div>

            <form
              id="webform409531000026445204"
              action="https://crm.zoho.in/crm/WebToLeadForm"
              name="WebToLeads409531000026445204"
              method="POST"
              onSubmit={handleFormSubmit}
              acceptCharset="UTF-8"
              className="space-y-5"
            >
              {/* Mandatory Hidden Fields */}
              <input type="text" className="hidden" name="xnQsjsdp" value="19335c470c662cf186fc795b18eedf0f9d091f3e89bec0d2ba190d3554f6a65f" readOnly />
              <input type="hidden" name="zc_gad" id="zc_gad" value="" />
              <input type="text" className="hidden" name="xmIwtLD" value="8a87fb772b5b40c206ab7214ad4cb2e8221e4900697815a99f037104263d7ba1f19722ed192796b975626af903499aee" readOnly />
              <input type="text" className="hidden" name="actionType" value="TGVhZHM=" readOnly />
              <input type="text" className="hidden" name="returnURL" value="https://agsuitetech.com/best-cloud-based-crm/thank-you/" readOnly />
              {/* Do not remove this code. */}
              <input type="text" className="hidden" id="ldeskuid" name="ldeskuid" readOnly />
              <input type="text" className="hidden" id="LDTuvid" name="LDTuvid" readOnly />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider">Name *</label>
                  <input type="text" name="Last Name" required placeholder="John Doe" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-red-500/5 focus:border-red-500 outline-none transition-all placeholder:text-gray-400 font-medium" />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider">Business Email *</label>
                  <input type="email" name="Email" required placeholder="john@company.com" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-red-500/5 focus:border-red-500 outline-none transition-all placeholder:text-gray-400 font-medium" />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider">Role *</label>
                  <input type="text" name="Designation" required placeholder="Job Role" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-red-500/5 focus:border-red-500 outline-none transition-all placeholder:text-gray-400 font-medium" />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider">Mobile *</label>
                  <input type="text" name="Mobile" required placeholder="Phone Number" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-red-500/5 focus:border-red-500 outline-none transition-all placeholder:text-gray-400 font-medium" />
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider">Company Name *</label>
                  <input type="text" name="Company" required placeholder="Company Inc." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-red-500/5 focus:border-red-500 outline-none transition-all placeholder:text-gray-400 font-medium" />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider">Annual Revenue *</label>
                  <select name="Annual Revenue" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-red-500/5 focus:border-red-500 outline-none transition-all font-medium text-gray-700 appearance-none cursor-pointer">
                    <option value="" disabled selected>Select Revenue</option>
                    <option value="Under&#x20;&#x24;500K">Under &#x24;500K</option>
                    <option value="&#x24;500k&#x20;to&#x20;&#x24;1M">&#x24;500k to &#x24;1M</option>
                    <option value="&#x24;1M&#x20;to&#x20;&#x24;2M">&#x24;1M to &#x24;2M</option>
                    <option value="&#x24;2M&#x20;to&#x20;&#x24;5M">&#x24;2M to &#x24;5M</option>
                    <option value="&#x24;5M&#x20;to&#x20;&#x24;10M">&#x24;5M to &#x24;10M</option>
                    <option value='&#x24;10M&#x20;to&#x20;&#x24;20M'>&#x24;10M to &#x24;20M</option>
                    <option value='&#x24;20M&#x20;to&#x20;&#x24;30M'>&#x24;20M to &#x24;30M</option>
                    <option value='&#x24;30M&#x20;to&#x20;&#x24;50M'>&#x24;30M to &#x24;50M</option>
                    <option value='&#x24;50M&#x20;to&#x20;&#x24;100M'>&#x24;50M to &#x24;100M</option>
                  </select>
                </div>


                <div className="space-y-1.5">
                  <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider">How did you hear about us?</label>
                  <select name="Lead Source" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-red-500/5 focus:border-red-500 outline-none transition-all font-medium text-gray-700 appearance-none cursor-pointer">
                    <option value="" disabled selected>Select Option</option>
                    <option value='-None-'>-None-</option>
                    <option value='Client&#x20;Referral'>Client Referral</option>
                    <option value='Database'>Database</option>
                    <option value='Email'>Email</option>
                    <option value='Email&#x20;Campaign'>Email Campaign</option>
                    <option value='Employee&#x20;Referral'>Employee Referral</option>
                    <option value='Event'>Event</option>
                    <option value='External&#x20;Referral'>External Referral</option>
                    <option value='Google&#x20;Ads&#x20;&#x28;Chat&#x29;'>Google Ads &#x28;Chat&#x29;</option>
                    <option value='Google&#x20;Ads&#x20;&#x28;Form&#x29;'>Google Ads &#x28;Form&#x29;</option>
                    <option value='Lead&#x20;Gen&#x20;Agency'>Lead Gen Agency</option>
                    <option value='LinkedIn'>LinkedIn</option>
                    <option value='Linkedlin'>Linkedlin</option>
                    <option value='Online&#x20;Store'>Online Store</option>
                    <option value='Oracle&#x20;Database'>Oracle Database</option>
                    <option value='Oracle&#x20;Partner'>Oracle Partner</option>
                    <option value='Oracle&#x20;Referral'>Oracle Referral</option>
                    <option value='Others'>Others</option>
                    <option value='Phone'>Phone</option>
                    <option value='Purchased&#x20;Leads'>Purchased Leads</option>
                    <option value='Sales&#x20;Email&#x20;Alias'>Sales Email Alias</option>
                    <option value='Sales&#x20;Person&#x20;Contact'>Sales Person Contact</option>
                    <option value='Seminar&#x20;Partner'>Seminar Partner</option>
                    <option value='Trade&#x20;Show'>Trade Show</option>
                    <option value='TSL&#x20;Lead&#x20;-&#x20;Accepted'>TSL Lead - Accepted</option>
                    <option value='TSL&#x20;Lead&#x20;-&#x20;Rejected'>TSL Lead - Rejected</option>
                    <option value='Twitter'>Twitter</option>
                    <option value='Web&#x20;Cases'>Web Cases</option>
                    <option value='Web&#x20;Download'>Web Download</option>
                    <option value='Web&#x20;Mail'>Web Mail</option>
                    <option value='Web&#x20;Research'>Web Research</option>
                    <option value='Webinar'>Webinar</option>
                    <option value='Website'>Website</option>
                    <option value='Website&#x20;&#x28;Chat&#x29;'>Website &#x28;Chat&#x29;</option>
                    <option value='Website&#x20;&#x28;Form&#x29;'>Website &#x28;Form&#x29;</option>
                    <option value='WebSite&#x20;Visit'>WebSite Visit</option>
                    <option value='Zoho&#x20;Partner'>Zoho Partner</option>
                    <option value='Zoho&#x20;Partner&#x20;Portal'>Zoho Partner Portal</option>
                    <option value='Zoho&#x20;Portal&#x20;Listing'>Zoho Portal Listing</option>
                    <option value='Zoho&#x20;Referral'>Zoho Referral</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider">Type Message *</label>
                <textarea name="Description" required placeholder="How can we help?*" rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-red-500/5 focus:border-red-500 outline-none transition-all placeholder:text-gray-400 font-medium resize-none" />
              </div>

              <div className="space-y-4">
                <div id="recap409531000026445204" className="g-recaptcha flex justify-center" data-sitekey="6Lct5nwkAAAAADdrNkjf_H3jp-0XE9dUqAjgJXQ3" data-captcha-verified="false" />
                <p id="recapErr409531000026445204" className="text-xs text-red-600 invisible text-center">Please verify that you are not a robot.</p>
                <button type="submit" id="formsubmit" className="formsubmit w-full py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl font-bold uppercase tracking-widest text-sm shadow-xl hover:shadow-red-600/20 hover:-translate-y-1 transition-all">
                  Request Free Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Script src="https://www.google.com/recaptcha/api.js" async defer strategy="afterInteractive" />
      <Script id="zoho-salesiq" strategy="afterInteractive">
        {`
          var $zoho= $zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:'siq35ed179fbb63b96bebd9bc669caab3cc7ab9252873ae18a7fd3bac7692c8ff19', values:{},ready:function(){}};var d=document;s=d.createElement('script');s.type='text/javascript';s.id='zsiqscript';s.defer=true;s.src='https://salesiq.zoho.in/widget';t=d.getElementsByTagName('script')[0];t.parentNode.insertBefore(s,t);
          function rccallback409531000026445204() {
            if(document.getElementById('recap409531000026445204')!=undefined){
              document.getElementById('recap409531000026445204').setAttribute('captcha-verified',true);
            }
            if(document.getElementById('recapErr409531000026445204')!=undefined && document.getElementById('recapErr409531000026445204').style.visibility == 'visible' ){
              document.getElementById('recapErr409531000026445204').style.visibility='hidden';
            }
          }
        `}
      </Script>
      <Script id="wf_anal" src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=0da8e2cc66918e4dd02485e36ac2951cc4bcb3d793c12d90fddb19da10f81a2e3f33ebfe28ac1201804c2243b488b148gide78f4a7aa21f61a0e7f1d4d707f57ac5020ab4976395accfade900cdaeb0c714gid0eedbd135dabbb2832b664a9948ee55fa1e6e8c6c2a8c2dea386b01c923ae74cgid29640dbeee89a534ab4e485b49b04442fe41fd069a7f5d762412c9a3a9b26938&tw=76b91257e40af88ff824ca118456bbb493f8897aa0c100c8dd996d392184cc52" />
    </section>
  );
}
