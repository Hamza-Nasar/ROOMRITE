const form = document.getElementById('bookingForm');
const feedback = document.getElementById('feedback');

// Example: Token value - tum apni logic se token get karna
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4OThlMmU3ZGI1NjhlYjAxNTAwZGE4OSIsImlhdCI6MTc1NDkxMDQ2MCwiZXhwIjoxNzU3NTAyNDYwfQ.zrGUYRcIjGw6PbS9BpYAl1FPzw8uAaP51Mji4eG0gcM";  // <-- Is jagah apna actual token dalna

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const bookingData = {
        guestName: form.guestName.value.trim(), 
        checkInDate: form.checkInDate.value,
        checkOutDate: form.checkOutDate.value,
        roomNumber: form.roomNumber.value.trim(),
        type: form.type.value,
    };

    if (new Date(bookingData.checkInDate) >= new Date(bookingData.checkOutDate)) {
        feedback.innerHTML = '<div class="alert alert-danger">Check-Out Date must be after Check-In Date.</div>';
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/api/rooms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`  // <-- Bearer token header
            },
            body: JSON.stringify(bookingData),
        });

        if (response.ok) {
            feedback.innerHTML = '<div class="alert alert-success">Room booked successfully!</div>';
            form.reset();
        } else {
            const err = await response.json();
            console.error("Backend error:", err);
            feedback.innerHTML = `<div class="alert alert-danger">${err.message || 'Booking failed.'}</div>`;
        }
    } catch (error) {
        feedback.innerHTML = `<div class="alert alert-danger">Error: ${error.message}</div>`;
    }

});


// const err = await response.json();
// console.log("Backend error:", err);
// feedback.innerHTML = `<div class="alert alert-danger">${err.message || 'Booking failed.'}</div>`;