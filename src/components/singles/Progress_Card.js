import bb1 from "../../images/buble.png"
import bb2 from "../../images/buble-green.png"
import mi from "../../images/mticon.svg"
export default function Progress_Card(){
    return(
        <div className="card mt-4">
            <div className="card-body">
                <div className="row align-items-center">
                    <div className="col-lg-8 d-flex justify-content-center align-items-center">
                        <div className="double-p">
                            <div className="p1">
                                <svg className="radial-progress green" data-percentage={25} viewBox="0 0 80 80">
                                    <circle className="incomplete" cx={40} cy={40} r={35} />
                                    <circle className="complete" cx={40} cy={40} r={35} />
                                </svg>
                            </div>
                            <div className="p2">
                                <svg className="radial-progress orange" data-percentage={60} viewBox="0 0 80 80">
                                    <circle className="incomplete" cx={40} cy={40} r={35} />
                                    <circle className="complete" cx={40} cy={40} r={35} />
                                </svg>
                            </div>
                            <div className="card">
                                <img src={mi} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="my-4 d-flex d-lg-block align-items-center justify-content-between">
                            <div className="burn-rate d-flex align-items-center">
                                <div className="d-flex align-items-center justify-content-center">
                                    <img src={bb1} alt="" className="me-1 img-circle" />
                                </div>
                                <span className="heading-2">Burn Rate</span>
                            </div>
                            <div className="numbers">
                                2,431,520
                            </div>
                        </div>
                        <div className="my-4 d-flex d-lg-block align-items-center justify-content-between">
                            <div className="mint-rate d-flex align-items-center">
                                <div className="d-flex align-items-center justify-content-center">
                                    <img src={bb2} alt="" className="me-1 img-circle" />
                                </div>
                                <span className="heading-2">Mint Rate</span>
                            </div>
                            <div className="numbers">
                                3,020,743
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}