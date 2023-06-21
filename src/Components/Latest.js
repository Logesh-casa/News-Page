import "../Css/Latest.css";
import Card from "./Card";
import retro from "../assets/images/image-retro-pcs.jpg";
import top from "../assets/images/image-top-laptops.jpg";
import gaming from "../assets/images/image-gaming-growth.jpg";

const Latest = () => {
   const latestNews = [
      {
         image: retro,
         number: "01",
         heading: "Reviving Retro PCs",
         desc: "What happens when old PCs are given modern upgrades?",
      },
      {
         image: top,
         number: "02",
         heading: "Top 10 Laptops of 2022",
         desc: "Our best picks for various needs and budgets.",
      },
      {
         image: gaming,
         number: "03",
         heading: "The Growth of Gaming",
         desc: "How the pandemic has sparked fresh opportunities.",
      },
   ];

   return (
      <div className="latest-news">
         {latestNews.map((item) => {
            return <Card item={item} />;
         })}
      </div>
   );
};

export default Latest;
