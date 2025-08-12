'use client';

import React from 'react';

// Portfolio.jsx
// Usage:
// - Place this file in your Next.js app as a page or component (e.g. /app/page.jsx or /components/Portfolio.jsx)
// - Ensure Tailwind CSS is configured in your project (this file uses Tailwind utility classes)
// - Put your resume PDF at: /public/resume.pdf (or change the link below)
// - Replace placeholders (name, bio, project links, images) with your real content

export default function Portfolio() {
  const projects = [
    {
      title: 'Skymod Real Estate (Side Project)',
      desc: 'A property flip & listing platform built with .NET 8 (API), EF Core, AWS RDS, and React/Next.js frontend. Features: property CRUD, image uploads, filters, and auth.',
      tech: ['.NET 8', 'EF Core', 'React', 'Next.js', 'AWS (RDS, S3)'],
      github: 'https://github.com/MONISHAK7/Skymod.API',
      demo: '#',
      img: '/projects/skymod-screenshot.png'
    },
    // add more projects as needed
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 antialiased">
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">Monisha Kesavan — Software Engineer</h1>
            <p className="text-sm text-gray-500">.NET • C# • React • Next.js • AWS • System Design</p>
          </div>
          <nav className="space-x-4">
            <a href="#about" className="text-sm hover:underline">About</a>
            <a href="#projects" className="text-sm hover:underline">Projects</a>
            <a href="#resume" className="text-sm hover:underline">Resume</a>
            <a href="#contact" className="text-sm hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-4xl font-bold leading-tight">Software Engineer — .NET & React</h2>
          <p className="mt-4 text-gray-600">I build reliable, scalable backend systems in .NET and ship elegant, performant frontend experiences in React and Next.js. Experienced with cloud-native patterns on AWS, CI/CD, and production-grade system design for enterprise web apps.</p>

          <div className="mt-6 flex items-center gap-3">
            <a href="/resume.pdf" download className="inline-block bg-sky-600 text-white px-5 py-3 rounded-lg shadow hover:shadow-lg">Download Resume</a>
            <a href="#projects" className="inline-block border border-sky-600 text-sky-600 px-4 py-3 rounded-lg hover:bg-sky-50">View Projects</a>
          </div>

          <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-gray-700">
            <li className="px-3 py-2 bg-white rounded">.NET / C#</li>
            <li className="px-3 py-2 bg-white rounded">Entity Framework Core</li>
            <li className="px-3 py-2 bg-white rounded">React / Next.js</li>
            <li className="px-3 py-2 bg-white rounded">AWS (S3, RDS, CloudFront)</li>
            <li className="px-3 py-2 bg-white rounded">System Design</li>
            <li className="px-3 py-2 bg-white rounded">CI/CD / GitHub Actions</li>
          </ul>
        </div>

        <div className="w-48 h-48 md:w-72 md:h-72 bg-gradient-to-tr from-sky-400 to-indigo-600 rounded-2xl flex items-end justify-center p-4 text-white shadow-lg bg-cover bg-center"
        style={{ backgroundImage: "url('monisha.jpg')" }}
        >
          <div className="text-center">
            <p className="font-semibold">Monisha Kesavan</p>
            <p className="text-xs opacity-90">Software Engineer</p>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-5xl mx-auto px-6 py-10">
        <div className="bg-white rounded-lg p-6 shadow">
          <h3 className="text-2xl font-semibold">About Me</h3>
          <p className="mt-3 text-gray-600">I have X+ years building backend services and web applications with .NET and modern frontends with React. I enjoy designing robust data models with EF Core, optimizing backend performance, and partnering with product/design to deliver polished UI. I have experience operating apps in AWS, using RDS for relational data, S3 for assets, and automating deployments via GitHub Actions / Amplify.</p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-semibold">Strengths</h4>
              <ul className="mt-2 text-sm text-gray-700 list-disc list-inside">
                <li>System design & architecture for scalable web apps</li>
                <li>High-quality, testable C# code & clean APIs</li>
                <li>UX-minded frontend development in React/Next.js</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Open to</h4>
              <ul className="mt-2 text-sm text-gray-700 list-disc list-inside">
                <li>.NET engineering roles (full-stack or backend)</li>
                <li>Technical leadership & system design interviews</li>
                <li>Remote or Melbourne-based opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-5xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-semibold mb-6">Projects</h3>
        <div className="grid gap-6">
          {projects.map((p) => (
            <article key={p.title} className="bg-white rounded-lg p-5 shadow flex flex-col md:flex-row gap-4 items-start">
              <img src={p.img} alt={p.title} className="w-full md:w-56 h-40 object-cover rounded-lg bg-gray-100" />
              <div className="flex-1">
                <h4 className="text-lg font-semibold">{p.title}</h4>
                <p className="mt-2 text-gray-600">{p.desc}</p>
                <p className="mt-3 text-sm text-gray-700">Tech: {p.tech.join(' • ')}</p>

                <div className="mt-4 flex items-center gap-3">
                  <a href={p.github} target="_blank" rel="noreferrer" className="text-sm inline-block border px-3 py-2 rounded hover:bg-gray-50">View Code</a>
                  {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="text-sm inline-block bg-sky-50 text-sky-600 px-3 py-2 rounded">Live Demo</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="resume" className="max-w-5xl mx-auto px-6 py-10">
        <div className="bg-white rounded-lg p-6 shadow flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">Resume</h3>
            <p className="text-gray-600 mt-1">Download a printer-friendly PDF of my resume.</p>
          </div>
          <a href="/resume.pdf" download className="bg-sky-600 text-white px-5 py-3 rounded-lg shadow hover:shadow-lg">Download Resume</a>
        </div>
      </section>

      <section id="contact" className="max-w-5xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-semibold mb-4">Contact</h3>
        <div className="bg-white rounded-lg p-6 shadow">
          <p className="text-gray-700">Email: <a href="mailto:youremail@example.com" className="text-sky-600">youremail@example.com</a></p>
          <p className="text-gray-700 mt-2">LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="text-sky-600">linkedin.com/in/yourprofile</a></p>
          <p className="text-gray-700 mt-2">GitHub: <a href="https://github.com/MONISHAK7" target="_blank" rel="noreferrer" className="text-sky-600">github.com/yourusername</a></p>

          <form action="/api/contact" method="post" className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" placeholder="Your name" className="p-3 border rounded" />
            <input name="email" placeholder="Your email" className="p-3 border rounded" />
            <textarea name="message" placeholder="Message" className="md:col-span-2 p-3 border rounded h-28" />
            <button type="submit" className="md:col-span-2 bg-sky-600 text-white px-4 py-3 rounded">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="mt-12 py-6 border-t bg-white">
        <div className="max-w-5xl mx-auto px-6 text-sm text-gray-600">© {new Date().getFullYear()} Monisha Kesavan — Built with .NET, React, Next.js and AWS</div>
      </footer>
    </main>
  );
}
