import React, {Component} from "react";
const jwt = require('jsonwebtoken');

class Main extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.state = {
            empName:"",
            empWeight:"",
            loginStatus:"",
            feedback:""      
        }
    }


    componentDidMount() {
    const self = this;
    const rawToken = localStorage.getItem('token');
    jwt.verify(rawToken, 'mysecret', function(err, decoded) {
        if (err) {
        self.setState({feedback: 'Failed to authenticate token.'});
        } else {
        const decToken = jwt.verify(rawToken, 'mysecret');
        if(decToken){
            self.setState({empName: decToken.empName});
            self.setState({loginStatus: "Logged in"});
          }
        }
        });
    }
    

    handleSubmit(event) {
        const self = this;
        event.preventDefault();
        fetch("http://localhost:8000/addnewweight", 
        {
            method:'PUT',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'        
            },
            body: JSON.stringify({
                empName: this.state.empName,
                empWeight: this.state.empWeight        
            })
        })  
        .then(function(res){
            return res.json();
        })     
        .then(function(data){
            self.setState({feedback: data.message});
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
                <h2>Enter weight</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <span>
                            {this.state.empName}, what is your
                        </span>
                    </div>
                    <div>
                        <label>
                        Weight today:

                            <input type="text" name="empWeight" onChange={this.handleFieldChange} />
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                    <div>
                        <span>{this.state.loginStatus}</span>
                    </div>
                    <div>
                        <span>{this.state.feedback}</span>
                    </div>
                </form>

            </main>
        )
    }
};

export default Main;