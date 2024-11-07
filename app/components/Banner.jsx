import React from 'react'

function Banner({ heading = "", subHeading = "", list = [], btnText = "", imgSrc = "/images/card-thumbnails/1.avif", className }) {
    return (
        <section className={"d-grid justify-content-center mt-4 " + className}>
            <div className="card mb-3 overflow-hidden rounded-card">
                <div className="row g-0">
                    <div className="col-12 col-lg-6">
                        <div className="card-body h-100 d-grid justify-content-start px-5 py-5">
                            <h1 className="card-title fw-bold text-primary">
                                {heading}
                            </h1>
                            <p className="card-text fs-5 text-secondary">
                                {subHeading}
                            </p>
                            <ul className="tick-list">
                                {list.map(elem => <li className="mb-2" key={elem}>{elem}</li>)}
                            </ul>
                            <div
                                className="btn btn-primary p-3 px-4 fw-bold fs-4 border border-3 mt-auto me-auto"
                                style={{ borderRadius: "1rem" }}
                            >
                                {btnText}
                            </div>
                            <div className="d-flex align-items-center mt-2">
                                <div className="d-flex">
                                    <div
                                        className="bg-dark rounded-circle border border-2"
                                        style={{ width: 40, height: 40 }}
                                    ></div>
                                    <div
                                        className="bg-dark rounded-circle border border-2"
                                        style={{ width: 40, height: 40, marginLeft: "-1rem" }}
                                    />
                                    <div
                                        className="bg-dark rounded-circle border border-2"
                                        style={{ width: 40, height: 40, marginLeft: "-1rem" }}
                                    />
                                    <div
                                        className="bg-dark rounded-circle border border-2"
                                        style={{ width: 40, height: 40, marginLeft: "-1rem" }}
                                    />
                                    <div
                                        className="bg-dark rounded-circle border border-2"
                                        style={{ width: 40, height: 40, marginLeft: "-1rem" }}
                                    />
                                </div>
                                <div className="ms-2">
                                    <i
                                        className="fas fa-star"
                                        style={{ color: "rgb(255, 196, 0)" }}
                                    />
                                    <i
                                        className="fas fa-star"
                                        style={{ color: "rgb(255, 196, 0)" }}
                                    />
                                    <i
                                        className="fas fa-star"
                                        style={{ color: "rgb(255, 196, 0)" }}
                                    />
                                    <i
                                        className="fas fa-star"
                                        style={{ color: "rgb(255, 196, 0)" }}
                                    />
                                    <i
                                        className="fas fa-star"
                                        style={{ color: "rgb(255, 196, 0)" }}
                                    />
                                    <div className="text-muted">loved by 20,000+ customers</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <img
                            src={imgSrc}
                            alt="Card title"
                            className="w-100"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner