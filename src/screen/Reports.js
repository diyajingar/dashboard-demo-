import React from "react";
import Grid from "@material-ui/core/Grid";
import MenuItem from "../component/MenuItem";
import FrontMenu from "../component/FrontMenu";
import TodoData from "../component/TodoData";


function Reports() {
 
  return (
    <div>
      <Grid container component="main" className="root">
        <Grid item xs={12} sm={4} md={2}>
          <MenuItem />
        </Grid>
        <Grid className="main" item xs={false} sm={4} md={10}>
          <FrontMenu />
          <h1 className="title">Reports</h1>

          <TodoData />
        </Grid>
      </Grid>
    </div>
  );
}

export default Reports;
