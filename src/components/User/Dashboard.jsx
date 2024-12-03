// components/User/Dashboard.jsx
import React from "react";
import "./Dashboard.css"; // Import the CSS for styling

const Dashboard = ({ companies }) => {
  return (
    <div className="dashboard">
      <h1>Company Dashboard</h1>
      <table className="company-table">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Last Five Communications</th>
            <th>Next Scheduled Communication</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id} className="company-row">
              <td>{company.name}</td>
              <td>
                {company.lastCommunications.map((comm, index) => (
                  <div key={index} className="communication">
                    <strong>{comm.type}</strong>: {comm.date}
                  </div>
                ))}
              </td>
              <td>
                <strong>{company.nextCommunication.type}</strong>:{" "}
                {company.nextCommunication.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
