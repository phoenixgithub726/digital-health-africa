import React from 'react';
import {Link} from "react-router-dom";

import footerStyles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles["footer-wrapper"]}>
        <div className={footerStyles["footer-content"]}>
          <div className={footerStyles["footer-column"]}>
            <div className={footerStyles["footer-title"]}>
              <span>Digital Health Access</span>
            </div>
            <div>
              <Link to="" className={footerStyles["footer-item"]}>
                Home
              </Link>
              <Link to="" className={footerStyles["footer-item"]}>
                About
              </Link>
              <Link to="" className={footerStyles["footer-item"]}>
                Affiliate
              </Link>
              <Link to="" className={footerStyles["footer-item"]}>
                Contact Us
              </Link>
            </div>
          </div>
          <div className={footerStyles["footer-column"]}>
            <div className={footerStyles["footer-title"]}>
              <span>For Patients</span>
            </div>
            <div>
              <Link to="" className={footerStyles["footer-item"]}>
                Health Questions
              </Link>
              <Link to="" className={footerStyles["footer-item"]}>
                Search For Doctors
              </Link>
              <Link to="" className={footerStyles["footer-item"]}>
                Search For Clinics
              </Link>
              <Link to="" className={footerStyles["footer-item"]}>
                Search For Hospitals
              </Link>
              <Link to="" className={footerStyles["footer-item"]}>
                Book Lab Test
              </Link>
              <Link to="" className={footerStyles["footer-item"]}>
                Consult Doctor
              </Link>
              <Link to="" className={footerStyles["footer-item"]}>
                Order Mecidine
              </Link>
              <Link to="" className={footerStyles["footer-item"]}>
                Read Health Articles
              </Link>
            </div>
          </div>
          <div className={footerStyles["footer-column"]}>
            <div className={footerStyles["footer-title"]}>
              <span>More</span>
            </div>
            <div>
              <Link to="" className={footerStyles["footer-item"]}>
                Help
              </Link>
              <Link to="" className={footerStyles["footer-item"]}>
                Privacy Policy
              </Link>
              <Link to="" className={footerStyles["footer-item"]}>
                Terms and Conditions
              </Link>
              <Link to="" className={footerStyles["footer-item"]}>
                Healthcare Directory
              </Link>
              <Link to="" className={footerStyles["footer-item"]}>
                Health Wiki
              </Link>
            </div>
          </div>
          <div className={footerStyles["footer-column"]}>
            <div className={footerStyles["footer-title"]}>
              <span>Social</span>
            </div>
            <div>
              <Link to="" className={footerStyles["footer-item"]}>
                Facebook
              </Link>
              <Link to="" className={footerStyles["footer-item"]}>
                Twitter
              </Link>
              <Link to="" className={footerStyles["footer-item"]}>
                LinkedIn
              </Link>
              <Link to="" className={footerStyles["footer-item"]}>
                YouTube
              </Link>
            </div>
          </div>
        </div>
        <div className={footerStyles["footer-copyright"]}>
          <span>Copyright &copy; 2019, DHA. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
