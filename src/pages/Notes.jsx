import notes from "./../assets/data/notes.json";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import useContextGetter from "../hooks/useContextGetter";
import { lazy } from "react";
import { getFirst50words } from "../utils/utils";

const Note = lazy(() => import("../components/notes/note"));

function Notes() {
  const {
    state: { userData },
  } = useContextGetter();
  let match = useRouteMatch();
  
 

  return (
    <main className="mt-5">
      <Switch>
        <Route path={`${match.path}/:noteId`}>
          <Note />
        </Route>
        <Route path={match.path}>
          <div className="container">
            <h2 className="font-weight-bold">Welcome {userData.email}</h2>
          </div>

          {notes.map((note) => {
            return (
              <div className="container jumbotron" key={note.id}>
                <h2>{`${note.title}`}</h2>
                <p className="lead">{`${getFirst50words(note.note,30)}...`}</p>
                <hr className="my-4" />
                <Link
                  className="btn btn-info btn-lg"
                  to={`${match.url}/${note.id}`}
                  role="button"
                >
                  See more
                </Link>
              </div>
            );
          })}
        </Route>
      </Switch>
    </main>
  );
}

export default Notes;
