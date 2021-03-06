import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

export default props => {
  const keyHandler = e => {
    if (e.key === "Enter") {
      e.shiftKey ? props.handleSearch() : props.handleAdd();
    } else if (e.key === "Escape") {
      props.handleClear();
    }
  };
  return (
    <div role="form" className="todoForm form-row mb-5">
      <Grid cols="12 9 10">
        <input
          id="description"
          className="form-control"
          placeholder="Adicione uma tarefa"
          value={props.description}
          onChange={props.handleChange}
          onKeyUp={keyHandler}
        />
      </Grid>
      <Grid cols="12 3 2">
        <IconButton
          styles="primary mr-2"
          icon="plus"
          onClick={props.handleAdd}
        />
        <IconButton
          styles="info mr-2"
          icon="search"
          onClick={props.handleSearch}
        />
        <IconButton styles="light" icon="times" onClick={props.handleClear} />
      </Grid>
    </div>
  );
};
