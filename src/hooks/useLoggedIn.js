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


        if (!context.state.isLoggedIn) {
            history.replace('/login');
            return true;
        }


        if(["/home","/login","/signup"].includes(history.location.pathname)){
            history.replace('/notes');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [context.state.isLoggedIn]);
}