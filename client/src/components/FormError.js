import React, { Component } from 'react';
import "./formError.css"

class FormError extends Component {
    constructor(props) {
      super(props)
    
    };
    


    render() {
        const {theMessage} = this.props;
        return (
            <div className="form-error">
                { theMessage } 
            </div>
        )
    }
}

export default FormError;
