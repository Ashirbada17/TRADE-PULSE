import React from 'react'
function Brojkerage() {
    return (
    <div className='container'>
        <div className='row pt-5 mt-5 text-center border-top'>
            <div className='col-8 p-4'>
                <a href="#" style={{textDecoration:"none"}}><h4 className='fs-5'>brokerage calculater</h4></a>
                <ul style={{textAlign:"left" ,lineHeight:"2-5" ,fontSize:"14px"}} className='text-muted'>
                    <li  className='mb-2'>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</li>
                    <li className='mb-2'>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</li>
                    <li className='mb-2'>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</li>
                    <li className='mb-2'>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                    <li className='mb-2'>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                    <li className='mb-2'>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                    <li className='mb-2'>Options - ₹50 per crore + GST traded value (premium value).</li>
                </ul>
            </div>   
            <div className='col-4 p-4'>
                <a href="#" style={{textDecoration:"none"}}><h4 className='fs-5'>List of charges</h4></a>
            </div>  
        </div>
    </div>
    );
}

export default Brojkerage;