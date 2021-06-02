import React from "react";
import Grid from "@material-ui/core/Grid";
import MenuItem from "../component/MenuItem";
import UserDataTable from "../component/UserDataTable";
import MobileTable from "../component/MobileTable";
import FrontMenu from "../component/FrontMenu"
function UserTable() {
  return (
    <div>
      <Grid container component="main" className="root">
        <Grid item  xs={12}  sm={4} md={2}>
          <MenuItem />
        </Grid>
        <Grid className="main" item xs={false} sm={4} md={10}>
         <FrontMenu/>
          <UserDataTable/>
          <MobileTable/>
        </Grid>
      </Grid>
    </div>
  );
}

export default UserTable;
