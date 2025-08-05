// Dashboard.js
import React from 'react';
const Dashboard = () => <h1>Dashboard</h1>;
export default Dashboard;






// // src/components/Dashboard.jsx
// import React, { useEffect, useState } from 'react';
// import React from 'react';
// const Dashboard = () => <h1>Dashboard</h1>;
// export default Dashboard;

// // const Dashboard = () => {
// //     const [message, setMessage] = useState('');

// //     useEffect(() => {
// //         const fetchDashboard = async () => {
// //             try {
// //                 const token = localStorage.getItem('token'); // Get token from localStorage

// //                 const response = await fetch('http://localhost:5000/api/user/dashboard', {
// //                     headers: {
// //                         'Content-Type': 'application/json',
// //                         Authorization: `Bearer ${token}`, // Important
// //                     },
// //                 });

// //                 const data = await response.json();
// //                 setMessage(data.message);
// //             } catch (error) {
// //                 setMessage('Error fetching dashboard');
// //             }
// //         };

// //         fetchDashboard();
// //     }, []);

// //     return (
// //         <div>
// //             <h1>Dashboard</h1>
// //             <p>{message}</p>
// //         </div>
// //     );
// // };

// // export default Dashboard;
