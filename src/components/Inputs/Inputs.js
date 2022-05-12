import "./Inputs.scss";

function Input({ label, name, type }) {
    return (
        <div className="inputs">
            <label htmlFor={name} className="inputs__label">
                {label}
            </label>
            <input type={type} id={name} name={name} className="inputs__text" />
        </div>
    );
}

export default Input;