import { Button, Card } from 'antd'
import React from 'react'

function CardComponent({ children, color, handleShowAlert })
{
  return (
    <Card style={{
      backgroundColor: color ?? '#f0f0f0',
      margin: '12px 0'
    }}>
      {children}
      {
        handleShowAlert &&
        <Button onClick={handleShowAlert}>show aler</Button>
      }
    </Card>
  )
}

export default CardComponent