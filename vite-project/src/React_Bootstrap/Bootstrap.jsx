import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Bootstrap = () => {
  return (
    <Card style={{ width: '18rem'}} className='p-2'>
        <Card.Img variant="top" src="/biospray.jpg" />
        <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur error dolorum ullam delectus quia molestiae?</Card.Text>
      <Button>Learn more</Button>
      </Card.Body>
    </Card>
  )
}

export default Bootstrap
