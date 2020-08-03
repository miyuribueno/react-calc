import React from 'react';

class Operators extends React.Component {
    render() {
        return (
            <div>
                {
                    <button onClick={this.props.clicked}>{this.props.btnOps}</button>
                }
            </div>
        )
    }
}

export default Operators;