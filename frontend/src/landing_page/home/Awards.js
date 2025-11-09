import React from 'react'
function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media\images\largestBroker.svg'/>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>Largest Stock Broker in India</h1>
                    <p className='mb-5'>2+ million TradePulse Clients contribute to over 15% of all retail order volumes in inida daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                        <uL>
                        <li>
                            <p>Future And Options</p>
                        </li>
                        <li>
                            <p>Commodity Derivatives</p>
                        </li>
                        <li>
                            <p>Currency Derivatives</p>
                        </li>
                        </uL>
                        </div>
                        <div className='col-6'>
                        <uL>
                        <li>
                            <p>Stocks and IPOS</p>
                        </li>
                        <li>
                            <p>Direct mutual funds</p>
                        </li>
                        <li>
                            <p>Bonds and Governments</p>
                        </li>
                        </uL>
                        </div>
                    </div>
                    <img src='media\images\pressLogos.png' style={{width:"90%"}}/>
                </div>
            </div>
        </div>
    );
}

export default Awards;