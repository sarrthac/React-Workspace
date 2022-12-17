import React from 'react'

export default function Alert(props) {

    //function to capitalize first letter of word
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
    //here we have given a height to container to prevent the shift of content whenever the prompt was shown
    <div style={{height: '50px'}}>
    {/* if props.alert is null then aage ka portion will not execute and prompt will not be shown */}
    {props.alert && <div className={`alert alert-${props.alert.Type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.Type)}</strong>: {props.alert.msg}
    </div>}
    </div>
  )
}
