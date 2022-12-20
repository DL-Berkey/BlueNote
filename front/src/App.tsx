import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Aside from "./layout/Aside";
import Home from "./layout/Home";
import Editor from "./component/Editor";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                {/* <Aside /> */}
                <Routes>
                    <Route
                        path="/BlueNote"
                        element={
                            <Home>
                                <Editor />
                            </Home>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
