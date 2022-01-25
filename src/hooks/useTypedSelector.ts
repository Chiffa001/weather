import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../store/reducers/index';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypedSelector;
