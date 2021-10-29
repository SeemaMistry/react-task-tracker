import PropTypes from 'prop-types'
import { Button } from './Button'

export const Header = ({ title }) => {
    const onClick = () => {
        console.log("Clicked")
    }

    return (
       <header className='header'>
           <h1>{title}</h1>
           <Button text='Add' color='green' onClick={onClick}/>
       </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}