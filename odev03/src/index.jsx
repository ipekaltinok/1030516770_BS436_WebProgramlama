import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component{
    state={
        mesaj:"hocam yapamıyorum :)"

    }
    render(){
        return(<div>{this.state.mesaj}</div>)
    }
}

ReactDOM.render(<App/>,document.getElementById("root"))
