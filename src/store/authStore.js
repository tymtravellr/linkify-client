const { create } = require("zustand");

export const authStore = create((set) => ({
    isAuthenticated: false,
    
}));