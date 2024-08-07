import { useSelector } from "react-redux";
import { getToken } from "../service/storage";

export const useToken = () => {
  return useSelector((state) => {
    if (state.student.value) {
      return state.student.value.token;
    }
    console.log();
    return getToken();
  });
};

export const useStudent = () => {
  return useSelector((state) => state.student.value);
};
