import React from 'react'

export default function ShowDetail(props) {
    const items = props.items
    return (
        items.map(item => {
            return <pre key={item.id}>{JSON.stringify(item)}</pre>
        })
    )
}



