import { useEffect, useState } from "react";
import SingleService from "../../componets/SingleService";

const Service = () => {
    const [cars,setCars]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/cars')
        .then(res=>res.json())
        .then(data=>setCars(data))
    },[])
    return (
        <div>
            <div className=" w-[700px] mx-auto">
                <h1 className=" text-center">Our Service Area</h1>
                 <p className=" text-center">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                {
                    cars.map(car=><SingleService
                    key={car._id}
                    car={car}
                    ></SingleService>)
                }
            </div>
        </div>
    );
}

export default Service;
