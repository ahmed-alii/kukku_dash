import icon from "../../images/mticon.svg"
export default function Asset_card(){
    return(
        <div className="col-md-12 single-asseet mb-4">
            <div className="card">
                <div className="card-body">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-3">
                            <div className="card-inset asset-icon-wrapper d-flex align-items-center justify-content-center p-3">
                                <img src={icon} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-8 col-9">
                            <h1 className="heading">Total Supply</h1>
                        </div>
                    </div>
                    <div className="row mt-3 align-items-center">
                        <div className="col-12 ps-md-4">
                            <h1 className="heading big-heading">143,986,547.00</h1>
                            <p className="m-0">
                                <span className="heading-2">+150$</span>
                                &nbsp;
                                <span className="heading-2">(15%)</span>
                                &nbsp;
                                <svg width={12} height={8} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.67628 1.04366L6.6763 1.04368L10.976 5.56949C11.3413 5.95384 11.3414 6.57205 10.976 6.95636C10.604 7.34788 9.99522 7.34789 9.62327 6.95635C9.62327 6.95635 9.62326 6.95635 9.62326 6.95635L5.99993 3.14245L2.37672 6.95624L2.37669 6.95628C2.00464 7.34772 1.39593 7.34779 1.02393 6.95628L6.67628 1.04366ZM6.67628 1.04366C6.49189 0.849607 6.24695 0.75 5.99991 0.75C5.753 0.75 5.5082 0.849432 5.32371 1.04352L5.32367 1.04356M6.67628 1.04366L5.32367 1.04356M5.32367 1.04356L1.0239 5.56942C1.0239 5.56942 1.0239 5.56942 1.0239 5.56942M5.32367 1.04356L1.0239 5.56942M1.0239 5.56942C0.658731 5.95378 0.658671 6.57193 1.0239 6.95624L1.0239 5.56942Z" fill="#B4BE23" stroke="#B4BE23" strokeWidth="0.5" />
                                </svg>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}