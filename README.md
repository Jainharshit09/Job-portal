# Job Portal Frontend

This repository contains the frontend code for the **Job Portal** web application. It provides job seekers and recruiters with a modern, interactive user experience to browse, post, and manage jobs and applications.

> For backend services and APIs, see: [job-portal-backend](https://github.com/Jainharshit09/job-portal-backend)

---

## 🚀 Tech Stack

- **React.js** (with TypeScript) — Building interactive UIs
- **Redux Toolkit & React Redux** — Efficient state management
- **Mantine UI** — Component library for rapid, beautiful UI development
- **Tailwind CSS** — Utility-first styling for fast and responsive design
- **React Router DOM** — Declarative routing for navigation
- **Axios** — HTTP client for API communication
- **Framer Motion** — Animations and transitions
- **Three.js & OGL** — Advanced 3D graphics and visual effects
- **React Toastify & Mantine Notifications** — User alerts and feedback
- **Dayjs** — Date and time utilities
- **DOMPurify** — Secure HTML sanitization
- **Jest & React Testing Library** — Unit and integration testing
- **Docker** — Containerized deployment for consistent environments

---

## ✨ Unique Features & Innovations

- **Rich Recruiter Experience:**  
  Special dashboards, job posting flows, and application management tools for recruiters, seamlessly integrated with the backend.

- **Blazing Fast UI:**  
  Leveraged Mantine UI and Tailwind CSS for a snappy, highly responsive interface. Performance tuning and code splitting for faster load times.

- **Advanced Animations:**  
  Integrated Framer Motion and Three.js to deliver visually stunning transitions and effects, making the job search and application process engaging.

- **Optimized State Management:**  
  Used Redux Toolkit for scalable state, including recruiter/job seeker flows and role-based UI rendering.

- **Secure by Design:**  
  DOMPurify for safe HTML rendering and JWT handling for authentication, ensuring data and user safety.

- **Dockerized Frontend:**  
  Easily deploy the frontend as a Docker container for both development and production, ensuring consistency and scalability.

- **Backend Synergy:**  
  Designed to fully utilize the advanced features of the backend (MongoDB, Redis, Spring Boot), including real-time notifications and fast authentication flows.

---

## 🛠️ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jainharshit09/Job-portal.git
   cd Job-portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

5. **(Optional) Run with Docker**
   ```bash
   docker build -t job-portal-frontend .
   docker run -p 3000:3000 job-portal-frontend
   ```

---

## 📂 Project Structure

```
Job-portal/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── store/
│   ├── hooks/
│   ├── App.tsx
│   └── index.tsx
├── package.json
└── README.md
```

---

## 🤝 Contributing

Contributions are welcome! Fork the repo and submit a pull request. For major changes, please open an issue first to discuss your ideas.

---

