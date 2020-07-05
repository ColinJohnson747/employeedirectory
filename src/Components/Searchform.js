import React from "react";

function Searchform(props) {
  return (
    <div>
      <div className="row">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          id="employees"
          type="text"
          name="search"
          list="employee"
          className="form-control col-6"
          placeholder="Search by Employee Name"
        />
        <button
          type="submit"
          value=""
          className="btn btn-primary col-6"
          onClick={props.handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Searchform;
