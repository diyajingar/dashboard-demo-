import React from "react";
import { Link } from "react-router-dom";
import {Typography,Paper,Avatar,Grid} from "@material-ui/core";
import CustomTextInput from "../component/CustomTextInput";
import LockIcon from '@material-ui/icons/Lock';
export default function SignInSide() {
 return (
    <Grid container component="main" className="root">
      <Grid item xs={false} sm={4} md={7} className="image" />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className="paper">
          <Avatar className="avatar">
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className="form" noValidate>
            <CustomTextInput 
            id="email"
            label="Email Address"
            onChange={(e)=>console.log(e)}
            />
            <CustomTextInput 
            id="password"
            type="password"
            label="password"
            onChange={(e)=>console.log(e)}
            />
            <div className="buttonTopMargin">
              <Link to="/Dashboard" class="button">Sign In</Link>
            </div>
            <hr></hr>
            <p className="text-center">Or Sign in With</p>
            <div className="flex1">
              <div className="outline">
                <img
                  className="socialIcon icon2"
                  src="https://i.ibb.co/MCdrPFs/New-Project-1.png"
                  alt="logo"
                ></img>
              </div>
              <div className="outline">
                <img
                  class="socialIcon"
                  src="https://i.ibb.co/0tw2fJj/search.png"
                  alt="logo"
                />
              </div>
            </div>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
