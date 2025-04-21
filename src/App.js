import logo from './logo.svg';
import './App.css';
import MainPage from './ResumeTemplate/Mainpage';
import { Bro } from './ResumeTemplate/Template/Example';
import Center from './ResumeTemplate/Template/Bro';
import ParentCompOfFunctionCalling from './NestedChild/ParentCompOfFunctionCalling';
import OTPGenerator from './OTP/OtpGenerator';
import Form from './CRUD/FormData';
import Counter from './Redux/Counter';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import UseReducerCounter from './UseReducer/UseReducerCounter';
import TimeSheet from './TE/TimeSheet';
import CurrentWeekView from './TE/Exxample'
import ButtonToggleExample from './TE/Exxample';
import MyComponent from './TE/Exxample';

function App() {
  return (
    <>
      <MainPage />
      {/* <Bro/> */}
      {/* <Center/> */}
      {/* <ParentCompOfFunctionCalling/> */}
      {/* <OTPGenerator/> */}
      {/* <Form/> */}
      {/* <Provider store={store}>
        <Counter />
      </Provider> */}

      {/* <UseReducerCounter/> */}
      {/* <TimeSheet/> */}
      {/* <CurrentWeekView/> */}
      {/* <ButtonToggleExample/> */}
      {/* <MyComponent/> */}
    </>
  );
}

export default App;
