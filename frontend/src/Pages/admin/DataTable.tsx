import React from 'react'

const DataTable = () => {
  return (
    <div>
      <table className='border border-black'>
        <tr className='border border-black'>
            <th className='border border-black'>Name</th>
            <th className='border border-black'>Age</th>
            <th className='border border-black'>Gender</th>
        </tr>
        <tr className='border border-black'>
            <td className='border border-black'>Anom</td>
            <td className='border border-black'>19</td>
            <td className='border border-black'>Male</td>
        </tr>
        <tr className='border border-black'>
            <td className='border border-black'>Megha</td>
            <td className='border border-black'>19</td>
            <td className='border border-black'>Female</td>
        </tr>
        <tr className='border border-black'>
            <td className='border border-black'>Subham</td>
            <td className='border border-black'>25</td>
            <td className='border border-black'>Male</td>
        </tr>
    </table>
      
    </div>
  )
}

export default DataTable
