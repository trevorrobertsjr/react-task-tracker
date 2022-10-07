const Button = ({ color, text }) => {
    return (
        <button style={{ backgroundColor: color }} className='btn' color={color}>{text}</button>
    )
}

export default Button