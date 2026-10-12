import { INSTALL_DEEP_LINK, PLUGIN_CATALOG_BRANCH, PLUGIN_REPO } from '../config/site';

// Read from raw.githubusercontent.com, not the release asset: release-asset
// downloads send no Access-Control-Allow-Origin header, so a browser fetch of
// them always fails CORS. The plugin release workflow commits catalog.json to
// the repo for this reason.
const CATALOG_URL = `https://raw.githubusercontent.com/${PLUGIN_REPO}/${PLUGIN_CATALOG_BRANCH}/catalog.json`;

export interface CatalogEntry {
  id: string;
  version: string;
  pluginManifestUrl?: string;
  serviceManifestUrl?: string;
}

export interface Catalog {
  version: string;
  plugins: CatalogEntry[];
}

function httpsUrl(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined;
  try {
    return new URL(value).protocol === 'https:' ? value : undefined;
  } catch {
    return undefined;
  }
}

/** Fetches the plugin catalog, keeping only well-formed entries with https manifest URLs. */
export async function loadCatalog(): Promise<Catalog> {
  const res = await fetch(CATALOG_URL);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const raw = await res.json();

  const plugins: CatalogEntry[] = (Array.isArray(raw?.plugins) ? raw.plugins : [])
    .filter((p: any) => typeof p?.id === 'string' && typeof p?.version === 'string')
    .map((p: any) => ({
      id: p.id,
      version: p.version,
      pluginManifestUrl: httpsUrl(p.pluginManifestUrl),
      serviceManifestUrl: httpsUrl(p.serviceManifestUrl),
    }));

  return { version: String(raw?.version ?? ''), plugins };
}

/**
 * Deep link that opens DevTool's extension installer with both manifests.
 * The app still shows a preview and asks the user to confirm each install
 * (see developer-desktop-utils docs/plugin-sdk/05-external-install.md).
 */
export function installLink(entry: CatalogEntry): string {
  const params = new URLSearchParams({ manifest: entry.pluginManifestUrl ?? '' });
  if (entry.serviceManifestUrl) params.set('service', entry.serviceManifestUrl);
  return `${INSTALL_DEEP_LINK}?${params.toString()}`;
}
