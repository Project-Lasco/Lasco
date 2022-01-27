import React, { useState } from 'react';
import magGlass from '../sample/posts/magGlass.svg';
import '../css/SearchBarPage.css';
import PortalNav from './PortalNav';

function SearchBarPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const maxScreenW = '1100px'; // event handler for selecting the search bar, removes placeholder and moves search bar up and increases its size if on desktop
  // BONUS: figure out a better system for changing width, since when not changing width it stays where it is in the screen

  function handleFocus() {
    document.getElementById("placeholder").style.display = 'none';

    if (window.innerWidth > parseInt(maxScreenW)) {
      document.getElementById("searchBar").classList.add('desktop-focused');
    }
  } // event handler for taking cursur off of search bar


  function handleFocusOut() {
    document.getElementById("placeholder").style.display = 'visible';
  } // event handler for search input, uses a hook to set the search term. If first character is @, searches for usernames, if not, searches for names and displays them.


  function handleChangeSearch(e) {
    setSearchTerm(e.target.value);
    /* checks if first letter is @, and if so, sets color of input to purple. if not, sets it back to black.  */

    let isAt = e.target.value.charAt(0) == '@';

    if (isAt) {
      /* TODO: use ternary operator */
      // sets color of text and insertion caret to purple when the first char is @ so that user can distinguish between username and name search
      document.getElementById("searchText").style.color = "rgb(195,55,245)";
      document.getElementById("searchText").style.caretColor = "rgb(195,55,245)";
    } // if first character is not at, reset styling to default
    else {
        document.getElementById("searchText").style.color = "black";
        document.getElementById("searchText").style.caretColor = "gray";
      }
  }

  return <>
        <div id="SearchBarPage">
        {
        /* <PortalNav></PortalNav> */
      }
        {
        /*TODO: bad name, will fix later */
      }
        <div id="searchBar">
            <img id="magGlass" role="presentation" src={magGlass} />
            <p id="placeholder"> Find <span className='placeholderGradient'>Artists...</span></p>
            <input // whileFocus={{y: 20}}
        id="searchText" type="search" value={searchTerm} onChange={handleChangeSearch} onFocus={handleFocus} // TODO: replace with onBlur and onFocus
        onFocusOut={handleFocusOut} />
        </div>
        </div>
    </>;
}

export default SearchBarPage;