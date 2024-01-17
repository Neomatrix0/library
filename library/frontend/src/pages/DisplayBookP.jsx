import DisplayBooks from "../components/DisplayBooks";
import Navbar from "../components/Navbar";
import PageBg from "../components/PageBg";

function DisplayBookP(props) {
    return (
        <PageBg>
            <Navbar />
            <DisplayBooks />
        </PageBg>
    );
  
}
export default DisplayBookP;