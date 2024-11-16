
import './App.css'
import AnimatedToast from './components/Animations and Toast Options'
import BasicToast from './components/Basic Toast Notification'
import ToastPosition from './components/Configuring Toast Position'
import CustomThemeToast from './components/Custom Toast Theme'
import DismissToast from './components/Dismissing Toasts'
import ErrorToast from './components/Error and Custom Toasts'
import LoadingToast from './components/Loading States with Toasts'
import MultiToast from './components/Multi-Toast Notifications'
import PersistentToast from './components/Persistent and Updateable Toasts'
import CustomContentToast from './components/Toast with JSX Content'
import PromiseToast from './components/Toast with Promise'
// import ReduxToast from './components/State Management'

function App() {
  

  return (
   <div>
    <BasicToast/>
    <ErrorToast/>
    <PromiseToast/>
    <ToastPosition/>
    <CustomContentToast/>
    <DismissToast/>
    <CustomThemeToast/>
    <LoadingToast/>
    <PersistentToast/>
    <MultiToast/>
    {/* <ReduxToast/> */}
    <AnimatedToast/>
   </div>
  )
}

export default App
