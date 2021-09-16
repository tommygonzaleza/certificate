import React from "react"
import PropTypes from 'prop-types'
import { IconContext } from "react-icons"
import { IoLogoGithub } from "react-icons/io"
import { FcCollaboration, FcHome, FcGraduationCap, FcSettings, FcBriefcase, FcButtingIn, FcCheckmark } from "react-icons/fc";
import { FiArrowRightCircle } from "react-icons/fi";
import { BsArrowRight,BsArrowDown } from "react-icons/bs";
import { FaLinkedin, FaFilePdf } from "react-icons/fa";
import {BsFillPersonFill} from "react-icons/bs"
export const icons = {
    'github': IoLogoGithub,
    'collaboration': FcCollaboration,
    'home': FcHome,
    'academy': FcGraduationCap,
    'settings': FcSettings,
    'profile': FcButtingIn,
    'briefcase': FcBriefcase,
    'arrow-right': FiArrowRightCircle,
    'arrow': BsArrowRight,
    'check-mark': FcCheckmark,
    "arrow-down": BsArrowDown,
    "linked-in":FaLinkedin,
    "pdf": FaFilePdf,
    "avatar":BsFillPersonFill,
}
export const sizes = {
    xs: '90%',
    md: '150%',
    lg: '200%'
}
const Icon = ({ name, size, color,style, ...rest }) => {

    //only the specific icons
    if(icons[name] === undefined) return "?";

    const TheIcon = icons[name]
    return <IconContext.Provider value={{ color, className: "icon" }}>
    <>
        <TheIcon {...rest} style={{ fontSize: sizes[size], ...style }}  />
    </>
    </IconContext.Provider>
}
Icon.propTypes = {
  size: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
};
Icon.defaultProps = {
   size: 'md',
   name: null,
   color: '#2F80ED',
};
export default Icon