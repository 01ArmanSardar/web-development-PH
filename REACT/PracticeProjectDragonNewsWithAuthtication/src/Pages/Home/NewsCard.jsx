import { Link } from 'react-router-dom';
import star from '../../../src/assets/star.png'

const NewsCard = ({ news }) => {
    const { details, image_url, title ,rating} = news
    return (
        <div className="card bg-base-100 w-96 shadow-xl mb-3">
            <figure>
                <img
                    src={image_url}
                    alt="news" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                 {details.length>200? <p>{details.slice(0,200)}<Link className='text-sky-500' to={'/NewsDetails'}>read More</Link></p>:<p>{details}</p>}
                <hr />
                <div className="card-actions justify-end">
                    <div className='flex'>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />

                    </div>
                    <p>{rating.number}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;