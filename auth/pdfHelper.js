import { renderToStaticMarkup } from 'react-dom/server';
import pdf from 'html-pdf';
import path from "path";

const DIR = process.cwd()
const componentToPDFBuffer = (component) => {
    return new Promise((resolve, reject) => {
        const html = renderToStaticMarkup(component);
        const options = {
            format: 'A4',
            orientation: 'landscape',
            type: 'pdf',
            timeout: 30000,
            phantomPath: path.resolve(
                process.cwd(),
                "node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs"
            )
        };
        console.log(html)
        process.env.FONTCONFIG_PATH = path.join(DIR, "fonts");
        process.env.LD_LIBRARY_PATH = path.join(DIR, "bins");
        const result = pdf.create(html, options);
        result.toBuffer((err, buffer) => {
            if (err) {
                console.log("ERROR Genering PDF: ", err)
                return reject(err);
            }
            
            console.log("SUCCESS Genering PDF")
            return resolve(buffer);
        });
    });
}

export default {
    componentToPDFBuffer
}