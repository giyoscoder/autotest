import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={classes.footer}>
        <div className={classes.afterFooter}>
          <div>
            <h4>Company Name</h4>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div>
            <h4>PRODUCTS</h4>
            <ul>
              <li>MDBootstrap</li>
              <li>MDWordPress</li>
              <li>BrandFlow</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div>
            <h4>USEFUL LINKS</h4>
            <ul>
              <li>Your Account</li>
              <li>Become an Affiliate</li>
              <li>Shipping Rates</li>
              <li>Help</li>
            </ul>
          </div>
          <div>
            <h4>CONTACT</h4>
            <ul>
              <li> New York, NY 10012, US</li>
              <li>info@gmail.com</li>
              <li>+998999555850</li>
            </ul>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <hr/>
        <p className={classes.last}>&copy; 2023 Copyright: MDBootstrap.com</p>
      </div>
    </>
  );
};

export default Footer;
