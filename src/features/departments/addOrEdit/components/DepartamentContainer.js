import React, { useReducer } from 'react'
import { useTranslation } from 'react-i18next'
import { useHeader } from 'providers/AreasProvider'
import DepartmentsHeader from 'features/departments/list/DepartmentsHeader'
import Departament from './Departament'
import { FakeText, IconButton, useToast } from '@totalsoft/rocket-ui'
import { useNavigate, useParams } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client'
import { DEPARTAMENT_QUERY } from 'features/conference/gql/queries'
import { UPDATE_DEPARTAMENT } from 'features/conference/gql/mutations'
import { Box } from '@mui/material'
import { initialDepartament, reducer } from '../departamentState'
import { useError } from 'hooks/errorHandling'

const DepartamentContainer = () => {
  const { t } = useTranslation()
  const { id } = useParams()
  const isNew = id === 'new'
  const [, useHeader] = useHeader()
  const [conference, dispatch] = useReducer(reducer, initialDepartament)
  const navigate = useNavigate()
  const showError = useError()
  const addToast = useToast()
}
