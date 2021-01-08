import React, { useRef } from "react";
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
import { useStyles } from "./styles_emails";

export const EmailsList = ({ emails }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);


    const handleExpandClick = () => {
        setExpanded(!expanded);
        console.log(expanded)
    };

    return (
        <div>
            {emails.map((item) => (
                <Card className={classes.root} key={item._id}>

                    <CardHeader
                        avatar={<Avatar aria-label="recipe" image={item.toCopy} className={classes.avatar}>
                        </Avatar>}
                        action={<IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>}
                        title={item.from}
                        subheader={item.to} />
                    <CardMedia
                        className={classes.media}
                        image={item.toCopy}
                        title={item.title} />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {item.letter}
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
                            onClick={(e) => handleExpandClick(e.currentTarget)}
                            // onClick={handleExpandClick}
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
                                {item.signature}
                            </Typography>
                            <Typography paragraph>
                                <div style={{ marginRight: "15px" }}>
                                    <form action="/api/email/file_upload" method="POST" enctype="multipart/form-data">
                                        <input type="file" name="avatar" />
                                        <input type="submit" />
                                    </form>
                                </div>
                            </Typography>
                            <Typography paragraph>

                            </Typography>
                            <Typography>

                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            ))}
        </ div>
    );
};
