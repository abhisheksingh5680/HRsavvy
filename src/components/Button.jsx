import PropTypes from 'prop-types';

const Button = ({ textColor, bgColor, buttonText, padding = 'py-2 px-5', additionalClasses = '', onClick }) => {
  return (
    <button
      className={`${padding} ${textColor} ${bgColor} text-sm rounded-full ${additionalClasses}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

Button.propTypes = {
    textColor: PropTypes.string,
    bgColor: PropTypes.string,
    buttonText: PropTypes.string.isRequired, // `buttonText` is required
    padding: PropTypes.string,
    additionalClasses: PropTypes.string,
    onClick: PropTypes.func,
  };

export default Button;
