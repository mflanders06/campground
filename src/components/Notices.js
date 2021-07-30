import axios from 'axios';

function Notices (){

    let getNotices = () => {
        axios
            .get('/api/')
            .then(notices => {

            })
            .catch((error) => {
                alert(error.response.request.response);
            })
    }

    return(
        <div className="notice">
                Howdy
        </div>
    );
}

export default Notices;