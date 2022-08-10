import { BrowserRouter, Route, Routes, } from "react-router-dom";
import { Aula } from "./pages/Aula";
import { Conteudo } from "./pages/Conteudo";
import { Exercicio } from "./pages/Exercicio";

export function AppRoutes(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>}/>
        <Route path="/conteudos" element={<Conteudo />}/>
        <Route path="/conteudo/:idConteudo" element={<h1>conteudos</h1>}/>
        <Route path="/aulas" element={<Aula />}/>
        <Route path="/aula/:idAula" element={<h1>aulas</h1>}/>
        <Route path="/exercicios" element={<Exercicio />}/>
        <Route path="/exercicio/:idExercicio" element={<h1>exercicios</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}