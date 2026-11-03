<div align="center">
  <h1>dwiwijaya.com</h1>
  <p>🔥 A personal website thoughtfully crafted using Next.js, Tailwind CSS, SWR, and Supabase</p>
</div>
<br />

![Preview](/assets/preview-light.png)

## Introduction

Welcome to my personal website repository! This platform is more than just a website—it's a space to share knowledge, insights, and tools. Built from scratch starting in June 2024, it incorporates cutting-edge technologies and draws inspiration from <a href="https://aulianza.id/" target="_blank" rel="noopener noreferrer">Aulianza's website</a>.  

This is an evolving project where I constantly strive to enhance features and deliver better functionality. Feel free to explore, use, or modify it as a reference for your own projects.  

If you find this repository useful, show your support with a ⭐. Got suggestions or questions? I'd love to hear from you! 🧑‍💻  
<br /><br />

## Tech Stack

This project leverages the following technologies and tools:  

- ◼️ Next.js 13.5.6
- ⚛️ React 18
- 💠 Tailwind CSS 3
- 🅰️ Font Awesome Pro
- 💢 React Icons
- ➰ Framer Motion
- 〰️ SWR
- 🔥 Supabase
- 📧 EmailJS
- 📱 PWA
- 🧿 Absolute Import and Path Alias
- 📏 ESLint
- ✨ Prettier
- 📌 Conventional Commit Lint
<br />

## Features

Here are the key features that make this website unique:

- ### 💬 Realtime Guestbook  
  A dynamic chat-powered guestbook built with Firebase. Visitors can leave messages that appear instantly on the website.
- ### 🌐 Multilingual Support  
  Providing content in both Indonesian and English to cater to a diverse audience.
- ### 🗳 Projects  
  This section showcases projects fetched from a Supabase PostgreSQL database using Prisma. Data is retrieved with ISR (Incremental Static Regeneration) and SSR (Server-Side Rendering) for project details.
<br /><br />

## Performance

- **PageSpeed Insights**  
  [Performance report](https://pagespeed.web.dev/analysis/https-dwiwijaya-com/spw0h9zc7j?form_factor=desktop)  

  ![PageSpeed Insights](/assets/pagespeed.png)

- **GTmetrix**  
  [Performance report](https://gtmetrix.com/reports/dwiwijaya.com/K78O0zLh/)  

  ![GTmetrix](/assets/gtmetrix.png)
<br /><br />

## Future Development Plans

Here’s what’s on the horizon for this project:  

1. **Migration to Supabase**  
   Complete migration of backend functionalities to Supabase for improved scalability and performance.  
   *Status: Not started yet.*  

2. **Feature Blog**  
   The blog feature is in maintenance and temporarily accessible at [https://dev.dwiwijaya.com](https://dev.dwiwijaya.com).  
   *Status: On hold due to other priorities.*  

3. **Redesign Homepage Layout**  
   Revamp the homepage for a cleaner and more modern look, optimizing user experience while keeping it visually appealing.  
   *Status: Planned.*  
<br /><br />

## Getting Started

Follow these simple steps to get the project running locally:

### 1. Clone the Repository  

You can clone this repository in three different ways:  

- **Using Git**  
  ```bash
  git clone https://github.com/dwiwijaya/dwiwijaya.com
  ```

- **Using `create-next-app`**  
  ```bash
  npx create-next-app -e https://github.com/dwiwijaya/dwiwijaya.com project-name
  ```

- **Using `degit`**  
  ```bash
  npx degit dwiwijaya/dwiwijaya.com YOUR_APP_NAME
  ```

### 2. Install Dependencies  

To ensure proper setup, it's recommended to use **yarn** for installing dependencies:  
```bash
yarn install
```  

### 3. Configure `.env`  

Copy the `.env.example` file to `.env` and replace placeholders with your credentials. For third-party integrations like Spotify, Firebase, and Supabase, refer to their respective documentation.  

### 4. Start Development Server  

Launch the server locally using this command:  
```bash
yarn dev
```  

Then, open [http://localhost:3000](http://localhost:3000) to view the website. You can start customizing it by modifying files in the `src` directory.
<br /><br />

## License  

This project is licensed under the [GPL-3.0 license](https://github.com/dwiwijaya/dwiwijaya.com/blob/master/LICENSE).  
Feel free to use, modify, and share it while adhering to the terms.
