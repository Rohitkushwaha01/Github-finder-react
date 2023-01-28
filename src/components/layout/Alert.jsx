import React from 'react'
import { useContext } from 'react'
import AlertContext from '../../context/alert/Alert.context'
import { FaBox } from 'react-icons/fa'

export default function Alert() {

    const {alert} = useContext(AlertContext);


  return alert != null && (
    <p className="flex items-start mb-4 space-x-2">
        {alert.type === 'error' && (
            <FaBox color='white'/>
        )}
        <p className="flex-1 text-base font-semibold leading-7 text-white">
            <strong>{alert.msg}</strong>
        </p>
    </p>
  )
}
