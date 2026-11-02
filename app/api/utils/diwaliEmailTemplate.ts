import type { DiwaliEmailOptions } from './diwaliEmailShared';
import { getDiwaliExistingCustomerEmailTemplate } from './diwaliExistingCustomerTemplate';
import { getDiwaliProspectEmailTemplate } from './diwaliProspectTemplate';

export type { DiwaliAudienceType, DiwaliEmailOptions } from './diwaliEmailShared';
export { getDiwaliExistingCustomerEmailTemplate } from './diwaliExistingCustomerTemplate';
export { getDiwaliProspectEmailTemplate } from './diwaliProspectTemplate';

/**
 * Selects the correct Diwali email template.
 * Defaults to the existing-customer version when type is omitted.
 */
export function getDiwaliEmailTemplate(options: DiwaliEmailOptions = {}): string {
  if (options.type === 'prospect') {
    return getDiwaliProspectEmailTemplate(options);
  }
  return getDiwaliExistingCustomerEmailTemplate(options);
}