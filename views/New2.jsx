const React = require(`react`);
const DefaultLayout = require("./layout/Default")

class New2 extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <h1>New Veggie</h1>
                <nav>
                    <a href="/vegetables">Back</a>
                </nav>
                <form action="/vegetables" method="POST">
                    {/* NOTE: action will be the route, method will be the HTTP verb */}
                    Name: <input type="text" name="name" /><br />
                    Color: <input type="text" name="color"/><br />
                    Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br />
                    <input type="submit" name="" value="Create Veggie"/>
                </form>
            </DefaultLayout>
        );
    };
};

module.exports = New2