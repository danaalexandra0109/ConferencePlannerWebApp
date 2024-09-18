import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Grid } from '@mui/material'
import { Autocomplete, DateTime, TextField } from '@totalsoft/rocket-ui'

const ConferenceInformation = props => {
  const { types, categories, conference } = props
  const { name, startDate, endDate, type, category } = conference || {}
  const { t } = useTranslation()

  return (
    <Grid container spacing={3}>
      <Grid item container lg={9} spacing={3}>
        <Grid item xs={12} sm={6} lg={4}>
          <TextField label={t('Conference.Name')} fullWidth value={name} InputProps={{ readOnly: true }} disabled />
        </Grid>
      </Grid>
      <Grid item container lg={12} spacing={3}>
        <Grid item xs={12} sm={6} lg={3}>
          <DateTime label={t('Conference.StartDate')} value={startDate} InputProps={{ readOnly: true }} disabled />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <DateTime label={t('Conference.EndDate')} value={endDate} InputProps={{ readOnly: true }} disabled />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Autocomplete
            label={t('Conference.Type')}
            fullWidth
            isClearable
            isSearchable
            creatable
            options={types}
            value={type}
            InputProps={{ readOnly: true }}
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Autocomplete
            label={t('Conference.Category')}
            fullWidth
            isClearable
            isSearchable
            creatable
            options={categories}
            value={category}
            InputProps={{ readOnly: true }}
            disabled
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

ConferenceInformation.propTypes = {
  types: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  conference: PropTypes.object.isRequired
}

export default ConferenceInformation
