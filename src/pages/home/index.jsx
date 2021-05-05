import React from 'react';
import Feed from '../../components/Feed';

function Home(){
    return(
        <div id="home-page">
            <div id="home-page-content">
                <header id="header">
                    Home
                </header>
                <Feed/>
                <div id="sidebar">
                    Escolha o gênero do filme:
                </div>
            </div>
        </div>
    );
}
export default Home;