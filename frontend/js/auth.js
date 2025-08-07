document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (res.ok) {
            localStorage.setItem("token", data.token);
            window.location.href = "dashboard.html";
        } else {
            document.getElementById("msg").innerText = data.error || "Login failed!";
        }
    } catch (err) {
        console.error(err);
        document.getElementById("msg").innerText = "Something went wrong!";
    }
});

const token = localStorage.getItem("token");

const res = await fetch("http://localhost:5000/api/rooms", {
    headers: {
        "Authorization": `Bearer ${token}`
    }
});
