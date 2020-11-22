
import { useSelector } from "react-redux"

import profileImage from '../images/imagen_perfil_quad.webp'
import NavBar from "./NavBar"


const TopPanel = () => {

    const lang=useSelector(state=>state.lang.current)

    return(
        <header id="left-panel"
            className={"w-full h-24 border-r border-r-gray-300 fixed left-0 top-0 flex items-center"}>
            <div className="w-full h-full flex items-center">
                <div
                className="w-16 h-full flex-shrink-0 md:hidden flex flex-wrap items-center justify-center bg-gray-800 text-gray-200">
                    <i className="material-icons">menu</i>
                </div>
                <div className="h-full w-full flex flex-wrap items-center">
                    <div className="pl-4">
                        <p className="text-xl text-red-600 md:text-2xl xl:text-3xl">{lang.NAME}</p>
                        <p className="w-full text-gray-600">{lang.PROFILE_TITLE}</p>
                    </div>
                </div>
                <NavBar></NavBar>
            </div>
            <div className="w-32 h-full flex items-center justify-center flex-grow-0 flex-shrink-0">
                <img src={profileImage} alt="Emanuel Salas" className="h-4/6 rounded-full border-2 border-gray-300"  />
            </div>
        </header>
    )

}

export default TopPanel