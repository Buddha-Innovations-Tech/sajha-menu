const WhyCard = ({ imageSource, content }) => {
  return (
    <>
      <div className="why__card">
        <img src={imageSource} alt="" />
        <div className="content">
          <span>{content}</span>
        </div>
      </div>
    </>
  );
};

export default WhyCard;
