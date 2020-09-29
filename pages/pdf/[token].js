import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import strings from "../../auth/strings";
import { Alert } from 'react-bootstrap';
import Link from "../../components/ui/Link";
import dynamic from 'next/dynamic';

const Default = dynamic(
  () => import('../../components/diplomas/default'),
  { ssr: false }
);

const Modern = dynamic(
  () => import('../../components/diplomas/modern'),
  { ssr: false }
);
const Pdf = ({data,token,query}) => {
    return <>
            {data && data.status_code ?             
            <div className="container">
                <Alert variant={"danger"} className="shadow-one mt-4 d-flex">Ooops... Certificate not found or something went wrong , <Link to={"/find"} > go to the find page.</Link></Alert>
            </div>: data.layout === "modern" ?
            <Modern
                 student={data.user}
                 specialty={data.specialty}
                 academy={data.academy}
                 cohort={data.cohort}
                 signed_by={data.signed_by}
                 signed_by_role={data.signed_by_role}
                 strings={strings[query.lang || "en"]}
                 token={token}
                 lang={query.lang}
                 created_at={data.created_at}
                 /> :
                <Default 
                 student={data.user}
                 specialty={data.specialty}
                 academy={data.academy}
                 cohort={data.cohort}
                 signed_by={data.signed_by}
                 signed_by_role={data.signed_by_role}
                 strings={strings[query.lang || "en"]}
                 token={token}
                 lang={query.lang}
                 created_at={data.created_at}
                 />
            }
          </>
}

export async function getServerSideProps(context) {
    const { token } = context.query
    const res = await fetch(`${process.env.BC_HOST}/${token}`);
    const data = await res.json();
    return {
        props: {
            data: data,
            token: token,
            query: context.query
        }
    }
}

export default Pdf;