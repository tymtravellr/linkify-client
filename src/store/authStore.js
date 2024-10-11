import { getCookie, removeCookie, setCookie } from '@/lib/cookieUtils';
import { create } from 'zustand';

export const useAuthStore = create((set) => ({
    isAuthenticated: getCookie('isAuthenticated') === 'true',
    isLoading: false,
    email: getCookie('email') || '',
    register: async (credentials) => {
        set({ isLoading: true });
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_API_ROUTE}api/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });
            if (!response.ok) throw new Error('Registration failed');
            const data = await response.json();
            set({ isAuthenticated: true, isLoading: false, email: credentials.email });
            setCookie('email', credentials.email);
            setCookie('authToken', data.token);
            setCookie('isAuthenticated', 'true');
            return true;
        } catch (error) {
            console.error('Registration error:', error);
            set({ isAuthenticated: false, isLoading: false });
            removeCookie('email');
            removeCookie('isAuthenticated');
            removeCookie('authToken');
            return false;
        }
    },
    login: async (credentials) => {
        set({ isLoading: true });
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_API_ROUTE}api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });
            if (!response.ok) throw new Error('Login failed');
            const data = await response.json();
            set({ isAuthenticated: true, isLoading: false, email: credentials.email });
            setCookie('email', credentials.email);
            setCookie('authToken', data.token);
            setCookie('isAuthenticated', 'true');
            return true;
        } catch (error) {
            console.error('Login error:', error);
            set({ isAuthenticated: false, isLoading: false });
            removeCookie('email');
            removeCookie('isAuthenticated');
            removeCookie('authToken');
            return false;
        }
    },
    logout: () => {
        set({ isAuthenticated: false, email: '' });
        removeCookie('email');
        removeCookie('isAuthenticated');
        removeCookie('authToken');
    }
}));