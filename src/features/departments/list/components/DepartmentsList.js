import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@mui/material'
import DepartamentsItem from './DepartmentsItem'

const DepartamentsList = props => {
  const { departaments, onDelete } = props

  return (
    <Grid container spacing={2}>
      {departaments?.map(departament => (
        <Grid item xs={12} lg={12} md={12} key={departament.id}>
          <DepartamentsItem departament={departament} onDelete={onDelete} />
        </Grid>
      ))}
    </Grid>
  )
}

DepartamentsList.propTypes = {
  departaments: PropTypes.array,
  onDelete: PropTypes.func
}

export default DepartamentsList
