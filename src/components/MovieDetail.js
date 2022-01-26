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