import React, { Component } from 'react';
// import MuiThemeProvider  from '@material-ui/core/styles/MuiThemeProvider';
// import AppBar from '@material-ui/core/AppBar';
// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { createMuiTheme , responsiveFontSizes } from '@material-ui/core/styles';
// import purple from '@material-ui/core/colors/purple';
// import green from '@material-ui/core/colors/green';






// const theme = createMuiTheme({
//     palette: {
//       primary: purple,
//       secondary: green,
//     },
//     status: {
//       danger: 'orange',
//     },
//   });

class Biodata extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    

    render() {
        const {values, handleChange} = this.props;
        return (
          
                <React.Fragment>
                    {/* <AppBar title="Enter User Detail"/> */}
                    <form>
                        First Name
                        <input
                         type="text"
                      
                         onChange= {handleChange('firstName')}
                         />

                        <br/>

                        Last Name
                        <input 
                        type="text"
                        
                         onChange= {handleChange('lastName')}
                        />

                        <br/>

                        email
                        <input
                         type="email"
                       
                         onChange= {handleChange('email')}
                         />

                    </form>
                    {/* <TextField
                    hintText="enter your first name"
                    floatingLabelText="First Name"
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}  
                    />
                    <br/>
                    <TextField
                    hintText="enter your last name"
                    floatingLabelText="Last Name"
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}  
                    />
                    <br/>
                    <TextField
                    hintText="enter your email"
                    floatingLabelText="Email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}  
                    /> */}
                    <br/>

                    <Button 
                    variant="contained" 
                    color="primary"
                    onClick={this.continue}
                    
                    >
                      continue
                    </Button>

                </React.Fragment>
               
        )
    }
}

export default Biodata;
