import { APP_REPO, RELEASES_URL } from '../config/site';

export type Platform = 'macos' | 'windows' | 'linux';

// The Tauri updater manifest on the releases CDN always matches the newest
// published release and is not rate-limited. The REST API is the fallback.
// Do not read the version from `main`: it can be ahead of or behind the
// latest release, which produces download links that 404.
const UPDATER_MANIFEST_URL = `${RELEASES_URL}/latest/download/latest.json`;
const RELEASES_API_URL = `https://api.github.com/repos/${APP_REPO}/releases/latest`;

async function fetchField(url: string, field: string): Promise<string | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const value = (await res.json())[field];
    return value ? String(value).replace(/^v/, '') : null;
  } catch {
    return null;
  }
}

/** Latest release version without the leading "v" (e.g. "0.3.0"), or null. */
export async function fetchLatestVersion(): Promise<string | null> {
  return (
    (await fetchField(UPDATER_MANIFEST_URL, 'version')) ??
    (await fetchField(RELEASES_API_URL, 'tag_name'))
  );
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
    { platform: 'windows', label: '.msi', url: `${prefix}_x64_en-US.msi` },
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
