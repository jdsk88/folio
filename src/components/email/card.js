import React from 'react';
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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useStyles } from './useStyles';

export const EmailCard = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const avatar = props.avatar;
    const image = props.image;
    const image_title = props.image_title;
    const title = props.title;
    const subtitle = props.subtitle;
    const content = props.content;
    const title_2 = props.title_2;
    const content_2 = props.content_2;
    const sign = props.sign;
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (

        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar avatar={avatar} aria-label="recipe" className={classes.avatar}>
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={title}
                subheader={subtitle}
                />
            <CardMedia
                className={classes.media}
                image={image}
                title={image_title}
                />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {content}
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
                    <Typography paragraph>{title_2}</Typography>
                    <Typography paragraph>
                        {content_2}
                    </Typography>
                    <Typography>
                        {sign}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
