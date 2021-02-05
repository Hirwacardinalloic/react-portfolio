import NavBar from './components/layout/Navbar';
import { Route,BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/layout/Footer';
import CreateBlog from './components/blogs/CreateBlog';
import NotFound from './components/NotFound';
import BlogList from './components/blogs/BlogList';
import BlogDetails from './components/blogs/BlogDetails';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';



function App() {
  return (
    <Router>
       <div className="App">
          <NavBar />
          <div className="content">
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/about'>
                <About />
              </Route>
              <Route exact path='/contact'>
                <Contact />
              </Route>
              <Route exact path='/create'>
                <CreateBlog />
              </Route>
              <Route exact path='/blogs'>
                <BlogList />
              </Route>
              <Route exact path='/blogs/:id' component={BlogDetails} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={SignUp} />
              <Route path='*'>
                <NotFound />
              </Route>
            </Switch>

          </div>
          <Footer />
       </div>
    </Router>
   
  );
}

export default App;
