import {useEffect, useState} from "react";
import * as tuitService from "../../services/tuits-service";
import Tuits from "../tuits";

const MyTuits = () => {
  const [tuits, setTuits] = useState([]);
  const findMyTuits = () =>
  tuitService.findTuitByUser("me")
      .then(tuits => setTuits(tuits));
  useEffect(findMyTuits, []);
  const deleteTuit = (tid) =>
  tuitService.deleteTuit(tid)
      .then(findMyTuits);
  return(
    <div>
    <h3> My tuits </h3>
    <Tuits tuits={tuits}
           deleteTuit={deleteTuit} refreshTuits={findMyTuits}
           />
    </div>
  );
};

export default MyTuits;