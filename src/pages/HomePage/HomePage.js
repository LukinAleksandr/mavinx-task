import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ServicesList from '../../components/ServicesList/ServicesList'
import Wrapper from '../../components/Wrapper/Wrapper'
import Pagination from '../../components/Pagination/Pagination'

import './home.sass'
import Sidebar from '../../components/Sidebar/Sidebar'

const HomePage = () => {
  return (
    <div className="content">
      <Navbar></Navbar>
      <main id="main">
        <Wrapper>
          <Sidebar></Sidebar>
          <article id="services">
            <h6 className="title">Найдено</h6>
            <ServicesList></ServicesList>
            <Pagination></Pagination>
          </article>
        </Wrapper>
      </main>
    </div>
  )
}

export default HomePage
