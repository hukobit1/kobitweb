import React, { useRef, useEffect, useState } from 'react'
import { Card, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const UserCard = ({ user }) => {
  const imageRef = useRef(null);
  const [imageHeight, setImageHeight] = useState(0);
  const apiUrl = process.env.REACT_APP_API_ENDPOINT;
  
  useEffect(() => {
  	setImageHeight(imageRef.current.offsetWidth);
  }, [])
  
  const handleResize = () => {
  	setImageHeight(imageRef.current.offsetWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <Col xs={6} sm={4} lg={3} className="p-2 p-md-3 p-xl-4">
      <Card>
        <Card.Img ref={imageRef} variant="top" src={ apiUrl + user.image_url } style={{ width: '100%', height: imageHeight, objectFit: 'cover' }} />
        <Card.Body>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Card.Title>{user.name}</Card.Title>
            { user.linkedin_url && 
            	<a href={user.linkedin_url} target="_blank" rel="noopener noreferrer">
              		<FontAwesomeIcon icon={faLinkedin} size="2x" />
            	</a>
            }
          </div>
          <Card.Subtitle className="mb-2 text-muted">
            {user.position}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default UserCard
