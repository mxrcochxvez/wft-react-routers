import React from "react";

export default function Homepage() {
  return (
    <>
      <header className="bg-primary bg-gradient text-white">
        <div className="container py-4 text-center">
          <h1 className="fw-bolder">Welcome to Your Website!</h1>
          <p className="lead">
            A nice looking website I'd say!
          </p>
        </div>
      </header>
      <section id="about">
        <div className="container py-4">
          <div className="row gx-4 justify-content-center">
            <div className="col-lg-8">
              <h2>About this page</h2>
              <p className="lead">
                This is a great place to talk about your webpage. This template
                is purposefully unstyled so you can use it as a boilerplate or
                starting point for you own landing page designs! This template
                features:
              </p>
              <ul>
                <li>Clickable nav links that smooth scroll to page sections</li>
                <li>
                  Responsive behavior when clicking nav links perfect for a one
                  page website
                </li>
                <li>
                  Minimal custom CSS so you are free to explore your own unique
                  design options
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light" id="services">
        <div className="container py-4">
          <div className="row gx-4 justify-content-center">
            <div className="col-lg-8">
              <h2>Services we offer</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                optio velit inventore, expedita quo laboriosam possimus ea
                consequatur vitae, doloribus consequuntur ex. Nemo assumenda
                laborum vel, labore ut velit dignissimos.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="container py-4">
          <div className="row gx-4 justify-content-center">
            <div className="col-lg-8">
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
                odio fugiat voluptatem dolor, provident officiis, id iusto!
                Obcaecati incidunt, qui nihil beatae magnam et repudiandae ipsa
                exercitationem, in, quo totam.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-5 bg-dark">
        <div className="container px-4">
          <p className="m-0 text-center text-white">
            Copyright &copy; Your Website 2022
          </p>
        </div>
      </footer>
    </>
  );
}
