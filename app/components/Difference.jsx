import React from 'react'

function Difference({ leftTitle, rightTitle, leftList = [], rightList = [], leftImgSrc, rightImgSrc }) {
    return (
        <section className="container mt-5">
            <h1 className="text-center text-white fw-bold">
                “It’s by far the best testimonial <br />
                collection tool on the market.”
            </h1>
            <div className="my-4 mb-5 d-grid justify-content-center">
                <img className="mx-auto rounded-circle" src="/images/profile-pics/1.avif" alt='profile picture' />
                <div className="text-center text-white">
                    <div className="fw-bold">Bruno Hiis</div>
                    <div>Founder, Featurebase</div>
                </div>
            </div>
            <div className="d-grid d-md-flex mt-3" style={{ gap: "1rem" }}>
                <div
                    className="card w-100 w-md-50 rounded-card overflow-hidden border border-4"
                    style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                    <img
                        className="card-img-top bg-light"
                        style={{
                            height: 300,
                            objectFit: "cover",
                            objectPosition: "center center"
                        }}
                        src={leftImgSrc}
                        alt='card thumbnail'
                    />
                    <div className="card-body m-4 bg-white rounded">
                        <h3 className="card-title fw-bold">{leftTitle}</h3>
                        <p className="card-text"></p>
                        <ul className="cross-list px-3">
                            {leftList.map(elem => <li key={elem}>{elem}</li>)}
                        </ul>
                        <p />
                    </div>
                </div>
                <div
                    className="card w-100 w-md-50 rounded-card overflow-hidden border border-4"
                    style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                    <img
                        className="card-img-top bg-light"
                        style={{
                            height: 300,
                            objectFit: "cover",
                            objectPosition: "center center"
                        }}
                        src={rightImgSrc}
                        alt='card thumbnail'
                    />
                    <div className="card-body m-4 bg-white rounded">
                        <h3 className="card-title fw-bold text-primary">
                            {rightTitle}
                        </h3>
                        <p className="card-text"></p>
                        <ul className="tick-list tick-list-primary px-3">
                            {rightList.map(elem => <li key={elem}>{elem}</li>)}
                        </ul>
                        <p />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Difference