import SMS_Card from "./singles/SMS_Card";
import HoldersCard from "./singles/HoldersCard";

export default function Stats(){
    return(
        <div className="col-md-5 offset-md-1">
            <h5 className="heading">Status</h5>
            <SMS_Card/>
            <HoldersCard/>
        </div>
    )
}