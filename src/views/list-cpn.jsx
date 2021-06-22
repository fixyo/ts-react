import React from 'react'

export const ListCpn = ({list}) => {
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
                <td>{item.personName}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}