import React from "react";
import PropTypes from "prop-types";

// had to add the PropTypes as it is now seperate from REACT

export class Home extends React.Component {
    constructor(props) {
        super();
        this.age = props.age;
    }

    onMakeOlder() {
        this.age += 3; 
        console.log(this.age);
    }

    render() {
        // console.log(this.props);
         return (
            <div> 
                <p>In a new Component !</p>
                     <p>Your name is {this.props.name}, your age is {this.age}</p>
                     <hr/>
                     <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
            </div>
      );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
};

// had to remove React. from the below since PropTypes is no longer within React
// Home.PropTypes = {
//     name: React.PropTypes.string,
//     age: React.PropTypes.number,
//     user: React.PropTypes.object
// };