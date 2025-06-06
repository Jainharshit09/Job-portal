# Job Portal

This is a comprehensive Job Portal platform designed to connect students, job-seekers, and recruiters. The backend is powered by **Spring Boot**, **MongoDB**, and **Redis** for OTP verification, while the frontend uses React with Mantine components.

---

## Features

### For Job-Seekers (Students)
- **Profile Creation:** Register, log in, and build detailed profiles with personal details, resumes, skills, education, and career goals.
- **Resume Builder:** Easily create and update your resume.
- **Job Search:** Explore jobs by category (Web Developer, Digital Marketing, UI/UX, Content Writing, etc.) and apply filters.
- **Job Application:** Apply directly to job postings, track status, and connect with employers.
- **Multi-select Skills:** Add and filter by multiple skills using a smart, creatable multi-select input.
- **Get Hired:** Get notified when hired and connect with recruiters.

### For Recruiters/Companies
- **Recruiter Accounts:** Create recruiter profiles to post and manage job listings.
- **Job Posting:** Post job openings with detailed descriptions and requirements.
- **Candidate Management:** View and filter applicants, manage hiring workflows.

### Admin
- **Admin Panel:** Post jobs, manage users, and oversee portal activity.

### General Portal Features
- **OTP Verification:** Secure registration/login flows with OTP (One-Time Password) handled via Redis caching for security and speed.
- **Real-time Filtering:** Advanced search and filtering for jobs, companies, and skills.
- **Modern UI:** Built with React, Mantine, and custom design for a seamless user experience.
- **Footer with Quick Links:** Product, Company, and Support sections for easy navigation.
- **Testimonials Section:** Real feedback from successful users.
- **FAQs:** Frequently asked questions for both students and recruiters.

---

## Tech Stack

- **Backend:** Spring Boot (Java)
- **Database:** MongoDB (NoSQL, flexible document storage)
- **OTP/Cache:** Redis (in-memory, for quick OTP verification)
- **Frontend:** React, Mantine UI, Redux
- **State Management:** Redux Toolkit
- **Authentication:** JWT-based (with OTP via Redis)
- **Other:** Axios for API calls, React Router for navigation

---

## OTP Verification Flow

1. **Request:** User requests OTP for registration/login.
2. **Generate:** Backend generates a random OTP and stores it in Redis with a short expiry (e.g., 5 minutes).
3. **Verify:** User submits OTP; backend checks against Redis.
4. **Success:** Upon a match, user proceeds with registration/login; OTP deleted from Redis.

---

## How to Run

### Prerequisites
- Java 17+
- Node.js (for frontend)
- MongoDB instance
- Redis instance

### Backend Setup
1. **Clone the repo:**  
   `git clone https://github.com/Jainharshit09/Job-portal.git`
2. **Configure MongoDB & Redis:**  
   Set connection strings in your backend config/application.properties.
3. **Build & Run (Spring Boot):**  
   Use Maven or Gradle to start the server.

### Frontend Setup
1. **Install dependencies:**  
   `cd job-portal`  
   `npm install`
2. **Start the development server:**  
   `npm start`

---

## Project Structure

```
src/
  Components/
    Findjobs/           // Job search and filtering
    PostJob/            // Job posting form and inputs
    About/              // About and FAQ page
    LeandingPage/       // Landing page, Footer, Testimonials
  Data/                 // Static job categories, testimonials, etc.
  ...
```

---

## Example Job Categories

- Digital Marketing
- Web Developer
- Arts & Design
- UI-UX Designer
- Content Writing
- Data Entry
- Customer Support
- Sales
- Finance
- Human Resource

---

## FAQ Example

- **What is the purpose of this job portal?**  
  To connect students with career opportunities and provide recruiters an easy way to find talented candidates.
- **How can students create a profile?**  
  By signing up, providing details, uploading resumes, and filling in skills and education.
- **Can recruiters post job openings?**  
  Yes, recruiters can post jobs and manage applications.
- **Is there any fee to use the job portal?**  
  [Update with your policy.]

---

## Credits

Built by [Harshit Jain](https://github.com/Jainharshit09) and contributors.

---

## License

[MIT](LICENSE)
