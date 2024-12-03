import React from "react";
import "./CompanyList.css"; // Import the CSS for styling

const CompanyList = ({ companies, onEdit, onDelete }) => {
  return (
    <div className="company-list">
      <h2>Company List</h2>
      <div className="company-items">
        {companies.map((company) => (
          <div key={company.id} className="company-item">
            <div className="company-info">
              <h3>{company.name}</h3>
              <p>
                <strong>Location:</strong> {company.location}
              </p>
              <p>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href={company.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              </p>
              <p>
                <strong>Emails:</strong>{" "}
                {company.emails && company.emails.length > 0
                  ? company.emails.join(", ")
                  : "No emails available"}
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                {company.phoneNumbers && company.phoneNumbers.length > 0
                  ? company.phoneNumbers.join(", ")
                  : "No phone numbers available"}
              </p>
              <p>
                <strong>Comments:</strong> {company.comments || "No comments"}
              </p>
              <p>
                <strong>Next Communication:</strong>{" "}
                {company.nextCommunication
                  ? `${company.nextCommunication.type} on ${company.nextCommunication.date}`
                  : "Not scheduled"}
              </p>
            </div>
            <div className="company-actions">
              <button onClick={() => onEdit(company)} className="edit-btn">
                Edit
              </button>
              <button
                onClick={() => onDelete(company.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyList;
