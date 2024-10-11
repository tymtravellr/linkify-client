import PreviewSelfView from "@/components/preview/selfView";
import PreviewUserView from "@/components/preview/userView";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Preview = () => {

  // Routing for the preview page
  const [searchParams] = useSearchParams();
  const userParam = searchParams.get('user');
  const [preview, setPreview] = useState('self');

  useEffect(() => {
    if (userParam === null) {
      setPreview('self');
    } else if (userParam === 'string') {
      setPreview('user');
    }
  }, [userParam]);

  return (
    <div className="w-full flex justify-center pt-20">
      <div className="flex flex-col gap-8 bg-white rounded-3xl py-8 px-4 mx-auto max-w-[260px] w-full min-h-[500px] overflow-hidden">
        {
          preview === 'self'
            ? <PreviewSelfView />
            : <PreviewUserView />
        }
      </div>
    </div>
  )
}

export default Preview