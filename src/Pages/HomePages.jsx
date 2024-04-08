import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Lab from "../Assets/Images/Png/Lab.png";
import drImages from "../Assets/Images/Png/drImages.png";
import map from "../Assets/Images/Png/map.png";
import Hospital_images from "../Assets/Images/Png/Hospital_images.png";
import fornImages from "../Assets/Images/Png/fornImages.png";
import Directions_icon from "../Assets/Images/Svg/Directions_icon.svg";
import share_Icon from "../Assets/Images/Svg/share_Icon.svg";
import bed_Icon from "../Assets/Images/Svg/bed_Icon.svg";
import men_images from "../Assets/Images/Svg/men_images.svg";
import checkep from "../Assets/Images/Svg/checkep.svg";
import clock_icon from "../Assets/Images/Svg/clock_icon.svg";
import Hospitals2 from "../Assets/Images/Svg/Hospitals2.svg";
import PhoneIcon2 from "../Assets/Images/Svg/PhoneIcon2.svg";
import email_Box from "../Assets/Images/Svg/email_Box.svg";
import ven_Icon from "../Assets/Images/Svg/ven_Icon.svg";
import map_icon from "../Assets/Images/Svg/map_icon.svg";
import sbigeneral from "../Assets/Images/Svg/sbi-general.svg";
import acko from "../Assets/Images/Svg/acko.svg";
import ericson from "../Assets/Images/Svg/ericson.svg";
import healthindia from "../Assets/Images/Svg/healthindia.svg";
import medSave from "../Assets/Images/Svg/medSave.svg";
import mediAssist from "../Assets/Images/Svg/mediAssist.svg";
import icic from "../Assets/Images/Svg/icic.svg";
import mdIndia from "../Assets/Images/Svg/mdIndia.svg";
import bajaj from "../Assets/Images/Svg/bajaj.svg";

