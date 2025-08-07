const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "index.html";
}

fetch("http://localhost:5000/api/dashboard", {
    headers: {
        Authorization: `Bearer ${token}`,
    },
})
    .then((res) => res.json())
    .then((data) => {
        document.getElementById("totalRooms").innerText = data.totalRooms;
        document.getElementById("bookedRooms").innerText = data.bookedRooms;
        document.getElementById("availableRooms").innerText = data.availableRooms;
        document.getElementById("totalUsers").innerText = data.totalUsers;
    })
    .catch((err) => {
        console.error("Error fetching dashboard:", err);
        alert("Session expired or unauthorized.");
        localStorage.removeItem("token");
        window.location.href = "index.html";
    });

function logout() {
    localStorage.removeItem("token");
    window.location.href = "index.html";
}
