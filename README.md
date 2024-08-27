
🏠 A Next.js-based online accommodation booking system designed to streamline the room booking process for customers and administrators.

**Overview**
-----------

Dream PG is a comprehensive online booking system that aims to revolutionize the way accommodation facilities are managed and booked. The system provides a user-friendly interface for customers to search and book rooms, while empowering administrators with powerful management tools and insights.

**Key Features**
---------------

* **Streamlined booking process** with real-time availability updates
* **Personalized recommendations** based on user preferences and browsing history
* **Comprehensive admin dashboard** for managing rooms, bookings, and users
* **Advanced search and filtering options** for customers
* **Group bookings and event planning features**
* **Integration with external calendars and loyalty programs**

**Technical Details**
-------------------

* **Front-end:** Next.js
* **Back-end:** MongoDB
* **Operating System:** Windows
* **Programming Languages:** JavaScript, HTML, CSS

**Getting Started**
-----------------

### 1. Clone the repository:


git clone https://github.com/parzivaldrp/Dream-PG.git

### 2. Install dependencies:

npm install

### 3. Start the development server:

npm run dev
Open your browser and navigate to http://localhost:3000 to see the project in action.

**Project Structure**
---------------------

The project follows a modular architecture, with separate folders for components, pages, public assets, and tests. Here's a brief overview of the project structure:

### Folders

* **Dream-PG
* **public 📂
* **uploads
a2.jpg
a3.jpeg
... (static images)
vercel.svg (static SVG file)
src 📂
app 📂
api 📂
admin-api 📂
... (admin API routes)
dpg
[id]
route.js (route for dpg)
...
user 👥
profile.js (user profile page)
component 📂
Footer.jsx (footer component)
Header.jsx (header component)
... (reusable UI components)
models 📂
Booking.jsx (booking model)
Multi.jsx (multi-form model)
... (data models)
pages 📂
About
page.jsx (about page)
admin
component 📂
Navbar.jsx (admin navbar component)
...
...
config 📂
mongoose.jsx (mongoose configuration)
styles 📂
Categories.module.css (categories CSS module)
findpg.module.css (find PG CSS module)
... (CSS styles)
.env.local 📜 (environment variables)
.eslintrc.json 📜 (ESLint configuration)
.gitignore 📜 (Git ignore file)
jsconfig.json 📜 (JavaScript configuration)
next.config.mjs 📜 (Next.js configuration)
package-lock.json 📜 (package lock file)
package.json 📜 (package file)
README.md 📜 (this README file)

**User and Admin Panels**
-------------------------

The project includes separate user and admin panels, each with its own set of pages and functionality.

### Location of User and Admin Folders

To find the user and admin folders, navigate to `src/app/pages`. Inside this folder, you'll find two subfolders:

* **user**: 👥 Contains the pages and components that make up the user panel.
* **admin**: 👮 Contains the pages and components that make up the admin panel.

**User Panel**
-------------

The user panel allows users to view and manage PGs. To access the user panel, users can log in with their credentials. Once logged in, users can:

* View a list of PGs
* Search for PGs
* View details about each PG
* Book a PG


**Admin Panel**
-------------

The admin panel allows administrators to manage PGs and user accounts. To access the admin panel, administrators can log in with their credentials. Once logged in, administrators can:

* Add new PGs
* Edit existing PGs
* Delete PGs
* Manage user accounts

**Multi-Form Submission**
---------------------

The project includes a multi-form submission feature that allows administrators to enter detailed information about each PG. The form includes fields for:

* PG name
* Location
* Facilities
* And more!

Once the form is submitted, the information is stored in a database and displayed on the PG details page.

**Contributing**
--------------

We welcome contributions to the project! To get started, take a look at our [contributing guidelines](CONTRIBUTING.md).

  
