import Notification from "@/components/common/notification/notification";
import { useAuthStore } from "@/store/authStore";
import { useCallback, useEffect } from "react";
import { variantStyle } from "../../components/common/button/buttonVariantStyle";
import EditorHeader from "../../components/editor/editorHeader/editorHeader";
import PhonePreview from "../../components/editor/editorPreviewer/editorPreviewer";
import LinkEditor from "../../components/editor/linkCustomization/linkEditor";
import ProfileCustomization from "../../components/editor/profileCustomization/profileCustomization";
import { useDraftStore } from "../../store/draftStore";
import { useEditorViewStore } from "../../store/editorViewStore";
import { useUserStore } from "../../store/userStore";

const EditorPage = () => {

  const view = useEditorViewStore(state => state.view)
  const {
    firstName,
    lastName,
    email,
    image,
    links,
    saveLinks,
    saveProfile,
    isLoading,
    isSavingFinished,
    resetIsSavingFinished
  } = useUserStore(state => state);

  const {
    draftfirstName,
    draftlastName,
    draftEmail,
    draftImage,
    updateDraftLinks,
    validateLink,
    updateDraftProfile
  } = useDraftStore(state => state);

  const { logout, isAuthenticated } = useAuthStore(state => state);

  // update draft data when main data changes
  useEffect(() => {
    updateDraftLinks(links);
    updateDraftProfile({
      draftfirstName: firstName,
      draftlastName: lastName,
      draftEmail: email,
      draftImage: image
    });
  }, [links, updateDraftLinks, updateDraftProfile, firstName, lastName, email, image]);

  const handleSave = useCallback(async () => {
    if (view === 'links') {
      validateLink();
      const updatedLinks = useDraftStore.getState().draftLinks;
      const validLinks = updatedLinks.every(link => link.valid === true);
      if (validLinks) {
        saveLinks(updatedLinks);
      }
    } else {
      saveProfile({
        firstName: draftfirstName,
        lastName: draftlastName,
        email: draftEmail,
        image: draftImage,
        imageFile: useUserStore.getState().imageFile
      })
    }
  }, [view, validateLink, draftfirstName, draftlastName, draftEmail, draftImage, saveLinks, saveProfile]);

  // reset isSavingFinished after 3 seconds to hide the notification
  useEffect(() => {
    if (isSavingFinished) {
      setTimeout(() => {
        resetIsSavingFinished();
      }, 3000);
    }
  }, [isSavingFinished, resetIsSavingFinished]);

  return (
    <main className="h-full relative">
      <section className="h-full flex gap-4">
        <PhonePreview />
        <div className="md:py-10 lg:px-6 md:px-10 p-6 bg-white lg:w-2/3 w-full flex flex-col rounded-lg">
          <EditorHeader
            title={view === 'links'
              ? 'Customize your links'
              : 'Profile Details'}
            text={view === 'links'
              ? 'Add/edit/remove links below and then share all your profiles with the world!'
              : 'Add your details to create a personal touch to your profile.'}
          />
          {
            view === 'links'
              ? <LinkEditor />
              : <ProfileCustomization />
          }
          <div className="flex justify-end items-center gap-3 relative z-30 pt-4 border-t bg-white">
            {
              isAuthenticated && <button onClick={() => logout()} className="text-indigo-500 underline">Logout</button>
            }
            <button
              onClick={handleSave}
              className={`${variantStyle()}`}
              disabled={isLoading}
            >Save</button>
          </div>
        </div>
      </section>
      {
        isSavingFinished && <Notification
          message="Your changes have been saved successfully!"
        />
      }
    </main>
  )
}

export default EditorPage;