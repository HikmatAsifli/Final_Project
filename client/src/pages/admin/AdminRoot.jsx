import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../../layout/admin/Header/Header';
import axios from 'axios';

const AdminRoot = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [user, setUser] = useState(null); // State for user data
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem("authToken"); // Retrieve JWT token from storage
                if (!token) {
                    throw new Error('No token found');
                }
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}` // Send token in Authorization header
                    }
                };
                const response = await axios.get('http://localhost:4404/api/users/profile', config);
                const userData = response.data.user; // Assuming user data is nested under 'user' key
                setUser(userData);
                if (userData.role === 'admin') {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                    navigate('/'); // Redirect non-admin users to home or another route
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                setIsAdmin(false); // Ensure isAdmin is false on error
            }
        };
    
        fetchUserData();
    }, [navigate]);

    return (
        <div>
            <Header />
            {isAdmin ? <Outlet /> : <div>You are not authorized to view this page.</div>}
        </div>
    );
};

export default AdminRoot;
