import PropTypes from "prop-types";
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = ({ text, bgColor, textColor }) => {
  const footerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <footer style={footerStyle} className="footer">
      <h4 className="contact-us">{text}</h4>
      <div className="social-icons">
        <FaFacebook />
        <FaTwitter />
        <FaLinkedinIn />
      </div>
      <p> &copy; Copyright | Team GitHub, 2023</p>
    </footer>
  );
};

Footer.defaultProps = {
  text: "Contact Us",
  bgColor: "#FF6A95",
  textColor: "#fff",
};

Footer.propTypes = {
  text: PropTypes.string,
};

export default Footer;