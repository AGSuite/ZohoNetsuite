"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import EmbeddedZohoForm from "../homepage/EmbeddedZohoForm";
import { Mail, MapPin } from "lucide-react";

const offices = {
  India: [
    {
      title: "Pune, INDIA",
      location: "Pune, Maharashtra",
      address: `Office No. 1110, 11th floor, Gera’s Imperium Rise, Hinjewadi Rajiv Gandhi Infotech Park,
Hinjewadi, Pune, Maharashtra, INDIA – 411057.`,
    },
    {
      title: "Mumbai Location",
      location: "Mumbai, Maharashtra",
      address: `3rd Floor, Unit no. 4, Inspire, Main Road, G Block BKC,
Bandra Kurla Complex, Mumbai, Maharashtra INDIA – 400051`,
    },
    {
      title: "Bangalore Location",
      location: "Bangalore, Karnataka",
      address: `Whitefield, Survey No. 192, Whitefield Main Road,
B Narayanapura, Mahadevapura, Bangalore, KA, INDIA – 560001`,
    },
    {
      title: "Hyderabad Location",
      location: "Hyderabad, Telangana",
      address: `6th Floor, N Heights, Plot No 38, Phase 2 Hitec City,
Siddiq nagar, Hyderabad, Telangana, INDIA – 500081`,
    },
    {
      title: "Gurugram Location",
      location: "Gurugram, Haryana",
      address: `07th Floor, Gate No. 03 & Gate No. 04, Ambience Island,
NH 48, Gurugram, Haryana, INDIA – 122002`,
    },
    {
      title: "Udaipur, Rajasthan",
      location: "Udaipur, Rajasthan",
      address: `F-18 Subcity Center, Opp. Income Tax Office,
Udaipur, Rajasthan INDIA – 313001`,
    },
  ],
  USA: [
    {
      title: "Florida, USA",
      location: "Fort Myers, Florida",
      address: `6421-1 Metro Plantation Road,
Fort Myers, FL, US – 33966`,
      email: "contact@agsuitetech.com",
    },
  ],
  UK: [
    {
      title: "Cornwall, UK",
      location: "St Austell, Cornwall",
      address: `The Old Dairy, Drummers Hill, St Austell,
Cornwall, PL26 8XR`,
      email: "contact@agsuitetech.com",
    },
  ],
};

// Define global functions for the form
declare global {
  interface Window {
    addAriaSelected409531000000325116: () => void;
    rccallback409531000000325116: () => void;
    reCaptchaAlert409531000000325116: () => boolean;
    validateEmail409531000000325116: () => boolean;
    checkMandatory409531000000325116: () => boolean;
    validateNumber?: (e: KeyboardEvent) => boolean;
    sendEmail?: () => void;
    trackVisitor409531000000325116: () => void;
  }
}

