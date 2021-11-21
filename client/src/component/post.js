import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddCommentIcon from '@mui/icons-material/AddComment';
import ReplyForm from './reply';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import {ALL_POST, ALL_USERS} from "../utils/queries";
import { useQuery } from "@apollo/client";
import Collapse from '@mui/material/Collapse';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));


const Post = ({ post, username }) => {
    const [expanded, setExpanded] = React.useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const {loading, data} = useQuery(ALL_POST);
    const postData = data?.allPost || {};
    console.log(postData);
   

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

      if (loading) {
        return <Card>LOADING...</Card>;


  }
    return (
        <Box>
            {post && 
    post.map(postData => (
            <Card sx={{ background: '#414a4c', mb: 2 }}>
            <CardContent>
            <Typography variant='h5' gutterbottom>
                {postData.username}
                </Typography>
                </CardContent>
                <CardContent>
                <Typography variant="body2">
                <p>{postData.postText}</p>
                </Typography>
                </CardContent>
                <CardActions disableSpacing>
                <ReplyForm /* work on reply form*//>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="Replies"
                >
                <ExpandMoreIcon />
                </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography>
                    SAMPLE REPLY
                </Typography>
                </CardContent>
                </Collapse>
            </Card>
            ))}
        </Box>

    );
};

export default Post;
