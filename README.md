<div align="center">

# 🍕 Pizza Paradise

### *A Full-Stack Pizza Ordering App with AI Integration via Groq SDK*

[![React](https://img.shields.io/badge/Frontend-React%20%2F%20Vite-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js%20%2F%20Express-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![FastAPI](https://img.shields.io/badge/Python-FastAPI-009688?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=for-the-badge&logo=docker)](https://www.docker.com/)
[![TailwindCSS](https://img.shields.io/badge/Styles-Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

---

> Order your favourite pizza, track it in real time, and get AI-powered recommendations — all in one beautiful, blazing-fast app. 🔥

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Environment Setup](#-environment-setup)
- [Method 1 — Running with Docker *(Recommended)*](#-method-1--running-with-docker-recommended)
- [Method 2 — Running Without Docker *(Manual Setup)*](#-method-2--running-without-docker-manual-setup)
- [MongoDB Connection Reference](#-mongodb-connection-reference)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)

---

## 🌟 Overview

**Pizza Paradise** is a modern, production-ready full-stack web application that lets users browse a menu, customise and order pizzas, and receive smart AI-powered suggestions — all powered by the **Groq SDK**. The stack is fully containerised with **Docker Compose** for a one-command setup, but also supports a fully manual local development workflow.

| Feature | Description |
|---|---|
| 🛒 **Online Ordering** | Browse the full menu and place orders instantly |
| 🤖 **AI Recommendations** | Groq-powered suggestions based on user preferences |
| 📦 **Containerised** | Full Docker Compose support with isolated networking |
| ⚡ **Lightning Fast** | Vite-powered frontend with hot module replacement |
| 🔐 **Secured DB** | MongoDB with authentication and persistent volumes |

---

## 🏗 Tech Stack

### Frontend — `./client`
| Technology | Purpose |
|---|---|
| **Vite** | Ultra-fast build tool & dev server |
| **React / Vue** | UI component framework |
| **Tailwind CSS** | Utility-first styling |
| **Port** | `5173` |

### Node.js Backend — `./server/node-api`
| Technology | Purpose |
|---|---|
| **Node.js** (v20+) | JavaScript runtime |
| **Express** | REST API framework |
| **Mongoose** | MongoDB object modelling (ODM) |
| **Groq SDK** | AI integration & smart recommendations |
| **Port** | `3000` |

### Python Backend — `./server/python-api` *(Optional / Future)*
| Technology | Purpose |
|---|---|
| **Python** (3.11+) | Runtime |
| **FastAPI** | High-performance async API framework |
| **venv** | Isolated Python virtual environment |

### Database
| Technology | Purpose |
|---|---|
| **MongoDB** | NoSQL document database |
| **Official Docker Image** | `mongo` (latest stable) |
| **Port** | `27017` |

---

## ✅ Prerequisites

Before you begin, make sure the following software is installed on your machine.

### For Docker Setup (Method 1)
| Software | Minimum Version | Download |
|---|---|---|
| **Docker Desktop** | Latest | [docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop/) |

> Docker Desktop includes both the Docker Engine and Docker Compose. No other tools are needed for Method 1.

### For Manual Setup (Method 2)
| Software | Minimum Version | Download |
|---|---|---|
| **Node.js** | v20.0.0+ | [nodejs.org](https://nodejs.org/) |
| **Python** | 3.11+ | [python.org](https://www.python.org/downloads/) |
| **MongoDB Community Server** | 7.x | [mongodb.com](https://www.mongodb.com/try/download/community) |
| **MongoDB Compass** | Latest | [mongodb.com/products/compass](https://www.mongodb.com/products/compass) *(optional, for GUI)* |

---

## 🔑 Environment Setup

The Node.js backend requires a `.env` file to store sensitive credentials. This file is **never committed to Git**.

### Step 1 — Create the `.env` file

Navigate to `./server/node-api/` and create a file named `.env`:

```bash
# From the project root
touch server/node-api/.env
```

### Step 2 — Populate the `.env` file

Open `./server/node-api/.env` in your editor and add the following keys:

```env
# ──────────────────────────────────────────────
#  Pizza Paradise — Node.js Backend Environment
# ──────────────────────────────────────────────

# Groq AI SDK — get your free key at: https://console.groq.com/
GROQ_API_KEY=your_groq_api_key_here

# MongoDB Connection String
# ⚠️  Use the DOCKER string when running via Docker Compose
# ⚠️  Use the LOCAL string when running manually on your host machine

# 🐳 Docker / Inside the pizza-network:
# MONGODB_URI=mongodb://admin:qwerty@pizza-paradise-database:27017/pizza-paradise?authSource=admin

# 💻 Local / Running directly on your host:
MONGODB_URI=mongodb://admin:qwerty@localhost:27017/pizza-paradise?authSource=admin
```

> **Important:** Only one `MONGODB_URI` line should be active at a time. Comment out the one you are not using by adding a `#` at the start of the line.

---

## 🐳 Method 1 — Running with Docker *(Recommended)*

This is the **easiest and fastest** way to get the entire application running. Docker Compose will automatically build all images, create an isolated network, and wire every service together — with a single command.

### How it works

The `docker-compose.yaml` file defines three services:

| Service | Container Name | Image |
|---|---|---|
| `database` | `pizza-paradise-database` | `mongo` (official) |
| `node-api` | `pizza-paradise-node-api` | Built from `./server/node-api/Dockerfile` |
| `client` | `pizza-paradise-client` | Built from `./client/Dockerfile` |

All three services are connected to an isolated **bridge network** called `pizza-network`, and MongoDB data is stored in a **named volume** so it persists between restarts.

---

### Step 1 — Update your `.env` for Docker

Open `./server/node-api/.env` and make sure the **Docker** connection string is active:

```env
# ✅ Active for Docker:
MONGODB_URI=mongodb://admin:qwerty@pizza-paradise-database:27017/pizza-paradise?authSource=admin

# 🚫 Comment out the local one:
# MONGODB_URI=mongodb://admin:qwerty@localhost:27017/pizza-paradise?authSource=admin
```

> The hostname `pizza-paradise-database` is the **container name** of the MongoDB service. Docker's internal DNS resolves this name automatically within `pizza-network`.

---

### Step 2 — Build and Start All Services

Run this command from the **project root** (where `docker-compose.yaml` lives):

```bash
docker compose up -d --build
```

| Flag | Meaning |
|---|---|
| `up` | Create and start all containers |
| `-d` | Detached mode — runs in the background |
| `--build` | Force a fresh image build before starting |

You should see output like this:

```
✔ Network pizza-network          Created
✔ Volume  pizza-paradise-db-data Created
✔ Container pizza-paradise-database  Started
✔ Container pizza-paradise-node-api  Started
✔ Container pizza-paradise-client    Started
```

---

### Step 3 — Access the App

Once all containers are running, open your browser:

| Service | URL |
|---|---|
| 🖥 **Frontend** | [http://localhost:5173](http://localhost:5173) |
| ⚙️ **Node.js API** | [http://localhost:3000](http://localhost:3000) |
| 🍃 **MongoDB** | `localhost:27017` *(connect via MongoDB Compass)* |

---

### Useful Docker Management Commands

```bash
# ─── View live logs from all services ────────────────────────────
docker compose logs -f

# ─── View logs from a specific service only ──────────────────────
docker compose logs -f node-api
docker compose logs -f database

# ─── Stop all containers (data is preserved in the volume) ───────
docker compose down

# ─── Stop all containers AND delete all data volumes ─────────────
docker compose down -v

# ─── Restart a single service without rebuilding ─────────────────
docker compose restart node-api

# ─── Rebuild and restart a single service ────────────────────────
docker compose up -d --build node-api

# ─── Check the status of all running containers ──────────────────
docker compose ps
```

> **Tip:** Use `docker compose down -v` only when you want to completely wipe the database and start fresh. Normal restarts should use `docker compose down` to keep your data safe.

---

## 💻 Method 2 — Running Without Docker *(Manual Setup)*

Use this method if you prefer to run each service directly on your host machine — useful for deeper debugging or if Docker is unavailable.

---

### Step 1 — Start a Local MongoDB Instance

You need MongoDB running locally with authentication enabled.

**Option A — Using MongoDB Compass**

1. Open **MongoDB Compass** and connect to `mongodb://localhost:27017`
2. Create a new user with the following credentials via the shell or UI:

```js
use admin
db.createUser({
  user: "admin",
  pwd: "qwerty",
  roles: [{ role: "root", db: "admin" }]
})
```

**Option B — Using `mongod` directly**

```bash
# Start mongod with auth enabled
mongod --auth --port 27017 --dbpath /your/data/path
```

Once MongoDB is running, verify the connection string you will use:

```
mongodb://admin:qwerty@localhost:27017/pizza-paradise?authSource=admin
```

---

### Step 2 — Update your `.env` for Local Development

Open `./server/node-api/.env` and make sure the **local** connection string is active:

```env
# 🚫 Comment out the Docker one:
# MONGODB_URI=mongodb://admin:qwerty@pizza-paradise-database:27017/pizza-paradise?authSource=admin

# ✅ Active for local:
MONGODB_URI=mongodb://admin:qwerty@localhost:27017/pizza-paradise?authSource=admin
```

---

### Step 3 — Start the Node.js Backend

Open a **new terminal window** and run:

```bash
# Navigate to the Node.js backend folder
cd server/node-api

# Install all dependencies (only needed the first time)
npm install

# Start the server
node server.js
```

You should see a message like:

```
✅ Connected to MongoDB
🚀 Server running on http://localhost:3000
```

---

### Step 4 — Start the Frontend

Open **another new terminal window** and run:

```bash
# Navigate to the frontend folder
cd client

# Install all dependencies (only needed the first time)
npm install

# Start the Vite development server
npm run dev
```

You should see:

```
  VITE v5.x.x  ready in 300ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.x.x:5173/
```

---

### Step 5 — Access the App

| Service | URL |
|---|---|
| 🖥 **Frontend** | [http://localhost:5173](http://localhost:5173) |
| ⚙️ **Node.js API** | [http://localhost:3000](http://localhost:3000) |

---

### (Optional) Step 6 — Start the Python FastAPI Backend

```bash
# Navigate to the Python backend folder
cd server/python-api

# Create a virtual environment (only needed the first time)
python -m venv venv

# Activate the virtual environment
# On Windows:
venv\Scripts\activate
# On macOS / Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start the FastAPI dev server
uvicorn main:app --reload --port 8000
```

---

## 🔗 MongoDB Connection Reference

This section summarises the correct connection strings depending on where the application is running.

### ⚠️ Critical Note on `?authSource=admin`

MongoDB requires that you specify **where the authenticating user was created**. In this project, the `admin` user is defined in the `admin` database. Without `?authSource=admin` appended to the connection string, **Mongoose will fail to authenticate** even if the username and password are correct.

**Always include `?authSource=admin` at the end of the connection string.**

---

| Context | Connection String |
|---|---|
| 🐳 **Inside Docker** (`pizza-network`) | `mongodb://admin:qwerty@pizza-paradise-database:27017/pizza-paradise?authSource=admin` |
| 💻 **Local host machine** | `mongodb://admin:qwerty@localhost:27017/pizza-paradise?authSource=admin` |

| Parameter | Value |
|---|---|
| **Username** | `admin` |
| **Password** | `qwerty` |
| **Host (Docker)** | `pizza-paradise-database` *(container name)* |
| **Host (Local)** | `localhost` |
| **Port** | `27017` |
| **Database name** | `pizza-paradise` |
| **Auth source** | `admin` |

---
<div align="center">

**Pizza Paradise** — *Because everyone deserves great pizza.*

</div>