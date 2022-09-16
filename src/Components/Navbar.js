import { Box } from '@mui/material';
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';
import { currentAffairs, GovtExams, Notes, notification, PracticeQuestion, videoLecture } from './NavItems';
import './Navbar.css'
function Navbar() {
    const [showGovtExams, setShowGovtExams] = useState(false);
    const [showNotes, setShowNotes] = useState(false)
    const [shopPracticequestion, setShowPracticeQuestion] = useState(false)
    const [showCurrentAffairs, setShowCurrentAffiars] = useState(false);
    const [showvideoLecture, setShowVideoLecture] = useState(false);
    const [showNotification, setShowNotification] = useState(false)
    return (
        <Box className="dropdwn">
            <Link to="/">
                <Button className='nav-btn' variant="primary">Home</Button></Link>
            <Dropdown className='dropdwnmenu'
                onMouseLeave={() => setShowGovtExams(false)}
                onMouseOver={() => setShowGovtExams(true)}
            // style={{ width: '166px' }}
            >
                <Dropdown.Toggle
                    className="main-style"
                    id="dropdown-basic"
                >
                    Govt Exams
                </Dropdown.Toggle>

                <Dropdown.Menu show={showGovtExams} >
                    {GovtExams.map((item, index) => {
                        return (
                            <div key={index}>
                                <Dropdown.Item as={Link} to={item.path}>
                                    {item.title}

                                </Dropdown.Item>
                            </div>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown className='dropdwnmenu'
                onMouseLeave={() => setShowNotes(false)}
                onMouseOver={() => setShowNotes(true)}
            // style={{ width: '166px' }}
            >
                <Dropdown.Toggle
                    className="main-style"
                    id="dropdown-basic"
                >
                    Notes
                </Dropdown.Toggle>

                <Dropdown.Menu show={showNotes} className="menu">
                    {Notes.map((item, index) => {
                        return (
                            <div key={index}>
                                <Dropdown.Item as={Link} to={item.path}>
                                    {item.title}

                                </Dropdown.Item>
                            </div>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown className='dropdwnmenu'
                onMouseLeave={() => setShowPracticeQuestion(false)}
                onMouseOver={() => setShowPracticeQuestion(true)}
            //  style={{ width: '166px' }}
            >
                <Dropdown.Toggle
                    className="main-style"
                    id="dropdown-basic"
                >
                    Practice Question
                </Dropdown.Toggle>

                <Dropdown.Menu show={shopPracticequestion} >
                    {PracticeQuestion.map((item, index) => {
                        return (
                            <div key={index}>
                                <Dropdown.Item as={Link} to={item.path}>
                                    {item.title}

                                </Dropdown.Item>
                            </div>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>


            <Dropdown className='dropdwnmenu'
                onMouseLeave={() => setShowCurrentAffiars(false)}
                onMouseOver={() => setShowCurrentAffiars(true)}
            //  style={{ width: '166px' }}
            >
                <Dropdown.Toggle
                    className="main-style"
                    id="dropdown-basic"
                >
                    Practice Question
                </Dropdown.Toggle>

                <Dropdown.Menu show={showCurrentAffairs} className="current-affairs">
                    {currentAffairs.map((item, index) => {
                        return (
                            <div key={index}>
                                <Dropdown.Item as={Link} to={item.path}>
                                    {item.title}

                                </Dropdown.Item>
                            </div>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown className='dropdwnmenu'
                onMouseLeave={() => setShowVideoLecture(false)}
                onMouseOver={() => setShowVideoLecture(true)}
            //  style={{ width: '166px' }}
            >
                <Dropdown.Toggle
                    className="main-style"
                    id="dropdown-basic"
                >
                    Video Lecture
                </Dropdown.Toggle>

                <Dropdown.Menu show={showvideoLecture} className="current-affairs">
                    {videoLecture.map((item, index) => {
                        return (
                            <div key={index}>
                                <Dropdown.Item as={Link} to={item.path}>
                                    {item.title}

                                </Dropdown.Item>
                            </div>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown className='dropdwnmenu'
                onMouseLeave={() => setShowNotification(false)}
                onMouseOver={() => setShowNotification(true)}
            //  style={{ width: '166px' }}
            >
                <Dropdown.Toggle
                    className="main-style"
                    id="dropdown-basic"
                >
                    Notification
                </Dropdown.Toggle>

                <Dropdown.Menu show={showNotification} className="current-affairs">
                    {notification.map((item, index) => {
                        return (
                            <div key={index}>
                                <Dropdown.Item as={Link} to={item.path}>
                                    {item.title}

                                </Dropdown.Item>
                            </div>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>
            <Link to="/Gallery">
                <Button className='nav-btn' variant="primary">Gallery</Button></Link>
        </Box>
    );
}

export default Navbar;