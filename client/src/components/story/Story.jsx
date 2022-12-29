import "./story.scss";

const Story = ({ story }) => {
  return (
    <div className="story">
      <div className="user">
        <div className="userInfo">
          <img
            style={{ height: "250px" }}
            src={"/upload/" + story.img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Story;
