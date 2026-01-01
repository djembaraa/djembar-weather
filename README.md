# Djembaraa Weather App

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Zustand](https://img.shields.io/badge/State-Zustand-orange?style=for-the-badge)
![CSS Modules](https://img.shields.io/badge/Style-CSS_Modules-blue?style=for-the-badge&logo=css3&logoColor=white)

SkyCast is a modern, high-performance weather monitoring application built with **Next.js 14 (App Router)**. This project demonstrates a **Clean Architecture** approach, focusing on scalability, maintainability, and user experience.

**Live Demo:** [https://djembar-weather.vercel.app/](https://djembar-weather.vercel.app/)

<img width="1920" height="1281" alt="screencapture-localhost-3000-2026-01-01-21_36_17" src="https://github.com/user-attachments/assets/05fbef7c-f784-40c2-a83b-d13e2a474bdc" />
<br>
<img width="1920" height="1281" alt="screencapture-localhost-3000-2026-01-01-21_36_24" src="https://github.com/user-attachments/assets/94891955-55a3-466b-a927-29bf1b5a1e53" />

---

## Table of Contents
- [Key Features](#key-features)
- [Tech Stack & Technical Decisions](#tech-stack--technical-decisions)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Author](#author)

---

## Key Features

* **Real-time Weather Data**: Integrated with OpenWeatherMap API for accurate forecasts.
* **Search & Smart History**: Search any city and access recent searches instantly via LocalStorage caching.
* **Fully Responsive**: Optimized layout for Mobile, Tablet, and Desktop devices.
* **Dark Mode Support**: Seamless Dark/Light theme switching without hydration mismatch (powered by next-themes).
* **Clean UI/UX**: Built with pure CSS Modules for scoped styling, ensuring zero style conflicts and high performance.
* **Robust Error Handling**: Graceful handling of API errors (e.g., City not found, Network issues).

---

## Tech Stack & Technical Decisions

This project follows industry best practices. Here is the rationale behind the technology choices:

### 1. Framework: Next.js 14 (App Router)
* **Why?** Chosen for its superior Server Side Rendering (SSR) capabilities and built-in image optimization.
* **Benefit:** Improved SEO, faster initial load times, and better routing management.

### 2. State Management: Zustand
* **Why?** Selected as a lightweight alternative to Redux (<1KB) but more powerful than Context API.
* **Implementation:** Manages global state for weather data, loading status, and persists search history automatically to LocalStorage.

### 3. HTTP Client: Axios
* **Why?** Provides better control than fetch, specifically for centralized configuration (Base URL) and request/response interceptors.

### 4. Styling: CSS Modules (Pure CSS)
* **Why?** Adheres to the requirement of using pure CSS while maintaining component-level scoping to prevent style conflicts.

### 5. Icons: Lucide React
* **Why?** The industry standard for lightweight, consistent, and tree-shakable vector icons.

---

## Project Structure

The folder structure is organized modularly to facilitate easy maintenance and scalability:

```bash
src/
├── app/                 # Next.js 14 App Router Pages (Routes)
├── components/          # Reusable UI Components
│   ├── Loader/          # Loading Spinner Component
│   ├── Navbar/          # Navigation Bar & Theme Toggle
│   ├── SearchBar/       # Search Input Logic
│   └── WeatherCard/     # Weather Data Visualization
├── lib/                 # Library Configurations (Axios Instance)
├── store/               # Global State Management (Zustand Store)
├── types/               # TypeScript Interfaces & Types
└── styles/              # Global CSS Variables (Colors, Theming)

## Getting Started

### 1. Prerequisites
Ensure you have Node.js (v18+) installed on your machine.

### 2. Installation
# Clone the repo
git clone [https://github.com/djembaraa/djembar-weather.git](https://github.com/djembaraa/djembar-weather.git)

# Navigate to folder
cd djembar-weather

# Install packages
npm install
# or
yarn install

### 3. Environment Setup
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here

### 4. Run Development Server
npm run dev

Open http://localhost:3000 in your browser to see the result.

Created by: 
Djembar Arafat
