//Context for managing editor view for links and profile;
import { createContext, useContext, useState } from "react";

const EditorContext = createContext('links');

export const useEditorContext = () => useContext(EditorContext)

export const EditorContextProvider = ({ children }) => {
    const [editorView, setEditorView] = useState('links');

    const setLinkView = () => {
        setEditorView('links')
    }

    const setProfileView = () => {
        setEditorView('profile')
    }

    return (
        <EditorContext.Provider
            value={{
                editorView,
                setLinkView,
                setProfileView
            }}
        >
            {children}
        </EditorContext.Provider>
    )
}