import React from 'react'
import testimonials, { tags } from '../data/gallery'
import Image from 'next/image';

function Gallery() {
    return (
        <section className="container">
            <h1 className="text-center fw-bold">
                We know testimonials drive trust
                <br />
                <span className="text-primary">— here’s why people trust us</span>
            </h1>
            <div
                className="row text-nowrap justify-content-center mt-3"
                style={{ gap: "1rem" }}
            >
                {tags.map(tag => (
                    <div className="card col-auto p-2 px-4" key={tag.text}>
                        <p className="card-text">{tag.icon} {tag.text}</p>
                    </div>
                ))}
            </div>
            <div className="gallery mt-4">
                {testimonials.map((testimonial, index) => {
                    if (testimonial.type === "image") {
                        return <ImageCard key={index} testimonial={testimonial} />;
                    } else {
                        return <TestimonialCard key={index} testimonial={testimonial} />;
                    }
                })}
            </div>
        </section>
    )
}

function TestimonialCard({ testimonial }) {
    return (
        <div className="card text-start">
            <div className="card-body">
                <div className="d-flex align-items-center me-auto">
                    <Image
                        className="bg-light border border-dark rounded-circle"
                        width={40}
                        height={40}
                        src={testimonial.profilePic}
                        alt="profile picture"
                    />
                    <div className="ms-2 lh-1">
                        <div className="fw-bold m-0">{testimonial.name}</div>
                        <div>{testimonial.website}</div>
                    </div>
                </div>
                <div className="mt-2">
                    {[...Array(testimonial.stars)].map((_, i) => (
                        <i key={i} className="fas fa-star" style={{ color: "rgb(255, 196, 0)" }} />
                    ))}
                </div>
                <div className="card-text my-2">{testimonial.text}</div>
                <small className="text-muted">{testimonial.date}</small>
            </div>
        </div>
    );
}

function ImageCard({ testimonial }) {
    return (
        <div className="card px-0 text-start overflow-hidden" style={{ borderRadius: "0.8rem" }}>
            <div>
                <img
                    src={testimonial.thumbnail}
                    height={testimonial.height}
                    className="w-100"
                    style={{ zIndex: -1 }}
                    alt='testimonial thumbnail'
                />
                <div
                    style={{
                        position: "absolute",
                        top: testimonial.top,
                        background: "linear-gradient(transparent 10%, rgba(0, 0, 0, 0.7) 90%)"
                    }}
                    className="ps-3 text-white w-100 pb-3"
                >
                    <div className="mt-2">
                        {[...Array(testimonial.stars)].map((_, i) => (
                            <i key={i} className="fas fa-star" style={{ color: "rgb(255, 196, 0)" }} />
                        ))}
                    </div>
                    <h4 className="fw-bold m-0">{testimonial.name}</h4>
                    <div>{testimonial.website}</div>
                </div>
            </div>
            {testimonial.text && <div className="card-body">
                <div className="card-text my-2">{testimonial.text}</div>
                <small className="text-muted">{testimonial.date}</small>
            </div>}
        </div>
    );
}

export default Gallery