import React, { useState } from "react";
import PageLogo from "../Assets/Images/Svg/PageLogo.svg";
import PhoneIcon from "../Assets/Images/Svg/PhoneIcon.svg";
import CartIcon from "../Assets/Images/Svg/CartIcon.svg";
import locationIcon from "../Assets/Images/Svg/locationIcon.svg";
import searchIcon from "../Assets/Images/Svg/searchIcon.svg";
import HomeIcon from "../Assets/Images/Svg/HomeIcon.svg";
import HealthPackages from "../Assets/Images/Svg/HealthPackages.svg";
import NearestLabs from "../Assets/Images/Svg/NearestLabs.svg";
import Doctors from "../Assets/Images/Svg/Doctors.svg";
import Hospitals from "../Assets/Images/Svg/Hospitals.svg";
import UploadPrescription from "../Assets/Images/Svg/UploadPrescription.svg";

function NavBar() {
  const [navOpen, setNavOpen] = useState(true);
  return (
    <>
      <nav className="position-relative  ">
        <div className="bg_primry">
          <div className="container py-4 d-flex justify-content-between align-items-center">
            <img width={178} src={PageLogo} alt="PageLogo" />
            <div className="d-flex justify-content-between align-items-center">
              <div className=" bg-white d-flex align-items-center pe-4 me_37 rounded-3 overflow-hidden">
                <p className="ff_inter fw-semibold mb-0 bg_secondary me-2 Gurugram_button text_dark">
                  <img
                    className="pe-1"
                    src={locationIcon}
                    alt="location Icon"
                  />{" "}
                  Gurugram
                </p>
                <input
                  type="text"
                  className="search_input me-3 mb-1"
                  placeholder="Search for a test, health package or Labs"
                />
                <img src={searchIcon} alt="searchIcon" />
              </div>
              <p className="ff_inter fs_4xl fw-medium text-white mb-0 me_37">
                <img src={PhoneIcon} alt="PhoneIcon " /> 75000 75111
              </p>
              <a
                href="#"
                className="ff_inter fs_4xl fw-medium text-white mb-0 me_37"
              >
                <img src={CartIcon} alt="CartIcon" /> Cart
              </a>
              <button className=" ff_inter text_dark fw-medium button_shadow bg_secondary border-0 rounded-3 sign_button">
                Sign in
              </button>
              <button
                className={
                  navOpen
                    ? "d-flex d-lg-none flex-column ms-4 bg-transparent border-0 lines"
                    : "d-flex d-lg-none flex-column ms-4 bg-transparent border-0 lines"
                }
                onClick={() => setNavOpen(!navOpen)}
              >
                <span className="d-inline-block bg_secondary"></span>
                <span className="d-inline-block bg_secondary my-2"></span>
                <span className="d-inline-block bg_secondary"></span>
              </button>
            </div>
          </div>
        </div>
        <div
          className={
            navOpen
              ? "container-lg pt-4 sidebar"
              : "container-lg pt-4 sidebar start-0 "
          }
        >
          <ul className="d-lg-flex align-items-center justify-content-between ps-0 mb-0">
            <li>
              <a
                className=" ff_inter fw-medium text_semidark mt-4 d-inline-block"
                href="#"
              >
                <img className="pb-1 me-1" src={HomeIcon} alt="Home Icon" />{" "}
                Home
              </a>
            </li>
            <li>
              <a
                className=" ff_inter fw-medium text_semidark mt-4 d-inline-block"
                href="#"
              >
                <img
                  className="pb-1 me-1"
                  src={HealthPackages}
                  alt="Health Packages"
                />{" "}
                Health Packages
              </a>
            </li>
            <li>
              <a
                className=" ff_inter fw-medium text_semidark mt-4 d-inline-block"
                href="#"
              >
                <img
                  className="pb-1 me-1"
                  src={NearestLabs}
                  alt="Nearest Labs"
                />{" "}
                Nearest Labs
              </a>
            </li>
            <li>
              <a
                className=" ff_inter fw-medium text_semidark mt-4 d-inline-block"
                href="#"
              >
                <img className="pb-1 me-1" src={Doctors} alt="Doctors" />{" "}
                Doctors
              </a>
            </li>
            <li>
              <a
                className=" ff_inter fw-medium text_semidark mt-4 d-inline-block"
                href="#"
              >
                <img className="pb-1 me-1" src={Hospitals} alt="Hospitals" />{" "}
                Hospitals
              </a>
            </li>
            <li>
              <a
                className=" ff_inter fw-medium text_semidark mt-4 d-inline-block"
                href="#"
              >
                <img
                  className="pb-1 me-1"
                  src={UploadPrescription}
                  alt="
                  Upload Prescription"
                />{" "}
                Upload Prescription
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
