import Banner from "./components/Banner";

export default function App() {
  return (
    <>
      <section>
        <div className="hero">
          <div className="hero-img">
            <img src="#" alt="" />
          </div>
          <div className="content">
            <h1>Techies Connect</h1>
          </div>
        </div>
        <Banner />
        <div className="body">
          <div className="col1">
            <h1>Die into the Code</h1>
            <div className="low">
              <h2>Collaborate With developers</h2>
              <p>Content content Content Content Content Content Content</p>
            </div>
          </div>
          <div className="col2">
            <div className="grid1">
              <img src="#" alt="" />
              <div className="content1">
                <h1>Visit us</h1>
                <p>content Content Content</p>
                <button>join</button>
                <button>Call in</button>
              </div>
              <div className="grid2">
                <div className="content1">
                  <h1>Learn With us</h1>
                  <p>What is up my fellow Developers</p>
                  <div className="btns">
                    <button>Join</button>
                    <button>Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
