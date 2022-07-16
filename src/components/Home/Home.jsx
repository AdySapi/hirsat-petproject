import React from 'react';
import Layout from '../Layout';

function Home() {
    return (
        <Layout>
            <div className="homeContainer">
                <div className="upcomingEvent">
                    <img></img>
                    <span>Palermo here we come!</span>
                </div>
                <div className="playerOFTheYear">
                    <img src="https://instagram.fbud7-4.fna.fbcdn.net/v/t51.2885-15/273567397_2304414519696520_5248937601593635533_n.jpg?stp=c106.0.867.867a_dst-jpg_e15_s480x480&cb=2d435ae8-326fec31&_nc_ht=instagram.fbud7-4.fna.fbcdn.net&_nc_cat=104&_nc_ohc=svD5MQkvwioAX8rY1a_&edm=APU89FABAAAA&ccb=7-5&oh=00_AT_CaCgPUtAmbi0wuEkEU4C-05pdP5WrAiP4WDJjDpuObw&oe=62DA1D61&_nc_sid=86f79a" alt="" />
                    <span>Player of The Year 2021</span>
                </div>
                <div className="recentResults">
                    <img src="" alt="" />
                    <span>6x Hungarian Champions</span>
                </div>
            </div>
        </Layout>
    )
}

export default Home
