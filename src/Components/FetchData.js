import React from "react";


export default class FetchData extends React.Component {

    state = {
        loading: true
    };

    async componentDidMount() {
        const url = `http://localhost:4000/results?text=Title`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }

    render() {
        return <div>
            {this.state.loading ? <div>loading...</div> : <div>person</div>}
        </div>;
    }

}