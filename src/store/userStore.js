import { create } from 'zustand'

// This store is used to manage the user's profile details and links.
// for updating links i am replacing the old links with the new links. when user adds a new link, i am appending the new link to the existing links.
export const useUserStore = create((set) => ({
    firstname: "",
    lastname: "",
    email: "",
    image: "",
    links: [],
    updateLinks: (links) => set(() => ({ links: links })),
    updateProfile: (data) => set(() => ({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        image: data.image
    })),
    fetchInitialData: async () => {
        try {
            const response = await fetch('/api/user-data');
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
            const data = await response.json();
            set(() => ({
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                image: data.image,
                links: data.links
            }));
        } catch (error) {
            console.error('Error fetching initial data:', error);
            // You might want to set some error state here
        }
    }
}))