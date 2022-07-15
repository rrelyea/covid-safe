import './App.css';

function redirect() {
  var redirectUrl = "https://covidsafe.fyi";
  window.location.replace(redirectUrl);
}

function App() {
  window.setTimeout(redirect, 5000);

  return <>
      <div >
        <h3>Redirecting in 5 seconds to new web address for site: <a href={"https://covidsafe.fyi" + window.location.pathname}
  >{"https://covidsafe.fyi" + window.location.pathname}</a></h3>
        <div>Please update your existing links and bookmarks.</div>
      </div>
    </>;
}

export default App;
