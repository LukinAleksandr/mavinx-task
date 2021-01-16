import React from 'react'
import Range from '../Range/Range'
import { AiOutlinePlus } from 'react-icons/ai'

import './Sidebar.sass'
import Hashtag from '../Hashtag/Hashtag'
const Sidebar = () => {
  return (
    <aside id="sidebar">
      <div className="filters">
        <h6 className="filters__title">Фильтры</h6>
        <p className="filters__reset">Очистить</p>
      </div>
      <div className="categories">
        <div className="categories__header">
          <h6 className="categories__title">Категории</h6>
          <p className="categories__count">(4)</p>
        </div>
        <div className="categories__input-block">
          <select
            defaultValue="Open this select menu"
            className="form-select"
            aria-label="Default select example"
          >
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <AiOutlinePlus />
        </div>
        <div className="hashtag-block">
          <Hashtag name="#Логотип"></Hashtag>
          <Hashtag name="#Loading-page"></Hashtag>
          <Hashtag name="#Промо-сайт"></Hashtag>
          <Hashtag name="&times;"></Hashtag>
        </div>
      </div>

      <div className="price">
        <h6 className="title">Стоимость</h6>
        <div className="price__input-block">
          <div className="price__form">
            <select
              defaultValue="1"
              className="form-select"
              aria-label="Default select example"
            >
              <option value="1">USD</option>
              <option value="2">EUR</option>
              <option value="3">UAH</option>
            </select>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="От"
            />
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="До"
            />
          </div>
          <Range></Range>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
