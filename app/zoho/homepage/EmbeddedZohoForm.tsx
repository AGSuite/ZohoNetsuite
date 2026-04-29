"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";

export default function EmbeddedZohoForm() {
    const router = useRouter();
    useEffect(() => {
        (window as any).rccallback409531000042578178 = function () {
            if (document.getElementById('recap409531000042578178')) {
                document.getElementById('recap409531000042578178')?.setAttribute('captcha-verified', 'true');
            }
            const errorElement = document.getElementById('recapErr409531000042578178');
            if (errorElement && errorElement.style.visibility === 'visible') {
                errorElement.style.visibility = 'hidden';
            }
        };

        const renderRecaptcha = () => {
            const container = document.getElementById('recap409531000042578178');
            if ((window as any).grecaptcha && container) {
                try {
                    // Check if already rendered
                    if (container.children.length > 0) return;

                    (window as any).grecaptcha.render('recap409531000042578178', {
                        'sitekey': '6LcWAs0sAAAAAEnzRj3y4c4zhunjhWHq4r7-Ci3y',
                        'theme': 'light',
                        'callback': (window as any).rccallback409531000042578178
                    });
                } catch (e) {
                    console.error("reCAPTCHA render error:", e);
                }
            }
        };

        if ((window as any).grecaptcha) {
            if ((window as any).grecaptcha.ready) {
                (window as any).grecaptcha.ready(renderRecaptcha);
            } else {
                renderRecaptcha();
            }
        } else {
            const interval = setInterval(() => {
                if ((window as any).grecaptcha) {
                    if ((window as any).grecaptcha.ready) {
                        (window as any).grecaptcha.ready(renderRecaptcha);
                    } else {
                        renderRecaptcha();
                    }
                    clearInterval(interval);
                }
            }, 300);
            setTimeout(() => clearInterval(interval), 5000);
        }
    }, []);

    const handleFormSubmit = async (e: any) => {
        const form = e.target;
        
        // 1. Mandatory Checks
        const mnd = ['Last Name', 'LEADCF8', 'Mobile', 'Company', 'LEADCF5', 'LEADCF19', 'LEADCF123'];
        const labels = ['Name', 'Business Email', 'POC\'s Mobile', 'Company Name', 'Service', 'Annual Revenue', 'How We Can Help You'];
        
        for (let i = 0; i < mnd.length; i++) {
            const fld = form[mnd[i]];
            if (!fld || !fld.value.trim()) {
                alert(labels[i] + ' cannot be empty.');
                fld?.focus();
                e.preventDefault();
                return false;
            }
        }

        // 2. Email Validation (Business only)
        const email = form['LEADCF8'].value;
        const domain = email.split('@')[1]?.toLowerCase();
        const forbidden = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'live.com', 'icloud.com'];
        if (forbidden.includes(domain)) {
            alert('Please enter a business email address. Personal emails (@' + domain + ') are not accepted.');
            form['LEADCF8'].focus();
            e.preventDefault();
            return false;
        }

        // 3. Mobile Validation (10 digits)
        const mobile = form['Mobile'].value.replace(/\D/g, '');
        if (mobile.length !== 10) {
            alert('Mobile number must be exactly 10 digits.');
            form['Mobile'].focus();
            e.preventDefault();
            return false;
        }

        // 4. Captcha
        const recap = document.getElementById('recap409531000042578178');
        if (recap && recap.getAttribute('captcha-verified') === 'false') {
            const errorElement = document.getElementById('recapErr409531000042578178');
            if (errorElement) errorElement.style.visibility = 'visible';
            e.preventDefault();
            return false;
        }

        // 5. Email Notification
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
            platform: 'Zoho'
        };

        fetch('/api/contact/netsuite', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(emailData)
        }).catch(err => console.error('Email error:', err));

        // 6. Submit via iframe
        form.target = 'zoho_iframe_embedded';
        
        const btn = document.getElementById('formsubmit') as HTMLInputElement;
        if (btn) btn.disabled = true;

        setTimeout(() => {
            router.push('/thank-you');
            if (btn) btn.disabled = false;
        }, 2000);

        return true;
    };
    return (
        <div id="crmWebToEntityForm" className="zcwf_lblLeft crmWebToEntityForm">
            <Script src="https://www.google.com/recaptcha/api.js" strategy="afterInteractive" />
            <iframe name="zoho_iframe_embedded" style={{ display: 'none' }}></iframe>
            <form id="webform409531000042578178" action="https://crm.zoho.in/crm/WebToLeadForm" name="WebToLeads409531000042578178" method="POST" onSubmit={handleFormSubmit} acceptCharset="UTF-8">
                <input type="text" className="hidden" name="xnQsjsdp" defaultValue="e8dd3e716514c8f9dcd1eb1f2bace3224b829c134dada7edb1257e30d50f8d82" readOnly />
                <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
                <input type="text" className="hidden" name="xmIwtLD" defaultValue="7ce425cbc5576979cf8d2dfa7bcaeb8eb6b6c2507daa5786fd6186f5e9214bce6b94a37008af83711e13228fec1f14a" readOnly />
                <input type="text" className="hidden" name="actionType" defaultValue="TGVhZHM=" readOnly />
                <input type="text" className="hidden" name="returnURL" defaultValue="https://zoho-netsuite.vercel.app/thank-you" readOnly />
                <input type="text" className="hidden" id="ldeskuid" name="ldeskuid" readOnly />
                <input type="text" className="hidden" id="LDTuvid" name="LDTuvid" readOnly />


                <style dangerouslySetInnerHTML={{
                    __html: `
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
                    #recapErr409531000042578178 { font-size: 12px; color: #ef4444; margin-top: 10px; visibility: hidden; }
                    
                    @media (max-width: 640px) {
                      .agsuite_column { width: 100%; padding: 0; }
                    }
                `}} />

                <div className="agsuite_container">
                    <div className="zcwf_title">Get a Consultation</div>

                    <div className="agsuite_column">
                        <input type="text" id="Last_Name" name="Last Name" placeholder="Full Name*" maxLength={80} />
                    </div>

                    <div className="agsuite_column">
                        <input type="text" id="LEADCF8" name="LEADCF8" placeholder="Business Email*" maxLength={100} />
                    </div>

                    <div className="agsuite_column">
                        <input type="text" id="Designation" name="Designation" placeholder="Job Title*" maxLength={100} />
                    </div>

                    <div className="agsuite_column">
                        <input type="text" id="Mobile" name="Mobile" maxLength={30} placeholder="Mobile Number*" />
                    </div>

                    <div className="agsuite_column-large">
                        <input type="text" id="Company" name="Company" maxLength={200} placeholder="Company Name*" />
                    </div>

                    <div className="agsuite_column">
                        <select className="zcwf_col_fld_slt" id="LEADCF5" name="LEADCF5" defaultValue="">
                            <option value="" disabled>Select Service*</option>
                            <option value="Licenses">Licenses</option>
                            <option value="AMC">AMC</option>
                        </select>
                    </div>

                    <div className="agsuite_column">
                        <select className="zcwf_col_fld_slt" id="LEADCF19" name="LEADCF19" defaultValue="">
                            <option value="" disabled>Annual Revenue*</option>
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


                    <div className="agsuite_column-large">
                        <textarea id="LEADCF123" name="LEADCF123" placeholder="Tell us about your requirements*"></textarea>
                    </div>

                    <div className="agsuite_column-large">
                        <div data-sitekey="6LcWAs0sAAAAAEnzRj3y4c4zhunjhWHq4r7-Ci3y" data-theme="light" captcha-verified="false" id="recap409531000042578178"></div>
                        <div id="recapErr409531000042578178">Please verify you are not a robot.</div>
                        <input type="submit" id="formsubmit" className="zcwf_button" value="Send Request" aria-label="Submit Form" />
                    </div>
                </div>
            </form>
            <Script 
                id="wf_anal" 
                src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=ffa911f519bdac1fd37141e7458859338a4c0807209e53fcd9161a4ef8002b597777f2d47c34393e74912d83270ec629gid2020ff77b8590645f6909775bceb1dfe9b354b521b7d31a381183051979950afgidc32afce85ab5735ae0662898fbed0b63bef845d0ee34535ca4044be79f94eb16gidc20f47455171d038199ce12255d9fb14618138cdb451a0053d17b76b5cbc594d&tw=a5bf274d720cc51e70d06319b934b2ae14a201bb6424c6ca86bd81d126e9d37e"
                strategy="lazyOnload"
            />
        </div>
    );
}
