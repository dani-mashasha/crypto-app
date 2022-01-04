import { Container, Grid } from "@mui/material";
import Story from "../Story/Story.js";


const NewsGrid = (props) => {
    const {news} = props;
    return(
<Container maxWidth="lg">

    <div style={{textAlign: "center"}}><h1>Biggest CryptoNews All Over The World </h1></div>
        <Grid container spacing={2}>
            {news.map(story =>
                <Grid  item xs={12} sm={4} md={3} >
                    <Story key= {story.name} story = {story}/>
                 </Grid>)}
        
         </Grid>
         </Container>
       
    )
}
export default NewsGrid;