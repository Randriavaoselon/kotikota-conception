import { useState, useRef, useEffect, useLayoutEffect } from "react";
import {
  PiPercentBold,
  PiShieldCheckBold,
  PiQuestionBold,
  PiLightningBold,
  PiArrowRightBold,
  PiLockKeyBold,
  PiBankBold,
  PiUserCheckBold,
  PiFileTextBold,
  PiPlusBold,
  PiMinusBold,
  PiWalletBold,
  PiUsersBold,
  PiGearBold,
} from "react-icons/pi";
import BoutonSavoirPlus from "./BouttonSavoirPlus";
import "../styles/Informations.css";

import imgSecurite1 from "../assets/gratuit.gif";
import imgSecurite2 from "../assets/gratuit.gif";

const Informations = ({ openSideBarConnexion }) => {
  const [activeTab, setActiveTab] = useState("securite");
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [openFaq, setOpenFaq] = useState({ 0: 0 });

  const sectionRef = useRef(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  const tabsRef = useRef({});
  const tabsListRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const tabs = [
    { id: "tarifs", label: "Tarifs", icon: <PiPercentBold /> },
    {
      id: "securite",
      label: "Sécurité des cagnottes",
      icon: <PiShieldCheckBold />,
    },
    { id: "faq", label: "Foire aux questions", icon: <PiQuestionBold /> },
  ];

  const miniCards = [
    {
      icon: <PiLightningBold />,
      title: "Création de votre cagnotte",
      desc: "Ce que vous voyez est ce que vous payez, sans surprise.",
      image: imgSecurite1,
    },
    {
      icon: <PiShieldCheckBold />,
      title: "Participation à une cagnotte",
      desc: "Vos transactions sont protégées à chaque étape du processus.",
      image: imgSecurite2,
    },
    {
      icon: <PiPercentBold />,
      title: "RECUPERATION DE CAGNOTTE",
      desc: "💰 Nos commissions sur les cagnottes personnelles : 3% du montant total 🤝 Nos commissions sur les cagnottes solidaires : 6% du montant total 💸 Frais de transfert ou de virement de la cagnotte : à la charge du bénéficiaire et déduite automatiquement du montant total",
    },
  ];

  const securiteItems = [
    {
      icon: <PiLockKeyBold />,
      shortTitle: "Protection n° 1 :",
      title:
        "Barrière de protection n° 1 : Le label “Projet Vérifié” pour rassurer les participants sur la réalisation d'un projet",
      desc: "Ce label est facturé 2% du montant de la cagnotte et garantit aux donateurs que nous sommes allés sur place vérifier l’existence et la conformité de votre projet.",
    },
    {
      icon: <PiBankBold />,
      shortTitle: "Protection n° 2 :",
      title:
        "Barrière de protection n° 2 : Une équipe “sécurité financière” au sein de notre partenaire bancaire surveille chacune des opérations financières",
      desc: "Cette équipe est chargée d’assurer la fiabilité et la sécurité des transactions financières en ligne.",
    },
    {
      icon: <PiUserCheckBold />,
      shortTitle: "Protection n° 3 :",
      title:
        "Barrière de protection n° 3 : Une équipe interne dédiée à la lutte contre la fraude et le blanchiment d’argent",
      desc: "Notre équipe conformité veille chaque jour au contrôle des cagnottes. Elle effectue des contrôles réguliers et aléatoires pour nous assurer de la conformité des cagnottes et du bon usage des sommes collectées.",
    },
    {
      icon: <PiFileTextBold />,
      shortTitle: "Protection n° 4 :",
      title:
        "Barrière de protection n° 4 : Nous comptons sur l’entraide et la solidarité des koti-koteurs pour signaler toute cagnotte suspecte",
      desc: "Pour cela, il vous suffit d’envoyer un email à hello@koti-kota.com et nous décrire les motifs de votre suspicion sur la cagnotte concernée.",
    },
  ];

  const faqCategories = [
    {
      icon: <PiWalletBold />,
      title: "CRÉER MA CAGNOTTE",
      questions: [
        {
          q: "Quelles sont les différents types de cagnottes?",
          a: [
            "1. « cagnotte publique » : les participants peuvent retrouver votre cagnotte depuis un moteur de recherche sans même avoir le lien d'invitation. Cela facilite le partage de votre cagnotte (sur les réseaux sociaux, votre liste de contact).",
            "2. « cagnotte privée » : votre cagnotte ne sera pas référencée sur Internet et ne sera accessible qu'aux seules personnes ayant reçu le lien d'invitation.",
          ],
        },
        {
          q: "Y a-t-il des conditions à respecter pour créer une cagnotte?",
          a: [
            "Aucune condition particulière à remplir pour créer un, si ce n’est d’avoir 18 ans et fournir un justificatif d’identité (CNI ou Passeport)",
            "Aucun montant minimum ou maximum exigé. Cependant, nous nous engageons à clôturer toute cagnotte ou messages véhiculant un message à caractère violent, raciste ou pornographique.",
          ],
        },
        {
          q: "Quel sont les frais de création de cagnotte?",
          a: [
            "Aucun frais n’est prélevé par kotikota.com lors de la création de la cagnotte.",
            "Seuls des frais de fonctionnement sont prélevés au moment de la clôture de la cagnotte. Ceux-ci s’élèvent à 6% du montant de la cagnotte et sont réduits à 3% au- delà de de 10 000 000ar",
          ],
        },
        {
          q: "Dans quelle situation dois-je fournir un justificatif?",
          a: [
            "Dans le cadre de la lutte contre la fraude, le blanchiment d’argent et le financement du terrorisme, nous sommes dans l’obligation légale de vérifier votre identité, et donc d’exiger systématiquement un justificatif d’identité lors de la création de la cagnotte. Cette procédure nous permet de valider définitivement votre compte afin de profiter pleinement et en toute tranquillité de nos services.",
            "Des justificatifs supplémentaires peuvent vous être demandés lors de la dépense en cas de cagnotte « publique » (ex: projet solidaire ou entrepreneurial). Cela nous permet de nous assurer que les fonds collectés seront utilisés en conformité avec la situation ou le projet pour lequel vous créez la cagnotte.",
          ],
        },
        {
          q: "Faut-il avoir un compte pour créer une cagnotte?",
          a: [
            "Oui, vous devez obligatoirement créer un compte afin de pouvoir créer une cagnotte. Cela nous permet également d’offrir à tous un service sécurisé.",
          ],
        },
        {
          q: "Comment créer mon compte KOTI-KOTA?",
          a: [
            "Il vous suffit de vous rendre directement en haut à droite de la page d’accueil, cliquer sur “S’enregistrer/Se connecter”. Cela prend 30 secondes le temps pour vous de remplir vos informations personnelles (nom, prénom, adresse e-mail, etc.)",
            "Immédiatement après la création de votre compte, vous recevrez un email de confirmation, afin de valider votre adresse mail.",
            'Vous pouvez aussi cliquer sur« Facebook connect » ou « Google connect » pour une inscription instantanée.',
          ],
        },
        {
          q: "Comment personnaliser ma cagnotte?",
          a: [
            "La personnalisation de votre cagnotte (ajout d’une photo, description de votre pot commun, etc.) s’effectue lors de sa création. Vous pourrez modifier à tout moment chacune des options après coup.",
            "Bien évidemment, une cagnotte bien renseignée (photo + descriptif attrayant) garantit le plus souvent son succès.",
          ],
        },
        {
          q: "A quel moment enregistrer mes coordonnées bancaires?",
          a: ["Vous pouvez le faire à tout moment en renseignant « Mes RIB »."],
        },
        {
          q: "Quel mode de participation choisir?",
          a: [
            "Vous pouvez proposer 3 modes de participation: libre, suggéré et fixe.",
            "Participation libre : vous laissez à chacun le choix de décider du montant de leur participation.",
            "Participation suggérée : vous suggérez un montant de participation idéale. Toutefois, chacun reste libre de mettre plus ou moins que le montant suggéré.",
            "Participation fixe: un montant unique est imposé aux participants.",
          ],
        },
        {
          q: "Que se passe-t-il si le montant de l’objectif n’est pas atteint?",
          a: [
            "Dès lors que la cagnotte a été clôturée, les participants ne peuvent plus participer.",
            "Mais pas d’inquiétude, l’objectif n’est là qu’à titre indicatif. Si cet objectif n’est pas atteint, la somme sera dans tous les cas remise à l’expiration de la cagnotte. En cas de demande de remboursement d’un de plusieurs participants, seule la personne qui aura perçu les sommes issues de la cagnotte (le créateur ou bénéficiaire de la cagnotte selon les modalités choisies) a la responsabilité contractuelle d’organiser l’opération de remboursement des participants. Dans tous les cas, les frais de fonctionnement (6% de du montant de la cagnotte) restent acquis à la plateforme et ne sont pas restitués.",
          ],
        },
        {
          q: "Qui a accès à ma cagnotte?",
          a: [
            "Vous avez deux possibilités :",
            "1. « cagnotte publique », les participants peuvent retrouver votre pot depuis un moteur de recherche sans même avoir le lien de votre pot commun. Cela vous permet de mieux partager votre cagnotte (sur votre blog, sur des forums, sur les réseaux sociaux).",
            "2. « cagnotte privée » : votre cagnotte ne sera pas référencée sur Internet et ne sera accessible qu’aux seules personnes ayant reçu le lien d’invitation.",
          ],
        },
        {
          q: "Qui peut voir les participants à ma cagnotte?",
          a: [
            "Tout le monde peut voir qui a participé à une cagnotte, sauf si le participant a choisi d’être “anonyme” ou que vous ayez masqué le nom des participants lors de la création de votre cagnotte.",
          ],
        },
        {
          q: "Qui peut voir le montant de ma cagnotte?",
          a: [
            "Tout le monde peut voir le montant de votre cagnotte, sauf si vous avez masqué ce montant auprès des participants lors de sa création.",
          ],
        },
        {
          q: "Comment inviter les participants?",
          a: [
            "Sur la page de votre cagnotte, nous avons mis à disposition un lien d’accès unique :",
            "Il existe 3 moyens d’inviter votre entourage à participer : Cliquer sur l’un des pictos Facebook, Whatsapp ou Twitter (si vous disposez d’un compte sur ces réseaux), Cliquer sur le picto « e-mail »,",
            "Copier/coller le lien d’accès unique pour l’envoyer par le canal de votre choix, à vos amis.",
          ],
        },
        {
          q: "Comment ajouter une liste de contacts?",
          a: [
            "Cliquez sur« Inviter » sur la page de votre cagnotte, puis renseignez manuellement votre liste de contacts ou importez directement un listing.",
          ],
        },
      ],
    },
    {
      icon: <PiWalletBold />,
      title: "PARTICIPER À UNE CAGNOTTER",
      questions: [
        {
          q: "Quel sont les frais de participation à une cagnotte?",
          a: "Aucun frais n’est prélevé par kotikota.com lors d’une participation à une cagnotte.",
        },
        {
          q: "Comment participer?",
          a: [
            "1 . Renseignez vos informations personnelles: prénom, nom et email ou optez pour le Facebook Connect ou Google Connect",
            "2. Indiquez le montant de la participation souhaitée.",
            "3 . Indiquez Ie moyen de paiement souhaité (CB ou mobile money ou virement bancaire ou paypal).",
            "4 . Choisissez vos paramètres de confidentialité (masquer ou non l’affichage de votre nom et du montant de votre participation dans la page de votre cagnotte).",
            "5 . Renseignez vos informations bancaires, le paiement est automatiquement validé et l’organisateur est informé de votre participation.",
          ],
        },
        {
          q: "Que faire si ma participation n’a pas été prise en compte?",
          a: "Plusieurs raisons peuvent expliquer un problème de paiement, contactez-nous directement à l’adresse hello©koti-kota.com, en nous indiquant l’email avec lequel vous avez participé. Nous identifierons facilement les raisons du problème.",
        },
        {
          q: "Comment masquer mon nom et le montant de ma participation?",
          a: 'Vous avez le choix d’afficher ou non votre nom et/ou le montant de votre participation. Si vous souhaitez modifier votre choix a posteriori, il vous suffit de vous rendre dans le mail de confirmation de participation qui vous a été envoyé et de cliquer sur « modifier vos informations de participation »',
        },
        {
          q: "Mon paiement est-il sécurisé?",
          a: "Nous travaillons avec notre partenaire bancaire BNI qui gère entièrement la plateforme de paiement, ainsi que la sécurisation des transactions",
        },
        {
          q: "Vais-je recevoir une confirmation de paiement?",
          a: "Vous recevrez systématiquement une confirmation de paiement par email. Si vous ne la recevez pas, regardez dans vos spams. N’hésitez pas à nous contacter par mail à l’adresse suivante: ou par téléphone au +261 3432 00078 ou par whatsapp au +33 641 01 29 63.",
        },
      ],
    },
    {
      icon: <PiUsersBold />,
      title: "CLOTÛREER MA CAGNOTTE",
      questions: [
        {
          q: "Comment clôturer ma cagnotte ?",
          a: "Pour clôturer votre cagnotte, il vous suffit d'être connecté sur le site (mail + mot de passe), vous rendre sur le tchat ou bien envoyer une demande expresse à l’adresse hellot@koti-kota.com",
        },
        {
          q: "Comment supprimer ma cagnotte ?",
          a: "Pour supprimer votre cagnotte, il faudra envoyer une demande par le tchat ou par mail sur hello@koti-kota.com. II faut cependant s’assurer que l’argent de la cagnotte a bien été encaissée.",
        },
        {
          q: "Y a-t-il des frais appliqués ?",
          a: "Les seuls frais prélevés par kotikota.com sont des frais de fonctionnement appliqués lors de la clôture de la cagnotte. Pour les cagnottes solidaires, ce frais sont de 3% du montant de la cagnotte. Pour les cagnottes personnelles ces frais sont de 6% du montant de la cagnotte. Au-delà de 10 000 000ar les frais sont divisés par deux et passent à 3%.",
        },
        {
          q: "Quand récupérer l'argent de ma cagnotte ?",
          a: "Vous pouvez utiliser l'argent de votre cagnotteune fois celle-ci clôturée.",
        },
        {
          q: "Combien de temps ai-je pour utiliser l'argent de ma cagnotte ?",
          a: "Vous avez jusque 21 jours pour utiliser votre cagnotte à compter du jour de la clôture.",
        },
        {
          q: "Comment récupérer l'argent de ma cagnotte ?",
          a: [
            "Il existe 2 façons de récupérer votre argent:",
            "1. Virement bancaire",
            "2. Transfert Mobile Money",
          ],
        },
        {
          q: "Quand vais-je recevoir mon virement ?",
          a: [
            "Une fois votre demande de virement effectuée, vous allez recevoir un email de confirmation de virement. Une fois cet email reçu, il faudra compter 72h ouvrées pour recevoir l'argent de votre cagnotte sur votre compte bancaire.",
            "Si vous étiez en attende de validation de vos pièces justificatives, votre demande de virement sera automatiquement traitée dès que vos documents auront été validés.",
          ],
        },
      ],
    },
    {
      icon: <PiGearBold />,
      title: "GÉRER MA CAGNOTTE",
      questions: [
        {
          q: "Quels sont les frais de gestion de cagnotte ?",
          a: "Aucun frais n’est prélevé par kotikota.com lors de gestion de la cagnotte.",
        },
        {
          q: "Comment puis-je modifier ma cagnotte ?",
          a: 'Pour modifier votre cagnotte (photo, descriptif, options), rendez-vous sur la page de votre cagnotte puis cliquez sur “paramètres cagnotte”.',
        },
        {
          q: "Comment suis-je informé lors d'une participation à ma cagnotte ?",
          a: "Vous recevrez par e-mail une confirmation à chaque fois qu'un participant effectuera une contribution sur votre cagnotte, sauf si vous avez coché la case « Ne pas recevoir les notifications par email ». Vous pouvez consulter à tout moment la liste des participants etles remercier ou les relancer directement depuis la page de votre cagnotte, bouton « gestion cagnotte ».",
        },
        {
          q: "Comment relancer les participants ?",
          a: "Vous pouvez relancer à tout moment les invités depuis la page de votre cagnotte, bouton « gestion cagnotte ».",
        },
        {
          q: "Qui peut laisser un mot doux dans la cagnotte ?",
          a: "L'organisateur ainsi que l'ensemble des participants ayant un compte peuvent laisser un message, un seul message par personne.",
        },
        {
          q: "Comment remercier les participants ?",
          a: [
            "Vous pouvez à tout moment remercier les participants à votre cagnotte",
            'Rendez-vous sur la page de votre cagnotte et cliquez sur "répondre" au commentaire.',
          ],
        },
        {
          q: "Peut-on rembourser un participant ?",
          a: [
            "Toute participation est définitive sauf panne ou problème technique interne. Dans ces cas précis, faites-nous part de votre demande de remboursement à l'adresse hello@koti-kota.com en nous indiquant le mail du participant à rembourser, nous nous chargerons de procéder au remboursement (hors frais de fonctionnement) de sa participation sous 15 jours ouvrés",
          ],
        },
      ],
    },
  ];

  const toggleFaq = (colIndex, questionIndex) => {
    setOpenFaq((prev) => ({
      ...prev,
      [colIndex]: prev[colIndex] === questionIndex ? null : questionIndex,
    }));
  };

  // ===== Fade-in de la section entière au scroll =====
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ===== Indicateur d'onglet qui glisse dynamiquement =====
  useLayoutEffect(() => {
    const currentTab = tabsRef.current[activeTab];
    const list = tabsListRef.current;
    if (currentTab && list) {
      const listRect = list.getBoundingClientRect();
      const tabRect = currentTab.getBoundingClientRect();
      setIndicatorStyle({
        left: tabRect.left - listRect.left,
        width: tabRect.width,
      });
    }
  }, [activeTab, isSectionVisible]);

  return (
    <section
      className={`informations ${
        isSectionVisible ? "informations--visible" : ""
      }`}
      ref={sectionRef}
    >
      <div className="container">
        <div className="informations__panel">
          {/* Tabs */}
          <div className="informations__tabs" ref={tabsListRef}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                ref={(el) => (tabsRef.current[tab.id] = el)}
                className={`informations__tab ${
                  activeTab === tab.id ? "informations__tab--active" : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="informations__tab-icon">{tab.icon}</span>
                {tab.label}
              </button>
            ))}

            <span
              className="informations__tab-indicator"
              style={{
                transform: `translateX(${indicatorStyle.left}px)`,
                width: `${indicatorStyle.width}px`,
              }}
            ></span>
          </div>

          {/* Contenu de l'onglet Tarifs */}
          {activeTab === "tarifs" && (
            <div
              className="informations__content informations__content--enter"
              key="tarifs"
            >
              <div className="tarif-banner">
                <div className="tarif-banner__text">
                  <h3 className="tarif-banner__title">
                    Une tarification simple et transparente
                  </h3>
                  <p className="tarif-banner__desc">
                    Découvrez nos frais détaillés et créez votre cagnotte en
                    toute confiance, sans coût caché.
                  </p>
                </div>
                <BoutonSavoirPlus 
                  text="Créez ma cagnotte"
                  icon={PiArrowRightBold}
                  onClick={() => openSideBarConnexion("auth")}
                  className="tarif-banner__btn"
                
                />
              </div>

              <div className="tarif-grid">
                {miniCards.map((card, index) => (
                  <div
                    className="tarif-mini-card informations__stagger"
                    style={{ transitionDelay: `${0.08 * index}s` }}
                    key={index}
                  >
                    <div className="tarif-mini-card__icon">{card.icon}</div>
                    <h4 className="tarif-mini-card__title">{card.title}</h4>
                    <p className="tarif-mini-card__desc">{card.desc}</p>

                    {card.image && (
                      <img
                        src={card.image}
                        alt={card.title}
                        className="tarif-mini-card__image"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contenu de l'onglet Sécurité */}
          {activeTab === "securite" && (
            <div
              className="informations__content informations__content--enter"
              key="securite"
            >
              <div className="securite-accordion">
                {securiteItems.map((item, index) => {
                  const isActive = activeAccordion === index;
                  return (
                    <div
                      key={index}
                      className={`securite-item informations__stagger ${
                        isActive ? "securite-item--active" : ""
                      }`}
                      style={{ transitionDelay: `${0.08 * index}s` }}
                      onClick={() => setActiveAccordion(index)}
                    >
                      <div className="securite-item__header">
                        <span className="securite-item__icon">{item.icon}</span>
                        <span className="securite-item__number">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {isActive ? (
                        <h4 className="securite-item__title">{item.title}</h4>
                      ) : (
                        <h4 className="securite-item__title securite-item__title--short">
                          {item.shortTitle}
                        </h4>
                      )}

                      <div className="securite-item__desc-wrap">
                        <div className="securite-item__desc-inner">
                          <p className="securite-item__desc">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Contenu de l'onglet FAQ */}
          {activeTab === "faq" && (
            <div
              className="informations__content informations__content--enter"
              key="faq"
            >
              <div className="faq-grid">
                {faqCategories.map((cat, colIndex) => (
                  <div
                    className="faq-col informations__stagger"
                    style={{ transitionDelay: `${0.08 * colIndex}s` }}
                    key={colIndex}
                  >
                    <div className="faq-col__header">
                      <span className="faq-col__icon">{cat.icon}</span>
                      <h4 className="faq-col__title">{cat.title}</h4>
                    </div>

                    <div className="faq-col__list">
                      <div className="faq-col__list-scroll">
                        {cat.questions.map((item, qIndex) => {
                          const isOpen = openFaq[colIndex] === qIndex;
                          return (
                            <div
                              className={`faq-item ${
                                isOpen ? "faq-item--open" : ""
                              }`}
                              key={qIndex}
                            >
                              <button
                                className="faq-item__question"
                                onClick={() => toggleFaq(colIndex, qIndex)}
                              >
                                <span>{item.q}</span>
                                <span className="faq-item__toggle">
                                  {isOpen ? <PiMinusBold /> : <PiPlusBold />}
                                </span>
                              </button>

                              <div className="faq-item__answer-wrap">
                                <div className="faq-item__answer-inner">
                                  {Array.isArray(item.a) ? (
                                    item.a.map((line, lineIndex) => (
                                      <p
                                        className="faq-item__answer"
                                        key={lineIndex}
                                      >
                                        {line}
                                      </p>
                                    ))
                                  ) : (
                                    <p className="faq-item__answer">
                                      {item.a}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Informations;