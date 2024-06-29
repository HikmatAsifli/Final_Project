import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import forgotPassword from '../../../assets/images/page/forgot_password.svg';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await fetch('http://localhost:4404/api/users/forgotPassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const result = await response.json();

            if (response.ok) {
                setSuccess('Password reset link has been sent to your email.');
            } else {
                setError(result.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setError('Failed to connect to the server. Please try again later.');
        }
    };

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
                        <div className="col-xl-4 col-lg-6 col-md-12 m-auto">
                            <div className="login_wrap widget-taber-content background-white">
                                <div className="padding_eight_all bg-white">
                                    <div className="heading_s1">
                                        <img
                                            className="border-radius-15"
                                            src={forgotPassword}
                                            alt=""
                                        />
                                        <h2 className="mb-15 mt-15">Forgot your password?</h2>
                                        <p className="mb-30">
                                            Not to worry, we got you! Let’s get you a new password. Please
                                            enter your email address or your Username.
                                        </p>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Username or Email *"
                                            />
                                        </div>
                                        <div className="login_footer form-group mb-50">
                                            <div className="chek-form">
                                                <div className="custome-checkbox">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        name="checkbox"
                                                        id="exampleCheckbox1"
                                                        defaultValue=""
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="exampleCheckbox1"
                                                    >
                                                        <span>I agree to terms &amp; Policy.</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <Link className="text-muted" to="#">
                                                Learn more
                                            </Link>
                                        </div>
                                        <div className="form-group">
                                            <button
                                                type="submit"
                                                className="btn btn-heading btn-block hover-up"
                                                name="login"
                                            >
                                                Reset password
                                            </button>
                                        </div>
                                        {error && <p className="text-danger">{error}</p>}
                                        {success && <p className="text-success">{success}</p>}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ForgotPassword;
