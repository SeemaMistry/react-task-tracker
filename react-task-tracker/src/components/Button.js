import PropTypes from 'prop-types'

export const Button = ({ text, color, onClick }) => {
    return (
        <button 
            style={{ backgroundColor:color}} 
            className='btn'
            onClick={onClick}
        >
            {text}
        </button>
        )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}