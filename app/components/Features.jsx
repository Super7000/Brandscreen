import React from 'react'
import featuresData from '../data/features'
import Image from 'next/image'

function Features() {
    return (
        <section className="container mt-5">
            <h1 className="text-center fw-bold">
                “It’s by far the best testimonial <br />
                <span className="text-primary">collection tool on the market.”</span>
            </h1>
            <div className="mt-4 d-grid">
                <Image
                    className="bg-light border border-dark rounded-circle mx-auto"
                    width={80}
                    height={80}
                    src="/images/profile-pics/1.avif"
                    alt='profile picture'
                />
                <div className="text-center">
                    <div className="fw-bold">Bruno Hiis</div>
                    <div>Founder, Featurebase</div>
                </div>
            </div>
            <div className="row mt-5 gy-4">
                <div className="col-12 col-lg-6">
                    <img
                        className="bg-light mx-auto"
                        style={{ borderRadius: "0.8rem", width: "80%" }}
                        src="/images/1.png"
                        alt='features'
                    />
                </div>
                <div className="col-12 col-lg-6">
                    <h4 className="fw-bold text-primary">
                        It’s never been easier to connect your favorite tools to simplify
                        testimonial collection &amp; showcase your success everywhere.
                    </h4>
                    <div className="row mt-3 gy-3">
                        {featuresData.map((feature, index) => (
                            <div className="col-12 col-md-6" key={index}>
                                <div className="fw-bold fs-4">{feature.title}</div>
                                <div>
                                    {feature.details}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features