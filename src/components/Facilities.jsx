import React from 'react';

const Facilities = () => {
    return (
        <section className="facilities">
            <div className="container">
                <h2>Our Facilities</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempora
                    neque.
                </p>
                <div className="facilities-grid">
                    <div className="facility-card">
                        <img
                            src="path/to/library-image.jpg"
                            alt="Our Library Section"
                        />
                        <h3>Our library Section</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Quos, sint minus! Necessitatibus rem adipisci
                            quaerat aspernatur itaque harum cupiditate.
                        </p>
                    </div>
                    <div className="facility-card">
                        <img
                            src="path/to/hall-image.jpg"
                            alt="Largest Hall Section"
                        />
                        <h3>Largest Hall Section</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Quos, sint minus! Necessitatibus rem adipisci
                            quaerat aspernatur itaque harum cupiditate.
                        </p>
                    </div>
                    <div className="facility-card">
                        <img
                            src="path/to/food-image.jpg"
                            alt="Our food Section"
                        />
                        <h3>Our food Section</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Quos, sint minus! Necessitatibus rem adipisci
                            quaerat aspernatur itaque harum cupiditate.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Facilities;