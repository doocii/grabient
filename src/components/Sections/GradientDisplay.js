import React from 'react'

import { Container } from './../Common/index'

const GradientDisplayContainer = Container.extend`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 820px) {
    margin-left: 40px;
    margin-right: 40px;
  }

  @media (min-width: 970px) {
    margin-left: auto;
    margin-right: auto;
  }
`

const GradientDisplay = ({ children }) => {
  return (
    <section>
      <GradientDisplayContainer>
        {children}
      </GradientDisplayContainer>
    </section>
  )
}

export default GradientDisplay
