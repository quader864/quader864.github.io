// === Scroll Animation Logic ===
const sections = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

sections.forEach(section => observer.observe(section));


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

            const response = await fetch("https://api-verifier.onrender.com/web-register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ firstName, lastName, email, password })
            });

            const data = await response.json();
            const msg = document.getElementById("message");

            if (response.status === 201) {
                msg.innerText = "✅ Account created!";
                setTimeout(() => {
                    window.location.href = `/users/${encodeURIComponent(email)}`;
                }, 1000);
            } else {
                msg.innerText = "❌ " + data.message;
            }
        });
    }
});
