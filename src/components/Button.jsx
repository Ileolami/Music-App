/* eslint-disable react/prop-types */
const Button = ({  onClick, icon }) => {
    return (
        <button
        type="button"
        onClick={onClick}
        className='text-lg bg-slate-900 text-slate-200 h-14 w-14 rounded-full flex justify-center items-center focus:outline-none'
      >
        {icon && <span className="button-icon">{icon}</span>}
      </button>
    );
  };
  
  export default Button;