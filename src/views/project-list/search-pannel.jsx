import React from 'react'

export const SearchPannel = ({param, setParam, users = []}) => {

  return (
    <form>
      <input type="text" value={param.name} onChange={ e => setParam({
        ...param,
        name: e.target.value 
      })}/>
      <select value={param.personId} onChange={e => setParam({
        ...param,
        personId: e.target.value 
      })}>
        <option >负责人</option>
        {
          users.map(user => {
            return <option value={user.id} key={user.id}>{user.name}</option>
          })
        }
      </select>

    </form>
  )
}