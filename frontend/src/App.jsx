import './App.css'
import Home from './pages/Home'
import {Route,Routes} from "react-router-dom"
import Login from './pages/Login'
import Signup from './pages/Signup'
import Listing from './pages/Listing'
import TeacherDetail from './pages/TeacherDetail'
import TeacherProfile from './teacherProfile/pages/TeacherProfile'
import PersonalInformation from './teacherProfile/components/PersonalInformation'
import ContactDetail from './teacherProfile/components/ContactDetail'
import EducationInformation from './teacherProfile/components/EducationInformation'
import AddNewEducation from './teacherProfile/components/AddNewEducation'
import ICanTeach from './teacherProfile/components/ICanTeach'
import AddNewICanTeach from './teacherProfile/components/AddNewICanTeach'
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/search" element={<Listing/>}/>
      <Route path="/teacherdetail" element={<TeacherDetail/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    
      <Route path='/profile' element={<TeacherProfile/>}>
      <Route index path='/profile' element={<PersonalInformation/>}/>
      <Route  path='personalinformation' element={<PersonalInformation/>}/>
      <Route  path='contactdetail' element={<ContactDetail/>}/>
      <Route  path='educationinformation' element={<EducationInformation/>}/>
      <Route  path='educationinformation/addnew' element={<AddNewEducation/>}/>
      <Route  path='icanteach' element={<ICanTeach/>}/>
      <Route  path='icanteach/addnew' element={<AddNewICanTeach/>}/>

      </Route>
    </Routes>
    </>
  )
}

export default App
