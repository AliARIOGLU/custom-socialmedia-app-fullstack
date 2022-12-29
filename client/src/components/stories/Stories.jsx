import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import Story from "../story/Story";
import "./stories.scss";

const Stories = () => {
  const { isLoading, error, data } = useQuery(["stories"], () =>
    makeRequest.get("/stories").then((res) => {
      return res.data;
    })
  );

  console.log(data);

  return (
    <div className="stories">
      {error
        ? "Something wrong!"
        : isLoading
        ? "loading..."
        : data.map((story) => <Story story={story} key={story.id} />)}
    </div>
  );
};

export default Stories;
