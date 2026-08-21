"use client";

import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';

export interface GoogleRecaptchaRef {
  getValue: () => string;
  reset: () => void;
}

interface GoogleRecaptchaProps {
  sitekey: string;
  onChange?: (token: string | null) => void;
}

export const GoogleRecaptcha = forwardRef<GoogleRecaptchaRef, GoogleRecaptchaProps>(
  ({ sitekey, onChange }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<number | null>(null);

    useImperativeHandle(ref, () => ({
      getValue: () => {
        if (typeof window !== 'undefined' && (window as any).grecaptcha && widgetIdRef.current !== null) {
          return (window as any).grecaptcha.getResponse(widgetIdRef.current);
        }
        return '';
      },
      reset: () => {
        if (typeof window !== 'undefined' && (window as any).grecaptcha && widgetIdRef.current !== null) {
          (window as any).grecaptcha.reset(widgetIdRef.current);
          onChange?.(null);
        }
      },
    }));

    useEffect(() => {
      let isMounted = true;

      const renderWidget = () => {
        if (!isMounted || !containerRef.current) return;
        if (typeof window !== 'undefined' && (window as any).grecaptcha && (window as any).grecaptcha.render) {
          if (widgetIdRef.current === null && containerRef.current.childElementCount === 0) {
            try {
              widgetIdRef.current = (window as any).grecaptcha.render(containerRef.current, {
                sitekey,
                callback: (token: string) => onChange?.(token),
                'expired-callback': () => onChange?.(null),
              });
            } catch (e) {
              console.error('reCAPTCHA render error:', e);
            }
          }
        }
      };

      if (typeof window !== 'undefined') {
        if ((window as any).grecaptcha && (window as any).grecaptcha.render) {
          renderWidget();
        } else {
          const scriptId = 'google-recaptcha-script';
          if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
            script.async = true;
            script.defer = true;
            script.onload = () => {
              try {
                (window as any).grecaptcha?.ready?.(renderWidget) || renderWidget();
              } catch (e) {
                console.warn('reCAPTCHA init error:', e);
              }
            };
            script.onerror = () => {
              console.warn('reCAPTCHA script failed to load (offline or blocked).');
            };
            document.head.appendChild(script);
          } else {
            const checkInterval = setInterval(() => {
              if ((window as any).grecaptcha && (window as any).grecaptcha.render) {
                clearInterval(checkInterval);
                renderWidget();
              }
            }, 100);
            setTimeout(() => clearInterval(checkInterval), 10000);
          }
        }
      }

      return () => {
        isMounted = false;
      };
    }, [sitekey, onChange]);

    return (
      <div className="flex justify-center sm:justify-start my-2 overflow-x-auto min-h-[78px]">
        <div ref={containerRef} />
      </div>
    );
  }
);

GoogleRecaptcha.displayName = 'GoogleRecaptcha';
