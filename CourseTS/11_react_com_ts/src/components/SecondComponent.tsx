import React from 'react'

interface Props  {
    name: string
}

const SecondComponent = (props: Props) => {
  return (
    <div>
        <p>Meu segundo component</p>
        <p>O nome dele é {props.name}</p>
    </div>
  )
}

export default SecondComponent;