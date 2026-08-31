"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import MultiSelectDropdown from "@/app/components/shared/MultiSelectDropdown";

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
                        sitekey: '6LeWKowtAAAAACYRbbynrmgj7_9Oiqz-QvTAEZb7',
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

        const formData = new FormData(form);
        fetch('/api/contact/zoho-notification', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: formData.get('Last Name'),
                email: formData.get('Email'),
                mobile: formData.get('Mobile'),
                role: formData.get('Designation'),
                company: formData.get('Company'),
                services: formData.getAll('LEADCF165'),
                revenue: formData.get('LEADCF19'),
                hearAbout: formData.get('LEADCF127'),
                message: formData.get('LEADCF123'),
                subjectTitle: 'Zoho Contact us Form Enquiry'
            })
        }).catch(() => {});

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
            <Script id="wf_anal_embed" src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=5be9692ef9ab427acf1391714f2fff91d5b72c469390938cefbd33ab84dd5b8e9c71223ce8c14f44c8e8365f6a8c23d6gidbc632d800f066907ef96d29b7bae4b8ea7e60f0229673f2235936f50246b89fbgid29eac7a96f602c220e122d79c6e3da45331fb2e363513e82ad55c00dfc35c738gidcab4223515c216b81de2936190487e2bac1ebee6f8458681d0b0cd6ba0ce7107&tw=d6fc29e8e9570866ed4bd03fb221b685fd56a29f2bc327bb3bb9169356a4b4e3&version=v2" strategy="lazyOnload" />
            <iframe name="zoho_iframe_embedded" style={{ display: 'none' }}></iframe>
            <form id="webform409531000047791049" action="https://crm.zoho.in/crm/WebToLeadForm" name="WebToLeads409531000047791049" method="POST" onSubmit={handleFormSubmit} acceptCharset="UTF-8">
                <input type="text" className="hidden" name="xnQsjsdp" defaultValue="262e1ed99e86602d574e7f7a3556903cf3987a60522587d193269076b51f27ac" readOnly />
                <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
                <input type="text" className="hidden" name="xmIwtLD" defaultValue="50434209e66e7930102f5d083964cd0f9819b88a702d9fc9750da997ff754f7e4e67130f9f65fb9d33069cf9e29699b3" readOnly />
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
                        <MultiSelectDropdown
                            id="LEADCF165"
                            name="LEADCF165"
                            placeholder="-Select Service-"
                            bgClassName="bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 shadow-sm"
                            textColorClassName="text-gray-900"
                            options={[
                                "Zoho Licenses",
                                "Zoho Implementation",
                                // "Zoho Licenses + Implementation",
                                "Zoho Support",
                                "Zoho Optimization",
                                "Zoho Customization",
                                "Zoho Integrations",
                            ]}
                        />
                    </div>

                    <div className="agsuite_column">
                        <label className="agsuite_label" htmlFor="LEADCF19">Annual Revenue *</label>
                        <select id="LEADCF19" name="LEADCF19" required onChange={() => (window as any).addAriaSelected409531000047791049?.()}>
                            <option value="-None-">-None-</option>
                            <option value="Less than $ 1M">Less than $ 1M</option>
                            <option value="$ 1M - 2.5M">$ 1M - 2.5M</option>
                            <option value="$ 2.5M - 5M">$ 2.5M - 5M</option>
                            <option value="$ 5M - 10M">$ 5M - 10M</option>
                            <option value="$ 10M - 15M">$ 10M - 15M</option>
                            <option value="$ 15M - 25M">$ 15M - 25M</option>
                            <option value="$ 25M - 50M">$ 25M - 50M</option>
                            <option value="$ 50M - 100M">$ 50M - 100M</option>
                            <option value="$ 100M - 250M">$ 100M - 250M</option>
                            <option value="More than $ 250M">More than $ 250M</option>
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
                        <Script src="https://www.google.com/recaptcha/api.js" async defer strategy="lazyOnload" />
                        <div
                            className="g-recaptcha"
                            data-sitekey="6LeWKowtAAAAACYRbbynrmgj7_9Oiqz-QvTAEZb7"
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
