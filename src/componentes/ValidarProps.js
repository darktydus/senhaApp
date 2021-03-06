import React from 'react'
import Proptypes from 'prop-types'
import { Text } from 'react-native'

const ValidarProps = props =>
<Text style={{ fontSize: 35}}>
  {props.label || 'Opa'}
  {props.ano + 2000}
</Text>

ValidarProps.defaultProps = {
  label: 'Ano: '
}

ValidarProps.Proptypes = {
  ano: Proptypes.number.isRequired
}

export default ValidarProps