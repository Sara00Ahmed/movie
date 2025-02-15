import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './auth.css';
import bgImg from '../movies/no-hard-feelings.jpeg';

function SignUp() {
    const { register, handleSubmit, getValues, formState: { errors, isValid } } = useForm({ mode: "onChange" });
    const [isChecked, setChecked] = useState(false);
    const history = useHistory();

    //change language dynamicly



    // State for password visibility
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleFormSubmit = (data) => {
        console.log("Form Submitted!", data);
        history.push("/");
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
          }}>            <form onSubmit={handleSubmit(handleFormSubmit)} className="auth-form">
                <h1 className="text-danger text-center" style={{ color: "#ff3700" }}>Sign Up</h1>

                {/* First Name */}
                <div className="mb-3">
                    <label htmlFor="FirstName" className="form-label">First Name</label>
                    <div className="input-group">
                    <input
                        type="text"
                        className={`form-control ${errors.FirstName ? 'is-invalid' : ''}`}
                        id="FirstName"
                        placeholder="Enter your First Name"
                        autoComplete="off"
                        {...register("FirstName", {
                            required: "First name is required",
                            minLength: { value: 2, message: "Must be at least 2 characters" },
                            pattern: { value: /^[A-Za-z]+$/, message: "Only letters allowed" }
                        })}
                    />
                    {errors.FirstName && (
                        <span className="text-danger position-absolute" style={{ top: '100%', left: 0, fontSize: '0.9rem' }}>
                            {errors.FirstName.message} ❌</span>
                        )}
                    {!errors.FirstName && (
                        <span className="text-success position-absolute" style={{ top: '100%', left: 0, fontSize: '0.9rem' }}>
                            Looks good! ✔</span>
                        )}
                </div>
            </div>

                {/* Second Name */}
                <div className="mb-3">
                    <label htmlFor="SecondName" className="form-label">Second Name</label>
                    <div className="input-group">
                    <input
                        type="text"
                        className={`form-control ${errors.SecondName ? 'is-invalid' : ''}`}
                        id="SecondName"
                        placeholder="Enter your Second Name"
                        autoComplete="off"
                        {...register("SecondName", {
                            required: "Second Name is required",
                            minLength: { value: 2, message: "Must be at least 2 characters" },
                            pattern: { value: /^[A-Za-z]+$/, message: "Only letters allowed" }
                        })}
                    />
                    {errors.SecondName && (
                        <span className="text-danger position-absolute" style={{ top: '100%', left: 0, fontSize: '0.9rem' }}>
                            {errors.SecondName.message} ❌</span>
                        )}
                    {!errors.SecondName && (
                        <span className="text-success position-absolute" style={{ top: '100%', left: 0, fontSize: '0.9rem' }}>
                            Looks good! ✔</span>
                        )}
                    </div>
                </div>

                {/* Email Address */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <div className="position-relative">
                    <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
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
                        {errors.email && (
                            <span className="text-danger position-absolute" style={{ top: '100%', left: 0, fontSize: '0.9rem' }}>
                                {errors.email.message} ❌</span>
                            )}
                        {!errors.email && (
                            <span className="text-success position-absolute" style={{ top: '100%', left: 0, fontSize: '0.9rem' }}>
                                Looks good! ✔</span>
                            )}
                </div>
            </div>

                {/* Password */}
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <div className="input-group">
                        <input
                            type={showPassword ? "text" : "password"}
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            id="password"
                            placeholder="Enter your Password"
                            autoComplete="off"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Must be at least 6 characters"
                                }
                            })}
                        />
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "🙈" : "👁"}
                        </button>
                    </div>
                    {errors.password && (
                        <span className="text-danger position-absolute" style={{ top: '100%', left: 0, fontSize: '0.9rem' }}>
                            {errors.password.message} ❌</span>
                        )}
                    {!errors.password && (
                        <span className="text-success position-absolute" style={{ top: '100%', left: 0, fontSize: '0.9rem' }}>
                            Looks good! ✔</span>
                        )}
                </div>

                {/* Confirm Password */}
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <div className="input-group">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                            id="confirmPassword"
                            placeholder="Confirm your Password"
                            autoComplete="off"
                            {...register("confirmPassword", {
                                required: "Please confirm your password",
                                validate: (value) => value === getValues("password") || "Passwords do not match"
                            })}
                        />
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? "🙈" : "👁"}
                        </button>
                    </div>
                    {errors.confirmPassword && (
                        <span className="text-danger position-absolute" style={{ top: '100%', left: 0, fontSize: '0.9rem' }}>
                        {errors.confirmPassword.message} ❌</span>
                        )}
                </div>

                {/* Remember Me */}
                <div className="mb-3 form-check">
                    <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                    checked={isChecked}
                    onChange={() => setChecked(!isChecked)}
                    />
                    <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="btn btn-primary w-100"
                    style={{ backgroundColor: "#ff3700", color: "#ffffff" }}
                    disabled={!isValid} // Disable until form is valid
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default SignUp;
