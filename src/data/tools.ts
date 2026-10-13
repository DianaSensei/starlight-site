// Built-in tools in the app's default sidebar order. Mirrors
// developer-desktop-utils/src/plugins/*/plugin.ts (label, description, order).
export interface Tool {
  name: string;
  desc: string;
  tags: string[];
  /** Inner SVG markup of the Lucide icon (24×24 viewBox). */
  icon: string;
}

export const tools: Tool[] = [
  {
    name: "Time Tracker",
    desc: "Timer, timesheet, calendar, and meeting notes in one place. Projects, tags, and pomodoro included.",
    tags: ["productivity", "time"],
    icon: "<line x1=\"10\" x2=\"14\" y1=\"2\" y2=\"2\"/><line x1=\"12\" x2=\"15\" y1=\"14\" y2=\"11\"/><circle cx=\"12\" cy=\"14\" r=\"8\"/>",
  },
  {
    name: "API Client",
    desc: "HTTP client in the style of Postman or Bruno: collections, {{vars}} environments, auth, scripts, and tests. Imports Postman and OpenAPI.",
    tags: ["network", "development"],
    icon: "<path d=\"m22 2-7 20-4-9-9-4Z\"/><path d=\"M22 2 11 13\"/>",
  },
  {
    name: "Mock Server",
    desc: "Local HTTP mock server. Match requests by method, path, query, header, or body and reply with templated or Rhai-scripted responses.",
    tags: ["network", "development"],
    icon: "<rect width=\"20\" height=\"8\" x=\"2\" y=\"2\" rx=\"2\" ry=\"2\"/><rect width=\"20\" height=\"8\" x=\"2\" y=\"14\" rx=\"2\" ry=\"2\"/><line x1=\"6\" x2=\"6.01\" y1=\"6\" y2=\"6\"/><line x1=\"6\" x2=\"6.01\" y1=\"18\" y2=\"18\"/>",
  },
  {
    name: "JSON Formatter",
    desc: "Format, validate, minify, and browse JSON as a tree.",
    tags: ["data"],
    icon: "<path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4\"/><path d=\"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1\"/><path d=\"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1\"/>",
  },
  {
    name: "Data Converter",
    desc: "Convert between JSON, YAML, TOML, XML, and .properties.",
    tags: ["data"],
    icon: "<path d=\"M8 3 4 7l4 4\"/><path d=\"M4 7h16\"/><path d=\"m16 21 4-4-4-4\"/><path d=\"M20 17H4\"/>",
  },
  {
    name: "Deduplicate",
    desc: "Remove duplicate lines or list items.",
    tags: ["text"],
    icon: "<polygon points=\"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3\"/>",
  },
  {
    name: "Text Transformer",
    desc: "Change case, join or split lines, build arrays, and convert Vietnamese phone numbers.",
    tags: ["text"],
    icon: "<polyline points=\"16 18 22 12 16 6\"/><polyline points=\"8 6 2 12 8 18\"/>",
  },
  {
    name: "SQL Formatter",
    desc: "Format SQL and MongoDB queries: keyword casing, whitespace, one clause per line.",
    tags: ["data"],
    icon: "<ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"/><path d=\"M3 5V19A9 3 0 0 0 21 19V5\"/><path d=\"M3 12A9 3 0 0 0 21 12\"/>",
  },
  {
    name: "Date / Time",
    desc: "Convert timestamps, compare dates, and format them in any timezone.",
    tags: ["time"],
    icon: "<circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/>",
  },
  {
    name: "Generator",
    desc: "UUIDs, random numbers and strings, or fake datasets exported as JSON, CSV, or SQL.",
    tags: ["generate"],
    icon: "<path d=\"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22\"/><path d=\"m18 2 4 4-4 4\"/><path d=\"M2 6h1.9c1.5 0 2.9.9 3.6 2.2\"/><path d=\"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8\"/><path d=\"m18 14 4 4-4 4\"/>",
  },
  {
    name: "Encode·Hash·Encrypt",
    desc: "Base64, URL, Hex, and image encoding; MD5/SHA/HMAC and file checksums; bcrypt, Argon2, and AES-256.",
    tags: ["encoding", "security"],
    icon: "<path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"/>",
  },
  {
    name: "Text Counter",
    desc: "Count characters, words, and lines, and estimate reading time.",
    tags: ["text"],
    icon: "<polyline points=\"4 7 4 4 20 4 20 7\"/><line x1=\"9\" x2=\"15\" y1=\"20\" y2=\"20\"/><line x1=\"12\" x2=\"12\" y1=\"4\" y2=\"20\"/>",
  },
  {
    name: "Regex Tester",
    desc: "Test regular expressions with live highlighting and capture groups.",
    tags: ["text"],
    icon: "<circle cx=\"11\" cy=\"11\" r=\"8\"/><path d=\"m21 21-4.3-4.3\"/>",
  },
  {
    name: "Diff",
    desc: "Compare two texts word by word, or two JSON values by path.",
    tags: ["text", "data"],
    icon: "<circle cx=\"18\" cy=\"18\" r=\"3\"/><circle cx=\"6\" cy=\"6\" r=\"3\"/><path d=\"M13 6h3a2 2 0 0 1 2 2v7\"/><path d=\"M11 18H8a2 2 0 0 1-2-2V9\"/>",
  },
  {
    name: "Cron Generator",
    desc: "Build and check cron expressions with a visual editor.",
    tags: ["scheduling"],
    icon: "<path d=\"M8 2v4\"/><path d=\"M16 2v4\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/><path d=\"M3 10h18\"/>",
  },
  {
    name: "QR Code",
    desc: "Make a QR code from text or a URL, or read one from an image.",
    tags: ["generate"],
    icon: "<rect width=\"5\" height=\"5\" x=\"3\" y=\"3\" rx=\"1\"/><rect width=\"5\" height=\"5\" x=\"16\" y=\"3\" rx=\"1\"/><rect width=\"5\" height=\"5\" x=\"3\" y=\"16\" rx=\"1\"/><path d=\"M21 16h-3a2 2 0 0 0-2 2v3\"/><path d=\"M21 21v.01\"/><path d=\"M12 7v3a2 2 0 0 1-2 2H7\"/><path d=\"M3 12h.01\"/><path d=\"M12 3h.01\"/><path d=\"M12 16v.01\"/><path d=\"M16 12h1\"/><path d=\"M21 12v.01\"/><path d=\"M12 21v-1\"/>",
  },
  {
    name: "Color Picker",
    desc: "Pick colors from an image and convert between HEX, RGB, HSL, and CMYK.",
    tags: ["design"],
    icon: "<circle cx=\"13.5\" cy=\"6.5\" r=\".5\" fill=\"currentColor\"/><circle cx=\"17.5\" cy=\"10.5\" r=\".5\" fill=\"currentColor\"/><circle cx=\"8.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\"/><circle cx=\"6.5\" cy=\"12.5\" r=\".5\" fill=\"currentColor\"/><path d=\"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z\"/>",
  },
  {
    name: "JWT Debugger",
    desc: "Decode, verify, and sign JWTs. HMAC, RSA, ECDSA, and EdDSA, with PEM or JWK keys.",
    tags: ["security"],
    icon: "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"/>",
  },
  {
    name: "Markdown",
    desc: "Live Markdown preview.",
    tags: ["text"],
    icon: "<path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4\"/><path d=\"M10 9H8\"/><path d=\"M16 13H8\"/><path d=\"M16 17H8\"/>",
  },
  {
    name: "Lucky Wheel",
    desc: "Spin a wheel of your own options to pick one at random.",
    tags: ["utility"],
    icon: "<circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M12 2v1\"/><path d=\"M12 21v1\"/><path d=\"M4.93 4.93l.71.71\"/><path d=\"M18.36 18.36l.71.71\"/><path d=\"M2 12h1\"/><path d=\"M21 12h1\"/><path d=\"M4.93 19.07l.71-.71\"/><path d=\"M18.36 5.64l.71-.71\"/>",
  },
  {
    name: "Network Tools",
    desc: "DNS lookups, propagation and DNSSEC checks, listening ports and their processes, your public IP, and IP geolocation.",
    tags: ["network"],
    icon: "<rect x=\"16\" y=\"16\" width=\"6\" height=\"6\" rx=\"1\"/><rect x=\"2\" y=\"16\" width=\"6\" height=\"6\" rx=\"1\"/><rect x=\"9\" y=\"2\" width=\"6\" height=\"6\" rx=\"1\"/><path d=\"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3\"/><path d=\"M12 12V8\"/>",
  },
  {
    name: "2FA Authenticator",
    desc: "TOTP and HOTP codes with SHA-1/256/512, 6 or 8 digits, and 30 or 60 second periods.",
    tags: ["security"],
    icon: "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"/><path d=\"m9 12 2 2 4-4\"/>",
  },
];
