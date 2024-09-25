import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Grid } from '@mui/material'
import { Typography } from '@totalsoft/rocket-ui'

const DepartmentsContent = props => {
  const { departament } = props
  const { id, name, code, description, employees } = departament
  const { t } = useTranslation()
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>{t('Departaments.Description')}</Typography>
        <Typography variant='subtitle1' color='primary'>
          {description}
        </Typography>
      </Grid>
    </Grid>
  )
}

DepartmentsContent.propTypes = {
  departament: PropTypes.object.isRequired
}

export default DepartmentsContent
