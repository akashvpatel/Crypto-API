import React from 'react'
import "./Coinitem.css"
const CoinItem = (props) => {
    return (
        <div className='card w-75 coinitem'>
            <div className='card-body  coinbody'>
                <p>{props.coins.market_cap_rank}</p>
                <div className='coinimg'>
                    <img className='img' src={props.coins.image} alt="" />
                    <p>{props.coins.symbol}</p>
                </div>
                <p>₹ {props.coins.current_price}</p>
                <p>{props.coins.market_cap_change_percentage_24h}%</p>
                <p>₹ {props.coins.total_volume}</p>
                <p>₹ {props.coins.market_cap}</p>
            </div>
        </div>
    )
}

export default CoinItem