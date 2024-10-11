const Notification = ({ message = 'Hurray!!!' }) => {
    return (
        <div className="px-4 py-2 fixed right-8 top-8 bg-black text-white">
            {message}
        </div>
    )
}

export default Notification