const About = () => {
    return (
        <section id='about'>
            <view className='about-left-section'>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranian restaurant, focused on traditional recipes served with a modern twist.</p>
            </view>
            <view>
                <img className='top about-image' src={require('../icons_assets/restaurant.jpg')} alt='Resturant waiter holding food' />
                <img className='about-image' src={require('../icons_assets/mario-and-adrian.jpg')} alt='Resturant waiter holding food' />
            </view>
        </section>
    )
}

export default About;