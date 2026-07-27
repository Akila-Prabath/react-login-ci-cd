# React Login CI/CD

![CI](https://github.com/Akila-Prabath/react-login-ci-cd/actions/workflows/ci.yml/badge.svg)
![Deploy](https://github.com/Akila-Prabath/react-login-ci-cd/actions/workflows/deploy.yml/badge.svg)

A modern React login application built with **Vite** that demonstrates a complete **CI/CD pipeline** using **GitHub Actions**. The project showcases modern Git workflows, automated testing, code quality checks, and automatic deployment to GitHub Pages.

## 🌐 Live Demo

**GitHub Pages:**  
https://akila-prabath.github.io/react-login-ci-cd/

---

## 📖 Project Overview

This project was developed to practice modern frontend development and DevOps workflows.

Features include:

- Responsive React login page
- Controlled form inputs using React `useState`
- Client-side form validation
- Loading state during login
- Unit testing with Vitest and React Testing Library
- ESLint code quality checks
- Continuous Integration (CI) using GitHub Actions
- Continuous Deployment (CD) to GitHub Pages

---

## 🚀 Features

- Login form UI
- Email and password validation
- Error messages for invalid input
- Loading state while processing login
- Responsive layout
- Automated testing
- Automated deployment

---

## 🛠 Tech Stack

### Frontend

- React 19
- Vite
- JavaScript (ES6+)
- CSS3

### Testing

- Vitest
- React Testing Library
- @testing-library/user-event

### Code Quality

- ESLint

### CI/CD

- GitHub Actions
- GitHub Pages

---

## 📁 Project Structure

```text
react-login-ci-cd/
│
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
│
├── src/
│   ├── components/
│   │   └── Login/
│   │       ├── Login.jsx
│   │       ├── Login.css
│   │       └── Login.test.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── setupTests.js
│
├── public/
├── vite.config.js
├── package.json
├── eslint.config.js
└── README.md
```

---

## 🔄 Git Workflow

This project follows a professional Git branching strategy.

```text
main
│
develop
│
├── feature/project-setup
├── feature/create-login-ui
├── feature/github-actions-ci
├── feature/add-unit-tests
├── feature/login-validation
└── feature/github-pages-deployment
```

Development is completed on feature branches, merged into **develop**, and finally promoted to **main** for deployment.

---

## ⚙ Continuous Integration (CI)

Every push and pull request triggers the CI workflow.

### CI Pipeline

- Install dependencies
- Run ESLint
- Execute unit tests
- Build the application

This ensures that only validated code is merged into the repository.

---

## 🚀 Continuous Deployment (CD)

When code is merged into the **main** branch:

- The application is built
- Production artifacts are generated
- GitHub Actions deploys the project automatically
- GitHub Pages is updated

No manual deployment is required.

---

## 📊 CI/CD Workflow

```text
Developer
     │
     ▼
Feature Branch
     │
     ▼
Pull Request
     │
     ▼
GitHub Actions (CI)
 ├── Install Dependencies
 ├── ESLint
 ├── Unit Tests
 └── Build
     │
     ▼
Merge to develop
     │
     ▼
Merge to main
     │
     ▼
GitHub Actions (CD)
 ├── Build
 ├── Upload Artifact
 └── Deploy to GitHub Pages
     │
     ▼
Live Website
```

---

## 🧪 Running the Project Locally

Clone the repository:

```bash
git clone https://github.com/Akila-Prabath/react-login-ci-cd.git
```

Navigate into the project:

```bash
cd react-login-ci-cd
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## 🧪 Run Tests

Run unit tests:

```bash
npm run test -- --run
```

---

## ✅ Run ESLint

```bash
npm run lint
```

---

## 📦 Build for Production

```bash
npm run build
```

---

## 📷 Screenshots

### Login Page

> Add a screenshot here.

```
docs/images/login-page.png
```

### GitHub Actions CI

> Add a screenshot here.

```
docs/images/ci-workflow.png
```

### GitHub Pages Deployment

> Add a screenshot here.

```
docs/images/deployment.png
```

---

## 📚 What I Learned

Through this project I gained practical experience with:

- React component development
- React Hooks (`useState`)
- Form validation
- Unit testing using Vitest
- React Testing Library
- Git branching strategies
- Pull Request workflow
- GitHub Actions
- Continuous Integration
- Continuous Deployment
- GitHub Pages hosting

---

## 🔮 Future Improvements

- Authentication using a backend API
- JWT-based login
- Playwright end-to-end testing
- Docker containerization
- Jenkins CI pipeline
- Dark mode
- Responsive mobile improvements
- Form accessibility enhancements

---

## 👨‍💻 Author

**Akila Prabath**

- GitHub: https://github.com/Akila-Prabath
- LinkedIn: *(Add your LinkedIn profile here)*

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.
