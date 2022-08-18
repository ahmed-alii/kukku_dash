import Asset_card from "./singles/Asset_card";

export default function Sidebar(){
    return(
        <div className="card assets-sidebar">
            <div className="card-body pt-3">
                <h5 className="heading">Assets</h5>
                <div className="row mt-3">
                    <Asset_card number={"143,986,547.00"} title={"Total Supply"}/>
                    <Asset_card number={"142,136,246.00"} title={"Circulating Supply"}/>
                    <Asset_card number={"32,098,543"} title={"Liquidity"}/>
                    <Asset_card number={"$0.0217"} title={"Floor Price"}/>
                </div>
            </div>
        </div>
    )
}