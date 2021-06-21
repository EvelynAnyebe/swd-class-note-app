import notes from "./../assets/data/notes.json";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import useContextGetter from "../hooks/useContextGetter";
import {lazy} from 'react';

const Note = lazy(() => import("./../components/note"));

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
          <div className="container mt-5">
            <h2 className="text-center">
              Welcome {userData.email} to Women Techsters 2021 SWD Track Notes
            </h2>
          </div>

          {notes.map((note) => {
            return (
              <div className="container jumbotron" key={note.id}>
                <h2>{note.title}</h2>
                <p className="lead">{note.shortdesc}</p>
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
