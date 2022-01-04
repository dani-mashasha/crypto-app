import Loader from "../Loader/Loader.js";
import Story from "../Story/Story.js";


const NewsGrid = (props) => {
    const {news} = props;
    return(
        <div>
            {news.length > 0 ?
            news.map(story => <Story story = {story}/>):
            <Loader/>}
        </div>
    )
}
export default NewsGrid;