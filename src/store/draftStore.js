import { create } from 'zustand';

// This store is used to manage the draft profile details and links. This is for storing changes that is not saved yet. The reason for this is to allow the user to make changes to their profile and links before saving them to the server.
// updateDraftLinks: Updates the links in the store.
// updateDraftProfile: Updates the profile details in the store.

export const useDraftStore = create((set) => ({
    draftfirstName: "",
    draftlastName: "",
    draftEmail: "",
    draftImage: "",
    draftLinks: [],
    updateDraftLinks: (links) => set(() => ({ draftLinks: links })),
    updateDraftProfile: (data) => set((state) => ({
        draftfirstName: data.draftfirstName !== undefined ? data.draftfirstName : state.draftfirstName,
        draftlastName: data.draftlastName !== undefined ? data.draftlastName : state.draftlastName,
        draftEmail: data.draftEmail !== undefined ? data.draftEmail : state.draftEmail,
        draftImage: data.draftImage !== undefined ? data.draftImage : state.draftImage
    })),
    validateLink: () => set((state) => ({
        draftLinks: state.draftLinks.map(link => ({
            ...link,
            valid: validate(link.platform, link.link)
        }))
    }))
}));

const validate = (platform, link) => {
    if (!link) return false;
    const linkDomain = link.toLowerCase().replace(/^https?:\/\//, '').split('/')[0];
    const platformName = platform.toLowerCase();
    return linkDomain.includes(platformName);
}