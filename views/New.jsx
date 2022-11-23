const React = require(`react`);
const DefaultLayout = require("./layout/Default");

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="New Fruit Page">
                <nav>
                    <a href="/fruits">Back</a>
                </nav>
                <form action="/fruits" method="POST">
                    {/* NOTE: action will be the route, method will be the HTTP verb */}
                    Name: <input type="text" name="name" /><br />
                    Color: <input type="text" name="color"/><br />
                    Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br />
                    <input type="submit" name="" value="Create Fruit"/>
                </form>
            </DefaultLayout>
        );
    };
};

module.exports = New