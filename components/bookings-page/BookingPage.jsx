import React from 'react'
import './Styles.css'
import BookingForm from './BookingForm'

function BookingPage(props) {
  return (
    <>
        <section id="restaurant-display">
            <img className='' src={require('../../icons_assets/restaurant-chef-b.jpg')} alt='Resturant waiter holding food' />
            <img className='' src={require('../../icons_assets/mario-and-adrian.jpg')} alt='Resturant waiter holding food' />
            <img className='' src={require('../../icons_assets/restaurant.jpg')} alt='Resturant waiter holding food' />
        </section>
        <section id='booking'>
                <BookingForm availableTimes={props.times} dispatch={props.dispatchs} formSubmit={props.form} />
        </section>
    </>
  )
}

export default BookingPage