import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './ContactUs.css';
import danSuniImage from '../pages/Images/DaniFamily.png'; // Adjust path

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
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row mb-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
              Contact Our Pastors
            </h2>
            <img
              src={danSuniImage}
              alt="Bro. Daniel & Sis. Sunitha"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Biographical Section */}
        <div className="bg-white rounded-2xl shadow-md p-8 text-gray-800 space-y-6 text-justify">
          <h3 className="text-2xl font-bold text-gray-900">Bro. Daniel Shetty</h3>
          <p>
            Bro. Daniel Shetty, originally from Karnataka, India, and now based in Toronto, Canada, has been serving in ministry for over 20 years with a powerful anointing in deep revelation of the Word, prophetic insight, and kingdom expansion. Since childhood, the Lord has used him to share profound truths with conviction, ministering to the needy and strengthening believers across nations.
          </p>
          <p>
            He carries a unique gift of spiritual revelation, unveiling deep mysteries from Scripture that bring transformation, renewal, and revival. Through his teachings and prophetic insights, many have experienced spiritual breakthroughs, healing, and restoration. The Lord has been using him mightily in churches, gatherings, and meetings to equip and edify the body of Christ.
          </p>
          <p>
            Bro. Daniel is an integral part of Zoe International Ministries in Canada, where he continues to impact lives through the word and empowering people to walk in their God-given calling.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10">Sis. Sunitha – A Prophetic Voice & Intercessor</h3>
          <p>
            Standing alongside him in ministry is his wife, Sunitha Shetty, a prayer warrior, encourager, and prophetic intercessor. She leads the Zoe Women’s Fellowship, a movement that has been empowering and strengthening women to walk in faith and authority.
          </p>
          <p>
            She carries a strong prophetic anointing, moving in discernment and intercession, bringing divine revelation that has guided many in their spiritual journeys. Known for her deep connection with the Holy Spirit, she ministers with wisdom and sensitivity, speaking life into people’s situations and witnessing miraculous answers to prayers.
          </p>
          <p>
            Sunitha’s ability to uplift, mentor, and encourage has impacted countless lives, making her a beacon of hope and transformation for women and families. She operates in prophetic prayer and intercession, breaking spiritual strongholds and ushering in God’s purposes for individuals, churches, and ministries.
          </p>
          <p>
            Sis. Sunitha is also a qualified Dental Professional and works in Research and Clinical field.
          </p>
          <p>
            They are blessed with two wonderful children, Joann and Caleb, who are growing under their spiritual covering, being nurtured in the ways of the Lord.
          </p>
        </div>
      </div>

      {/* Contact Cards Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          {/* Pastor Daniel Shetty */}
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

          {/* Sunitha Daniel */}
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