import "./styles.css";
import * as React from "react";
import Card from "@mui/material/Card";
import { Avatar } from "@mui/material";
import moment from "moment";

const demoImage =
  "https://images.moneycontrol.com/static-mcnews/2021/11/Bitcoin.jpg";

const Story = (props) => {
  const { story } = props;
  const imageAUrl = story.image ? story.image.thumbnail.contentUrl : demoImage;
  return (
    <Card className="story-card">
      <a href={story.url} target="_blank" rel="noreferrer">
        <div className="story-head">
          <h5>{story.name}</h5>
          <img src={imageAUrl} alt={story.name} />
        </div>
      </a>
      <div className="story-body">
        <p>
          {story.description.length > 150
            ? `${story.description.substring(0, 150)}...`
            : story.description}
        </p>
      </div>
      <div className="story-bottom">
        <Avatar
          src={story.provider[0]?.image?.thumbnail?.contentUrl || demoImage}
        />
        <p>{moment(story.datePublished).startOf("ss").fromNow()}</p>
      </div>
    </Card>
  );
};
export default Story;
