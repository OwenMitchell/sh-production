import bracket_top from '../images/bracket_open_down_white_on_black.jpg'

export default function Calendar(props){ 
  return (
    <div class="App-calendar">
      <img src={bracket_top} />
      {props.dates.map(event => (<Event venue={event.venue} date={event.date} />))}
    </div>
  );
}

function Event(props){
  return (
    <div class="App-calendar-event">
      <div class="App-calendar-event-venue">{props.venue}</div>
      <div class="App-calendar-event-date">{props.date}</div>
    </div>
  );
}