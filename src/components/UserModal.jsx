import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { User, LogOut, X, Box } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setAuth, setUser } from "../features/users/userSlice";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const UserDrawer = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user); // Adjust the type based on your store

    const showDrawer = () => {
        setOpen(true);
        setIsExpanded(true);
    };

    const onClose = () => {
        setOpen(false);
        setIsExpanded(false);
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("isAuth");
        toast.success("Logging out");
        setIsExpanded(false);
        setOpen(false);
        dispatch(setAuth(false));
        dispatch(setUser({}));
    };

    return (
        <>
            <Button
                type="default"
                onClick={showDrawer}
                style={{ backgroundColor: "black", color: "white", border: "none" }}
            >
                <User className="w-5 h-5 text-white" />
                {user?.email}
            </Button>

            <Drawer
                title={
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <User className="w-5 h-5 text-gray-600" />
                            <span className="text-gray-800 font-medium">{user?.email}</span>
                        </div>
                        <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
                            <X className="w-4 h-4 text-gray-500" />
                        </button>
                    </div>
                }
                onClose={onClose}
                open={open}
                closable={false}
            >
                {isExpanded && (
                    <div className="space-y-6">
                        {/* Email Section */}
                        <div className="pb-4 border-b border-gray-100">
                            <p className="text-sm text-gray-600 mb-1">Email</p>
                            <p className="text-gray-800">{user?.email}</p>
                        </div>
                        <button
                            onClick={() => {
                                navigate("/orders");
                                onClose();
                            }}
                            className="flex items-center gap-2 w-full px-4 py-2 text-black-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                        >
                            <Box className="w-4 h-4" />
                            <span className="font-medium">Orders</span>
                        </button>
                        {/* Logout Button */}
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 w-full px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                        >
                            <LogOut className="w-4 h-4" />
                            <span className="font-medium">Logout</span>
                        </button>
                    </div>
                )}
            </Drawer>
        </>
    );
};

export default UserDrawer;
