var React = require('react');

var CountryDisplay = React.createClass({
  render:function(){
    return(
      <div>
        <h4>{this.props.country.name}</h4>
          <ul>
            <li>{this.props.country.region}</li>
            <li>{this.props.country.capital}</li>
            <li>{this.props.country.population}</li>
          </ul>
        <h5>Bordering Countries</h5>
          <ul>
            <li>{this.props.country.borders}</li>
          </ul>
      </div>
    )
  }
})

module.exports = CountryDisplay;
