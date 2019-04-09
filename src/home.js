import React from 'react';
import Typography from '@material-ui/core/Typography';
import home from './home.png';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export class Home extends React.Component {
    render() {
        const bull = <span>•</span>;
        return <Card>
            <CardContent><div style={{ textAlign: "center" }}>
                <img src={home} />
                <Typography style={{ marginTop: 50 }} variant='p' align="center">
                    For questions or comments about this site<br />
                    contact <a href="mailto:rajeshwar.akella@adp.com?Subject=Website%20Feedback" target="_top">Custom Majors</a>
                </Typography>

                <Typography color="textSecondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                    be
                    {bull}
                    nev
                    {bull}o{bull}
                    lent
                </Typography>
                <Typography color="textSecondary">
                    adjective
                </Typography>
                <Typography component="p">
                    well meaning and kindly.
                <br />
                    {'"a benevolent smile"'}
                </Typography>

            </div>
            </CardContent>

        </Card>
    }
}