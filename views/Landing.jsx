const React = require("react")
const DefaultLayout = require("./layout/Default")

class Landing extends React.Component {
    render(){
        return (
            <DefaultLayout title="Landing Page">
                <nav>
                    <a href="/fruits">Fruits</a> <br />
                    <a href="/vegetables">Vegetables</a>
                </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Landing