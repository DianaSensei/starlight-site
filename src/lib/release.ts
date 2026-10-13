import { APP_REPO, RELEASES_URL } from '../config/site';

export type Platform = 'macos' | 'windows' | 'linux';

// The Releases API is the only source that is both CORS-enabled and always
// matches the newest published release. (The `latest.json` updater manifest
// is served via a redirect without CORS headers, and `main` can be ahead of or
// behind the latest release, which produces download links that 404.)
// Unauthenticated API calls are rate-limited per IP, so the answer is cached
// for the browser session; on failure, callers keep their `releases/latest` links.
const RELEASES_API_URL = `https://api.github.com/repos/${APP_REPO}/releases/latest`;
const CACHE_KEY = 'devtool:latest-version';

function readCache(): string | null {
  try {
    return sessionStorage.getItem(CACHE_KEY);
  } catch {
    return null;
  }
}

function writeCache(version: string) {
  try {
    sessionStorage.setItem(CACHE_KEY, version);
  } catch {
    // Storage unavailable (private mode, blocked cookies): just refetch next time.
  }
}

/** Latest release version without the leading "v" (e.g. "0.3.0"), or null. */
export async function fetchLatestVersion(): Promise<string | null> {
  const cached = readCache();
  if (cached) return cached;
  try {
    const res = await fetch(RELEASES_API_URL);
    if (!res.ok) return null;
    const tag = (await res.json()).tag_name;
    if (!tag) return null;
    const version = String(tag).replace(/^v/, '');
    writeCache(version);
    return version;
  } catch {
    return null;
  }
}

export function detectPlatform(userAgent = navigator.userAgent): Platform | null {
  if (/Mac/i.test(userAgent) && !/iPhone|iPad/i.test(userAgent)) return 'macos';
  if (/Win/i.test(userAgent)) return 'windows';
  if (/Linux/i.test(userAgent)) return 'linux';
  return null;
}

export interface Asset {
  platform: Platform;
  label: string;
  url: string;
}

/** Installer assets published by the release workflow for `version`. */
export function releaseAssets(version: string): Asset[] {
  const prefix = `${RELEASES_URL}/download/v${version}/DevTool_${version}`;
  return [
    { platform: 'macos', label: '.dmg', url: `${prefix}_aarch64.dmg` },
    { platform: 'windows', label: '.exe (NSIS)', url: `${prefix}_x64-setup.exe` },
    { platform: 'linux', label: '.AppImage', url: `${prefix}_amd64.AppImage` },
    { platform: 'linux', label: '.deb', url: `${prefix}_amd64.deb` },
  ];
}

/** The installer to offer first on each platform. */
export const PRIMARY_ASSET_LABEL: Record<Platform, string> = {
  macos: '.dmg',
  windows: '.exe (NSIS)',
  linux: '.AppImage',
};

export const PLATFORM_NAMES: Record<Platform, string> = {
  macos: 'macOS',
  windows: 'Windows',
  linux: 'Linux',
};
