import React from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet, AlurakutProfileSidebarMenuDefault } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades) {
  return (
    <Box as="aside"> 
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
          @{propriedades.githubUser}
        </a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const usuarioAleatorio = 'Jessica-Lira';

  const [comunidades, setComunidades] = React.useState([
    {
    id: '38785230525028667', 
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
    },
    {
      id: '38785230525028660', 
      title: 'EU AMO CHOCOLATE',
      image: 'data:image/jpeg;base64,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'
    }
]);

  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a) 
            </h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCriaComunidade(e) {
                e.preventDefault();
                const dadosDoForm = new FormData(e.target);

                console.log('Campo: ', dadosDoForm.get('title'));
                console.log('Campo: ', dadosDoForm.get('image'));

                const comunidade = {
                  id: new Date().toISOString(),
                  title: dadosDoForm.get('title'),
                  image: dadosDoForm.get('image'),
                }
                const comunidadesAtualizadas = [...comunidades, comunidade];
                setComunidades(comunidadesAtualizadas)
            }}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                  />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>

              <button>
                Criar comunidade
              </button>
            </form>
          </Box>

        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Amigos ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`} >
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2>
            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.title}`}>
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
