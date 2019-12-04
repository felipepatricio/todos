import React from 'react'
import { connect } from 'http2'

const AddTodo = ( ) => {
  let input

  return (
    <>
      <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          
      }}>
        <input ref={node => input = node} type="text" />
        <button type="submit">
          Add todo
        </button>
      </form>
    </>
  )
}

export default AddTodo