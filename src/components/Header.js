import PropTypes from 'prop-types'
import Button from './Button'

// with recent react verions, Don't need to import React anymore

// import React from 'react'

// instead of props object as the parameter, can destructure for just the element you want
// ({title}) instead of props
const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Hello' />
            <Button color='steelblue' text='Whaaat?' />

        </header>
    )
}
// if prop not defined, defaultProps value is used
Header.defaultProps = {
    title: 'Task Tracker',
}

// type restriction for prop values
// violation will produce Console error
Header.propTypes = {
    // optionally can add .isRequired to ensure value is set
    title: PropTypes.string.isRequired,
}

export default Header