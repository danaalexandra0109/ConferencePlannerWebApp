import React from 'react'
import PropTypes from 'prop-types'
import { Thead } from 'react-super-responsive-table'
import { useTranslation } from 'react-i18next'
import { Grid } from '@mui/material'
import { Table, Tbody, Th, ThCenteredButton, Tr } from 'components/common/dataDisplay/SuperResponsiveTableStyled'
import { makeStyles } from 'tss-react/mui'
import tableStyles from 'assets/jss/components/tableStyle'
import ConferenceSpeakerData from './ConferenceInfoSpeakerData'

const useStyles = makeStyles()(tableStyles)

const ConferenceInfoSpeakers = props => {
  const { speakers = [] } = props
  const { t } = useTranslation()
  const { classes } = useStyles()

  return (
    <Grid className={classes.enableScrollX}>
      <Table>
        <Thead>
          <Tr>
            <Th>{t('Speaker.Name')}</Th>
            <Th>{t('Speaker.Nationality')}</Th>
            <Th>{t('Speaker.Rating')}</Th>
            <Th>{t('Speaker.PhoneNumber')}</Th>
            <Th>{t('Speaker.Email')}</Th>
            <Th>{t('Speaker.MainSpeaker')}</Th>
            <ThCenteredButton />
          </Tr>
        </Thead>
        <Tbody>
          {speakers?.map((speaker, index) => (
            <ConferenceSpeakerData key={speaker?.id} speaker={speaker} index={index} />
          ))}
        </Tbody>
      </Table>
    </Grid>
  )
}

ConferenceInfoSpeakers.propTypes = {
  speakers: PropTypes.array.isRequired
}

export default ConferenceInfoSpeakers
