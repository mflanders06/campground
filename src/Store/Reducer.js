import * as actions from './ActionTypes';

const InitialState = {
    selectedSite: 'main',
    auth: 'false',
    admin: 'false'
}

 const Reducer = (state = InitialState, action) => {

    switch (action.type){
        case actions.SITE_CHANGE_MAIN: {
            return {...state, selectedSite: 'main'} 
        }

        case actions.SITE_CHANGE_HOUSE: {
            return {...state, selectedSite: 'house'}
        }

        case actions.SITE_CHANGE_TEEPEE: {
            return {...state, selectedSite: 'teepee'}
        }

        case actions.SITE_CHANGE_CABIN: {
            return {...state, selectedSite: 'cabin'}
        }

        case actions.SITE_CHANGE_RV: {
            return {...state, selectedSite: 'rv'}
        }

        case actions.AUTH_TRUE: {
            return {...state, auth: 'true'}
        }

        case actions.AUTH_FALSE: {
            return {...state, auth: 'false'}
        }

        case actions.ADMIN_TRUE: {
            return {...state, admin: 'true'}
        }

        case actions.ADMIN_FALSE: {
            return {...state, admin: 'false'}
        }

        default: return state;
}
}

export default Reducer;