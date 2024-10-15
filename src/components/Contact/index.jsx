import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const validate = () => {
    let valid = true;
    let newErrors = {};
    // Проверка имени
    if (!formData.name) {
      newErrors.name = "Name is required";
      valid = false;
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
      valid = false;
    }

    // Проверка email
    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }
    if (!formData.message) {
      newErrors.message = "Name is required";
      valid = false;
    } else if (formData.message.length < 4) {
      newErrors.message = "Message must be at least 4 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const successMessage = () =>
    toast.success("Message sent!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const errorMessages = () =>
    toast.error("Error!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  function handleSubmit() {
    const my_id = `-1002492646330`;
    const token = `7921027124:AAFIcB9XsCZA3DOtd_NwF7rcEsEUNV5Axyk`;
    const url_api = `https://api.telegram.org/bot${token}/sendMessage`;
    const newMessage = {
      chat_id: my_id,
      parse_model: "html",
      text: `Новый:
имя: ${formData.name}
адресс: ${formData.email}
сообщение: ${formData.message}
      `,
    };
    if (validate()) {
      axios.post(url_api, newMessage);
      successMessage();
    } else {
      errorMessages();
    }
    setFormData({ name: "", email: "", message: "" });
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="contact">
          <h1>
            Contact Us <span>☏</span>
          </h1>
          <p>
            If you have any proposals for cooperation, <br />I will be glad to
            consider them! You can write to me, <br /> and I will try to answer
            as soon as possible. You can also ask <br /> any questions - I am
            always open to discussion.
          </p>
          <div className="contact--form">
            <div className="contact--form__item">
              <h5>Full Name</h5>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name..."
                onChange={handleChange}
                value={formData.name}
              />
              {errors.name && (
                <span style={{ color: "red" }}>{errors.name}</span>
              )}
            </div>
            <div className="contact--form__item">
              <h5>Email Address</h5>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address..."
                onChange={handleChange}
                value={formData.email}
              />
              {errors.email && (
                <span style={{ color: "red" }}>{errors.email}</span>
              )}
            </div>
            <div className="contact--form__item">
              <h5>Message</h5>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="3"
                placeholder="Message..."
                onChange={handleChange}
                value={formData.message}
              ></textarea>
              <span style={{ color: "red" }}>{errors.message}</span>
            </div>
            <button onClick={() => handleSubmit()}>Submit</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
