console.log("Hello world");
var restaurant_test = {
  name: "Eat&Drink",
  address: "34 rue Guersant"
}
console.log(restaurant_test)


var restaurants = [
  {
    name: "Boulangerie",
    address: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.776777792625!2d2.2867265509863577!3d48.88153177918815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f8dc1e2c997%3A0x8d502dc5a87fdacd!2s31+Rue+Guersant%2C+75017+Paris!5e0!3m2!1sfr!2sfr!4v1476881885985",
    color: "red"
  },
  {
    name: "Sushi",
    address: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.4455756732664!2d2.3070863!3d48.8878449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fa35aa2cee1%3A0x788b41eb9f38416b!2sFuji+Tomy!5e0!3m2!1sfr!2sfr!4v1476881695623",
    color: "blue"
  },
  {
    name: "Eat&Drink",
    address: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.663434687336!2d2.2885171153474704!3d48.88369230687952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdf11dc1729%3A0x8d9c31adc67a4a0b!2sEat'n+Drink!5e0!3m2!1sen!2sfr!4v1476883029565",
    color: "yellow"
  },
  {
    name: "Bar à salade",
    address: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.657633865056!2d2.2902912131227766!3d48.883802879289945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f91bd8617e3%3A0xcff45f5a81eceb92!2sGREEN'WICH!5e0!3m2!1sen!2sfr!4v1476883154320",
    color: "black"
  }
]
console.log(restaurants)

function cubed (number) {
  var squared = number*number
  var cubed = squared*number
  return cubed
}
console.log(cubed(7))

function randomize (restaurants) {
  var index = Math.floor((Math.random() * restaurants.length));
  return restaurants[index]
}

var Map = React.createClass({
  propTypes: {
    url: React.PropTypes.string
  },
  render: function() {
    return (
      <iframe src={this.props.url} width="600" height="450" frameBorder="0" allowFullScreen></iframe>
    )
  }
})

var Restaurant = React.createClass({
  propTypes: {
    restaurant_to_show: React.PropTypes.object
  },
  render: function() {
    var title_style = {
      color:this.props.restaurant_to_show.color
    }
    return (
      <div>
      <h1 style = {title_style}>{this.props.restaurant_to_show.name}</h1>
      <Map url = {this.props.restaurant_to_show.address}/>
      </div>
    )

  }
}

)


var Tag = React.createClass({
  propTypes: {
    color:React.PropTypes.string
  },
  render: function() {
    var styli = {
      color:this.props.color
    }
    return <div style={styli}>This color is: {this.props.color}</div>;
  }
});


var Hello = React.createClass({
  render: function() {
    return (<div>

    <p>Hello {this.props.name}</p>
    <Tag color="red"/>
    <Tag color="blue"/>
    <Tag color="yellow"/>
    </div>);
  }
});

var random_restaurant = randomize(restaurants)

ReactDOM.render(
  <Restaurant restaurant_to_show = {random_restaurant}/>,
  document.getElementById('container')
);
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10494.654474656865!2d2.2907058!3d48.8836888!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8d9c31adc67a4a0b!2sEat&#39;n+Drink!5e0!3m2!1sfr!2sfr!4v1476880864693" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
