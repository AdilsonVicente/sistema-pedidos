import React from 'react'
import t from 'prop-types'

const ChoosePizzaFlavours = ({ location }) => {
  console.log('location', location)
  return (
    <h1>Escolha o sabor da pizza</h1>
  )
}

ChoosePizzaFlavours.propType = {
  location: t.object.isRequired
}

export default ChoosePizzaFlavours
