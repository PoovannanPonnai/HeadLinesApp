import React, { useState, useContext, useEffect, useRef } from 'react';
import { PageContext } from '../context/PageContext';

const Header = () => {
  const pageContext = useContext(PageContext);
  const [inpText, setInputText] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inpText === inputRef.current.value) {
        pageContext.searchHandler(inpText);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [inpText, inputRef, pageContext]);

  const inpTextHandler = txt => {
    setInputText(txt);
  };

  return (
    <nav id="main-nav">
      <div className="container">
        <div className="logo">Today's News Headlines</div>
        <div className="searchBox">
          <input
            type="text"
            placeholder="Please enter text to search"
            ref={inputRef}
            value={inpText}
            onChange={e => {
              inpTextHandler(e.target.value);
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
