import { createContext } from "react";
import { websiteContentJSON } from "./data.ts";

export const WebsiteContent = createContext(websiteContentJSON);
