const React = require("react");
const DefaultLayout = require("./layout/Default");

class Show extends React.Component {
  render() {
    const {name, color, readyToEat} = this.props.fruit
    return (
        <DefaultLayout title={`${name} Show Page`}>
          <p>The {name} is {color}.</p>
          {readyToEat? "It is ready to eat!" : "It is not ready to eat... dont touch that"}
        </DefaultLayout> 
    )
  }
}
// We can write javascript code within the curly brackets

module.exports = Show