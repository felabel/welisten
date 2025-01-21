import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import Content from "../components/content/Content";

function Home() {
  return (
    <>
      <div className="app">
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Header />
          <Content />
        </main>
      </div>
    </>
  );
}

export default Home;
