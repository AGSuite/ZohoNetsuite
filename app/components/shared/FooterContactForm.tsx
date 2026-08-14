"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Script from "next/script";
import { Briefcase, Globe2, HeartHandshake, Rocket } from "lucide-react";

interface FooterContactFormProps {
  platform: 'NetSuite' | 'Zoho';
}

export default function FooterContactForm({ platform }: FooterContactFormProps) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isNetSuite = platform === 'NetSuite';

  const config = isNetSuite
    ? {
        formId: "webform409531000047791096",
        formName: "WebToLeads409531000047791096",
        xnQsjsdp: "2ae4ca1841d27018fa82a0a48a96f1c01673f80384140a440922ae0aab21aae3",
        xmIwtLD: "56ac8377184c3ea501a9db3ccd450a182e7e602f9cbf901b0c9852cc9de9f7c713a4ce3d1e636d34dc4666caf4082423",
        serviceFieldName: "LEADCF166",
        serviceLabel: "Netsuite Services *",
        serviceDefault: "-Select NetSuite Service-",
        serviceOptions: [
          "NetSuite Licenses",
          "NetSuite Implementation",
          "NetSuite Licenses + Implementation",
          "New Subsidiary Implementation",
          "NetSuite Support",
          "NetSuite Optimization",
          "NetSuite Customization",
          "NetSuite Integrations",
          "NetSuite India Localization",
          "NetSuite Data Backup for India",
        ],
        analyticsUrl: "https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=f84d1d6876a443cf36bdeab891c5582d7c3e142d9fce42d31ffc393506d6d6d54dbf7f9cf10e11397fb06e31977be163gid65b81325138b2fc10191c2ef7b4572a0b18f76ffadabafd1f029455ae866a59cgidf169f3e66dfe1cbf71d7bc2d3d67d57ab12b228f83d723a6a15eb3cfddecc257gid6d99bc21bab3635e5f6b816b959e07211ea39cb1eae372096d63da78a4b9dccc&tw=1db53bf46a6a8b587793bb8f51f25b9b772d35495cdb16dcd3a6abe2ad6ecd11&version=v2",
        validateFuncName: "checkMandatory409531000047791096",
        validateEmailFuncName: "validateEmail409531000047791096",
      }
    : {
        formId: "webform409531000047791049",
        formName: "WebToLeads409531000047791049",
        xnQsjsdp: "ce6ebe1d9e713fef68d407d2105f962cb111097dcf75c7448aa9ab6b81795a86",
        xmIwtLD: "f709a413582c4286a2de04d475889148eb84a2d09b828569c9eba502ddcc5faa4e3fd730e1dcd4cb039e9925fd212664",
        serviceFieldName: "LEADCF165",
        serviceLabel: "Zoho Services *",
        serviceDefault: "-Select Zoho Service-",
        serviceOptions: [
          "Zoho Licenses",
          "Zoho Implementation",
          "Zoho Licenses + Implementation",
          "Zoho Support",
          "Zoho Optimization",
          "Zoho Customization",
          "Zoho Integrations",
        ],
        analyticsUrl: "https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=0eb6a535c81a04e07aa886637740a304d7d59028aa8cf0d09048e8d1fbedf647e44d9f74b254709a0882eb1c31136d9cgid6d4592f2dce66ea8bcc60167960b9d0d27138cba33ac6ce7248c5c53d3a06fdcgid365cc1061c930ed0655f44af7ff3ea4d0b60a3b2784693cb6b2d5828f4dd9f35gid1cae83d6cd96c22775ca40c3b71805971400a95aea889397fdfa8c8f955523fd&tw=d336253c98c6a8f95f079a1420d0d2411cea660a574b2a28d90b4690781c9053&version=v2",
        validateFuncName: "checkMandatory409531000047791049",
        validateEmailFuncName: "validateEmail409531000047791049",
      };

  useEffect(() => {
    setIsClient(true);

    (window as any).addAriaSelectedFooter = function (event: any) {
      const optionElem = event.target;
      const prev = optionElem.querySelector('[aria-selected=true]');
      if (prev) prev.removeAttribute('aria-selected');
      optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected = 'true';
    };

    (window as any)[config.validateEmailFuncName] = function () {
      const form = document.forms.namedItem(config.formName) as HTMLFormElement;
      if (!form) return true;
      const emailFld = form.querySelectorAll('[data-ftype="email"]');
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

    (window as any)[config.validateFuncName] = function () {
      const mndFileds = ['Company', 'Last Name', 'Designation', 'Email', 'Mobile', 'LEADCF19', 'LEADCF123', 'LEADCF127', config.serviceFieldName];
      const fldLangVal = ['Company Name', 'Name', 'Role', "POC's Email", "POC's Mobile", 'Annual Revenue', 'How We Can Help You', 'How did you hear about us.', config.serviceLabel.replace(' *', '')];
      const form = document.forms.namedItem(config.formName) as HTMLFormElement;
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
              alert(fldLangVal[i] + ' cannot be none.');
              fieldObj.focus();
              return false;
            }
          }
        }
      }
      if ((window as any)[config.validateEmailFuncName] && !(window as any)[config.validateEmailFuncName]()) return false;
      return true;
    };
  }, [platform, isNetSuite, config]);

  const [loadScripts, setLoadScripts] = useState(false);
  useEffect(() => {
    if (!isClient) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setLoadScripts(true);
        observer.disconnect();
      }
    }, { rootMargin: '600px' });
    const target = document.getElementById('contact-form');
    if (target) observer.observe(target);
    return () => observer.disconnect();
  }, [isClient]);

  if (!isClient) return null;

  return (
    <>
      {loadScripts && (
        <Script
          id={`wf_anal_${platform}`}
          src={config.analyticsUrl}
          strategy="lazyOnload"
        />
      )}

      <section id="contact-form" className="relative py-14 sm:py-24 bg-[#0a0a0a] overflow-hidden scroll-mt-36">
        <div className="absolute top-0 left-0 w-[900px] h-[900px] bg-blue-500/30 rounded-full blur-[150px] -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-500/25 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/3" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl sm:rounded-[40px] bg-[#0d0d0d]/70 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-white/5 rounded-3xl sm:rounded-[40px]" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">

              {/* Left Side - Platform Content */}
              <motion.div
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col h-full justify-between p-5 sm:p-8 lg:p-14 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/Background/grid-white.svg')] opacity-[0.05] pointer-events-none z-10" />
                <div className="absolute inset-0 z-0 opacity-40">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/90 via-transparent to-blue-900/60" />
                </div>
                <div className="relative z-20">
                  <motion.h2
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                    className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-[1.15]"
                  >
                    Ready to Transform{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">Your Business?</span>
                  </motion.h2>
                  <motion.div
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                    className="space-y-4 mb-6 sm:mb-10 text-gray-300"
                  >
                    <p className="text-base sm:text-lg">
                      {isNetSuite
                        ? "Take the first step towards streamlined operations and accelerated growth with Oracle NetSuite."
                        : "Empower your team and drive exceptional growth with Zoho's integrated suite of business applications."}
                    </p>
                  </motion.div>
                  <motion.div
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                    className="mb-6 sm:mb-10"
                  >
                    <Image
                      src={isNetSuite ? "/images/netsuiteimages/netsuitelogos/netsuitepartner1.png" : "/images/zoho logos/zoho premium.png"}
                      alt={isNetSuite ? "NetSuite Partner" : "Zoho Partner"}
                      width={220} height={70}
                      className="h-12 sm:h-16 w-auto object-contain"
                      sizes="(max-width: 768px) 100vw, 220px"
                    />
                  </motion.div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    {[
                      { label: "Projects Completed", value: "700+", icon: Briefcase },
                      { label: "Global Customers", value: "250+", icon: Globe2 },
                      { label: "Customer Retention", value: "84%", icon: HeartHandshake },
                      { label: "Years Experience", value: "15+", icon: Rocket }
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }
                        }}
                        className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 backdrop-blur-md shadow-2xl hover:bg-white hover:border-white hover:-translate-y-1 transition-all duration-500 group"
                      >
                        <div className="flex items-center gap-3 mb-2.5 sm:mb-4">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                            <stat.icon size={18} />
                          </div>
                          <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-500/30 to-transparent group-hover:from-blue-500 transition-all duration-500" />
                        </div>
                        <div>
                          <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-0.5 group-hover:text-blue-950 transition-colors duration-500">{stat.value}</p>
                          <h3 className="font-bold text-sm sm:text-lg leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-200 group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-500">{stat.label}</h3>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Platform-Specific Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
                className="relative bg-white rounded-b-3xl lg:rounded-b-none lg:rounded-r-[40px] p-5 sm:p-8 lg:p-12 h-full flex flex-col justify-center"
              >
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center text-center py-8 gap-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-xl">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">Thank You!</h3>
                      <p className="text-gray-500 text-sm max-w-xs mx-auto">Your enquiry has been submitted successfully. Our team will reach out to you within 24 hours.</p>
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg hover:scale-[1.02] text-sm"
                    >
                      Submit Another Enquiry
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-6 sm:mb-8">
                      <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 tracking-tight">Get Expert Guidance</h3>
                      <p className="text-sm sm:text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-500">Fill in your details and our team will reach out within 24 hours.</p>
                    </div>

                    <div id="crmWebToEntityForm" className="crmWebToEntityForm">
                      <form
                        id={config.formId}
                        name={config.formName}
                        action="https://crm.zoho.in/crm/WebToLeadForm"
                        method="POST"
                        onSubmit={(e) => {
                          if ((window as any)[config.validateFuncName] && !(window as any)[config.validateFuncName]()) {
                            e.preventDefault();
                          }
                        }}
                        acceptCharset="UTF-8"
                        className="space-y-4"
                      >
                        <input type="text" className="hidden" name="xnQsjsdp" value={config.xnQsjsdp} readOnly />
                        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                        <input type="text" className="hidden" name="xmIwtLD" value={config.xmIwtLD} readOnly />
                        <input type="text" className="hidden" name="actionType" value="TGVhZHM=" readOnly />
                        <input type="text" className="hidden" name="returnURL" value="https://www.agsuite.tech/thank-you" readOnly />
                        <input type="text" className="hidden" name="aG9uZXlwb3Q" value="" readOnly />

                        {/* Hidden default fields required by Zoho */}
                        <select name="Lead Status" className="hidden" defaultValue="Database">
                          <option value="Database">Database</option>
                        </select>
                        <select name="Lead Source" className="hidden" defaultValue="Website (Form)">
                          <option value="Website (Form)">Website (Form)</option>
                        </select>
                        <input type="hidden" name="No of Employees" value="0" />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-700 text-xs font-bold uppercase tracking-widest mb-1.5">Name <span className="text-red-500">*</span></label>
                            <input type="text" id="Last_Name" name="Last Name" maxLength={80} required className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none text-sm transition-all shadow-sm" placeholder="John Doe" suppressHydrationWarning />
                          </div>
                          <div>
                            <label className="block text-gray-700 text-xs font-bold uppercase tracking-widest mb-1.5">POC's Email <span className="text-red-500">*</span></label>
                            <input type="text" id="Email" data-ftype="email" name="Email" maxLength={100} autoComplete="off" required className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none text-sm transition-all shadow-sm" placeholder="john@company.com" suppressHydrationWarning />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-700 text-xs font-bold uppercase tracking-widest mb-1.5">Role <span className="text-red-500">*</span></label>
                            <input type="text" id="Designation" name="Designation" maxLength={100} required className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none text-sm transition-all shadow-sm" placeholder="Manager" suppressHydrationWarning />
                          </div>
                          <div>
                            <label className="block text-gray-700 text-xs font-bold uppercase tracking-widest mb-1.5">POC's Mobile <span className="text-red-500">*</span></label>
                            <input type="text" id="Mobile" name="Mobile" maxLength={30} required className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none text-sm transition-all shadow-sm" placeholder="+91 9876543210" suppressHydrationWarning />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-700 text-xs font-bold uppercase tracking-widest mb-1.5">Company Name <span className="text-red-500">*</span></label>
                            <input type="text" id="Company" name="Company" maxLength={200} required className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none text-sm transition-all shadow-sm" placeholder="Company Inc." suppressHydrationWarning />
                          </div>
                          <div>
                            <label htmlFor={`service_${platform}`} className="block text-gray-700 text-xs font-bold uppercase tracking-widest mb-1.5">{config.serviceLabel}</label>
                            <select
                              id={config.serviceFieldName}
                              name={config.serviceFieldName}
                              onChange={(e) => (window as any).addAriaSelectedFooter?.(e)}
                              required
                              className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none appearance-none cursor-pointer text-sm transition-all shadow-sm"
                              suppressHydrationWarning
                            >
                              <option value="" disabled selected>{config.serviceDefault}</option>
                              {config.serviceOptions.map((opt) => (
                                <option key={opt} value={opt}>{opt}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor={`revenue_${platform}`} className="block text-gray-700 text-xs font-bold uppercase tracking-widest mb-1.5">Annual Revenue <span className="text-red-500">*</span></label>
                            <select
                              id="LEADCF19"
                              name="LEADCF19"
                              onChange={(e) => (window as any).addAriaSelectedFooter?.(e)}
                              required
                              className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none appearance-none cursor-pointer text-sm transition-all shadow-sm"
                              suppressHydrationWarning
                            >
                              <option value="-None-">-None-</option>
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
                          <div>
                            <label htmlFor={`hear_${platform}`} className="block text-gray-700 text-xs font-bold uppercase tracking-widest mb-1.5">How did you hear about us. <span className="text-red-500">*</span></label>
                            <select
                              id="LEADCF127"
                              name="LEADCF127"
                              onChange={(e) => (window as any).addAriaSelectedFooter?.(e)}
                              required
                              className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none appearance-none cursor-pointer text-sm transition-all shadow-sm"
                              suppressHydrationWarning
                            >
                              <option value="-None-">-None-</option>
                              <option value="Email">Email</option>
                              <option value="Event">Event</option>
                              <option value="Friend/Associate">Friend/Associate</option>
                              <option value="Search">Search</option>
                              <option value="Social Media">Social Media</option>
                              <option value="Referral">Referral</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-gray-700 text-xs font-bold uppercase tracking-widest mb-1.5">How We Can Help You <span className="text-red-500">*</span></label>
                          <textarea
                            id="LEADCF123"
                            name="LEADCF123"
                            rows={2}
                            required
                            className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none placeholder-gray-400 resize-none text-sm transition-all shadow-sm"
                            placeholder="Share your requirements..."
                            suppressHydrationWarning
                          />
                        </div>

                        <div className="flex pt-2">
                          <input
                            type="submit"
                            id="formsubmit"
                            className="formsubmit zcwf_button flex-1 py-3.5 bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-bold rounded-xl transition-all shadow-lg hover:scale-[1.02] text-sm uppercase tracking-widest cursor-pointer"
                            value="Submit Request"
                            suppressHydrationWarning
                          />
                        </div>
                      </form>
                    </div>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
