# Jashwanth Kandula Portfolio

This is the personal portfolio website of Jashwanth Kandula.  
It is built with Next.js and designed with a clean, modern, cool tone aesthetic.  
The site includes pages for About, Projects, Experience, Gallery, and Contact.

The project is fully responsive and ready for deployment on Netlify.

---

## Features

- Modern Next.js 14 application
- Clean cool tone design with Inter font
- Fully responsive layout
- Real project and experience data from resume
- Image gallery with lazy loading
- Contact form with working API route
- Reusable components for cards and layout
- Organized folder structure
- Netlify compatible build

---

## Folder Structure

```text
portfolio/
├── public/
│   └── images/
│       ├── profile.jpg
│       └── projects/
│           ├── calcflow.png
│           ├── edumentor.png 
│           ├── knowledge_graph.png
│           ├── moo_pipeline.png
│           ├── rag_pipeline.png
│           ├── intrusion_detection.png 
│           ├── career_chatbot.png
│           └── personality_engine.png
│           
├── src/
│   ├── app/
│   │   ├── layout.js
│   │   ├── globals.css
│   │   ├── page.js
│   │   ├── about/
│   │   |   ├── page.js
│   │   ├── projects/
│   │   |   ├── page.js
│   │   ├── experience/
│   │   |   ├── page.js
│   │   ├── contact/
│   │   |   ├── page.js
│   │   └── api/
│   │       └── contact/
│   │           └── route.js
|
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── ProjectCard.js
│   │   ├── ExperienceCard.js
│   │   └── SectionHeader.js
|   |
│   └── styles/
│       └── components.css
|
├── package.json
├── next.config.js
└── README.md
```


---

## Getting Started

### Install dependencies


npm install

### Run the development server


npm run dev

The site will be available at:


http://localhost:3000

---

## Build for production


npm run build npm start

---

## Deploying to Netlify

1. Push your project to GitHub.
2. Go to Netlify and create a new site from Git.
3. Select your repository.
4. Use the following settings:


Build command: npm run build Publish directory: .next

5. Enable the Next.js runtime in Netlify settings if prompted.

Netlify will automatically build and deploy your site.

---

## Contact Form API

The contact form sends a POST request to:


/api/contact

The API route is located at:


src/app/api/contact/route.js

It accepts the following fields:

- name
- email
- message

The route logs submissions to the server console.  
You can later integrate email services or databases if needed.

---

## Adding Images

Place your images inside:


public/images/

Project images go inside:

public/images/projects/

You can use any file names you prefer.

---

## Customization

You can update colors, spacing, and typography inside:


src/app/globals.css src/styles/components.css

Components are located in:


src/components/

Pages are located in:


src/app/

---

## Technologies Used

- Next.js 14
- React 18
- CSS modules and global styles
- Netlify deployment
- API routes for backend logic

---

## Author

**Jashwanth Kandula**  
Data Scientist and Machine Learning Engineer  
LinkedIn: https://www.linkedin.com/in/jashwanth-kandula  
GitHub: https://github.com/JashwanthK7
