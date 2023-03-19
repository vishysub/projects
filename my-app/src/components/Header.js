import PropTypes from 'prop-types'
import React from 'react'
import Button from './Buttons'
const Header = (props) => {
    const onClick = () => {
        console.log('Clicked')
    }  
    return (
        
        <header style ={{color: 'Blue','backgroundColor':'White'}} className = 'header'>
           <h1 >{props.title}</h1> 
           < Button  color = 'Green' text ='Add' onClick= {onClick}/>
        </header>
    )
}



Header.defaultProps = {
    title : 'Task Tracker',
    
}
Header.propTypes = {
    title :PropTypes.string,
}

export default Header