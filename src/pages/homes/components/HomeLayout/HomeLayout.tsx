


export default function HomeLayout() {
    return (
        <>
            {/* Carousel wrapper */}
            <div
                id="carouselDarkVariant"
                className="carousel slide carousel-fade carousel-dark"
                data-mdb-ride="carousel"
            >
                {/* Indicators */}
                <div className="carousel-indicators">
                    <button
                        data-mdb-target="#carouselDarkVariant"
                        data-mdb-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    />
                    <button
                        data-mdb-target="#carouselDarkVariant"
                        data-mdb-slide-to={1}
                        aria-label="Slide 1"
                    />
                    <button
                        data-mdb-target="#carouselDarkVariant"
                        data-mdb-slide-to={2}
                        aria-label="Slide 1"
                    />
                </div>
                {/* Inner */}
                <div className="carousel-inner">
                    {/* Single item */}
                    <div className="carousel-item active">
                        <img
                            src="https://www.charleskeith.vn/on/demandware.static/-/Library-Sites-CharlesKeithVN/default/dw53356bbd/images/homepage/2023/Charleskeith_home_A3_week44-1000x1250.jpg"
                            className="d-block w-100"
                            alt="Motorbike Smoke"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>NHỮNG SẢN PHẨM YÊU THÍCH</h5>
                            <p>SHOP THE EDIT.</p>
                        </div>
                    </div>
                    {/* Single item */}
                    <div className="carousel-item">
                        <img
                            src="https://www.charleskeith.vn/on/demandware.static/-/Library-Sites-CharlesKeithVN/default/dwb1bc1d26/images/homepage/2023/Charleskeith_home_A2_week44-1000x1250.jpg"
                            className="d-block w-100"
                            alt="Mountaintop"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>NHỮNG PHIÊN BẢN MÙA THU</h5>
                            <p>SHOP THE EDIT.</p>
                        </div>
                    </div>
                    {/* Single item */}
                    <div className="carousel-item">
                        <img
                            src="https://www.charleskeith.vn/on/demandware.static/-/Library-Sites-CharlesKeithVN/default/dw5fee5df4/images/homepage/2023/Charleskeith_home_A6_week44-1000x1250.jpg"
                            className="d-block w-100"
                            alt="Woman Reading a Book"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>THOẢI MÁI THỂ HIỆN CÁ TÍNH</h5>
                            <p>
                                SHOP THE EDIT.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Inner */}
                {/* Controls */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-mdb-target="#carouselDarkVariant"
                    data-mdb-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-mdb-target="#carouselDarkVariant"
                    data-mdb-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* Carousel wrapper */}
        </>

    )
}