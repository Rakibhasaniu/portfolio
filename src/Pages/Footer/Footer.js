import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter,FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-gradient-to-bl from-teal-900 to-stone-900 text-base-content rounded ">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4">Connect with me</h2>
        <div className="mb-4 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/rakib-hasan-434935231/"
            className="text-2xl text-info hover:text-teal-700"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Rakibhasaniu"
            className="text-2xl text-info hover:text-teal-700"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/rakibhasan_12"
            className="text-2xl text-info hover:text-teal-700"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100010404703241"
            className="text-2xl text-info hover:text-teal-700"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://discord.com/channels/@me"
            className="text-2xl text-info hover:text-teal-700"
            aria-label="Discord"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord />
          </a>
        </div>
        <p className="text-lg">
          Feel free to reach out to me on any of these platforms.
        </p>
        <p className="mt-4 text-sm text-gray-300">
          &copy; 2024 - All rights reserved by Rakib Hasan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
