const token = localStorage.getItem("token");

if (!token) window.location.href = "index.html";

const roomSelect = document.getElementById("roomSelect");
const userSelect = document.getElementById("userSelect");
const allocationForm = document.getElementById("allocationForm");
const allocatedTable = document.querySelector("#allocatedRoomsTable tbody");

// Load available rooms
async function loadAvailableRooms() {
    const res = await fetch("http://localhost:5000/api/rooms", {
        headers: { Authorization: `Bearer ${token}` },
    });
    const rooms = await res.json();

    roomSelect.innerHTML = "<option value=''>Select Room</option>";
    rooms
        .filter((r) => !r.isBooked)
        .forEach((room) => {
            const opt = document.createElement("option");
            opt.value = room._id;
            opt.textContent = `${room.roomNumber} (${room.type})`;
            roomSelect.appendChild(opt);
        });

    // Also show booked rooms in table
    showBookedRooms(rooms.filter((r) => r.isBooked));
}

// Load users
async function loadUsers() {
    const res = await fetch("http://localhost:5000/api/auth/users", {
        headers: { Authorization: `Bearer ${token}` },
    });
    const users = await res.json();

    userSelect.innerHTML = "<option value=''>Select User</option>";
    users.forEach((user) => {
        const opt = document.createElement("option");
        opt.value = user._id;
        opt.textContent = `${user.name} (${user.email})`;
        userSelect.appendChild(opt);
    });
}

// Show booked rooms
function showBookedRooms(bookedRooms) {
    allocatedTable.innerHTML = "";

    bookedRooms.forEach((room) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
      <td>${room.roomNumber}</td>
      <td>${room.type}</td>
      <td>${room.assignedTo?.name || "-"}</td>
      <td><button class="btn btn-sm btn-danger" onclick="deallocate('${room._id}')">Deallocate</button></td>
    `;
        allocatedTable.appendChild(tr);
    });
}

// Allocate room
allocationForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const roomId = roomSelect.value;
    const userId = userSelect.value;

    const res = await fetch("http://localhost:5000/api/manage/allocate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ roomId, userId }),
    });

    const data = await res.json();
    if (res.ok) {
        alert("Room allocated!");
        loadAvailableRooms();
        allocationForm.reset();
    } else {
        alert(data.error || "Allocation failed!");
    }
});

// Deallocate room
async function deallocate(roomId) {
    if (!confirm("Are you sure you want to deallocate this room?")) return;

    const res = await fetch(`http://localhost:5000/api/manage/deallocate/${roomId}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
    });

    if (res.ok) {
        alert("Room deallocated!");
        loadAvailableRooms();
    } else {
        alert("Failed to deallocate room!");
    }
}

loadAvailableRooms();
loadUsers();
