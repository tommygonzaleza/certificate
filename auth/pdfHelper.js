import { renderToStaticMarkup } from 'react-dom/server';
import pdf from 'html-pdf';

const componentToPDFBuffer = (component) => {
  return new Promise((resolve, reject) => {
    const html = renderToStaticMarkup(component);
    const path = require('path');
    process.env.FONTCONFIG_PATH = path.join(process.cwd(), "fonts");
    process.env.LD_LIBRARY_PATH = path.join(process.cwd(), "bins"); 
    console.log(process.cwd())
    const options = {
      format: 'A4',
      orientation: 'landscape',
      type: 'pdf',
      phantomPath: path.resolve(
          process.cwd(),
          'node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs'
        ),
      timeout: 30000,
    };

    const buffer = pdf.create(html, options).toBuffer((err, buffer) => {
      if (err) {
        return reject(err);
        }
    
        return resolve(buffer);
    });
  });
}

export default {
  componentToPDFBuffer
}