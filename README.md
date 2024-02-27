# Frontend Application
This is the frontend application for Pulse.io. It is built using React, Typescript, TailwindCSS and React Router for routing plus Jest, Babel and React Testing Library for testing.

## Basic Project Structure
```php
frontend/
│
├── public/            # Static assets
├── src/               # Source files
│   ├── assets/        # 
│   ├── components/    # Reusable UI components
│   ├── pages/         # Pages of the application
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Entry point of the application
├── index.html         # Base html file wiht root div
├── .gitignore         # Git ignore file
├── package.json       # NPM package configuration
└── README.md          # Project README file
```

## Available Pages

Home (/): Landing page of the application.

Users (/users/<int>): Page to display user information. It fetches user data from the backend API based on the user ID provided in the URL.

Logic

The Users page fetches the id_val from the url using the useParams hook.

If the user ID is not in a correct format or type, it displays an error message through special component.

Then it proceeds with the id_val and passes it to the UserDetails component which handles data fetch from the FastApi backend.

If the API call fails, it displays an error message indicating the failure.

The UserDetails component renders the fetched user data.

## Prerequisites

Node.js and npm installed on your machine.

## How to Run

Clone this repository:

```bash
Copy code
git clone 'https://github.com/mcfilu/pulse_frontend'
```

Navigate to the project directory:

```bash
Copy code
cd Pulse-frontend
```

## Install dependencies:

```bash
Copy code
npm install
```

## Start the development server:

```bash
Copy code
npm run preview
```

Open your browser and go to http://localhost:4173 to view the application.

## How to Test

To run tests, use the following command:

```bash
Copy code
npm test
```

## Deployment

To deploy the application, build the production-ready bundle using:

```bash
Copy code
npm run build
```

This command will create an optimized build of the application in the build directory, which can be deployed to a web server.
