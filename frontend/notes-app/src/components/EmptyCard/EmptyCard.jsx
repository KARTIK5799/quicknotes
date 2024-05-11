import PropTypes from "prop-types";

const EmptyCard = ({ imgSrc, content }) => {
  return (
    <div className="h-96 w-full flex items-center justify-center flex-col">
      <img src={imgSrc} alt="No Note On Screen" className="h-80 w-80" />
      <h2>{content}</h2>
    </div>
  );
};

// Adding props validation
EmptyCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default EmptyCard;
