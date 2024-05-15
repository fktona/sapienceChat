import { UploadProps } from "@/types";
import { uploadAction } from "@/types";
import { dark } from "@mui/material/styles/createPalette";
import { Assistant } from "next/font/google";

export const UploadReducer = (state: any, action: any) => {
    const { type, payload } = action;
    switch (type) {
        case "INPUT_CHANGE":
        return {
            ...state,
            [action.payload.name]: payload.value

        };
        case "AVATAR":
            return {
                ...state,
                assistant: payload.assistant,
              };
        case "UPLOAD_DOCUMENT":
            return {
                ...state,
                document:payload.file,
                
              };
        case "RESET":
        return {
            state:{}
        };
        default:
        return state;
    }
    }