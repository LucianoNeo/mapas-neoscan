


function App() {


  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '94vw',
        height: '99vh',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin:'0 10px 0 10px'
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '100%',
          paddingLeft:'30px'
        }}
      >
        <h1>Mapas NeoScan</h1>
      </div>
      <div
        style={{
          borderRadius: '100%',
          overflow: 'hidden',
          margin: '0 auto',
          width: '320px',
          height: '320px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#00AAEE',
          filter: 'drop-shadow(6px 4px 19px #222)',
          margin:'15px'
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
              position: 'absolute',
              left: '160px',
              bottom: '80px',
              zIndex: '2',
              hover:'transform: scale(1.2)'
            }}
          />
          <img
            id="pontagrossa"
            src="./assets/img/pokeball.png" alt="" width='20px'
            style={{
              position: 'absolute',
              left: '120px',
              bottom: '100px',
              zIndex: '2'
            }}
          />
          <img
            id="riodejaneiro"
            src="./assets/img/pokeball.png" alt="" width='20px'
            style={{
              position: 'absolute',
              left: '260px',
              bottom: '140px',
              zIndex: '2'
            }}
          />
          <img
            id="niteroi"
            src="./assets/img/pokeball.png" alt="" width='20px'
            style={{
              position: 'absolute',
              left: '290px',
              bottom: '145px',
              zIndex: '2'
            }}
          />
          <img
            id="florianopolis"
            src="./assets/img/pokeball.png" alt="" width='20px'
            style={{
              position: 'absolute',
              left: '165px',
              bottom: '35px',
              zIndex: '2'
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
        
        width:'380px',
        height:'200px',
        backgroundColor:'#EEEEEE',
        borderRadius:'30px',
        boxShadow: '5px 5px 15px 0px rgba(2,2,2,0.65)'
      }}
      >

      </div>
    </main>
  )
}

export default App
