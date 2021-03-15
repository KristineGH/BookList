import { Component } from "react";
import { connect } from "react-redux";
import CreateBookList from "./CreateBookList";
import "./index.css";
import List from "./List";

class BookList extends Component {
  // state = {
  //   items: [
  //     {
  //       id: 111,
  //       textN: "Manon Lescaut",
  //       textD:
  //         "The story, set in France and Louisiana in the early 18th century, follows the hero, the Chevalier des Grieux, and his lover, Manon Lescaut.",
  //       textA: "Antoine François Prévost",
  //       isCompleted: false,
  //     },
  //     {
  //       id: 222,
  //       textN: "Lived and not lived years",
  //       textD:
  //         "Levon is a young famous journalist, who is sent to a Soviet village to prepare an article about teenagers, who committed suicide.",
  //       textA: "Vardges Petrosyan",
  //       isCompleted: false,
  //     },
  //   ],
  // };

  onCreate = (item) => {
    this.props.dispatch({
      type: "item/create",
      payload: {
        item,
      },
    });
  };

  onDelete = (itemId) => {
    this.props.dispatch({
      type: "item/delete",
      payload: {
        itemId,
      },
    });
  };

  onEdit = (newValue, itemId) => {
    this.props.dispatch({
      type: "item/edit",
      payload: {
        itemId,
        newValue,
      },
    });
  };

  onToggleComplete = (itemId) => {
    this.props.dispatch({
      type: "item/onToggleComplete",
      payload: {
        itemId,
      },
    });
  };

  render() {
    const { items: items } = this.props;

    return (
      <div className="bookList">
        <CreateBookList onCreate={this.onCreate} />
        <List
          items={this.props.items}
          onDelete={this.onDelete}
          onEdit={this.onEdit}
          onToggleComplete={this.onToggleComplete}
          logout={this.props.logout}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

export default connect(mapStateToProps)(BookList);
