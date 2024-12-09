import { Spinner } from "react-bootstrap";
const Loading = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <Spinner className="w-50"></Spinner>
    </div>
  );
};

export default Loading;
