import { useSelector } from "react-redux"
import VCards from "../VCards"
import Card from '../Card'

import reactLogo from '../../images/react_logo.png'
import laravelLogo from '../../images/laravel_logo.png'
import tailwindLogo from '../../images/tailwindcss_logo.png'
import bootstrapLogo from '../../images/bootstrap_logo.png'


const Index = () => {

    const lang=useSelector(state=>state.lang.current)

    const frameWorksChildrens={ 
            react:{
                src: reactLogo,
                rate: 95
           },
           laravel:{
               src: laravelLogo,
               rate: 95
           },
           tailwind:{
               src: tailwindLogo,
               rate:90
           },
           bootstrap: {
               src: bootstrapLogo,
               rate: 75
           }     
    }

    let frameWorksChildrensToRender=[]
    for(const[key,value] of Object.entries(frameWorksChildrens)){
        console.log(key)
        frameWorksChildrensToRender.push(<Card key={key} alt={key} rate={value.rate} src={value.src}></Card>)
    }

    return(
        <div className="w-11/12 md:w-3/4 mx-auto pb-8">
            <div className="w-full h-32"></div>
            <div className="text-center">
                <h2 className="text-xl">{lang.SKILLS_TITLE}</h2>
            </div>
            <VCards title={lang.VCARD.framework}>
                {frameWorksChildrensToRender}
            </VCards>
            <VCards title={lang.VCARD.proglenguages}></VCards>
        </div>
    )
}

export default Index