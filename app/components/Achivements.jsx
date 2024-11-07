import React from 'react'
import achivementData from '../data/achivement'
import Image from 'next/image'

function Achivements() {
    return (
        <>
            <section className="container">
                <div className="row mt-5 gy-4">
                    <div className="col-12 col-lg-6">
                        <div className="h-100 bg-transparent" style={{ borderRadius: "0.8rem" }}>
                            <div className="d-grid">
                                <h4 className="card-title mt-2 fs-2 fw-bold">
                                    “Less than a month into implementing Brandscreen and{" "}
                                    <span className="text-primary">
                                        I{"'"}ve already seen a tangible impact on revenue and conversion
                                    </span>{" "}
                                    by sharing more social proof.”
                                </h4>
                                <div className="d-flex align-items-center mt-3 me-auto">
                                    <Image
                                        className="bg-light border border-dark rounded-circle mx-auto"
                                        width={80}
                                        height={80}
                                        src="/images/profile-pics/1.avif"
                                        alt='profile picture'
                                    />
                                    <div className="ms-3">
                                        <h5 className="fw-bold m-0">Ed Leake</h5>
                                        <h5 className="text-muted fw-normal">edleake.com</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-grid">
                        <h5 className="mt-4 mt-lg-auto">
                            Whether you{"'"}re an author, podcaster, YouTuber, or your own kind of niche
                            creator — Brandscreen is the go-to tool for collecting, managing, and showing
                            off your social proof to help you build trust and grow your audience.
                        </h5>
                    </div>
                </div>
            </section>
            <section className="container">
                {achivementData.map((data, index) =>
                    <Achivement
                        key={index}
                        iconSrc={"/images/icons/" + data.iconSrc}
                        title={data.title}
                        description={data.description}
                        quote={data.quote}
                        user={data.user}
                        reverse={(index % 2) === 0 ? true : false} />
                )}
            </section>
        </>
    )
}

function Achivement({ reverse = false, quote, user = { name: "user", title: "title", imgSrc }, iconSrc, title, description }) {
    return (
        <div className="row mt-5 gy-4">
            {reverse && <AchivementDetails iconSrc={iconSrc} title={title} description={description} reverse={reverse} />}
            <div className={"col-12 col-lg-6 " + (reverse ? "" : "order-lg-1 order-2")}>
                <div
                    className="card h-100 gradient-bg-primary border border-4"
                    style={{ borderRadius: "0.8rem" }}
                >
                    <div className="card-body p-4 d-grid">
                        <h4 className="card-title mt-2 fs-2">“{quote}”</h4>
                        <div className="d-flex align-items-center mt-3 me-auto">
                            <Image
                                className="bg-light border border-dark rounded-circle mx-auto"
                                width={80}
                                height={80}
                                src={"/images/profile-pics/" + user.imgSrc}
                                alt='profile picture'
                            />
                            <div className="ms-3">
                                <h5 className="fw-bold m-0">{user.name}</h5>
                                <h5>{user.title}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {!reverse && <AchivementDetails iconSrc={iconSrc} title={title} description={description} reverse={reverse} />}
        </div>
    )
}

function AchivementDetails({ iconSrc, title, description, reverse = false }) {
    return (
        <div className={"col-12 col-lg-6 " + (reverse ? "" : "order-lg-2 order-1")}>
            <Image width={150} height={150} src={iconSrc} alt='achivement icon' />
            <h1 className="fw-bold mt-2">{title}</h1>
            <div>{description}</div>
        </div>
    )

}

export default Achivements