import { Button, Card } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

function CardComponent({ children, color, handleShowAlert,handleShowAlert1 })
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
        <Button shape='round' style={{color: "#ffffff", marginTop:15, fontWeight: 500}} onClick={handleShowAlert}><Link to='/aaa'>OPEN</Link></Button>
      }
            {
        handleShowAlert1 &&
        <Button shape='round' style={{color: "#ffffff", marginTop:15, fontWeight: 500}} onClick={handleShowAlert1}><Link to='/bbb'>OPEN</Link></Button>
      }
    </Card>
  )
}

export default CardComponent