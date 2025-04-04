import styles from "./select.module.css"

const Select = ({text, name, id, change, opcoes}) => {
    return(
        <div className={styles.form_control}>

            <label htmlFor={name}>{text}</label>

            <select name={name} id={id} onChange={change}>

                <option value="0"> Selecione uma categoria</option>

                {opcoes.map((option)=>{
                    <option value={option.cod_categoria}></option>
                })}

            </select>

        </div>
    );
}

export default Select;