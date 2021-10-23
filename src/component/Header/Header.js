import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Header = () => {
  return (
    <div className="container-fluid p-0">
      {/* Navbar Start  */}
      <nav class=" navbar navbar-expand-lg navbar-light bg-light shadow-lg p-3 mb-5 bg-body rounded">
        <div class="container-fluid">
          <a class="navbar-brand" href="/Home">
            <img
              src="https://i.graphicmama.com/blog/wp-content/uploads/2020/10/30131032/P-amazing-3D-logo-design-concept-in-20211.jpg"
              alt=""
              width="60"
              height="44"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  mx-auto me-auto mb-2  mb-lg-0">
              <li class="nav-item ">
                <a class="nav-link active" aria-current="page" href="/Home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/Course">
                  Courses
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="/Dashboard"
                >
                  Dashboard
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" placeholder="Search Course" />
              <button class="btn btn-outline-success" type="submit">
                Tour
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container-fluid p-0 bg-info text-white p-5">
        {/* Header Content  */}
        <h2 className="text-center">Courses</h2>
        <p className="mx-auto w-75">
          Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia
          id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam
          aperiam consequatur laboriosam nemo harum praesentium.
        </p>
      </div>
    </div>
  );
};

export default Header;
