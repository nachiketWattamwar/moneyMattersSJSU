import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ReportsPie from "../charts/ReportsPie";
import ReportsHorizontalBar from "../charts/ReportsHorizontalBar";
import "../scss/_mystyles.scss";

const spanStyle = {
  display: "inline"
};

const dataExpense = {
  labels: ["Food", "Rent and Bills", "Misc"],
  datasets: [
    {
      data: [30, 500, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};

const dataIncome = {
  labels: ["Salary", "Shares", "Misc investments"],
  datasets: [
    {
      data: [1000, 500, 100],
      backgroundColor: ["#23A21B", "	#0000ff", "#FFCE56"],
      hoverBackgroundColor: ["#c1f4be", "#e6e6ff", "#ffe299"]
    }
  ]
};

export default class DetailFinances extends Component {
  render() {
    return (
      <div>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' className='title'>
              Reports
            </Typography>
            {/* <Button color='inherit'>Login</Button> */}
          </Toolbar>
        </AppBar>
        <span style={spanStyle}>
          <div>
            <Grid
              container
              direction='row'
              justify='center'
              alignItems='flex-start'
              spacing={2}
            >
              <Grid item xs={6}>
                <Paper elevation='10' className='reports'>
                  <Typography align='center'>
                    Predictive expenses for next months
                  </Typography>
                  <ReportsHorizontalBar />
                </Paper>
              </Grid>
              <Grid item height='300px' xs={6}>
                <Paper className='reports' elevation='10'>
                  other infor asdfsf asdfsf asdfsfs
                </Paper>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid
              container
              direction='row'
              justify='space-evenly'
              alignItems='flex-start'
              spacing={2}
            >
              <Grid item xs={6}>
                <Paper className='reports' elevation='10'>
                  <Typography align='center'>Expenses</Typography>
                  <ReportsPie data={dataExpense} />
                </Paper>
              </Grid>
              <Grid item height='300px' xs={6}>
                <Paper className='reports' elevation='10'>
                  other infor
                </Paper>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid
              container
              direction='row'
              justify='space-evenly'
              alignItems='flex-start'
              spacing={2}
            >
              <Grid item xs={6}>
                <Paper className='reports' elevation='10'>
                  <Typography align='center'>Income</Typography>
                  <ReportsPie data={dataIncome} />
                </Paper>
              </Grid>
              <Grid item height='300px' xs={6}>
                <Paper className='reports' elevation='10'>
                  other infor
                </Paper>
              </Grid>
            </Grid>
          </div>
        </span>
      </div>
    );
  }
}
