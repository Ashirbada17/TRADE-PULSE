import React from 'react'
function Hero() {
    return ( 
        <section className='container-fluid' id="support-hero">
            <div className='p-5 ' id="supportWrapper">
                <h4>support portal</h4>
                <a href=''>track tickets</a>
            </div>
            <div className='row p-3 m-3'>
                <div className='col-6 p-5'>
                    <h1 className='fs-3'>
                        Search for an anser or browse help topics to craete a ticket
                    </h1>
                    <input type='text' placeholder='Eg:how do i activate F&O ...'></input>
                    <br></br>
                    <a href="">Track account opening</a>&nbsp;&nbsp;&nbsp;
                    <a href="">Track segment activation</a>&nbsp;&nbsp;
                    <a href="">Intraday margins</a>&nbsp;&nbsp;
                    <a href=""> Kite user manual</a>&nbsp;&nbsp;
                    <a href="">Learn how to create a ticket</a>
                </div>
                <div className='col-6 p-5'>
                    <h1 className='fs-3'>Featured</h1>
                    <ol>
                        <li><a href="">Current Takeovers and Delisting - january 2024</a></li>
                        <li><a href="">Latest Intraday Leaverage - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;