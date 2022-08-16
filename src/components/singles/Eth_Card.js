export default function Eth_Card(){
    return(
        <div className="card mt-5 eth-card">
            <div className="card-body">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-inset d-flex justify-content-around align-items-center p-2">
                                <div className="p-wrapper">
                                    <div className="p">
                                        <svg className="radial-progress yellow" data-percentage={80} viewBox="0 0 80 80">
                                            <defs>
                                                <filter id="filter0_ddii_20_111" x="0.781067" y="0.572775" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset dx={3} dy={3} />
                                                    <feGaussianBlur stdDeviation="1.5" />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0.837044 0 0 0 0 0.859521 0 0 0 0 1 0 0 0 0.05 0" />
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_111" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset dx={-2} dy={-2} />
                                                    <feGaussianBlur stdDeviation={2} />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0.206133 0 0 0 0 0.223007 0 0 0 0 0.334375 0 0 0 1 0" />
                                                    <feBlend mode="normal" in2="effect1_dropShadow_20_111" result="effect2_dropShadow_20_111" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_20_111" result="shape" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset dx={-1} dy={-1} />
                                                    <feGaussianBlur stdDeviation={1} />
                                                    <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0.479581 0 0 0 0 0.520833 0 0 0 0 0.132378 0 0 0 1 0" />
                                                    <feBlend mode="screen" in2="shape" result="effect3_innerShadow_20_111" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset dx={2} dy={1} />
                                                    <feGaussianBlur stdDeviation="1.5" />
                                                    <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0.309874 0 0 0 0 0.3375 0 0 0 0 0.0520312 0 0 0 1 0" />
                                                    <feBlend mode="multiply" in2="effect3_innerShadow_20_111" result="effect4_innerShadow_20_111" />
                                                </filter>
                                            </defs>
                                            <g opacity={1} filter="url(#filter0_ddii_20_111)">
                                                <circle className="complete" cx={40} cy={40} r={35} />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <div className="percent">
                                    +80%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <p className="mb-0"><span className="heading-2">MOOLA Price</span></p>
                        <div className="numbers">
                            $0.0527
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}