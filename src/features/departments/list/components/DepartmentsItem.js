import React from 'react'
const { default: DepartmentsTitle } = require('./DepartmentsTitle')
import DepartmentsContent from './DepartmentsContent'
import DepartmentsSubtitle from './DepartmentsSubtitle'
import PropTypes from 'prop-types'
import { Card } from '@totalsoft/rocket-ui'

const DepartmentsItem = props => {
  const { departament } = props

  const { name } = departament
  const title = <DepartmentsTitle title={name} />

  return (
    <Card title={title} subheader={<DepartmentsSubtitle departament={departament} />}>
      <DepartmentsContent departament={departament} />
    </Card>
  )
}

DepartmentsItem.propTypes = {
  departament: PropTypes.object.isRequired
}

export default DepartmentsItem
