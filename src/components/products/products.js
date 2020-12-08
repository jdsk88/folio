import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export const ProductsList = ({ products }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <>
            {products.map((product) => (
                <Card className={classes.root} key={product._id}>

                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                R
              </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={product.name}
                        subheader={product.price}
                    />
                    <CardMedia
                        className={classes.media}
                        image={product.images[0]}
                        title={product.name}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            
            </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Description:</Typography>
                            <Typography paragraph>
                               
              </Typography>
                            <Typography paragraph>
                               
              </Typography>
                            <Typography paragraph>
                                
              </Typography>
                            <Typography>
                         
              </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            ))}
        </>
    );
}


export const Products = () => {


    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const queryParams = new URLSearchParams(useLocation().search);

    useEffect(() => {
        const params = new URLSearchParams({
            limit: queryParams.get("limit") || 10,
            page: queryParams.get("page") || 1,
            name: queryParams.get("name") || '',
        });
        setIsLoading(true);
        fetch("http://localhost:8080/api/products")
            .then((resp) => resp.json())
            .then((data) => setProducts(data))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <p className="alert alert-info">Please wait, Loading...</p>;
    }

    return (
        <div>
            <ProductsList products={products} />
        </div>
    );

}





