import React from "react";
import PropTypes from "prop-types";

// had to add the PropTypes as it is now seperate from REACT

export class Home extends React.Component {
    render() {
        // console.log(this.props);
        var text = "Something!";
        return (
            <div> 
                <p>In a new Component !</p>
                <p>{text}</p>
                <p>Your name is {this.props.name}, your age is {this.props.age}</p>
                <p>User Object => Name: {this.props.user.name}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby) => <li>{hobby}</li>)}
                    </ul>
                </div>
                <hr/>
                    {this.props.children}
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object
    // children: PropTypes.element
};

// had to remove React. from the below since PropTypes is no longer within React
// Home.PropTypes = {
//     name: React.PropTypes.string,
//     age: React.PropTypes.number,
//     user: React.PropTypes.object
// };