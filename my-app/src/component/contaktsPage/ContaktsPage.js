import React, {Component} from 'react';

class ContaktsPage extends Component {
    constructor(props) {
        super(props);
        this.state={input: ""}
    }

    changeInput = (event)=>{
        this.setState({input: event.target.value})
    }
    addProduct=()=>{
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <input onChange={this.changeInput} type="text" placeholder="product" value={this.state.input}/>
                <button onClick={this.addProduct}>add</button>
                <button value={this.setState} onClick={this.changeInput}>clear</button>
            </div>
        );
    }
}

export default ContaktsPage;