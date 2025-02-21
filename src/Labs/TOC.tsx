import {Nav} from 'react-bootstrap';
import { useLocation } from "react-router";
export default function TOC() {
  const { pathname } = useLocation();
  return (
    <Nav variant="pills" id="wd-toc">
     <Nav.Item>
       <Nav.Link href="#/Labs" id="wd-a" >Labs</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link href="#/Labs/Lab1" className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`} id="wd-a1">Lab 1</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link href="#/Labs/Lab2" id="wd-a2"  className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}>Lab 2</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link href="#/Labs/Lab3" id="wd-a3" className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}>Lab 3</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link href="#/Labs/Lab4" id="wd-a4" className={`nav-link ${pathname.includes("Lab4") ? "active" : ""}`}>Lab 4</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link href="#/Kambaz" id="wd-k">Kambaz</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link href="https://github.com/Vedanshu-Patel?tab=repositories" id="wd-github">My GitHub</Nav.Link>
     </Nav.Item>
   </Nav>

  );
}