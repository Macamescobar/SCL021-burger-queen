import React, {useState} from 'react'
import {Form} from '../../layouts/Form'
import Grid from '@mui/material/Grid';
import { Input } from '../../controls/input';
import Select from '../../controls/select';
import {Button} from '../../controls/Buttons'
import { InputAdornment } from '@mui/material';
import { makeStyles } from 'tss-react/mui'; 

const useStyles = makeStyles(theme => ({
  adornmentText: {
    '& .MuiTypography-root': {
      color: "#f3b33d",
      fontWeight: "bolder",
      fontSize: '1.5rem'
    }
  }
}))

export default function OrderForm(props) {

  const {values, errors, handleInputChange} = props;
  const classes = useStyles();
  return (
   <Form>
      <Grid container>
        <Grid item xs={6} sx={{'& > :not(style)': { m: 1, width: '40ch' },}}>
          <Input 
            disabled
            label= "Order Number"
            name= "orderNumber"
            value = {values.orderNumber}
            InputProps = {{
              startAdornment: <InputAdornment
              className={classes.adornmentText}
              position="start">#</InputAdornment>
            }}
          />
          <Select
            label="Customer"
            name="customerId"
            onChange = {handleInputChange}
            options= {[
              {id:0, title : "Select"},
              {id:1, title : "Customer 2"},
              {id:2, title : "Customer 3"},
              {id:3, title : "Customer 4"}
            ]}
          />
        </Grid>

        <Grid item xs={6} sx={{'& > :not(style)': { m: 1, width: '40ch' },}}>
          <Input 
           disabled
            label= "Grand Total"
            name= "gTotal"
            value = {values.gTotal}
            InputProps = {{
              startAdornment: <InputAdornment
              className={classes.adornmentText}
              position="start">$</InputAdornment>
            }}
          />
        </Grid>
        
      </Grid>
    </Form>
  )
}
