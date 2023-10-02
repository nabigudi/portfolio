import { Portfolio } from "../../../types/Portfolio";
import "./index.scss";
import AnimatedButton from "../../../components/AnimatedButton";
import { Link } from "react-router-dom";

interface ItemProps {
  item: Portfolio
}

const Item = ({item} : ItemProps) => { 

  return(
    <Link to={'/selectedPortfolio'} state={{item: item}} className="image-box" >
      <img 
      src={require(`../../../assets/images/${item.cover}`)}
      className="portfolio-image"
      alt="portfolio" />
      <div className="content">
        <p className="title">{item.title}</p>
        <h4 className="description">{item.description}</h4>
        <AnimatedButton str={"View"} page={''} state={{}} isLink={false}/>
      </div>
    </Link>
  )
}

export default Item;
