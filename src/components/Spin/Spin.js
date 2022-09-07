import { TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux";

const Spin = (props) => {
  const spinner = useSelector((state) => {
    return state.loaderReducer.loading;
  });
  return (
    <div className="loader-styles">
      <TailSpin height="80" width="80" color="#00bfff" visible={spinner} />
    </div>
  );
};

export default Spin;
