import React, { useState } from "react";
import Button from "../../components/ui/Button";
import Icon from "../../components/ui/Icon";
import SLink from "../../components/ui/Link";
import * as dayjs from 'dayjs';
import { useRouter } from 'next/router';
import LanguageSwitcher from "../../components/ui/LaguageSwitcher";
import translations from "../../auth/strings";
import ModernCertificate from "../../components/certificates/modern";
import DefaultCertificate from "../../components/certificates/default";
import Link from "next/link";
import Head from "next/head";

const Share = ({ user }) => {
    const router = useRouter();
    const { query } = router;
    const [data] = useState(user);
    const [strings,setStrings] = useState(translations[query.lang || "en"]);
    return (
        <>
            <Head>
                <title>{"4Geeks Academy's Student Certificate"}</title>
                <meta property="og:title" content="4Geeks Academy's Students Certificates" />
                <meta property="og:description" content="Certificates verification of 4Geeks Academy Students" />
                <meta property="og:image" content={""}/>
                <meta property="og:url" content={"https://3000-d75afd03-4f32-4ac8-9fad-5975175bd685.ws-us02.gitpod.io/share/5a1f9e351a81664169194bea10a6813d121a5c54"} />
                <meta name="twitter:title" content={"4Geeks Academy's Student Certificate"} />
                <meta name="twitter:description" content={"Certificates verification of 4Geeks Academy Students"} />
                <meta name="twitter:image" content={"../public/test.png"} />
                <meta name="twitter:image:alt" content="Alt text for image" />
                <meta name="twitter:site" content="@4geeksacademy" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Mrs+Saint+Delafield&display=swap" rel="stylesheet" />
            </Head>
            <div className="container-fluid share">
                <div className="row">
                    <div className="col-12 bg-dark">
                        {
                            query.style === "modern" ? <ModernCertificate data={{
                                ...data,
                                token: query.token,
                                lang: query.lang || "en",
                                strings: translations[query.lang || "en"],
                                html: "html-body"
                            }} /> : <DefaultCertificate data={{
                                ...data,
                                token: query.LanguageSwitchertoken,
                                lang: query.lang || "en",
                                strings: translations[query.lang || "en"],
                                html: "html-body"
                            }}
                                />}
                    </div>
                </div>
                <div className="container">
                    <div className="row pt-4 pb-4">
                        <div className="col-md-4 col-12">
                            <div className="row pb-2">
                                <div className="col-12">
                                    <Button className="w-100" icon="arrow" variant="primary">
                                        <img src="https://www.flaticon.es/svg/static/icons/svg/174/174857.svg" />
                                        <Button.Label>{strings["Share on LinkedIn"]}</Button.Label>
                                    </Button>
                                </div>
                            </div>
                            <div className="row pb-2">
                                <div className="col-12">
                                    <Button className="w-100" icon="arrow" variant="primary" to={`/pdf/${query.token}`}>
                                        <img src="https://www.flaticon.es/svg/static/icons/svg/617/617526.svg" />
                                        <Button.Label >{strings["Download PDF"]}</Button.Label>
                                    </Button>
                                </div>
                            </div>
                            <div className="row pb-2">
                                <div className="col-12">
                                    <div className="card shadow-one mb-3 d-flex" >
                                        <img src="https://www.flaticon.es/svg/static/icons/svg/74/74472.svg" width="40px" height="40px" className="mr-3" />
                                        <div>
                                            <p>{data && data.user.first_name + " " + data.user.last_name}</p>
                                            <SLink href="/#" >{strings["view all certificates"]}</SLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="card shadow-one mb-3" >
                                        <div className="card-body">
                                            <h5 className="card-title">{strings["Issuer"]}</h5>
                                            <p>{data && data.academy.name}</p>
                                            <SLink href="https://www.4geeksacademy.co/">{strings["website"]}</SLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-12">
                            <div className="row pb-4">
                                <div className="col-md-12 col-12">
                                    <div className="card shadow-one mb-3 d-flex bg-success" >
                                        <Icon name="check-mark" size="lg" />
                                        <div>
                                            <p className="font-weight-bold">{strings["This certificate is valid."]}</p>
                                            <p>{strings["and it does not expires"]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row pb-4">
                                <div className="col-sm-12 col-12 ">
                                    <h1>{strings["Full Stack Web Development"]}</h1>
                                    <p>{strings["This document certifies that the student is a Full stack web developer,with proficient knowlege to help in the creation of web applications using HTML/CSS,Javascript, React and REST API using SQL, Python and the Flask Framework"]}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 col-4 ">
                                    <h4>{strings["Total Hours"]}</h4>
                                    <p>{data && data.specialty.duration_in_hours}{strings["Hours"]}</p>
                                </div>
                                <div className="col-md-4-12 col-4 ">
                                    <h4>{strings["Issued On"]}</h4>
                                    <p>{data && dayjs(data.created_at).locale(query.lang || "en").format("DD MMMM YYYY")}</p>
                                </div>
                                <div className="col-sm-4d col-4 ">
                                    <h4>{strings["Expired On"]}</h4>
                                    <p>{strings["Does not expire"]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <LanguageSwitcher 
                translations={["es", "en"]} 
                current={query.lang} 
                onClick={(lang) => {
                    router.push("/share/[token]?lang="+ lang, `/share/${query.token}?lang=${lang}`, { query: { lang: lang } })
                    setStrings(translations[lang])
                    }} />
            </div>
        </>
    )
}

const HOST = "https://breathecode.herokuapp.com/v1/certificate/token";


export async function getServerSideProps(context) {
    const { token } = context.query
    const res = await fetch(`${HOST}/${token}`);
    const data = await res.json();
    return {
        props: {
            user: data
        }
    }
}

export default Share;