import React from 'react'
import GridLoader from "react-spinners/GridLoader";


export const InitialSpinner = ({load}) => {
  const color = "#DC9402";
  return (
    <div className='h-screen flex justify-center align-middle'>
        <GridLoader color={color} loading={load} size={10} />
    </div>
  )
}
