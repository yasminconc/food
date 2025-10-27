
const Input = ({ name, label, type = 'text', ...props}) => {
    return (
        <div>
            <input 
                type={type}
                name={name}
                {...props}
            />
        </div>
    )
}

export default Input
