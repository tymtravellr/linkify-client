const EditorHeader = ({ title, text }) => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">
                {title}
            </h1>
            <p className="text-gray-600 mb-6">
                {text}
            </p>
        </div>
    )
}

export default EditorHeader