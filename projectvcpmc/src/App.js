import "./App.css";
import SelectExample from "./component/Login";
function App() {
  // const dbRef = ref(getDatabase());

  // get(child(dbRef, "users"))
  //   .then((snapshot) => {
  //     if (snapshot.exists()) {
  //       console.log(snapshot.val());
  //     } else {
  //       console.log("No data available");
  //     }
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  return <SelectExample />;
}

export default App;
