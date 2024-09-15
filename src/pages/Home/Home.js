import './Home.css';
import React from "react";
import ContentCard from "../../components/ContentCard/ContentCard";

function Home() {
    return (
        <ContentCard>
            <div className='personal-info-card'>
                <div className='personal-info-description'>
                    <h1>Welcome to My Personal Website</h1>
                    <p>
                        I'm Fernando, a developer who enjoys working on different projects and kind of technologies.
                        Thanks
                        for
                        arriving at my page to learn more about me.
                    </p>
                </div>
                <div className='photo-container'>
                    <div className='personal-photo'></div>
                </div>
            </div>
        </ContentCard>
    )
}

export default Home;
