"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";

export default function EmbeddedZohoForm() {
    const router = useRouter();

    useEffect(() => {
        (window as any).addAriaSelected409531000047791049 = function () {
            const optionElem = (event as any).target;
            const previousSelectedOption = optionElem.querySelector('[aria-selected=true]');
            if (previousSelectedOption) {
                previousSelectedOption.removeAttribute('aria-selected');
            }
            optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected = 'true';
        };

        if (typeof (window as any)._wfa_fstprtcken === 'undefined') {
            (window as any)._wfa_fstprtcken = {};
        }
        (window as any)._wfa_fstprtcken[409531000047791049] = true;
    }, []);

    const handleFormSubmit = async (e: any) => {
        const form = e.target;

        // Mandatory Checks
        const mnd = ['Company', 'Last Name', 'Designation', 'Email', 'Mobile', 'LEADCF19', 'LEADCF123', 'LEADCF127', 'LEADCF165'];
        const labels = ['Company Name', 'Name', 'Role', "POC's Email", "POC's Mobile", 'Annual Revenue', 'How We Can Help You', 'How did you hear about us.', 'Services'];

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
            <Script id="wf_anal_embed" src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=0eb6a535c81a04e07aa886637740a304d7d59028aa8cf0d09048e8d1fbedf647e44d9f74b254709a0882eb1c31136d9cgid6d4592f2dce66ea8bcc60167960b9d0d27138cba33ac6ce7248c5c53d3a06fdcgid365cc1061c930ed0655f44af7ff3ea4d0b60a3b2784693cb6b2d5828f4dd9f35gid1cae83d6cd96c22775ca40c3b71805971400a95aea889397fdfa8c8f955523fd&tw=d336253c98c6a8f95f079a1420d0d2411cea660a574b2a28d90b4690781c9053&version=v2" strategy="afterInteractive" />
            <iframe name="zoho_iframe_embedded" style={{ display: 'none' }}></iframe>
            <form id="webform409531000047791049" action="https://crm.zoho.in/crm/WebToLeadForm" name="WebToLeads409531000047791049" method="POST" onSubmit={handleFormSubmit} acceptCharset="UTF-8">
                <input type="text" className="hidden" name="xnQsjsdp" defaultValue="ce6ebe1d9e713fef68d407d2105f962cb111097dcf75c7448aa9ab6b81795a86" readOnly />
                <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
                <input type="text" className="hidden" name="xmIwtLD" defaultValue="f709a413582c4286a2de04d475889148eb84a2d09b828569c9eba502ddcc5faa4e3fd730e1dcd4cb039e9925fd212664" readOnly />
                <input type="text" className="hidden" name="actionType" defaultValue="TGVhZHM=" readOnly />
                <input type="text" className="hidden" name="returnURL" defaultValue="https://www.agsuite.tech/thank-you" readOnly />
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
                        <label className="agsuite_label" htmlFor="Email">POC's Email *</label>
                        <input type="text" id="Email" ftype="email" name="Email" required maxLength={100} placeholder="john@company.com" />
                    </div>

                    <div className="agsuite_column">
                        <label className="agsuite_label" htmlFor="Mobile">POC's Mobile *</label>
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
                        <select id="LEADCF165" name="LEADCF165" required onChange={() => (window as any).addAriaSelected409531000047791049?.()}>
                            <option value="" disabled selected>-Select Service-</option>
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
                        <input type="submit" id="formsubmit" className="agsuite_button" value="Submit Request" />
                    </div>
                </div>
            </form>
        </div>
    );
}
