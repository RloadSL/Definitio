import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputFormikApp from "../Forms/InputFormikApp";
import { FormattedMessage } from "react-intl";
import style from './contact-form.module.scss'

const validationSchema = Yup.object().shape({
  fullname: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const ContactForm = () => (
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
        <InputFormikApp
          labelID='Name and surname'
          type='text'
          name='fullname'
        />
        <InputFormikApp
          labelID='Company'
          type='text'
          name='company'
        />
        <InputFormikApp
          labelID='Phone'
          type='text'
          name='phone'
        />
        <InputFormikApp
          labelID='Email'
          type='email'
          name='email'
        />
        <button type="submit" disabled={isSubmitting} className={style.button}>
          <FormattedMessage id="btn.label.send"/>
        </button>
      </Form>
    )}
  </Formik>
);

export default ContactForm;