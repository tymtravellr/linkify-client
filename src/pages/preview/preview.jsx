import Preview from "@/components/common/preview/preview";

const PreviewPage = () => {

  return (
    <div className="w-full flex justify-center pt-20">
      <div className="flex flex-col gap-8 bg-white rounded-3xl max-w-[300px] w-full mx-auto overflow-hidden">
        <Preview
          className="py-10 px-8"
        />
      </div>
    </div>
  )
}

export default PreviewPage