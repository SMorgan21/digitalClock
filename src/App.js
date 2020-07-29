import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Col, Container, Row} from "react-bootstrap";

function App() {

    //Creating a date instance
    const date = new Date();

    function highlightToday() {
        //counting how many p elements we have with the class days
        const dayContainers = Array.prototype.slice.call(document.querySelectorAll('p.days'), 0),
            // creating an array of weekdays
            days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        //for every p element that has the class days we find the one with today's day match it against the array and add an active class
        dayContainers.forEach(function (d, i) {
            if (d.textContent.trim() === days[date.getDay()]) {
                d.classList.add('activeDay');
            }
        });
    }
    highlightToday();
    //Setting the time to a 12hr clock with seconds
    const now = date.toLocaleString('en-Uk', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})
    
    return (
        <Container fluid>
            <Row id="root" className="clock">
                <div>
                    <Col className="numbers">
                        {now}
                    </Col>
                </div>
            </Row>
            <Row className="daysHolder">
                <Col>
                    <p className="days">Sun</p>
                </Col>
                <Col>
                    <p className="days">Mon</p>
                </Col>
                <Col>
                    <p className="days">Tue</p>
                </Col>
                <Col>
                    <p className="days">Wed</p>
                </Col>
                <Col>
                    <p className="days">Thu</p>
                </Col>
                <Col>
                    <p className="days">Fri</p>
                </Col>
                <Col>
                    <p className="days">Sat</p>
                </Col>
            </Row>
        </Container>

    );
}

//TOODO = style clock, add Temperature in users locale, add greeting depending on the time of day


export default App;
