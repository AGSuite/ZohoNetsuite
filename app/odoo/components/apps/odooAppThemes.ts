export interface OdooAppTheme {
  primary: string;
  secondary: string;
}

const appThemes: Record<string, OdooAppTheme> = {
  accounting: { primary: "#005E7A", secondary: "#985184" },
  appointments: { primary: "#005E7A", secondary: "#1AD3BB" },
  appraisals: { primary: "#F78613", secondary: "#712258" },
  "artificial-intelligence": { primary: "#712258", secondary: "#FBB945" },
  blog: { primary: "#144496", secondary: "#2EBCFA" },
  crm: { primary: "#005E7A", secondary: "#1AD3BB" },
  discuss: { primary: "#F78613", secondary: "#F86126" },
  documents: { primary: "#2D6388", secondary: "#F86126" },
  ecommerce: { primary: "#712258", secondary: "#985184" },
  elearning: { primary: "#005E7A", secondary: "#985184" },
  "email-marketing": { primary: "#144496", secondary: "#2EBCFA" },
  employees: { primary: "#008F86", secondary: "#FBB945" },
  esg: { primary: "#1A6F66", secondary: "#03AF89" },
  events: { primary: "#1A6F66", secondary: "#03AF89" },
  expenses: { primary: "#144496", secondary: "#2EBCFA" },
  fleet: { primary: "#712258", secondary: "#1AD3BB" },
  forum: { primary: "#962B48", secondary: "#FC868B" },
  helpdesk: { primary: "#1A6F66", secondary: "#1AD3BB" },
  inventory: { primary: "#985184", secondary: "#F86126" },
  invoicing: { primary: "#144496", secondary: "#088BF5" },
  iot: { primary: "#144496", secondary: "#088BF5" },
  knowledge: { primary: "#005E7A", secondary: "#985184" },
  "live-chat": { primary: "#985184", secondary: "#FC868B" },
  maintenance: { primary: "#088BF5", secondary: "#2EBCFA" },
  manufacturing: { primary: "#1A6F66", secondary: "#F86126" },
  marketing: { primary: "#712258", secondary: "#FC868B" },
  "marketing-automation": { primary: "#985184", secondary: "#005E7A" },
  payroll: { primary: "#962B48", secondary: "#FC868B" },
  planning: { primary: "#985184", secondary: "#1AD3BB" },
  plm: { primary: "#2D6388", secondary: "#FC868B" },
  "pos-restaurant": { primary: "#F78613", secondary: "#712258" },
  "pos-shop": { primary: "#F78613", secondary: "#712258" },
  project: { primary: "#005E7A", secondary: "#1AD3BB" },
  purchase: { primary: "#005E7A", secondary: "#1AD3BB" },
  quality: { primary: "#144496", secondary: "#2EBCFA" },
  recruitment: { primary: "#712258", secondary: "#1AD3BB" },
  rental: { primary: "#005E7A", secondary: "#1AD3BB" },
  sales: { primary: "#962B48", secondary: "#F86126" },
  sign: { primary: "#005E7A", secondary: "#2EBCFA" },
  "sms-marketing": { primary: "#2D6388", secondary: "#1AD3BB" },
  "social-marketing": { primary: "#F86126", secondary: "#FC868B" },
  spreadsheet: { primary: "#F9464C", secondary: "#03AF89" },
  subscriptions: { primary: "#03AF89", secondary: "#F78613" },
  surveys: { primary: "#F9464C", secondary: "#088BF5" },
  "time-off": { primary: "#088BF5", secondary: "#F78613" },
  timesheets: { primary: "#005E7A", secondary: "#1AD3BB" },
  voip: { primary: "#008F76", secondary: "#1AD3BB" },
  website: { primary: "#144496", secondary: "#2EBCFA" },
  "website-builder": { primary: "#144496", secondary: "#2EBCFA" },
  whatsapp: { primary: "#168A2B", secondary: "#57D163" },
};

const nameAliases: Record<string, string> = {
  "odoo projects": "project",
  "odoo project": "project",
  "odoo website": "website",
};

export function getOdooAppTheme(appNameOrSlug: string): OdooAppTheme {
  const normalized = appNameOrSlug.trim().toLowerCase();
  const slug = nameAliases[normalized] ?? normalized.replace(/^odoo\s+/, "").replaceAll(" ", "-");
  return appThemes[slug] ?? { primary: "#714B67", secondary: "#8B5CF6" };
}
