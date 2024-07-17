import React from 'react'

export default function Alerts({alert}) {
    if (!alert) return null;
  return (
   
   
      <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                <strong>{alert.type}</strong> { alert.message}
                <button type="button"className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
   
  )
}
