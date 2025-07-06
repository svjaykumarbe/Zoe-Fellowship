import React from "react";
import "./ContactUs.css";
import danSuniImage from "../pages/Images/DaniFamily_New.png"; // Adjust path if needed

const pastors = [
  {
    name: "Pastor Daniel Shetty",
    role: "Senior Pastor",
    email: "daniel@zoeim.com",
    socialLinks: {
      facebook: "https://www.facebook.com/sunitha.daniel.1",
      twitter: "https://twitter.com/zoe",
      instagram: "https://instagram.com/daniel",
      youtube: "https://www.youtube.com/", 
    },
  },
  {
    name: "Sunitha Daniel",
    role: "Associate Director",
    email: "sunitha@zoeim.com",
    socialLinks: {
      facebook: "https://www.facebook.com/sunitha.daniel.1",
      twitter: "https://twitter.com/zoe",
      instagram: "https://instagram.com/suni_b29",
      youtube: "https://www.youtube.com/", // add if you want
    },
  },
];

const ContactUs = () => {
  return (
    <div className="bg-white text-gray-800 px-4 py-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-8">
        {/* Hero Image */}
        <div className="relative">
          <img
            src={danSuniImage}
            alt="Bro. Daniel & Sis. Sunitha"
            className="hero-image"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
              Our Pastor Family
            </h1>
          </div>
        </div>

        {/* Bios */}
        <div className="bg-gray-100 rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Bro. Daniel Shetty</h2>
          <p className="mb-2">
            Bro. Daniel Shetty, originally from Karnataka, India, and now based
            in Toronto, Canada, has been serving in ministry for over 20 years
            with a powerful anointing in deep revelation of the Word,
            prophetic insight, and kingdom expansion.
          </p>
          <p className="mb-2">
            He carries a unique gift of spiritual revelation, unveiling deep
            mysteries from Scripture that bring transformation, renewal, and
            revival. Through his teachings and prophetic insights, many have
            experienced spiritual breakthroughs, healing, and restoration.
          </p>
          <p>
            Bro. Daniel is an integral part of Zoe International Ministries in
            Canada, where he continues to impact lives through the word and
            empowering people to walk in their God-given calling.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Sis. Sunitha Shetty</h2>
          <p className="mb-2">
            Standing alongside him in ministry is his wife, Sunitha Shetty, a
            prayer warrior, encourager, and prophetic intercessor. She leads
            the Zoe Women’s Fellowship, a movement that has been empowering and
            strengthening women to walk in faith and authority.
          </p>
          <p className="mb-2">
            She carries a strong prophetic anointing, moving in discernment and
            intercession, bringing divine revelation that has guided many in
            their spiritual journeys. Known for her deep connection with the
            Holy Spirit, she ministers with wisdom and sensitivity, speaking
            life into people’s situations and witnessing miraculous answers to
            prayers.
          </p>
          <p>
            Sis. Sunitha is also a qualified Dental Professional and works in
            Research and Clinical field. They are blessed with two wonderful
            children, Joann and Caleb, who are growing under their spiritual
            covering, being nurtured in the ways of the Lord.
          </p>
        </div>

        {/* Contact info in requested format */}
        {pastors.map(({ name, email, socialLinks }) => (
          <div
            key={email}
            className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6 text-gray-800 space-y-4"
          >
            <p>
              You may write to <strong>{name}</strong> for your prayer needs:{" "}
              <a
                href={`mailto:${email}`}
                className="text-blue-600 hover:underline"
              >
                {email}
              </a>
            </p>

            <div className="space-y-1">
              {socialLinks.instagram && (
                <p>
                  <strong>Instagram:</strong>{" "}
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {socialLinks.instagram}
                  </a>
                </p>
              )}
              {socialLinks.youtube && (
                <p>
                  <strong>YouTube:</strong>{" "}
                  <a
                    href={socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {socialLinks.youtube}
                  </a>
                </p>
              )}
              {socialLinks.facebook && (
                <p>
                  <strong>Facebook:</strong>{" "}
                  <a
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {socialLinks.facebook}
                  </a>
                </p>
              )}
              {socialLinks.twitter && (
                <p>
                  <strong>Twitter:</strong>{" "}
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {socialLinks.twitter}
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;