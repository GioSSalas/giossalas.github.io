import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { CSSTransition } from "react-transition-group"

const NavBar = ({visible,hideMenu}) =>{

        const lang=useSelector(state => state.lang.current)

        console.log("HERE "+ visible)

        let buttons=[]
        for(const [key, value] of Object.entries(lang.routes)){
            buttons.push(<Link to={value.uri} key={key}
                className="button-menu px-4 py-1 text-sm shadow"
                onClick={ event=>{ 
                    const btns=document.querySelectorAll('.button-menu');
                    hideMenu()
                    btns.forEach(item=>{ item.classList.remove('button-selected'); })
                    event.target.classList.add('button-selected');
                 } }
                >
                    {value.title}
                </Link>)
        }

        return(
            <CSSTransition in={visible} timeout={200} classNames="fades" unmountOnExit >
                <div className="h-full w-full md:w-3/5 bg-white md:bg-transparent flex flex-wrap flex-shrink-0 items-center md:items-end justify-center pb-2 absolute left-0 top-0 md:relative md:left-unset md:top-unset">
                    <div className="md:hidden w-full py-2">
                        <button className="text-sm" onClick={hideMenu}>
                            <i className="material-icons align-middle ml-1 mr-4">arrow_back</i>
                            <span>{lang.BACKMENU_TITLE}</span>
                        </button>
                    </div>
                    {buttons}
                    <div className="ml-2">
                        <button className="bg-white shadow px-4 py-1 text-sm">ES</button>
                        <button className="bg-white shadow px-4 py-1 text-sm">EN</button>
                    </div>
                </div>
            </CSSTransition>
        )
}

export default NavBar