import React from "react";
import pageLogo from "../Assets/Images/Svg/PageLogo.svg";

function Footer() {
  return (
    <>
      <footer className="bg_dark mt-5 py-5">
        <div className="container">
          <img src={pageLogo} alt="page logo" />
          <div className="row">
            <div className="col">
              <p className=" ff_Heebo fw-medium fs_5xl text-white mb-0 pt-5 mt-3">
                Patients
              </p>
              <ul className="pt-4">
                <li className="list_style_disc mt-2">
                  <a className="ff_Heebo fw-normal fs_md text-white" href="#">
                    Book a Test
                  </a>
                </li>
                <li className="list_style_disc mt-2">
                  <a className="ff_Heebo fw-normal fs_md text-white" href="#">
                    Upload prescription
                  </a>
                </li>
                <li className="list_style_disc mt-2">
                  <a className="ff_Heebo fw-normal fs_md text-white" href="#">
                    Download Report
                  </a>
                </li>
                <li className="list_style_disc mt-2">
                  <a className="ff_Heebo fw-normal fs_md text-white" href="#">
                    Health Packages
                  </a>
                </li>
                <li className="list_style_disc mt-2">
                  <a className="ff_Heebo fw-normal fs_md text-white" href="#">
                    Lab Locator
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <p className=" ff_Heebo fw-medium fs_5xl text-white mb-0 pt-5 mt-3">
                Partner with us
              </p>
              <ul className="pt-4">
                <li className="list_style_disc mt-2">
                  <a className="ff_Heebo fw-normal fs_md text-white" href="#">
                    Franchise Opportunities
                  </a>
                </li>
                <li className="list_style_disc mt-2">
                  <a className="ff_Heebo fw-normal fs_md text-white" href="#">
                    Corporate Wellness
                  </a>
                </li>
                <li className="list_style_disc mt-2">
                  <a className="ff_Heebo fw-normal fs_md text-white" href="#">
                    Hospital Lab Management
                  </a>
                </li>
                <li className="list_style_disc mt-2">
                  <a className="ff_Heebo fw-normal fs_md text-white" href="#">
                    Organise Camps
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <p className=" ff_Heebo fw-medium fs_5xl text-white mb-0 pt-5 mt-3">
                Doctors
              </p>
              <ul className="pt-4">
                <li className="list_style_disc mt-2">
                  <a className="ff_Heebo fw-normal fs_md text-white" href="#">
                    National Reference Lab
                  </a>
                </li>
                <li className="list_style_disc mt-2">
                  <a className="ff_Heebo fw-normal fs_md text-white" href="#">
                    Research and Development
                  </a>
                </li>
                <li className="list_style_disc mt-2">
                  <a className="ff_Heebo fw-normal fs_md text-white" href="#">
                    Download Forms
                  </a>
                </li>
                <li className="list_style_disc mt-2">
                  <a className="ff_Heebo fw-normal fs_md text-white" href="#">
                    Scientific Literature
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <p className=" ff_Heebo fw-medium fs_5xl text-white mb-0 pt-5 mt-3">
                Company
              </p>
              <ul className="pt-4">
                <li className="list_style_disc mt-2">
                  <a className="ff_Heebo fw-normal fs_md text-white" href="#">
                    About Us
                  </a>
                </li>
                <li className="list_style_disc mt-2">
                  <a className="ff_Heebo fw-normal fs_md text-white" href="#">
                    Management
                  </a>
                </li>
                <li className="list_style_disc mt-2">
                  <a className="ff_Heebo fw-normal fs_md text-white" href="#">
                    Career
                  </a>
                </li>
                <li className="list_style_disc mt-2">
                  <a className="ff_Heebo fw-normal fs_md text-white" href="#">
                    Newsletter
                  </a>
                </li>
                <li className="list_style_disc mt-2">
                  <a className="ff_Heebo fw-normal fs_md text-white" href="#">
                    PR Media
                  </a>
                </li>
                <li className="list_style_disc mt-2">
                  <a className="ff_Heebo fw-normal fs_md text-white" href="#">
                    Disclosures
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <p className=" ff_Heebo fw-medium fs_5xl text-white mb-0 pt-5 mt-3">
                Contact Us
              </p>
              <ul className="pt-4">
                <li className="list_style_disc mt-2">
                  <a className="ff_Heebo fw-normal fs_md text-white" href="#">
                    Contact Us Get in touch
                  </a>
                </li>
                <li className="list_style_disc mt-2">
                  <a className="ff_Heebo fw-normal fs_md text-white" href="#">
                    Faq
                  </a>
                </li>
                <li className="list_style_disc mt-2">
                  <a className="ff_Heebo fw-normal fs_md text-white" href="#">
                    Sitemap
                  </a>
                </li>
                <li className="list_style_disc mt-2">
                  <a className="ff_Heebo fw-normal fs_md text-white" href="#">
                    Share Your Feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
