import React, { useEffect, useState } from "react";
import "./App.css";
import HomePageStyle from "./styles";
import { column, options } from "./utils";

function App() {
  const [stories, setStories] = useState([]);
  const [title, setTitle] = useState({
    name: "Issue Tracker for Biz Analytics",
    editable: false
  });
  useEffect(() => {
    fetch(" https://www.json-generator.com/api/json/get/coJwhddnNe")
      .then(res => res.json())
      .then(res => setStories(res));
  }, []);

  const handleTitleClick = value => {
    setTitle({ ...title, editable: value === "Edit" ? true : false });
  };

  const handleTitleChange = name => {
    setTitle({ ...title, name });
  };

  const onSelect = (id, value) => {
    setStories(
      stories.map(story => {
        if (story.id === id) return { ...story, status: value };
        else return story;
      })
    );
  };
  const getRowClass = value => {
    if (value.toLowerCase() === "done") return "green-bg";
    else if (value.toLowerCase() === "in progress") return "blue-bg";
    else return "red-bg";
  };
  return (
    <HomePageStyle>
      {stories ? (
        <>
          <div className="title-container">
            <div className="title-wrapper">
              <input
                className="title-field"
                value={title.name}
                onChange={e => handleTitleChange(e.target.value)}
                disabled={!title.editable}
              />
              <button
                type="button"
                class="btn btn-primary"
                value={title.editable ? "Done" : "Edit"}
                onClick={e => handleTitleClick(e.target.value)}
              >
                {title.editable ? "Done" : "Edit"}
              </button>
            </div>
          </div>
          <div className="table-container">
            <div className="table-wrapper">
              <table class="table">
                <thead>
                  <tr>
                    {column.map(column => (
                      <th scope="col">{column}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {stories.map(story => (
                    <tr className={getRowClass(story.status)}>
                      <td>{story["id"]}</td>
                      <td>{story["title"]}</td>
                      <td>
                        <select
                          value={story["status"]}
                          onChange={e => onSelect(story["id"], e.target.value)}
                        >
                          <option value="Done">{options[0]}</option>
                          <option value="Not started">{options[1]}</option>
                          <option value="In progress">{options[2]}</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        "Loading"
      )}
    </HomePageStyle>
  );
}

export default App;
