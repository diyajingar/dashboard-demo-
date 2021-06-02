import React from "react";
import Grid  from "@material-ui/core/Grid";
import MenuItem from "../component/MenuItem";
import Card from "../component/Card";
import FrontMenu from "../component/FrontMenu";


function Dashboard() {
  return (
    <div>
      <Grid container component="main" className="root">
        <Grid item  xs={12} sm={12} md={2}>
          <MenuItem />
        </Grid>
        <Grid className="main" item xs={12} md={10}>
        <FrontMenu/>
        <h1 className="title">Dashboard</h1>
          <Card />
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
