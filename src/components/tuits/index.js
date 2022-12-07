import React, { useEffect, useState } from "react";
import './tuits.css';
import Tuit from "./tuit";
import * as likesService from "../../services/likes-service";
import * as dislikesService from "../../services/dislikes-service";

const Tuits = ({tuits = [], deleteTuit, refreshTuits}) => {
    const [initialtuits, setInitialtuits] = useState(tuits)
    useEffect(() => setInitialtuits(tuits))
    const likeTuit = (tuit) => likesService
        .userTogglesTuitLikes("me", tuit._id)
        .then(refreshTuits)
        .catch(e => alert(e))

    const dislikeTuit = (tuit) => dislikesService
        .userTogglesTuitDislikes("me", tuit._id)
        .then(refreshTuits)
        .catch(e => alert(e))
 
    return (
        <div>
            {initialtuits.length > 0 &&
            <ul className="ttr-tuits list-group">
                {
                    initialtuits.map(tuit => 
                        <Tuit key={tuit._id} deleteTuit={deleteTuit} likeTuit={likeTuit} tuit={tuit} dislikeTuit={dislikeTuit}/>
                    )
                }
            </ul>
            }
        </div>
    );
}
export default Tuits;
