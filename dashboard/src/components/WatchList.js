    import React,{useState,useContext} from 'react';
    import {Tooltip, Grow} from "@mui/material";
    import axios from "axios";

    import GeneralContext from "./GeneralContext";
    import {watchlist} from "../data/data";
    import { DoughnoutChart } from "./DoughnoutChart.js";
    import {KeyboardArrowUp,KeyboardArrowDown, BarChartOutlined, MoreHorizOutlined, Subway} from "@mui/icons-material"
    const labels = watchlist.map((Subarray)=>Subarray["name"])
    const WatchList = () =>{
    const data = {
        labels,
        datasets: [
        {
            label: "Price",
            data: watchlist.map((stock) => stock.price),
            backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(153, 102, 255, 0.5)",
            "rgba(255, 159, 64, 0.5)",
            ],
            borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
        },
        ],
        }
        return (
            <div className='watchlist-container'>
                <div className='search-container'>
                    <input type='text' name='search' id='search' className='search' placeholder='Search eg:info, nifty fut quuickly, gold mcx'/>
                    <span className='counts'>{watchlist.length} / 50</span>
                </div>
                <ul className='list'>
                    {watchlist.map((stock,index)=>{
                        return(
                        <WatchLIstItem stock={stock} key={index}/>
                        )
                    })}
                </ul>
                <DoughnoutChart data={data}/>
            </div>
        )
    }


    export default WatchList
    const WatchLIstItem = ({stock}) =>{
        const [showWatchlistActions,setShowWatchlistActions] = useState(false);
        const handleMouseEnter = (e)=>{
                setShowWatchlistActions(true);
        }
        const handleMouseLeave = (e)=>{
                setShowWatchlistActions(false);
        }
        return (
            <>
                <li onMouseEnter={handleMouseEnter} onmouseleave={handleMouseLeave}>
                    <div className='item'>
                        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
                        <div className='itemInfo'>
                            <span className='percent'>{stock.percent}</span>
                            {stock.isDown ? <KeyboardArrowDown className="down"/> : <KeyboardArrowUp className="up"/>}
                            <span className='percent'>{stock.price}</span>
                        </div>
                    </div>
                    {showWatchlistActions && <WatchListActions uid={stock.name}/>}
                </li>
            </>
        )
    }
    const WatchListActions = ({uid})=>{
        const generalContext = useContext(GeneralContext);

    const handleBuyClick = () => {
        generalContext.openBuyWindow(uid);
    };
    const handleSellClick = () => {
        generalContext.openSellWindow(uid);
    };
        return (
            <>
            <span className='actions'>
                <span>
                <Tooltip title="Buy (B)" placement='top' arrow TransitionComponent={Grow} onClick={handleBuyClick}>
                    <button className='buy'>Buy</button>
                </Tooltip>
                <Tooltip title="sell (s)" placement='top' arrow TransitionComponent={Grow} onClick={handleSellClick}>
                    <button className='sell'>Sell</button>
                </Tooltip>
                <Tooltip title="Analytics (A)" placement='top' arrow TransitionComponent={Grow}>
                    <button className='action'><BarChartOutlined className='icon'/></button>
                </Tooltip>
                <Tooltip title="Analytics (A)" placement='top' arrow TransitionComponent={Grow}>
                    <button className='action'><MoreHorizOutlined className='icon'/></button>
                </Tooltip>          
                </span>
            </span>
            </>
        )
    }