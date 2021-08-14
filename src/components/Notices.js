import axios from 'axios';
import { useEffect, useState } from 'react';


function Notices (){


    const [noticeList, setNoticeList] = useState();
    //console.log('my console:', noticeList.data);

    let getNotices = async() => {
        await axios
            .get('/api/notice')
            .then(notices => {
                setNoticeList(notices.data);
                //console.log('Another console', notices);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        getNotices();

    },[]);

    function displayList (noticeList){
        return(
            <div className="noticeList">
                {noticeList.map((value, index) => (
                    <div className="notice" key={index}>{value.notice}</div>
                ))}
            </div>
        )

    }


    if(noticeList){
        return(
            <div>
                    {displayList(noticeList)}
            </div>
        );
    } else { 
        return(<></>);
    }
}

export default Notices;