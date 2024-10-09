import EditorPreview from "../../components/layout/editor/editorPreview/editorPreview";
import LinkView from "../../components/layout/editor/linkView/linkView";
import ProfileView from "../../components/layout/editor/profileView/profileView";
import { useEditorContext } from "../../contexts/editorContext";

const Editor = () => {
  const { editorView } = useEditorContext();
  return (
    <main className="">
      <section className="py-20 bg-white flex">
        <EditorPreview />
        <div className="py-10 px-6 bg-white">
          {
            editorView === 'links' ? <LinkView /> : <ProfileView />
          }
        </div>
      </section>
    </main>
  )
}

export default Editor