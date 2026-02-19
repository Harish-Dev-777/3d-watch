import Hello from "./Components/Hello";
import ProfileCard from "./Components/ProfileCard";

let App = () => {
  let student1 = {
    name: "John",
    age: 15,
    grade: 5,
    loc: "chennai",
  };
  let student2 = {
    name: "Tom",
    age: 20,
    grade: 7,
    loc: "chennai",
  };
  let student3 = {
    name: "Nagu",
    age: 22,
    grade: 12,
    loc: "chennai",
  };
  return (
    <div>
      <div className="container">
        <ProfileCard
          productName={"mobile"}
          price={25000}
          color={"Black"}
        ></ProfileCard>
        <ProfileCard
          productName={"Laptop"}
          price={50000}
          color={"Silver"}
        ></ProfileCard>
        <ProfileCard
          productName={"watch"}
          price={10000}
          color={"Silver"}
        ></ProfileCard>
      </div>
      <div className="container">
        <Hello stu={student1}></Hello>
        <Hello stu={student2}></Hello>
        <Hello stu={student3}></Hello>
      </div>
    </div>
  );
};
export default App;
