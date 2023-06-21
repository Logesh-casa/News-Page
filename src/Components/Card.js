import "../Css/Card.css";

const Card = ({ item }) => {
   return (
      <div className="card">
         <div className="card-image">
            <img src={item.image} />
         </div>
         <div className="card-content">
            <div className="card-number">{item.number}</div>
            <div className="card-heading">{item.heading}</div>
            <div className="card-desc">{item.desc}</div>
         </div>
      </div>
   );
};

export default Card;
