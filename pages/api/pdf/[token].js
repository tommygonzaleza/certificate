import PDFLayout from "../../../components/PDFLayout";
import ModernCertificate from "../../../components/certificates/modern";
import DefaultCertificate from "../../../components/certificates/default";
import pdfHelper from "../../../auth/pdfHelper";
import strings from "../../../auth/strings";

export default async  (req, res) => {
      const {
                query: { token,lang,style },
            } = req
    const response = await fetch(`${process.env.BC_HOST}/${token}`);
    const data = await  response.json();
    if (token !== "" && !data.status_code) {
        const buffer = await  pdfHelper.componentToPDFBuffer(
            <PDFLayout lang={lang} token={token}>
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
            </PDFLayout>
        );
        // with this header,the browser will open the pdf directly 
        res.setHeader('Content-Type', 'application/pdf');
        // output the pdf buffer. once res.end is triggered, it won't trigger the render method
        res.end(buffer);
    }
}