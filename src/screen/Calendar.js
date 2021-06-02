import React from 'react'
import Grid from "@material-ui/core/Grid";
import MenuItem from "../component/MenuItem";
import FrontMenu from "../component/FrontMenu"
import Scheduler from '../component/Scheduler'

export default function calendar() {
    return (
        <div>
            <Grid container component="main" className="root">
        <Grid item xs={12}  sm={4} md={2}>
          <MenuItem />
        </Grid>
        <Grid className="main" item xs={false} sm={4} md={10}>
         <FrontMenu/>
         <div class="px-4 py-4 sm:p-6">
   <Scheduler/>
         </div>
      
        </Grid>
      </Grid>
          
        </div>
    )
}
