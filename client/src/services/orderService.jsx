export const getMyOrders = async () => {
    const token = localStorage.getItem('authToken');
    if (!token) throw new Error('No auth token found');

    const response = await fetch('http://localhost:4404/api/orders/myorders', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch orders');
    }

    const data = await response.json();
    return data.orders;
};
