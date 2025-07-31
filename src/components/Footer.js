"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
  FaHeart,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer
      aria-label="Site Footer"
      className="bg-slate-50 text-gunmetal py-16"
    >
      <div className="container sm:text-sm md:text-md text-xs mx-auto px-2 lg:px-1">
        {/* Intro */}
        <div className="flex flex-col gap-4 md:flex-row md:justify-between items-center text-center mb-8 lg:px-32">
          {/* Left Text Section */}
          <div className="md:flex-1">
            <p className="text-[13px] lg:leading-6 text-justify">
              SIPGo, your ultimate investment companion. We provide a powerful
              and easy-to-use investment calculator that goes beyond just
              numbers. Our platform provides comprehensive details you need to
              make informed decisions. SIPGo is your one-stop solution for all.
            </p>
          </div>

          {/* Logo Section */}
          <div className="md:flex-1 flex flex-col items-center">
            <Link href="/" className="flex justify-center">
              <Image
                src="/images/logo.webp"
                width={96}
                height={96}
                alt="Logo of the SIPGo Website"
                className="md:h-24 sm:h-16 h-12 w-auto"
                priority={false}
              />
            </Link>
          </div>

          {/* Links Section */}
          <div className="md:flex-1 grid grid-cols-2 gap-4">
            {/* Company */}
            <div>
              <h2 className="text-sm font-semibold mb-4">Company</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="hover:text-indigo-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-indigo-600">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/calc" className="hover:text-indigo-600">
                    Calculator Hub
                  </Link>
                </li>
                <li>
                  <a
                    href="https://zippler-pi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-600"
                  >
                    Time Tools
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="text-sm font-semibold mb-4">Legal</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-indigo-600"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-indigo-600">
                    Terms & Uses Policy
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="hover:text-indigo-600">
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        {/* Social Media Links */}
        <ul className="flex justify-center space-x-6 text-xl text-gray-700">
          <li>
            <a
              href="https://x.com/SipGo992"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-blue-500"
            >
              <FaXTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/sipg0/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://m.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-700"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@justsipgo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-red-600"
            >
              <FaYoutube />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/justsipgo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-600"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>

      {/* Copyright */}
      <div className="py-6 bg-gray-100 mt-8">
        <div className="container mx-auto px-6 lg:px-32">
          <div className="text-center text-[13px]">
            © 2025 SIPGo. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
