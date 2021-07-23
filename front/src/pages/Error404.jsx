import React from 'react'
import { FormattedMessage } from 'react-intl'
import ReturnButton from '../components/ReturnButton'
import Container from '@material-ui/core/Container'

function Error404() {
  return (
    <Container maxWidth="xs">
      <h3 style={{ textAlign: 'center' }}>
        <FormattedMessage id="error404" />
      </h3>
      <ReturnButton />
    </Container>
  )
}

export default Error404
