import React, { useState, useEffect, useMemo } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import AddCompanyForm from "./components/Admin/AddCompanyForm";
import CompanyList from "./components/Admin/CompanyList";
import Dashboard from "./components/User/Dashboard";
import CalendarView from "./components/User/CalendarView";
import Notifications from "./components/User/Notifications";
import "./App.css"; // Importing the CSS file

function App() {
  const navigate = useNavigate(); // Hook for navigation

  // State to store companies and communications
  const [companies, setCompanies] = useState([]);
  const [overdueCommunications, setOverdueCommunications] = useState([]);
  const [dueTodayCommunications, setDueTodayCommunications] = useState([]);
  const [editingCompany, setEditingCompany] = useState(null); // New state for editing

  // Memoizing companiesMockData to avoid re-creation during renders
  const companiesMockData = useMemo(
    () => [
      {
        id: 5,
        name: "InnovateHub",
        location: "Boston, MA",
        linkedIn: "https://linkedin.com/company/innovatehub",
        emails: ["hello@innovatehub.com"],
        phoneNumbers: ["+1 321 654 9870"],
        comments: "Potential partner for a joint venture.",
        lastCommunications: [
          { type: "Email", date: "2024-11-25" },
          { type: "Phone Call", date: "2024-11-22" },
        ],
        nextCommunication: { type: "LinkedIn Message", date: "2024-12-06" },
      },
      {
        id: 6,
        name: "AlphaTech",
        location: "Los Angeles, CA",
        linkedIn: "https://linkedin.com/company/alphatech",
        emails: ["contact@alphatech.com"],
        phoneNumbers: ["+1 654 321 7890"],
        comments: "Exploring cloud solutions.",
        lastCommunications: [
          { type: "LinkedIn Message", date: "2024-11-26" },
          { type: "Email", date: "2024-11-12" },
        ],
        nextCommunication: { type: "Phone Call", date: "2024-12-04" },
      },
      {
        id: 7,
        name: "TechWave",
        location: "Austin, TX",
        linkedIn: "https://linkedin.com/company/techwave",
        emails: ["info@techwave.com"],
        phoneNumbers: ["+1 456 789 0123"],
        comments: "Interested in cybersecurity solutions.",
        lastCommunications: [
          { type: "Phone Call", date: "2024-11-19" },
          { type: "Email", date: "2024-11-08" },
        ],
        nextCommunication: { type: "LinkedIn Post", date: "2024-12-07" },
      },
      {
        id: 8,
        name: "DigitalEdge",
        location: "Chicago, IL",
        linkedIn: "https://linkedin.com/company/digitaledge",
        emails: ["support@digitaledge.com"],
        phoneNumbers: ["+1 654 789 0123"],
        comments: "Potential client for data analytics.",
        lastCommunications: [
          { type: "LinkedIn Message", date: "2024-11-10" },
          { type: "Email", date: "2024-11-18" },
        ],
        nextCommunication: { type: "Phone Call", date: "2024-12-09" },
      },
    ],
    []
  );

  useEffect(() => {
    setCompanies(companiesMockData);
    updateNotifications(companiesMockData);
  }, [companiesMockData]);

  const updateNotifications = (companiesList) => {
    const overdue = companiesList.filter(
      (company) => new Date(company.nextCommunication.date) < new Date()
    );
    const dueToday = companiesList.filter(
      (company) =>
        new Date(company.nextCommunication.date).toDateString() ===
        new Date().toDateString()
    );
    setOverdueCommunications(overdue);
    setDueTodayCommunications(dueToday);
  };

  const handleAddCompany = (newCompany) => {
    if (editingCompany) {
      // Update existing company
      const updatedCompanies = companies.map((company) =>
        company.id === editingCompany.id ? newCompany : company
      );
      setCompanies(updatedCompanies);
      setEditingCompany(null); // Reset editing state
      navigate("/company-list"); // Redirect after edit
    } else {
      // Add new company
      const updatedCompanies = [
        ...companies,
        { ...newCompany, id: Date.now() },
      ];
      setCompanies(updatedCompanies);
      navigate("/company-list"); // Redirect after add
    }
    updateNotifications(companies);
  };

  const handleDeleteCompany = (companyId) => {
    const updatedCompanies = companies.filter(
      (company) => company.id !== companyId
    );
    setCompanies(updatedCompanies);
    updateNotifications(updatedCompanies);
  };

  const handleEditCompany = (company) => {
    setEditingCompany(company); // Set the company to edit
    navigate("/add-company"); // Redirect to the form
  };

  const Navbar = () => (
    <nav>
      <div className="flex">
        <div className="logo">TraceComm</div>
        <div>
          <Link to="/">Dashboard</Link>
          <Link to="/add-company">Add Company</Link>
          <Link to="/company-list">Company List</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="/notifications">Notifications</Link>
        </div>
      </div>
    </nav>
  );

  return (
    <div className="containe">
      <Navbar /> {/* Add Navbar here */}
      <Routes>
        <Route path="/" element={<Dashboard companies={companies} />} />
        <Route
          path="/add-company"
          element={
            <AddCompanyForm
              onSubmit={handleAddCompany}
              editingCompany={editingCompany}
            />
          }
        />
        <Route
          path="/company-list"
          element={
            <CompanyList
              companies={companies}
              onDelete={handleDeleteCompany}
              onEdit={handleEditCompany}
            />
          }
        />
        <Route
          path="/calendar"
          element={
            <CalendarView
              events={companies.map((company) => ({
                title: `${company.name} (${company.nextCommunication.type})`,
                date: company.nextCommunication.date,
              }))}
            />
          }
        />
        <Route
          path="/notifications"
          element={
            <Notifications
              overdue={overdueCommunications}
              dueToday={dueTodayCommunications}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
