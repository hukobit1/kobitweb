import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const UserCard = ({ user }) => {
  return (
    <Col xs={6} sm={4} lg={3} className="p-2 p-md-3 p-xl-4">
      <Card>
        <Card.Img variant="top" src={user.photo} />
        <Card.Body>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Card.Title>{user.name}</Card.Title>
            <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>

          {/* <Card.Text>Etkinlik Düzenleme Birimi</Card.Text> */}
          <Card.Subtitle className="mb-2 text-muted">
            Etkinlik Düzenleme Birimi
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default UserCard
