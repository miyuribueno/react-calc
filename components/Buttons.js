import React from 'react';

class Buttons extends React.Component {
    render() {
        return (
            <div>
                {
                  <button onClick={this.props.clicked}>{this.props.btnNum}</button>
                }
            </div>
        )
    }
}

export default Buttons;