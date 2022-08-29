import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const CardComponent = ({ img, name, fun }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            image={img}
            alt="."
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {name}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary" onClick={fun}>
            Agregar
            </Button>
        </CardActions>
        </Card>
    );
}

export default CardComponent;