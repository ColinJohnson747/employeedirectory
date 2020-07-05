import React from "react";
import "../CSS/searchform.css";
function Header() {
  return (
    <header>
      <h1>Employee Directory</h1>
      <p>
        This directory will help you sort and manage your employees. Search an
        Employee by name in the form below, or browse the list.
      </p>
      <p>
        You can also click on the name column to sort the name alphabetically
      </p>
    </header>
  );
}

export default Header;
