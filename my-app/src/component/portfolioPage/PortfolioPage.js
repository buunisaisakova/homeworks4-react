import React, {Component} from 'react';
import PortfolioList from "../portfolioList/PortfolioList";

class PortfolioPage extends Component {

    constructor(props) {
        super(props);
        this.state ={works:[]}
    }

    getUsers=()=>{
        this.setState({works:["Work1", "Work2"]})
    }
    render() {
        return (
            <div>
                <h1>Portfolio Page</h1>
                <button onClick={this.getUsers}>get</button>
                <PortfolioList portfolioList ={this.state.works}/>
            </div>
        );
    }
}

export default PortfolioPage;