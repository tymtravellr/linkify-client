import LinkCustomization from "../../components/editor/linkCustomization/linkCustomization";
import PhonePreview from "../../components/editor/phonePreview/phonePreview";
import ProfileCustomization from "../../components/editor/profileCustomization/profileCustomization";
import { useEditorViewStore } from "../../store/store";

const Editor = () => {
  const view = useEditorViewStore(state => state.view)

  return (
    <main className="h-full">
      <section className="h-full flex gap-4">
        <PhonePreview />
        <div className="py-10 px-6 bg-white w-2/3">
          {
            view === 'links'
              ? <LinkCustomization />
              : <ProfileCustomization />
          }
        </div>
      </section>
    </main>
  )
}

export default Editor