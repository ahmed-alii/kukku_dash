import Progress_Card from "./singles/Progress_Card";
import Eth_Card from "./singles/Eth_Card";

export default function Tokenomics(){
    return(
        <div className="col-md-6">
            <h5 className="heading">Tokenomics</h5>
            <Progress_Card/>
            <Eth_Card/>
        </div>
    )
}