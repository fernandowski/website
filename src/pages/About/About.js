import './About.css';
import React from 'react';
import ContentCard from "../../components/ContentCard/ContentCard";
import InterestList from "./InterestList/InterestList";

function About() {
    return (
        <ContentCard>
            <section className='about-me-container'>
                <InterestList>
                </InterestList>
            </section>
        </ContentCard>

    );
}

export default About;
