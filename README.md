Absolutely! Here’s a **clean, copy-paste-ready Markdown version** of the README you can directly put into `README.md` for your GitHub repo:

````markdown
# Meditation & Productivity App

A modern, responsive web application combining **meditation breathing exercises** and a **Pomodoro timer**, with **dynamic background themes**, smooth animations, and intuitive controls. Built with **Next.js** and **Tailwind CSS**, designed for desktop and mobile.

---

## Features

### Core

-   **Dynamic Backgrounds**
    -   Seamless, crossfading full-screen backgrounds
    -   Preloaded for smooth transitions
-   **Meditation Breather**
    -   Smoothly pulsating circle with radial gradient
    -   Responsive sizing for mobile devices
    -   Calming “Breathe in / Breathe out” instructions with smooth animations
-   **Pomodoro Timer**
    -   Visual circular countdown progress
    -   Work / Break mode with glowing theme
    -   Responsive layout and modern controls
-   **Sound Support**
    -   Ambient sounds selectable via dropdown
    -   Individual volume sliders for each category

### UI & UX

-   Modern, minimalistic design
-   Responsive for all screen sizes
-   Interactive overlays with subtle animations
-   Seamless integration of all components with consistent theme
-   Mobile-friendly buttons and controls

### Additional

-   **Ko-fi Button** for donations/support
-   Attribution / Impressum / Privacy links
-   Fullscreen toggle for immersive experience

---

## Demo

![Demo GIF or Screenshot](link-to-demo)

---

## Tech Stack

-   **Next.js 13** (App Router / Client Components)
-   **React** (functional components, hooks)
-   **Tailwind CSS** (responsive, modern styling)
-   **JavaScript / TypeScript**
-   **Optional:** Supabase for authentication and data storage

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/zellnerlu/calmodoro.git
cd calmodoro
```
````

2. **Install dependencies**

```bash
npm install
# or
yarn
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

---

## Usage

-   Click the **blob button** to open the overlay with settings
-   Change **background themes** via thumbnails
-   Start **Pomodoro timer** and follow the countdown
-   Enable **Meditation Breather** for guided breathing exercises
-   Adjust **sound and volume** per category
-   Toggle **fullscreen** mode for immersive experience

---

## Customization

-   **Background images:** Add/remove images in `/public/images/backgrounds/` and update `images.ts`
-   **Sounds:** Add your own sounds in `/constants.ts`
-   **Timers:** Adjust default `workMinutes` and `breakMinutes` in `PomodoroTimer` component

---

## Contributing

1. Fork the repository
2. Create a new branch for your feature
3. Make changes and commit
4. Push to your branch and create a Pull Request

---

## Acknowledgements

-   Inspired by **modern meditation and productivity apps**
-   Background images sourced from \[unsplash.com]
-   Sounds and music sourced from \[mixkit.co]
-   Ko-fi integration for donations
