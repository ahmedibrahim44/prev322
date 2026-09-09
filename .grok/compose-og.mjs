import { readFileSync, writeFileSync } from "node:fs";
import { chromium } from "playwright";

const hero = readFileSync("/workspace/public/photos/hero-montagnes.jpg").toString("base64");
const leaves = readFileSync("/workspace/public/photos/feuilles.jpg").toString("base64");
const fraunces = readFileSync("/workspace/.grok/fonts/Fraunces-500.ttf").toString("base64");
const frauncesItalic = readFileSync("/workspace/.grok/fonts/Fraunces-500-Italic.ttf").toString("base64");
const outfit = readFileSync("/workspace/.grok/fonts/Outfit-500.ttf").toString("base64");

const html = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<style>
@font-face {
  font-family: "Fraunces";
  font-style: normal;
  font-weight: 500;
  src: url(data:font/ttf;base64,${fraunces}) format("truetype");
}
@font-face {
  font-family: "Fraunces";
  font-style: italic;
  font-weight: 500;
  src: url(data:font/ttf;base64,${frauncesItalic}) format("truetype");
}
@font-face {
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  src: url(data:font/ttf;base64,${outfit}) format("truetype");
}
html, body {
  margin: 0;
  width: 1792px;
  height: 1008px;
  overflow: hidden;
  background: #0D1C18;
}
.stage {
  position: relative;
  width: 1792px;
  height: 1008px;
  background: #0D1C18 url(data:image/jpeg;base64,${hero}) center / cover no-repeat;
}
.leaf {
  position: absolute;
  bottom: 0;
  width: 42%;
  height: 70%;
  background: url(data:image/jpeg;base64,${leaves}) left bottom / cover no-repeat;
  filter: brightness(0.62) saturate(0.78) hue-rotate(-12deg);
  pointer-events: none;
}
.leaf-l {
  left: 0;
  -webkit-mask-image: linear-gradient(to top right, rgba(0,0,0,.92) 0%, rgba(0,0,0,.55) 28%, transparent 68%);
          mask-image: linear-gradient(to top right, rgba(0,0,0,.92) 0%, rgba(0,0,0,.55) 28%, transparent 68%);
}
.leaf-r {
  right: 0;
  transform: scaleX(-1);
  -webkit-mask-image: linear-gradient(to top right, rgba(0,0,0,.92) 0%, rgba(0,0,0,.55) 28%, transparent 68%);
          mask-image: linear-gradient(to top right, rgba(0,0,0,.92) 0%, rgba(0,0,0,.55) 28%, transparent 68%);
}
.veil {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 58% 52% at 50% 48%, rgba(13,28,24,.42) 0%, rgba(13,28,24,.16) 46%, rgba(13,28,24,.34) 100%);
}
.lockup {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #F4F0E8;
  width: 64%;
}
.mark {
  width: 44px;
  height: 44px;
  margin: 0 auto 20px;
  display: block;
}
h1 {
  font-family: "Fraunces", serif;
  font-weight: 500;
  font-size: 118px;
  letter-spacing: -0.034em;
  line-height: 0.92;
  margin: 0;
  text-shadow: 0 2px 28px rgba(13,28,24,.5);
}
.sub {
  font-family: "Outfit", sans-serif;
  font-weight: 500;
  font-size: 22px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  margin-top: 20px;
  color: #F4F0E8;
}
.rule {
  width: 64px;
  height: 2px;
  background: #2D7A74;
  margin: 22px auto 18px;
  border-radius: 1px;
}
.tag {
  font-family: "Fraunces", serif;
  font-style: italic;
  font-weight: 500;
  font-size: 28px;
  letter-spacing: -0.015em;
  color: #F4F0E8;
  opacity: 0.9;
  text-shadow: 0 1px 16px rgba(13,28,24,.4);
}
</style>
</head>
<body>
  <div class="stage">
    <div class="leaf leaf-l"></div>
    <div class="leaf leaf-r"></div>
    <div class="veil"></div>
    <div class="lockup">
      <svg class="mark" viewBox="0 0 32 32" aria-hidden="true">
        <path fill="#F4F0E8" d="M5.2 6.4C8.2 8.2 12.2 16.5 16 27.4C19.8 16.5 23.8 8.2 26.8 6.4H20.4C18.6 11.8 17.2 15.2 16 18.2C14.8 15.2 13.4 11.8 11.6 6.4Z"/>
      </svg>
      <h1>Vitalida</h1>
      <div class="sub">Physio & Ostéo</div>
      <div class="rule"></div>
      <div class="tag">Physiothérapie et ostéopathie à Montréal NDG</div>
    </div>
  </div>
</body>
</html>`;

writeFileSync("/workspace/.grok/og-card.html", html);

const browser = await chromium.launch({
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const page = await browser.newPage({
  viewport: { width: 1792, height: 1008 },
  deviceScaleFactor: 1,
});
await page.setContent(html, { waitUntil: "load" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(200);
await page.screenshot({
  path: "/workspace/.grok/card-raw.png",
  type: "png",
  clip: { x: 0, y: 0, width: 1792, height: 1008 },
});
await browser.close();
console.log("wrote /workspace/.grok/card-raw.png");
