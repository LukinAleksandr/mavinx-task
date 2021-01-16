import React from 'react'
import './ServiceItem.sass'
const ServiceItem = () => {
  return (
    <div className="service-item">
      <div className="service-content">
        <h6 className="service-title">Дизайн сайта UI и UX</h6>
        <p className="service-text">
          Рекламные компании говорят, что реклама необходима и важна. Он
          информирует людей о новых продуктах. Рекламные щиты на улице делают
          нашу среду яркой.
        </p>
        <span className="service-hashtag">
          #Loading-page #Логотип #Промо-сайт
        </span>
      </div>
      <div className="service-price">
        <h6>1 840$</h6>
        <p>1-2 месяца</p>
      </div>
    </div>
  )
}

export default ServiceItem
