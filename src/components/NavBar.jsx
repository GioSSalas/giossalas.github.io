import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const NavBar = () =>{

        const lang=useSelector(state => state.lang.current)



        let buttons=[]
        for(const [key, value] of Object.entries(lang.routes)){
            buttons.push(<Link to={value.uri} key={key}
                className="button-menu px-4 py-1 text-sm shadow"
                onClick={ event=>{ 
                    const btns=document.querySelectorAll('.button-menu');
                    btns.forEach(item=>{ item.classList.remove('button-selected'); })
                    event.target.classList.add('button-selected');
                 } }
                >
                    {value.title}
                </Link>)
        }

        return(
            <div className="h-full w-3/5 hidden md:flex flex-shrink-0 items-end justify-center pb-2">
                {buttons}
            </div>
        )
}

export default NavBar