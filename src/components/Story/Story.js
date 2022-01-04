

const Story = (props) => {
    const {story} = props;
    const imageAUrl = story.image? story.image.thumbnail.contentUrl: story.provider[0].image.thumbnail.contentUrl
    return(
        <div>
            <h1>{story.name}</h1>
            <img src={imageAUrl}  alt={story.name}/>
            
            <p>{story.description}</p>

            <span>{story.datePublished}</span>


            
        </div>
    )
}
export default Story;