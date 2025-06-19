import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container">
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>9957052223 | 8811072239</p>
        </div>

        <div className="flex gap-3">
          <div className="social-icon">
            <Link
              to="https://www.instagram.com/sudamasolutions_technologies?igsh=MTJrMXZqYWk3djRlZw%3D%3D&utm_source=qr"
              target="_blank"
            >
              <FaInstagram size={30} color="#f5f5f5" />
            </Link>
          </div>
        </div>

        <p className="text-white-500">sudamasolutionstechnologies@gmail.com</p>
      </footer>

      <p className="text-gray-600">&copy; 2025 Sudama Solutions Technologies</p>
    </div>
  );
};

export default Footer;
