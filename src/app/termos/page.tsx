import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LegalPageShell, LegalSection, LegalCallout, LegalList } from '@/components/legal/LegalPageShell';

export const metadata: Metadata = {
  title: 'Termos de Uso | Leterizza',
  description: 'Termos de Uso da Leterizza — as regras para usar a plataforma e a lista de espera da fase de validação.',
};

export default function TermosPage() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900 overflow-x-hidden">
      <Header />

      <main>
        <LegalPageShell
          title="Termos de Uso"
          updated="agosto de 2026"
          siblingHref="/privacidade"
          siblingLabel="Política de Privacidade"
          intro={
            <>
              <p className="m-0">
                Estes Termos explicam as regras para usar a Leterizza. Ao se cadastrar, você confirma que leu este
                documento e a nossa <Link href="/privacidade" className="font-bold underline">Política de Privacidade</Link>.
              </p>
              <p className="m-0">Se você tem menos de 18 anos, leia junto com um responsável.</p>
            </>
          }
        >
          <LegalSection title="1. O que é a Leterizza">
            <p className="m-0">
              A Leterizza é uma plataforma educacional que ajuda estudantes a organizar a preparação para o ENEM e
              outros vestibulares. Entre seus recursos estão cronogramas de estudo personalizados, trilhas de
              aprendizagem, questões e simulados, acompanhamento de progresso, revisões programadas e elementos de
              gamificação.
            </p>
            <p className="m-0">
              A Leterizza complementa os seus estudos. Não substitui escola, professor ou cursinho, e não é fonte
              oficial de informação sobre nenhum vestibular. Datas, editais, conteúdos exigidos e regras de prova
              devem sempre ser conferidos no site oficial da instituição responsável.
            </p>
          </LegalSection>

          <LegalSection title="2. O que estes Termos cobrem">
            <p className="m-0">
              Estes Termos valem para o uso do site leterizza.com.br e para o cadastro na nossa lista de espera.
              Quando a plataforma for aberta ao público, eles também passarão a valer para ela.
            </p>
          </LegalSection>

          <LegalSection title="3. Fase de desenvolvimento">
            <p className="m-0">
              A Leterizza está em fase de construção e validação. Na prática, isso significa que funcionalidades
              podem ser adicionadas, alteradas ou removidas, que podem ocorrer erros e instabilidades, e que o
              acesso durante esta fase é gratuito.
            </p>
            <p className="m-0">
              Não vamos converter sua conta em plano pago automaticamente. Se a Leterizza passar a cobrar por algum
              recurso no futuro, isso será apresentado de forma clara e dependerá de uma escolha sua. Participar da
              validação não cria obrigação de contratar nada depois.
            </p>
          </LegalSection>

          <LegalSection title="4. Idade mínima">
            <p className="m-0">
              A idade mínima para criar conta na Leterizza é de <strong>12 anos</strong>.
            </p>
            <p className="m-0">
              No cadastro pedimos sua data de nascimento. Ela define quais proteções aplicamos e como sua conta
              funciona:
            </p>
            <LegalList
              items={[
                <>
                  <strong>De 12 a 15 anos:</strong> sua conta precisa estar vinculada à conta de um responsável
                  legal. Sem essa vinculação, o cadastro não é concluído.
                </>,
                <>
                  <strong>De 16 a 17 anos:</strong> você usa a plataforma com conta própria, com as proteções
                  descritas na seção 6.
                </>,
                <>
                  <strong>18 anos ou mais:</strong> conta comum.
                </>,
              ]}
            />
            <p className="m-0">
              Se identificarmos que uma conta foi criada por alguém com menos de 12 anos, vamos suspendê-la e
              eliminar os dados associados.
            </p>
          </LegalSection>

          <LegalSection title="5. Sua conta">
            <p className="m-0">
              Para usar a plataforma você precisa criar uma conta com informações verdadeiras e mantê-las
              atualizadas. A conta é pessoal: não compartilhe sua senha, e avise-nos se suspeitar que alguém acessou
              sua conta sem autorização.
            </p>
            <p className="m-0">
              Pedimos apenas as informações necessárias para montar sua experiência de estudo: identificação
              básica, etapa escolar, vestibular pretendido e disponibilidade de tempo.
            </p>
          </LegalSection>

          <LegalSection title="6. Estudantes menores de idade">
            <p className="m-0">
              Parte dos nossos usuários é adolescente, e tratamos os dados dessas pessoas com prioridade para o seu
              melhor interesse, como exige a legislação. Na prática, para usuários menores de idade nós:
            </p>
            <LegalList
              items={[
                'coletamos menos dados do que coletaríamos de um adulto;',
                'não usamos os dados de estudo para publicidade direcionada;',
                'explicamos privacidade em linguagem que dá para entender sem ajuda;',
                'não usamos recursos de gamificação para pressionar o estudante a fornecer mais dados.',
              ]}
            />
            <p className="m-0">
              Se você tem entre 12 e 15 anos, o cadastro só é concluído depois que um responsável legal confirmar a
              vinculação da sua conta. Enviamos a solicitação para o e-mail que você indicar e adotamos medidas para
              confirmar que a resposta veio mesmo de um adulto.
            </p>
            <p className="m-0">
              O responsável pode acompanhar a conta, revogar a autorização e pedir a exclusão dos dados a qualquer
              momento.
            </p>
          </LegalSection>

          <LegalSection title="7. Como personalizamos sua experiência">
            <p className="m-0">
              Para montar seu cronograma e suas recomendações, a plataforma usa o que você nos conta (vestibular
              alvo, etapa escolar, tempo disponível) e o que você faz dentro dela (questões respondidas, acertos e
              erros, simulados, módulos concluídos, frequência de uso).
            </p>
            <p className="m-0">
              Essas recomendações são sugestões geradas automaticamente. Você pode ignorá-las, refazer seu
              cronograma e estudar na ordem que quiser.
            </p>
          </LegalSection>

          <LegalSection title="8. Resultados e simulados">
            <p className="m-0">
              Notas, pontuações, estimativas e indicadores de progresso da Leterizza servem para você acompanhar
              seus estudos. Não são nota oficial, não valem como classificação e não garantem aprovação em nenhum
              processo seletivo.
            </p>
          </LegalSection>

          <LegalSection title="9. Conteúdo de terceiros">
            <p className="m-0">
              A plataforma pode indicar videoaulas, materiais e links produzidos por outras pessoas ou instituições.
              Esses conteúdos continuam pertencendo a quem os criou, e não somos responsáveis pelo que acontece fora
              da Leterizza.
            </p>
          </LegalSection>

          <LegalSection title="10. Uso adequado">
            <p className="m-0">Ao usar a Leterizza, você concorda em não:</p>
            <LegalList
              items={[
                'usar a plataforma para atividades ilegais;',
                'acessar ou tentar acessar a conta de outra pessoa;',
                'compartilhar suas credenciais de acesso;',
                'tentar burlar a segurança dos nossos sistemas ou explorar falhas;',
                'usar robôs ou scripts para extrair conteúdo ou dados;',
                'copiar, vender ou redistribuir conteúdo próprio da plataforma;',
                'prejudicar outros usuários.',
              ]}
            />
            <p className="m-0">
              Contas usadas de forma incompatível com essas regras podem ser suspensas ou encerradas. Sempre que
              possível, avisamos antes e damos chance de corrigir.
            </p>
          </LegalSection>

          <LegalSection title="11. Propriedade intelectual">
            <p className="m-0">
              A marca Leterizza, a identidade visual, os textos, as interfaces, o código e os materiais criados pela
              equipe são protegidos por lei. Criar uma conta dá a você o direito de usar a plataforma — não
              transfere a propriedade de nada.
            </p>
          </LegalSection>

          <LegalSection title="12. Pesquisas">
            <p className="m-0">
              Durante a validação, podemos convidar você para responder questionários, participar de entrevistas ou
              testar funcionalidades novas. Participar é sempre opcional, não muda seu acesso à plataforma e você
              pode recusar sem justificativa.
            </p>
          </LegalSection>

          <LegalSection title="13. Comunicações">
            <p className="m-0">
              Enviamos por e-mail as mensagens necessárias para o serviço funcionar: confirmação de cadastro,
              recuperação de senha, avisos de segurança e mudanças relevantes nestes Termos ou na Política de
              Privacidade.
            </p>
            <p className="m-0">
              Novidades, conteúdos e convites de marketing são separados, dependem de uma escolha sua e podem ser
              cancelados a qualquer momento — sem precisar excluir a conta.
            </p>
          </LegalSection>

          <LegalSection title="14. Disponibilidade">
            <p className="m-0">
              Trabalhamos para manter a plataforma no ar, mas não garantimos funcionamento ininterrupto.
              Manutenções, atualizações e falhas de serviços externos podem causar indisponibilidade.
            </p>
          </LegalSection>

          <LegalSection title="15. Responsabilidade">
            <p className="m-0">
              A Leterizza oferece ferramentas de apoio ao estudo. O desempenho de cada estudante depende de muitos
              fatores que estão fora do nosso alcance, e por isso não garantimos aprovação, nota ou classificação em
              nenhuma prova.
            </p>
            <p className="m-0">
              Nada nestes Termos afasta direitos que a legislação brasileira, incluindo o Código de Defesa do
              Consumidor, não permite afastar.
            </p>
          </LegalSection>

          <LegalSection title="16. Encerrando sua conta">
            <p className="m-0">
              Você pode encerrar sua conta quando quiser, pelas configurações da plataforma ou pelo e-mail de
              contato. O que acontece com seus dados depois disso está descrito na{' '}
              <Link href="/privacidade" className="text-primary-450 font-semibold underline">
                Política de Privacidade
              </Link>
              .
            </p>
          </LegalSection>

          <LegalSection title="17. Alterações nestes Termos">
            <p className="m-0">
              Podemos atualizar estes Termos conforme a plataforma evolui ou a legislação muda. Mudanças relevantes
              são avisadas por e-mail e dentro da plataforma com pelo menos 15 dias de antecedência. A data da
              última atualização fica sempre no topo desta página.
            </p>
          </LegalSection>

          <LegalSection title="18. Legislação aplicável">
            <p className="m-0">
              Estes Termos são regidos pela legislação brasileira — em especial a Lei Geral de Proteção de Dados
              Pessoais (Lei 13.709/2018), o Marco Civil da Internet (Lei 12.965/2014), o Código de Defesa do
              Consumidor, o Estatuto da Criança e do Adolescente e o Estatuto Digital da Criança e do Adolescente
              (Lei 15.211/2025).
            </p>
          </LegalSection>

          <LegalSection title="19. Contato">
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
