import React from 'react'
import Grid  from "@material-ui/core/Grid";
import MenuItem from "../component/MenuItem";
import SingleBlog from '../component/SingleBlog';
import FrontMenu from "../component/FrontMenu"
function Blog() {
    return (
        <div>
            <Grid container component="main" className="root">
        <Grid item xs={false} xs={12}  sm={4} md={2}>
          <MenuItem />
        </Grid>
        <Grid className="main" item xs={false} sm={4} md={10}>
          <FrontMenu/>
        <h1 className="title">Blog</h1>
         <SingleBlog/>
        </Grid>
      </Grid>
        </div>
    )
}

export default Blog
