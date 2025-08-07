const token = localStorage.getItem("token");
const roomForm = document.getElementById("roomForm");
const roomTable = document.querySelector("#roomTable tbody");

if (!token) {
    window.location.href = "index.html";
}

// ✅ Add Room
roomForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const roomNumber = document.getElementById("roomNumber").value;
    const type = document.getElementById("roomType").value;

    try {
        const res = await fetch("http://localhost:5000/api/rooms", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ roomNumber, type }),
        });

        const data = await res.json();
        if (res.ok) {
            loadRooms();
            roomForm.reset();
        } else {
            alert(data.error || "Room creation failed!");
        }
    } catch (err) {
        console.error(err);
    }
});

// ✅ Load Rooms
async function loadRooms() {
    try {
        const res = await fetch("http://localhost:5000/api/rooms", {
            headers: { Authorization: `Bearer ${token}` },
        });
        const rooms = await res.json();

        roomTable.innerHTML = "";
        rooms.forEach((room) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
        <td>${room.roomNumber}</td>
        <td>${room.type}</td>
        <td>${room.isBooked ? "Booked" : "Available"}</td>
        <td>${room.assignedTo ? room.assignedTo.name : "-"}</td>
        <td>
          <button class="btn btn-sm btn-danger" onclick="deleteRoom('${room._id}')">Delete</button>
        </td>
      `;
            roomTable.appendChild(tr);
        });
    } catch (err) {
        console.error(err);
    }
}

// ✅ Delete Room
async function deleteRoom(id) {
    if (!confirm("Are you sure you want to delete this room?")) return;

    try {
        const res = await fetch(`http://localhost:5000/api/rooms/${id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
        });

        if (res.ok) {
            loadRooms();
        } else {
            alert("Delete failed!");
        }
    } catch (err) {
        console.error(err);
    }
}

loadRooms();
