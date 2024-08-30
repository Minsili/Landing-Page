import React from 'react'
import PickMeals from '../assets/pick-meals-image.png';
import ChooseMeals from '../assets/choose-image.png';
import DeliveryMeals from '../assets/delivery-image.png';

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: 'Pick Meals',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores qui molestias quo autem dolor impedit cupiditate.'
        },
        {
            image: ChooseMeals,
            title: 'Choose Meals',
            text: 'Lorem ipsum dolor sit amet consectetur. Asperiores qui molestias quo autem dolor impedit cupiditate.'
        },
        {
            image: DeliveryMeals,
            title: 'Fast Deliveries',
            text: 'Asperiores qui molestias quo autem dolor impedit cupiditate.'
        },
    ]
  return (
    <div className='work-section-wrapper'>
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>

        <p className="primary-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Asperiores qui molestias quo autem dolor impedit cupiditate.
        </p>
      </div>

      <div className="work-section-bottom">
        {
            workInfoData.map((data) => (
                <div className="work-section-info">
                    <div className="info-boxes-img-container">
                        <img src={data.image} alt="" />
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Work
