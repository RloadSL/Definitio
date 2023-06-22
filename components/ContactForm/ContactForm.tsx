import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputFormikApp from "../Forms/RLDInputFormik";
import { FormattedMessage } from "react-intl";
import style from "./contact-form.module.scss";
import RLDInputFormik from "../Forms/RLDInputFormik/RLDInputFormik";
import { HTTP } from "@/services/http";

/***
 * Sending data to the Definitio API
 */
const sendForm = async (body: any) => {
  try {
    await HTTP.post("/api/contactform", body, {
      "Content-Type": "application/json"
    });
    return true;
  } catch (error) {
    return false;
  }
};

/** Form field validation schema*/
const validationSchema = Yup.object().shape({
  fullname: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required")
});

interface ContactFormProps {}

/**
 * Component that integrates the contact form with Formik and Yup.The elements of the form are customized
 * @param param0
 * @returns
 */

const ContactForm = ({}: ContactFormProps) => {
  const [loading, setloading] = useState(false);

  return (
    <Formik
      initialValues={{ fullname: "", email: "", company: "", phone: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        try {
          setloading(true);
          sendForm(values).then((res) => {
            resetForm();
            setloading(false);
          });
        } catch (error) {
          setloading(false);
        }
      }}
    >
      {({ isSubmitting, errors }) => (
        <Form>
          <RLDInputFormik labelID="form.contact.label.nameSurname" type="text" name="fullname" />
          <RLDInputFormik labelID="form.contact.label.company" type="text" name="company" />
          <RLDInputFormik labelID="form.contact.label.phone" type="text" name="phone" />
          <RLDInputFormik labelID="form.contact.label.email" type="text" name="email" />
          <div className={style.bottom}>
            <button type="submit" disabled={isSubmitting} className={style.button}>
              <span>{loading ? "Sending data..." : <FormattedMessage id="btn.label.send" />}</span>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
