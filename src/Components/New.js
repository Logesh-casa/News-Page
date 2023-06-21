import "../Css/New.css";

const New = () => {
   const newsContent = [
      {
         heading: "Hydrogen VS Electric Cars",
         description: "Will hydrogen-fueled cars ever catch up to EVs?",
      },
      {
         heading: "The Downsides of AI Artistry",
         description:
            "What are the possible adverse effects of on-demand AI image generation?",
      },
      {
         heading: "Is VC Funding Drying Up?",
         description:
            "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
      },
   ];

   return (
      <div className="new">
         <h1 className="new-heading">New</h1>
         {newsContent.map((item, index) => {
            if (index !== newsContent.length - 1) {
               return (
                  <div>
                     <h3 className="each-news-heading">{item.heading}</h3>
                     <p className="each-news-description">{item.description}</p>
                     <div className="new-separator"></div>
                  </div>
               );
            } else {
               return (
                  <div>
                     <h3 className="each-news-heading">{item.heading}</h3>
                     <p className="each-news-description">{item.description}</p>
                  </div>
               );
            }
         })}
      </div>
   );
};

export default New;
