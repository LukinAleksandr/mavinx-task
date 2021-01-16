import React from 'react'
import Nouislider from 'nouislider-react'
import 'nouislider/distribute/nouislider.css'
import 'materialize-css'
import './Range.sass'

const Range = () => (
  <Nouislider
    start={[20, 80]}
    range={{
      min: 0,
      max: 100,
    }}
  />
)

export default Range
