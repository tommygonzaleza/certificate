import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Icon from "../Icon/index";

const SmartLink = ({ className, to, href, color, children }) => {
    return (
        <div className={`smart-link ${className} text-${color}`}>
            {href ?
                <a target="_blank" rel="noopener noreferrer" href={href} className={className}>
                    {children}
                    <Icon name='arrow-right' size='xs' color={color} />
                </a>
                : to ? <Link href={to}>
                            <a className={className}>{children}
                                <Icon name='arrow-right' size='xs' color={color} />
                            </a>
                        </Link>
                    : <a>Error! Pass me a url or relative path</a>
            }
        </div>
    )
}
SmartLink.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.node,
    imgSrc: PropTypes.string,
    type: PropTypes.string,
    subBackground: PropTypes.string,
    sub: PropTypes.string,
    arrow: PropTypes.bool
};
SmartLink.defaultProps = {
    className: "",
    to: null,
    href: null,
    color: "primary",
    children: null,
    imgSrc: "",
    type: "link",
    subBackground: "",
    sub: "",
    arrow: false
};

export default SmartLink;