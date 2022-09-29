import "./styles.css";

var message = "Hello";
var time = new Date().getHours();
time = Number.parseInt(time);
var color = "red";
console.log(time);
if (time <= 12) {
  message = "Good morning";
} else if (time < 18) {
  message = "Good afternoon";
  var color = "green";
} else {
  message = "Good evening";
  var color = "blue";
}

export default function App() {
  return (
    <div className="App">
      <h3 className={color}>{message}</h3>
    </div>
  );
}
