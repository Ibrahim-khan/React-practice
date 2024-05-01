const todoTitle = "Call Family";
const today = "Today : ";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

function Card(props){
  const {titleText, descText} = props;
  return <div className='card2'>
          <h2 className='cardTitle'>{titleText}</h2>
          <h4 className='Title'>{todoTitle}</h4>
          <p className='para'>{descText}</p>
          <p className='date'>{today + " " + dateName + " / " + monthName + " / " + currentYear}</p>
         </div>
}

export default Card;