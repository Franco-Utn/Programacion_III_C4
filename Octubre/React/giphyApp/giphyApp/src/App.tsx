import { GiftList } from "./components/GiftLista/GiftList"
import { NavBar } from "./components/ui/NavBar/NavBar"

interface IGift {
  urlGift: string,
  title:string
}
function App() {
  return (
    <>
    <NavBar />
    <GiftList />
    </>
  )
}

export default App
