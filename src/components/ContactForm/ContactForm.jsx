import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import s from './ContactForm.module.scss';

uuidv4();

const validationSchema = yup.object({
  name: yup.string().required("Enter contact's name"),
  number: yup
    .string()
    .length(10, 'Example: 0930939393')
    .required("Enter contact's phone"),
});

export default class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = { name: '', number: '' };
  render() {
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={({ name, number }, { resetForm, setSubmitting }) => {
          this.props.onSubmit({ name, number, id: uuidv4() });
          setSubmitting(false);
          resetForm();
        }}
      >
        <Form className={s.contactForm}>
          <label className={s.nameLabel}>
            Name:
            <Field type="text" name="name" className={s.contactFormInput} />
            <span className={s.errorMessage}>
              <ErrorMessage name="name" />
            </span>
          </label>
          <label className={s.numberLabel}>
            Number:
            <Field type="tel" name="number" className={s.contactFormInput} />
            <span className={s.errorMessage}>
              <ErrorMessage name="number" />
            </span>
          </label>

          <button type="submit" className={s.submitButton}>
            Add contact
          </button>
        </Form>
      </Formik>
    );
  }
}
