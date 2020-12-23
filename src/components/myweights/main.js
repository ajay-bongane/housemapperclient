import React, {Component} from "react";

class Main extends Component {

    constructor(props){
        super(props);
        this.state =    {
            allWeights: []
        }
    }

    componentDidMount(){
        fetch("http://localhost:8000/getmyweights",{
            method:'GET',
            headers:new Headers({
                'Authorization':'Bearer '+localStorage.getItem('token'),
                'Content-Type':'application/x-www-form-urlencoded'
            })
        })
        .then(response => response.json())
        .then(response => {
            this.setState(
                {allWeights:response}
            )
        })
    }
    
    render(){
        if(this.state.allWeights.length > 0) {
            return(
                <main>
                    <h2>My Weights</h2>
                    {
                    this.state.allWeights.map((emp,i) => {
                        return <div key={i}>
                            {emp.empName}
                            {emp.employeeWeights.map((weights,j) => {
                                return <div key={j}> 
                                    Date: {new Date(weights.weighedOn).toLocaleDateString()}
                                    {' '}
                                    Weight: {weights.empWeight}
                                </div>
                            })}
                        </div>
                    })
                }</main>
            );
        } else {
            return(
                <main>
                    <h2>My Weights</h2>
                    <div>Not authorized</div>
                </main>
            )
        }
    }
}

export default Main;