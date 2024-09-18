import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@totalsoft/rocket-ui'
import { Checkbox } from '@mui/material'
import { Td, TdCenteredButton, Tr } from 'components/common/dataDisplay/SuperResponsiveTableStyled'

const ConferenceInfoSpeakerData = props => {
  const { speaker } = props
  const { name, nationality, rating, isMainSpeaker, phoneNumber, email } = speaker

  return (
    <Tr>
      <Td>
        <TextField fullWidth value={name} InputProps={{ readOnly: true }} disabled />
      </Td>
      <Td>
        <TextField fullWidth value={nationality} InputProps={{ readOnly: true }} disabled />
      </Td>
      <Td>
        <TextField fullWidth isNumeric value={rating} InputProps={{ readOnly: true }} disabled />
      </Td>
      <Td>
        <TextField fullWidth value={phoneNumber} InputProps={{ readOnly: true }} disabled />
      </Td>
      <Td>
        <TextField fullWidth value={email} InputProps={{ readOnly: true }} disabled />
      </Td>
      <TdCenteredButton>
        <Checkbox color='secondary' size='small' checked={isMainSpeaker} disabled />
      </TdCenteredButton>
    </Tr>
  )
}

ConferenceInfoSpeakerData.propTypes = {
  speaker: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

export default ConferenceInfoSpeakerData
