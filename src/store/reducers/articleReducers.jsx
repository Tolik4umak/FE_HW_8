const articles = JSON.parse(localStorage.getItem('articles')) ?? []

const ARTICLE_ADD = 'ARTICLE_ADD'
const ARTICLE_DEL = 'ARTICLE_DEL'

export const articleAddAction = (payload) => {
    return{
        type: ARTICLE_ADD,
        payload
    }
}

export const articleDelAction = (payload) => {
    return{
        type: ARTICLE_DEL,
        payload
    }
}

const addToLocal = (post) => {
    localStorage.setItem('articles', JSON.stringify(post))
}  

export const articlesReducer = (state = articles, {type, payload}) => {
    if(type === ARTICLE_ADD){
        let newState = [...state, payload]
        addToLocal(newState)
        return newState
    }
    if(type === ARTICLE_DEL){
        let newState = state.filter(post => post.id !== payload)
        addToLocal(newState)
        return newState
    }
    return state
}