import { setupWorker } from "msw";
import { handlers } from "./data/handlers";

export const worker = setupWorker(...handlers);
