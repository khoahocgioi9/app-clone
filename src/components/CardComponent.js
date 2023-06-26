import { Button, Card } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

function CardComponent({ children, color, handleShowAlert, link1, link2 })
{
  return (
    <Card style={{
      backgroundColor: color ?? 'red',
      margin: '12px 0',
      color: '#ffffff'
    }}>
      {children}
      {
        handleShowAlert &&
        <Button shape='round' style={{color: "#ffffff", marginTop:15, fontWeight: 500}} onClick={handleShowAlert}>OPEN</Button>
      }
      {
        link1 &&
        <Link to="/"><Button shape='round' style={{color: "#ffffff", marginTop:15, fontWeight: 500}} onClick={link1}>OPEN</Button> </Link>
      }
    </Card>
  )
}

export default CardComponent