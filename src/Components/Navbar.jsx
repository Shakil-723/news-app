import React, { useEffect, useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";

export default function Navbar() {
  let [q, setQ] = useState("All"); // ✅ fixed initial value
  let [language, setLanguage] = useState("hi");
  let [searchInput, setSearchInput] = useState(""); // ✅ new state for search box
  let [searchParams] = useSearchParams();
  let navigate = useNavigate(); // ✅ for programmatic navigation

  useEffect(() => {
    setQ(searchParams.get("q") ?? "All");
    setLanguage(searchParams.get("language") ?? "hi");
  }, [searchParams]);

  // ✅ Handle search submit
  const handleSearch = (e) => {
    e.preventDefault(); // stop page reload
    if (searchInput.trim() !== "") {
      navigate(`?q=${searchInput}&language=${language}`);
      setSearchInput("");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top" style={{backgroundColor: "#1a5c2a"}}>
        <div className="container-fluid">
          <Link
            className="navbar-brand text-light"
            to={`?q=All&language=${language}`}
          >
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link text-light active"
                  to={`?q=All&language=${language}`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  to={`?q=Politics&language=${language}`}
                >
                  Politics
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  to={`?q=Education&language=${language}`}
                >
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  to={`?q=Crime&language=${language}`}
                >
                  Crime
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  to={`?q=Sports&language=${language}`}
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  to={`?q=Cricket&language=${language}`}
                >
                  Cricket
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  to={`?q=IPL&language=${language}`}
                >
                  IPL
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  to={`?q=Entertainment&language=${language}`}
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-light dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Others
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`?q=War&language=${language}`}
                    >
                      War
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`?q=India&language=${language}`}
                    >
                      India
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`?q=World&language=${language}`}
                    >
                      World
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`?q=Economics&language=${language}`}
                    >
                      Economics
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`?q=Jokes&language=${language}`}
                    >
                      Jokes
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-light dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Language
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={`?q=${q}&language=hi`}>
                      Hindi
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`?q=${q}&language=en`}>
                      English
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            {/* ✅ Fixed search form */}
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchInput} // ✅ controlled input
                onChange={(e) => setSearchInput(e.target.value)} // ✅ update state
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
