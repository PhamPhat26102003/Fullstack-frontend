import React from 'react'

const HeaderConponent = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light" style={{ background: "#e3f2fd" }}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="http://localhost:3000/">Employee manage system</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                                <a className="nav-link" href="#">Features</a>
                                <a className="nav-link" href="#">Pricing</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default HeaderConponent