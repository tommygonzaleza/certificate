import { renderToStaticMarkup } from 'react-dom/server';
import pdf from 'html-pdf';

const componentToPDFBuffer = (component) => {
  return new Promise((resolve, reject) => {
    const html = renderToStaticMarkup(component);

    const options = {
      format: 'A4',
      orientation: 'landscape',
      type: 'pdf',
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