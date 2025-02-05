import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, FormControl } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

export default function AssignmentControls() {
    return (
        <div className="text-nowrap">
            <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </Button>
            <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-assignment-group">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </Button>
            <span className="bg-white border-start border-top border-bottom" style={{ padding: "0.375rem 0.75rem", float: "left" }}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <FormControl type="text" placeholder="Search..." id="wd-search-assignment" className="border-start-0" style={{float: "left",width: "33%"}}></FormControl>
        </div>
    );
}