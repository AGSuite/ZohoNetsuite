export interface DiwaliEmailOptions {
  recipientName?: string;
  companyName?: string;
}

export function getDiwaliEmailTemplate(options: DiwaliEmailOptions = {}): string {
  const name = options.recipientName?.trim() || 'Valued Partner & Client';

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
    Wishing you a luminous, joyful, and prosperous Diwali! ✨ Thank you for connecting with AGSuite Technologies.
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

              <!-- Greeting Message -->
              <p style="margin: 0 0 16px 0; font-size: 17px; line-height: 1.6; color: #f1f5f9; font-family: 'Segoe UI', Arial, sans-serif;">
                Dear <strong style="color: #f5b700;">${name}</strong>,
              </p>

              <p style="margin: 0 0 18px 0; font-size: 15px; line-height: 1.7; color: #cbd5e1; font-family: 'Segoe UI', Arial, sans-serif;">
                Thank you for reaching out to <strong style="color: #ffffff;">AGSuite Technologies</strong>. We have received your request and our enterprise solutions team will contact you shortly to discuss how we can empower your business.
              </p>

              <p style="margin: 0 0 20px 0; font-size: 15px; line-height: 1.7; color: #cbd5e1; font-family: 'Segoe UI', Arial, sans-serif;">
                As the auspicious lights of Diwali illuminate homes and hearts, we extend our warmest wishes to you, your family, and your team for boundless joy, good health, and stellar growth in the year ahead!
              </p>

              <!-- Immediate Assistance -->
              <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="margin: 20px auto; background-color: rgba(255, 255, 255, 0.05); border: 1px solid rgba(212, 175, 55, 0.3); border-radius: 8px; padding: 12px 24px;">
                <tr>
                  <td align="center" style="font-size: 14px; color: #e2e8f0; font-family: 'Segoe UI', Arial, sans-serif;">
                    <strong style="color: #f5b700;">For Immediate Assistance:</strong><br />
                    Call: <a href="tel:+919461046161" style="color: #ffffff; font-weight: 600; text-decoration: none;">+91 9461046161</a> &nbsp;|&nbsp; 
                    Email: <a href="mailto:hello@agsuitetech.com" style="color: #ffffff; font-weight: 600; text-decoration: none;">hello@agsuitetech.com</a>
                  </td>
                </tr>
              </table>

              <!-- CTA Button -->
              <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="margin: 24px auto 8px auto;">
                <tr>
                  <td align="center" style="border-radius: 28px; background: linear-gradient(135deg, #e5a700 0%, #b38200 100%); background-color: #d4af37;">
                    <a href="https://agsuitetech.com" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 14px 34px; font-size: 13px; font-weight: 700; letter-spacing: 0.8px; color: #0b132b; text-decoration: none; border-radius: 28px; text-transform: uppercase;">
                      Visit AGSuite Technologies &rarr;
                    </a>
                  </td>
                </tr>
              </table>

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
