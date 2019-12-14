import React from 'react';

import firebase from '../../config/firebaseConfig';

import TaskList from '../components/TasksList';

function addTask(e){
    e.preventDefault();
    const data = new FormData(e.target);
    
    //TODO: Needs Error Checking For Special Characters

    //Capitalize first letter
    const task = data.get('task').charAt(0).toUpperCase() + data.get('task').substring(1);

    firebase.firestore().collection('tasks').add({
        task,
        completed: false
    });
}

export default function AdminDashboard() {
    return (
        <div className="AdminDashboard">
            <div className="uk-container">
                <h1 className="PageTitle">Hello Admin,</h1>
                <p>This is the admin-dashboard. Check it out.</p>

                <div>
                    <form onSubmit={addTask}>
                        Enter a task:
                        <br></br>
                        <input type="text" name="task">
                        </input>

                        <input type="submit" value="Submit"></input>
                    </form>
                </div>
                <br></br>

                <TaskList />
            </div>
        </div>
    )
}