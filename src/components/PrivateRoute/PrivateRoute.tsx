import { Route, Navigate } from "react-router-dom";
import { loginStatus } from "src/recoil/authentication";
import { useRecoilValue } from "recoil";
import { LoginModal } from "src/recoil/modal";

const PrivateRoute = ({ component: Component }: any): JSX.Element => {
  const isLogin = useRecoilValue(loginStatus);

  return isLogin ? <Component /> : <Navigate replace to="/" />;
};

export default PrivateRoute;
