import React, {useState} from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

import { Routes, Route, Link } from "react-router-dom";

import AllBoardsPage from "../../Pages/AllBoards/AllBoardsPage.js";
import AddCardPage from "../../Pages/AddCard/AddCardPage.js";
import FavoritesPage from "../../Pages/Favorites/FavoritesPage.js";
import MyBoardPage from "../../Pages/MyBoard/MyBoardPage.js";
import CommentsPage from "../../Pages/Comments/CommentsPage.js";

import { useDispatch } from 'react-redux';
const Header = () => {

    const dispatch = useDispatch()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    
    const logout = () => {
        dispatch({ type: "LOGOUT" });
        setUser(null);
      };

    return(
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
                    <Container>
                    <Navbar.Brand as={Link} to="/">Movie-Board</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">All Boards</Nav.Link>
                            <Nav.Link as={Link} to="/my">My Board</Nav.Link>
                            <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link>
                            <Nav.Link as={Link} to="/add_card">Add Card</Nav.Link>
                        </Nav>
                        <Nav>
                        
                            {user?.result ? (
                                <> 
                                    <Nav.Link>{user.result.name}</Nav.Link>
                                    <Button as={Link} className="btn btn-danger" to="/" onClick={logout}>Log out</Button>
                                </>
                                ) : (
                                <>
                                <Nav.Link as={Link} to="/log_in">Log in</Nav.Link>
                                <Button as={Link} className="btn btn-primary" to="/sign_up">Sign up</Button>
                                </>
            
                             )}
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/" element={<AllBoardsPage />} />
                    <Route path="/my" element={<MyBoardPage />}/>
                    <Route path="/favorites" element={<FavoritesPage />}/>
                    <Route path="/add_card" element={<AddCardPage />}/>
                    <Route path="card/:cardId" element={<CommentsPage />}></Route>
                </Routes>
          </>
    )

}
export default Header