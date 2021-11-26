import React from 'react'

const AboutUs = () => {
    return (
        <div className="container mt-5">
            <div className="card text-center">
                <div className="card-header">
                    Sobre el proyecto
                </div>
                <div className="card-body">
                    <h5 className="card-title">Ecommerce</h5>
                    <p className="card-text">Proyecto desarrollado para el modulo de React de Academlo.</p>
                    <h6>Desarrollado con:</h6>
                    <p>React</p>
                    <p>Bootstrap</p>
                    <p>Font Awesome</p>
                    
                    <a href="https://www.ocaranza.cl" className="btn btn-secondary">Visitar Portafolio</a>
                </div>
                <div className="card-footer text-muted">
                    Noviembre 2021
                </div>
            </div>
        </div>
    )
}

export default AboutUs