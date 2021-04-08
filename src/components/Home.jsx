import React, { Fragment, useContext, useEffect } from "react";
import { FirebaseContext } from "../context/fireBasa/firebaseContext";
import { Form } from "./Form/Form";
import { Loader } from "./Loader";
import { Notes } from "./Notes/Notes";
import LernContainer from "./text/LernContainer";
import {ReactLearnVladilenContainer} from "./text/Vladilen/ReactLearnVladilenContainer";

export const Home = () => {
  const { loading, notes, fetchNotes, removeNote } = useContext(FirebaseContext);

  useEffect(() => {
    fetchNotes();
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <h1>ToDo page</h1>
      <Form />
      <hr />
      {loading ? <Loader /> : <Notes notes={notes} onRemove={removeNote} />}
      {/* <LernContainer></LernContainer>  Уроки из книги */}
      {/* <ReactLearnVladilenContainer/> */} 
      
    </Fragment>  
  );
};
