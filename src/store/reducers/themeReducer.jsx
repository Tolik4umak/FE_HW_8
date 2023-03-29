
const current_theme = localStorage.getItem('myTheme') ?? 'theme_ligth'
const THEME_CHANGE = "THEME_CHANGE"

export const themeChangeAction = (payload) => {
    return{
        type: THEME_CHANGE,
        payload
    }
}

function writeToLocal(data){
    localStorage.setItem('myTheme', data)
}


export const themeReducer = (state = current_theme, {type, payload}) => {

    if(type === THEME_CHANGE){
       const newState = payload 
       writeToLocal(newState)
       return newState
    }
    
    return state
} 