import { useLoaderData } from "react-router-dom";


const Details = () => {
    const LoadedTouristSpot=useLoaderData()
    const {_id, name, location, description, image, facilities, rating, category,bestSeason,nearbyAttractions,availableDates,ticketPrice, }=LoadedTouristSpot
    return (
        <div>
           <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <p>{ticketPrice}</p>
    <p>{location}</p>
    <p>{rating}</p>
    <p>{category}</p>
    <p>{bestSeason}</p>
    {
        facilities.map(facilitie=><p key={_id}>{facilitie}</p>)
    }
    {
        nearbyAttractions.map(attraction=><p key={_id}>{attraction}</p>)
    }
    {
        availableDates.map(date=><p key={_id}>{date}</p>)
    }
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;