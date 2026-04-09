# User Management Dashboard

A production-ready user management application built with modern frontend architecture and integrated with Supabase for real-time data persistence. The project demonstrates clean component structure, typed data handling, form validation, API abstraction, and responsive UI design.

---

## 🚀 Tech Stack

* **Frontend:** React + TypeScript + Vite
* **Styling:** Tailwind CSS
* **Backend / Database:** Supabase (PostgreSQL + REST API)
* **Form Handling:** React Hook Form
* **Validation:** Zod
* **Notifications:** react-hot-toast

---

## ✨ Features

* Add new users with **Name, Email, and Role**
* Validate form inputs before submission
* Store records securely in Supabase
* Fetch and display users in a dashboard table
* Show creation timestamps in readable format
* Responsive layout for desktop and mobile
* Error and success feedback through toast notifications

---

## 🏗 Architecture

The project follows a **service-layer architecture** for maintainability:

* **Components Layer** → UI rendering and interaction
* **Schema Layer** → Validation logic using Zod
* **Service Layer** → Supabase queries isolated from UI
* **Types Layer** → Shared TypeScript interfaces

This separation improves scalability, readability, and makes future features such as edit, delete, filtering, and pagination easier to implement.

---

## 📁 Folder Structure

```bash
src/
├── components/
├── services/
├── schemas/
├── types/
├── lib/
├── App.tsx
```

---

## ⚙️ Setup

```bash
git clone https://github.com/mrauthentik/cain
cd user-management-dashboard
npm install
npm run dev
```

Create `.env` file:

```env
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

---

## 🧠 Engineering Decisions

* TypeScript used for strong type safety
* Tailwind CSS chosen for fast scalable styling
* Supabase selected for backend simplicity and instant API access
* Form validation handled before database submission to reduce invalid writes
* Defensive UI rendering used for null-safe date handling

---

## 🔮 Link to Production
 
https://cain-henna.vercel.app/

---


