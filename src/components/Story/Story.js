import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';


const Story = (props) => {
    const {story} = props;
    const imageAUrl = story.image? story.image.thumbnail.contentUrl: "https://images.moneycontrol.com/static-mcnews/2021/11/Bitcoin.jpg";
    return(
        <Card style={{padding: "10px",}}>
             <Typography gutterBottom style={{display: '-webkit-box',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,}} variant="h6" component="div">
        {story.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
    {story.datePublished}
        </Typography>

      <CardMedia
        component="img"
        height="150"
        image={imageAUrl} 
        alt={story.name}
      />
      <CardContent>
       
        <Typography style={{display: '-webkit-box',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 5,}} variant="body2" color="text.secondary">
        {story.description}
        </Typography>
       
      </CardContent>
      <CardActions>
      
          <Button size="small" ><Link href={story.url} underline="none" color={"#1b76a4"}>Read More...</Link></Button>
      </CardActions>
    </Card>
            

    )
}
export default Story;