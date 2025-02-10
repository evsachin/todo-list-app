# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Project Structure

home-service-management/    # Root folder (Project Name)
│── public/                 # Static files
│   ├── index.html          # Main HTML file
│   ├── favicon.ico         # Website icon
│   ├── assets/             # Public images, logos
│   ├── manifest.json       # Web app manifest
│   └── robots.txt          # SEO file
│
│── src/                    # Main source code
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── ServiceCard.js
│   │   ├── ProtectedRoute.js
│   │   └── FormInput.js
│   │
│   ├── pages/              # Individual pages
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── SearchServices.js
│   │   ├── ServiceProviderList.js
│   │   ├── ServiceDetails.js
│   │   ├── Dashboard.js
│   │   └── NotFound.js
│   │
│   ├── assets/             # Images, icons, CSS, fonts
│   │   ├── plumber.png
│   │   ├── electrician.jpg
│   │   ├── styles.css
│   │
│   ├── context/            # Context API for global state
│   │   ├── AuthContext.js
│   │   ├── ServiceContext.js
│   │
│   ├── hooks/              # Custom React hooks
│   │   ├── useAuth.js
│   │   ├── useFetch.js
│   │
│   ├── utils/              # Utility functions/helpers
│   │   ├── api.js          # API calls
│   │   ├── constants.js    # Static values (categories, prices, etc.)
│   │   ├── validations.js  # Form validation logic
│   │
│   ├── routes/             # App routes
│   │   ├── AppRoutes.js
│   │
│   ├── services/           # API service calls
│   │   ├── authService.js
│   │   ├── serviceService.js
│   │
│   ├── App.js              # Main App component
│   ├── index.js            # Entry point of the app
│   ├── reportWebVitals.js  # Performance measuring (optional)
│   ├── setupTests.js       # Testing setup
│
│── .env                    # Environment variables
│── .gitignore               # Ignored files in git
│── package.json             # Project dependencies
│── README.md                # Project documentation
│── yarn.lock / package-lock.json  # Dependency lock file
