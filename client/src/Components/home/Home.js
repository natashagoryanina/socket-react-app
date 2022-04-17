import React from 'react';
import HomeContainer from './HomeStyled';

const Home = () => {
    return (
        <HomeContainer>
            <h1 className='home-header'>The Price Ticker Service</h1>
            <p className='home-text'>
                A limited number of stocks appear on the stock ticker during any particular period, 
                due to a large number of stocks trading at the same time. Often, the stocks with 
                the greatest change in price from the previous day's trading session, or those 
                trading under the highest volume appear on the stock ticker.
            </p>
            <p className='home-text'>
                You have probably seen a stock ticker scrolling by at the bottom of the financial 
                news networks on television. The ticker provides current information for certain 
                stocks, including the ticker symbol (the one-to four-letter code that represents a 
                particular stock), quantity traded (volume for each transaction), price, a green "up" 
                arrow if the price is higher than the previous day's closing value, a red "down" 
                arrow if the price is lower, and the net price change (either as a dollar amount or
                percentage) from the previous day's close.
            </p>
        </HomeContainer>
    );
};

export default Home;