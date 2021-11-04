import * as actions from './ActionTypes';

export function  siteChangeMain(){
    return {
        type: actions.SITE_CHANGE_MAIN
    }
}

export function siteChangeHouse(){
    return {
        type: actions.SITE_CHANGE_HOUSE
    }
}

export function siteChangeTeepee(){
    return {
        type: actions.SITE_CHANGE_TEEPEE
    }
}

export function siteChangeRV(){
    return {
        type: actions.SITE_CHANGE_RV
    }
}

export function siteChangeCabin(){
    return {
        type: actions.SITE_CHANGE_CABIN
    }
}

export function authTrue(){
    return {
        type: actions.AUTH_TRUE
    }
}

export function authFalse(){
    return {
        type: actions.AUTH_FALSE
    }
}

export function adminTrue(){
    return {
        type: actions.ADMIN_TRUE
    }
}

export function adminFalse(){
    return {
        type: actions.ADMIN_FALSE
    }
}