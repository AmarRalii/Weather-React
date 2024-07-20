import React from "react";
import { Puff } from "react-loader-spinner";
import './Loading.css'
export default function Loading() {
  return (
    <div className="loading">
      <Puff
        visible={true}
        height="80"
        width="80"
        color="#262936"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
