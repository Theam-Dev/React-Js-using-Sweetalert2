import React, { Component } from "react";
import Swal from "sweetalert2";
export default class App extends Component{
  constructor() {
    super();
    this.Success = this.Success.bind(this);
    this.YesNo = this.YesNo.bind(this);
  }
  Success() {
    Swal.fire({
      title: "Success",
      type: "success",
      text: "Your work has been saved.",
    });
  }
  YesNo(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  render() {
    return (
      <div style={{padding:"20px"}}>
          <h2>SweetAlert2 In React</h2>
        <br/>
        <div style={{ paddingTop: "10px" }}>
          <button className="btn btn-info btn" onClick={this.Success}>
            Success
          </button>|
          <button className="btn btn-info btn" onClick={this.YesNo}>
            Yes No
          </button>
        </div>
      </div>
    );
  }
}
