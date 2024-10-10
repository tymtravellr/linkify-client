import { create } from 'zustand';

export const useDraftStore = create((set) => ({
    draftFirstname: "",
    draftLastname: "",
    draftEmail: "",
    draftImage: "",
    draftLinks: [],
    updateDraftLinks: (links) => set(() => ({ draftLinks: links })),
    updateDraftProfile: (data) => set((state) => ({
        draftFirstname: data.draftFirstname !== undefined ? data.draftFirstname : state.draftFirstname,
        draftLastname: data.draftLastname !== undefined ? data.draftLastname : state.draftLastname,
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