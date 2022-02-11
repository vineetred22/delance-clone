import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'



import * as commonService from 'utils/CommonService.js'
import storage from 'utils/storage'
import { makeStyles } from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert'

import './App.css'

import './App.css'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))

const App = ({ children }) => {
  const { history } = children.props
  const { title } = children.props
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false)
  let userId = storage.get('humlog_user')
  useEffect(() => {
    commonService.forSuccess()
  })

  // useEffect(() => {
  //   if (!loaded) {
  //     setLoaded(true)
   
  //     console.log(userDetails)
  //   }
  // }, [loaded, dispatch, userId])


  const [resSidebarToggled, setResSidebarToggle] = useState(false)
  const [currentTheme, setCurrentTheme] = useState('light-theme')

  return <></>
}

export default App
