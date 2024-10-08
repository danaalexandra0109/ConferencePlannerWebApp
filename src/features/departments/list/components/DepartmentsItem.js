import React, { useCallback } from 'react'
const { default: DepartmentsTitle } = require('./DepartmentsTitle')
import DepartmentsContent from './DepartmentsContent'
import DepartmentsSubtitle from './DepartmentsSubtitle'
import PropTypes from 'prop-types'
import { Card } from '@totalsoft/rocket-ui'
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const DepartmentsItem = props => {
  const { departament, onDelete } = props
  const navigate = useNavigate()
  const { id, name } = departament
  const handleEdit = useCallback(() => navigate(`/departments/${id}`), [navigate, id])

  const title = <DepartmentsTitle title={name} onEdit={handleEdit} id={id} onDelete={onDelete} />



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
