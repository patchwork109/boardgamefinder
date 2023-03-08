import React from "react"
import { useParams } from "react-router-dom";


function FeaturedCardDetail ({boardGameArray}) {

    const {eBGID} = useParams();

    return(
        <div name="TESTER">
            {boardGameArray[boardGameArray.findIndex(obj => obj.id === parseInt(eBGID))].name}
        </div>
    )
}

export default FeaturedCardDetail