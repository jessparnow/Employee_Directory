import React from "react";

function Banner(props) {
  
  return (
    <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">Employee Directory</span>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search by Name Only" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit" onClick={(e) => {
        props.handleInputChange(e)
      }}>Search</button>
    </form>
  </div>
</nav>

  );
}
export default Banner;