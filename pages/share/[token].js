import React, { useState } from "react";
import Button from "../../components/ui/Button";
import Icon from "../../components/ui/Icon";
import Link from "../../components/ui/Link";
import * as dayjs from 'dayjs';
import { useRouter } from 'next/router';


const Share = ({ user }) => {
    const { query } = useRouter();
    const [data] = useState(user);

    return (
        <div className="container-fluid share">
            <div className="row">
                <div className="col-12">
                </div>
            </div>
            <div className="container">
             <div className="row pt-4 pb-4">
                <div className="col-md-4 col-12">
                    <div className="row pb-2">
                        <div className="col-12">
                            <Button className="w-100" icon="arrow" variant="primary">
                                <img src="https://www.flaticon.es/svg/static/icons/svg/174/174857.svg" />
                                <Button.Label>Share on LinkedIn</Button.Label>
                            </Button>
                        </div>
                    </div>
                    <div className="row pb-2">
                        <div className="col-12">
                            <Button className="w-100" icon="arrow" variant="primary" to={`/pdf/${query.token}`}>
                                <img src="https://www.flaticon.es/svg/static/icons/svg/617/617526.svg" />
                                <Button.Label >Download PDF</Button.Label>
                            </Button>
                        </div>
                    </div>
                    <div className="row pb-2">
                        <div className="col-12">
                            <div className="card shadow-one mb-3 d-flex" >
                                <img src="https://www.flaticon.es/svg/static/icons/svg/74/74472.svg" width="40px" height="40px" className="mr-3"/>
                                <div>
                                    <p>{data && data.user.first_name + " " + data.user.last_name}</p>
                                    <Link href="/#" >view all certificates</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card shadow-one mb-3" >
                                <div className="card-body">
                                    <h5 className="card-title">Issuer</h5>
                                    <p>{data && data.academy.name}</p>
                                    <Link href="https://www.4geeksacademy.co/">website</Link>
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
                                    <p className="font-weight-bold">This certificate is valid.</p>
                                    <p>and it does not expires</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pb-4">
                        <div className="col-sm-12 col-12 ">
                            <h1>Full Stack Web Development</h1>
                            <p>This document certifies that the student is a Full stack web developer,
                            with proficient knowlege to help in the creation of web applications using HTML/CSS,
                                Javascript, React and REST API using SQL, Python and the Flask Framework</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 col-4 ">
                            <h4>Total Hours</h4>
                            <p>{data && data.specialty.duration_in_hours}Hrs</p>
                        </div>
                        <div className="col-md-4-12 col-4 ">
                            <h4>Issued On</h4>
                            <p>{data && dayjs(data.created_at).locale(query.lang || "en").format("DD MMMM YYYY")}</p>
                        </div>
                        <div className="col-sm-4d col-4 ">
                            <h4>Expired On</h4>
                            <p>Does not expire</p>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
        </div>
    )
}

const HOST = "https://breathecode.herokuapp.com/v1/certificate/token";

export async function getServerSideProps(context){
    const {token} = context.query
    const res = await fetch(`${HOST}/${token}`); 
    const data = await res.json();
    return {
        props: {
            user: data
        }
    }
}

export default Share;