export default function ZohoContactPage() {
  useEffect(() => {
    // Define the functions globally when component mounts
    window.addAriaSelected409531000000325116 = function () {
      const optionElem = (event as any).target;
      const previousSelectedOption = optionElem.querySelector('[aria-selected=true]');
      if (previousSelectedOption) {
        previousSelectedOption.removeAttribute('aria-selected');
      }
      optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected = 'true';
    };

    window.rccallback409531000000325116 = function () {
      if (document.getElementById('recap409531000000325116')) {
        document.getElementById('recap409531000000325116')?.setAttribute('captcha-verified', 'true');
      }
      const errorElement = document.getElementById('recapErr409531000000325116');
      if (errorElement && errorElement.style.visibility === 'visible') {
        errorElement.style.visibility = 'hidden';
      }
    };

    window.reCaptchaAlert409531000000325116 = function () {
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

    window.validateEmail409531000000325116 = function () {
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

    window.checkMandatory409531000000325116 = function () {
      const mndFileds = ['Company', 'Last Name', 'Designation', 'Email', 'Mobile', 'Description', 'LEADCF5', 'LEADCF40'];
      const fldLangVal = ['Company Name', 'Name', 'Role', 'Business Email', 'Mobile', 'Tell Us How We Can Help', 'Product / Services', 'Annual Revenue'];
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
            if (selectField.options[selectField.selectedIndex].value === '-None-') {
              alert(fldLangVal[i] + ' cannot be none.');
              fieldObj.focus();
              return false;
            }
          }
        }
      }
      window.trackVisitor409531000000325116?.();
      if (window.validateEmail409531000000325116 && !window.validateEmail409531000000325116()) return false;
      if (window.reCaptchaAlert409531000000325116 && !window.reCaptchaAlert409531000000325116()) return false;

      window.sendEmail?.();
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

    window.sendEmail = function () {
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

    window.trackVisitor409531000000325116 = function () {
      try {
        const zoho = (window as any).$zoho;
        if (zoho) {
          const form = document.forms.namedItem('WebToLeads409531000000325116') as HTMLFormElement;
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
  }, []);

  const [activeCountry, setActiveCountry] = useState<keyof typeof offices>("India");

  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="lazyOnload"
      />
      <Script
        id="wf_anal_footer"
        src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=2ad153905083cc4b4058fa27687055376e156f7ad6e9fc52d9895986981cb6172bddf27a9051f3745fcf3d24b09fb012gidcf736cc89d868a9fa6150881def27ffe802f94e956bff6513de684e48d8b35c1gid0596f309f4dca6fd5d8b7704fd1d37b52bdbc54dd97c1957c613be2d12dd943agid1b08a4436f8cfc10239cf5e2aa7cda0a23e1cf9ad370739723a113c3f7318e99&tw=d44cee7b494604b05833cee35187d02e3ccf139f17b3bef4604b84b3f02bded7"
        strategy="lazyOnload"
      />
      <section className="pt-20">
        <div className="min-h-[80vh] flex items-center justify-center bg-[url('/images/contact/girlcontact.jpg')] bg-cover bg-center bg-no-repeat px-6 md:px-10 py-12 md:py-16">
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="flex flex-col items-start space-y-4">
              <p className="text-sm text-gray-100 tracking-wide">
                <Link href="/" className="hover:underline hover:text-gray-100 transition">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-100 font-medium lowercase">zoho / contact</span>
              </p>

              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Contact Us
              </h1>

              <p className="text-gray-100 text-lg lg:text-xl max-w-lg leading-relaxed font-light">
                Reach out to our certified Zoho experts today and start your digital transformation journey.
              </p>
            </div>

            <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-2xl border border-gray-100">
              <EmbeddedZohoForm />
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative text-white py-24 px-4 md:px-8 lg:px-20"
        style={{
          backgroundImage: "url('/images/backgroundimg/bg3.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 tracking-tight italic">Our Offices</h2>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.keys(offices).map((country) => (
              <button
                key={country}
                onClick={() => setActiveCountry(country as keyof typeof offices)}
                className={`px-10 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 ${activeCountry === country
                  ? "bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.5)] scale-105 border-red-400"
                  : "bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/10"
                  }`}
              >
                {country}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices[activeCountry].map((office, index) => (
              <div
                key={index}
                className="relative bg-black/60 backdrop-blur-2xl p-8 rounded-3xl border border-white/10 shadow-2xl hover:bg-black/70 transition-all group overflow-hidden"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-red-500 to-transparent group-hover:w-2 transition-all"></div>

                <h3 className="text-xl font-bold text-red-500 mb-2 italic uppercase tracking-tight">{office.title}</h3>
                <p className="text-sm text-gray-400 font-bold mb-4 flex items-center gap-2">
                  <MapPin size={14} className="text-red-500" /> {office.location}
                </p>
                <div className="h-px w-full bg-white/10 mb-5" />
                <p className="text-sm text-gray-200 whitespace-pre-line leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {office.address}
                </p>

                {(office as any).email && (
                  <div className="mt-6 pt-5 border-t border-white/5">
                    <a
                      href={`mailto:${(office as any).email}`}
                      className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-bold text-sm tracking-tight transition-colors"
                    >
                      <Mail size={16} /> {(office as any).email}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-24">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 italic">Ready to Connect?</h3>
            <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto font-light">
              Our global team is ready to assist you with your business needs across all timezones.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link
                href="/zoho/contact/free-consultation"
                className="w-full sm:w-auto px-10 py-4 bg-red-600 text-white rounded-full font-bold shadow-xl hover:bg-red-700 hover:shadow-red-600/20 transition-all uppercase tracking-widest text-xs"
              >
                Free Consultation
              </Link>

              <a
                href="mailto:contact@agsuitetech.com"
                className="w-full sm:w-auto px-10 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2"
              >
                <Mail size={16} /> Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// End of file
