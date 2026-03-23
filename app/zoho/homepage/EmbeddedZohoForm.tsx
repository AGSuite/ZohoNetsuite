"use client";

import React from "react";

export default function EmbeddedZohoForm() {
    return (
        <div id="crmWebToEntityForm" className="zcwf_lblLeft crmWebToEntityForm">
            <form id="webform409531000000325116" action="https://crm.zoho.in/crm/WebToLeadForm" name="WebToLeads409531000000325116" method="POST" acceptCharset="UTF-8">
                <input type="text" className="hidden" name="xnQsjsdp" defaultValue="cae9ae065232fde2e40c34423041df835a4066ff2103c546e198d684b35e9861" readOnly />
                <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
                <input type="text" className="hidden" name="xmIwtLD" defaultValue="3820b2b7a84f952a9adb8f71d02ba0d6e9247f59314524fd5d4528cf4dff99b516b0d501ae4661e854a71c2dfb2b5263" readOnly />
                <input type="text" className="hidden" name="actionType" defaultValue="TGVhZHM=" readOnly />
                <input type="text" className="hidden" name="returnURL" defaultValue="https://agsuitetech.com/contact-us/thank-you.php" readOnly />
                <input type="text" className="hidden" id="ldeskuid" name="ldeskuid" />
                <input type="text" className="hidden" id="LDTuvid" name="LDTuvid" />

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
                    #recapErr409531000000325116 { font-size: 12px; color: #ef4444; margin-top: 10px; visibility: hidden; }
                    
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
                        <input type="text" id="Email" name="Email" placeholder="Business Email*" maxLength={100} />
                    </div>

                    <div className="agsuite_column">
                        <input type="text" id="Designation" name="Designation" placeholder="Job Title" maxLength={100} />
                    </div>

                    <div className="agsuite_column">
                        <input type="text" id="Mobile" name="Mobile" maxLength={30} placeholder="Mobile Number*" />
                    </div>

                    <div className="agsuite_column-large">
                        <input type="text" id="Company" name="Company" maxLength={200} placeholder="Company Name*" />
                    </div>

                    <div className="agsuite_column">
                        <select className="zcwf_col_fld_slt" id="LEADCF5" name="LEADCF5" defaultValue="">
                            <option value="" disabled>Service Interest*</option>
                            <option value="NetSuite Product /Services">Oracle NetSuite</option>
                            <option value="Zoho Products/Services">Zoho Suite</option>
                        </select>
                    </div>

                    <div className="agsuite_column">
                        <select className="zcwf_col_fld_slt" id="LEADCF40" name="LEADCF40" defaultValue="">
                            <option value="" disabled>Annual Revenue*</option>
                            <option value="Under $500K">Under $500K</option>
                            <option value="1M+">$1M+</option>
                            <option value="10M+">$10M+</option>
                        </select>
                    </div>

                    <div className="agsuite_column-large">
                        <textarea id="Description" name="Description" placeholder="Tell us about your requirements*"></textarea>
                    </div>

                    <div className="agsuite_column-large">
                        <div className="g-recaptcha" data-sitekey="6Lct5nwkAAAAADdrNkjf_H3jp-0XE9dUqAjgJXQ3" data-theme="light" id="recap409531000000325116"></div>
                        <div id="recapErr409531000000325116">Please verify you are not a robot.</div>
                        <input type="submit" id="formsubmit" className="zcwf_button" value="Send Request" aria-label="Submit Form" />
                    </div>
                </div>
            </form>
        </div>
    );
}
