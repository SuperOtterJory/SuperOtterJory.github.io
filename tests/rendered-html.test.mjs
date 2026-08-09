import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
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
}

test("server-renders the finished academic homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Jinyu Zhang \| Incoming PhD Student at EPFL<\/title>/i);
  assert.match(html, /Selected publications/i);
  assert.match(html, /Academic advising/i);
  assert.match(html, /Nikolas Geroliminis/i);
  assert.match(html, /张晋瑜/);
  assert.match(html, /beautiful jade/i);
  assert.match(html, /long-distance running/i);
  assert.match(html, /Conference talks/i);
  assert.match(html, /Contextual Optimization/i);
  assert.match(html, /Learning to Optimize \(L2O\)/i);
  assert.match(html, /AI-aided Optimization/i);
  assert.match(html, /AI-native Optimization/i);
  assert.match(html, /directly construct high-quality solutions/i);
  assert.match(html, /Southeast University Presidential Scholarship/i);
  assert.match(html, /2024[\s\S]*National Scholarship of China/i);
  assert.match(html, /SuperOtterJory/i);
  assert.match(html, /Google Scholar/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("keeps the final profile assets and removes starter references", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    access(
      new URL(
        "../public/jinyu-zhang-informal-retouched-v1.png",
        import.meta.url,
      ),
    ),
    access(new URL("../public/og-v2.png", import.meta.url)),
    access(new URL("../public/Jinyu-Zhang-CV.pdf", import.meta.url)),
  ]);

  assert.match(page, /className="academic-layout"/);
  assert.match(page, /className="research-directions"/);
  assert.match(page, /id="publications"/);
  assert.match(page, /id="advising"/);
  assert.match(page, /id="talks"/);
  assert.match(page, /jinyu-zhang-informal-retouched-v1\.png/);
  assert.match(page, /Jinyu-Zhang-CV\.pdf/);
  assert.match(layout, /\/og-v2\.png/);
  assert.match(layout, /contextual optimization/i);
  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
