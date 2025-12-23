// script.js
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  const toggle = document.getElementById('toggleTheme');
  const modal = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const projectButtons = document.querySelectorAll('[data-project]');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  // Year
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Theme: saved or prefers-color-scheme
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggle.innerHTML = '<i class="fa-regular fa-sun"></i>';
  }

  toggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      toggle.innerHTML = '<i class="fa-regular fa-moon"></i>';
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      toggle.innerHTML = '<i class="fa-regular fa-sun"></i>';
    }
  });

  // Projects data for modal
  const PROJECTS = {
    'secret-chat': {
      title: 'Secret Chat — Encrypted Messaging App',
      body: `
        <p><strong>Overview</strong>: WhatsApp-like chat app with end-to-end encryption using Ktor WebSockets and offline-first data handling (Room + Firebase).</p>
        <p><strong>Key features</strong>:
          <ul>
            <li>End-to-end encrypted messaging (Ktor WebSockets).</li>
            <li>Offline-first storage with Room and sync to Firebase when online.</li>
            <li>Accessible Compose UI and dark mode support.</li>
          </ul>
        </p>
        <p><strong>Tech:</strong> Kotlin · Jetpack Compose · Ktor · Firebase · Room · Coroutines</p>
        <p><strong>Links:</strong> <a href="https://github.com/Nikhil-Dev-R" target="_blank" rel="noopener">GitHub</a></p>
      `
    },
    'school-erp': {
      title: 'School ERP — Prototype',
      body: `
        <p><strong>Overview</strong>: Multi-role school ERP (Admin / Teacher / Student) prototype supporting Academics, Attendance, Exams, Inventory and Finance modules.</p>
        <p><strong>Key features</strong>:
          <ul>
            <li>Role-based navigation & screens.</li>
            <li>Realtime & offline data handling: Firebase + Room local caching.</li>
            <li>Fast prototyping using Jetpack Compose.</li>
          </ul>
        </p>
        <p><strong>Tech:</strong> Kotlin · Jetpack Compose · Firebase (Auth, Realtime) · Room</p>
        <p><strong>Links:</strong> <a href="https://github.com/Nikhil-Dev-R" target="_blank" rel="noopener">GitHub</a></p>
      `
    }
  };

  projectButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-project');
      const p = PROJECTS[key];
      if (!p) return;
      modalTitle.innerText = p.title;
      modalBody.innerHTML = p.body;
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  modalClose && modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal(); });

  // Mobile menu toggle
  hamburger && hamburger.addEventListener('click', () => {
    const open = mobileMenu.getAttribute('aria-hidden') === 'false';
    if (open) {
      mobileMenu.setAttribute('aria-hidden', 'true');
      mobileMenu.style.display = 'none';
      hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else {
      mobileMenu.setAttribute('aria-hidden', 'false');
      mobileMenu.style.display = 'block';
      hamburger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
  });

});
