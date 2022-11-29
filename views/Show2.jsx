const React = require("react");
const DefaultLayout = require("./layout/Default")

class Show2 extends React.Component {
  render() {
    const {name, color, readyToEat} = this.props.vegetable
    return (
      <DefaultLayout title={`${name} Show Page`}>
        <a href="/vegetables">Back</a>
          <p>The {name} is {color}.</p>
          {readyToEat? "It is ready to eat!" : "It is not ready to eat... dont touch that"}
      </DefaultLayout>
    ) 
  }
}
// We can write javascript code within the curly brackets

module.exports = Show2