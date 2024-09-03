import './../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
export default function Nav() {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Pizza</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="#">Apout</a>
      <a className="nav-item nav-link" href="#">Contact us</a>
      <a className="nav-item nav-link disabled" href="#">Log in</a>
    </div>
  </div>
</nav>

    </>
  )
}
