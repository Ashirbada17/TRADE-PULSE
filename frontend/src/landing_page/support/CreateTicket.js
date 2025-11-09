import React from 'react'
function CrateTicket() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5'>
                <h1 className='fs-2'>To create a ticket, select a releavant topic</h1>
                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4><i class="fa-solid fa-circle-plus"></i>&nbsp;Account opening</h4>
                    <a href="" style={{textDecoration:'none' , lineHeight:"2.5"}}> Resident individual</a><br/>
                    <a href="" style={{textDecoration:'none' , lineHeight:"2.5"}}> Minor</a><br/>
                    <a href="" style={{textDecoration:'none' , lineHeight:"2.5"}}> Non Resident Indian (NRI)</a><br/>
                    <a href="" style={{textDecoration:'none' , lineHeight:"2.5"}}> Company, Partnership, HUF and LLP</a><br/>
                    <a href="" style={{textDecoration:'none' , lineHeight:"2.5"}}> Glossary</a>
                </div>  
                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4><i class="fa-solid fa-circle-user"></i>&nbsp;Your TradePulse account</h4>
                    <a href="" style={{textDecoration:'none' , lineHeight:"2.5"}}> Your Profile</a><br/>
                    <a href="" style={{textDecoration:'none' , lineHeight:"2.5"}}>Account modification</a><br/>
                    <a href="" style={{textDecoration:'none' , lineHeight:"2.5"}}> Client Master Report (CMR) and Depository Participant (DP)</a><br/>
                    <a href="" style={{textDecoration:'none' , lineHeight:"2.5"}}> Nomination</a><br/>
                    <a href="" style={{textDecoration:'none' , lineHeight:"2.5"}}> Transfer and conversion of securities</a>
                </div>  
                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4><i class="fa-solid fa-sink"></i>&nbsp;Kite</h4>
                    <a href="" style={{textDecoration:'none' , lineHeight:"2.5"}}> IPO</a><br/>
                    <a href="" style={{textDecoration:'none' , lineHeight:"2.5"}}> Trading FAQs</a><br/>
                    <a href="" style={{textDecoration:'none' , lineHeight:"2.5"}}> Margin Trading Facility (MTF) and Margins</a><br/>
                    <a href="" style={{textDecoration:'none' , lineHeight:"2.5"}}> Charts and orders</a><br/>
                    <a href="" style={{textDecoration:'none' , lineHeight:"2.5"}}> Alerts and Nudgesy</a>
                </div> 
                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4><i class="fa-solid fa-filter-circle-dollar"></i>&nbsp;Funds</h4>
                    <a href="" style={{textDecoration:'none' , lineHeight:"2.5"}}> Add money</a><br/>
                    <a href="" style={{textDecoration:'none' , lineHeight:"2.5"}}> Withdraw money</a><br/>
                    <a href="" style={{textDecoration:'none' , lineHeight:"2.5"}}>Add bank accounts</a><br/>
                    <a href="" style={{textDecoration:'none' , lineHeight:"2.5"}}> eMandates</a><br/>
                    {/* <a href="" style={{textDecoration:'none' , lineHeight:"2.5"}}> Glossary</a> */}
                </div>  
                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4><i class="fa-solid fa-terminal"></i>&nbsp;Console</h4>
                    <a href="" style={{textDecoration:'none' , lineHeight:"2.5"}}> Portfolio</a><br/>
                    <a href="" style={{textDecoration:'none' , lineHeight:"2.5"}}> Funds statement</a><br/>
                    <a href="" style={{textDecoration:'none' , lineHeight:"2.5"}}> Reports</a><br/>
                    <a href="" style={{textDecoration:'none' , lineHeight:"2.5"}}> Profile</a><br/>
                    <a href="" style={{textDecoration:'none' , lineHeight:"2.5"}}>Segments</a>
                </div>  
                {/* <div className='col-4 p-5 mt-2 mb-2'>
                    <h4><i class="fa-solid fa-circle-plus"></i>Account opening</h4>
                    <a href="" style={{textDecoration:'none' , lineHeight:"2.5"}}> Resident individual</a><br/>
                    <a href="" style={{textDecoration:'none' , lineHeight:"2.5"}}> Minor</a><br/>
                    <a href="" style={{textDecoration:'none' , lineHeight:"2.5"}}> Non Resident Indian (NRI)</a><br/>
                    <a href="" style={{textDecoration:'none' , lineHeight:"2.5"}}> Company, Partnership, HUF and LLP</a><br/>
                    <a href="" style={{textDecoration:'none' , lineHeight:"2.5"}}> Glossary</a>
                </div>   */}
            </div>
        </div>
    );
}

export default CrateTicket;