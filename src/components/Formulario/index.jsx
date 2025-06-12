import styles from './Formulario.module.css'

const Formulario = ({ altura, setAltura, peso, setPeso, calcularIMC }) => {

    return (
        <form className={styles.form} onSubmit={calcularIMC}>
            <label className={styles.label} for="altura">Altura (m):</label>
            <input className={styles.input} type="number" id="altura" step="0.01" required value={altura} onChange={(e) => setAltura(e.target.value)} />
            <label className={styles.label} for="peso">Peso (kg):</label>
            <input className={styles.input} type="number" id="peso" step="0.1" required value={peso} onChange={(e) => setPeso(e.target.value)} />
            <button className={styles.button} type="submit">Calcular IMC</button>
        </form>
                )
}

export default Formulario