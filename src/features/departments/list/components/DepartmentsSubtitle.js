import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Grid } from '@mui/material'
import { Typography } from '@totalsoft/rocket-ui'

const DepartmentsSubtitle = props => {
  const { departament } = props
  const { code, employees } = departament
  const { t } = useTranslation()

  return (
    <Grid container direction='column'>
      <Grid item container lg={12}>
        <Grid item lg={4}>
          <Typography>{t('Departaments.Code')}</Typography>
        </Grid>
        <Grid item lg={8}>
          <Typography>{code}</Typography>
        </Grid>
      </Grid>
      <Grid item container lg={12}>
        <Grid item lg={4}>
          <Typography>{t('Departaments.Employees')}</Typography>
        </Grid>
        <Grid item lg={8}>
          <Typography>{employees}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

DepartmentsSubtitle.propTypes = {
  departament: PropTypes.object.isRequired
}

export default DepartmentsSubtitle
