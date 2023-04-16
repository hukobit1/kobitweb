import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const UserCard = ({ user }) => {
  const apiUrl = process.env.REACT_APP_API_ENDPOINT;
  return (
    <Col xs={6} sm={4} lg={3} className="p-2 p-md-3 p-xl-4">
      <Card>
        <Card.Img variant="top" src={ apiUrl + user.image_url } className="member-image" />
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
