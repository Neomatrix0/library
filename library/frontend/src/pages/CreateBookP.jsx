import CreateBook from "../components/CreateBook";
import Navbar from "../components/Navbar";
import PageBg from "../components/PageBg";

function DisplayBookP(props) {
    return (
        <PageBg>
            <Navbar />
            <CreateBook />
        </PageBg>
    );
  
}
export default DisplayBookP;