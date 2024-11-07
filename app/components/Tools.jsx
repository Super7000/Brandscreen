import React from 'react'
import toolsData from '../data/tools'
import Image from 'next/image'

function Tools() {
    return (
        <section className="container mt-5">
            <h1 className="fw-bold text-center">
                <span className="text-primary">Your all-in-one tool</span> for gathering and
                showcasing powerful social proof
            </h1>
            {toolsData.map((data, index) => (
                <Tool
                    key={index}
                    reverse={(index % 2) === 0 ? false : true}
                    quote={data.quote}
                    user={data.user}
                    title={data.title}
                    subtitle={data.subtitle}
                    features={data.features}
                />
            ))}
        </section>
    )
}

function Tool({ reverse = false, quote, user, title, subtitle, features }) {
    return (
        <div className="row mt-5 gy-4">
            {reverse && <ToolRightSide title={title} subtitle={subtitle} features={features} />}
            <ToolLeftSide quote={quote} profilePic={user.profilePic} name={user.name} website={user.website} reverse={reverse} />
            {!reverse && <ToolRightSide title={title} subtitle={subtitle} features={features} />}
        </div>
    )
}

function ToolLeftSide({ quote, profilePic, name, website, reverse = false }) {
    return (
        <div className={"col-12 col-lg-6 " + (reverse ? "order-lg-2 order-1" : "order-lg-1 order-2")}>
            <div
                className="card h-100 gradient-bg-primary border border-4"
                style={{ borderRadius: "0.8rem" }}
            >
                <div className="card-body p-4 d-grid">
                    <h4 className="card-title mt-2 fs-2">
                        {quote}
                    </h4>
                    <div className="d-flex align-items-center mt-auto">
                        <Image
                            className="bg-light border border-dark rounded-circle"
                            width={80}
                            height={80}
                            src={profilePic}
                            alt='profile picture'
                        />
                        <div className="ms-3 fs-4">
                            <div className="fw-bold lh-1">{name}</div>
                            <div className="fs-5">{website}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ToolRightSide({ title, subtitle, features, reverse = false }) {
    return (
        <div className={"col-12 col-lg-6 " + (reverse ? "order-lg-1 order-2" : "order-lg-2 order-1")}>
            <div className="text-primary fw-bold">{title}</div>
            <h1 className="fw-bold">{subtitle}</h1>
            <div className="row mt-3 gy-3">
                {features.map((feature, index) => (
                    <div key={index} className="col-12 col-md-6">
                        <Image
                            width={70}
                            height={70}
                            src={feature.icon}
                            className="bg-light rounded-circle"
                            alt='feature icon'
                        />
                        <div className="fw-bold fs-4">{feature.title}</div>
                        <div>{feature.description}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tools