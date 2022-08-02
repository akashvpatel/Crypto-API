import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Coins from "./components/Coins";
import Footer from "./components/Footer";



function App() {
  const [coins, setCoins] = useState([]);

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=25&page=1&sparkline=false"
  useEffect(() => {
    fetch(url)
    .then((response)=>response.json()
    .then((data)=>setCoins(data)))
 
    }
    
  )

  function NewsFeedHandler(props) {


    function CoinFeedHandler() {


    }

  }


  return (


    <React.Fragment>

      <NavBar />
      <Coins coins={coins} />
<Footer/>

    </React.Fragment>
  );
}

export default App;
