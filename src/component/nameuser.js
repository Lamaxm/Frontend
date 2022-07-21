import React from 'react'

function Nameuser(props) {
  return (
    <div><p className='welcome'><strong> W E L C O M E <br/>
    {props.username}</strong> </p></div>
  )
}

export default Nameuser