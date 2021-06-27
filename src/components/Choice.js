import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class Choice extends Component {
  render() {
    return (
      <div className="container">
          <div className="row">
              <div className="col">
                  <div className="jumbotron text-center">
                    <h2>Select Grade</h2>
                  </div>
              </div>
              <div className="col hidden">
                    <div className="jumbotron text-center">
                        <h2>Select Subject</h2>
                    </div>
              </div>
          </div>
          <div className="row">
                <div className="btn btn-lg btn-outline-danger col-sm-4 offset-1 mt-4 py-2">
                    Grade 1
                </div>
                <div className="btn btn-lg btn-outline-primary col-sm-4 offset-2 mt-4 py-2">
                    Mathematics
                </div>
          </div>
          <div className="row">
                <div className="btn btn-lg btn-outline-success col-sm-4 offset-1 mt-4 py-2">
                    Grade 2
                </div>
                <div className="btn btn-lg btn-outline-info col-sm-4 offset-2 mt-4 py-2">
                    English
                </div>
          </div>
          <div className="row">
                <div className="btn btn-lg btn-outline-primary col-sm-4 offset-1 mt-4 py-2">
                    Grade 3
                </div>
                <div className="btn btn-lg btn-outline-danger col-sm-4 offset-2 mt-4 py-2">
                    Science
                </div>
          </div>
          <div className="row">
                <div className="btn btn-lg btn-outline-info col-sm-4 offset-1 mt-4 py-2">
                    Grade 4
                </div>
                <div className="btn btn-lg btn-outline-success col-sm-4 offset-2 mt-4 py-2">
                    Computer Science
                </div>
          </div>
          <div className="row">
                <div className="btn btn-lg btn-outline-warning col-sm-4 offset-1 mt-4 py-2">
                    Grade 5
                </div>
                <div className="btn btn-lg btn-outline-dark col-sm-4 offset-2 mt-4 py-2">
                    Hindi
                </div>
          </div>
          <div className="row">
                <div className="btn btn-lg btn-outline-primary col-sm-4 offset-1 mt-4 py-2">
                    Grade 6
                </div>
                <div className="btn btn-lg btn-outline-warning col-sm-4 offset-2 mt-4 py-2">
                    Commerce
                </div>
          </div>
          <div className="row">
                <div className="btn btn-lg btn-outline-danger col-sm-4 offset-1 mt-4 py-2">
                    Grade 7
                </div>
            </div>
            <div className="row">
                <div className="btn btn-lg btn-outline-success col-sm-4 offset-1 mt-4 py-2">
                    Grade 8
                </div>
            </div>
            <div className="row">
                <div className="btn btn-lg btn-outline-info col-sm-4 offset-1 mt-4 py-2">
                    Grade 9
                </div>
            </div>
            <div className="row">
                <div className="btn btn-lg btn-outline-warning col-sm-4 offset-1 mt-4 py-2">
                    Grade 10
                </div>
            </div>
            <div className="row">
                <div className="btn btn-lg btn-outline-dark col-sm-4 offset-1 mt-4 py-2">
                    Grade 11
                </div>
            </div>
            <div className="row">
                <div className="btn btn-lg btn-outline-primary col-sm-4 offset-1 mt-4 py-2">
                    Grade 12
                </div>
            </div>
            <br></br>
      </div>
    )
  }
}

export default Choice
