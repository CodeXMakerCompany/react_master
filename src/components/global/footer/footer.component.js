import React from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

//css
import './footer.css'

const Footer = () => {
    return (
        <div className="footer" >
            <Typography variant="caption" align={"center"}>
                © codexmaker 2020
    </Typography>
            <Divider style={{ margin: "24px auto", width: 60 }} />
            <Grid container justify={"center"} spacing={2}>
                <Grid item xs={12} sm={6} md={3} >
                    <Typography align={"center"} gutterBottom className='customBox'>
                        About
        </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography align={"center"} gutterBottom className='customBox'>
                        Blog
        </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography align={"center"} gutterBottom className='customBox'>
                        Terms & Conditions
        </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography align={"center"} gutterBottom className='customBox'>
                        Contact us
        </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer