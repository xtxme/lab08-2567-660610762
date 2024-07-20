import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/*header section */}
      <Header />
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput/>
        
        {/* task */}
        <div className="d-flex p-3 gap-2 align-items-center border-bottom">
          <span>Read a book</span>
          <button className="btn btn-success">Done</button>
          <button className="btn btn-danger">Delete</button>
        </div>
        {/* task */}
        <div className="d-flex p-3 gap-2 align-items-center border-bottom">
          <span>Take a shower</span>
          <button className="btn btn-success">Done</button>
          <button className="btn btn-danger">Delete</button>
        </div>
        {/* task */}
        <div className="d-flex p-3 gap-2 align-items-center border-bottom">
          <span>Sleep</span>
          <button className="btn btn-success">Done</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>

      {/* //footer section */}
      <Footer year="2024" fullname="Tanapron Tangpadungsuk" studentid="660610762"/>
    </div>
  );
}
