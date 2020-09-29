/* import { renderToStaticMarkup } from 'react-dom/server';
import phantomjs from 'phantomjs';
import pdf from 'html-pdf';

const componentToPDFBuffer = (component) => {
  return new Promise((resolve, reject) => {
    const html = renderToStaticMarkup(component);

    const options = {
// did not work ->        phantomPath: phantomjs.path,
// did not work ->       phantomPath: './node_modules/phantomjs/bin/phantomjs',
        phantomPath: '/vercel/workpath0/node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs',
        format: 'A4',
        orientation: 'landscape',
        type: 'pdf',
        timeout: 30000,
    };

    const _buffer = pdf.create(html, options).toBuffer((err, buffer) => {
        if (err) {
            console.log("buffer", buffer);
            console.log("phantomjs.path", phantomjs.path);
            console.log("Error creating PDF", err);
            return reject(err);
        }
    
        return resolve(buffer);
    });
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
}; */