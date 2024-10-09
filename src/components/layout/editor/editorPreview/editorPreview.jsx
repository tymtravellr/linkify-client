//Preview editor data in mobile mockup
import PlatformLink from "../../../ui/platformLink/platformLink"

const EditorPreview = ({
    user,
    links
}) => {
    return (
        <div className="h-full flex justify-center items-center">
            <div className="border">
                <div>
                    <img src={user.img} alt="" />
                    <div>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                </div>
                <div>
                    {
                        links.map((item, index) => (
                            <PlatformLink
                                props={item}
                                key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default EditorPreview