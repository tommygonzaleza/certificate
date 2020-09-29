import { renderToStaticMarkup } from "react-dom/server";
import puppeteer from "puppeteer";
const componentToPDFBuffer = async component => {
  const html = renderToStaticMarkup(component);
  const browser = await puppeteer.launch({
    headless: true,
    args: ['—no-sandbox', '—disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0', timeout: 30000 });
  const pdf = await page.pdf({
    format: 'A4',
  });
await browser.close();
  return pdf;
};
export default {
  componentToPDFBuffer
};