import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './TestsCoursera/Ecommerce_rtk/Store.js'
import store2 from './TestsCoursera/Ecommerce/Store.js'
import './index.css'
import App from './App.jsx'

import EmployeeDetails from "./TestsCoursera/EmployeeDetails.jsx"
import DesignationDetails from "./TestsCoursera/DesignationDetails.jsx"
import TestComponent from './TestsCoursera/TestComponent.jsx'
import TestComponent2 from './TestsCoursera/TestComponent2.jsx'
import ContentRating from './TestsCoursera/ContentRating.jsx'
import EmployeApp from './TestsCoursera/EmployeeApp.jsx'

import NovelBlog from './TestsCoursera/Novel/NovelBlog.jsx'
import ToggleMessage from './TestsCoursera/ToggleButton/ToggleMessage.jsx'
import CssinReact from './TestsCoursera/Css/CssinReact.jsx'
import TodoList from './TestsCoursera/ToDolist/Components/TodoList.jsx'
import ArrayComponent from './TestsCoursera/Array/ArrayComponent.jsx'
import AddRemoveFromArray from './TestsCoursera/Array/AddRemoveArray.jsx'
import ArrayWithCondition from './TestsCoursera/Array/ArrayWithCondition.jsx'
import FetchData from './TestsCoursera/FetchData/FetchData.jsx'
import FeedbackForm from './TestsCoursera/FeedBack_form/FeedbackForm.jsx'
import EcommerceRun from './TestsCoursera/Ecommerce/EcommerceRun.jsx'
import Running_Ecomerce from './TestsCoursera/Ecommerce_rtk/Running_Ecomerce.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <App />
    <hr />
    <h5>test</h5>
    <hr />
    <EmployeeDetails />
    
    <hr />
    <DesignationDetails />
    <hr />
    <TestComponent />
    <hr />
    <TestComponent2 name='sese'/>
    <hr />
    <ContentRating />
    <hr />
    <EmployeApp />
    <hr />
    <NovelBlog />
    <hr />
    <ToggleMessage />
    <hr />
    <CssinReact />
    <hr />
    <TodoList />
    <hr />
    <ArrayComponent />
    <hr />
    <AddRemoveFromArray />
    <hr />
    <ArrayWithCondition />
    <hr />
    <FetchData />
    <hr />
    <FeedbackForm /> 
    <hr />
    <Provider store={store2}>
   <EcommerceRun />
    </Provider>
    <hr />
    <Provider store={store}>
   <Running_Ecomerce />
    </Provider>
  </StrictMode>,
    
)
