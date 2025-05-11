const courses = [
  {
    title: "Основы Python",
    category: "programming",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQz9S64_TgjHuo-9BRQcn62nZc2wV_V32cw&s",
    link: "https://www.google.com/aclk?sa=L&ai=DChsSEwjbraeNkpuNAxVmC6IDHXl3Et0YACICCAEQABoCbGU&co=1&gclid=EAIaIQobChMI262njZKbjQMVZguiAx15dxLdEAAYAiAAEgLUL_D_BwE&cce=1&sig=AOD64_1GtRxx-jMr096czTxlwWqNSQfAcQ&q&adurl&ved=2ahUKEwjWk6ONkpuNAxWAGxAIHeGwKE4Q0Qx6BAgUEAE"
  },
  {
    title: "JavaScript с нуля",
    category: "programming",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGjg7I5J5-LwZ1XKbIhBa3qcICCQR_vVRwg&s",
    link: "https://www.google.com/aclk?sa=L&ai=DChsSEwiDmY_CkpuNAxUDFaIDHXYdPLsYACICCAEQABoCbGU&co=1&gclid=EAIaIQobChMIg5mPwpKbjQMVAxWiAx12HTy7EAAYAiAAEgKdQPD_BwE&cce=1&sig=AOD64_0n3MUUGA-HA5E_T4JPKy2uYZeHUw&q&adurl&ved=2ahUKEwiKoYrCkpuNAxX7FBAIHciHAfUQ0Qx6BAgWEAE"
  },
  {
    title: "UI/UX в Figma",
    category: "design",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWCeOWaQM9AjWbyyIh5ZhmXwl6J9uey0m4zQ&s",
    link: "https://itproger.com/course/figma"
  }
];

function renderCourses() {
  courses.forEach(course => {
    const grid = document.querySelector(`.course-grid[data-category="${course.category}"]`);
    if (grid) {
      const card = document.createElement('div');
      card.className = 'course-card';
      card.innerHTML = `
        <img src="${course.img}" alt="${course.title}">
        <div class="info">
          <h3>${course.title}</h3>
          <a href="${course.link}" target="_blank">Перейти к курсу</a>
        </div>
      `;
      grid.appendChild(card);
    }
  });
}

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section, .quick-links, .follow-us');
  const navLinks = document.querySelectorAll('nav a');

  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 80;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

function animateCards() {
  const cards = document.querySelectorAll('.course-card');
  const options = { threshold: 0.1 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, options);

  cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    observer.observe(card);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  renderCourses();
  setTimeout(animateCards, 200);
});

// Тема
const toggleBtn = document.getElementById("toggleTheme");

toggleBtn.addEventListener("click", () => {
  const light = document.body.classList.toggle("light-theme");

  if (light) {
    document.documentElement.style.setProperty("--bg", "#f7f7f7");
    document.documentElement.style.setProperty("--text", "#1c1c1c");
    document.documentElement.style.setProperty("--header", "#6200ea");
    document.documentElement.style.setProperty("--card", "#ffffff");
    document.documentElement.style.setProperty("--link", "#0077cc");
    document.documentElement.style.setProperty("--hover", "#e91e63");
    document.documentElement.style.setProperty("--accent", "#ff5722");
  } else {
    document.documentElement.style.setProperty("--bg", "#0e0e0e");
    document.documentElement.style.setProperty("--text", "#ffffff");
    document.documentElement.style.setProperty("--header", "#6a00ff");
    document.documentElement.style.setProperty("--card", "#1c1c1c");
    document.documentElement.style.setProperty("--link", "#00b7ff");
    document.documentElement.style.setProperty("--hover", "#ff0040");
    document.documentElement.style.setProperty("--accent", "#ffa726");
  }
});