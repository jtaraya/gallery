# Gallery

Image gallery web application.  CI/CD Pipeline Project

## About

A Nodejs gallery web application that allows users to browse images in a clean, organized view. It provides routes to display images, uses a server backend, and has front‑end views for displaying content.

Implemented using Jenkins, MongoDB

---

## Features

- Display a gallery of images  
- Clean UI / Views via templates  
- Static assets served (CSS, frontend JS, images)  
- Backend routing via server.js  
- Configuration via `_config.js`  

---

## Tech Stack

- **Languages**: HTML, CSS, JavaScript  
- **Backend**: Node.js  
- **Server**: Express (if that is what server.js uses)  
- **Templating/views**: (adjust if using EJS, Pug, Handlebars, etc.)  
- **Configuration**: `_config.js`  
- **Package management**: npm  

---

## Getting Started

These instructions will get you a copy of the project running on your local machine.

### Prerequisites

Make sure you have installed:

- Node.js (version ≥ …)  
- npm  

### Installation


```bash

# Folk the gallery repository
git clone https://github.com/jonnygovish/gallery.git

# Clone the repository
git clone https://github.com/jtaraya/gallery.git

# Move into project directory
cd gallery

# Install dependencies
npm install


Configuration

Review or create _config.js to suit your environment

Folder Structure
gallery/
├── models/            # Data models (if any)
├── public/            # Static files: CSS, JS, images
├── routes/            # Route definitions
├── views/             # HTML / template views
├── server.js          # Entry point to start server
├── _config.js         # Configuration settings
├── package.json       # Project metadata & dependencies
└── package-lock.json  # Exact dependency versions

Getting Started
0. Folk repository

1. Clone the repository
git clone <your-repo-url>
cd <project-folder>

2. Create a new branch:
    git checkout test

3. Create a new branch:
git checkout test

4. Create features then Switch to master branch
    git switch master

5. Merge branches
    git merge test

6  Add and commit changes.
    git add .
    git commit -m "test changes"

5. Push your branch 
    git push origin feature/YourFeatureName

License

This project is open source.

**Github** https://github.com/jtaraya/gallery.git