# ⚡ TradePulse

[![License: MIT](https://img.shields.io/badge/License-MIT-green)](https://opensource.org/licenses/MIT)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)

**TradePulse** is a full-stack trading platform that allows users to **buy and sell stocks**, **track holdings**, and **analyze performance**. It includes multiple apps:

- **Frontend:** main trading application  
- **Dashboard:** separate React app for analytics and portfolio insights  
- **Backend:** Node.js + Express API  

Built with the **MERN stack**, TradePulse delivers a secure, responsive, and interactive trading experience.

---

## 🌟 Features

- 🔐 **Secure Authentication** – Register and login with hashed passwords (**bcrypt.js**)  
- 💹 **Buy & Sell Stocks** – Execute trades dynamically with instant updates  
- 📊 **Real-Time Holdings** – Track your portfolio and profit/loss  
- 📈 **Interactive Dashboard** – Analyze performance and trends  
- 🌐 **RESTful API Integration** – Fetch live stock data  
- 💻 **Responsive Design** – Works across desktop, tablet, and mobile  

---

## 🧩 Tech Stack

- **Frontend:** React.js, Tailwind CSS, Axios  
- **Dashboard:** React.js, Chart.js / Recharts  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** bcrypt.js  
- **Version Control:** Git & GitHub  

---

## ⚙️ Installation & Running the App

1. **Clone the repository**:
git clone https://github.com/your-username/tradepulse.git
cd tradepulse
Install dependencies for all apps:
bash
Copy code
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install

# Dashboard
cd ../dashboard
npm install
Create a .env file in the backend folder with:

env
Copy code
PORT=8000
MONGO_URL=your_mongodb_connection_string
Run the apps (in separate terminals):

bash
Copy code
# Backend
cd backend
npm start

# Frontend
cd ../frontend
npm start

# Dashboard
cd ../dashboard
npm start
Default ports: Frontend → 3000, Dashboard → 3001, Backend API → 8000

🌐 Screenshots
<p float="left">
  <img src="https://github.com/Ashirbada17/TRADE-PULSE/blob/main/images/Screenshot%20(79).png" width="200" />
  <img src="https://github.com/Ashirbada17/TRADE-PULSE/blob/main/images/Screenshot%20(80).png" width="200" />
  <img src="https://github.com/Ashirbada17/TRADE-PULSE/blob/main/images/Screenshot%20(81).png" width="200" />
  <img src="https://github.com/Ashirbada17/TRADE-PULSE/blob/main/images/Screenshot%20(83).png" width="200" />
  <img src="https://github.com/Ashirbada17/TRADE-PULSE/blob/main/images/Screenshot%20(84).png" width="200" />
  <img src="https://github.com/Ashirbada17/TRADE-PULSE/blob/main/images/Screenshot%20(85).png" width="200" />
</p>

📂 Project Structure
bash
Copy code
TradePulse/
│
├── backend/       ← Node.js + Express API
├── frontend/      ← Main trading app
├── dashboard/     ← Separate React dashboard app
├── assets/        ← Screenshots/images
├── .gitignore
├── package.json
└── README.md
📌 Future Improvements
Real-time stock price updates via WebSockets

Advanced charting and analytics in dashboard

Notifications for trade alerts

Integration with live trading APIs

💬 Contribution
Contributions, issues, and feature requests are welcome! Fork the repo and submit a pull request.

