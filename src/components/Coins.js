import React from "react";
import CoinItem from "./CoinItem";
import "./Coins.css"
const Coins = (props) => {
    return (
        <div  >
            <div className="card w-75 coinbox ">
                <div className="card-body coins">
                    <p>No.</p>
                    <p>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p>Volume</p>
                    <p>Market Cap</p>

                </div>

            </div>
            <div>
                {props.coins.map(coins => {
                    return (
                        <CoinItem coins={coins} key={coins.id} />
                    )
                })}
            </div>
        </div>
    )
}

export default Coins;

<div class="card w-75">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Button</a>
    </div>
</div>