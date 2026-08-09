import { access, cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const outputDirectory = path.join(projectRoot, "github-pages");
const clientDirectory = path.join(projectRoot, "dist", "client");
const workerEntry = path.join(projectRoot, "dist", "server", "index.js");

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(clientDirectory, outputDirectory, { recursive: true });

const workerUrl = pathToFileURL(workerEntry);
workerUrl.searchParams.set("github-pages-export", `${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

const response = await worker.fetch(
  new Request("https://superotterjory.github.io/", {
    headers: {
      accept: "text/html",
      "x-forwarded-host": "superotterjory.github.io",
      "x-forwarded-proto": "https",
    },
  }),
  {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  },
  {
    waitUntil() {},
    passThroughOnException() {},
  },
);

if (!response.ok) {
  throw new Error(`Homepage render failed with status ${response.status}`);
}

const html = await response.text();
if (!html.includes("Selected publications")) {
  throw new Error("Rendered homepage is missing expected academic content");
}
if (
  !html.includes(">News<") ||
  !html.includes("personal academic website is now live")
) {
  throw new Error("Rendered homepage is missing expected news content");
}
if (
  !html.includes("Contextual Optimization") ||
  !html.includes("Learning to Optimize (L2O)") ||
  !html.includes("AI-aided Optimization") ||
  !html.includes("AI-native Optimization")
) {
  throw new Error("Rendered homepage is missing expected research directions");
}
if (!html.includes("张晋瑜") || !html.includes("long-distance running")) {
  throw new Error("Rendered homepage is missing expected profile content");
}
if (!html.includes("https://superotterjory.github.io/og-v2.png")) {
  throw new Error("Rendered homepage has incorrect social metadata");
}

await Promise.all([
  writeFile(path.join(outputDirectory, "index.html"), html, "utf8"),
  writeFile(path.join(outputDirectory, "404.html"), html, "utf8"),
  writeFile(path.join(outputDirectory, ".nojekyll"), "", "utf8"),
]);

const localReferences = [
  ...html.matchAll(/(?:href|src)="(\/[^"]+)"/g),
].map((match) => decodeURIComponent(match[1].split(/[?#]/, 1)[0]));

await Promise.all(
  [...new Set(localReferences)]
    .filter((reference) => reference !== "/")
    .map((reference) => access(path.join(outputDirectory, reference.slice(1)))),
);

console.log(`GitHub Pages export created at ${outputDirectory}`);
