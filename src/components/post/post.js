import React, { Component } from "react";

import parser from "bbcode-to-react";
import ImageDisplay from "../image-display";

import GistDisplay from "../gist-display";
import VideoDisplay from "../video-display";

import "./post.css";

export default class Post extends Component {
  state = {
    blue: false,
    style: { color: "" },
    image_src: "",
  };

  makeBlue = () => {
    this.setState({ blue: !this.state.blue });
  };

  expandGist = (e) => {
    let x = document.getElementById(e.target.id).nextSibling;
    console.log(x);
  };

  shrinkGist = (e) => {
    document
      .getElementById(e.target.id)
      .nextSibling.children[0].children[0].children[0].children[0].setAttribute(
        "style",
        "height: 200px;"
      );
  };

  updatePage = (id) => {
    console.log("page id", id);
    window.location = `/update/${id}`;
  };

  render() {
    let languageBackground = "post-data";
    let classNamesh1 = "";

    //let styleComputed = this.returnGist()

    const { item } = this.props;

    if (this.state.blue) {
      classNamesh1 += " blue";
    }

    let delButton = null;
    let updButton = null;
    if (this.props.user) {
      delButton = (
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={this.props.onDeleted}
        >
          Delete Post
        </button>
      );
      updButton = (
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => this.updatePage(item.id)}
        >
          Update
        </button>
      );
    }

    switch (item.language_choice) {
      case "Python":
        languageBackground += " blue-back";
        break;
      case "React":
        languageBackground += " yellow-back";
        break;
      case "Both":
        languageBackground += " default-back";
        break;
      default:
        languageBackground += " default-back";
    }

    return (
      <div className={languageBackground}>
        <div
          id={item.id}
          className={classNamesh1}
          style={this.state.style}
          onClick={this.makeBlue}
        >
          <h3>
            {item.id} {item.title}
          </h3>
        </div>
        <div>
          <div>{parser.toReact(item.content)}</div>
        </div>

        <ImageDisplay item={item} />
        {item.gist_id ? (
          <div>
            <button
              id={`${item.id}ix`}
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              onClick={(e) => this.expandGist(e)}
            >
              Expand gist
            </button>
            <button
              id={`${item.id}ix`}
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              onClick={(e) => this.shrinkGist(e)}
            >
              Shrink gist
            </button>
          </div>
        ) : null}
        <GistDisplay item={item} />
        <VideoDisplay item={item} />

        <div>
          {delButton}
          {updButton}
        </div>
      </div>
    );
  }
}
