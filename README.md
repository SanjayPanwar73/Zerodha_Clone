Zerodha-Clone 📈
A full-stack web application inspired by Zerodha, built with MERN stack + React dashboard.
The project replicates core features like user authentication, holdings, orders, positions, watchlists, and a marketing landing page.

🚀 Live Demo: https://zerodha-clone-frontend-clmm.onrender.com

📂 Project Structure
├── backend/           # Node.js + Express + MongoDB (API + Auth + Models)
├── dashboard/         # React dashboard (user holdings, orders, positions)
├── frontend/          # React landing page (marketing, signup, login)
├── controller/        # Controllers (Auth etc.)
├── middlewares/       # Auth middleware
├── model/             # MongoDB models
├── routes/            # Express routes
├── schemas/           # Database schemas
├── utils/             # Helper utilities
└── .gitignore

✨ Features

🔑 Authentication

Signup / Login with JWT

Protected routes with middleware

📊 Dashboard

Holdings, Orders, Positions

Funds & Portfolio summary

Charts (Doughnut + Vertical graph)

Watchlist with Buy/Sell actions

🌐 Landing Page

Marketing homepage

About, Pricing, Products, Support pages

Responsive UI

🛠️ Tech Stack

Frontend (Landing page & Dashboard):

React.js, Vite

ShadCN/UI, CSS, Charts.js

Backend:

Node.js, Express.js

MongoDB + Mongoose

JWT for Authentication

Deployment:

Render (frontend + backend hosting)

⚙️ Installation & Setup

Clone the repository

git clone https://github.com/your-username/Zerodha_Clone.git
cd Zerodha_Clone


Backend setup

cd backend
npm install
npm start


Create a .env file inside backend/

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key


Dashboard setup

cd ../dashboard
npm install
npm run dev


Frontend setup

cd ../frontend
npm install
npm run dev


🧪 Testing

Basic React component tests are inside frontend/src/test/. Run:

npm test

🚧 Future Scope

Real-time stock price integration

User profile management

Payments mockup integration

More detailed portfolio analytics
