import { NavLink } from "react-router-dom";

const SingleService = ({car}) => {
    const {img,title,_id}=car
    return (
        <div className="h-[300px]">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className="h-[200px]" src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
     <NavLink to={`/checkout/${_id}`}>
        <button className="btn">Book Now</button>
     </NavLink>
    </div>
  </div>
</div>
        </div>
    );
}

export default SingleService;
