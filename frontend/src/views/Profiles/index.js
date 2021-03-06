// @ts-nocheck
/* eslint-disable max-len */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Grid, makeStyles, Button } from "@material-ui/core";

// import InfoForm from "./ProfileForm";
import InfoForm from "./ProfileForm";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function ProfilesBody(props) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [profileData, setProfileData] = React.useState({});
  const [fuelQuoteData, setFuelQuoteData] = React.useState({});

  return (
    <Grid container>
      {/* ProfileForm */}
      <Grid item xs={12}>
        <InfoForm />
      </Grid>
    </Grid>
  );
}

export default ProfilesBody;

/**
 * Front end must include following components:
- Login (Allow Client to register if not a client yet)
- Client Registration (Initially only username and Password)
- Client Profile Management (After client registers they should login first to complete the profile). Following fields will be on Profile page / form:
	- Full Name (50 characters, required)
	- Address 1 (100 characters, required)
	- Address 2 (100 characters, optional)
	- City (100 characters, required)
	- State (Drop Down, selection required) DB will store 2 character state code
	- Zipcode (9 characters, at least 5 character code required)
	
- Fuel Quote Form with following fields: (We are not building pricing module yet)
	- Gallons Requested (numeric, required)
	- Delivery Address (Non-editable, comes from client profile)
	- Delivery Date (Calender, date picker)
	- Suggested Price / gallon (numeric non-editable, price will be calculated by Pricing Module - we are not building pricing module yet)
	- Total Amount Due (numeric non-editable, calculated (gallons * price))
	
- Fuel Quote History
	- Tabular display of all client quotes in the past. All fields from Fuel Quote are displayed.

- You should have validations in place for required fields, field types, and field lengths.
 * 
 * 
 * 
 * 
 */
