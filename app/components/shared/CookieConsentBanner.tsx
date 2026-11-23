'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, ShieldCheck, X } from 'lucide-react';

const STORAGE_KEY = 'agsuite_cookie_consent';
const STORAGE_DATE_KEY = 'agsuite_cookie_consent_date';
const COOKIE_NAME = 'agsuite_cookie_consent';

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      // 1. Check if user has already made a choice in localStorage or document.cookie
      const localConsent = localStorage.getItem(STORAGE_KEY);
      const hasCookie = document.cookie
        .split('; ')
        .some((row) => row.startsWith(`${COOKIE_NAME}=`));

      if (!localConsent && !hasCookie) {
        // Show after a slight delay for smooth page entrance
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1200);

        return () => clearTimeout(timer);
      }
    } catch {
      // Graceful fallback for restricted environments
    }
  }, []);

  const saveConsent = (status: 'accepted' | 'declined') => {
    try {
      // 1. Save to localStorage
      localStorage.setItem(STORAGE_KEY, status);
      localStorage.setItem(STORAGE_DATE_KEY, new Date().toISOString());

      // 2. Set 1-year persistent HTTP cookie accessible by server
      const maxAge = 365 * 24 * 60 * 60; // 1 year in seconds
      document.cookie = `${COOKIE_NAME}=${status}; path=/; max-age=${maxAge}; SameSite=Lax`;

      // 3. Update Google Consent Mode v2 if Google Tag Manager is loaded
      if (typeof window.gtag === 'function') {
        const consentValue = status === 'accepted' ? 'granted' : 'denied';
        window.gtag('consent', 'update', {
          analytics_storage: consentValue,
          ad_storage: consentValue,
          ad_user_data: consentValue,
          ad_personalization: consentValue,
        });
      }
    } catch (e) {
      console.warn('Could not save cookie preferences', e);
    }

    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
        <aside
          role="region"
          aria-label="Cookie consent banner"
          className="cookie-banner-enter fixed bottom-2.5 right-2.5 left-2.5 sm:left-auto sm:bottom-6 sm:right-6 sm:max-w-[420px] md:max-w-[430px] z-[999999]"
        >
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl p-3.5 sm:p-5.5 text-black shadow-[0_14px_35px_rgba(0,0,0,0.16)] sm:shadow-[0_20px_50px_rgba(0,0,0,0.18)] border border-neutral-200 bg-white">
            {/* Top row: Icon, title, policy badge, and close button */}
            <div className="relative flex items-start justify-between gap-3 mb-2 sm:mb-3">
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200/80 items-center justify-center text-amber-600 shadow-sm">
                  <Cookie className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#002b80] tracking-tight leading-tight">
                    <span className="sm:hidden">Cookies &amp; privacy</span>
                    <span className="hidden sm:inline">We Value Your Privacy</span>
                  </h3>
                  <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-blue-700 bg-blue-50 border border-blue-200/80 px-2.5 py-0.5 rounded-full mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> Cookie Policy
                  </span>
                </div>
              </div>

              <button
                onClick={() => saveConsent('declined')}
                className="p-1 rounded-lg text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors"
                aria-label="Close cookie banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Middle: Description */}
            <p className="relative text-[11px] sm:text-[13px] text-neutral-700 sm:text-neutral-800 leading-[1.45] sm:leading-relaxed mb-3 sm:mb-4">
              <span className="sm:hidden">We use cookies to improve your experience and understand website traffic. See our </span>
              <span className="hidden sm:inline">We use cookies to improve your browsing experience, deliver tailored content, and analyze website traffic. Read our </span>
              <Link
                href="/cookie-policy"
                className="text-[#002b80] sm:text-black underline underline-offset-2 font-semibold hover:opacity-75 transition-opacity"
              >
                Cookie Policy
              </Link>{' '}
              and{' '}
              <Link
                href="/privacy-policy"
                className="text-black underline underline-offset-2 font-semibold hover:opacity-75 transition-opacity"
              >
                Privacy Policy
              </Link>
              .
            </p>

            {/* Bottom Actions: Accept All FIRST, Decline SECOND */}
            <div className="relative flex items-center gap-2 pt-0.5">
              <button
                type="button"
                onClick={() => saveConsent('accepted')}
                className="flex-1 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl bg-black hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold shadow-sm transition-colors text-center"
              >
                Accept
              </button>

              <button
                type="button"
                onClick={() => saveConsent('declined')}
                className="flex-1 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg sm:rounded-xl border border-neutral-300 bg-white hover:bg-neutral-100 text-black text-xs sm:text-sm font-medium transition-colors text-center"
              >
                Reject
              </button>
            </div>
          </div>
        </aside>
  );
}
