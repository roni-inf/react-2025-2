import Carro from './Carro'

const Lista = () => {
  return (
    <div>
        <ul>
            <Carro modelo="HB20" ano={2020} data_lancamento="2020-04-01"></Carro>
            <Carro modelo="Gol"></Carro>
        </ul>
    </div>
  )
}

export default Lista