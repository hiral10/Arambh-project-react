import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { cardDetail, sideCard } from "./CardItems"
import './Card.css'
const Card=()=>{
    const className=[{article:"postcard light blue",h1:"postcard__title blue"}]
return(
  <div className='card-section'>
    <section className="light" style={{width:"59%"}}>
        <div className="container">
        {cardDetail.map((item, index) => {
                        return (
        <article className={item.articleClass} key={index}>
          <a className="postcard__img_link" href="#">
            <img className="postcard__img"
              src={item.image}
              alt={item.imageTitle} />
          </a>
          <div className="postcard__text t-dark">
            <h1 className={item.h1Class}><a href="#">{item.title}</a></h1>
            <div className="postcard__subtitle small">
              <time dateTime="2020-05-25 12:00:00" style={{float:'left'}}>
               <CalendarMonthIcon style={{height:20}}/>
               {item.articleCreated}
              </time>
            </div>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt"> {item.previewText}</div>
            <ul className="postcard__tagbox">

              <li className="tag__item"><AccessTimeIcon style={{height:15}}/>{item.ReadingTime}</li>
              <li className="tag__item play blue">
                <a href="#"><LocalLibraryIcon style={{height:15}}/>Continue Reading</a>
              </li>
            </ul>
          </div>
        </article>
         )
        })}
        </div>
    </section>
    <div className="side-cards">
    {sideCard.map((item, index) => {
                        return (
      <div className="card" style={{width: 300,margin:30}} key={index}>
        <img src={item.image} className="card-img-top" alt="..."/>
        <div className="card-body text-center">
          <h5 className="card-title text-dark">{item.title}</h5>
          <p className="card-text text-dark">{item.text}</p>
        </div>
      </div>
      )
    })}
     
    </div>
    </div>
)
}
export default Card