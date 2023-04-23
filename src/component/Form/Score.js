import React, { Component } from 'react';

class Score extends Component {
    constructor(props){
        super(props);
        this.state={
            hk1: 0,
            hk2: 0,
            avg: 0,
            result: "",
            xl:"",
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange=(event)=>{
        let key =event.target.name;
        let val=event.target.value;

        this.setState({[key]: val});
        this.setState((state) => ({
            avg: parseFloat((parseFloat(state.hk1)+parseFloat(state.hk2))/2),
            
        }));
        this.setResult();
        this.setXL();
    };
    handleSubmit=(event)=>{
        event.preventDefault();
        alert("ban la hoc sinh " + this.state.xl);

    };
    setResult=()=>{
        if (this.state.avg>4.5) this.setState({result: "duoc len lop"});
        else this.setState({result: "o lai lop"});
    };
    setXL=()=>{
        if (this.state.avg<4.5) this.setState({xl:"YEU"});
        else if(this.state.avg<6.5) this.setState({xl: "Tb"});
        else if(this.state.avg<8) this.setState({xl: "Kha"});
        else if(this.state.avg<9) this.setState({xl: "Gioi"});
        else if(this.state.avg<10) this.setState({xl: "Xuat sac"});



    }
    render() {
        return (
            <div className='container'>
                <h3 className='text-center'>ket qua hoc tap</h3>
                <form onSubmit={this.handleSubmit} className='was-validated'>
                    <div className='form-group'>
                        <label htmlFor='hk1'>diem hk1</label>
                        <input
                        type='number'
                        className='form-control'
                        id='hk1'
                        name='hk1'
                        max={10}
                        min={0}
                        defaultValue={0}
                        required 
                        onChange={this.handleChange}
                        />
                        <div className='invalid-feedback'>diem khong hop le</div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='hk2'>diem hk2:</label>
                        <input
                        type='number'
                        className='form-control'
                        id='hk2'
                        name='hk2'
                        max={10}
                        min={0}
                        defaultValue={0}
                        required 
                        onChange={this.handleChange}
                        />
                        <div className='invalid-feedback'>diem khong hop le</div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='hk2'>diem trung binh</label>
                        <input
                        type='number'
                        className='form-control'
                       readOnly
                       value={this.state.avg}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='hk2'>ket qua</label>
                        <input
                        type='text'
                        className='form-control'
                        defaultValue={0}
                        readOnly
                        value={this.state.result}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='hk2'>xep loai</label>
                        <input
                        type='text'
                        className='form-control'
                        defaultValue={0}
                        readOnly
                        value={this.state.xl}
                        />
                    </div>
                    <button type='submit' value='Submit' className='btn btn-primary'>xem ket qua</button>
                </form>
            </div>
        );
    }
}

export default Score;