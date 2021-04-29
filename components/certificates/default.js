import { stylesDefault } from "../../auth/pdfStyles";
import * as dayjs from 'dayjs';
import 'dayjs/locale/es';

const Certificate = ({ data }) => {
    return (
        <div style={stylesDefault.body} id={data.html}>
            <div id="header" style={stylesDefault.header}>
                <p style={stylesDefault.certificate}>{data.strings["Certificate"].toUpperCase()}</p>
                <p style={stylesDefault.program}>{data.strings["Program"].toUpperCase()}</p>
                <p style={stylesDefault.fullStack}>{"</"}{data.strings["Full Stack Software Development"].toUpperCase()}{">"}</p>
            </div>
            <div id="to" style={stylesDefault.to}>
                <span style={stylesDefault.givenTo}>{data.strings["Recognizes that"]}:</span>
            </div>
            <div id="name" style={stylesDefault.name} >
                <span style={stylesDefault.firstName}>{"</"}{data.user.first_name}</span>
                <span style={stylesDefault.lastName}> {data.user.last_name}{">"}</span>
            </div>
            <div id="completion" style={stylesDefault.completion}>
                <p style={stylesDefault.completionDescription}>{data.strings["Has successfully completed the Full Stack Development program"]}</p>
                <p style={stylesDefault.completionDescription}>{data.cohort.syllabus.certificate.duration_in_hours} {data.strings["Hours"]}</p>
                <p style={stylesDefault.completionDescription}>{data.academy.name}</p>
                <p style={stylesDefault.completionDescription}>{dayjs(data.created_at).locale(data.lang || "en").format("DD MMMM YYYY")}</p>
            </div>
            <div id="department" style={stylesDefault.department}>
                <img alt="florida department of education logo"
                    src="https://storage.googleapis.com/certificates-breathecode/assets/fdoe.png"
                    width="168px"
                    height="48px" />
            </div>
            <div id="signature" style={stylesDefault.signature}>
                <p style={stylesDefault.sign}>{data.signed_by}</p>
                <p style={stylesDefault.signedBy}>{data.signed_by}</p>
                <p style={stylesDefault.role}>{data.signed_by_role}</p>
            </div>
            <div id="verify" style={stylesDefault.verify}>
                <span style={stylesDefault.at}>Verify this certificate at https://certificate.breatheco.de/{data.token}</span>
            </div>
            <img src="https://drive.google.com/uc?export=view&id=1BUh068EZklAoKfWRkVPO0kNrYcT1_lMK" style={{width:"100%"}}/>
        </div>
    );
}

export default Certificate;
