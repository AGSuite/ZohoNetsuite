"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";

export default function EmbeddedZohoForm() {
    const router = useRouter();
    const [returnUrl, setReturnUrl] = useState('https://www.agsuite.tech/thank-you');

    useEffect(() => {
        (window as any).addAriaSelected409531000047791049 = function (event: any) {
            const optionElem = event.target;
            const previousSelectedOption = optionElem.querySelector('[aria-selected=true]');
            if (previousSelectedOption) {
                previousSelectedOption.removeAttribute('aria-selected');
            }
            optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected = 'true';
        };

        if (typeof window !== 'undefined') {
            setReturnUrl(window.location.origin + '/thank-you');
        }

        (window as any).rccallback409531000047791049 = function () {
            const recap = document.getElementById('recap409531000047791049');
            if (recap) recap.setAttribute('captcha-verified', 'true');
            const recapErr = document.getElementById('recapErr409531000047791049');
            if (recapErr && recapErr.style.visibility === 'visible') {
                recapErr.style.visibility = 'hidden';
            }
        };

        const renderRecaptcha = () => {
            const container = document.getElementById('recap409531000047791049');
            if (container && container.children.length === 0 && (window as any).grecaptcha && (window as any).grecaptcha.render) {
                try {
                    (window as any).grecaptcha.render(container, {
                        sitekey: '6LfSYoItAAAAAGehWFygolLQdx9Sk2qkRDcG6_C_',
                        theme: 'light',
                        callback: (window as any).rccallback409531000047791049
                    });
                } catch (e) { }
            }
        };

        let attempts = 0;
        const interval = setInterval(() => {
            attempts++;
            const container = document.getElementById('recap409531000047791049');
            if (container && container.children.length > 0) {
                clearInterval(interval);
                return;
            }
            if ((window as any).grecaptcha && (window as any).grecaptcha.render) {
                renderRecaptcha();
            }
            if (attempts > 60) clearInterval(interval);
        }, 100);

        if (typeof (window as any)._wfa_fstprtcken === 'undefined') {
            (window as any)._wfa_fstprtcken = {};
        }
        (window as any)._wfa_fstprtcken[409531000047791049] = true;

        return () => clearInterval(interval);
    }, []);

    const handleFormSubmit = async (e: any) => {
        const form = e.target;

        // Mandatory Checks
        const mnd = ['Company', 'Last Name', 'Designation', 'Email', 'Mobile', 'LEADCF19', 'LEADCF123', 'LEADCF165'];
        const labels = ['Company Name', 'Name', 'Role', "POC's Email", "POC's Mobile", 'Annual Revenue', 'How We Can Help You', 'Services'];

        for (let i = 0; i < mnd.length; i++) {
            const fld = form[mnd[i]];
            if (!fld || !fld.value.trim() || fld.value === '-None-') {
                alert(labels[i] + ' cannot be empty.');
                fld?.focus();
                e.preventDefault();
                return false;
            }
        }

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
            <Script id="wf_anal_embed" src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=e7fa82545e6cbc426156b206aa8236f2c686a1dd1fa2201a42f8f8bc1f3ed582856adb0b2a204a9d5af92c2452e3a8a8gidc5c4b2eec1a1272f8a476c638c29bb49a4d78e91e7b5216007f5c7aeef1afd9fgid5f6d199f406123ad764d17f846376ab5e7fab29b0bebbbde07b6a8367d0aba4cgid8d7aa6245a7de773373511b56e3ffa902647cb1e3730e636a86b82d0019d0cce&tw=b2ff6a1aabcf001476b36b61fabd0fbad09ea545696c57b419b7adca06e6ef53&version=v2" strategy="afterInteractive" />
            <iframe name="zoho_iframe_embedded" style={{ display: 'none' }}></iframe>
            <form id="webform409531000047791049" action="https://crm.zoho.in/crm/WebToLeadForm" name="WebToLeads409531000047791049" method="POST" onSubmit={handleFormSubmit} acceptCharset="UTF-8">
                <input type="text" className="hidden" name="xnQsjsdp" defaultValue="afe7fc5b0536228280a461c09acb8cd162fafbcf476effeaa3a356db2e458dc1" readOnly />
                <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
                <input type="text" className="hidden" name="xmIwtLD" defaultValue="5a82ca35749552f4f750cae5dec3c5b7d801c95f58f820da5a9e196736a46f71217d8315d7638831db35e87703ae69fb" readOnly />
                <input type="text" className="hidden" name="actionType" defaultValue="TGVhZHM=" readOnly />
                <input type="text" className="hidden" name="returnURL" value={returnUrl} readOnly />
                <input type="text" className="hidden" name="aG9uZXlwb3Q" defaultValue="" readOnly />

                {/* Hidden default fields required by Zoho */}
                <select name="Lead Status" className="hidden" defaultValue="Database">
                    <option value="Database">Database</option>
                </select>
                <select name="Lead Source" className="hidden" defaultValue="Website (Form)">
                    <option value="Website (Form)">Website (Form)</option>
                </select>
                <input type="hidden" name="No of Employees" defaultValue="0" />

                <style dangerouslySetInnerHTML={{
                    __html: `
                    .zcwf_title { font-size: 32px; font-weight: 800; color: #111827!important; text-align: left; margin-bottom: 30px; letter-spacing: -0.02em; }
                    .agsuite_column { width: 50%; float: left; padding: 0 10px; margin-bottom: 18px; }
                    .agsuite_column-large { width: 100%; float: left; padding: 0 10px; margin-bottom: 18px; }
                    .agsuite_container::after { content: ""; display: table; clear: both; }
                    
                    .agsuite_container input[type="text"], 
                    .agsuite_container textarea, 
                    .agsuite_container select {
                        width: 100%!important;
                        background: #F9FAFB!important;
                        border: 1.5px solid #E5E7EB!important;
                        border-radius: 12px!important;
                        padding: 14px 16px!important;
                        font-size: 14px!important;
                        font-family: inherit!important;
                        color: #111827!important;
                        outline: none!important;
                        box-sizing: border-box!important;
                        transition: all 0.2s ease!important;
                    }

                    .agsuite_container input[type="text"]:focus, 
                    .agsuite_container textarea:focus, 
                    .agsuite_container select:focus {
                        border-color: #2563EB!important;
                        background: #FFFFFF!important;
                        box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1)!important;
                    }

                    .agsuite_label {
                        display: block!important;
                        font-size: 12px!important;
                        font-weight: 700!important;
                        color: #374151!important;
                        margin-bottom: 6px!important;
                        text-transform: uppercase!important;
                        letter-spacing: 0.05em!important;
                    }

                    .agsuite_button {
                        background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)!important;
                        color: #FFFFFF!important;
                        border: none!important;
                        padding: 16px 36px!important;
                        border-radius: 12px!important;
                        font-size: 14px!important;
                        font-weight: 700!important;
                        cursor: pointer!important;
                        width: 100%!important;
                        transition: all 0.3s ease!important;
                        text-transform: uppercase!important;
                        letter-spacing: 0.05em!important;
                    }
                    `
                }} />

                <div className="zcwf_title">Get In Touch</div>
                <div className="agsuite_container">
                    <div className="agsuite_column">
                        <label className="agsuite_label" htmlFor="Last_Name">Name *</label>
                        <input type="text" id="Last_Name" name="Last Name" required maxLength={80} placeholder="John Doe" />
                    </div>

                    <div className="agsuite_column">
                        <label className="agsuite_label" htmlFor="Email">Email *</label>
                        <input type="text" id="Email" data-ftype="email" name="Email" required maxLength={100} placeholder="john@company.com" />
                    </div>

                    <div className="agsuite_column">
                        <label className="agsuite_label" htmlFor="Mobile">Mobile *</label>
                        <input type="text" id="Mobile" name="Mobile" required maxLength={30} placeholder="+91 9876543210" />
                    </div>

                    <div className="agsuite_column">
                        <label className="agsuite_label" htmlFor="Designation">Role *</label>
                        <input type="text" id="Designation" name="Designation" required maxLength={100} placeholder="Manager" />
                    </div>

                    <div className="agsuite_column">
                        <label className="agsuite_label" htmlFor="Company">Company Name *</label>
                        <input type="text" id="Company" name="Company" required maxLength={200} placeholder="Company Inc." />
                    </div>

                    <div className="agsuite_column">
                        <label className="agsuite_label" htmlFor="LEADCF165">Services *</label>
                        <select id="LEADCF165" name="LEADCF165" defaultValue="" required onChange={() => (window as any).addAriaSelected409531000047791049?.()}>
                            <option value="" disabled>-Select Service-</option>
                            <option value="Zoho Licenses">Zoho Licenses</option>
                            <option value="Zoho Implementation">Zoho Implementation</option>
                            <option value="Zoho Licenses + Implementation">Zoho Licenses + Implementation</option>
                            <option value="Zoho Support">Zoho Support</option>
                            <option value="Zoho Optimization">Zoho Optimization</option>
                            <option value="Zoho Customization">Zoho Customization</option>
                            <option value="Zoho Integrations">Zoho Integrations</option>
                        </select>
                    </div>

                    <div className="agsuite_column">
                        <label className="agsuite_label" htmlFor="LEADCF19">Annual Revenue *</label>
                        <select id="LEADCF19" name="LEADCF19" required onChange={() => (window as any).addAriaSelected409531000047791049?.()}>
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

                    <div className="agsuite_column">
                        <label className="agsuite_label" htmlFor="LEADCF127">How did you hear about us. *</label>
                        <select id="LEADCF127" name="LEADCF127" required onChange={() => (window as any).addAriaSelected409531000047791049?.()}>
                            <option value="-None-">-None-</option>
                            <option value="Email">Email</option>
                            <option value="Event">Event</option>
                            <option value="Friend/Associate">Friend/Associate</option>
                            <option value="Search">Search</option>
                            <option value="Social Media">Social Media</option>
                            <option value="Referral">Referral</option>
                        </select>
                    </div>

                    <div className="agsuite_column-large">
                        <label className="agsuite_label" htmlFor="LEADCF123">How We Can Help You *</label>
                        <textarea id="LEADCF123" name="LEADCF123" required rows={3} placeholder="Tell us about your requirements..."></textarea>
                    </div>

                    <div className="agsuite_column-large">
                        <Script src="https://www.google.com/recaptcha/api.js" strategy="afterInteractive" />
                        <div
                            className="g-recaptcha"
                            data-sitekey="6LfSYoItAAAAAGehWFygolLQdx9Sk2qkRDcG6_C_"
                            data-theme="light"
                            data-callback="rccallback409531000047791049"
                            captcha-verified="false"
                            id="recap409531000047791049"
                        ></div>
                        <div
                            id="recapErr409531000047791049"
                            style={{ visibility: 'hidden', color: '#ef4444', fontSize: '12px' }}
                        >
                            Captcha validation failed. If you are not a robot then please try again.
                        </div>
                    </div>

                    <div className="agsuite_column-large">
                        <input type="submit" id="formsubmit" className="agsuite_button" value="Submit Request" />
                    </div>
                </div>
            </form>
        </div>
    );
}
