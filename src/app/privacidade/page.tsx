import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LegalPageShell, LegalSection, LegalCallout, LegalList, LegalTable } from '@/components/legal/LegalPageShell';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Leterizza',
  description: 'Política de Privacidade da Leterizza — quais dados coletamos, por quê, com quem compartilhamos e quais são os seus direitos.',
};

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900 overflow-x-hidden">
      <Header />

      <main>
        <LegalPageShell
          title="Política de Privacidade"
          updated="agosto de 2026"
          siblingHref="/termos"
          siblingLabel="Termos de Uso"
          intro={
            <>
              <p className="m-0">
                Esta Política explica quais dados seus a Leterizza usa, por quê, com quem compartilhamos, por
                quanto tempo guardamos e o que você pode exigir de nós.
              </p>
              <p className="m-0">
                Escrevemos em linguagem direta porque parte de quem lê tem 15, 16 anos. Se alguma coisa aqui não
                estiver clara, escreva para o nosso contato de privacidade — entender o que fazemos com seus dados
                também é um direito seu.
              </p>
            </>
          }
        >
          <LegalSection title="1. Quem é responsável pelos seus dados">
            <p className="m-0">
              A responsável pelas decisões sobre o tratamento dos dados pessoais da Leterizza é{' '}
              <strong>Sabrina da Cruz Lima</strong>, fundadora do projeto.
            </p>
            <p className="m-0">
              Canal de privacidade:{' '}
              <a href="mailto:contato@leterizza.com.br" className="text-primary-450 font-semibold">
                contato@leterizza.com.br
              </a>
            </p>
            <p className="m-0">
              A Leterizza é um agente de tratamento de pequeno porte nos termos da Resolução CD/ANPD nº 2/2022.
              Nessa condição, não somos obrigados a nomear um encarregado formal, mas mantemos este canal para
              receber solicitações, reclamações e dúvidas sobre privacidade, e respondemos em até 30 dias.
            </p>
          </LegalSection>

          <LegalSection title="2. Quais dados coletamos hoje">
            <p className="m-0">
              Neste momento, a Leterizza coleta dados apenas por meio dos formulários do site. A plataforma de
              estudos ainda está em desenvolvimento e não está aberta ao público.
            </p>
            <p className="m-0">
              <strong>Nos formulários do site.</strong> Quando você se cadastra na lista de espera ou nos envia uma
              mensagem, coletamos: <strong>nome, sobrenome, e-mail, tipo de escola (pública ou particular) e ano
              escolar</strong>. No formulário de contato, também o conteúdo da mensagem que você escreve.
            </p>
            <p className="m-0">
              <strong>Dados técnicos da visita.</strong> Os serviços que mantêm o site no ar registram informações
              técnicas básicas da sua visita, como endereço IP, data e hora do acesso e informações do navegador.
              Isso é necessário para o site funcionar e para segurança.
            </p>
            <p className="m-0">
              <strong>Não usamos ferramentas de análise de audiência nem rastreamento publicitário.</strong> Nenhuma
              parte do site acompanha sua navegação para fins de marketing.
            </p>
            <p className="m-0">
              Não pedimos e não queremos dados sensíveis — saúde, religião, origem racial, opinião política. Se você
              escrever algo assim em um campo aberto, vamos apagar.
            </p>
          </LegalSection>

          <LegalSection title="3. Para que usamos e com qual base legal">
            <p className="m-0">A LGPD exige que todo uso de dado pessoal tenha uma base legal. Esta é a nossa:</p>
            <LegalTable
              head={['Para quê', 'Quais dados', 'Base legal']}
              rows={[
                ['Avisar você quando a plataforma abrir', 'nome, e-mail', 'Procedimentos preliminares a pedido do titular (art. 7º, V)'],
                ['Entender o perfil de quem quer usar a Leterizza e planejar o produto', 'tipo de escola, ano escolar', 'Legítimo interesse (art. 7º, IX)'],
                ['Responder sua mensagem de contato', 'nome, e-mail, mensagem', 'Procedimentos preliminares a pedido do titular (art. 7º, V)'],
                ['Segurança e funcionamento do site', 'dados técnicos', 'Legítimo interesse (art. 7º, IX)'],
                ['Guarda de registros de acesso', 'registros de acesso', 'Obrigação legal (Marco Civil, art. 15)'],
                ['Novidades, conteúdos e convites para pesquisas', 'nome, e-mail', 'Consentimento (art. 7º, I)'],
              ]}
            />
            <p className="m-0">
              Aceitar os Termos de Uso não é consentimento genérico para nada. Quando um uso depende de
              consentimento, ele aparece separado, desmarcado, e recusar não impede seu cadastro.
            </p>
            <p className="m-0">
              Você pode retirar qualquer consentimento a qualquer momento e pedir a revisão do nosso legítimo
              interesse pelo canal de privacidade.
            </p>
          </LegalSection>

          <LegalSection title="4. Estudantes menores de idade">
            <p className="m-0">
              Boa parte de quem se cadastra é adolescente. Tratamos esses dados com prioridade para o melhor
              interesse do estudante, como a legislação exige. Na prática:
            </p>
            <LegalList
              items={[
                'coletamos o mínimo necessário;',
                <>
                  <strong>não usamos dados de estudantes menores de idade para marketing direcionado</strong> nem
                  para criar perfis comportamentais;
                </>,
                'não compartilhamos dados de estudo com terceiros para fins comerciais;',
                'explicamos privacidade em linguagem apropriada à idade.',
              ]}
            />
            <p className="m-0">
              A idade mínima da Leterizza é 12 anos. Quando a plataforma abrir, contas de estudantes de 12 a 15 anos
              só serão ativadas depois de vinculadas à conta de um responsável legal, conforme o Estatuto Digital
              da Criança e do Adolescente (Lei 15.211/2025).
            </p>
            <p className="m-0">
              Responsáveis podem, a qualquer momento, pedir acesso, correção ou exclusão dos dados do estudante sob
              sua responsabilidade, pelo canal de privacidade.
            </p>
          </LegalSection>

          <LegalSection title="5. Com quem compartilhamos">
            <p className="m-0">
              <strong>Não vendemos dados pessoais. Nunca.</strong>
            </p>
            <p className="m-0">Usamos alguns fornecedores que precisam de acesso a parte dos dados para o site funcionar:</p>
            <LegalTable
              head={['Fornecedor', 'Para quê', 'Onde fica']}
              rows={[
                ['Vercel', 'Hospedagem do site', 'Estados Unidos'],
                ['HubSpot', 'Organização de contatos e envio de e-mails', 'Estados Unidos'],
                ['Google (Fonts e YouTube)', 'Fontes do site e vídeo da página Sobre', 'Estados Unidos'],
              ]}
            />
            <p className="m-0">
              Cada fornecedor recebe apenas o necessário para prestar seu serviço. Também podemos compartilhar
              dados quando houver ordem judicial ou determinação de autoridade competente.
            </p>
            <p className="m-0">
              Quando a plataforma de estudos for lançada, novos fornecedores passarão a ser utilizados.
              Atualizaremos esta lista e avisaremos você antes disso acontecer.
            </p>
          </LegalSection>

          <LegalSection title="6. Transferência internacional">
            <p className="m-0">
              Como você vê na tabela acima, nossos fornecedores armazenam dados fora do Brasil, principalmente nos
              Estados Unidos. A LGPD permite isso desde que existam garantias adequadas, e escolhemos fornecedores
              que oferecem cláusulas contratuais padrão ou mecanismo equivalente.
            </p>
          </LegalSection>

          <LegalSection title="7. Cookies">
            <p className="m-0">
              Usamos apenas cookies necessários para o funcionamento e a segurança do site. Não usamos cookies de
              análise de audiência nem de publicidade.
            </p>
            <p className="m-0">Se isso mudar no futuro, vamos pedir sua autorização antes, com opção clara de recusar.</p>
          </LegalSection>

          <LegalSection title="8. Por quanto tempo guardamos">
            <LegalTable
              head={['Dado', 'Prazo']}
              rows={[
                ['Cadastro na lista de espera', '24 meses sem interação, ou até você pedir a exclusão'],
                ['Mensagens enviadas pelo formulário de contato', '24 meses'],
                ['Registros de acesso', '6 meses (Marco Civil, art. 15)'],
                ['Registro dos consentimentos dados', 'Enquanto durar o tratamento, mais 5 anos como prova'],
              ]}
            />
            <p className="m-0">
              Quando você pede exclusão, eliminamos os dados em até 30 dias, salvo o que a lei nos obriga a manter.
            </p>
          </LegalSection>

          <LegalSection title="9. Segurança">
            <p className="m-0">
              Adotamos medidas técnicas proporcionais ao nosso tamanho e ao risco envolvido: acesso restrito da
              equipe, comunicação por conexão segura e fornecedores com padrões reconhecidos de segurança.
            </p>
            <p className="m-0">
              Nenhum sistema é imune a incidentes. Se ocorrer um incidente que possa gerar risco relevante a você,
              comunicamos você e a ANPD nos prazos previstos em lei.
            </p>
          </LegalSection>

          <LegalSection title="10. Seus direitos">
            <p className="m-0">Você pode nos pedir, a qualquer momento:</p>
            <LegalList
              items={[
                'confirmação de que tratamos seus dados e acesso a eles;',
                'correção de dados incompletos ou desatualizados;',
                'anonimização, bloqueio ou eliminação de dados desnecessários ou tratados fora da lei;',
                'portabilidade dos seus dados;',
                'informação sobre com quem compartilhamos;',
                'informação sobre o que acontece se você não consentir;',
                'revogação de consentimento;',
                'oposição a tratamento baseado em legítimo interesse.',
              ]}
            />
            <p className="m-0">
              Escreva para{' '}
              <a href="mailto:contato@leterizza.com.br" className="text-primary-450 font-semibold">
                contato@leterizza.com.br
              </a>
              . Respondemos em até 30 dias e podemos pedir informações para confirmar que é você mesmo — inclusive
              para proteger seus dados.
            </p>
            <p className="m-0">Se não ficar satisfeito, você pode reclamar à ANPD, em gov.br/anpd.</p>
          </LegalSection>

          <LegalSection title="11. Alterações">
            <p className="m-0">
              Se mudarmos esta Política de forma relevante, avisamos por e-mail e no site com pelo menos 15 dias de
              antecedência. A data no topo indica a versão atual.
            </p>
          </LegalSection>

          <LegalSection title="12. Contato">
            <LegalCallout>
              <p className="m-0">
                <strong>Leterizza</strong>
                <br />
                Responsável: Sabrina da Cruz Lima
                <br />
                E-mail:{' '}
                <a href="mailto:contato@leterizza.com.br" className="text-primary-450 font-semibold">
                  contato@leterizza.com.br
                </a>
              </p>
            </LegalCallout>
          </LegalSection>
        </LegalPageShell>
      </main>

      <Footer />
    </div>
  );
}
