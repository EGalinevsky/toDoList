import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export const Notes = ({ notes, onRemove }) => {
  return (
    <TransitionGroup component="ul" className="list-group">
      {notes.map((note) => (
        <CSSTransition key={note.id} classNames={'note'} timeout={800}>
          <li className="list-group-item note" >
            <div>
              <strong>{note.title}</strong>
              <span>{new Date().toLocaleDateString()}</span>
            </div>

            <button
              type="button"
              onClick={() => onRemove(note.id)}
              className="btn btn-danger btn-sm"
            >
              &times;
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
