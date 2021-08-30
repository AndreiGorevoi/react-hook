import React, {useContext} from "react";
import {Search} from "../components/Search";
import {Card} from "../components/Card";
import {GitHubContext} from "../context/gitHub/gitHubContext";

export const Home = () => {

  const cards = new Array(15)
    .fill('')
    .map((_, i) => i)

  const {users, loading} = useContext(GitHubContext)

  return (
    <React.Fragment>
      <Search/>
      <div className="row">

        {loading
          ? <p className={"text-center"}>Loading</p>
          : users.map( user => (
          <div className="col-sm-4 mb-4" key={user.id}>
          <Card user={user}/>
          </div>
          ))
        }
      </div>
    </React.Fragment>
  )
}