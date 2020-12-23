import React, {Component} from "react";

//
const Search = (props) => {
    const {
        empName,
        onChange,
        search
    } = props;
    
    return <div>
      <input
        type="text"
        value={empName}
        onChange={onChange}
      />
      <button onClick={search}>Search</button>
    </div>;
}
  //
  
const AllWeights = ({allWeights}) => {
return allWeights.map((emp, i) =>
    (
    <div key={i}>
        {emp.empName} {
        emp.employeeWeights.map(function(weight, j){
            return <div key={j}>
            Date: {new Date(weight.weighedOn).toLocaleDateString()}
            {' '}
            Weight: {weight.empWeight}
            </div>
        })
        }
    </div>
    )
);
}
  

class Main extends Component {  

    constructor(props){
        super(props);
        this.state =    {
            empName: '',    
            allWeights: []
        };
        this.onSearchQueryChange = this.onSearchQueryChange.bind(this);
        this.onSearch = this.onSearch.bind(this);    
    }

    onSearchQueryChange(e) {
        this.setState({empName: e.target.value});
    }
    onSearch() {
        fetch("http://localhost:8000/getbyname/" + this.state.empName,
          {
            method:'GET',
            headers: new Headers({
             'Authorization': 'Bearer '+localStorage.getItem('token'),
             'Content-Type': 'application/x-www-form-urlencoded'
           }),
         }
        )
        .then(response => response.json())
        .then(response => {
          this.setState({
            allWeights:response
          })
        })
      }
    
    render(){
        const {empName, allWeights} = this.state;
        return(
            <main>
                <h2>Search Employee Weights</h2>
                <Search 
                    searchQuery={ empName }
                    onChange={this.onSearchQueryChange}
                    search={this.onSearch}
                />
                <AllWeights allWeights={allWeights} />
            </main>
        );
    }
}

export default Main;