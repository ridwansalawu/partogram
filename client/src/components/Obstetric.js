import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


class Obstetric extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }









    render() {
        const {values, handleChange } = this.props;
        return (
            <div>
                <form>
                    number of children alive
                    <input type="number" onChange={handleChange(this.prevChildren)}/>
                    number of previous pregnancies
                    <input type="number"/>
                    <Button 
                    variant="contained" 
                    color="secondary"
                    onClick={this.continue}
                    
                    >
                      continue
                    </Button>
                    <button>next</button>






                </form>
                
            </div>
        )
    }
}



export default Obstetric;
