import { Button, Alert, Grid, Card } from "@mui/material";

const Example6 = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card>
            <Button variant="contained"> contained</Button>
            <Button variant="text">text</Button>
            <Button variant="outlined">outlined</Button>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card >
            <Button variant="contained"> contained</Button>
            <Button variant="text">text</Button>
            <Button variant="outlined">outlined</Button>
          </Card>
        </Grid>
      </Grid>
      <Alert> 4 edycja radzi sobie zbyt dobrze </Alert>
    </div>
  );
};

export default Example6;
