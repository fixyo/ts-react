import React, { userState, useEffect } from 'react'
import { SearchPannel } from './search-pannel'
import { ListCpn } from './list-cpn'

export const ProjectList = () => {
  const [param, setParam]  = useState({
    name: '',
    id: ''
  })
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])

  useEffect(() => {
    fetch('').then(async res => {
      if (res.ok) {
        setList(await res.json())
      }
    })
  }, [param])
  return (
    <div>
      <Search-Pannel param={param} setParam={setParam}/>
    </div>
  )
}