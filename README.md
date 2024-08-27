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

Verify

Open In Editor
Edit
Copy code
public
uploads
... (static assets for uploads)
a2.jpg
a3.jpeg
... (static images)
vercel.svg (static SVG file)

src
app
api
admin-api
... (admin API routes)
dpg
[id]
route.js (route for dpg)
...
user
profile.js (user profile page)
component
Footer.jsx (footer component)
Header.jsx (header component)
... (reusable UI components)
models
Booking.jsx (booking model)
Multi.jsx (multi-form model)
... (data models)
pages
About
page.jsx (about page)
admin
component
Navbar.jsx (admin navbar component)
... (admin components)
pages
Booking
page.jsx (booking page)
...
editpg
[id]
page.jsx (edit PG page)
...
user
page.jsx (user page)
...
Bootstrap.jsx (bootstrap file)
error.jsx (error page)
... (application pages and components)

config
mongoose.jsx (mongoose configuration)

styles
Categories.module.css (categories CSS module)
findpg.module.css (find PG CSS module)
... (CSS styles)

.env.local (environment variables)
.eslintrc.json (ESLint configuration)
.gitignore (Git ignore file)
jsconfig.json (JavaScript configuration)
next.config.mjs (Next.js configuration)
package-lock.json (package lock file)
package.json (package file)
README.md (this README file)
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
