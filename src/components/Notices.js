import axios from 'axios';
import { useEffect, useState } from 'react';


function Notices (){


    const [noticeList, setNoticeList] = useState();
    //console.log('my console:', noticeList.data);

    let getNotices = () => {
        axios
            .get('/api/notice')
            .then(notices => {
                setNoticeList(notices);
                //console.log('Another console', noticeList.data);
            })
            .catch((error) => {
                alert(error.response.request.response);
            })
    }

    useEffect(() => {
        getNotices();
    }, [noticeList]);

    if(noticeList){
        return(
            <div className="notice">
                    Hello!
            </div>
        );
    } else { 
        return(<></>);
    }
}

export default Notices;