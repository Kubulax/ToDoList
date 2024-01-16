import React from "react";

class Task extends React.Component {
    constructor(title, shortDesc, longDesc, date, priority){
        this.title = title;
        this.shortDesc = shortDesc;
        this.longDesc = longDesc;
        this.date = date;
        this.priority = priority;
        this.finished = false;
    }

    EditTask(title, shortDesc, longDesc, date, priority){
        this.title = title;
        this.shortDesc = shortDesc;
        this.longDesc = longDesc;
        this.date = date;
        this.priority = priority;
    }

    ToggleState(){
        this.finished = !this.finished;
    }
    
    render() {
        return (
            <li>
                <h1>Tytuł: </h1> {this.title}
                <p>Krótki opis: </p> {this.shortDesc}
                <p>Długi opis: </p> {this.longDesc}
                <p>Termin wykonania: </p> {this.date}
                <p>Priorytet: </p> {this.priority}
                <p>Status: </p> { this.finished ? "Wykonane" : "Niewykonane"}
            </li>
        );
    }      
}