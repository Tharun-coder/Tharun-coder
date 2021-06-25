import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required().max(20),
  mobile: yup.string().required().min(10).max(12),
  email: yup.string().email().required(),
  subject: yup.string().required().max(20),
  description: yup.string().required().max(200),
});

function Contact(props) {
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_WwBha8C2x3rNeua9L5Sda";

  const onSubmit = (data, reset) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        mobile: data.mobile,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    reset.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Form send successfully! I will contact you ASAP");
      })
      .catch((error) => {
        console.log(`Something went wrong ${error}`);
      });
  };

  return (
    <div id="contact" className="contacts">
      <div className="text-center">
        <h1>Contact Me</h1>
        <p>Get in touch.Fill up the form!!!</p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div>
                <input
                  id="name"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  type="text"
                  autoComplete="off"
                  {...register("name")}
                />
                <span className="error-message">
                  {errors.name && errors.name.message}
                </span>
              </div>
              <div>
                <input
                  id="mobile"
                  className="form-control"
                  placeholder="Mobile No."
                  name="mobile"
                  type="text"
                  autoComplete="off"
                  {...register("mobile")}
                />
                <span className="error-message">
                  {errors.mobile && errors.mobile.message}
                </span>
              </div>
              <div>
                <input
                  id="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  type="email"
                  autoComplete="off"
                  {...register("email")}
                />
                <span className="error-message">
                  {errors.email && errors.email.message}
                </span>
              </div>
              <div>
                <input
                  id="subject"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  type="text"
                  autoComplete="off"
                  {...register("subject")}
                />
                <span className="error-message">
                  {errors.subject && errors.subject.message}
                </span>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div>
                <textarea
                  id="description"
                  type="text"
                  name="description"
                  className="form-control"
                  placeholder="Description"
                  {...register("description")}
                ></textarea>
                <span className="error-message">
                  {errors.description && errors.description.message}
                </span>
              </div>
              <button className="btn-main-submit contact-btn" type="submit">
                Contact Me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
