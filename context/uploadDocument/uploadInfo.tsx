import { useReducer , createContext, useContext, use, Dispatch } from "react";
import { UploadReducer } from "./uploadReducer";
import { UploadProps } from "@/types";
import { UploadContextProps } from "@/types"; 

export const UploadContext = createContext<UploadContextProps | null>(null);

const initialState:UploadProps = {
    name: "",
    purpose: "",
    assistant: "",
    category: "",
    document: null,
};


const UploadProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(UploadReducer, initialState);

  return (
    <UploadContext.Provider value={{ state, dispatch }}>
      {children}
    </UploadContext.Provider>
  );
};

export default UploadProvider;
export const useUpload = () => useContext(UploadContext);