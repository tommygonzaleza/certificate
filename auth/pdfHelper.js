import { renderToStaticMarkup } from 'react-dom/server';
import pdf from 'html-pdf';
import path from "path";

const componentToPDFBuffer = (component) => {
    process.env.FONTCONFIG_PATH = path.join(process.cwd(), "fonts");
    process.env.LD_LIBRARY_PATH = path.join(process.cwd(), "bins"); 
  return new Promise((resolve, reject) => {
    const html = renderToStaticMarkup(component);
    const options = {
      format: 'A4',
      orientation: 'landscape',
      type: 'pdf',
      timeout: 30000,
    };

    pdf.create(html, options).toBuffer((err, buffer) => {
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