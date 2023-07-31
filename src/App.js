import React, { useState } from "react";
import "./App.css";

const initialItems = [
  {
    id: 1,
    title: "Item 1",
    content: "This is the content for Item 1.",
  },
  {
    id: 2,
    title: "Item 2",
    content: "This is the content for Item 2.",
  },
  {
    id: 3,
    title: "Item 3",
    content: "This is the content for Item 3.",
  },
];

const AccordionMenu = () => {
  const [items, setItems] = useState(initialItems);
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (id) => {
    setActiveItem((prevActiveItem) => (prevActiveItem === id ? null : id));
  };

  return (
    <div className="AccordionMenu">
      <h1>Accordion Menu</h1>
      {items.map((item) => (
        <div key={item.id} className="AccordionItem">
          <button onClick={() => toggleItem(item.id)}>
            {item.title} {activeItem === item.id ? "-" : "+"}
          </button>
          {activeItem === item.id && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
};

export default AccordionMenu;
