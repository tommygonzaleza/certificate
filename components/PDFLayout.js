import React from 'react';
import PropTypes from 'prop-types';

const PDFLayout = ({ children,lang,token }) => (
  <html>
    <head>
      <meta charSet="utf8" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Mrs+Saint+Delafield&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="http://localhost:3000/static/pdf.css" />
    </head>
    <body style={{margin: 0}}>
      {children} 
    </body>
  </html>
);

PDFLayout.propTypes = {
  children: PropTypes.node,
};

export default PDFLayout;