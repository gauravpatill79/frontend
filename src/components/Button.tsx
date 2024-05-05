import React, { Children } from "react"

export const Button = ({onClick ,children}:{onClick:()=>void,children:React.ReactNode})=> {
    return <button onClick={onClick} className="px-8 py-4 text-2xl bg-green-500 hover:bg-green-700 text-white font-bold rounded" style={{ minWidth: '400px', maxWidth: '500px' }}>
            {children}
    </button>
} 