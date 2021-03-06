import React from "react";
import Form from "./Form.jsx";
import Title from "./Title.jsx";
import OfficeDetails from "./OfficeDetails.jsx"
import Contact_logo from "../../img/blue-logo.png";
import ContactDetails from "./ContactDetails.jsx";

import './contact.scss';

const Contact = () => {
    
  return (
    <section className="contact_container" id="contact">
      <div className="contact_wrapper">
        <div className="contact_form">
          <Title img={Contact_logo} text="SEND US A MESSAGE" />
          <Form />
        </div>

        <div className="contact_details_area">
          <Title img={Contact_logo} text="CONTACT US" />
          <h1 className="sub-title">CALL / EMAIL US</h1>
          <ContactDetails
            name="MATT HOFFAR"
            phoneNumber="604 616 1514"
            email="MATT@BRICKHOUSE.VENTURES"
          />
          <ContactDetails
            name="SPENER SMYL"
            phoneNumber="604 785 4229"
            email="SPENCER@BRICKHOUSE.VENTURES"
          />
          <ContactDetails
            name="MEXICO OFFICE"
            phoneNumber="+52 55 9627 0205"
            email="MEXICO@BRICKHOUSE.VENTURES"
          />
        </div>

        <div className="contact_address">
          <h1 className="sub-title">VISIT US</h1>
          <OfficeDetails officeName="VANCOUVER OFFICE" officeAddress="303 570 Granvillestreet vancouver B.C.,V6C 3P1" />
          <OfficeDetails officeName="TRONTO OFFICE" officeAddress="393 University Avenue Suite 2000, Toronto ON, M5G 1E6" />
          <OfficeDetails officeName="MEXICO OFFICE" officeAddress="Sierra Santa Rosa 47, Colonia Reforma Social, CDMX 11650, Mexico City" />
        </div>
      </div>

    </section>
  );
};
export default Contact;
