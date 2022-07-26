import { useEffect, useState } from "react"


function App() {

  const bairrosNiteroi = 'Camboinhas e Cafubá'
  const bairrosPg = 'Centro'
  const bairrosRio = 'Vila Valqueire, Marechal Hermes, Bento Ribeiro, Mesquita, Nilópolis e Penha'
  const bairrosCuritiba = 'Centro, Água Verde, Portão, Bairro Alto, Cajuru , Capão Raso e Santa Felicidade'
  const bairrosFloripa = 'Centro, Campinas, Kobrasol, Estreito, Santa Mônica e Canasvieiras'

  const [cidade, setCidade] = useState('')
  const [bairros, setBairros] = useState('')
  const [link, setLink] = useState('')



  return (
    <main id="main"
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '94vw',
        height: '99vh',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: '0 10px 0 10px'
      }}
    >
      <header
        style={{
          display: 'flex',
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'space-between',
          top: '0',
          left: '0',
          height: '50px',
          width: '100vw',
          paddingLeft: '30px',
          backgroundColor: '#222',
          padding: '0 30px'

        }}
      >
        
        <div
          style={{
            display: 'flex',
            justifyContent: 'start',
            gap: '20px'
          }}
        >
          <img src="./assets/img/logo.png" alt="" width={25} />
          <h1>Mapas NeoScan</h1>
        </div>
        <a href="https://neoscan.com.br"><img src="./assets/img/home.png" alt="" width={25} /></a>
      </header>

      <div id="mapa"
        style={{
          borderRadius: '100%',
          overflow: 'hidden',
          margin: '0 auto',
          width: '320px',
          minHeight: '320px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#00AAEE',
          filter: 'drop-shadow(6px 4px 19px #222)',
        }}
      >

        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',


          }}
        >
          <img
            id="curitiba"
            src="./assets/img/pokeball.png" alt="" width='20px'
            style={{
              cursor: 'pointer',
              position: 'absolute',
              left: '160px',
              bottom: '80px',
              zIndex: '2',
            }}
            onClick={() => {
              const curitibaBtn = document.getElementById('curitiba')
              const pgBtn = document.getElementById('pg')
              const ntroBtn = document.getElementById('ntro')
              const floBtn = document.getElementById('flo')
              const rioBtn = document.getElementById('rio')
              curitibaBtn.classList.add('spinner')
              pgBtn.classList.remove('spinner')
              ntroBtn.classList.remove('spinner')
              rioBtn.classList.remove('spinner')
              floBtn.classList.remove('spinner')
              setCidade('Curitiba')
              setBairros(bairrosCuritiba)
              setLink('https://cwb.neoscan.com.br')
            }}
          />
          <img

            id="pg"
            src="./assets/img/pokeball.png" alt="" width='20px'
            style={{
              cursor: 'pointer',
              position: 'absolute',
              left: '120px',
              bottom: '100px',
              zIndex: '2'
            }}
            onClick={() => {
              const curitibaBtn = document.getElementById('curitiba')
              const pgBtn = document.getElementById('pg')
              const ntroBtn = document.getElementById('ntro')
              const floBtn = document.getElementById('flo')
              const rioBtn = document.getElementById('rio')
              curitibaBtn.classList.remove('spinner')
              pgBtn.classList.add('spinner')
              ntroBtn.classList.remove('spinner')
              rioBtn.classList.remove('spinner')
              floBtn.classList.remove('spinner')
              setCidade('Ponta-Grossa')
              setBairros(bairrosPg)
              setLink('https://neoscan.com.br/pg')
            }}
          />
          <img
            id="rio"
            src="./assets/img/pokeball.png" alt="" width='20px'
            style={{
              cursor: 'pointer',
              position: 'absolute',
              left: '260px',
              bottom: '140px',
              zIndex: '2'
            }}
            onClick={() => {
              const curitibaBtn = document.getElementById('curitiba')
              const pgBtn = document.getElementById('pg')
              const ntroBtn = document.getElementById('ntro')
              const floBtn = document.getElementById('flo')
              const rioBtn = document.getElementById('rio')
              curitibaBtn.classList.remove('spinner')
              pgBtn.classList.remove('spinner')
              ntroBtn.classList.remove('spinner')
              rioBtn.classList.add('spinner')
              floBtn.classList.remove('spinner')
              setCidade('Rio-de-Janeiro')
              setBairros(bairrosRio)
              setLink('https://neoscan.com.br/rio')
            }}
          />
          <img
            id="ntro"
            src="./assets/img/pokeball.png" alt="" width='20px'
            style={{
              cursor: 'pointer',
              position: 'absolute',
              left: '290px',
              bottom: '145px',
              zIndex: '2'
            }}
            onClick={() => {
              const curitibaBtn = document.getElementById('curitiba')
              const pgBtn = document.getElementById('pg')
              const ntroBtn = document.getElementById('ntro')
              const floBtn = document.getElementById('flo')
              const rioBtn = document.getElementById('rio')
              curitibaBtn.classList.remove('spinner')
              pgBtn.classList.remove('spinner')
              ntroBtn.classList.add('spinner')
              rioBtn.classList.remove('spinner')
              floBtn.classList.remove('spinner')
              setCidade('Niterói')
              setBairros(bairrosNiteroi)
              setLink('https://neoscan.com.br/ntro')
            }}
          />
          <img
            id="flo"
            src="./assets/img/pokeball.png" alt="" width='20px'
            style={{
              cursor: 'pointer',
              position: 'absolute',
              left: '165px',
              bottom: '35px',
              zIndex: '2'
            }}
            onClick={() => {
              const curitibaBtn = document.getElementById('curitiba')
              const pgBtn = document.getElementById('pg')
              const ntroBtn = document.getElementById('ntro')
              const floBtn = document.getElementById('flo')
              const rioBtn = document.getElementById('rio')
              curitibaBtn.classList.remove('spinner')
              pgBtn.classList.remove('spinner')
              ntroBtn.classList.remove('spinner')
              rioBtn.classList.remove('spinner')
              floBtn.classList.add('spinner')
              setCidade('Florianópolis')
              setBairros(bairrosFloripa)
              setLink('https://neoscan.com.br/floripa')
            }}
          />
          <img src="./assets/img/brazilMap.png" alt="" width='1000px'
            style={{
              position: 'absolute',
              left: '-400px',
              bottom: '-100px',

            }}
          />
        </div>
      </div>
      <div
        style={{
          padding: '15px 35px',
          width: '380px',
          height: '230px',
          backgroundColor: '#EEEEEE',
          borderRadius: '30px',
          boxShadow: '5px 5px 15px 0px rgba(2,2,2,0.65)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
      >
        <h3>{cidade}</h3>
        <div style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <img src="./assets/img/map-icon.png" alt="" width={50} height={50} />
          <img src={`./assets/img/${cidade}.png`} alt="" width={150}
            style={{
              position: 'absolute',
              left: '220px',
              top: '45px',
              borderRadius: '30px',
              transform: 'translateY(-30px)'
            }}
          />
        </div>
        <p>Cobertura:</p>
        <p
          style={{
            fontSize: '10px'
          }}
        > {bairros} </p>
        <p>Link para o mapa: </p> <a href={link} target='_blank'>{link}</a>
      </div>
    </main>
  )
}

export default App
