import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Grid } from '@mui/material'
import { TextField } from '@totalsoft/rocket-ui'

const DepartamentInfo = props => {
  const { name, code, employees, dispatch } = props
  const { t } = useTranslation()

  const handleDispatch = actionType => value => dispatch({ type: actionType, payload: value })

  return (
    <Grid container spacing={3}>
      <Grid item container lg={9} spacing={3}>
        <Grid item xs={12} sm={12} lg={12}>
          <TextField label={t('Departaments.Name')} fullWidth value={name} onChange={handleDispatch('name')} />
        </Grid>
      </Grid>

      <Grid item container spacing={3}>
        <Grid item xs={12} sm={12} lg={12}>
          <TextField label={t('Departaments.Code')} fullWidth value={code} onChange={handleDispatch('code')} />
        </Grid>
      </Grid>

      <Grid item container spacing={3}>
        <Grid item xs={12} sm={12} lg={12}>
          <TextField label={t('Departaments.Employees')} fullWidth value={employees} onChange={handleDispatch('employees')} isNumeric />
        </Grid>
      </Grid>
    </Grid>
  )
}

DepartamentInfo.propTypes = {
  name: PropTypes.string,
  code: PropTypes.string,
  employees: PropTypes.number,
  dispatch: PropTypes.func
}

export default DepartamentInfo
