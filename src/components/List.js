import { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
  render() {
    const { items, onEdit, onDelete, onToggleComplete } = this.props;

    if (!items.length) return <p>There is no item yet</p>;
    return (
      <div>
        {items.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            onDelete={onDelete}
            onEdit={onEdit}
            onToggleComplete={onToggleComplete}
          />
        ))}
      </div>
    );
  }
}

export default List;
