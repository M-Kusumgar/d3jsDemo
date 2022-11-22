import ChildrenHIVData from "./CombinedComps/ChildrenHIVData";
import { Grid, Slider, Typography } from "@mui/material"
import { useState } from "react";
import { purple } from '@mui/material/colors';

const App = () => {

  var allYears = [];
  for (var i = 1990; i <= 2020; i++) {
      allYears.push(i);
  }

  var sliderMarks = []

  allYears.forEach(year => {
    sliderMarks.push({value: year, label: year.toString()})
  })

  const [year, setYear] = useState(2020);

  return (
    <Grid container direction="row"
    sx={{px:"20vw"}}>
      <Grid item xs={12}
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{mt:10}}
      >
        <Typography fontSize={25}>Children (0-14) living with HIV</Typography>
      </Grid>

      <Grid item xs={12}
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{mt:5}}
      >
        <ChildrenHIVData selectedYear={year.toString()} />
      </Grid>

      <Grid item xs={12}
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{mt:5}}
      >
        <Slider 
        min={1990}
        max={2020}
        valueLabelDisplay="on"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        />
      </Grid>
    </Grid>
  )
}

export default App;
