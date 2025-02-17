Micro-Frontend Architecture (task)
Overview
This project follows a micro-frontend architecture, consisting of a Main Application (Host Application) and multiple micro-frontends.

Main Application: Serves as the shell for all micro-applications, manages the design system, and provides shared components.
Chat Application (Micro-Frontend): A standalone micro-frontend responsible for chat-related functionality.
Email Application (Micro-Frontend): A standalone micro-frontend responsible for email-related functionality.
Tech Stack
Main Application: ReactJS, Webpack Module Federation, Material-UI
Micro-Frontends: ReactJS, Webpack Module Federation, Material-UI
Build Tool: Webpack / Vite
Folder Structure

/task
│── /main  (Main Application)
│── /chat  (Micro-Frontend - Chat)
│── /email (Micro-Frontend - Email)
Installation & Setup
1. Clone the Repository

git clone <repo-url>
cd task



2. Install Dependencies
Navigate into each micro-app and install dependencies:

cd chat && npm install
cd email && npm install
cd main && npm install


3. Start the Applications
Run each application separately:

# Start Main Application
cd main && npm start

# Start Chat Application
cd chat && npm start

# Start Email Application
cd email && npm start
Note: Ensure all applications run on different ports.

Micro-Frontend Integration
The Main Application uses Webpack Module Federation to dynamically load micro-frontends.
Each micro-frontend exposes components, which the main application imports and renders dynamically.
Shared dependencies (e.g., Material-UI) are handled by the main application to prevent duplication.
