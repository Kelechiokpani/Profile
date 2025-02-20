import { useState } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import {useFormik} from "formik";


const SignUpFormSchema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(2, "subject is required"),
  message: z.string().min(2, "message is required"),
}) ;

const validate = (values) => {
  const result = SignUpFormSchema.safeParse(values);
  if (!result.success) {
    return result.error.flatten().fieldErrors; // Returns errors in Formik format
  }
  return {}; // No errors
};


const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const serviceID="service_ri1ewvh"
  const templateID = "template_gfh93nf"
  const user_id = "EDbGrnxazqr9iUHz8"

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      subject:"",
      message:"",

    },
    validate,
    onSubmit: async (values) => {
      setLoading(true);
      setMessage("");
      setError("");
      const templateParams = {
        fullName:values.fullName,
        email:values.email,
        subject:values.subject,
        message:values.message,
      };
      try {
        const response = await emailjs.send(serviceID, templateID, templateParams, user_id);
        if (response.status === 200) {
          setMessage("Your message has been sent successfully!");
          formik.resetForm();
          setTimeout(() => setMessage(""), 2000);
        } else {
          setError("Failed to send message. Please try again.");
          setTimeout(() => setError(""), 2000);
        }
      } catch (error) {
        console.log(error)
        setError("Something went wrong. Please try again.");
        setTimeout(() => setError(""), 2000);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <label className="affiliate-form__label">Full Name</label>
          <input
              type="text"
              name="fullName"
              placeholder="First Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
              className="h-12 rounded-lg bg-lightBrown px-2"

          />
          {formik.errors.fullName && formik.touched.fullName && (
              <p className="text-red-500 text-sm">{String(formik.errors.fullName)}</p>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <label className="affiliate-form__label">Email</label>
          <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="h-12 rounded-lg bg-lightBrown px-2"

          />
          {formik.errors.email && formik.touched.email && (
              <p className="text-red-500 text-sm">{String(formik.errors.email)}</p>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <label className="affiliate-form__label">Subject</label>
          <input
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
              className="h-12 rounded-lg bg-lightBrown px-2"

          />
          {formik.errors.subject && formik.touched.subject && (
              <p className="text-red-500 text-sm">{String(formik.errors.subject)}</p>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <label className="affiliate-form__label">Message</label>
          <textarea
              rows="9"
              cols="50"
              required
              className=" rounded-lg bg-lightBrown p-2"
              type="text"
              name="message"
              placeholder="Message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
          />
          {formik.errors.message && formik.touched.message && (
              <p className="text-red-500 text-sm">{String(formik.errors.message)}</p>
          )}
        </div>

        <button
            // type="submit"
            className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
            type="submit"
            onClick={formik.handleSubmit}
            // className="w-full sm:w-auto text-base md:text-sm flex items-center justify-center"
            disabled={loading}
        >
          {loading ? "sending please wait....." : "Send Message"}
        </button>
      </div>

      {message && <p className="text-green-600 text-sm mt-2 font-bold">{message}</p>}
      {error && <p className="text-red-500 text-sm mt-2 font-bold">{error}</p>}
    </div>
  );
};

export default ContactForm;
