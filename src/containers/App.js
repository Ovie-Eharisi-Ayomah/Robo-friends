import React, {useEffect, useState} from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css'



const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users))
    }, []);

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    };

    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    if (robots.length === 0) {
        return <h1>Loading</h1>
    }
    return (
        <div className="tc">
            <h1 className="f2">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>
        </div>
    ) 
}


export default App