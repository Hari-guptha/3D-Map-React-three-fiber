import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Main from "./Components/Main"
import Preloader from "./Components/Preloader"

function App() {
  return (
    <>
      <Suspense fallback={<Preloader/>}>
        <Canvas style={{ width: "100vw", height: "100vh",background:"black" }} shadows>
          <Main/>
        </Canvas>
      </Suspense>
    </>
  )
}

export default App
