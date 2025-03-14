import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import attendeeStatus from 'constants/attendeeStatus'
import { Box, Grid } from '@mui/material'
import { Button, IconButton, Typography } from '@totalsoft/rocket-ui'

const ConferenceContent = props => {
  const { onChangeAttendanceStatus, conference, onView } = props
  const { status, startDate, endDate, type, category } = conference

  const { t } = useTranslation()
  const noStatusSet = t('Conferences.StatusNotSet')

  const showJoin = status?.id === attendeeStatus.Attended
  const showWithdraw = status?.id === attendeeStatus.Attended || status?.id === attendeeStatus.Joined
  const showAttend = status?.id === attendeeStatus.Withdrawn || !status?.id

  const startDateFormatted = t('DATE_FORMAT', { date: { value: startDate, format: 'DD-MM-YYYY HH:mm' } })
  const endDateFormatted = t('DATE_FORMAT', { date: { value: endDate, format: 'DD-MM-YYYY HH:mm' } })

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant='subtitle1' color='error'>
          {status?.name || noStatusSet}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>{`${startDateFormatted} - ${endDateFormatted}`}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>{`${type?.name}, ${category?.name}`}</Typography>
      </Grid>
      <Box mt={4}></Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {showJoin && (
            <Button right color='success' size={'small'} onClick={onChangeAttendanceStatus(conference?.id, attendeeStatus.Joined)}>
              {t('Conferences.Join')}
            </Button>
          )}
          {showWithdraw && (
            <Button right color='error' size={'small'} onClick={onChangeAttendanceStatus(conference?.id, attendeeStatus.Withdrawn)}>
              {t('Conferences.Withdraw')}
            </Button>
          )}
          <IconButton type='view' onClick={onView} title={t('Conference.View')} size='tiny' color='info' />
          {showAttend && (
            <Button right color='info' size={'small'} onClick={onChangeAttendanceStatus(conference?.id, attendeeStatus.Attended)}>
              {t('Conferences.Attend')}
            </Button>
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}

ConferenceContent.propTypes = {
  conference: PropTypes.object.isRequired,
  onChangeAttendanceStatus: PropTypes.func.isRequired,
  onView: PropTypes.func
}

export default ConferenceContent
