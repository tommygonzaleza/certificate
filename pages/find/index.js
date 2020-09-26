import React, { useEffect } from "react"
import { Input } from "../../components/ui/form";
import Button from "../../components/ui/Button";
import Router from "next/router";
import {Alert} from "react-bootstrap";

const Find = () => {
    const [token, setToken] = React.useState("");
    const [to, setTo] = React.useState("");
    const [notify, setNotify] = React.useState({msg: "", type: ""});
    const [show, setShow] = React.useState(true);

    const onSubmit = (e) =>{
        e.preventDefault();
        fetch(`${process.env.BC_HOST}/${token}`)
        .then(res =>  res.json())
        .then(data => {
            if(token.length < 1 || data.status_code === 404 ) {
            setNotify({msg:"Invalid Token or Certificate not found", type:"error"})
            } else Router.push(`/${to}/${token}`)}
        )
        .catch(err => err)
    }

    return <div className="container">
        <div className="row text-center">
            <div className="col-12">
                <h1>Looking for a certificate?</h1>
            </div>
            <div className="col-12">         
            <form  className="d-flex" onSubmit={(e) => onSubmit(e)}>
                <Input type="text" required onChange={(e) => setToken(e.target.value)} placeholder="Certificate token" className="mr-1 ml-auto"/>
                <Button className="mr-1" type="submit" onClick={() => setTo("pdf")}>Get certificate</Button>
                <Button  type="submit" onClick={() => setTo("preview")} className="mr-auto">Get HTML</Button>
            </form>
            </div>
        </div>
            {notify.type == "error" ? <Alert onClose={setTimeout(()=> setShow(false),3000)} show={show} variant={"danger"} className="shadow-one mt-4 alert-position">{notify.msg}</Alert> : ""}
    </div>
}
export default Find;