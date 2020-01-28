import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component
{
    constructor()
    {
        super();
        this.state={item:"", list:[]};
    }
    submitHandler()
    {
       let c=this.state.list.slice();
       c.push(this.state.item);
       this.setState({
           list:c,
           item:''
       });
    }
    changeHandler(e)
    {
        this.setState({item: e.target.value});
    }
    deleteHandler(e)
    {
        let d=this.state.list.slice();
        d.splice(e,1);
        this.setState({
            list: d,
            item: ''
        })
    }
    render()
    {
        let val = this.state.list.map((b,i) =>{
           return ( <li key={i}>{b} <button onClick={this.deleteHandler.bind(this)} className="cross">X</button></li>
            );
        });
        return(
        <div className="container">
                <h1>To-DO APP</h1>
                <input type="text" value={this.state.item} id="todo" placeholder="Enter Task" onChange={this.changeHandler.bind(this)}/>
                <button className="btnclass" onClick={this.submitHandler.bind(this)}>Submit</button>    
                <div className="list-item">
                    <h1>To-DO TASK</h1>              
                {this.state.list.length===0 ? <ul></ul> : <ul>{val}</ul>}
                </div>
            </div>
        );
    }
}
export default App;