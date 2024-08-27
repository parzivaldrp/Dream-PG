'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  const router = useRouter();

  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row gx-4 align-items-center justify-content-between">
            <div className="col-md-6">
              <div>
                <h2 className="display-5 fw-bold mb-4">Our Vision</h2>
                <p className="lead">
                  Dream PG is dedicated to providing exceptional living experiences for students and professionals. We strive to offer comfortable, convenient, and affordable PG accommodations tailored to your needs.
                </p>
                <p className="lead">
                  Dream PG aims to create a community-driven environment where residents feel at home, fostering friendships, and supporting personal growth. With our commitment to excellence, we strive to exceed your expectations and make your stay with us unforgettable.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="row gx-2 gx-lg-3">
                <div className="col-6">
                  <img className="img-fluid rounded-3 mb-3" src="/single.webp" alt="Accommodation" />
                </div>
                <div className="col-6">
                  <img className="img-fluid rounded-3 mb-3" src="/a2.jpg" alt="Accommodation" />
                </div>
                <div className="col-6">
                  <img className="img-fluid rounded-3 mb-3" src="/a3.jpeg" alt="Accommodation" />
                </div>
                <div className="col-6">
                  <img className="img-fluid rounded-3 mb-3" src="/a4.jpeg" alt="Accommodation" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="p-4 mt-md-0 mt-3 rounded text-center bg-primary">
                <h2 className="text-white fw-bold display-6 mb-3">Sign Up Today!</h2>
                <button className="btn btn-outline-light" onClick={() => router.push("/pages/Register")}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
