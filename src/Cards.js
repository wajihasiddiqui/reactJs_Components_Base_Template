/* eslint-disable react/jsx-no-target-blank */
function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imagesrc} alt="mypic" className="card_image" />
          <div className="card_info">
            <span className="card_category">{props.title}</span>
            <h3 className="card_title">{props.seriesName}</h3>
            <a href={props.link} target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
