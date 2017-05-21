import Inferno from 'inferno' // eslint-disable-line no-unused-vars
import { connect } from 'inferno-redux'
import styled from 'styled-components'
import { ChromePicker } from 'react-color'

const Container = styled.div`
  position: absolute;
  z-index: 1000;
  bottom: 30px;
  right: 11px;
`

const ColorPicker = ({ color }) => {
  return (
    <Container>
      <ChromePicker disableAlpha color={color} />
    </Container>
  )
}

export default connect()(ColorPicker)