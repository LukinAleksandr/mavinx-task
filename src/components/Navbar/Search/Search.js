import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

import './Search.sass'
const Search = () => {
  return (
    <div className="search">
      <AiOutlineSearch />
      <input
        className="search__input"
        placeholder="Поиск экспертов, навыки"
      ></input>
    </div>
  )
}
export default Search
