import React from 'react';
import PropTypes from 'prop-types';
import {fixSvgUrls} from "../auth/fixSvg";

const PDFLayout = ({ children, lang, token }) => (
        <html>
            <head>
                <meta charSet="utf8" />
            </head>
            <body style={{ margin: 0}}>
                {children}
            </body>
        </html>
);

PDFLayout.propTypes = {
    children: PropTypes.node,
};

export default PDFLayout;