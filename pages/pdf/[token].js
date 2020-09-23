import React from 'react';
import ModernCertificate from "../../components/certificates/modern";
import DefaultCertificate from "../../components/certificates/default";
import PDFLayout from '../../components/PDFLayout';
import pdfHelper from '../../auth/pdfHelper';
import strings from "../../auth/strings";


const Pdf = () =>{
  return <h1>Token not found</h1>
}

const HOST = "https://breathecode.herokuapp.com/v1/certificate/token";

export const getServerSideProps = async (context) => {
    const { res, query } = context;
    const token = query.token;
    const response = await fetch(`${HOST}/${token}`);
    const data = await response.json();
    if (token !== "") {
      const buffer = await pdfHelper.componentToPDFBuffer(
        <PDFLayout lang={query.lang} token={token}>
          {query.style === "modern" ?<ModernCertificate data={{
            ...data, 
            token: token, 
            lang: query.lang || "en",  
            strings: strings[query.lang || "en"]}}
            />:<DefaultCertificate data={{
            ...data, 
            token: token, 
            lang: query.lang || "en",  
            strings: strings[query.lang || "en"]}}
          />}
        </PDFLayout>
      );
      // with this header,the browser will open the pdf directly      
      res.setHeader('Content-Type', 'application/pdf');
      // output the pdf buffer. once res.end is triggered, it won't trigger the render method
      res.end(buffer);
    }s
    return {
      props: {
        data: data
      }
    };
}

export default Pdf;