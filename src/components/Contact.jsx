import React, { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  return (
    <section className="c-space mt-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        {/* <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" /> */}

        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing
            platform, or bring a unique project to life, Sudama is here to help.
          </p>

          <form className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                // value={form.name}
                // onChange={handleChange}
                required
                className="field-input text-neutral-400"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                // value={form.email}
                // onChange={handleChange}
                required
                className="field-input text-neutral-400"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                // value={form.message}
                // onChange={handleChange}
                required
                rows={5}
                className="field-input text-neutral-400"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}

              {/* <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" /> */}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
