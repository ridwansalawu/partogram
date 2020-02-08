import React, { useEffect } from "react";
import NewParturientForm from "../forms/NewParturient";

export default function NewParturient(props) {
  useEffect(() => {
    console.log(props);
    let id = props.match.params.parturientId;
    console.log(id);

    return () => {};
  }, [props]);

  return (
    <div className="container">
      <NewParturientForm />
    </div>
  );
}
