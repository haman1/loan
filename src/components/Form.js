import React, { Component } from 'react';

class Form extends Component {
    state = { 
        amount:'',
        term:''

    }

    handleChange = (e) => {
        
        const {name, value} = e.target;

        //console.log(name);

      //set state
      this.setState({
          [name] : Number(value)
        })


    }
    validateForm = () => {
            //destructuring
            const {amount, term} = this.state;

            const notValid = !amount || !term
           return notValid;


    }
    render() {
        //extract content from state
        const {amount} = this.state;
        return (
            <form>
                <div className="row">
                    <label>Amount</label>
                    <input 

                    onChange={this.handleChange}
                    id="name" 
                    name="amount" 
                    className="u-full-width" 
                    type="number" 
                    placeholder="Eg:3000" />
                </div>
                <div>
                    <label>Months to Repay</label>
                    <select 
                            onChange={this.handleChange}
                            name="term" 
                            className="u-full-height">
                                <option value="">Select</option>
                                <option value="3">3 Months</option>
                                <option value="6">6 Months</option>
                                <option value="12">12 Months</option>
                                <option value="24">24 Months</option>
                    </select>
                </div>
                <div>
                    <input 
                            disabled={ this.validateForm() }
                            type="submit" 
                            value="Calculate" 
                            className="u-full-width button-primary" />
                </div>
            </form>
         );
    }
}

export default Form;