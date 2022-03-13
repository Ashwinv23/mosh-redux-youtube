import store from './store';
import { bugAdded, bugResolved } from './actions';

// the subscribe method returns a fn for unsubscribing from the store
const unsubscribe = store.subscribe(() => {
  console.log('state changed', store.getState());
});

store.dispatch(bugAdded('bug1'));
store.dispatch(bugResolved(1));
// unsubscribe();

// store.dispatch({
//   type: actions.BUG_REMOVED,
//   payload: {
//     id: 1,
//   },
// });
