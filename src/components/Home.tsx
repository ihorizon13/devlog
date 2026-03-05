import { Link } from "react-router-dom"
import Header from './Header'


export default function Home() {
  return(
    <>
    <Header />
  <div>hei I am home</div>

    <Link to="/AboutSection">Go to About Page</Link>

    </>
  )}
 