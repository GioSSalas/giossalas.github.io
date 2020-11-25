import { useState,useEffect } from 'react'

const Card = ({rate,src,alt}) => {

    const [widthClass,setWidthClass]=useState('')

    useEffect(()=>{
        setWidthClass('to-'+rate)
    })

    return(
        <div className="bg-gray-50 w-full p-1 border border-gray-200 rounded m-2 md:w-1/3-sm">
            <div className="w-full h-20 flex items-center justify-center">
                <img src={src} alt={alt}  className="mx-auto h-2/3 py-1" />
            </div>
            <div className="w-full mb-2">
                <div className="temperature h-2 w-full relative">
                    <div className="bg-gray-300 w-full h-full rounded-full"></div>
                    <div className={"bg-blue-500 shadow w-0 h-full rounded-full absolute left-0 top-0 "+widthClass}></div>
                </div>
            </div>
        </div>
    )
}

export default Card