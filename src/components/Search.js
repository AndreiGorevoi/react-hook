import React, {useContext, useState} from "react";
import {AlertContext} from "../context/alert/AlertContext";
import {GitHubContext} from "../context/gitHub/gitHubContext";

export const Search = () => {

  const [value, setValue] = useState('')
  const {show, hide} = useContext(AlertContext)
  const gitHub = useContext(GitHubContext)

  const onSubmit = event => {
    if (event.key !== 'Enter') {
      return
    }

    gitHub.clearUsers();
    if (value.trim()) {
      hide();
      gitHub.search(value.trim())
    } else {
      show('Put information about user')
    }
  }

  return (
    (
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={value}
          onChange={event => setValue(event.target.value)}
          placeholder="Please, put a login for searching"
          onKeyPress={onSubmit}
        />
      </div>
    )
  )
}