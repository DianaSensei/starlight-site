export const APP_REPO = 'DianaSensei/developer-desktop-utils';
export const PLUGIN_REPO = 'DianaSensei/developer-desktop-miniapp';
// Every plugin release merges its entry into catalog.json on this branch.
export const PLUGIN_CATALOG_BRANCH = 'main';

export const APP_REPO_URL = `https://github.com/${APP_REPO}`;
export const RELEASES_URL = `${APP_REPO_URL}/releases`;
export const LATEST_RELEASE_URL = `${RELEASES_URL}/latest`;
export const ISSUES_URL = `${APP_REPO_URL}/issues`;
export const PLUGIN_REPO_URL = `https://github.com/${PLUGIN_REPO}`;

export const INSTALL_DEEP_LINK = 'desktop-devtool-app://install';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/dev-tool', label: 'DevTool' },
  { href: '/tools', label: 'Tools' },
  { href: '/plugins', label: 'Plugins' },
  { href: '/blog', label: 'Blog' },
];

/** Prefixes a site-relative path with the deploy base (`/starlight-site`). */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}
