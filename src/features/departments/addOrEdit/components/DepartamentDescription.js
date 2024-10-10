import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Grid } from '@mui/material'
import { TextField } from '@totalsoft/rocket-ui'

const DepartamentDescription = props => {
  const { description, dispatch } = props
  const { t } = useTranslation()

  const handleDispatch = actionType => value => dispatch({ type: actionType, payload: value })

  return (
    <Grid container spacing={3}>
      <Grid item container lg={9} spacing={3}>
        <Grid item xs={12} sm={12} lg={12}>
          <TextField label={t('Departaments.Description')} fullWidth value={description} onChange={handleDispatch('description')} />
        </Grid>
      </Grid>
    </Grid>
  )
}

DepartamentDescription.propTypes = {
  description: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default DepartamentDescription
