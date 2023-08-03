import {BrowserRouter,Switch, Route} from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import Register from './components/User/Register/Register';
import Login from './components/User/Login/Login';
import Navbar from './components/Navigation/Navbar';
import AddNewCategory from './components/Categories/AddNewCategory';
import CategoryList from './components/Categories/CategoryList';
import UpdateCategory from './components/Categories/UpdateCategory';
import PrivateProtectRoute from './components/Navigation/ProtectedRoutes/PrivateProtectRoute';
import AdminRoute from './components/Navigation/ProtectedRoutes/AdminRoute';
import CreatePost from './components/Posts/CreatePost';
import PostsList from './components/Posts/PostsList';
import PostDetails from './components/Posts/PostDetails';
import UpdatePost from './components/Posts/UpdatePost';
import UpdateComment from './components/Comments/UpdateComment';
import Profile from './components/User/Profile/Profile';
import UploadProfilePhoto from './components/User/Profile/UploadProfilePhoto';
import UpdateProfileForm from './components/User/Profile/UpdateProfileForm';
import UsersList from './components/User/Users/UsersList';
import UpdatePassword from './components/User/PasswordManagment/updatePassword';
// import LoadingComponent from './utils/LoadingComponent';
function App() {
  return (
   <BrowserRouter>
   <Navbar />
   {/* <LoadingComponent /> */}
    <Switch>
      <PrivateProtectRoute exact path="/update-post/:id" component={UpdatePost}/>
      <PrivateProtectRoute exact path="/update-comment/:id" component={UpdateComment}/>

      <PrivateProtectRoute exact path="/profile/:id" component={Profile}/>
      <PrivateProtectRoute exact path="/upload-profile-photo" component={UploadProfilePhoto}/>
      <PrivateProtectRoute exact path="/update-profile/:id" component={UpdateProfileForm}/>
      <PrivateProtectRoute exact path="/update-password" component={UpdatePassword}/>
      
      <AdminRoute exact path='/users' component={UsersList}/>
      
    <AdminRoute exact path='/add-category' component={AddNewCategory}/>
    <AdminRoute exact path='/update-category/:id' component={UpdateCategory}/>
    <PrivateProtectRoute exact path='/create-post' component={CreatePost}/>
    <AdminRoute exact path='/category-list' component={CategoryList}/>
    <Route exact path='/posts/:id' component={PostDetails} />

      <Route exact path='/posts' component={PostsList} />
      <Route exact path='/home' component={HomePage}/>
      <Route exact path='/register' component={Register}/>
      <Route exact path='/login' component={Login}/>

    </Switch>
   </BrowserRouter>
  );
}

export default App;
