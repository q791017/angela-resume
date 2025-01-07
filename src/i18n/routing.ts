import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en-US', 'zh-TW'],

  defaultLocale: 'en-US',
});

export const locales = routing.locales;

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
