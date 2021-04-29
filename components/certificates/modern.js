import { stylesModern } from "../../auth/pdfStyles";
import * as dayjs from 'dayjs';
import 'dayjs/locale/es';

const Certificate = ({data}) => {
    return (
        <div style={stylesModern.body} id={data.html}>
            <div id="header" style={stylesModern.header}>
                <p style={stylesModern.certificate}>{data.strings["Certificate"].toUpperCase()}</p>
                <p style={stylesModern.program}>{data.strings["Program"].toUpperCase()}</p>
                <p style={stylesModern.fullStack}>{"</"}{data.strings["Full Stack Software Development"].toUpperCase()}{">"}</p>
            </div>
            <div id="to" style={stylesModern.to}>
                <span style={stylesModern.givenTo}>{data.strings["Recognizes that"]}:</span>
            </div>
            <div id="name" style={stylesModern.name} >
                <span style={stylesModern.firstName}>{"</"}{data.user.first_name}</span>
                <span style={stylesModern.lastName}> {data.user.last_name}{">"}</span>
            </div>
            <div id="completion" style={stylesModern.completion}>
                <p style={stylesModern.completionDescription}>{data.strings["Has successfully completed the Full Stack Development program"]}</p>
                <p style={stylesModern.completionDescription}>{data.cohort.syllabus.certificate.duration_in_hours} {data.strings["Hours"]}</p>
                <p style={stylesModern.completionDescription}>{data.academy.name}</p>
                <p style={stylesModern.completionDescription}>{dayjs(data.created_at).locale(data.lang || "en").format("DD MMMM YYYY")}</p>
            </div>
            <div id="department" style={stylesModern.department}>
                <img alt="florida department of education logo"
                    src="https://storage.googleapis.com/certificates-breathecode/assets/fdoe.png"
                    width="168px"
                    height="48px" />
            </div>
            <div id="signature" style={stylesModern.signature}>
                <p style={stylesModern.sign}>{data.signed_by}</p>
                <p style={stylesModern.signedBy}>{data.signed_by}</p>
                <p style={stylesModern.role}>{data.signed_by_role}</p>
            </div>
            <div id="verify" style={stylesModern.verify}> 
                <span style={stylesModern.at}>Verify this certificate at https://certificate.breatheco.de/{data.token}</span>
            </div>
            <img src="https://drive.google.com/uc?export=view&id=18gl9dv57tcuCpYcyyVjnCdOUuSVIparf" style={{width:"100%"}}/>
        </div>
    );
}

export default Certificate;