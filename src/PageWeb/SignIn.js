import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './auth.css';
import bgImg from '../movies/no-hard-feelings.jpeg';
import SignUp from "./SignUp";

function AuthPage() {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: "onChange" });
    const history = useHistory();
    // const [isChecked, setChecked] = useState(false);

    // State to toggle between Sign In and Sign Up
    const [isSignIn, setIsSignIn] = useState(true);

    // Toggle function
    const toggleForm = () => setIsSignIn(!isSignIn);

    const handleFormSubmit = (data) => {
        console.log("Form Submitted!", data);
        history.push("/"); // Redirect to Home after successful login
    };

    return (
        <div
        className="body"
         style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            padding: "40px",
            textAlign: "center",
          }}>

            <h1>{isSignIn ? "Sign In" : "Sign Up"}</h1>

            {/* Dynamically Render Form */}
            {isSignIn ? (
                <form onSubmit={handleSubmit(handleFormSubmit)} className="auth-form">
                    <h1 className="text-danger text-center" style={{ color: "#ff3700" }}>
                        Sign In
                    </h1>

                    {/* Email Address */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className={`form-control ${errors.email ? 'is-invalid' : 'is-valid'}`}
                            id="email"
                            placeholder="Enter your Email address"
                            autoComplete="off"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                    message: "Invalid email format"
                                }
                            })}
                        />
                        {errors.email && <span className="text-danger">{errors.email.message} ❌</span>}
                    </div>

                    {/* Password */}
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className={`form-control ${errors.password ? 'is-invalid' : 'is-valid'}`}
                            id="password"
                            placeholder="Enter your Password"
                            autoComplete="off"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters long"
                                }
                            })}
                        />
                        {errors.password && <span className="text-danger">{errors.password.message} ❌</span>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                        style={{ backgroundColor: "#ff3700", color: "#ffffff" }}
                        disabled={!isValid} // Disable button until form is valid
                    >
                        Sign In
                    </button>
                </form>
            ) : (
                <SignUp /> // Show SignUp component when isSignIn is false
            )}

            {/* Toggle Button */}
            <p className="mt-3">
                {isSignIn ? "Don't have an account?" : "Already have an account?"}
                <button
                    type="button"
                    className="btn btn-link"
                    onClick={toggleForm}
                    style={{ color: "#ff3700", textDecoration: "none", fontWeight: "bold" }}
                >
                    {isSignIn ? "Sign Up" : "Sign In"}
                </button>
            </p>
        </div>
    );
}

export default AuthPage;
