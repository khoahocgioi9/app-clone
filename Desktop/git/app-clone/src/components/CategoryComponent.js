import { Button, Card } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import TitleComponent from './TitleComponent'

function CategoryComponent({ title, data, url })
{

  return (
    <>
      <div className='row' style={{
        marginTop:20,

      }}>
        <div className='col'>
          <Link to={url}>
            <TitleComponent text={title} size={20} />
          </Link>
        </div>
        <div className='col text-right'>
          <Link to={url}>See more</Link>
        </div>




      </div>
      <div className='row'>
        {data.map(item => <Card cover={<img src={item.image} style={{
          width: 200,
          height: 250,
          objectFit: 'cover'
        }} />} style={{
          marginTop:10 ,
          width: 250,
          height: 300,
          marginRight: 12
        }} hoverable key={item.key}>
          <Card.Meta title={item.title} />
        </Card>)}
      </div>
    </>
  )
}

export default CategoryComponent