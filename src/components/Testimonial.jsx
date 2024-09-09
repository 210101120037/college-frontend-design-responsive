import React from 'react';

const Testimonial = () => {
    return (
        <section className="testimonial">
            <div className="container">
                <h2>What Our Student Says</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
                    reprehenderit voluptatibus autem?
                </p>
                <div className="testimonial-grid">
                    <div className="testimonial-card">
                        <img
                            src="path/to/student-image-1.jpg"
                            alt="Muskan Kumari"
                        />
                        <h4>Muskan Kumari</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
                            inventore facilis molestias.
                        </p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <img
                            src="path/to/student-image-2.jpg"
                            alt="Ravi Raj Robins"
                        />
                        <h4>Ravi Raj Robins</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
                            inventore facilis molestias.
                        </p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;