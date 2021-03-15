import { Component } from "react";

class ListItem extends Component {
  state = {
    isEditing: false,
    editedValue: "",
  };

  handleEditBtnClick = () => {
    this.setState((_, props) => ({
      isEditing: true,
      editedValue: props.item.textD,
    }));
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      editedValue: value,
    });
  };

  handleDeleteBtnClick = () => {
    this.props.onDelete(this.props.item.id);
    this.setState({
      isEditing: false,
      editedValue: "",
    });
  };
  handleSaveBtnClick = () => {
    this.props.onEdit(this.state.editedValue, this.props.item.id);
    this.setState({
      isEditing: false,
      editedValue: "",
    });
  };
  handleCancelBtnClick = () => {
    this.setState({
      isEditing: false,
      editedValue: "",
    });
  };
  handleToggleBtnClick = () => {
    this.props.onToggleComplete(this.props.item.id);
  };
  render() {
    const { item } = this.props;
    const { isEditing, editedValue } = this.state;

    if (isEditing) {
      return (
        <div>
          <textarea
            className="new-input"
            type="text"
            value={editedValue}
            onChange={this.handleChange}
          ></textarea>
          <div className="list-action-new-buttons">
            <button onClick={this.handleCancelBtnClick} className="btn-edit">
              cancel
            </button>
            <button onClick={this.handleSaveBtnClick}>save</button>
          </div>
        </div>
      );
    }

    return (
      <div className="list-item">
        <span className="input-width" onClick={this.handleToggleBtnClick}>
          {item.textN} - {item.textD}
          <p className="author">{item.textA}</p>
        </span>
        <div className="list-action-buttons">
          <button onClick={this.handleEditBtnClick} className="btn-edit">
            edit
          </button>
          <button onClick={this.handleDeleteBtnClick}>delete</button>
        </div>
      </div>
    );
  }
}

export default ListItem;
