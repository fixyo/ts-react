import { useState } from 'react'

export const SearchPannel = ({param, users}) => {

  return (
    <form>
      <input type="text" value={param.name} onChange={ evt => setParam({
        ...param,
        name: evt.target.value 
      })}/>
      <select name="" id="" value={user.personId} onChange={evt => setParam({
        ...param,
        id: evt.target.id 
      })}>
        {
          users.map(user => {
            return <option value={user.id}>{user.name}</option>
          })
        }
      </select>

    </form>
  )
}