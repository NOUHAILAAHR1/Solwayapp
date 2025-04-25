import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: {
    translation: {
      copyright: "Copyright © 2024 Solway | Tous droits réservés",
      terms: "Conditions d'utilisation",
      privacy: "Politique de confidentialité",
      cookies: "Politique des cookies",
      contact: "Contacter le support",

      nav: {
        home: "Accueil",
        features: "Fonctionnalités",
        clients: "Clients",
        contact: "Contact",
        more: "Plus",
        back: "Retour",
        solutions: "Nos Solutions",
        synchronization: "Synchronisation HR",
        association: "ASSOCIATION SOLWAY",
        solidarity: "POUR LA SOLIDARITE",
        careers: "Carrières",
        jobOffers: "Nos Offres D'emploi",
        applications: "Candidatures",
        ourMissions: "Nos Missions",
        yourMissions: "Vos Missions",
        training: "Formations",
        executiveEducation: "SOLWAY Executive Education"
      },

      hero: {
        welcome: "Bienvenue chez",
        company: "SOLWAY Consulting & Services",
        slogan: "Croisez notre chemin, trouvez votre solution.",
        description: "Libérez le potentiel de votre entreprise avec des solutions sur mesure et des conseils d'experts. Ensemble, relevons vos défis et propulsons votre succès.",
        aboutButton: "Qui sommes-nous ?",
        jobsButton: "Nos offres d'emploi",
        imageAlt: "Image d'entreprise"
      },

      activities: {
        title: "Nos activités",
        subtitle: "Tout ce dont vous avez besoin",
        description: "Notre ambition est de vous servir tout en mettant en œuvre les meilleures pratiques issues du savoir-faire acquis au cours des nombreux projets réalisés pour différents clients.",
        consulting: {
          title: "Conseil",
          description: "<strong>SOLWAY</strong> accompagne les entreprises dans leur transformation digitale."
        },
        integration: {
          title: "Intégration",
          description: "<strong>SOLWAY</strong> intervient à la mise en place de vos solutions SAP, spécialement dans le module HR, ainsi sur d'autres périmètres : Linux, Base de données, Réseau …"
        },
        sourcing: {
          title: "Sourcing",
          description: "<strong>SOLWAY</strong> vous aide à satisfaire vos besoins en recrutement en ayant les bons talents pour votre entreprise."
        },
        innovation: {
          title: "Innovation",
          description: "<strong>SOLWAY</strong> développe ses propres outils pour faciliter et améliorer votre quotidien."
        },
        training: {
          title: "Formation",
          description: "<strong>SOLWAY</strong> offre désormais la possibilité de se former sur SAP ainsi sur d'autres langages et frameworks."
        }
      },

      innovations: {
        title: "Nos innovations",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.",
        discover: "Découvrez",
        illustration: "Illustration",
        verifdns: {
          title: "VERIF'DSN",
          text: {
            part1: "VERIF'DSN est un outil",
            sap: "SAP",
            part2: "qui permet de contrôler vos blocs",
            dns: "DNS",
            part3: "avant de les envoyer aux organismes de protection sociale et administrations. C'est un outil facile, intuitif et très apprécié par les gestionnaires de paie. N'hésitez pas à nous contacter pour avoir plus d'informations ou pour demander un essai gratuit."
          }
        },
        verifdnsplus: {
          title: "VERIF'DSN PLUS",
          text: "VERIF'DSN PLUS est un outil complémentaire de VERIF'DSN qui permet de contrôler votre DSN sur plusieurs périodes de paie. Cela vous permettra de réaliser facilement et rapidement des contrôles trimestrielle, semestrielle ou annuelle de vos cotisations. Pour plus d'informations, veuillez nous contacter, nous serons ravis à répondre à vos interrogations."
        },
        solwaySyncHR: {
          title: "SOLWAY Synchronisation HR",
          text: {
            part1: "SOLWAY SYNCHRONISATION HR est un outil SAP qui permet de copier rapidement et facilement les données des salariés d'un système à un autre",
            part2: "N'hésitez pas à nous contacter pour avoir plus d'informations ou pour demander un essai gratuit."
          }
        }
      },

      solutions: {
        title: "Nos Solutions",
        description: "Découvrez nos outils pour la gestion des demandes, des ressources humaines et de la facturation.",
        soldesk: {
          alt: "Soldesk",
          title: "SOLDESK",
          description: "SOLDESK est un outil interne de gestion de tickets permettant de traiter efficacement les demandes clients (anomalies, évolutions, etc.) via une interface simple et rapide."
        },
        soldeskhr: {
          alt: "Soldesk HR",
          title: "SOLWAY HR",
          description: "SOLWAY HR est une solution complète pour optimiser la gestion des ressources humaines, couvrant l'embauche, le recrutement, la paie, et plus encore."
        },
        solwayInvoice: {
          alt: "Solway Invoice",
          title: "SOLWAY INVOICE",
          description: "SOLWAY INVOICE est un outil interne qui simplifie la facturation en permettant la saisie facile des comptes rendus d'activité et la génération automatique de factures pour les clients finaux."
        }
      },

      recruitment: {
        title: "SOLWAY Recrute",
        question: "vous êtes Consultant SAP HR ?",
        description: "Rejoignez-nous pour découvrir nos opportunités uniques et évoluez avec nous, du stage au CDI débutant, jusqu'au CDI expérimenté. Votre avenir commence ici !",
        joinButton: "Rejoignez-nous"
      },

      clients: {
        title: "Ils nous font confiance"
      }
    }
  },
  en: {
    translation: {
      copyright: "Copyright © 2024 Solway | All rights reserved",
      terms: "Terms of Use",
      privacy: "Privacy Policy",
      cookies: "Cookie Policy",
      contact: "Contact Support",

      nav: {
        home: "Home",
        features: "Features",
        clients: "Clients",
        contact: "Contact",
        more: "More",
        back: "Back",
        solutions: "Our Solutions",
        synchronization: "HR Synchronization",
        association: "SOLWAY ASSOCIATION",
        solidarity: "FOR SOLIDARITY",
        careers: "Careers",
        jobOffers: "Job Offers",
        applications: "Applications",
        ourMissions: "Our Missions",
        yourMissions: "Your Missions",
        training: "Training",
        executiveEducation: "SOLWAY Executive Education"
      },

      hero: {
        welcome: "Welcome to",
        company: "SOLWAY Consulting & Services",
        slogan: "Cross our path, find your solution.",
        description: "Unleash your business potential with tailored solutions and expert advice. Together, let's tackle your challenges and propel your success.",
        aboutButton: "Who are we?",
        jobsButton: "Our job offers",
        imageAlt: "Company image"
      },

      activities: {
        title: "Our activities",
        subtitle: "Everything you need",
        description: "Our ambition is to serve you while implementing the best practices from the expertise acquired through numerous projects carried out for different clients.",
        consulting: {
          title: "Consulting",
          description: "<strong>SOLWAY</strong> supports companies in their digital transformation."
        },
        integration: {
          title: "Integration",
          description: "<strong>SOLWAY</strong> assists in implementing your SAP solutions, especially in the HR module, as well as in other areas: Linux, Database, Network..."
        },
        sourcing: {
          title: "Sourcing",
          description: "<strong>SOLWAY</strong> helps you meet your recruitment needs by finding the right talent for your company."
        },
        innovation: {
          title: "Innovation",
          description: "<strong>SOLWAY</strong> develops its own tools to facilitate and improve your daily operations."
        },
        training: {
          title: "Training",
          description: "<strong>SOLWAY</strong> now offers the possibility to train on SAP as well as on other languages and frameworks."
        }
      },

      innovations: {
        title: "Our innovations",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.",
        discover: "Discover",
        illustration: "Illustration",
        verifdns: {
          title: "VERIF'DSN",
          text: {
            part1: "VERIF'DSN is a",
            sap: "SAP",
            part2: "tool that allows you to check your",
            dns: "DNS",
            part3: "blocks before sending them to social protection organizations and administrations. It's an easy, intuitive tool that is highly appreciated by payroll managers. Feel free to contact us for more information or to request a free trial."
          }
        },
        verifdnsplus: {
          title: "VERIF'DSN PLUS",
          text: "VERIF'DSN PLUS is a complementary tool to VERIF'DSN that allows you to check your DSN over multiple pay periods. This will enable you to easily and quickly perform quarterly, semi-annual, or annual checks of your contributions. For more information, please contact us, we will be happy to answer your questions."
        },
        solwaySyncHR: {
          title: "SOLWAY HR Synchronization",
          text: {
            part1: "SOLWAY HR SYNCHRONIZATION is a SAP tool that allows you to quickly and easily copy employee data from one system to another",
            part2: "Feel free to contact us for more information or to request a free trial."
          }
        }
      },
      solutions: {
        title: "Our Solutions",
        description: "Discover our tools for request management, human resources, and invoicing.",
        soldesk: {
          alt: "Soldesk",
          title: "SOLDESK",
          description: "SOLDESK is an internal ticket management tool that efficiently processes customer requests (anomalies, evolutions, etc.) through a simple and fast interface."
        },
        soldeskhr: {
          alt: "Soldesk HR",
          title: "SOLWAY HR",
          description: "SOLWAY HR is a comprehensive solution to optimize human resources management, covering hiring, recruitment, payroll, and more."
        },
        solwayInvoice: {
          alt: "Solway Invoice",
          title: "SOLWAY INVOICE",
          description: "SOLWAY INVOICE is an internal tool that simplifies invoicing by allowing easy entry of activity reports and automatic generation of invoices for end customers."
        }
      },

      recruitment: {
        title: "SOLWAY is Hiring",
        question: "Are you a SAP HR Consultant?",
        description: "Join us to discover unique opportunities and grow with us, from internships to entry-level positions, all the way to experienced full-time roles. Your future starts here!",
        joinButton: "Join Us"
      },
      

      clients: {
        title: "They Trust Us"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;