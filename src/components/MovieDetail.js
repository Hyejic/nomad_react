import PropTypes from "prop-types";

export const MovieDetail = ({title, year, desc, coverImg}) => {
  return(
    <div>
      <img src={coverImg} alt={title}/>
      <h1>{title}</h1>
      <span>{year}</span>
      <p>{desc}</p>
    </div>
    
  )
}

MovieDetail.propsType = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
}