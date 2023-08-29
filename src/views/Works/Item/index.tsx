import { Job } from "../../../types/Job";
import "./index.scss";
import AnimatedButton from "../../../components/AnimatedButton";
import { Link } from "react-router-dom";

interface ItemProps {
  item: Job
}

const Item = ({item} : ItemProps) => { 

  return(
    <Link to={'/selectedWork'} state={{item: item}} className="image-box" >
      <img 
      src={require(`../../../assets/images/works/${item.cover}`)}
      className="jobs-image"
      alt="portfolio" />
      <div className="content">
        <p className="title">{item.title}</p>
        <h4 className="company">{item.company}</h4>
        <h4 className="description">{item.description}</h4>
        <AnimatedButton str={"View"} page={''} state={{}} isLink={false}/>
      </div>
    </Link>
  )
}

export default Item;
