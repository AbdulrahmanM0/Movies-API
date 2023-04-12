
function Slider(){

    return(
        <>
        <section className="mb-4">
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://www.etonline.com/sites/default/files/images/2022-08/dmc.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>

        </section>
        </>
    );
}
export default Slider;