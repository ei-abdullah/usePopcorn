import { useEffect, useRef } from "react";
import { useKey } from "../useKey";

export default function NavBarComp({ query, setQuery, movies }) {
  return (
    <NavBar>
      <Search query={query} setQuery={setQuery} />
      <NumResults movies={movies} />
    </NavBar>
  );
}

function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

function Search({ query, setQuery }) {
  //* Using Ref Hook
  //* 1
  const inputElement = useRef(null); // Usually null in case of DOM element

  useKey("Enter", () => {
    if (document.activeElement === inputElement.current) return;

    inputElement.current.focus();
    setQuery("");
  });

  //* 3
  useEffect(function () {
    //inputElement.current is the DOM element
    inputElement.current.focus();
  }, []);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      //* 2
      ref={inputElement}
    />
  );
}

function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
