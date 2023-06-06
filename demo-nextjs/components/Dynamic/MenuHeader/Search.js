import classes from './Search.module.css';
import SearchIcon from './SearchIcon';

export default function Search(props) {
  return (
    <div className={classes.search}>
      <form>
        <SearchIcon className={classes.search_icon} />
        <input
          id='search_input'
          type='search'
          name='search_input'
          value=''
          placeholder='RICERCA'
          autoComplete='off'
          aria-label='Search, screen reader users press tab once to go to an accessible search.'
        />
      </form>
    </div>
  );
}
