import React from 'react';

const Card = () => {
    return (
        <div className='card p-16px shadow-100 rounded-8px'>
            <div className="card__image mb-8px">
                <img src="https://cdn.dribbble.com/userupload/3982464/file/original-548ac7eb6fdadc19494b3357076e5eed.png?compress=1&resize=1024x768" 
                    alt="" 
                    className='h-100 w-100'
                />
            </div>
            <div className="card__content">
                <h3 className="card__title mb-8px">Skillex Edtech Case Study</h3>
                <p className="card__desc mb-8px">Skillex has facilitated practical learning experiences for students all over the globe for 10 years now. This platform is a place to learn from world-leading experts in their field. It is priceless to become a member of a supportive community. Students can choose between 250 online courses in 10 fields, including data science, art, business, and many others.</p>
                <a href="#" className="link">View Detail</a>
            </div>
        </div>
    );
};

export default Card;