import { createContext } from "react";
const AdminContext = createContext(false);
export const adminInContext = { true: true, false: false };
export default AdminContext;
