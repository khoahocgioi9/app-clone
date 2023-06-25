import { Button, Card } from 'antd'
import React from 'react'

function CardComponent({ children, color, handleShowAlert })
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
    </Card>
  )
}

export default CardComponent