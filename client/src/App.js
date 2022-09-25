
import React, { Component }  from 'react';
import './App.css';
import { Container,Grow,Grid, Typography, AppBar} from '@mui/material';
import Student from './components/showStudent/showStudent.js';
import Create from './components/createStudent/createStudent.js';
import useStyles from './styles';
//main app
function App() {
  const classes= useStyles();
  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">Students create & show</Typography>
        </AppBar>

        <Grow in>
          <Container>
            <Grid container spacing={5} justify="space-between" alignItems="stretch">
              <Grid item xs={12} sm={7}>
              <AppBar className={classes.appBar}  position="static" color="inherit">
                <Student />
              </AppBar>
              </Grid>

              <Grid item xs={12} sm={4}>
              <AppBar className={classes.appBar}  position="static" color="inherit">
                <Create />
              </AppBar>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
