import React, { useState } from "react";
import { connect } from "react-redux";

const Add = (props) => {
  const [movieName, setMovieName] = useState("");

  const handleChange = (e) => {
    setMovieName(e.target.value);
  };

  const handleClick = () => {
    debugger;
    props.addMovie(movieName);
  };

  return (
    <div className="add">
      <h3>Add Movie</h3>
      <input
        value={movieName}
        onChange={handleChange}
        placeholder="Enter Movie Name"
      />
      <button className="button" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMovie: (movieName) => {
      debugger;
      dispatch({
        type: "MOVIE:ADD",
        movieName,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
