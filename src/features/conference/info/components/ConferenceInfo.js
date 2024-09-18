import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Info, LocationOn, Face } from '@mui/icons-material'
import { Card } from '@totalsoft/rocket-ui'
import ConferenceInfoLocation from './ConferenceInfoLocation'
import ConferenceInfoSpeakers from './ConferenceInfoSpeaker'
import ConferenceInformation from './ConferenceInformation'

const ConferenceInfo = props => {
  const { types, categories, countries, counties, cities, conference } = props
  const { location, speakers } = conference || {}
  const { t } = useTranslation()

  return (
    <>
      <Card icon={Info} title={t('Conference.Info')}>
        <ConferenceInformation types={types} categories={categories} conference={conference} disabled />
      </Card>
      <Card icon={LocationOn} title={t('Conference.Location')}>
        <ConferenceInfoLocation countries={countries} counties={counties} cities={cities} location={location} disabled />
      </Card>
      <Card icon={Face} title={t('Conference.Speakers')}>
        <ConferenceInfoSpeakers speakers={speakers} />
      </Card>
    </>
  )
}

ConferenceInfo.propTypes = {
  types: PropTypes.array,
  categories: PropTypes.array,
  countries: PropTypes.array,
  counties: PropTypes.array,
  cities: PropTypes.array,
  conference: PropTypes.object.isRequired
}

export default ConferenceInfo
