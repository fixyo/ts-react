import React from 'react'

export const ListCpn = ({list, users}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>responsible person</th>
        </tr>
      </thead>
      <tbody>
        {
          list.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>
                  {
                    users.find(user => user.id === item.personId)?.name || 'unknow'
                  }
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}