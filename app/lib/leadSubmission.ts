export type LeadPlatform = "Zoho" | "NetSuite" | "Odoo";

interface LeadNotificationOptions {
  platform: LeadPlatform;
  subjectTitle: string;
}

export async function sendLeadNotification(
  form: HTMLFormElement,
  { platform, subjectTitle }: LeadNotificationOptions,
) {
  const formData = new FormData(form);
  const usesNetSuiteForm = platform !== "Zoho";
  const serviceField = usesNetSuiteForm ? "LEADCF166" : "LEADCF165";
  const services = formData.getAll(serviceField).map(String);

  const commonFields = {
    name: formData.get("Last Name"),
    email: formData.get("Email"),
    mobile: formData.get("Mobile"),
    role: formData.get("Designation"),
    company: formData.get("Company"),
    revenue: formData.get("LEADCF19"),
  };

  const endpoint = usesNetSuiteForm
    ? "/api/contact/netsuite"
    : "/api/contact/zoho-notification";
  const body = usesNetSuiteForm
    ? {
        ...commonFields,
        service: services.join(", "),
        hearAboutUs: formData.get("LEADCF127"),
        requirements: formData.get("LEADCF123"),
        platform,
        subjectTitle,
      }
    : {
        ...commonFields,
        services,
        hearAbout: formData.get("LEADCF127"),
        message: formData.get("LEADCF123"),
        subjectTitle,
      };

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    keepalive: true,
  });

  if (!response.ok) {
    throw new Error(`Lead notification failed with status ${response.status}`);
  }
}
