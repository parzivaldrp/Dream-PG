Dream-PG
A Next.js project for managing PGs, featuring a multi-form submission system and separate user and admin panels.

Getting Started
1. Clone the repository:
bash

Verify

Open In Editor
Edit
Copy code
git clone https://github.com/parzivaldrp/Dream-PG.git
2. Install dependencies:
bash

Verify

Open In Editor
Edit
Copy code
npm install
3. Start the development server:
bash

Verify

Open In Editor
Edit
Copy code
npm run dev
Open your browser and navigate to http://localhost:3000 to see the project in action.

Project Structure
The project follows a modular architecture, with separate folders for components, pages, public assets, and tests. Here's a brief overview of the project structure:

Folders
public: 📂 Contains static assets that are served directly by the web server.
src: 📂 Contains the application code, including components, pages, and APIs.
app: 📂 Contains the application logic, including components, pages, and APIs.
api: 📂 Contains the API routes for the application.
admin-api: 📂 Contains the admin API routes.
component: 📂 Contains reusable UI components used throughout the project.
models: 📂 Contains the data models used in the application.
pages: 📂 Contains the Next.js pages that make up the application.
admin: 👮 Contains the pages and components that make up the admin panel.
multi: 📂 Contains the multi-form submission feature.
Allforms: 📂 Imports and displays all forms.
user: 👥 Contains the pages and components that make up the user panel.
config: 📂 Contains configuration files for the application.
styles: 📂 Contains CSS styles for the application.
.env.local: 📜 Environment variables for the application.
.eslintrc.json: 📜 ESLint configuration file.
.gitignore: 📜 Git ignore file.
jsconfig.json: 📜 JavaScript configuration file.
next.config.mjs: 📜 Next.js configuration file.
package-lock.json: 📜 Package lock file.
package.json: 📜 Package file.
README.md: 📜 This README file.
User and Admin Panels
The project includes separate user and admin panels, each with its own set of pages and functionality.

User Panel
The user panel allows users to view and manage PGs. To access the user panel, users can log in with their credentials. Once logged in, users can:

View a list of PGs
Search for PGs
View details about each PG
Book a PG
Admin Panel
The admin panel allows administrators to manage PGs and user accounts. To access the admin panel, administrators can log in with their credentials. Once logged in, administrators can:

Add new PGs
Edit existing PGs
Delete PGs
Manage user accounts
Multi-Form Submission
The project includes a multi-form submission feature that allows administrators to enter detailed information about each PG. The form includes fields for:

PG name
Location
Facilities
And more!
Once the form is submitted, the information is stored in a database and displayed on the PG details page.

User and Admin Management
The project uses a single schema/model for both users and administrators, with an additional isAdmin field that determines whether a user is an administrator or not. This allows for easy management of user and admin roles.

Contributing
We welcome contributions to the project! To get started, take a look at our contributing guidelines.
