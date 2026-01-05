import React from 'react'

function ContentPanel({ label , children }) {
    return (
        <div className="shadow-lg shadow-gray-200 border border-gray-200 rounded-2xl " >
            <div className="p-4 font-bold text-xl bg-gray-100 border rounded-t-2xl border-gray-200" >
               {label}
            </div>
            {children}
        </div>
    )
}

export default ContentPanel;