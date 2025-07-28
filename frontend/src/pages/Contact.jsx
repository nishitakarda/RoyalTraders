import React from "react";
import Title from "../components/Title";
import { assets } from '../assets/frontend_assets/assets';
import { MdLocationOn, MdEmail, MdAccessTime } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="px-4 sm:px-12 pt-24 border-t text-gray-800">
      {/* Title */}
      <div className="text-4xl font-bold text-center pt-8 border-t">
        <Title text1="CONTACT" text2="US" />
      </div>

      {/* Contact Info with Image */}
      <div className="my-16 flex flex-col md:flex-row items-center justify-center gap-10 mb-28">
        {/* Image */}
        <img
          className="w-full max-w-sm md:max-w-md rounded-xl shadow-md"
          src={assets.contact_img}
          alt="Contact"
        />

        {/* Info */}
        <div className="text-lg text-gray-700 flex flex-col items-start gap-8 max-w-lg">
          <div>
            <p className="font-semibold text-xl text-gray-800 flex items-center gap-2 mb-1">
              <MdLocationOn className="text-2xl text-red-500" />
              Our Store
            </p>
            <p className="pl-7">
              Shop No. 09, Jawahar Marg, Siyaganj<br />
              Indore, MP - 452007
            </p>
          </div>

          <div>
            <p className="flex items-center gap-2">
              <BsTelephoneFill className="text-blue-600" />
              <span className="font-medium">Phone:</span> 8109693372
            </p>
            <p className="flex items-center gap-2 mt-2">
              <MdEmail className="text-green-700" />
              <span className="font-medium">Email:</span> info@royaltraders.com
            </p>
            <p className="flex items-center gap-2 mt-2">
              <FaWhatsapp className="text-green-500" />
              <span className="font-medium">WhatsApp:</span>
              <a
                href="https://wa.me/918109693372"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                Chat with us
              </a>
            </p>
          </div>

          <div>
            <p className="font-semibold text-xl text-gray-800 flex items-center gap-2 mb-1">
              <MdAccessTime className="text-yellow-600" />
              Business Hours
            </p>
            <p className="pl-7">Monday - Saturday: 10:00 AM – 8:00 PM</p>
            <p className="pl-7">Sunday: Closed</p>
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <div className="mb-28">
        <p className="text-xl font-semibold mb-4 text-center text-gray-800">Find Us on Map</p>
        <div className="w-full h-[300px] md:h-[400px]">
          <iframe
            title="Store Location"
            src="https://www.google.com/maps?q=Jawahar+Marg+Siyaganj+Indore+MP&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
