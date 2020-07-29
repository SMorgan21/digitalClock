import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Col, Container, Row} from "react-bootstrap";

function App() {

    //Creating a date instance
    const date = new Date();
    //
    // function today() {
    //     let weekday = new Array(7);
    //     weekday[0] = "Sun";
    //     weekday[1] = "Mon";
    //     weekday[2] = "Tue";
    //     weekday[3] = "Wed";
    //     weekday[4] = "Thurs";
    //     weekday[5] = "Fri";
    //     weekday[6] = "Sat";
    //     return weekday[date.getDay()]
    // }
    //
    // const todayis = today();
    //
    // const weekDays = ['Sun ', 'Mon ', 'Tue ', 'Wed ', 'Thurs ', 'Fri ']
    //
    // function activeDay(today, weekDay) {
    //     console.log(today);
    //     console.log(weekDay);
    //     if (today === weekDay) {
    //         console.log('plop')
    //     } else {
    //         console.log(
    //             'fuck off'
    //         )
    //     }
    // }
    //
    // activeDay(todayis, weekDays);

    function colorToday() {
        const dayContainers = Array.prototype.slice.call(document.querySelectorAll('p.days'), 0),
            days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        adate = new Date();

        dayContainers.forEach(function (d, i) {
            console.log(adate);
            if (d.textContent.trim() === days[adate]) {
                d.parentNode.classList.add('activeDay');
            }
        });
    }

    colorToday();

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
            <Row className="daysHolder clock">
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
                    <p className="days">Saturday</p>
                </Col>
            </Row>
        </Container>

    );
}

//TOODO = style clock, add Temperature in users locale, add greeting depending on the time of day


export default App;
