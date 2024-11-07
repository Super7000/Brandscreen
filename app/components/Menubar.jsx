import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Menubar({ menus = [
    { name: "Pricing", link: "#" },
    { name: "Features", link: "#" },
    { name: "Customers", link: "#" },
    { name: "Why Brandname", link: "#" },
    { name: "Resources", link: "#" },
    { name: "Login", link: "#" }
] }) {
    return (
        <header className="navbar navbar-expand-lg navbar-dark menubar">
            <nav className="container">
                <Link className="navbar-brand" href="/">
                    <Image
                        src="/images/logo/1.png"
                        alt="logo"
                        width={50}
                        height={50}
                        className="rounded rounded-4"
                    />
                    <Image
                        src="/images/logo/title.png"
                        alt="logo"
                        width={165}
                        height={35}
                        className="d-inline d-lg-none d-xl-inline"
                        style={{ filter: "drop-shadow(0px 0 3px rgba(3, 7, 12, 0.5))" }}
                    />
                </Link>
                <button
                    className="navbar-toggler border border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mynavbar"
                    style={{ boxShadow: "none" }}
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav ms-auto me-lg-4 text-center text-lg-start">
                        {menus.map(menu =>
                            <li className="nav-item" key={menu.name}>
                                <a className="nav-link" href={menu.link}>
                                    {menu.name}
                                </a>
                            </li>
                        )}
                    </ul>
                    <div className="button-area d-grid justify-content-center mt-4 mt-lg-auto">
                        <a
                            href="https://app.ai4chat.co/register"
                            className="btn btn-primary fw-bold py-2 px-3 border border-0 text-nowrap"
                            style={{ borderRadius: "0.6rem" }}
                        >
                            Get Started For Free
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Menubar