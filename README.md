# Calendar Application for Communication Tracking

## Objective

As a company, we aim to maintain strong professional relationships by keeping accurate records of our interactions with other organizations. This assignment's objective is to develop a React-based Calendar Application that enables us to efficiently track communication with companies, ensuring follow-ups are timely and consistent. This tool provides a centralized platform to log past interactions, plan future communications, and manage the frequency of engagement based on predefined schedules.

## Project Overview

The application includes:

- **Admin Module**: For setting up companies and communication parameters.
- **User Module**: For visualizing, managing, and performing communication tasks.

### Admin Module

This module allows administrators to configure the application and manage foundational data.

#### Company Management

- Add, edit, and delete companies.
- Each company entry includes:
  - Name
  - Location
  - LinkedIn Profile
  - Emails
  - Phone Numbers
  - Comments
  - Communication Periodicity

#### Communication Method Management

- Define available communication methods, including:
  - Name (e.g., "Visit", "LinkedIn Post")
  - Description (e.g., "Visit to company premises")
  - Sequence
  - Mandatory Flag

### User Module

This module is the primary interface for end-users.

#### Dashboard

- Provides a grid-like view of companies.
- Columns include:
  - Company Name
  - Last Five Communications
  - Next Scheduled Communication
- Color-coded highlights for overdue and due communications.
- Interactive features like hover effect and communication actions.

#### Notifications

- Displays overdue and due communications.
- Notification icon with badge count.

#### Calendar View

- View past and upcoming communications.

## Setup and Deployment

### Prerequisites

- Node.js
- npm or yarn
- Git

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/calendar-app.git
   cd calendar-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Running the Application

To run the application locally:

```sh
npm start
```
