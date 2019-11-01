import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            phoneNo: '',
            selectedOption: 'male'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }
    handleChange(e) {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value,
            selectedOption: e.target.value
        })  
    }
    handleOptionChange(e){
        this.setState({
            selectedOption: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.showFrmData(this.state);
        this.setState({
            name: '',
            password: '',
            phoneNo: '',
            selectedOption: 'male'
        })
    }
    render() {
        return (
            <div className="section">
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Name" name="name" onChange={this.handleChange} value={this.state.name}></input>
                    <input placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password}></input>
                    <input placeholder="Mobile no" name="phoneNo" onChange={this.handleChange} value={this.state.phoneNo}></input>
                    <div>
                        <p><label>Gender</label></p>
                        <label>
                            <input type="radio" value="male" checked={this.state.selectedOption === "male"} onChange={this.handleOptionChange} />
                            <span>Male</span>
                        </label>
                        <label>
                            <input type="radio" value="female" checked={this.state.selectedOption === "female"} onChange={this.handleOptionChange}/>
                            <span>Female</span>
                        </label>
                    </div>
                    {/* <div>
                    <p><label>Select Country</label></p>
                    <select>
                        <option>Mumbai</option>
                        <option>Delhi</option>
                    </select>
                </div> */}
                    <div className="center mt-30">
                        <button className="btn red">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;

