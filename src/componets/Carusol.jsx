

const Carusol = () => {
    return (
        <div>
            <div className="carousel w-full h-[450px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img  src="https://i.ibb.co/yRVzGTy/1.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
     
    </div>
    <div className="absolute flex  transform -translate-y-1/2 gap-2 right-5 bottom-3">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/RcVdhPg/2.jpg" className="w-full" />
    <div className="absolute flex  transform -translate-y-1/2 gap-2  right-5 bottom-3">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/R9xG6CC/3.jpg" className="w-full" />
    <div className="absolute flex gap-2 transform -translate-y-1/2  right-5 bottom-3">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/DkJVhPD/4.jpg" className="w-full" />
    <div className="absolute flex transform -translate-y-1/2 gap-2 right-5 bottom-3">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-red">❯</a>
    </div>
  </div>
</div>
        </div>
    );
}

export default Carusol;
