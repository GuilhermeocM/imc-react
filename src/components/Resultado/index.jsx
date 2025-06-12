import styles from './Resultado.module.css'

const Resultado = ({ resultado, classificacao }) => {

    return (
        <div className={styles.resultado}>
            <h3>{resultado}</h3>
            {classificacao && <p><strong>Classificação:</strong> {classificacao}</p>}
        </div>
    )
}

export default Resultado