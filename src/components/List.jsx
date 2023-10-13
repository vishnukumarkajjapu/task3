import React from 'react'

const List = (props) => {
    const { data, handleChange } = props
    const { color, id } = data
    const change = () => {
        handleChange(color)
    }
    return (
        <button style={{ backgroundColor: `${color}` }} onClick={change} className='px-2 py-1 w-20 h-20 shadow-xl'>
            { }
        </button>
    )
}

export default List
