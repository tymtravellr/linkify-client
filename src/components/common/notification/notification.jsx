const Notification = ({ message = 'Hurray!!!', state, show }) => {

    const renderStyle = () => {
        switch (state) {
            case 'error':
                return 'bg-red-500';
            case 'success':
                return 'bg-green-500';
            default:
                return 'bg-slate-800';
        }
    }

    return (
        <div
            className={
                `z-[999] px-4 py-2 fixed left-1/2 -translate-x-1/2 text-white rounded-md transition-all duration-300 ${renderStyle()} ${show ? "opacity-100 bottom-16" : "opacity-0 bottom-0"}`
            }
        >
            {message}
        </div>
    )
}

export default Notification