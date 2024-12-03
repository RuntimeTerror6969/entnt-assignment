import React, { useState, useEffect } from "react";
import "./AddCompanyForm.css"; // Importing the CSS file for styling

const AddCompanyForm = ({ onSubmit, editingCompany }) => {
  const [companyData, setCompanyData] = useState({
    name: "",
    location: "",
    linkedIn: "",
    emails: "",
    phoneNumbers: "",
    comments: "",
    nextCommunicationType: "",
    nextCommunicationDate: "",
  });

  // Update form data when editingCompany changes
  useEffect(() => {
    if (editingCompany) {
      setCompanyData({
        name: editingCompany.name || "",
        location: editingCompany.location || "",
        linkedIn: editingCompany.linkedIn || "",
        emails: editingCompany.emails ? editingCompany.emails.join(", ") : "",
        phoneNumbers: editingCompany.phoneNumbers
          ? editingCompany.phoneNumbers.join(", ")
          : "",
        comments: editingCompany.comments || "",
        nextCommunicationType: editingCompany.nextCommunication?.type || "",
        nextCommunicationDate: editingCompany.nextCommunication?.date || "",
      });
    }
  }, [editingCompany]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyData({
      ...companyData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Transform emails and phoneNumbers into arrays
    const updatedCompanyData = {
      ...companyData,
      emails: companyData.emails.split(",").map((email) => email.trim()),
      phoneNumbers: companyData.phoneNumbers
        .split(",")
        .map((phone) => phone.trim()),
      nextCommunication: {
        type: companyData.nextCommunicationType,
        date: companyData.nextCommunicationDate,
      },
    };

    onSubmit({ ...editingCompany, ...updatedCompanyData }); // Pass data back to parent
    resetForm();
  };

  const resetForm = () => {
    setCompanyData({
      name: "",
      location: "",
      linkedIn: "",
      emails: "",
      phoneNumbers: "",
      comments: "",
      nextCommunicationType: "",
      nextCommunicationDate: "",
    });
  };

  return (
    <div className="add-company-form">
      <h2>{editingCompany ? "Edit Company" : "Add New Company"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            name="name"
            value={companyData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={companyData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>LinkedIn URL</label>
          <input
            type="url"
            name="linkedIn"
            value={companyData.linkedIn}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Emails (comma-separated)</label>
          <input
            type="email"
            name="emails"
            value={companyData.emails}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Numbers (comma-separated)</label>
          <input
            type="tel"
            name="phoneNumbers"
            value={companyData.phoneNumbers}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Comments</label>
          <textarea
            name="comments"
            value={companyData.comments}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Next Communication Type</label>
          <input
            type="text"
            name="nextCommunicationType"
            value={companyData.nextCommunicationType}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Next Communication Date</label>
          <input
            type="date"
            name="nextCommunicationDate"
            value={companyData.nextCommunicationDate}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-btn">
          {editingCompany ? "Save Changes" : "Add Company"}
        </button>
      </form>
    </div>
  );
};

export default AddCompanyForm;
