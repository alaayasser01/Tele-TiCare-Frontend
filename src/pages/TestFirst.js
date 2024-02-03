import React from 'react';
import MyHeader from '../components/MyHeader';
import MyNavbar from '../components/MyNavbar';
import Webcam from 'react-webcam';
import { Link, useParams } from 'react-router-dom';

export default function TestFirst() {
  const { id } = useParams();

  return (
    <>
      <MyHeader />
      <MyNavbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-3">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Test Your Camera First</h2>
                <h4 className="card-subtitle mb-4">Do you see yourself? If yes, press the button</h4>
                <Webcam className="mb-4" />
                <Link to={`/movie/${id}`}>
                  <button className="btn btn-primary" style={{backgroundColor:'black'}}>Proceed to my movie</button>
                </Link>
                <p className="mt-3">I accept to be recorded by proceeding</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
