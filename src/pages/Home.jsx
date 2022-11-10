import React from 'react'

function Home(props) {
  return (
    <div>
        <h1>Welcome user: {props.username}</h1>
    </div>
  )
}

export default Home