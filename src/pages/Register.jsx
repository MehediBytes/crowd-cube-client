import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Register = () => {
    const { register, setUser, showPassword, setShowPassword, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo") || "";
        const email = form.get("email");

        // Password Validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            toast.error("Password must include uppercase, lowercase, and be at least 6 characters long.");
            return;
        }

        try {
            // Firebase registration
            const result = await register(email, password);
            const user = result.user;

            setUser(user);

            // Update Firebase profile
            await updateUserProfile({ displayName: name, photoURL: photo });

            // Save to MongoDB
            const newUser = { name, email, photo };
            const response = await fetch("http://localhost:5000/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser),
            });

            if (response.ok) {
                toast.success("Registered successfully!");
                navigate("/");
            } else {
                throw new Error("Failed to save user data in MongoDB.");
            }
        } catch (error) {
            console.error("Registration error:", error.message);
            toast.error("Registration failed. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center my-10">
            <div className="p-8 bg-white rounded-lg shadow-lg w-full max-w-md border border-teal-400">
                <h2 className="text-3xl font-bold mb-6 text-center text-teal-600">Register</h2>
                <form onSubmit={handleRegister} className="space-y-6 mt-6">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-gray-700 font-medium">Name</label>
                        <input type="text" name="name" id="name" className="input input-bordered w-full border-teal-400 rounded-lg" required />
                    </div>
                    <div>
                        <label htmlFor="photo" className="block mb-2 text-gray-700 font-medium">Photo URL</label>
                        <input type="text" name="photo" id="photo" className="input input-bordered w-full border-teal-400 rounded-lg" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-gray-700 font-medium">Email</label>
                        <input type="email" name="email" id="email" className="input input-bordered w-full border-teal-400 rounded-lg" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-gray-700 font-medium">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                className="input input-bordered w-full border-teal-400 rounded-lg"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button type="button" className="absolute right-3 top-1/3" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-full bg-teal-600 text-white rounded-lg">Register</button>
                </form>
                <p className="text-sm mt-6 text-center">
                    Already have an account? <Link to="/auth/login" className="text-teal-600 font-bold">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
