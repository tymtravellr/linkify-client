import { getCookie } from '@/lib/cookieUtils';
import { create } from 'zustand';

// This store is used to manage the user's profile details and links.
// updateLinks: Updates the links in the store.
// updateProfile: Updates the profile details in the store.
// saveLinks: Saves the links to the server.
// saveProfile: Saves the profile details to the server.

export const useUserStore = create((set) => ({
    firstName: "",
    lastName: "",
    email: "",
    image: "",
    links: [],
    isLoading: false,
    updateLinks: (links) => set({ links }),
    updateProfile: (data) => set(() => ({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        image: data.image
    })),
    saveLinks: (links) => set(async () => {
        set({ links });
        set({ isLoading: true });
        console.log('cookie', getCookie('authToken'));
        try {
            const email = getCookie('email');
            const response = await fetch(`${import.meta.env.VITE_APP_API_ROUTE}api/user/${email}/links`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${getCookie('authToken')}`
                },
                body: JSON.stringify({ links })
            });
            if (!response.ok) throw new Error('Link update failed');
            set({ isLoading: false });
        } catch (error) {
            console.error('Link update error:', error);
            set({ isLoading: false });
        }
    }),
    saveProfile: (data) => set(async () => {
        set({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            image: data.image
        });
        set({ isLoading: true });
        console.log('cookie', getCookie('authToken'));
        try {
            const email = getCookie('email');
            const response = await fetch(`${import.meta.env.VITE_APP_API_ROUTE}api/user/${email}/profile`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${getCookie('authToken')}`
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error('Link update failed');
            set({ isLoading: false });
        } catch (error) {
            console.error('Link update error:', error);
            set({ isLoading: false });
        }
    })
}))