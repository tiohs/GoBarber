import { Container, Form, SubmitButton } from "./style";
import { FaGithubAlt, FaPlus } from "react-icons/fa";

export default function Main () {
  return(
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>
      <Form onSubmit={() => {}}>
        <input 
          type="text"
          placeholder="Adicionar repositório" 
        />
        <SubmitButton disabled>
          <FaPlus color="#fff" size= {14}/>
        </SubmitButton>
      </Form>   
    </Container>
  );
 }