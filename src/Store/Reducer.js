const InitialState = {
    selectedSite: 'main'
}

const reducer = (state = InitialState, action) => {
    const newState = {...state}

    if (action.type === 'Site change'){
        newState.message = ''
    }
}