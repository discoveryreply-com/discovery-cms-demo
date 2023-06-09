import { useRef } from 'react';
import classes from './Search.module.css';
import SearchIcon from './SearchIcon';

export default function Search(props) {
    const textRef = useRef('');
    return (
        <div className={classes.search}>
            <SearchIcon className={classes.search_icon} />
            <input
                ref={textRef}
                id="search_input"
                type="search"
                name="search_input"
                placeholder="RICERCA"
                autoComplete="off"
                aria-label="Search, screen reader users press tab once to go to an accessible search."
            />
        </div>
    );
}
