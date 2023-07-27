import "./App.css";
import Navi from "./Navi";
import Sidebar from "./Sidebar";
import { Row, Col } from "reactstrap";
import 'reactstrap';

function App() {
  return (
    <div className="App" style={{ overflowY: "hidden", overflowX: "hidden" }}>
      <Row>
        <Col xl="2">
          <Sidebar></Sidebar>
        </Col>
        <Col>
          <Col>
            <Row>
              <Navi></Navi>
            </Row>
            <Row>
              <img
                style={{ width: "70%" }}
                src="https://pbs.twimg.com/media/DCxB3VNWsAI8VUc.jpg"
                alt="logo"
              ></img>
            </Row>
          </Col>
        </Col>
      </Row>
    </div>
  );
}

export default App;
