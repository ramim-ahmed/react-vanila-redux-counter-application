import { Provider } from 'react-redux';
import "./App.css";
import Counter from "./components/Counter";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
    <div className=" flex justify-center items-center bg-gradient-to-l from-indigo-600 to-blue-500 min-h-screen w-full">
      <Counter />
    </div>
    </Provider>
  );
}

export default App;
