import { renderToStaticMarkup } from 'react-dom/server';
import phantomjs from 'phantomjs';
import pdf from 'html-pdf';

const componentToPDFBuffer = (component) => {
  return new Promise((resolve, reject) => {
    const html = renderToStaticMarkup(component);

    const options = {
        //./node_modules/phantomjs/bin/phantomjs
        phantomPath: phantomjs.path,
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
}

export default {
  componentToPDFBuffer
}