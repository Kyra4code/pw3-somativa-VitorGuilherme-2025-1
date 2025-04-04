//Classes
import React,{useState, useEffect} from "react";
import style from "./createBook.module.css";

//Objetos
import Input from "../form/Input.jsx";
import Select from "../form/Select.jsx";
import Button from "../form/Button.jsx";

const CreateBook = () => {

    /* CRIA A ESTRUTURA DE STATE PARA OS DADDOS DE LIVRO*/

    const [livro, setLivro] = useState({});

    const [categories, setCategories] = useState({});

    function salvarInput(event){
        setLivro({...livro, [event.target.name] : event.target.value});
        console.log(livro);
    }

    function salvarSelect(event){
        setLivro({...livro, "categoria": event.target.options[event.target.selectedIndex].text})
        console.log(livro)
    }
    
    function submit(event){
        event.preventDefault();
        console.log(livro)
    }

    useEffect(()=>{
            fetch("http://127.0.0.1:5000/listagemCateorias", {
                method: "GET",
                headers: {
                    "Content-Type":"application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "*"
                }
            }).then((resp)=>
                resp.json()
            ).then((categorias)=>{
                console.log(categorias.data)
                setCategories(categorias.data)
            }).catch((error)=>{
                console.log("ERROR: " + error)
            })
  
    },[])

    function insertBook(){
        fetch("http://127.0.0.1:5000/inserirLivro", {
            method: "POST",
            mode:'cors',
            headers: {
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            body: JSON.stringify(livro)
        }).then((resp)=>
            resp.json()
        ).then((res)=>{
            console.log("Response: " + res)
        }).catch((error)=>{
            console.log("ERROR: " + error)
        })
    }

    return(
        <section className={style.create_book_container}>

            <h1>Cadastro de livro: </h1>

            <Input type="text"
                name="txt_livro"
                id="txt_livro"
                placeholder="Digite o livro desejado: "
                change={salvarInput}
                text="Crie um livro: "
            />

            <Input type="text"
                name="txt_autor"
                id="txt_livro"
                placeholder="Digite o nome do autor: "
                change={salvarInput}
                text="Coloque o nome do autor: "
            />

            <Input type="text"
                name="txt_descricao"
                id="txt_livro"
                placeholder="Digite a descrição do livro escolhido: "
                change={salvarInput}
                text="Insira a descrição do livro: "
            />

            <Select
                name="slc_categorias"
                id="slc_categorias"
                text="Categorias do livro: "
                change={salvarSelect}
                opcoes={categories}
            />

            <Button
                title="salvar"
                click={insertBook}
            />

        </section>
    )
}

export default CreateBook;