function HomePages() {
  return (
    <>
      <section className="bg_light container my-5">
        <div className="row py-5 justify-content-center align-items-center px-3">
          <div className="col-3">
            <img
              className="w-100"
              src={Hospital_images}
              alt="Hospital_images"
            />

            <div className="d-flex justify-content-between px-2 pt-4">
              <button className="ff_inter fw-bold fs_lg text-white bg_tertiary py-2 px-1 rounded-2 border_green">
                Book Appointment
              </button>
              <button className="ff_inter fw-bold fs_lg bg-transparent text_primary py-2 px-1 rounded-2 border_green ms-2">
                Get Directions
                <img
                  className="ms-1"
                  src={Directions_icon}
                  alt="Directions icon"
                />
              </button>
            </div>
          </div>
          <div className="col-9">
            <div className="d-flex align-items-center justify-content-between pb-4">
              <h2>Kolmet Hospital - Karol Bagh, Central Delhi</h2>
              <img src={share_Icon} alt="share_Icon" />
            </div>
            <div className="row ">
              <div className="col-7 pe-0">
                <div className="pt-4 border_white border-end-0 h-100">
                  <div className="d-flex ps-5">
                    <h2 className=" ff_inter fw-medium fs_3xl text_semidark border_gray px-3 py-3 rounded-2 me_37">
                      <img className="me-3" src={bed_Icon} alt="bed Icon" /> 120
                    </h2>
                    <h2 className=" ff_inter fw-medium fs_3xl text_semidark border_gray px-3 py-3 rounded-2 me_37">
                      <img className="me-3" src={men_images} alt="men images" />
                      25
                    </h2>
                    <h2 className=" ff_inter fw-medium fs_3xl text_semidark border_gray px-3 py-3 rounded-2">
                      <img className="me-3" src={checkep} alt=" Icon" /> 25
                    </h2>
                  </div>
                  <ul className="ps-5">
                    <li className=" ff_inter fw-medium fs_2xl text_semidark mt-3">
                      <img className="pe-3" src={clock_icon} alt="clock_icon" />
                      10:00 AM - 2:00 PM
                    </li>
                    <li className=" ff_inter fw-medium fs_2xl text_semidark mt-3">
                      <img className="pe-3" src={Hospitals2} alt="icon" />
                      34621341238
                    </li>
                    <li className=" ff_inter fw-medium fs_2xl text_semidark mt-3  d-flex align-items-center">
                      <img className="pe-3" src={ven_Icon} alt="ven_Icon" />
                      34621341238
                    </li>
                    <li className=" ff_inter fw-medium fs_2xl text_semidark mt-3  d-flex align-items-center">
                      <img className="pe-3" src={PhoneIcon2} alt="PhoneIcon2" />
                      34621341238
                    </li>
                    <li className=" ff_inter fw-medium fs_2xl text_semidark mt-3  d-flex align-items-center">
                      <img className="pe-3" src={email_Box} alt="email_Box" />
                      hello@medsev.com
                    </li>
                    <li className=" ff_inter fw-medium fs_2xl text_semidark mt-3 d-flex align-items-center">
                      <img className="pe-3" src={email_Box} alt="email_Box" />
                      4th Floor, 408 No Chamber, 4th Floor, 408 No Chamber
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-5 ps-0">
                <h2 className=" ff_inter fw-bold fs_lg text-center bg_primry text-white py-3 mb-0">
                  Enquiry or Book Hospital
                </h2>
                <div className="bg-white pb-3">
                  <div className="text-center py-2">
                    <img src={fornImages} alt="fornImages" />
                  </div>
                  <div className="max_w_220 mx-auto">
                    <form>
                      <label
                        htmlFor="fullName"
                        className=" ff_inter fw-light fs_sm text_gray"
                      >
                        Full Name
                      </label>{" "}
                      <br />
                      <input
                        type="text"
                        id="fullName"
                        className="border_light rounded-1 w-100"
                      />{" "}
                      <br />
                      <label
                        htmlFor="fullName"
                        className=" ff_inter fw-light fs_sm text_gray"
                      >
                        Mobile Number
                      </label>{" "}
                      <br />
                      <input
                        type="text"
                        id="Mobile Number"
                        className="border_light rounded-1 w-100"
                      />
                      <button className="ff_inter fw-bold fs_lg text-white bg_tertiary py-2 px-1 rounded-2 border_green w-100 mt-3">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <div className=" border_lightGreen pb-3">
            <a
              className="ff_inter fw-bold fs_xl text_darkgray mx-4 greenUnderline"
              href="#"
            >
              About Us
            </a>
            <a
              className="ff_inter fw-fw-normal fs_xl text_darkgray mx-4"
              href="#"
            >
              Reviews
            </a>
          </div>
          <div className="about_section rounded-3 mt-3">
            <h2 className="ff_inter fw-bold fs_5xl text_dark">
              About Kolmet Hospital
            </h2>
            <p className="ff_inter fw-normal fs_5xl  text-dark lh_43">
              Kolmet Hospital is one of the leading hospital in Central Delhi.
              The best healthcare professionals provide Comprehensive
              healthcare. It is located at Karol Bagh. It provides advanced
              levels of care in over different specialties including Gynecology
              and Obstetrics, Gastroenterology, General Medicine, Ophthalmology,
              Endocrinology, Physiotherapy, Anesthesiology.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className=" container py-5">
          <h2 className="ff_inter fw-semibold fs_7xl text_semidark text-center">
            {" "}
            <img className="pe-4" src={map_icon} alt="map Icon" /> Hospital
            Location{" "}
          </h2>
          {/* <img className="w-100 pt-4" src={map} alt="map" /> */}

          <iframe
            className="mt-4"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224567.7202309552!2d76.82493609391429!3d28.423160293047264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1712554223891!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <div className="row">
            <div className="col-6">
              <div className="border_gray rounded-4 p-4">
                <h2 className=" ff_inter fw-bold fs_5xl text_semidark text-center">
                  Specialities In Kolmet Hospital Central Delhi
                </h2>
                <div className="row">
                  <div className="col-4 pt-4">
                    <button className=" ff_inter fw-bold fs_sm text-white rounded-pill px-2 py-2 bg_tertiary2 border-0 w-100">
                      Physical examinations
                    </button>
                  </div>
                  <div className="col-4 pt-4">
                    <button className=" ff_inter fw-bold fs_sm text-white rounded-pill px-2 py-2 bg_tertiary2 border-0 w-100">
                      Physical examinations
                    </button>
                  </div>
                  <div className="col-4 pt-4">
                    <button className=" ff_inter fw-bold fs_sm text-white rounded-pill px-2 py-2 bg_tertiary2 border-0 w-100">
                      Physical examinations
                    </button>
                  </div>
                  <div className="col-4 pt-4">
                    <button className=" ff_inter fw-bold fs_sm text-white rounded-pill px-2 py-2 bg_tertiary2 border-0 w-100">
                      Physical examinations
                    </button>
                  </div>
                  <div className="col-4 pt-4">
                    <button className=" ff_inter fw-bold fs_sm text-white rounded-pill px-2 py-2 bg_tertiary2 border-0 w-100">
                      Physical examinations
                    </button>
                  </div>
                  <div className="col-4 pt-4">
                    <button className=" ff_inter fw-bold fs_sm text-white rounded-pill px-2 py-2 bg_tertiary2 border-0 w-100">
                      Physical examinations
                    </button>
                  </div>
                  <div className="col-4 pt-4">
                    <button className=" ff_inter fw-bold fs_sm text-white rounded-pill px-2 py-2 bg_tertiary2 border-0 w-100">
                      Physical examinations
                    </button>
                  </div>
                  <div className="col-4 pt-4">
                    <button className=" ff_inter fw-bold fs_sm text-white rounded-pill px-2 py-2 bg_tertiary2 border-0 w-100">
                      Physical examinations
                    </button>
                  </div>
                  <div className="col-4 pt-4">
                    <button className=" ff_inter fw-bold fs_sm text-white rounded-pill px-2 py-2 bg_tertiary2 border-0 w-100">
                      Physical examinations
                    </button>
                  </div>
                  <div className="col-4 pt-4">
                    <button className=" ff_inter fw-bold fs_sm text-white rounded-pill px-2 py-2 bg_tertiary2 border-0 w-100">
                      Physical examinations
                    </button>
                  </div>
                  <div className="col-4 pt-4">
                    <button className=" ff_inter fw-bold fs_sm text-white rounded-pill px-2 py-2 bg_tertiary2 border-0 w-100">
                      Physical examinations
                    </button>
                  </div>
                  <div className="col-4 pt-4">
                    <button className=" ff_inter fw-bold fs_sm text-white rounded-pill px-2 py-2 bg_tertiary2 border-0 w-100">
                      Physical examinations
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="border_gray rounded-4 p-4">
                <h2 className=" ff_inter fw-bold fs_5xl text_semidark text-center">
                  Services Offered
                </h2>
                <div className="row">
                  <div className="col-4 pt-4">
                    <button className=" ff_inter fw-bold fs_sm text-white rounded-pill px-2 py-2 bg_tertiary2 border-0 w-100">
                      Physical examinations
                    </button>
                  </div>
                  <div className="col-4 pt-4">
                    <button className=" ff_inter fw-bold fs_sm text-white rounded-pill px-2 py-2 bg_tertiary2 border-0 w-100">
                      Physical examinations
                    </button>
                  </div>
                  <div className="col-4 pt-4">
                    <button className=" ff_inter fw-bold fs_sm text-white rounded-pill px-2 py-2 bg_tertiary2 border-0 w-100">
                      Physical examinations
                    </button>
                  </div>
                  <div className="col-4 pt-4">
                    <button className=" ff_inter fw-bold fs_sm text-white rounded-pill px-2 py-2 bg_tertiary2 border-0 w-100">
                      Physical examinations
                    </button>
                  </div>
                  <div className="col-4 pt-4">
                    <button className=" ff_inter fw-bold fs_sm text-white rounded-pill px-2 py-2 bg_tertiary2 border-0 w-100">
                      Physical examinations
                    </button>
                  </div>
                  <div className="col-4 pt-4">
                    <button className=" ff_inter fw-bold fs_sm text-white rounded-pill px-2 py-2 bg_tertiary2 border-0 w-100">
                      Physical examinations
                    </button>
                  </div>
                  <div className="col-4 pt-4">
                    <button className=" ff_inter fw-bold fs_sm text-white rounded-pill px-2 py-2 bg_tertiary2 border-0 w-100">
                      Physical examinations
                    </button>
                  </div>
                  <div className="col-4 pt-4">
                    <button className=" ff_inter fw-bold fs_sm text-white rounded-pill px-2 py-2 bg_tertiary2 border-0 w-100">
                      Physical examinations
                    </button>
                  </div>
                  <div className="col-4 pt-4">
                    <button className=" ff_inter fw-bold fs_sm text-white rounded-pill px-2 py-2 bg_tertiary2 border-0 w-100">
                      Physical examinations
                    </button>
                  </div>
                  <div className="col-4 pt-4">
                    <button className=" ff_inter fw-bold fs_sm text-white rounded-pill px-2 py-2 bg_tertiary2 border-0 w-100">
                      Physical examinations
                    </button>
                  </div>
                  <div className="col-4 pt-4">
                    <button className=" ff_inter fw-bold fs_sm text-white rounded-pill px-2 py-2 bg_tertiary2 border-0 w-100">
                      Physical examinations
                    </button>
                  </div>
                  <div className="col-4 pt-4">
                    <button className=" ff_inter fw-bold fs_sm text-white rounded-pill px-2 py-2 bg_tertiary2 border-0 w-100">
                      Physical examinations
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <h2 className="ff_inter fw-semibold fs_8xl text_primaryLight text-center">
            <span className="text_semidark">Meet Our</span> Experienced Doctors
          </h2>
          <div className="row pt-4">
            <div className="col-3 text-center">
              <img src={drImages} alt="drImages" />
              <h2 className=" ff_inter fw-semibold fs_6xl text_semidark pt-2">
                Dr. Vinay Kumar
              </h2>
              <p className="ff_kiteOne fw-normal fs_lg text_darkLight">
                M.D. D.M. Cardiology
              </p>
            </div>
            <div className="col-3 text-center">
              <img src={drImages} alt="drImages" />
              <h2 className=" ff_inter fw-semibold fs_6xl text_semidark pt-2">
                Dr. Vinay Kumar
              </h2>
              <p className="ff_kiteOne fw-normal fs_lg text_darkLight">
                M.D. D.M. Cardiology
              </p>
            </div>
            <div className="col-3 text-center">
              <img src={drImages} alt="drImages" />
              <h2 className=" ff_inter fw-semibold fs_6xl text_semidark pt-2">
                Dr. Vinay Kumar
              </h2>
              <p className="ff_kiteOne fw-normal fs_lg text_darkLight">
                M.D. D.M. Cardiology
              </p>
            </div>
            <div className="col-3 text-center">
              <img src={drImages} alt="drImages" />
              <h2 className=" ff_inter fw-semibold fs_6xl text_semidark pt-2">
                Dr. Vinay Kumar
              </h2>
              <p className="ff_kiteOne fw-normal fs_lg text_darkLight">
                M.D. D.M. Cardiology
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-6">
              <img src={Lab} alt="lab" />
            </div>
            <div className="col-6">
              <h2 className="ff_inter fw-bold fs_8xl text_semidark text-center">
                FAQ
              </h2>
              <Accordion>
                <Accordion.Item
                  eventKey="0"
                  className="rounded-0 ff_Heebo fw-normal fs_3xl clr_darkLight"
                >
                  <Accordion.Header>
                    <span className="dot"></span> What is the emergency number
                    of hospital ambulance.
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptate, porro. Tenetur laudantium harum ea sunt velit,
                    perspiciatis delectus fugiat assumenda unde omnis illo quo
                    consequuntur dolor sint ratione soluta sequi.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="1"
                  className="rounded-0 ff_Heebo fw-normal fs_3xl clr_darkLight mt-3"
                >
                  <Accordion.Header>
                    <span className="dot"></span> What is the emergency number
                    of hospital ambulance.
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptate, porro. Tenetur laudantium harum ea sunt velit,
                    perspiciatis delectus fugiat assumenda unde omnis illo quo
                    consequuntur dolor sint ratione soluta sequi.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="2"
                  className="rounded-0 ff_Heebo fw-normal fs_3xl clr_darkLight mt-3"
                >
                  <Accordion.Header>
                    <span className="dot"></span> What is the emergency number
                    of hospital ambulance.
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptate, porro. Tenetur laudantium harum ea sunt velit,
                    perspiciatis delectus fugiat assumenda unde omnis illo quo
                    consequuntur dolor sint ratione soluta sequi.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="3"
                  className="rounded-0 ff_Heebo fw-normal fs_3xl clr_darkLight mt-3"
                >
                  <Accordion.Header>
                    <span className="dot"></span> What is the emergency number
                    of hospital ambulance.
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptate, porro. Tenetur laudantium harum ea sunt velit,
                    perspiciatis delectus fugiat assumenda unde omnis illo quo
                    consequuntur dolor sint ratione soluta sequi.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="4"
                  className="rounded-0 ff_Heebo fw-normal fs_3xl clr_darkLight mt-3"
                >
                  <Accordion.Header>
                    <span className="dot"></span> What is the emergency number
                    of hospital ambulance.
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptate, porro. Tenetur laudantium harum ea sunt velit,
                    perspiciatis delectus fugiat assumenda unde omnis illo quo
                    consequuntur dolor sint ratione soluta sequi.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <h2 className="ff_inter fw-semibold fs_8xl text_primaryLight text-center">
            Insurance <span className="text_semidark"> TPA's</span> That We
            Accept
          </h2>
          <div className="border_gray mt-4 rounded-5 p-5">
            <div className=" d-flex align-items-center justify-content-between">
              <img src={sbigeneral} alt="sbi-general" />
              <img src={acko} alt="acko" />
              <img src={ericson} alt="ericson" />
              <img src={healthindia} alt="healthindia" />
              <img src={medSave} alt="medSave" />
            </div>
            <div className=" d-flex align-items-center justify-content-between pt-4">
              <img src={mdIndia} alt="mdIndia" />
              <img src={sbigeneral} alt="sbigeneral" />
              <img src={mediAssist} alt="mediAssist" />
              <img src={icic} alt="icic" />
              <img src={sbigeneral} alt="sbi-general" />
            </div>
            <div className=" d-flex align-items-center justify-content-between pt-4">
              <img src={sbigeneral} alt="sbi-general" />
              <img src={icic} alt="icic" />
              <img src={sbigeneral} alt="sbi-general" />
              <img src={bajaj} alt="bajaj" />
              <img src={ericson} alt="ericson" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePages;
