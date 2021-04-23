import React, { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { StaticImage } from "gatsby-plugin-image";
import "../scss/styles.scss";

// import "../js/jquery.js";
// import "../js/jquery.sticky.js";
// import "../js/imagesloaded.pkgd.js";
// import "../js/jquery.fitvids.js";
// import "../js/jquery.smartmenus.min.js";
// import "../js/isotope.pkgd.js";
// import "../js/jquery.easing.1.3.js";
// import "../js/jquery.prettyPhoto.js";
// import "../js/owl.carousel.min.js";
// import "../js/jquery.sticky-kit.min.js";
// import "../js/main.js";

// markup OK
const IndexPage = () => {
  return (
    <div class='page-template-onepage'>
      <footer class='footer'>
        <div class='footer-content center-relative'>
          <div class='footer-mail'>
            <a href='mailto:hello@site.com'>hello@cocobasic.com</a>
          </div>
          <div class='footer-number'>
            <a href='tel:987654321'>987.654.321</a>
          </div>
          <div class='footer-info'>
            New York <br />
            Some St. 258 <br />
            United States
          </div>

          <div class='social-holder'>
            <a href='#'>
              <span class='fa fa-twitter'></span>
            </a>
            <a href='#'>
              <span class='fa fa-facebook'></span>
            </a>
            <a href='#'>
              <span class='fa fa-behance'></span>
            </a>
            <a href='#'>
              <span class='fa fa-dribbble'></span>
            </a>
          </div>

          <div class='copyright-holder'>
            © 2018 Cardea HTML Template by{" "}
            <a href='http://cocobasic.com'>CocoBasic</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IndexPage;
