# WorldWise

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction
WorldWise is a concept frontend application designed to help users track the places they have visited and when they visited them. With the help of an interactive map, intuitive forms, and a user-friendly interface, WorldWise provides an engaging way to visualize travel history.

## Features
- Fast and optimized build with Vite
- Hot Module Replacement (HMR) for rapid development
- ESLint integration for code quality and consistency
- Interactive map integration using React Leaflet
- Backend server setup using json-server for CRUD operations
- React Router for SPA navigation
- Modern React hooks: useState, useContext, useReducer, useEffect, and custom hooks
- Modular CSS for scoped styling

## Technologies Used
- **React**: Core library for building user interfaces
- **Vite**: Front-end build tool for fast and optimized builds
- **React Hooks**: useState, useContext, useReducer, useEffect, and custom hooks for state management and side effects
- **React Leaflet**: Library for integrating interactive maps into the UI
- **json-server**: Tool for creating an on-device server to handle data fetching and CRUD operations
- **React Router**: Library for implementing routing in a single-page application
- **CSS Modules**: For scoped and maintainable component-specific styles

## Installation
To set up this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/GoyalIshaan/WorldWise.git
   cd WorldWise
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Usage
After installation, you can start the development server using `npm run dev`. The application will be available at `http://localhost:3000`. Modify the source code in the `src` directory to implement your features. The changes will be reflected in real-time thanks to HMR.

## Project Structure
The project structure is as follows:

```
WorldWise/
├── data/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
```

- **data/**: Contains data files used in the project.
- **public/**: Static assets that will be served directly.
- **src/**: Main source directory containing React components, custom hooks, and styles.
- **index.html**: Main HTML file.
- **vite.config.js**: Vite configuration file.

## Contributing
Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
