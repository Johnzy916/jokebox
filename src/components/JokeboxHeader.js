import React, { Fragment, useContext } from 'react';
import AdlibContext from '../context/adlib-context';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'


export default () => {
    const { setJokeType,
            jokeType } = useContext(AdlibContext);
    
    return (
        <Fragment>
            <h1 className="header__title header__title--jokebox"><span>Jokebox</span></h1>
            <div className="flex-row">
                <span>Show me</span>
                <DropdownButton id="select-type" size="sm" title={jokeType}>
                        <Dropdown.Item 
                            eventKey="Dad" 
                            onSelect={(type) => setJokeType(type)}>Dad</Dropdown.Item>
                        <Dropdown.Item 
                            eventKey="Programming" 
                            onSelect={(type) => setJokeType(type)}>Programming</Dropdown.Item>
                        <Dropdown.Item 
                            eventKey="Random" 
                            onSelect={(type) => setJokeType(type)}>Random</Dropdown.Item>
                </DropdownButton>
                <span>jokes</span>
            </div>
        </Fragment>
    );
}