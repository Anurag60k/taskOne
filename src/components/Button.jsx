import './button.css'
export const Backbutton = ({ label, disabled = false, ...rest }) => {
    return (
        <button className='button-back' disabled={disabled} {...rest}>
            {label}
        </button>
    )
}
