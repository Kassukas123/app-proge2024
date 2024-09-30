import React from "react"

const Name = ({ title = "World" }) => {
  return <h1>Hello {title}</h1>
}

/*const Name = (props) => {
    console.log({ props });
    return <h1>{ props.title }</h1>;
};*/

/*const Name = (props) => {
    console.log({ props });
    const { title } = props;
    return <h1>{title}</h1>;
};*/

export default Name
