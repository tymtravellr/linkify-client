import mockup from "@/assets/mockup.png";
import Preview from "@/components/common/preview/preview";

//Preview editor data in mobile mockup
const EditorPreviewer = () => {

    return (
        <div className="bg-white h-full lg:flex justify-center items-center w-1/3 hidden">
            <div className="relative max-w-[280px] h-[565px] w-full">
                <img src={mockup} alt="" className="absolute pointer-events-none" />
                <Preview 
                className="pt-16 px-8 pb-10"
                />
            </div>
        </div>
    )
}

export default EditorPreviewer