import React from 'react';

const Contact = () => {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p>
        We are here to serve you. If you have any questions or need assistance, feel free to reach out to us. Below are the details of our pastors and staff members. We would love to connect with you!
      </p>

      <table className="table table-striped table-hover mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pastor Daniel Sheety</td>
            <td>Senior Pastor</td>
            <td>(647) 888-3776</td>
            <td>john.doe@church.com</td>
          </tr>
          <tr>
            <td>Sunitha Daniel</td>
            <td>Associate Pastor</td>
            <td>(416) 662-9270</td>
            <td>jane.smith@church.com</td>
          </tr>
          <tr>
            <td>No Name</td>
            <td>Chruch Memeber</td>
            <td>(555) 345-6789</td>
            <td>mark.johnson@church.com</td>
          </tr>
          <tr>
            <td>No Name</td>
            <td>Chruch Member</td>
            <td>(555) 456-7890</td>
            <td>mary.lee@church.com</td>
          </tr>
        </tbody>
      </table>

      <h2>Church Address</h2>
      <p>
        123 Church Street, City, State, ZIP <br />
        Phone: (555) 987-6543 <br />
        Email: info@church.com
      </p>
    </div>
  );
};

export default Contact;