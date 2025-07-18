import React from 'react'

export default function Respond() {
  return (
    <Toolbar
         onPlayMovie={() => alert('Playing!!!')}
         onUploadImage={() => alert("Uploading Molly's Image!")}
    />
  );
}

function Toolbar({ onPlayMovie, onUploadImage}) {
    return (
        <div>
            <Button onClick={onPlayMovie}>
                Play Movie
            </Button>
            <Button onClick={onUploadImage}>
                Upload molly
            </Button>
        </div>
    );
}

function Button({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}