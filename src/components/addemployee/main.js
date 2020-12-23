import React, {Component} from "react";
const jwt = require('jsonwebtoken');

class Main extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.state = {
            empName:"",
            empPass:"",
            postStatus:"",
            feedback:""      
        }
    }


    handleSubmit(event) {
        const self = this;
        event.preventDefault();
        fetch("http://localhost:8000/addnewemployee", 
        {
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'        
            },
            body: JSON.stringify({
                empName: this.state.empName,
                empPass: this.state.empPass        
            })
        })  
        .then(function(res){
            return res.json();
        })     
        .then(function(data){
            self.setState({postStatus: data.message});
            self.setState({token: data.token});
            localStorage.setItem('token', self.state.token);
        })
        .catch(err=>console.log(err));
    }


    handleFieldChange(event) {
        this.setState({
            [event.target.name]:event.target.value
        })
    } 
    

    render(){
        return(
            <main>
                <h2>Add Employee</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                        Employee Name:

                            <input type="text" name="empName" onChange={this.handleFieldChange} />
                        </label>
                    </div>
                    <div>
                        <label>
                        Employee Password:

                            <input type="text" name="empPass" onChange={this.handleFieldChange} />
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                    <div>
                        <span>{this.state.postStatus}</span>
                    </div>
                </form>

            </main>
        )
    }
};

export default Main;