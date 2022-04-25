import { useParams } from "react-router-dom";

const DetailComponent = () => {
    const params = useParams();
    console.log(params);
    return <div>Product detail </div>;
};

export default DetailComponent;
