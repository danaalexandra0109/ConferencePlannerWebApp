import React from 'react'
const { default: DepartmentsTitle } = require('./DepartmentsTitle')
import DepartmentsContent from './DepartmentsContent'
import DepartmentsSubtitle from './DepartmentsSubtitle'
import PropTypes from 'prop-types'
import { Card } from '@totalsoft/rocket-ui'
import { Grid } from '@mui/material'

const DepartmentsItem = props => {
  const { departament, onDelete } = props

  const { id, name } = departament
  const title = <DepartmentsTitle title={name} id={id} onDelete={onDelete} />

  return (
    <Grid item xs={12} md={12} lg={12}>
      <Card title={title} subheader={<DepartmentsSubtitle departament={departament} />}>
        <DepartmentsContent departament={departament} />
      </Card>
    </Grid>
  )
}

DepartmentsItem.propTypes = {
  departament: PropTypes.object.isRequired,
  onDelete: PropTypes.func
}

export default DepartmentsItem
