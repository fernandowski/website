import './ContentCard.css';
function ContentCard ({ children }) {
    return (
        <section className='container'>
            <div className='card-outline main-content'>
                {children}
            </div>
        </section>
    )
}

export default ContentCard;
