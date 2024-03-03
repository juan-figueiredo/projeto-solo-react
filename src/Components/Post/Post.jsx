import './Post.module.css'

export function Post(props){

  return(
    <h1>{props.content}{props.type}</h1>
  )
}