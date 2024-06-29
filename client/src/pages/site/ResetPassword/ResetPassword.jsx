import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import resetPassword from '../../../assets/images/page/reset_password.svg';

const ResetPassword = () => {
    const { token } = useParams();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await fetch(`http://localhost:4404/api/users/resetPassword/${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password }),
            });

            const result = await response.json();

            if (response.ok) {
                setSuccess('Password has been successfully reset.');
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
                        <div className="col-xl-6 col-lg-8 col-md-12 m-auto">
                            <div className="row">
                                <div className="heading_s1">
                                    <img
                                        className="border-radius-15"
                                        src={resetPassword}
                                        alt=""
                                    />
                                    <h2 className="mb-15 mt-15">Set new password</h2>
                                    <p className="mb-30">
                                        Please create a new password that you don’t use on any other
                                        site.
                                    </p>
                                </div>
                                <div className="col-lg-6 col-md-8">
                                    <div className="login_wrap widget-taber-content background-white">
                                        <div className="padding_eight_all bg-white">
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        required
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        placeholder="Password *"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        required
                                                        value={confirmPassword}
                                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                                        placeholder="Confirm your password *"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-heading btn-block hover-up"
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
                                <div className="col-lg-6 pl-50">
                                    <h6 className="mb-15">Password must:</h6>
                                    <p>Be between 9 and 64 characters</p>
                                    <p>Include at least two of the following:</p>
                                    <ol className="list-insider">
                                        <li>An uppercase character</li>
                                        <li>A lowercase character</li>
                                        <li>A number</li>
                                        <li>A special character</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ResetPassword;
