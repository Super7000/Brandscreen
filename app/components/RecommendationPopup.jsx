'use client'
import React, { useState } from 'react'

function RecommendationPopup() {
    const [show, setShow] = useState(true)
    
    if (!show) return null;

    return (
        <div
            className="card mb-3 me-4 recommendation-popup"
            style={{
                maxWidth: 450,
                position: "fixed",
                bottom: "1.5rem",
                left: "1.5rem",
                borderRadius: "1rem",
                cursor: "pointer",
                zIndex: 20
            }}
        >
            <div className="row g-0">
                <div className="col-4">
                    <img
                        src="/images/card-thumbnails/4.webp"
                        className="img-fluid h-100"
                        style={{ borderRadius: "1rem 0 0 1rem" }}
                        alt="Card title"
                    />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <button
                            type="button"
                            className="recommendation-popup-close-btn btn-close position-absolute bg-light p-0 m-0 border border-2"
                            style={{
                                right: 0,
                                top: 0,
                                borderRadius: "50%",
                                width: 30,
                                height: 30,
                                transform: "translate(40%,-40%)",
                                opacity: 1
                            }}
                            aria-label="Close"
                            onClick={() => setShow(false)}
                        />
                        <h5 className="card-title">Card title</h5>
                        <div className="card-text">
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                        </div>
                        <p className="card-text">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendationPopup