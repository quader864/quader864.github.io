// === Scroll Animation Logic ===
// const sections = document.querySelectorAll('.fade-in');

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('fade-in');
//         }
//     });
// });

// sections.forEach(section => observer.observe(section));

import Scrollbar from 'smooth-scrollbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const scrollbar = Scrollbar.init(document.querySelector('#my-scrollbar'), {
    damping: 0.04, // try between 0.05 - 0.1 for buttery smooth
    alwaysShowTracks: true,
    continuousScrolling: false, // optional
  });

// Smooth scroll to anchor target
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      scrollbar.scrollIntoView(target, {
        offsetTop: 0,
        alignToTop: true,
        duration: 600,
        easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic
      });
    }
  });
});

// === Signup Form Logic (only runs on signup page) ===
document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");

    if (signupForm) {
        signupForm.addEventListener("submit", async function (e) {
            e.preventDefault();

            const firstName = document.getElementById("firstName").value;
            const lastName  = document.getElementById("lastName").value;
            const email     = document.getElementById("email").value;
            const password  = document.getElementById("password").value;

            try {
                const response = await fetch("https://api-verifier.onrender.com/web-register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ firstName, lastName, email, password })
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    console.error("Non-OK response:", errorText);
                    alert("❌ Something went wrong with the server.");
                    return;
                }

                const data = await response.json();

                if (response.status === 201) {
                    alert("✅ Account created!");
                    setTimeout(() => {
                        window.location.href = `https://quader864.github.io/users/?email=${encodeURIComponent(email)}`;

                    }, 1000);
                } else {
                    alert("❌ " + data.message);
                }

            } catch (err) {
                console.error("Fetch error:", err);
                alert("❌ Failed to register. Please try again.");
            }
        });
    }
});
