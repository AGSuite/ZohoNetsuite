"use client";
import Script from "next/script";
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

export default function FooterFormSectionDark() {
  useEffect(() => {
    // Define all form validation functions globally (same as original)
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
      return true;
    };

    window.validateNumber = function(e: KeyboardEvent) {
      const key = e.key;
      if (!/[0-9]/.test(key) && key !== 'Backspace' && key !== 'Tab' && key !== 'Delete' && key !== 'ArrowLeft' && key !== 'ArrowRight') {
        e.preventDefault();
        return false;
      }
      return true;
    };

    window.trackVisitor409531000000325116 = function() {
      // Tracking implementation
    };
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-[#0a0a0a]">
      {/* Enhanced Multi-color Gradient Glows */}
      <div className="absolute top-0 left-0 w-[900px] h-[900px] bg-blue-600/25 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[140px] translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-indigo-600/20 rounded-full blur-[130px] -translate-x-1/3 translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[750px] h-[750px] bg-cyan-500/15 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>

      {/* White transparent fade overlay */}
      <div className="absolute inset-0 bg-white/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[40px] bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/5 p-8 lg:p-16 shadow-2xl relative overflow-hidden"
        >
          {/* White transparent fade overlay on container */}
          <div className="absolute inset-0 bg-white/5 rounded-[40px] pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="inline-block px-6 py-3 rounded-full border border-cyan-500/30 bg-cyan-900/20 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                <span className="text-cyan-300 text-sm font-bold tracking-widest uppercase glow-text">Start Now</span>
              </div>

              <h2 className="text-5xl lg:text-8xl font-black text-white mb-6 leading-none tracking-tight">
                Dominate <br />
                <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                  The Market
                </span>
              </h2>

              <p className="text-gray-400 text-xl lg:text-2xl font-medium leading-relaxed mb-10 max-w-md">
                Supercharge your operations with <strong>NetSuite & Zoho</strong>.
              </p>

              {/* Unique Process Timeline */}
              <div className="space-y-6 relative">
                {/* Vertical Line */}
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-linear-to-b from-cyan-500 via-blue-500 to-purple-500"></div>
                
                <div className="flex items-start gap-5 relative">
                  <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-white font-black text-lg z-10 shadow-[0_0_20px_rgba(6,182,212,0.5)]">1</div>
                  <div className="pt-2">
                    <p className="text-white font-bold text-lg">Discovery Call</p>
                    <p className="text-gray-500 text-sm">Understand your business needs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 relative">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-black text-lg z-10 shadow-[0_0_20px_rgba(59,130,246,0.5)]">2</div>
                  <div className="pt-2">
                    <p className="text-white font-bold text-lg">Custom Strategy</p>
                    <p className="text-gray-500 text-sm">Tailored implementation plan</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 relative">
                  <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-black text-lg z-10 shadow-[0_0_20px_rgba(168,85,247,0.5)]">3</div>
                  <div className="pt-2">
                    <p className="text-white font-bold text-lg">Go Live</p>
                    <p className="text-gray-500 text-sm">Launch with 24/7 support</p>
                  </div>
                </div>
              </div>

              {/* Stats Row */}
              <div className="flex gap-8 mt-10">
                <div>
                  <p className="text-4xl font-black bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-blue-400">500+</p>
                  <p className="text-gray-500 text-sm font-bold uppercase tracking-wide">Projects</p>
                </div>
                <div>
                  <p className="text-4xl font-black bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-pink-400">50+</p>
                  <p className="text-gray-500 text-sm font-bold uppercase tracking-wide">Experts</p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Dark Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-[#050505]/80 backdrop-blur-3xl rounded-[32px] p-8 lg:p-12 border border-white/10 shadow-2xl relative overflow-hidden group">
                {/* Subtle border glow */}
                <div className="absolute inset-0 rounded-[32px] border border-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                {/* White fade overlay on form */}
                <div className="absolute inset-0 bg-white/5 rounded-[32px] pointer-events-none"></div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-white mb-3">Schedule a Strategy Call</h3>
                  <p className="text-gray-400 mb-10 font-medium">Get a personalized roadmap for your digital transformation.</p>

                  {/* Zoho CRM Form */}
                  <div
                    id="crmWebToEntityForm409531000000325116"
                    dangerouslySetInnerHTML={{
                      __html: `
                        <form id="webform409531000000325116" name="WebToLeads409531000000325116" method="POST" action="https://crm.zoho.in/crm/WebToLeadForm" accept-charset="UTF-8">
                          <input type="hidden" name="xnQsjsdp" value="c5dd6f8bf45da40bbfc1f53ea13480c72dcdc357e6c7ec4ff54d24e70bf9a668"/>
                          <input type="hidden" name="zc_gad" value=""/>
                          <input type="hidden" name="xmIwtLD" value="409531000000297001"/>
                          <input type="hidden" name="actionType" value="TGVhZHM="/>
                          <input type="hidden" name="returnURL" value="https://www.agsuitetech.com/thank-you"/>
                          
                          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                            <div class="group relative">
                              <label class="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 group-focus-within:text-cyan-400 transition-colors ml-1">Company Name<span class="text-cyan-500">*</span></label>
                              <input type="text" id="Company" name="Company" maxlength="200" class="w-full bg-white/5 border border-white/10 hover:border-cyan-500/50 focus:border-cyan-400 focus:bg-white/10 rounded-xl px-5 py-4 text-white font-medium transition-all outline-none placeholder-gray-600" placeholder="Your company" />
                            </div>
                            <div class="group relative">
                              <label class="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 group-focus-within:text-cyan-400 transition-colors ml-1">Name<span class="text-cyan-500">*</span></label>
                              <input type="text" id="Last_Name" name="Last Name" maxlength="80" class="w-full bg-white/5 border border-white/10 hover:border-cyan-500/50 focus:border-cyan-400 focus:bg-white/10 rounded-xl px-5 py-4 text-white font-medium transition-all outline-none placeholder-gray-600" placeholder="Your name" />
                            </div>
                          </div>

                          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                            <div class="group relative">
                              <label class="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 group-focus-within:text-cyan-400 transition-colors ml-1">Role<span class="text-cyan-500">*</span></label>
                              <input type="text" id="Designation" name="Designation" maxlength="100" class="w-full bg-white/5 border border-white/10 hover:border-cyan-500/50 focus:border-cyan-400 focus:bg-white/10 rounded-xl px-5 py-4 text-white font-medium transition-all outline-none placeholder-gray-600" placeholder="Your role" />
                            </div>
                            <div class="group relative">
                              <label class="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 group-focus-within:text-cyan-400 transition-colors ml-1">Business Email<span class="text-cyan-500">*</span></label>
                              <input type="text" ftype="email" id="Email" name="Email" maxlength="100" class="w-full bg-white/5 border border-white/10 hover:border-cyan-500/50 focus:border-cyan-400 focus:bg-white/10 rounded-xl px-5 py-4 text-white font-medium transition-all outline-none placeholder-gray-600" placeholder="email@company.com" />
                            </div>
                          </div>

                          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                            <div class="group relative">
                              <label class="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 group-focus-within:text-cyan-400 transition-colors ml-1">Mobile<span class="text-cyan-500">*</span></label>
                              <input type="text" id="Mobile" name="Mobile" maxlength="30" class="w-full bg-white/5 border border-white/10 hover:border-cyan-500/50 focus:border-cyan-400 focus:bg-white/10 rounded-xl px-5 py-4 text-white font-medium transition-all outline-none placeholder-gray-600" placeholder="+1 (555) 000-0000" />
                            </div>
                            <div class="group relative">
                              <label class="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 group-focus-within:text-cyan-400 transition-colors ml-1">Product / Services<span class="text-cyan-500">*</span></label>
                              <div class="relative">
                                <select class="w-full bg-white/5 border border-white/10 hover:border-cyan-500/50 focus:border-cyan-400 focus:bg-white/10 rounded-xl px-5 py-4 text-white font-medium transition-all outline-none appearance-none cursor-pointer" id="LEADCF5" name="LEADCF5">
                                  <option value="-None-" class="bg-[#0a0a0a]">-None-</option>
                                  <option value="NetSuite Product/Services" class="bg-[#0a0a0a]">NetSuite Product/Services</option>
                                  <option value="Zoho Products/Services" class="bg-[#0a0a0a]">Zoho Products/Services</option>
                                </select>
                                <div class="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
                              </div>
                            </div>
                          </div>

                          <div class="mb-6 group relative">
                            <label class="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 group-focus-within:text-cyan-400 transition-colors ml-1">Annual Revenue<span class="text-cyan-500">*</span></label>
                            <div class="relative">
                              <select class="w-full bg-white/5 border border-white/10 hover:border-cyan-500/50 focus:border-cyan-400 focus:bg-white/10 rounded-xl px-5 py-4 text-white font-medium transition-all outline-none appearance-none cursor-pointer" id="LEADCF40" name="LEADCF40">
                                <option value="-None-" class="bg-[#0a0a0a]">-None-</option>
                                <option value="Under $500K" class="bg-[#0a0a0a]">Under $500K</option>
                                <option value="$1M - $5M" class="bg-[#0a0a0a]">$1M - $5M</option>
                                <option value="$5M - $10M" class="bg-[#0a0a0a]">$5M - $10M</option>
                                <option value="$10M+" class="bg-[#0a0a0a]">$10M+</option>
                              </select>
                              <div class="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
                            </div>
                          </div>

                          <div class="mb-8 group relative">
                            <label class="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 group-focus-within:text-cyan-400 transition-colors ml-1">Tell Us How We Can Help<span class="text-cyan-500">*</span></label>
                            <textarea id="Description" name="Description" maxlength="2000" rows="3" class="w-full bg-white/5 border border-white/10 hover:border-cyan-500/50 focus:border-cyan-400 focus:bg-white/10 rounded-xl px-5 py-4 text-white font-medium transition-all resize-none outline-none placeholder-gray-600" placeholder="Share your requirements..."></textarea>
                          </div>

                          <input type="hidden" id="ldeskuid" name="ldeskuid" />
                          <input type="hidden" id="LDTuvid" name="LDTuvid" />

                          <button type="submit" class="w-full px-8 py-5 bg-linear-to-r from-blue-900 to-blue-800 hover:from-blue-950 hover:to-blue-900 text-white text-lg font-bold rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(30,58,138,0.3)] hover:shadow-[0_0_50px_rgba(30,58,138,0.6)] hover:-translate-y-1 border border-blue-900/50">
                            Submit Request
                          </button>
                        </form>

                        <script>
                          window.addEventListener('load', function() {
                            var $zoho = window['$zoho'] || {};
                            $zoho.salesiq = $zoho.salesiq || {ready: function(){}}
                          });

                          document.getElementById('webform409531000000325116').addEventListener('submit', function(e) {
                            e.preventDefault();
                            if(checkMandatory409531000000325116() && validateEmail409531000000325116()) {
                              this.submit();
                            }
                          });
                        </script>
                      `,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Zoho tracking script */}
      <Script
        id="zoho-salesiq"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "siqe45cc1f88f3f44e4b4abe38bef6c4c8cc4e6d98ff1dac33b6c68ece71eacd01", values:{},ready:function(){}};
            var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;
            s.src="https://salesiq.zohopublic.in/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);
          `,
        }}
      />
    </section>
  );
}
