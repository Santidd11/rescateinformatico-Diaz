import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import { Link } from 'react-router-dom';
import "./item.css";

const Item = ({ data }) => {
    


    return (
        <Card sx={{ maxWidth: 345 }} className="cardBox">
        <CardActionArea>
            <CardMedia
            component="img"
            image={data.img}
            alt={data.id}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {data.name}
            </Typography>
            <Typography gutterBottom variant="fs-3" component="div">
                {data.price}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    );
}

export default Item;