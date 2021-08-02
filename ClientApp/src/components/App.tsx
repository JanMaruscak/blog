import React, {useContext} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Latest from "../pages/Latest";
import Browse from "../pages/Browse";
import Login from "../pages/Login";
import ArticlePage from "../pages/ArticlePage";
import EditArticle from "../pages/EditArticle";
import AddArticle from "../pages/AddArticle";
import NotFound from "../pages/NotFound";
import Footer from "./Footer";
import {UserContext} from "../context/UserContext";
import Search from "../pages/Search";

function App() {
    const {user} = useContext(UserContext);
    if (user.UserName) {
        return (
            <React.StrictMode>
                <Router>
                    <Navbar/>
                    <main style={{minHeight: "70vh", marginBottom: "40px"}}>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/latest" component={Latest}/>
                            <Route exact path="/browse" component={Browse}/>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/search" component={Search}/>
                            <Route exact path="/article/:id" component={ArticlePage}/>
                            <Route exact path="/editArticle/:id" component={EditArticle}/>
                            <Route exact path="/addArticle" component={AddArticle}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </main>
                    <Footer/>
                </Router>
            </React.StrictMode>
        );
    } else {
        return (
            <React.StrictMode>
                <Router>
                    <Navbar/>
                    <main style={{minHeight: "70vh", marginBottom: "40px"}}>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/latest" component={Latest}/>
                            <Route exact path="/browse" component={Browse}/>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/search" component={Search}/>
                            <Route exact path="/article/:id" component={ArticlePage}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </main>
                    <Footer/>
                </Router>
            </React.StrictMode>
        );
    }
}

export default App;
