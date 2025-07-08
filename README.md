# 📚 Personal Reading List Manager

A beautiful, responsive web app for managing your personal reading list.  
Add, edit, filter, update, and delete your books—all powered by [Supabase](https://supabase.com/) and deployed on Netlify.

**🌐 Live Site:**  
[https://686d25d26b5233d0b7d4653d--fantastic-sunshine-c0d039.netlify.app/](https://686d25d26b5233d0b7d4653d--fantastic-sunshine-c0d039.netlify.app/)

---

## ✨ Features

- **Add Book** — Title, Author, Status, Notes
- **View All Books** — Responsive, filterable list/table
- **Search & Filter** — By title, author, or status
- **Edit Book** — Update all book details
- **Delete Book** — Remove instantly
- **Change Status** — Quick update right from the table
- **Real-time Updates** — Changes sync instantly with Supabase
- **Modern UI** — Tailwind CSS + React
- **Mobile Friendly** — Fully responsive design

---

## 🗄️ Database Schema

### Table: `books`

| Column Name | Type      | Default   | Description             |
| ----------- | --------- | --------- | ----------------------- |
| id          | int8      | auto-inc  | Primary key             |
| title       | text      |           | Book title (required)   |
| author      | text      |           | Author name (required)  |
| status      | text      |           | "To Read", "Reading", "Completed" |
| notes       | text      |           | (optional)              |
| date_added  | timestamp | now()     | Added on (auto)         |


---

## 🖼️ Demo

- **Home Page:** (shows main table, search and filter)
  ![1](https://github.com/user-attachments/assets/a4d2232a-bba8-4b08-8403-d487d85cbe46)

- **Edit Book Page:** (shows edit form)
  ![2](https://github.com/user-attachments/assets/0de29570-f7a3-4ac5-98ea-e6e35a5163d1)

- **Filtering by Status:**
  ![3](https://github.com/user-attachments/assets/2c1b2d26-c667-491a-9b3f-b467abcde70c)

- **Delete Confirmation:**
![4](https://github.com/user-attachments/assets/2735039a-47c7-410f-8d8b-867effa207a6)

- **Filtering by Author/Book title:**
  ![5](https://github.com/user-attachments/assets/29023d38-6482-4184-9f21-dd20d9ccd862)


--- 

## 🛠️ Tech Stack

- **React.js** (Vite)
- **Tailwind CSS** (for styling)
- **Supabase** (PostgreSQL backend & API)
- **Netlify** (hosting and CI/CD)

---

## 🚀 Getting Started

**1. Clone the repository:**
```bash
git clone https://github.com/yourusername/reading-list-manager.git
cd reading-list-manager
```

**2. Install dependencies:**
```bash
npm install
```

**3. Configure Supabase:**
```bash
// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = "https://xyzcompany.supabase.co";
const supabaseAnonKey = "your-anon-key";
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

**4. Run the app locally:**
```bash
npm run dev
```


