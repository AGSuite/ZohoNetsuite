import { renderDiwaliEmailShell, type DiwaliEmailOptions } from './diwaliEmailShared';

/**
 * Diwali Email Template for Prospective Customers
 */
export function getDiwaliProspectEmailTemplate(options: DiwaliEmailOptions = {}): string {
  const name = options.recipientName?.trim() || 'Prospect';
  const preheader = 'Warm Diwali wishes from AGSuite Technologies. Thank you for your continued trust and partnership.';

  const bodyHtml = `
              <!-- Greeting & Letter Body -->
              <div style="text-align: left;">
                <p style="margin: 0 0 12px 0; font-size: 16px; line-height: 1.55; color: #f1f5f9; font-family: 'Segoe UI', Arial, sans-serif;">
                  Dear <strong style="color: #f5b700;">${name}</strong>,
                </p>

                <p style="margin: 0 0 14px 0; font-size: 15px; line-height: 1.65; color: #cbd5e1; font-family: 'Segoe UI', Arial, sans-serif;">
                  As we celebrate the festival of lights, we sincerely thank you for your continued trust and partnership. It has been a pleasure being part of your business journey, and we truly value our association with you.
                </p>

                <p style="margin: 0; font-size: 15px; line-height: 1.65; color: #cbd5e1; font-family: 'Segoe UI', Arial, sans-serif;">
                  May this Diwali bring new opportunities, prosperity, and success to you and your organization. We remain committed to supporting your <strong style="color: #ffffff;">Zoho journey</strong> with reliable services, process optimization, and innovative solutions. Wishing you, your team, and your family a <strong style="color: #f5b700;">Happy, Safe, and Prosperous Diwali!</strong>
                </p>
              </div>`;

  return renderDiwaliEmailShell(preheader, bodyHtml);
}