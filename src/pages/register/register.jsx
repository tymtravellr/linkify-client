import { variantStyle } from "@/components/common/button/buttonVariantStyle";
import Notification from "@/components/common/notification/notification";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/store/authStore";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const { register, isLoading } = useAuthStore(state => state);
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const handleRegister = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const success = await register({ email, password });
        if (success) {
            navigate('/');
        } else {
            setError(true);
        }
    }

    useEffect(() => {
        if (error) {
            setTimeout(() => setError(false), 5000);
        }
    }, [error])

    return (
        <section className="relative h-full flex justify-center items-center flex-1">
            <div className="max-w-[460px] w-full px-10 py-12 bg-white rounded-md space-y-10 shadow-lg">
                <div className="text-center space-y-2">
                    <h1 className="font-bold text-3xl">
                        Register to Linkify
                    </h1>
                    <p>Manage your lnks, layout, social, and more.</p>
                </div>
                <div className="w-full space-y-4">
                    <form onSubmit={handleRegister} className="w-full flex flex-col gap-4">
                        <div className="space-y-1">
                            <label htmlFor="email" className="text-sm text-gray-400">Email</label>
                            <Input type="email" id="email" name="email" placeholder="Enter your email" required />
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="password" className="text-sm text-gray-400">Password</label>
                            <Input type="password" id="password" name="password" placeholder="Enter your password" required />
                        </div>
                        <button
                            className={`${variantStyle()}`}
                            type="submit"
                            disabled={isLoading}
                        >
                            Register
                        </button>
                    </form>
                    <p className="text-sm">
                        Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
                    </p>
                </div>
                <Notification
                    message="User already exists. Please login."
                    show={error}
                    state="error"
                />

            </div>
        </section>
    )
}

export default RegisterPage