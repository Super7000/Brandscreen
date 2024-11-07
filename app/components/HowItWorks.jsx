import React from 'react'
import howItWorksData from '../data/howItWorks'
import Image from 'next/image'

function HowItWorks() {
    return (
        <section className="container mt-5">
            <h1 className="text-center fw-bold">
                Show social proof
                <br /> <span className="text-primary">everywhere</span>
            </h1>
            <p className="text-center fs-5 text-secondary w-50 mx-auto">
                For everything from social media to emails website toasters, you can turn
                your testimonials into conversion-optimizing assets displayed anywhere you
                want.
            </p>
            <div className="row mt-5 gy-4">
                <div className="col-12 col-lg-6">
                    <div className="fw-bold text-primary">How it works</div>
                    <h1 className="fw-bold">
                        Start collecting &amp; sharing testimonials{" "}
                        <span className="text-primary">in a few easy steps</span>
                    </h1>
                </div>
                <div className="col-12 col-lg-6">
                    <div
                        className="card border border-5"
                        style={{
                            borderRadius: "1rem",
                            background:
                                "linear-gradient(105.47834442845968deg, #9954f2 0%, rgba(103, 1, 239, 1) 100%)"
                        }}
                    >
                        <div className="card-body text-white">
                            <i className="fas fa-star" style={{ color: "rgb(255, 196, 0)" }} />
                            <i className="fas fa-star" style={{ color: "rgb(255, 196, 0)" }} />
                            <i className="fas fa-star" style={{ color: "rgb(255, 196, 0)" }} />
                            <i className="fas fa-star" style={{ color: "rgb(255, 196, 0)" }} />
                            <i className="fas fa-star" style={{ color: "rgb(255, 196, 0)" }} />
                            <h4 className="card-title mt-2">
                                I just jumped in and put Senja to work
                                <br />
                                <span className="text-white-50">
                                    — that{"'"}s how clean and clear the UX is.
                                </span>
                            </h4>
                            <div className="d-flex align-items-center mt-2">
                                <Image
                                    className="bg-light border border-dark rounded-circle"
                                    width={60}
                                    height={60}
                                    src="/images/profile-pics/1.avif"
                                    alt='profile picture'
                                />
                                <div className="ms-3">
                                    <div className="fw-bold">Ed Leake</div>
                                    <div>edleake.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4 gy-4">
                {howItWorksData.map(data => <Card {...data} key={data.title} />)}
            </div>
        </section>
    )
}

function Card({ imgSrc, title, text }) {
    return (
        <div className="card col-12 col-md-6 col-lg-3 border border-0 rounded overflow-hidden bg-transparent">
            <Image
                className="card-img-top bg-light mb-3 border border-4"
                width={285}
                height={150}
                style={{ borderRadius: "1rem" }}
                src={"/images/card-thumbnails/" + imgSrc}
                alt={"card thumbnail"}
            />
            <h4 className="card-title fw-bold">{title}</h4>
            <p className="card-text">
                {text}
            </p>
        </div>
    )
}

export default HowItWorks