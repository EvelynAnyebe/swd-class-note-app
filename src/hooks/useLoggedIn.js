import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useContextGetter from './useContextGetter';

export default function useLoggedIn() {
    const context = useContextGetter();
    const history = useHistory();

    useEffect(() => {

        //Check if user exist in local storage
        const user=localStorage.getItem("user");
        if(user){
            context.dispatch({
                type: "LOGIN",
                payload: JSON.parse(user) 
            });
        }

        // if isLoggedIn is true, navigate
        // away from current page to notes page

        if (context.state.isLoggedIn) {
            history.replace('/notes');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [context.state.isLoggedIn]);
}