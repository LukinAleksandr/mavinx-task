import React from 'react'
import ServiceItem from './ServiceItem/ServiceItem'
import './ServicesList.sass'
const ServicesList = () => {
  return (
    <div className="services-list">
      <ServiceItem></ServiceItem>
      <ServiceItem></ServiceItem>
      <ServiceItem></ServiceItem>
      <ServiceItem></ServiceItem>
      <ServiceItem></ServiceItem>
    </div>
  )
}

export default ServicesList
