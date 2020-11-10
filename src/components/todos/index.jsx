import React, { Component } from 'react'
import ListView from '../listview'

export default class Todos extends Component {
    state={
        todos:[
            {
id:"01",
text:"main todo text",
description:"Simple todo make easy life",
time:new Date(),
isComplete:false,
isSelect:false
        }]
    }
toggleSelect=()=>{

}

toggleComplete=()=>{

}

    render() {
        return (
            <>
             <h1 className="display-4 text-center mb-5">Todos</h1>   
             <ListView
             todos={this.state.todos}
             toggleComplete={this.toggleComplete}
             toggleSelect={this.toggleSelect}
             />
            </>
        )
    }
}
