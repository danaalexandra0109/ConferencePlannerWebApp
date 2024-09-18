import React, { useEffect, useReducer } from 'react'
import { useHeader } from 'providers/AreasProvider'
import ConferenceHeader from 'features/conference/ConferenceHeader'
import { FakeText } from '@totalsoft/rocket-ui'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { CONFERENCE_QUERY } from 'features/conference/gql/queries'
import { useError } from 'hooks/errorHandling'
import { Box } from '@mui/material'
import { initialConference, reducer } from 'features/conference/edit/conferenceState'
import ConferenceInfo from './ConferenceInfo'

const ConferenceInfoContainer = () => {
  const { id } = useParams()

  const [, setHeader] = useHeader()
  const [conference, dispatch] = useReducer(reducer, initialConference)
  const showError = useError()

  useEffect(() => () => setHeader(null), [setHeader])
  useEffect(() => {
    setHeader(
      <ConferenceHeader
        title={conference?.name}
        actions={<Box mt={1} />} // No save button, view-only mode
      />
    )
  }, [conference?.name, setHeader])

  const { loading, data } = useQuery(CONFERENCE_QUERY, {
    variables: { id: parseInt(id) || -1, isNew: false },
    onCompleted: data => data?.conference && dispatch({ type: 'resetData', payload: data?.conference }),
    onError: showError
  })

  if (loading) {
    return <FakeText lines={10} />
  }

  return (
    <ConferenceInfo
      conference={conference}
      types={data?.typeList}
      categories={data?.categoryList}
      countries={data?.countryList}
      counties={data?.countyList}
      cities={data?.cityList}
    />
  )
}

export default ConferenceInfoContainer
