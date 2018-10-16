import React, { Component } from 'react';
import { connect } from 'react-redux';
import {tick} from '../actions';


class Clock extends Component {
    componentDidMount() {
        // setInterval(this.props.tick, 1000);
        setInterval(() => {this.props.tick(new Date().toLocaleTimeString()); },  1000);
        //setInterval( () => {
         //   this.props.tick(new Date().toLocaleTimeString());
            //call action index.js fucntion and pass the param to action function
        //}, 1000);
    }

    render() {
        console.log('clock props', this.props);
        return (
            <div>
                <h2>{this.props.count}</h2>
                <h1> {this.props.title}</h1>
            
                <h1>{this.props.time}</h1>
            </div>
        );
    }
}//end class Clock

function mapStateToProps(state) {
    console.log('clock.js mapStateToProps: redux state is ',state.clock.time);
console.log('mapStateToProps state ', state);
    return {
        // test: 'This is a test',
        // name: 'sasa'
        time: state.clock.time,
        title: state.clock.header,
        count: state.user.count
    }
}

export default connect(mapStateToProps, {tick: tick})(Clock);