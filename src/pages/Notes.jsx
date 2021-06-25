// import notes from "./../assets/data/notes.json";
import {  useRouteMatch, Switch, Route } from "react-router-dom";
import useContextGetter from "../hooks/useContextGetter";
import { lazy } from "react";

import ViewNote from "../components/notes/viewNotes";
const Note = lazy(() => import("../components/notes/note"));

function Notes() {
  const {
    state: { userData, notes },
  } = useContextGetter();
  let match = useRouteMatch();

  return (
    <main className="mt-5">
      <Switch>
        <Route path={`${match.path}/:noteId`}>
          <Note />
        </Route>
        <Route path={match.path}>
          <div className="container mt-5 py-2">
            <h2 className="font-weight-bold">Welcome {userData.email}</h2>
          </div>
          <div className="my-2">

          </div>
         <ViewNote notes={notes} url={match.url} />
        </Route>
      </Switch>
    </main>
  );
}

export default Notes;
