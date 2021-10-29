import PropTypes from 'prop-types'
import { Button } from './Button'

export const Header = ({ title }) => {
    return (
       <header className='header'>
           <h1>{title}</h1>
           <Button text='Add' color='green'/>
       </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}