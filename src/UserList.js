import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
function UserList() {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUserList(response.data);
      })

      .catch((error) => {
        console.log("Erreur lors de la récupération des données: ", error);
      });
  }, []);
  return (
    <Container className="mt-5">
    <h1 className="text-center mb-4">Liste des utilisateurs</h1>
    <Row>
      {userList.map((user) => (
        <Col key={user.id} sm={12} md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title >{user.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Email: {user.email}
              </Card.Subtitle>
              <Card.Text>
                <strong>Username:</strong> {user.username} <br />
                <strong>Address:</strong> {user.address.street}, {user.address.city}, {user.address.zipcode} <br />
                <strong>Phone:</strong> {user.phone} <br />
                <strong>Website:</strong> {user.website}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  );
}

export default UserList;
