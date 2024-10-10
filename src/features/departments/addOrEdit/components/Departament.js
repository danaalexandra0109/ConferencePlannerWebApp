import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Card } from '@totalsoft/rocket-ui'
import { Info, Description } from '@mui/icons-material'
import DepartamentInfo from './DepartamentInfo'
import DepartamentDescription from './DepartamentDescription'

const Departament = props => {
  const { departament, dispatch } = props
  const { name, code, employees, description } = departament
  const { t } = useTranslation()

  return (
    <>
      <Card icon={Info} title={t('Departaments.Info')}>
        <DepartamentInfo name={name} code={code} employees={employees} dispatch={dispatch} />
      </Card>
      <Card icon={Description} title={t('Departaments.Description')}>
        <DepartamentDescription description={description} dispatch={dispatch} />
      </Card>
    </>
  )
}

Departament.propTypes = {
  departament: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default Departament
