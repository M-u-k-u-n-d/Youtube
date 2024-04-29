const Button = ({name}) => {
    return (
        <div>
            <button className="border font-mono border-gray-200 mx-2 my-3 py-1 px-3 hover:bg-gray-200 rounded-lg">{name}</button>
        </div>
    )
}

export default Button;