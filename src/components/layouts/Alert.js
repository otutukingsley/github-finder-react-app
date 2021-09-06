import React, {useContext}from 'react'
import alertContext from '../context/show/alertContext'

const Alert = () => {
    const context = useContext(alertContext)
    const { alert } = context
    return (
        alert !== null && (
            <div className={`alert alert-${alert.color}`}>
                <i className="fas fa-info-circle"></i> {alert.message}
            </div>
        )
    )
}

export default Alert