import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@mui/material'
import { IconButton, Typography } from '@totalsoft/rocket-ui'
import { emptyString } from 'utils/constants'
import { useTranslation } from 'react-i18next'

const DepartmentsTitle = props => {
  const { t } = useTranslation()
  const { id, title, onDelete, onEdit } = props

  return (
    <Grid container justifyContent='flex-start' alignItems='center'>
      <Grid item xs={9} sm={9} lg={9} container justifyContent='flex-start'>
        <Typography variant='subtitle1'>{title || emptyString}</Typography>
      </Grid>
      <Grid item xs={3} sm={3} lg={3} container justifyContent='flex-end' spacing={1}>
        <Grid item>
          <IconButton type='edit'  onClick={onEdit} title={t('Departments.Edit')} size='tiny' color='warning' />
        </Grid>
        <Grid item>
          <IconButton type='delete' onClick={onDelete(id)} title={t('Departments.Delete')} size='tiny' color='error' />
        </Grid>
        <Grid item>
          <IconButton type='view' title={t('Departments.View')} size='tiny' color='info' />
        </Grid>
      </Grid>
    </Grid>
  )
}

DepartmentsTitle.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onView: PropTypes.func
}

export default DepartmentsTitle
