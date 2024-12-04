import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Register = () => {
    const { register, setUser, showPassword, setShowPassword, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const [password, setPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");

        // Password Validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            toast.error(
                "Password must include uppercase, lowercase, and be at least 6 characters long."
            );
            return;
        }
        // create user in firebase only
        register(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        toast.success("Registered successfully!");
                        navigate("/");
                    })
                    .catch((err) => {
                        toast.error(err.message || "Profile update failed!");
                    });
            })
            .catch((error) => {
                toast.error(
                    error?.message || "Registration failed! Please try again."
                );
            });
    };

    return (
        <div className="flex items-center justify-center my-10">
            <div className="p-8 bg-white rounded-lg shadow-lg w-full max-w-md border border-teal-400">
                <h2 className="text-3xl font-bold mb-6 text-center text-teal-600">
                    Register
                </h2>
                <hr className="border-teal-400" />
                <form onSubmit={handleRegister} className="space-y-6 mt-6">
                    {/* Name Field */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block mb-2 text-gray-700 font-medium"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="input input-bordered w-full border-teal-400 focus:ring focus:ring-blue-200 rounded-lg"
                            required
                        />
                    </div>

                    {/* Photo URL Field */}
                    <div>
                        <label
                            htmlFor="photo"
                            className="block mb-2 text-gray-700 font-medium"
                        >
                            Photo URL
                        </label>
                        <input
                            type="text"
                            name="photo"
                            id="photo"
                            className="input input-bordered w-full border-teal-400 focus:ring focus:ring-blue-200 rounded-lg"
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-gray-700 font-medium"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="input input-bordered w-full border-teal-400 focus:ring focus:ring-blue-200 rounded-lg"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-gray-700 font-medium"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                className="input input-bordered w-full border-teal-400 focus:ring focus:ring-blue-200 rounded-lg"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/3 text-gray-600"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <FaEyeSlash className="text-lg" />
                                ) : (
                                    <FaEye className="text-lg" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn btn-primary w-full bg-teal-600 text-white font-bold rounded-lg shadow-md hover:bg-teal-800 transform transition-transform"
                    >
                        Register
                    </button>
                </form>

                {/* Login Link */}
                <p className="text-sm mt-6 text-center">
                    Already have an account?{" "}
                    <Link
                        to="/auth/login"
                        className="text-teal-600 font-bold hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
