import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { routeNames } from '../config/route-name.config'
// import { useSelector } from 'react-redux'

export function PrivateRoute() {
  // const { access_token } = useSelector((state) => state.auth)
  //ví dụ
  const access_token = null
  return access_token ? <Outlet /> : <Navigate to={routeNames.Home} />
}
