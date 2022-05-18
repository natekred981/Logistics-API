import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Modal from "./Form/Modal";

const UpdateInventory = (props) => {
const [loadedInventory, setLoadedInventory] = useState();

    // const response = await fetch('http://localhost:4002/api/tasks', {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     title: title,
    //     id: uuid.v4()
    //   }) 
    // });



    

    // console.log(responseData);
    // window.location.reload(false);

    // const Dummy = {};
    // const id = useParams().id;
    // const identifiedId = Dummy.find(i => i.id === id);
    // if (!identifiedId) {
    //     return <div className="center">
    //     <h1>Update Place</h1>
    //     </div>
    // }

    // useEffect(() => {
    //     try {
    //         let responseData = await response.json();
    //         setLoadedInventory()
    //     }
    // }, [response, ])

    return <form>
        <input>
        </input>
        <button>Submit</button>
    </form>
    
    
};

export default UpdateInventory;