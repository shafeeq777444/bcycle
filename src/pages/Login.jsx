import React, { useState } from "react";
import { Eye, EyeOff, Bike } from "lucide-react";

export default function CycleLoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted:", { email, password, isLogin });
        // Your existing logic here
    };

    return (<>

        <div className="min-h-screen bg-black/80 flex items-center justify-center p-4">
            <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="flex flex-col lg:flex-row min-h-[600px]">
                    {/* Left Panel - Visual Section */}
                    <div className="lg:w-1/2 bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-800/30 via-transparent to-transparent"></div>

                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white blur-xl"></div>
                            <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gray-400 blur-xl"></div>
                            <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-gray-300 blur-xl"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 p-6 sm:p-8 lg:p-12 h-full flex flex-col justify-center">
                            
                            <div className="mb-6 lg:mb-8">
                                <Bike className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-white mb-4 lg:mb-6" />
                            </div>

                            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6 leading-tight">
                                Ride into your
                                <br />
                                <span className="text-gray-300">cycling adventure</span>
                            </h1>

                            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-md">
                                Discover premium bikes, gear, and accessories. Join thousands of cyclists who trust us for
                                their cycling journey.
                            </p>
                        </div>
                    </div>

                    {/* Right Panel - Form Section */}
                    <div className="lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                        <div className="max-w-md mx-auto w-full">
                            {/* Header */}
                            <div className="text-center mb-6 lg:mb-8">



                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                                    {isLogin ? "Welcome Back" : "Get Started"}
                                </h2>
                                <p className="text-gray-600 text-sm sm:text-base">
                                    {isLogin ? "Sign in to your bcycle account" : "Create your bcycle account"}
                                </p>
                            </div>

                            {/* Form */}
                            <div className="space-y-5 lg:space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                                        placeholder="cyclist@bcycle.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                        {isLogin ? "Password" : "Create password"}
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                                            placeholder="••••••••••"
                                            required
                                            minLength={8}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="w-full bg-black text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-800 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
                                >
                                    {isLogin ? "Sign In" : "Create Account"}
                                </button>
                            </div>

                            {/* Footer */}
                            <div className="text-center mt-6 lg:mt-8">
                                <p className="text-gray-600 text-sm sm:text-base">
                                    {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                                    <button
                                        onClick={() => setIsLogin(!isLogin)}
                                        className="text-black hover:text-gray-700 font-semibold transition-colors underline"
                                    >
                                        {isLogin ? "Sign Up" : "Sign In"}
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}