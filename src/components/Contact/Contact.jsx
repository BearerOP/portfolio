import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../../firebase";
import "./Contact.css";
import { motion } from "framer-motion";
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const db = getFirestore(app);
    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        msg,
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    toast.success("Message sent successfully!", {
      duration: 2000,
      position: "bottom-left",
      style: {
        borderRadius: "10px",
        background: "#232323",
        color: "#eee",
      },
    });
    setName("");
    setEmail("");
    setMsg("");
  };

  return (
    <div className="contact-container" id="contact">
      <Toaster />
      <motion.h1
        className="contact-header"
        initial={{ opacity: 0.01, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get in touch.
      </motion.h1>
      <motion.p
        className="contact-subheader"
        initial={{ opacity: 0.01, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.8 }}
        viewport={{ once: true }}
      >
        Interested in working with me? Feel free to reach out, I&apos;ll respond
        shortly!
      </motion.p>
      <div className="contact-wrapper">
        <motion.div
          className="form"
          initial={{ opacity: 0.01, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit}>
            <div className="top-row">
              <div className="floating-label-group">
                <input
                  type="text"
                  name="name"
                  className="contact-name"
                  required
                  autoCapitalize="true"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <span className="floating-label">Name</span>
              </div>
              <div className="floating-label-group">
                <input
                  type="email"
                  name="email"
                  className="contact-email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="floating-label">Email</span>
              </div>
            </div>
            <textarea
              name="msg"
              placeholder="Your message for me"
              className="contact-msg"
              required
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>
            <button type="submit" className="contact-submit" disabled={loading}>
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
