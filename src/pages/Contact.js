import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './ContactUs.css';
import danSuniImage from '../pages/Images/Dan_Suni_Intro.png'; // Adjust path

const pastors = [
  {
    name: 'Pastor Daniel Shetty',
    role: 'Senior Pastor',
    email: 'daniel@zoeim.com',
    phone: '+1 (647) 888-3776',
    image: './Daniel.png',
    socialLinks: {
      facebook: 'https://www.facebook.com/sunitha.daniel.1',
      twitter: 'https://twitter.com/abc',
      instagram: 'https://instagram.com/abc',
    },
  },
  {
    name: 'Sunitha Daniel',
    role: 'Associate Director',
    email: 'sunitha@zoeim.com',
    phone: '+1 (416) 662-9270',
    image: './Sunitha.png',
    socialLinks: {
      facebook: 'https://www.facebook.com/sunitha.daniel.1',
      twitter: 'https://twitter.com/abc',
      instagram: 'https://instagram.com/abc',
    },
  },
];

const ContactUs = () => {
  return (
    <div className="contact-us-container bg-[#fdfaf6] px-6 py-10">
      {/* Pastor Intro Section */}
      <div className="max-w-6xl mx-auto mb-16">
        {/* <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Bro. Daniel &amp; Sis. Sunitha Shetty
        </h2> */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row mb-12">
          <div className="md:w-1/2">
            <img
              src={danSuniImage}
              alt="Bro. Daniel & Sis. Sunitha"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Contact Cards Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
          Contact Our Pastors
        </h2>

        {/* Custom Two-Column Layout */}
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          {/* Pastor Daniel Shetty - Left */}
          <div className="w-full sm:w-1/2 bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-gray-900">{pastors[0].name}</h3>
            <p className="text-lg text-gray-600 mt-1">{pastors[0].role}</p>

            <div className="mt-4 space-y-2 text-sm text-gray-700">
              <div>
                <strong>Email:</strong>{' '}
                <a
                  href={`mailto:${pastors[0].email}`}
                  className="text-blue-500 hover:underline"
                >
                  {pastors[0].email}
                </a>
              </div>
              <div>
                <strong>Phone:</strong>{' '}
                <a
                  href={`tel:${pastors[0].phone}`}
                  className="text-blue-500 hover:underline"
                >
                  {pastors[0].phone}
                </a>
              </div>
            </div>

            <div className="flex space-x-6 mt-4">
              <a
                href={pastors[0].socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href={pastors[0].socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href={pastors[0].socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Sunitha Daniel - Right */}
          <div className="w-full sm:w-1/2 bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-gray-900">{pastors[1].name}</h3>
            <p className="text-lg text-gray-600 mt-1">{pastors[1].role}</p>

            <div className="mt-4 space-y-2 text-sm text-gray-700">
              <div>
                <strong>Email:</strong>{' '}
                <a
                  href={`mailto:${pastors[1].email}`}
                  className="text-blue-500 hover:underline"
                >
                  {pastors[1].email}
                </a>
              </div>
              <div>
                <strong>Phone:</strong>{' '}
                <a
                  href={`tel:${pastors[1].phone}`}
                  className="text-blue-500 hover:underline"
                >
                  {pastors[1].phone}
                </a>
              </div>
            </div>

            <div className="flex space-x-6 mt-4">
              <a
                href={pastors[1].socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href={pastors[1].socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href={pastors[1].socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;