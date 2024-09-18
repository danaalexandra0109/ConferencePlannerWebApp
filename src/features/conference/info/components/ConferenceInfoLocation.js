import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Grid } from '@mui/material'
import { Autocomplete, TextField } from '@totalsoft/rocket-ui'

const ConferenceInfoLocation = props => {
  const { countries, counties, cities, location } = props
  const { name, address, country, county, city, latitude, longitude } = location || {}
  const { t } = useTranslation()

  return (
    <Grid item container lg={12} spacing={3}>
      <Grid item container lg={12} spacing={3}>
        <Grid item xs={12} sm={6} lg={3}>
          <TextField label={t('Location.Name')} fullWidth value={name} InputProps={{ readOnly: true }} disabled />
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <TextField label={t('Location.Address')} fullWidth value={address} InputProps={{ readOnly: true }} disabled />
        </Grid>
      </Grid>
      <Grid item container lg={12} spacing={3}>
        <Grid item xs={12} sm={6} lg={3}>
          <Autocomplete
            label={t('Location.Country')}
            fullWidth
            isClearable
            isSearchable
            creatable
            options={countries}
            value={country}
            InputProps={{ readOnly: true }}
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Autocomplete
            label={t('Location.County')}
            fullWidth
            isClearable
            isSearchable
            creatable
            options={counties}
            value={county}
            InputProps={{ readOnly: true }}
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Autocomplete
            label={t('Location.City')}
            fullWidth
            isClearable
            isSearchable
            creatable
            options={cities}
            value={city}
            InputProps={{ readOnly: true }}
            disabled
          />
        </Grid>
      </Grid>
      <Grid item container lg={12} spacing={3}>
        <Grid item xs={12} sm={6} lg={3}>
          <TextField label={t('Location.Latitude')} fullWidth value={latitude} InputProps={{ readOnly: true }} isNumeric disabled />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <TextField label={t('Location.Longitude')} fullWidth value={longitude} InputProps={{ readOnly: true }} isNumeric disabled />
        </Grid>
      </Grid>
    </Grid>
  )
}

ConferenceInfoLocation.propTypes = {
  countries: PropTypes.array.isRequired,
  counties: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired
}

export default ConferenceInfoLocation
