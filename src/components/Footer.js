import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center p-4">
      <p>&copy; {new Date().getFullYear()} Church Name. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;