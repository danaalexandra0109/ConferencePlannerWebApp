import React, { useCallback, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { FakeText, IconButton } from '@totalsoft/rocket-ui'
import { DEPARTAMENT_LIST_QUERY } from 'features/conference/gql/queries'
import { useNavigate } from 'react-router-dom'
import DepartmentsList from './DepartmentsList'
import { useHeader } from 'providers/AreasProvider'
import DepartmentsHeader from '../DepartmentsHeader'
import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'

const DepartmentListContainer = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const { data, loading } = useQuery(DEPARTAMENT_LIST_QUERY)
  const handleAddClick = useCallback(() => {
    navigate('/departments/new')
  }, [navigate])

  const [, setHeader] = useHeader()
  useEffect(() => () => setHeader(null), [setHeader])
  useEffect(() => {
    setHeader(
      <DepartmentsHeader
        title={t('NavBar.Departments')}
        actions={
          <Box mt={1}>
            <IconButton type='add' key='addButton' title={t('General.Buttons.AddDepartment')} onClick={handleAddClick} />
          </Box>
        }
      />
    )
  }, [handleAddClick, setHeader, t])

  if (loading) {
    return <FakeText lines={10} />
  }

  return (
    <>
      <DepartmentsList departaments={data?.departmentsList} />
    </>
  )
}

export default DepartmentListContainer
