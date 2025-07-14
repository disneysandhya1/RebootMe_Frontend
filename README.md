📦 RebootMe Backend

RebootMe is a mental wellness companion designed to help individuals take regular care of their emotional and physical well-being through hydration tracking, mood-based tips, stretch suggestions, and motivational quotes. This repository contains the backend services that support the RebootMe mobile app.

---

🧠 Features

✅ Mental health quote API
✅ Randomized stretch suggestion endpoint
✅ Mood-based wellness tips
✅ Eye strain reminder scheduler
✅ Daily motivational quote generation
✅ JSON-based API responses
✅ CORS-enabled for mobile communication

---

### 🚀 Getting Started

#### 1. Clone the repository

```
git clone https://github.com/disneysandhya1/Rebootme.git
cd Rebootme/workwell
```

#### 2. Create a virtual environment

```
python3 -m venv venv
source venv/bin/activate
```

#### 3. Install dependencies

```
pip install -r requirements.txt
```

#### 4. Run the application

If using Flask:

```
export FLASK_APP=app.py
export FLASK_ENV=development
flask run
```

If using FastAPI:

```
uvicorn app:app --reload
```

---

### 🔗 API Endpoints

| Method | Endpoint     | Description                            |
| ------ | ------------ | -------------------------------------- |
| GET    | `/quote`     | Get the daily motivational quote       |
| GET    | `/stretch`   | Get a random stretch suggestion        |
| GET    | `/mood-tips` | Get tips based on mood index           |
| GET    | `/eye-break` | Returns the eye break timer suggestion |

> You can easily integrate these endpoints into the frontend React Native app in the `RebootMeApp` project.

---

### 📁 Folder Structure
```
workwell/
├── app.py                # Main backend application
├── utils.py              # Helper functions (quotes, tips, etc.)
├── data/                 # JSON files for quotes, stretches, tips
├── requirements.txt      # Dependencies
└── README.md             # Project documentation
```
---

### ⚙️ Technologies

* Python 3.9+
* Machine Learning
* Flask or FastAPI
* JSON
* REST API
* GitHub

---

### 📲 Related Projects

🔗 [RebootMe Frontend (React Native App)](https://github.com/disneysandhya1/RebootMe_Frontend)

---



```
RebootMe – Frontend

🚀 RebootMe is a mental wellness mobile application built with React Native and Expo, designed to help users maintain better mental health, hydration, and daily mindfulness through regular prompts and check-ins.

This repository contains the **frontend code** for the RebootMe app.

---

🌟 Features

- 💧 Water Tracker: Log your daily water intake.
- 😊 Mood Check-in: Choose how you feel and receive a wellness suggestion.
- 🙆 Stretch Reminders: Random stretch prompts on app open.
- 👁️ Eye Break Alerts: Encourages a 20-second eye break every 40 minutes.
- ✨ Motivational Quotes: Daily mental wellness quotes.
- 🔔 Push Notifications: Timed reminders for wellness actions.
- 📅 Streak Tracker: Tracks your consistent daily engagement.

---

### 📂 Folder Structure
```

RebootMeApp/
├── assets/
├── app/                  # Main screens and components
├── App.js                # Entry point (optional if using \_layout.tsx)
├── app.json              # App config for Expo
├── package.json
└── ...
````
---

🛠️ Installation & Running Locally

Prerequisites:

- Node.js & npm
- Expo CLI: `npm install -g expo-cli`
- Expo Go app (for mobile preview)

Steps:

```
git clone https://github.com/disneysandhya1/RebootMe_Frontend.git
cd RebootMeApp
npm install
npx expo start
````

Scan the QR code with the **Expo Go** app to view it on your phone.

---

## 🔗 Related Repositories

🔧 [RebootMe Backend (Python)](https://github.com/disneysandhya1/Rebootme)

---

## 👩‍💻 Author

**Disney Sandhya**
[LinkedIn](https://www.linkedin.com/in/disney-sandhya-gandikoda)

---

