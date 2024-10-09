import { create } from 'zustand'

// export const linkStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
// }))

export const useUserStore = create((set) => ({
    firstname: "",
    lastname: "",
    email: "",
    image: "",
    links: [],
    updateLinks: (links) => set(() => ({ links:  links })),
    updateProfile: (data) => set(() => ({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        image: data.image
    }))
}))

export const useEditorViewStore = create((set) => ({
    view: "links",
    setLinksView: () => set(() => ({ view: "links" })),
    setProfileView: () => set(() => ({ view: "profile" }))
}))