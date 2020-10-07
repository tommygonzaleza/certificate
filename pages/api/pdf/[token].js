import PDFLayout from "../../../components/PDFLayout";
import ModernCertificate from "../../../components/certificates/modern";
import DefaultCertificate from "../../../components/certificates/default";
import pdfHelper from "../../../auth/pdfHelper";
import strings from "../../../auth/strings";
import { renderToStaticMarkup } from 'react-dom/server';
import pdf from 'html-pdf';
import path from "path";

export default async (req, res) => {
    const {
        query: { token, lang, style },
    } = req
    //data
    const response = await fetch(`${process.env.BC_HOST}/${token}`);
    const data = await response.json();
    const html = renderToStaticMarkup(<PDFLayout lang={lang} token={token}>
        {style === "modern" ? <ModernCertificate data={{
            ...data,
            token: token,
            lang: lang || "en",
            strings: strings[lang || "en"]
        }}
        /> : <DefaultCertificate data={{
            ...data,
            token: token,
            lang: lang || "en",
            strings: strings[lang || "en"]
        }}
            />}
    </PDFLayout>);
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

    pdf.create(html, options).toBuffer((err, buffer) => {
        if (err) {
            return reject(err);
        }

        return resolve(buffer);
    });
    if (token !== "" && !data.status_code) {
        const buffer = await pdfHelper.componentToPDFBuffer(

        );
        // with this header,the browser will open the pdf directly 
        res.setHeader('Content-Type', 'application/pdf');
        // output the pdf buffer. once res.end is triggered, it won't trigger the render method
        res.end(buffer);
    }
}