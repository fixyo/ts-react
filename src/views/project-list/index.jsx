import React, { useState, useEffect } from 'react'
import { SearchPannel } from './search-pannel'
import { ListCpn } from './list-cpn'
import { omitNull } from 'util'

const baseUrl = process.env.REACT_APP_API_URL

export default function ProjectList () {
  const [param, setParam]  = useState({
    name: '',
    id: ''
  })
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])

  useEffect(() => {
    fetch(`${baseUrl}/projects?name=${param.name}&personId=${param.id}`).then(async res => {
      if (res.ok) {
        setList(await res.json())
      }
    })
  }, [param])

  useEffect(() => {
    fetch(`${baseUrl}/users`).then(async res => {
      if (res.ok) {
        setUsers(await res.json())
      }
    })
  }, [])

  return (
    <div>
      <SearchPannel param={param} setParam={setParam} users={users} />
      <ListCpn list={list} users={users}></ListCpn>
    </div>
  )
}