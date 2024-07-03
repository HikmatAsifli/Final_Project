import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getMyOrders } from '../../../services/orderService';

const Account = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const response = await fetch('http://localhost:4404/api/users/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }

        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        localStorage.removeItem('authToken');
        navigate('/login');
      }
    };

    const fetchUserOrders = async () => {
      try {
        const userOrders = await getMyOrders();
        setOrders(userOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchUserProfile();
    fetchUserOrders();
  }, [navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <main className="main pages">
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/" rel="nofollow">
              <i className="fi-rs-home mr-5" />
              Home
            </Link>
          </div>
        </div>
      </div>
      <div className="page-content pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 m-auto">
              <div className="row">
                <div className="col-md-3">
                  <div className="dashboard-menu">
                    <ul className="nav flex-column" role="tablist">
                      <li className="nav-item">
                        <Link
                          className={`nav-link ${activeTab === 'dashboard' ? 'active' : ''}`}
                          onClick={() => handleTabChange('dashboard')}
                          to="#dashboard"
                          role="tab"
                          aria-controls="dashboard"
                          aria-selected={activeTab === 'dashboard'}

                        >
                          <i className="fi-rs-settings-sliders mr-10" />
                          Dashboard
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className={`nav-link ${activeTab === 'orders' ? 'active' : ''}`}
                          onClick={() => handleTabChange('orders')}
                          to="#orders"
                          role="tab"
                          aria-controls="orders"
                          aria-selected={activeTab === 'orders'}
                        >
                          <i className="fi-rs-shopping-bag mr-10" />
                          Orders
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className={`nav-link ${activeTab === 'track-orders' ? 'active' : ''}`}
                          onClick={() => handleTabChange('track-orders')}
                          to="#track-orders"
                          role="tab"
                          aria-controls="track-orders"
                          aria-selected={activeTab === 'track-orders'}
                        >
                          <i className="fi-rs-shopping-cart-check mr-10" />
                          Track Your Order
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className={`nav-link ${activeTab === 'address' ? 'active' : ''}`}
                          onClick={() => handleTabChange('address')}
                          to="#address"
                          role="tab"
                          aria-controls="address"
                          aria-selected={activeTab === 'address'}
                        >
                          <i className="fi-rs-marker mr-10" />
                          My Address
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className={`nav-link ${activeTab === 'account-detail' ? 'active' : ''}`}
                          onClick={() => handleTabChange('account-detail')}
                          to="#account-detail"
                          role="tab"
                          aria-controls="account-detail"
                          aria-selected={activeTab === 'account-detail'}
                        >
                          <i className="fi-rs-user mr-10" />
                          Account details
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/login" onClick={() => localStorage.removeItem('authToken')}>
                          <i className="fi-rs-sign-out mr-10" />
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="tab-content account dashboard-content pl-50">
                    <div
                      className={`tab-pane fade ${activeTab === 'dashboard' ? 'active show' : ''}`}
                      id="dashboard"
                      role="tabpanel"
                      aria-labelledby="dashboard-tab"
                    >
                      <div className="card">
                        <div className="card-header">
                          <h3 className="mb-0">Hello {user.name}!</h3>
                        </div>
                        <div className="card-body">
                          <p>
                            From your account dashboard, you can easily check & view your <Link to="#">recent orders</Link>,<br />
                            manage your <Link to="#">shipping and billing addresses</Link> and <Link to="#">edit your password and account details.</Link>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`tab-pane fade ${activeTab === 'orders' ? 'active show' : ''}`}
                      id="orders"
                      role="tabpanel"
                      aria-labelledby="orders-tab"
                    >
                      <div className="card">
                        <div className="card-header">
                          <h3 className="mb-0">Your Orders</h3>
                        </div>
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th>Order</th>
                                  <th>Date</th>
                                  <th>Status</th>
                                  <th>Total</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                {orders && orders.length > 0 ? (
                                  orders.map(order => (
                                    <tr key={order._id}>
                                      <td>#{order._id}</td>
                                      <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                                      <td>{order.isPaid ? 'Paid' : 'Not Paid'}</td>
                                      <td>${order.totalPrice}</td>
                                      <td>
                                        <Link to="#" className="btn-small d-block">
                                          View
                                        </Link>
                                      </td>
                                    </tr>
                                  ))
                                ) : (
                                  <tr>
                                    <td colSpan="5">No orders found</td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`tab-pane fade ${activeTab === 'track-orders' ? 'active show' : ''}`}
                      id="track-orders"
                      role="tabpanel"
                      aria-labelledby="track-orders-tab"
                    >
                      <div className="card">
                        <div className="card-header">
                          <h3 className="mb-0">Orders tracking</h3>
                        </div>
                        <div className="card-body contact-from-area">
                          <p>
                            To track your order please enter your OrderID in the box
                            below and press "Track" button. This was given to you on
                            your receipt and in the confirmation email you should
                            have received.
                          </p>
                          <div className="row">
                            <div className="col-lg-8">
                              <form
                                className="contact-form-style mt-30 mb-50"
                                action="#"
                                method="post"
                              >
                                <div className="input-style mb-20">
                                  <label>Order ID</label>
                                  <input
                                    name="order-id"
                                    placeholder="Found in your order confirmation email"
                                    type="text"
                                  />
                                </div>
                                <div className="input-style mb-20">
                                  <label>Billing email</label>
                                  <input
                                    name="billing-email"
                                    placeholder="Email you used during checkout"
                                    type="email"
                                  />
                                </div>
                                <button
                                  className="submit submit-auto-width"
                                  type="submit"
                                >
                                  Track
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`tab-pane fade ${activeTab === 'address' ? 'active show' : ''}`}
                      id="address"
                      role="tabpanel"
                      aria-labelledby="address-tab"
                    >
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="card mb-3 mb-lg-0">
                            <div className="card-header">
                              <h3 className="mb-0">Billing Address</h3>
                            </div>
                            <div className="card-body">
                              <address>
                                {user.billingAddress}
                              </address>
                              <Link to="#" className="btn-small">
                                Edit
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="card">
                            <div className="card-header">
                              <h5 className="mb-0">Shipping Address</h5>
                            </div>
                            <div className="card-body">
                              <address>
                                {user.shippingAddress}
                              </address>
                              <Link to="#" className="btn-small">
                                Edit
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`tab-pane fade ${activeTab === 'account-detail' ? 'active show' : ''}`}
                      id="account-detail"
                      role="tabpanel"
                      aria-labelledby="account-detail-tab"
                    >
                      <div className="card">
                        <div className="card-header">
                          <h5>Account Details</h5>
                        </div>
                        <div className="card-body">
                          <form method="post" name="enq">
                            <div className="row">
                              <div className="form-group col-md-6">
                                <label>
                                  First Name <span className="required">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  name="name"
                                  type="text"
                                  value={user.firstName}
                                />
                              </div>
                              <div className="form-group col-md-6">
                                <label>
                                  Last Name <span className="required">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  name="phone"
                                  type="text"
                                  value={user.lastName}
                                />
                              </div>
                              <div className="form-group col-md-12">
                                <label>
                                  Display Name <span className="required">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  name="dname"
                                  type="text"
                                  value={user.displayName}
                                />
                              </div>
                              <div className="form-group col-md-12">
                                <label>
                                  Email Address <span className="required">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  name="email"
                                  type="email"
                                  value={user.email}
                                />
                              </div>
                              <div className="form-group col-md-12">
                                <label>Current Password</label>
                                <input
                                  className="form-control"
                                  name="password"
                                  type="password"
                                  placeholder="Leave blank to leave unchanged"
                                />
                              </div>
                              <div className="form-group col-md-12">
                                <label>New Password</label>
                                <input
                                  className="form-control"
                                  name="npassword"
                                  type="password"
                                  placeholder="Leave blank to leave unchanged"
                                />
                              </div>
                              <div className="form-group col-md-12">
                                <label>Confirm Password</label>
                                <input
                                  className="form-control"
                                  name="cpassword"
                                  type="password"
                                  placeholder="Leave blank to leave unchanged"
                                />
                              </div>
                              <div className="col-md-12">
                                <button
                                  type="submit"
                                  className="btn btn-fill-out submit font-weight-bold"
                                  name="submit"
                                  value="Submit"
                                >
                                  Save Change
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Account;
