import React, { Component } from 'react';

class ActionButton extends Component {
    constructor(props) {
        super(props);
        this.state={
            isGoing:true,
            guestName:'Ho Thi Loan',
            Course:'react.js',
            message:'Your message here'
        };
    };
    handleInputChange=(event)=>{
        const target=event.target;
        const value=target.type==='checkbox'? target.checked :target.value;
        const name=target.name;

        this.setState({
            [name]: value
        });
    }
    handleSubmit=(event)=>{
        alert('tham gia:'
        + this.state.isGoing +', ho ten:'
        + this.state.guestName +', '
        + this.state.course +'va'
        + this.state.message 
        );
        event.preventDefault();
    };
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <br/>
                <br/>
                <label>
                    tham gia:
                    <input name="isGoing" 
                    type="checkbox"
                    onChange={this.handleInputChange}/>
                </label>
                <br/>
                <br/>
                <label>
                    ghi ro ho ten:
                    <input name="guestName" 
                    type="text"
                    value={this.state.guestName}
                    onChange={this.handleInputChange}/>
                </label>
                <br/>
                <br/>

                <label>
                    chon khoa hoc:
                    <select name="course" 
                    type="text"
                    value={this.state.course}
                    onChange={this.handleInputChange}>
                    <option value="html">html</option>
                    <option value="css">css</option>
                    <option value="javascript">javascript</option>
                    <option value="react.js">react.js</option>

                    </select>
                </label>
                <br/>
                <br/> 
                <label>
                    message:
                    <textarea name="message" 
                    type="text"
                    value={this.state.message}
                    onChange={this.handleInputChange}/>
                </label>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        );
    };
    
};

export default ActionButton;