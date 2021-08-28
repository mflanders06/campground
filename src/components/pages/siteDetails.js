import store from "../../Store/Store";


function siteDetails(){
    let site = store.getState().selectedSite
    return(
        <>
            <h1>{site}</h1>
            <h1>{site}</h1>
            <h1>{site}</h1>
            <h1>{site}</h1>
            <h1>{site}</h1>
            <h1>{site}</h1>
        </>
    )
}

export default siteDetails;