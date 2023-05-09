import { testimonials } from "../data";

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h2>Testimonials</h2>
            <view className="testimonials">
                {testimonials.map(item => {
                    return (
                        <view key={item.id} className="testimonial">
                            <h5>Rating: {item.rating} <img src={require('../../icons_assets/star-rating-icon.jpg')} alt='Star icon' width='20px' /></h5>
                            <view className="profile">
                                <img src={item.image} alt={item.name} />
                                <p>{item.name}</p>
                            </view>
                            <p>{item.testimonial}</p>
                        </view>
                    )
                })}
            </view>
        </section>
    )
}

export default Testimonials;