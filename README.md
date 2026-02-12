# prin_shop

> A lightweight cross-platform app to transfer files for print — built with React Native, Expo, Node.js, and MongoDB. Works on mobile (Expo Go) and web (React Native Web).

---

## 🚀 Project Overview

**prin_shop** is an app designed to make sending files to print shops fast, reliable, and simple. Customers can upload files, select print options, and send orders directly to the shop. The project is currently in active development (mobile + web).

Key goals:

* Fast, minimal UI for users to upload and confirm print jobs
* Cross-platform compatibility (iOS/Android/Web) using Expo and React Native Web
* Scalable backend API using Node.js and MongoDB for order storage and file metadata
* Easy onboarding for print shop staff with order status and file download

---

## ✨ Features (Planned / Implemented)

* Upload files (PDF, JPG, PNG, etc.)
* Preview uploaded file(s)
* Select print settings (paper size, color/BW, copies)
* Send order to print shop with contact and payment details placeholder
* Order listing & status for print shop staff
* Cross-platform support: mobile (Expo Go) and web

---

## 🧰 Tech Stack

**Frontend**

* React Native (Expo)
* Expo Router
* React Native Web (for web build)
* Tailwind-style utility classes (via your current setup)

**Backend**

* Node.js + Express
* MongoDB / Mongoose
* File storage: Local uploads (dev) — upgradeable to AWS S3 / Cloud storage

**Other**

* Git & GitHub for source control
* Expo Go for mobile testing

---

## 📁 Project Structure (example)

```
/prin_shop
├─ ---backend               # Expo / React Native app (screens, components)
│  ├─ models       # Welcome / routing entry
│  ├─ node_modules
│  └─ routes
|  ├─ uploaads
├─ /chatapp             # Node/Express backend
│  ├─ index.js
│  ├─ /routes
│  └─ /models
├─ global.css
├─ package.json
└─ README.md
```

---

## 🔧 Prerequisites

* Node.js (v16+ recommended)
* npm or yarn
* Expo CLI (`npm i -g expo-cli` or use `npx expo`)
* MongoDB (local or Atlas)

---

## 📥 Quickstart — Frontend (Expo)

1. Clone the repo:

```bash
git clone https://github.com/<your-username>/Print_shop.git
cd Print_shop
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start Expo:

```bash
npx expo start
# or
expo start
```

4. Run on device or web:

* For mobile: open the Expo Go app and scan the QR code.
* For web: press `w` in the Expo console or run `expo start --web`.

---

## 🖥️ Quickstart — Backend (Node + MongoDB)

1. Move to the server folder:

```bash
cd server
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file (example):

```
PORT=4000
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.example.mongodb.net/prin_shop
JWT_SECRET=your_jwt_secret
```

4. Start the server (dev):

```bash
npm run dev
# or
node index.js
```

5. Confirm API is reachable (example):

```
GET http://localhost:4000/api/orders
```

---

## 🔗 Update Local Remote (if you renamed locally)

If you renamed your local folder and also renamed the GitHub repo, update your `origin` remote:

```bash
git remote set-url origin https://github.com/<your-username>/Print_shop.git
```

Then commit & push:

```bash
git add README.md
git commit -m "Add project README"
git push origin main
```

---

## 🧪 Testing & Debugging Tips

* Use `console.log` and remote logs for the Node server.
* Use Expo's web build for faster iteration when working on UI.
* For file uploads in development, test with small PDF/JPG files first.

---

## 📞 Contact / Author

Built by **Monish** — feel free to open issues or reach out via GitHub.

---
