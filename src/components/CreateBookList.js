import { Component } from "react";
import { v4 as uuid } from "uuid";
import "./index.css";

class CreateBookList extends Component {
  state = {
    nameText: "",
    descriptionText: "",
    authorText: "",
  };

  handleChangeName = (e) => {
    const { value: nameText } = e.target;
    this.setState({
      nameText,
    });
  };
  handleChangeDescription = (e) => {
    const { value: descriptionText } = e.target;
    this.setState({
      descriptionText,
    });
  };
  handleChangeAuthor = (e) => {
    const { value: authorText } = e.target;
    this.setState({
      authorText,
    });
  };

  handleCreate = () => {
    const item = {
      id: uuid(),
      textN: this.state.nameText,
      textD: this.state.descriptionText,
      textA: this.state.authorText,
      isCompleted: false,
    };

    this.props.onCreate(item);
    this.setState({
      nameText: "",
      descriptionText: "",
      authorText: "",
    });
  };

  render() {
    return (
      <div>
        <h1>Book List</h1>
        <div className="createList">
          <h3>Create your own book list</h3>
          <input
            type="text"
            value={this.state.nameText}
            onChange={this.handleChangeName}
            placeholder="Name"
          ></input>
          <input
            type="text"
            value={this.state.descriptionText}
            onChange={this.handleChangeDescription}
            placeholder="Description"
          ></input>
          <input
            type="text"
            value={this.state.authorText}
            onChange={this.handleChangeAuthor}
            placeholder="Author"
          ></input>
          <button onClick={this.handleCreate}>Create</button>
        </div>
      </div>
    );
  }
}

export default CreateBookList;
