import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../store/actions';

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};

export default useActions;
