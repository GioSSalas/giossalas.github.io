const en={
    LANGUAGE:'Language',
    CHOOSE_LANG_TITLE:'Choose language',
    NAME:'Emanuel Salas Salas',
    PROFILE_TITLE:'Full stack Web Developer',
    SKILLS_TITLE:'Preferred skills',
    routes:{
        OVERVIEW:{
            title:"Overview",
            uri:'/page/overview'
        },
        OLD_JOBS:{
            title:"Earlier jobs",
            uri:'/page/jobs'
        },
        CONTACT:{
            title:'Contact me',
            uri:'/pages/contact'
        },
    }
};
const es={
    LANGUAGE: 'Idioma',
    CHOOSE_LANG_TITLE:'Seleccionar idioma',
    SKILLS_TITLE:'Habilidades',
    button:{
        OVERVIEW:"Vista general",
        OLD_JOBS:"Experiencia",
        CONTACT:'Contacto',
    }
};

const lang={
    current:en
};

const SET_LANGUAGE="SET_LANGUAGE";

export default function langReducer(state=lang,action){
    switch(action.type){
        case SET_LANGUAGE: return {...state,current:action.payload}

        default: return {...state}
    }
}

export const SetLangAction = (language_type) => (dispatch,getState) => {
    let language='';
    switch(language_type){
        case 1: language=es; break;
        case 2: language=en; break;

        default: language=en;
    }
    dispatch({
        type: SET_LANGUAGE,
        payload: language
    })
}