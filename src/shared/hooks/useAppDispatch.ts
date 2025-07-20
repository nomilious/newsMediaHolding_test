import {useDispatch} from "react-redux";
import {AppDispatch} from "app/providers/StoreProvider/config/appStore";

export const useAppDispatch = () => useDispatch<AppDispatch>();
