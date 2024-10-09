import LinkView from "../../components/layout/editor/linkView/linkView";
import PhonePreview from "../../components/layout/editor/phonePreview/phonePreview";
import ProfileView from "../../components/layout/editor/profileView/profileView";
import { useEditorViewStore } from "../../store/store";


const Editor = () => {
  const view = useEditorViewStore(state => state.view)
  
  return (
    <main className="">
      <section className="flex gap-4">
        <PhonePreview />
        <div className="py-10 px-6 bg-white w-2/3">
          {
            view === 'links' ? <LinkView /> : <ProfileView />
          }
        </div>
      </section>
    </main>
  )
}

export default Editor