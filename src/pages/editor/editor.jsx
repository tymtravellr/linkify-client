import { useCallback, useEffect } from "react";
import { variantStyle } from "../../components/common/button/buttonVariantStyle";
import EditorHeader from "../../components/editor/editorHeader/editorHeader";
import LinkEditor from "../../components/editor/linkCustomization/linkEditor";
import PhonePreview from "../../components/editor/phonePreview/phonePreview";
import ProfileCustomization from "../../components/editor/profileCustomization/profileCustomization";
import { useDraftStore } from "../../store/draftStore";
import { useEditorViewStore } from "../../store/editorViewStore";
import { useUserStore } from "../../store/userStore";

const Editor = () => {

  const view = useEditorViewStore(state => state.view)
  const {
    firstname,
    lastname,
    email,
    image,
    links,
    updateLinks,
    updateProfile
  } = useUserStore(state => state);

  const {
    draftFirstname,
    draftLastname,
    draftEmail,
    draftImage,
    draftLinks,
    updateDraftLinks,
    validateLink,
    updateDraftProfile
  } = useDraftStore(state => state);

  // update draft data when main data changes
  useEffect(() => {
    updateDraftLinks(links);
    updateDraftProfile({
      draftFirstname: firstname,
      draftLastname: lastname,
      draftEmail: email,
      draftImage: image
    });
  }, [links, updateDraftLinks, updateDraftProfile, firstname, lastname, email, image]);


  const handleSave = useCallback(() => {
    if (view === 'links') {
      validateLink();
      const updatedLinks = useDraftStore.getState().draftLinks;
      const validLinks = updatedLinks.every(link => link.valid === true);
      if (validLinks) {
        updateLinks(updatedLinks);
      }
    } else {
      updateProfile({
        firstname: draftFirstname,
        lastname: draftLastname,
        email: draftEmail,
        image: draftImage
      });
    }
  }, [view, updateLinks, updateProfile, validateLink, draftFirstname, draftLastname, draftEmail, draftImage]);

  // prevent user from leaving the page when there are unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = '';
    };

    if (draftLinks.length > 0 || draftFirstname || draftLastname || draftEmail || draftImage) {
      window.addEventListener('beforeunload', handleBeforeUnload);
    }
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [draftLinks, draftFirstname, draftLastname, draftEmail, draftImage]);

  return (
    <main className="h-full">
      <section className="h-full flex gap-4">
        <PhonePreview />
        <div className="py-10 px-6 bg-white w-2/3 flex flex-col">
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
          <div className="flex justify-end relative z-30 pt-4 border-t">
            <button onClick={handleSave} className={`${variantStyle()}`}>Save</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Editor;