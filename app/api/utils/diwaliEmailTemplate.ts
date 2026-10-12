export type DiwaliAudienceType = 'existing' | 'prospect';

export interface DiwaliEmailOptions {
  recipientName?: string;
  companyName?: string;
  type?: DiwaliAudienceType;
}

/**
 * Shared HTML email layout with AGSuite festive theme, header, partner badges, social links & footer
 */
function renderDiwaliEmailShell(preheaderText: string, bodyContentHtml: string): string {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="x-apple-disable-message-reformatting" />
  <title>Happy Diwali from AGSuite Technologies</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td, p, a, span { font-family: Arial, Helvetica, sans-serif !important; }
  </style>
  <![endif]-->
  <style type="text/css">
    body {
      margin: 0;
      padding: 0;
      min-width: 100%;
      background-color: #0b132b;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    table {
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }
    img {
      border: 0;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
      display: block;
    }
    a {
      text-decoration: none;
    }
    @media only screen and (max-width: 620px) {
      .email-container {
        width: 100% !important;
        max-width: 100% !important;
      }
      .content-padding {
        padding-left: 20px !important;
        padding-right: 20px !important;
      }
      .hero-image {
        width: 100% !important;
        height: auto !important;
      }
      .social-icons-table {
        margin: 0 auto !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #0b132b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">

  <!-- PREHEADER -->
  <div style="display: none; font-size: 1px; color: #0b132b; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    ${preheaderText}
    &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <!-- WRAPPER -->
  <table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#0b132b" style="background-color: #0b132b; width: 100%;">
    <tr>
      <td align="center" style="padding: 24px 12px 40px 12px;">

        <!--[if (gte mso 9)|(IE)]>
        <table role="presentation" width="600" align="center" border="0" cellpadding="0" cellspacing="0">
        <tr>
        <td>
        <![endif]-->

        <!-- MAIN CONTAINER -->
        <table role="presentation" class="email-container" width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #0f1c3f; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45); border: 1px solid rgba(212, 175, 55, 0.3);">

          <!-- 1. HEADER (AGSuite Logo) -->
          <tr>
            <td align="center" style="padding: 22px 24px; background-color: #ffffff; border-bottom: 2px solid #d4af37;">
              <a href="https://agsuitetech.com" target="_blank" rel="noopener noreferrer">
                <img src="https://agsuitetech.com/email/agsuite-logo.png" alt="AGSuite Technologies - Empower Your Success" width="180" style="width: 180px; max-width: 100%; height: auto; margin: 0 auto;" />
              </a>
            </td>
          </tr>

          <!-- 2. HERO IMAGE (Diwali Banner) -->
          <tr>
            <td align="center" bgcolor="#081028" style="background-color: #081028; line-height: 0; padding: 0;">
              <a href="https://agsuitetech.com" target="_blank" rel="noopener noreferrer">
                <img class="hero-image" src="https://agsuitetech.com/email/happy-diwali.jpg" alt="Happy Diwali - May the Festival of Lights Bring You Prosperity and Joy" width="600" style="width: 100%; max-width: 600px; height: auto; display: block;" />
              </a>
            </td>
          </tr>

          <!-- 3. FESTIVE GREETING BODY -->
          <tr>
            <td class="content-padding" style="padding: 36px 36px 28px 36px; background-color: #0f1c3f; text-align: center;">

              <p style="margin: 0 0 12px 0; font-size: 13px; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: #f5b700; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                FESTIVAL OF LIGHTS &bull; DIWALI WISHES
              </p>

              <h1 style="margin: 0 0 18px 0; font-size: 26px; line-height: 1.3; font-weight: 700; color: #ffffff; font-family: Georgia, 'Times New Roman', serif;">
                Wishing You a Blessed, Joyous &amp; Prosperous Diwali!
              </h1>

              <!-- Diya Divider -->
              <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto 24px auto;">
                <tr>
                  <td width="60" style="border-bottom: 1px solid #d4af37;"></td>
                  <td style="padding: 0 12px; color: #f5b700; font-size: 16px;">🪔</td>
                  <td width="60" style="border-bottom: 1px solid #d4af37;"></td>
                </tr>
              </table>

              ${bodyContentHtml}

            </td>
          </tr>

          <!-- 4. PARTNERS SECTION -->
          <tr>
            <td align="center" style="padding: 22px 20px; background-color: #ffffff; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0;">
              <p style="margin: 0 0 10px 0; font-size: 11px; font-weight: 700; letter-spacing: 1.8px; text-transform: uppercase; color: #64748b; font-family: 'Segoe UI', Arial, sans-serif;">
                Authorized Partner
              </p>
              <a href="https://agsuitetech.com" target="_blank" rel="noopener noreferrer">
                <img src="https://agsuitetech.com/email/img/partners-logos.png" alt="Oracle NetSuite Solution Provider Partner | Zoho Premium Partner" width="380" style="width: 380px; max-width: 90%; height: auto; margin: 0 auto;" />
              </a>
            </td>
          </tr>

          <!-- 5. SOCIAL CHANNELS SECTION -->
          <tr>
            <td align="center" style="padding: 26px 24px 16px 24px; background-color: #0b152e;">
              <p style="margin: 0 0 16px 0; font-size: 12px; font-weight: 600; color: #94a3b8; letter-spacing: 1px; text-transform: uppercase; font-family: 'Segoe UI', Arial, sans-serif;">
                Follow Us &amp; Stay Connected
              </p>

              <table role="presentation" class="social-icons-table" border="0" cellpadding="0" cellspacing="0" align="center">
                <tr>
                  <!-- LinkedIn -->
                  <td align="center" style="padding: 0 8px;">
                    <a href="https://www.linkedin.com/company/agsuitetech/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                      <img src="https://agsuitetech.com/email/img/44994ddd001121ef78ab.png" alt="LinkedIn" width="34" height="34" style="width: 34px; height: 34px; border-radius: 6px; display: block;" />
                    </a>
                  </td>
                  <!-- Facebook -->
                  <td align="center" style="padding: 0 8px;">
                    <a href="https://www.facebook.com/AGSuiteTech" target="_blank" rel="noopener noreferrer" title="Facebook">
                      <img src="https://agsuitetech.com/email/img/f365fd888609adb4592a.png" alt="Facebook" width="34" height="34" style="width: 34px; height: 34px; border-radius: 6px; display: block;" />
                    </a>
                  </td>
                  <!-- Instagram -->
                  <td align="center" style="padding: 0 8px;">
                    <a href="https://www.instagram.com/agsuitetech/" target="_blank" rel="noopener noreferrer" title="Instagram">
                      <img src="https://agsuitetech.com/email/img/3581a585b3c1ed74caa7.png" alt="Instagram" width="34" height="34" style="width: 34px; height: 34px; border-radius: 6px; display: block;" />
                    </a>
                  </td>
                  <!-- Twitter / X -->
                  <td align="center" style="padding: 0 8px;">
                    <a href="https://x.com/agsuite" target="_blank" rel="noopener noreferrer" title="X / Twitter">
                      <img src="https://agsuitetech.com/email/img/2a322e4d20895f8456e3.png" alt="X (Twitter)" width="34" height="34" style="width: 34px; height: 34px; border-radius: 6px; display: block;" />
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 6. FOOTER -->
          <tr>
            <td class="content-padding" align="center" style="padding: 16px 32px 30px 32px; background-color: #0b152e; border-top: 1px solid rgba(255, 255, 255, 0.08);">
              <p style="margin: 0 0 10px 0; font-size: 13px; line-height: 1.6; color: #94a3b8; font-family: 'Segoe UI', Arial, sans-serif;">
                <strong>AGSuite Technologies Pvt. Ltd.</strong><br />
                1111, 11th Floor, Gera Imperium Rise, Wipro Circle, Rajiv Gandhi Infotech Park, Hinjawadi Phase II, Pune, Maharashtra 411057
              </p>

              <p style="margin: 0 0 14px 0; font-size: 13px; line-height: 1.6; color: #94a3b8; font-family: 'Segoe UI', Arial, sans-serif;">
                Email: <a href="mailto:hello@agsuitetech.com" style="color: #f5b700; text-decoration: none; font-weight: 600;">hello@agsuitetech.com</a> &nbsp;|&nbsp;
                Call: <a href="tel:+919461046161" style="color: #f5b700; text-decoration: none; font-weight: 600;">+91 9461046161</a> &nbsp;|&nbsp;
                Web: <a href="https://agsuitetech.com" target="_blank" rel="noopener noreferrer" style="color: #f5b700; text-decoration: none; font-weight: 600;">agsuitetech.com</a>
              </p>

              <p style="margin: 0 0 6px 0; font-size: 11px; color: #64748b; font-family: 'Segoe UI', Arial, sans-serif;">
                &copy; 2025 AGSuite Technologies Pvt. Ltd. All rights reserved.
              </p>

              <p style="margin: 0; font-size: 11px; color: #64748b; font-family: 'Segoe UI', Arial, sans-serif;">
                <a href="https://agsuitetech.com/privacy-policy/" target="_blank" rel="noopener noreferrer" style="color: #64748b; text-decoration: underline;">Privacy Policy</a> &nbsp;&bull;&nbsp;
                <a href="https://agsuitetech.com/terms-and-conditions/" target="_blank" rel="noopener noreferrer" style="color: #64748b; text-decoration: underline;">Terms &amp; Conditions</a>
              </p>
            </td>
          </tr>

        </table>
        <!-- END MAIN CONTAINER -->

        <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->

      </td>
    </tr>
  </table>

</body>
</html>`;
}

/**
 * Diwali Email Template for Existing Customers
 */
export function getDiwaliExistingCustomerEmailTemplate(options: DiwaliEmailOptions = {}): string {
  const name = options.recipientName?.trim() || 'Valued Customer';
  const preheader = 'Warm Diwali wishes from AGSuite Technologies! Thank you for your continued trust and partnership.';

  const bodyHtml = `
              <!-- Greeting & Letter Body -->
              <div style="text-align: left;">
                <p style="margin: 0 0 16px 0; font-size: 16px; line-height: 1.6; color: #f1f5f9; font-family: 'Segoe UI', Arial, sans-serif;">
                  Dear <strong style="color: #f5b700;">${name}</strong>,
                </p>

                <p style="margin: 0 0 16px 0; font-size: 17px; line-height: 1.5; font-weight: 700; color: #f5b700; font-family: 'Segoe UI', Arial, sans-serif;">
                  Warm Diwali wishes from AGSuite Technologies!
                </p>

                <p style="margin: 0 0 16px 0; font-size: 15px; line-height: 1.7; color: #cbd5e1; font-family: 'Segoe UI', Arial, sans-serif;">
                  As we celebrate the festival of lights, we would like to thank you for your continued trust and partnership. It has been a pleasure being part of your business journey, and we truly value the relationship we share with you.
                </p>

                <p style="margin: 0 0 16px 0; font-size: 15px; line-height: 1.7; color: #cbd5e1; font-family: 'Segoe UI', Arial, sans-serif;">
                  May this Diwali bring new opportunities, prosperity, and success to you and your organization. May the year ahead be filled with growth, innovation, and new milestones.
                </p>

                <p style="margin: 0 0 16px 0; font-size: 15px; line-height: 1.7; color: #cbd5e1; font-family: 'Segoe UI', Arial, sans-serif;">
                  As your business continues to evolve, our team remains committed to supporting your <strong style="color: #ffffff;">Oracle NetSuite ERP journey</strong> through reliable support, process optimization, automation, and solutions that help your business operate more efficiently.
                </p>

                <p style="margin: 0 0 18px 0; font-size: 15px; line-height: 1.7; color: #cbd5e1; font-family: 'Segoe UI', Arial, sans-serif;">
                  We look forward to achieving many more milestones together.
                </p>

                <p style="margin: 0 0 24px 0; font-size: 16px; line-height: 1.6; font-weight: 600; color: #f1f5f9; font-family: 'Segoe UI', Arial, sans-serif;">
                  Wishing you, your team, and your family a <strong style="color: #f5b700;">Happy, Safe, and Prosperous Diwali!</strong>
                </p>

                <!-- Sign-off Block -->
                <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid rgba(212, 175, 55, 0.25);">
                  <p style="margin: 0 0 4px 0; font-size: 14px; color: #cbd5e1; font-family: 'Segoe UI', Arial, sans-serif;">
                    Warm regards,
                  </p>
                  <p style="margin: 0 0 3px 0; font-size: 16px; font-weight: 700; color: #ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
                    Team AGSuite Technologies
                  </p>
                  <p style="margin: 0 0 8px 0; font-size: 13px; font-style: italic; color: #d4af37; font-family: 'Segoe UI', Arial, sans-serif;">
                    Your Partner in Smarter Business Growth
                  </p>
                  <p style="margin: 0; font-size: 13px; color: #94a3b8; font-family: 'Segoe UI', Arial, sans-serif;">
                    Website: <a href="https://agsuitetech.com" target="_blank" rel="noopener noreferrer" style="color: #f5b700; text-decoration: none; font-weight: 600;">agsuitetech.com</a>
                  </p>
                </div>
              </div>

              <!-- CTA Button -->
              <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="margin: 28px auto 8px auto;">
                <tr>
                  <td align="center" style="border-radius: 28px; background: linear-gradient(135deg, #e5a700 0%, #b38200 100%); background-color: #d4af37;">
                    <a href="https://agsuitetech.com" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 13px 32px; font-size: 13px; font-weight: 700; letter-spacing: 0.8px; color: #0b132b; text-decoration: none; border-radius: 28px; text-transform: uppercase;">
                      Visit AGSuite Technologies &rarr;
                    </a>
                  </td>
                </tr>
              </table>`;

  return renderDiwaliEmailShell(preheader, bodyHtml);
}

/**
 * Diwali Email Template for Prospective Customers
 */
export function getDiwaliProspectEmailTemplate(options: DiwaliEmailOptions = {}): string {
  const name = options.recipientName?.trim() || 'Business Leader';
  const preheader = 'Happy Diwali from AGSuite Technologies! Wishing you and your organization new beginnings, progress, and scalable growth.';

  const bodyHtml = `
              <!-- Greeting & Letter Body -->
              <div style="text-align: left;">
                <p style="margin: 0 0 16px 0; font-size: 16px; line-height: 1.6; color: #f1f5f9; font-family: 'Segoe UI', Arial, sans-serif;">
                  Dear <strong style="color: #f5b700;">${name}</strong>,
                </p>

                <p style="margin: 0 0 16px 0; font-size: 17px; line-height: 1.5; font-weight: 700; color: #f5b700; font-family: 'Segoe UI', Arial, sans-serif;">
                  Happy Diwali from AGSuite Technologies!
                </p>

                <p style="margin: 0 0 16px 0; font-size: 15px; line-height: 1.7; color: #cbd5e1; font-family: 'Segoe UI', Arial, sans-serif;">
                  Diwali symbolizes new beginnings, fresh opportunities, and the light of progress. As your organization looks ahead to another year of growth, we wish you continued success, prosperity, and exciting new possibilities.
                </p>

                <p style="margin: 0 0 16px 0; font-size: 15px; line-height: 1.7; color: #cbd5e1; font-family: 'Segoe UI', Arial, sans-serif;">
                  At <strong style="color: #ffffff;">AGSuite Technologies</strong>, we help businesses simplify operations, improve visibility, and scale with confidence through <strong style="color: #ffffff;">Oracle NetSuite ERP solutions</strong>.
                </p>

                <p style="margin: 0 0 16px 0; font-size: 15px; line-height: 1.7; color: #cbd5e1; font-family: 'Segoe UI', Arial, sans-serif;">
                  Whether you are exploring ERP implementation, migrating from SAP or another legacy system, optimizing your existing NetSuite environment, or looking to automate business processes, our team would be happy to understand your requirements and explore how we can help.
                </p>

                <p style="margin: 0 0 16px 0; font-size: 15px; line-height: 1.7; color: #cbd5e1; font-family: 'Segoe UI', Arial, sans-serif;">
                  This festive season could be the perfect time to take the next step toward a more connected, efficient, and future-ready business.
                </p>

                <p style="margin: 0 0 18px 0; font-size: 15px; line-height: 1.7; color: #cbd5e1; font-family: 'Segoe UI', Arial, sans-serif;">
                  We would welcome the opportunity to connect with you and discuss your business goals whenever convenient.
                </p>

                <p style="margin: 0 0 24px 0; font-size: 16px; line-height: 1.6; font-weight: 600; color: #f1f5f9; font-family: 'Segoe UI', Arial, sans-serif;">
                  Wishing you and your team a <strong style="color: #f5b700;">Happy Diwali filled with prosperity, innovation, and success!</strong>
                </p>

                <!-- Sign-off Block -->
                <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid rgba(212, 175, 55, 0.25);">
                  <p style="margin: 0 0 4px 0; font-size: 14px; color: #cbd5e1; font-family: 'Segoe UI', Arial, sans-serif;">
                    Best regards,
                  </p>
                  <p style="margin: 0 0 3px 0; font-size: 16px; font-weight: 700; color: #ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
                    Team AGSuite Technologies
                  </p>
                  <p style="margin: 0 0 8px 0; font-size: 13px; font-style: italic; color: #d4af37; font-family: 'Segoe UI', Arial, sans-serif;">
                    Empowering Businesses with Real-Time Insights, Control &amp; Scalable Growth
                  </p>
                  <p style="margin: 0; font-size: 13px; color: #94a3b8; font-family: 'Segoe UI', Arial, sans-serif;">
                    Website: <a href="https://agsuitetech.com" target="_blank" rel="noopener noreferrer" style="color: #f5b700; text-decoration: none; font-weight: 600;">agsuitetech.com</a>
                  </p>
                </div>
              </div>

              <!-- CTA Button -->
              <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="margin: 28px auto 8px auto;">
                <tr>
                  <td align="center" style="border-radius: 28px; background: linear-gradient(135deg, #e5a700 0%, #b38200 100%); background-color: #d4af37;">
                    <a href="https://agsuitetech.com" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 13px 32px; font-size: 13px; font-weight: 700; letter-spacing: 0.8px; color: #0b132b; text-decoration: none; border-radius: 28px; text-transform: uppercase;">
                      Connect with AGSuite &rarr;
                    </a>
                  </td>
                </tr>
              </table>`;

  return renderDiwaliEmailShell(preheader, bodyHtml);
}

/**
 * Default Diwali Email Template Dispatcher
 * Defaults to 'existing' customer template if type is omitted.
 */
export function getDiwaliEmailTemplate(options: DiwaliEmailOptions = {}): string {
  if (options.type === 'prospect') {
    return getDiwaliProspectEmailTemplate(options);
  }
  return getDiwaliExistingCustomerEmailTemplate(options);
}
