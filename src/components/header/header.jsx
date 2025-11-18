import { IoIosArrowDown } from "react-icons/io";
import { PiBell } from "react-icons/pi";
import { Container } from "./styles";

const Header = () => {
  return (
    <Container>
        <div className="adress">
            <h1>R. Progresso, 50b</h1>
            <IoIosArrowDown />
        </div>

        <div className="bell">
            <PiBell size={28}/>
        </div>
        
    </Container>
  )
}

export default Header
