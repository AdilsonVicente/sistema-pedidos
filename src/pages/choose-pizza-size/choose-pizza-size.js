import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  Card,
  CardActionArea as MaterialCardActionArea,
  Grid,
  Typography,
  Divider as MaterialDivider
} from '@material-ui/core'
import { AuthContext } from 'context/auth'
import pizzaSizes from 'fake-data/pizzas-sizes'

import { CHOOSE_PIZZA_FLAVOURS } from 'routes'

const ChoosePizzaSize = () => {
  const { userInfo } = useContext(AuthContext)

  return (
    <>
      <Grid container direction='column' alignItems='center'>
        <Title variant='h3'>
              O que vai ser hoje, {userInfo.user.firstName}?
        </Title>

        <Title variant='h4'>
            Escolha o tamanho da pizza:
        </Title>
      </Grid>
      <PizzaGrid>
        {pizzaSizes.map((pizza) => (
          <Grid item key={pizza.id} xs>
            <Card>
              <CardActionArea to={{
                pathname: CHOOSE_PIZZA_FLAVOURS,
                state: pizza
              }}>
                <Pizza>
                  <PizzaText>
                    {pizza.size}cm
                  </PizzaText>
                </Pizza>
                <Divider />
                <Typography variant='h5'>{pizza.name}</Typography>
                <Typography>
                  {pizza.slices} fatias, {' '}
                  {pizza.flavours} {' '}
                  {singularOrPlural(pizza.flavours, 'sabor', 'sabores')}
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </PizzaGrid>
    </>
  )
}

function singularOrPlural (amount, singular, plural) {
  return amount === 1 ? singular : plural
}

const PizzaGrid = styled(Grid).attrs({
  container: true,
  spacing: 2
})`
  padding: 20px;
`

const Divider = styled(MaterialDivider)`
  margin: 20px 0;
  width: 100%;
`

const CardActionArea = styled(MaterialCardActionArea).attrs({
  component: Link
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;

  min-width: 250px;
`

const Pizza = styled.div`
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 50%;
  align-items: center;

  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;

  height: 200px;
  width: 200px;

&::before,
&::after {
  background: #ccc;
  position: absolute;
  transform: rotate(45deg);
  content: '';
}

&::before {
  height: 1px;
  width: 160px;
}

&::after {
  height: 160px;
  width: 1px;
}
`
const PizzaText = styled(Typography).attrs({
  variant: 'h5'
})`
  background: #fff;
  border-radius: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;

  height: 80px;
  width: 80px;
`
const Title = styled(Typography).attrs({
  gutterBottom: true,
  align: 'center'
})``

export default ChoosePizzaSize
