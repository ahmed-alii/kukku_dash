import Asset_card from "./singles/Asset_card";

export default function Sidebar(){
    return(
        <div className="card assets-sidebar">
            <div className="card-body pt-3">
                <h5 className="heading">Assets</h5>
                <div className="row mt-3">
                    <Asset_card/>
                    <Asset_card/>
                    <Asset_card/>
                    <Asset_card/>
                </div>
            </div>
        </div>
    )
}