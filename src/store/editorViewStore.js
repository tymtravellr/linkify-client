import { create } from "zustand";

// This store is used to manage the view of the editor.
// The editor has two views: links and profile.
export const useEditorViewStore = create((set) => ({
    view: "links",
    setLinksView: () => set(() => ({ view: "links" })),
    setProfileView: () => set(() => ({ view: "profile" }))
}))