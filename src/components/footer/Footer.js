import { CardActions, Grid, Typography } from "@mui/material";


function Footer(){
    return (
        <div style={{width:"100%", height:"70vh"}}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Typography variant="h4" component="div">
                        Tasty
                    </Typography>
                    <Typography variant="body2">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </Typography>
                    <CardActions>
                        
                    </CardActions>
                </Grid>
                <Grid item xs={3}>
                    xs=4
                </Grid>
                <Grid item xs={3}>
                    xs=4
                </Grid>
                <Grid item xs={3}>
                    xs=4
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;