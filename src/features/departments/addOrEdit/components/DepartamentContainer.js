import React, { useCallback, useEffect, useReducer } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { initialDepartament, reducer } from '../departamentState'
import { useError } from 'hooks/errorHandling'
import { FakeText, IconButton, useToast } from '@totalsoft/rocket-ui'
import { useMutation, useQuery } from '@apollo/client'
import { ADD_DEPARTAMENT, UPDATE_DEPARTAMENT } from 'features/conference/gql/mutations'
import { useHeader } from 'providers/AreasProvider'
import DepartmentsHeader from 'features/departments/list/DepartmentsHeader'
import { Box } from '@mui/material'
import { DEPARTAMENT_QUERY } from 'features/conference/gql/queries'
import Departament from './Departament'

const DepartamentContainer = () => {
  const { t } = useTranslation()
  const { id: idFromRoute } = useParams()
  const isNew = idFromRoute === 'new'
  const [, setHeader] = useHeader()
  const [departament, dispatch] = useReducer(reducer, initialDepartament)
  const showError = useError()
  const addToast = useToast()

  const [updateDepartament] = useMutation(UPDATE_DEPARTAMENT, {
    onCompleted: () => {
      addToast(t('General.SavingSucceeded'), 'succes')
    }
  })

  const [addDepartment] = useMutation(ADD_DEPARTAMENT, {
    onCompleted: () => {
      addToast(t('General.SavingSucceeded'), 'success')
    },
    onError: () => {
      addToast('Teo se Grabeste', 'error')
    }
  })

  const handleSave = useCallback(() => {
    const { id, name, code, employees, description } = departament
    if (isNew) {
      const addInput = {
        name,
        code,
        employees,
        description
      }
      addDepartment({ variables: { input: addInput } })
    } else {
      const input = {
        id,
        name,
        code,
        employees,
        description
      }
      updateDepartament({ variables: { input } })
    }
  }, [departament, isNew, addDepartment, updateDepartament])

  useEffect(() => () => setHeader(null), [setHeader])
  useEffect(() => {
    setHeader(
      <DepartmentsHeader
        title={departament?.name}
        actions={
          <Box mt={1}>
            {' '}
            <IconButton type='save' title={t('General.Buttons.Save')} onClick={handleSave} />
          </Box>
        }
      />
    )
  }, [departament?.name, handleSave, setHeader, t])

  useEffect(() => {
    if (isNew) {
      dispatch({ type: 'resetData' })
    }
  }, [isNew])

  const { loading } = useQuery(DEPARTAMENT_QUERY, {
    skip: isNew,
    variables: { id: parseInt(idFromRoute) },
    onCompleted: data => {
      // debugger
      return data?.departament && dispatch({ type: 'resetData', payload: data?.departament })
    },
    onError: error => {
      showError(error)
    }
  })

  if (loading) {
    return <FakeText lines={10} />
  }
  console.log('dep', departament)
  return <Departament departament={departament} dispatch={dispatch} />
}

export default DepartamentContainer
