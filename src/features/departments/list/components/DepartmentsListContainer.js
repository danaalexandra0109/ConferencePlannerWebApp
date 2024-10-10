import React, { useCallback, useEffect } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { FakeText, IconButton, useToast } from '@totalsoft/rocket-ui'
import { DEPARTAMENT_LIST_QUERY } from 'features/conference/gql/queries'
import { useNavigate } from 'react-router-dom'
import DepartmentsList from './DepartmentsList'
import { useHeader } from 'providers/AreasProvider'
import DepartmentsHeader from '../DepartmentsHeader'
import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { DELETE_DEPARTAMENT } from 'features/conference/gql/mutations'
import { useError } from 'hooks/errorHandling'

const DepartmentListContainer = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const showError = useError()
  const addToast = useToast()

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

  const [deleteDepartment] = useMutation(DELETE_DEPARTAMENT, {
    refetchQueries: [{ query: DEPARTAMENT_LIST_QUERY }],
    onCompleted: () => {
      addToast(t('General.DeletingSucceeded'), 'success')
    },
    onError: showError
  })

  const handleDelete = useCallback(
    id => () => {
      deleteDepartment({ variables: { id } })
    },
    [deleteDepartment]
  )

  if (loading) {
    return <FakeText lines={10} />
  }

  return (
    <>
      <DepartmentsList onDelete={handleDelete} departaments={data?.departmentsList} />
    </>
  )
}

export default DepartmentListContainer
