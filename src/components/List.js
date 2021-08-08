import React, { useEffect } from "react";
import { connect } from "react-redux";

const List = (props) => {
  const handleClick = (key) => {
    props.deleteMovie(key);
  };
  return (
    <div className="list">
      <h3>Movies</h3>
      {props.moviesList.map((item, key) => (
        <div className="movie" key={key}>
          {item}
          <button className="del-btn button" onClick={() => handleClick(key)}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    moviesList: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMovie: (key) =>
      dispatch({
        type: "MOVIE:DELETE",
        key,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
