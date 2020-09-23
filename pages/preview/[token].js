import React from "react";
import ModernCertificate from "../../components/certificates/modern";
import DefaultCertificate from "../../components/certificates/default";
import strings from "../../auth/strings";
import PDFLayout from "../../components/PDFLayout";


const Preview = ({data, query, token}) => {
    console.log(query);
    return (
        <PDFLayout>
         <ModernCertificate data={{
            ...data, 
            token: token, 
            lang: query.lang || "en",  
            strings: strings[query.lang || "en"]}}
        />   
        </PDFLayout>
    );
}

const HOST = "https://breathecode.herokuapp.com/v1/certificate/token";

export async function getServerSideProps(context){
    const {token} = context.query
    const res = await fetch(`${HOST}/${token}`); 
    const data = await res.json();
    return {
        props: {
            data: data,
            token: token,
            query: context.query
        }
    }
}
export default Preview;