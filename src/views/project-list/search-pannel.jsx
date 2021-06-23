import React from 'react'

export const SearchPannel = ({param, setParam, users = []}) => {

  return (
    <form>
      <input type="text" value={param.name} onChange={ evt => setParam({
        ...param,
        name: evt.target.value 
      })}/>
      <select value={param.id} onChange={evt => setParam({
        ...param,
        id: evt.target.value 
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