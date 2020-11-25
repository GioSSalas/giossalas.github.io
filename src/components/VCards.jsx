
const VCards = ({children,title}) => {


    return(
        <div className="w-full flex flex-wrap items-center justify-center border p-1 rounded mb-4">
            <h3 className="text-gray-500 text-lg text-left w-full">{title}</h3>
            {children}
        </div>
    )

}

export default VCards