import React, { Component } from 'react'

class CustomDataSet extends Component {

    constructor(props) {
      super(props)
    };

handleChange = (e) => {
    this.props.handleCustChange(e)
}

handleSubmit = (e)=> {
    this.props.handleSubmitE(e)
    e.preventDefault()
    console.log("submitted successfully========" + this.props.customDH)
}

componentDidUpdate() {


    let labourTime = [3,5,7,9]
    let dilatation = [6,6,9,10]
    const CustomDataSet = [[...labourTime], [...dilatation]];
    const custom_dataset = labourTime.map((item, index) => {
        return {"labourTime": item, "dilatation": dilatation[index]}
             })

    this.props.mountChart()
    console.log("====custome data too===" + this.props.custDH)
}

   

render() {
        return (
            <div>

            <form onSubmit={this.handleSubmit}>
                                <label>
                                    Dilatation
                                    <input
                                    type="number"
                                    name="custD"
                                    max = "10"
                                    value={this.props.custD}
                                    onChange= {this.handleChange}
                                    />
                                 </label>

                                <label>
                                    Hour of Examination
                                    <input
                                    type="number"
                                    name="custH"
                                    max = "12"
                                    value={this.props.custH}
                                    onChange={this.handleChange}
                                    />
                                 </label>

                                 <button>submit</button>
            </form>



                
            </div>
        )
    }
}

export default CustomDataSet;
