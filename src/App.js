import "./vendors/bootstrap.min.css.css"
import './App.css';
import Tokenomics from "./components/Tokenomics";
import Stats from "./components/Stats";
import MainChart from "./components/MainChart";
import Sidebar from "./components/Sidebar";
import {useEffect} from "react";
import $ from 'jquery';


function App() {
    useEffect(()=>{

        $(document).ready(function (){
            $('svg.radial-progress').each(function (index, value) {
                $(this).find($('circle.complete')).removeAttr('style');
                let percent, radius, circumference, strokeDashOffset;
                percent = $(value).data('percentage');
                radius = $(this).find($('circle.complete')).attr('r');
                circumference = 2 * Math.PI * radius;
                strokeDashOffset = circumference - ((percent * circumference) / 100);
                $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 800);
            });
        })


    })
    return (
        <div className="App bg pt-5">
            <div className="dash-container container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <Tokenomics/>
                                <Stats/>
                            </div>
                            
                            <div className="row mt-5">
                                <MainChart/>
                            </div>
                        </div>
                        <div className="col-lg-3 offset-lg-1 p-lg-3 px-lg-0 mt-5 mt-lg-0">
                            <Sidebar/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
