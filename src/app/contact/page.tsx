"use client";
import Link from "next/link";
import {
  faWhatsapp,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F6F1E9] text-[#3B2F2F] px-8 md:px-20 py-10">

      {/* HEADER */}
      <h2 className="text-sm tracking-widest mb-3 text-[#7A5D3A]">
        CONTACT ELURÉ
      </h2>

      {/* MAIN CARD (IMAGE LEFT, INFO RIGHT) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white rounded-xl shadow-[7px_15px_15px_2px_rgba(0,0,0,0.3)]  p-10">

        {/* LEFT IMAGE */}
        <div className="w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-md">
          <video
            src="/Images/mv.mp4" // Replace with your own
            className="object-contain w-full h-full"
             autoPlay
            loop
            muted
            playsInline

          />
        </div>

        {/* RIGHT DETAILS */}
        <div>
          <h1 className="text-4xl font-bold leading-tight font-serif">
            We're Here to Help You  
            <br />
            <span className="text-[#8C4A2F]">Connect With Eluré</span>
          </h1>

          <p className="text-[#5A4A42] mt-5 text-lg leading-relaxed">
            Whether you have a question, need support, or simply want to explore more,
            our team at Eluré is here to assist you with clarity and care.
          </p>

          <div className="mt-8 space-y-4">

            {/* WHATSAPP */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              className="flex items-center gap-4 p-3 bg-[#F3E7D8] rounded-lg hover:bg-[#E8D8C4] transition"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-green-600 text-2xl" />
              <span className="text-lg">WhatsApp Support</span>
            </a>

            {/* CALL */}
            <a
              href="tel:+1234567890"
              className="flex items-center gap-4 p-3 bg-[#F3E7D8] rounded-lg hover:bg-[#E8D8C4] transition"
            >
              <FontAwesomeIcon icon={faPhone} className="text-[#8C4A2F] text-2xl" />
              <span className="text-lg">Call Us</span>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:contact@elure.com"
              className="flex items-center gap-4 p-3 bg-[#F3E7D8] rounded-lg hover:bg-[#E8D8C4] transition"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-[#BF7D4A] text-2xl" />
              <span className="text-lg">Email: contact@elure.com</span>
            </a>

            {/* FACEBOOK */}
            <a
              href="https://facebook.com"
              target="_blank"
              className="flex items-center gap-4 p-3 bg-[#F3E7D8] rounded-lg hover:bg-[#E8D8C4] transition"
            >
              <FontAwesomeIcon icon={faFacebookF} className="text-blue-700 text-2xl" />
              <span className="text-lg">Facebook Page</span>
            </a>

          </div>

          {/* CTA BUTTON */}
          
          <Link
            href="/Home"
            className="inline-block mt-8 px-6 py-3 bg-[#8C4A2F] text-white rounded-md hover:bg-[#6F3A25] transition "
          >
            Explore Products
          </Link>
        </div>

      </div>
    </div>
  );
}
