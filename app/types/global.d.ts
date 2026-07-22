export {};

declare global {
  interface Window {
    $zoho: any;

    // ── Legacy form ID (26445204) ──────────────────────────────────────
    validateEmail409531000026445204: () => boolean;
    checkMandatory409531000026445204: (e?: any) => boolean;
    trackVisitor409531000026445204: () => void;
    addAriaSelected409531000026445204: (event?: any) => void;
    rccallback409531000026445204: () => void;
    reCaptchaAlert409531000026445204: () => boolean;

    // ── Current form ID (42578178) ─────────────────────────────────────
    validateEmail409531000042578178: () => boolean;
    checkMandatory409531000042578178: (e?: any) => boolean;
    trackVisitor409531000042578178: () => void;
    addAriaSelected409531000042578178: (event?: any) => void;
    rccallback409531000042578178: () => void;
    reCaptchaAlert409531000042578178: () => boolean;
    validateMobile409531000042578178: () => boolean;

    // ── NetSuite contact page (_ns suffix) ─────────────────────────────
    validateEmail409531000042578178_ns: () => boolean;
    checkMandatory409531000042578178_ns: (e?: any) => boolean;
    trackVisitor409531000042578178_ns: () => void;
    rccallback409531000042578178_ns: () => void;
    reCaptchaAlert409531000042578178_ns: () => boolean;

    // ── Zoho Quote page helpers ────────────────────────────────────────
    validateEmailZQuote: () => boolean;
    checkMandatoryZQuote: (e?: any) => boolean;

    // ── Legacy alternate ID (398090) ───────────────────────────────────
    addAriaSelected409531000000398090: (e?: any) => void;
    rccallback409531000000398090: () => void;
    reCaptchaAlert409531000000398090: () => boolean;
    validateEmail409531000000398090: () => boolean;
    trackVisitor409531000000398090: () => void;
    checkMandatory409531000000398090: (e?: any) => boolean;

    // ── Shared utilities ───────────────────────────────────────────────
    validateNumber: (e: any) => boolean;
    sendEmail: () => void;

    // ── Zoho contact page helpers ──────────────────────────────────────
    validateEmailContactZoho: () => boolean;
    checkMandatoryContactZoho: (e?: any) => boolean;

    // ── Zoho Desk support page helpers ─────────────────────────────────
    zsValidateMandatoryFields: () => boolean;
    zsRegenerateCaptcha: () => void;
    showAnimateMessageDiv?: (message: string, isError: boolean) => void;
  }
}
