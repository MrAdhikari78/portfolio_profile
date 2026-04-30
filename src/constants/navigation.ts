// src/constants/navigation.ts
// Re-exports from data files for backward compatibility
// DEPRECATED: Import directly from src/data/ files instead

import navigationData from '../data/navigation.json';
import siteData from '../data/site.json';

export const NAV_LINKS = navigationData.navLinks;
export const SOCIAL_LINKS = navigationData.socialLinks;

export const CONTACT_EMAIL = siteData.site.email;
export const SITE_TITLE = siteData.site.title;
export const SITE_DESCRIPTION = siteData.site.description;
