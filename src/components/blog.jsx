import React from 'react';
import './blog.css';
import { Link } from 'react-router-dom';

const CardSection = () => {
  const cards = [
    {
      title: 'Mental health awareness: The importance of conversation',
      description: 'Mental health awareness is critical to promoting mental health treatment and behavioral health. It’s a necessary and foundational conversation for changing to a more proactive model of mental health.',
      image: 'img/mental-health-awareness-man-next-to-window.webp',
    }
  ];

  return (<><div id="blog" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
   <h1>Blog</h1>
    <div className="card-section">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <img src={card.image} alt={card.title} className="card-image" />
          <div className="card-content">
            <h3>{card.title}</h3>
            <Link to="/blog"><p>{card.description}</p></Link>
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default CardSection;
