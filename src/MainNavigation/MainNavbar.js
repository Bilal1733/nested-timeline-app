import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const MainNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Elsy</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#research">Research</Nav.Link>
          <Nav.Link href="#budget">Budget</Nav.Link>
          <Nav.Link href="#campaign">Campaign</Nav.Link>
          <Nav.Link href="#reports">Reports</Nav.Link>

          <NavDropdown title="Configuration" id="configuration">
            <NavDropdown.Item href="#instance">Instance</NavDropdown.Item>
            <NavDropdown.Item href="#products">Products</NavDropdown.Item>
            <NavDropdown.Item href="#resources">Resources</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#datamart">Datamart</Nav.Link>

          <NavDropdown title="Administration" id="administration">
            <NavDropdown title="Site Administration" id="site-administration">
              <NavDropdown.Item href="#manage-users">
                Manage Users
              </NavDropdown.Item>
              <NavDropdown.Item href="#manage-instance">
                Manage Instance
              </NavDropdown.Item>
              <NavDropdown.Item href="#manage-users">
                Site Data Management
              </NavDropdown.Item>
              <NavDropdown.Item href="#manage-users">
                Monitor Usage
              </NavDropdown.Item>
              <NavDropdown.Item href="#manage-users">
                Monitor Procedures
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Instance Administration"
              id="instance-administration"
            >
              <NavDropdown.Item href="#manage-users">
                Manage Users
              </NavDropdown.Item>
              <NavDropdown.Item href="#manage-instance">
                Manage Instance
              </NavDropdown.Item>
              <NavDropdown.Item href="#monitor-usage">
                Monitor Usage
              </NavDropdown.Item>
              <NavDropdown.Item href="#manage-campaign">
                Manage Campaign
              </NavDropdown.Item>
              <NavDropdown.Item href="#manage-instance">
                Configure Instance
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Knowledge Based Management"
              id="knowledge-based-management"
            >
              <NavDropdown.Item href="#entity-type-relationships">
                Entity Type Relationships
              </NavDropdown.Item>
              <NavDropdown.Item href="#add-news-&-resources">
                Add News & Resources
              </NavDropdown.Item>
              <NavDropdown.Item href="#manage-assets">
                Manage Assets
              </NavDropdown.Item>
              <NavDropdown.Item href="#manage-campaign">
                Manage Campaign
              </NavDropdown.Item>
              <NavDropdown.Item href="#change-status">
                Change Status
              </NavDropdown.Item>
              <NavDropdown.Item href="#research-data-management">
                Research Data Management
              </NavDropdown.Item>
            </NavDropdown>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavbar;
