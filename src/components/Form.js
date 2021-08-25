import React, { Component } from 'react';

class Form extends Component {
    state = { }
    render() {
        return (
            <form>
                <div className="row">
                    <label>Amount</label>
                    <input name="amount" class="u-full-width" type="number" placeholder="Eg:3000"></input>
                </div>
                <div>
                    <label>Months to Repay</label>
                    <select name="months" className="u-full-height">
                        <option value="">Select</option>
                        <option value="3">3 Months</option>
                        <option value="6">6 Months</option>
                        <option value="12">12 Months</option>
                        <option value="24">24 Months</option>
                    </select>
                </div>
                <div>
                    <input type="submit" value="Calculate" className="u-full-width button-primary" />
                </div>
            </form>
         );
    }
}

export default Form;