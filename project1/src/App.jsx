import imge1 from ""

const App = () => {
  let a = 10;
  let b = 20;
  let myName = "Harish";

  return (
    <div>
      <h1>Hello How are you</h1>
      <br />
      <hr />
      <img
        src="https://images.unsplash.com/photo-1739609579483-00b49437cc45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
        alt=""
      />
      <h1>{a + b}</h1>
      <h1>{myName}</h1>
    </div>
  );
};

export default App;
