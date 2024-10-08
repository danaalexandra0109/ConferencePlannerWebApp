import React, { useCallback, useEffect, useReducer } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate, useParams } from "react-router-dom"
import { initialDepartament, reducer } from "../departamentState"
import { useError } from "hooks/errorHandling"
import { FakeText, IconButton, useToast } from "@totalsoft/rocket-ui"
import { useMutation, useQuery } from "@apollo/client"
import { UPDATE_DEPARTAMENT } from "features/conference/gql/mutations"
import { useHeader } from "providers/AreasProvider"
import DepartmentsHeader from "features/departments/list/DepartmentsHeader"
import { Box } from "@mui/material"
import { DEPARTAMENT_QUERY } from "features/conference/gql/queries"
import Departament from './Departament'



const DepartamentContainer = () => {
  const { t } = useTranslation()
  const { id } = useParams()
  const isNew = id === 'new'
  const [, setHeader] = useHeader()
  const [departament, dispatch] = useReducer(reducer, initialDepartament)
  const navigate = useNavigate()
  const showError = useError()
  const addToast = useToast()

  const [updateDepartament] = useMutation(UPDATE_DEPARTAMENT,{
    onCompleted: result => {
      addToast(t('General.SavingSucceeded'), 'succes')
  
      if(isNew){
        navigate(`/departments/${result?.saveDepartament?.id}`)
        return
      }
      result?.saveDepartament && dispatch({type:'departament', payload: result?.saveDepartament})
    },
    onError: showError
  })

  const handleSave = useCallback(()=>{
    const{id, name, code, employees, descripton} = departament
    const input = {
      id,
      name,
      code,
      employees,
      descripton
    }
    updateDepartament({variables:{input}})
  },[departament, updateDepartament])
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

  useEffect(()=>{
    if(isNew){
      dispatch({type: 'resetData'})
    }
  },)

  const {loading} = useQuery(DEPARTAMENT_QUERY, {
    variables:{id: parseInt(id) || -1, isNew},
    onCompleted:data => data?.departament && dispatch({type: 'resetData', payload: data?.departament}),
    onError: showError
  })

  if(loading){
    return <FakeText lines={10}/>
  }

  return (
    <Departament
      departament={departament}
      dispatch={dispatch}
    />
  )
}

export default DepartamentContainer