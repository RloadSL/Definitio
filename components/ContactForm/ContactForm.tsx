import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputFormikApp from "../Forms/RLDInputFormik";
import { FormattedMessage } from "react-intl";
import style from "./contact-form.module.scss";
import RLDInputFormik from "../Forms/RLDInputFormik/RLDInputFormik";

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

const ContactForm = ({}: ContactFormProps) => (
  <Formik
    initialValues={{ name: "", email: "" }}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <RLDInputFormik labelID="form.contact.label.nameSurname" type="text" name="fullname" />
        <RLDInputFormik labelID="form.contact.label.company" type="text" name="company" />
        <RLDInputFormik labelID="form.contact.label.phone" type="text" name="phone" />
        <RLDInputFormik labelID="form.contact.label.email" type="email" name="email" />
        <button type="submit" disabled={isSubmitting} className={style.button}>
          <span>
            <FormattedMessage id="btn.label.send" />
          </span>
        </button>
      </Form>
    )}
  </Formik>
);

export default ContactForm;
