import { RootState } from "app/providers/StoreProvider/config/appStore";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
