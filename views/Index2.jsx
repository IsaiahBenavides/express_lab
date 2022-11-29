const React = require("react")
const DefaultLayout = require("./layout/Default")

class Index2 extends React.Component {
  render() {
    const  { vegetables } = this.props
    return (
      <DefaultLayout>
        <h1>Vegetables Index Page</h1>
        <nav>
          <a href="/vegetables/new">Create Veggies</a>
        </nav>
        <ul>
          {
            vegetables.map((vegetable, i) => {
              return (
                <li key = {i}> 
                  The{' '}
                  <a href={`/vegetables/${vegetable._id}`}>{vegetable.name}</a>
                  {" "}
                  is {vegetable.color} <br />
                  {
                    vegetable.readyToEat 
                    ? "It is ready to eat" 
                    : "It is not ready to eat"
                  }
                  <br />
                  <a href={`/vegetables/${vegetable._id}/edit`}>Edit This vegetable</a>
                  <form action={`/vegetables/${vegetable._id}?_method=DELETE`}
                  method="POST">
                    <input type="submit" value="DELETE" />
                  </form>
                </li>
              )
            })
          }
        </ul>
      </DefaultLayout>
    )
  } 
}

module.exports = Index2