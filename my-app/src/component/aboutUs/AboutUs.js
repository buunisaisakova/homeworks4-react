import React, {Component} from 'react';

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {title: "текст"}
    }
    changeText = ()=>
      this.setState({title:""})
    render() {
        return (
            <div>
              <p>{this.state.title}</p>
                <button onClick={this.changeText}>click</button>
            </div>
        );
    }
}

export default AboutUs;