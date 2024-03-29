var app = angular.module('myApp',  ['rzSlider'])
    .controller('myCtrl', function($scope) {

        $scope.cds =  [
            {
                "cds": "[524] SCIENZE DELL'EDUCAZIONE",
                "Area": "Formazione",
                "Nome": "SCIENZE DELL'EDUCAZIONE",
                "Dipartimento": "DIPARTIMENTO DI SCIENZE UMANE PER LA FORMAZIONE",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[541] SCIENZE DEL TURISMO E COMUNITA' LOCALE(C.SO A DISTANZA)",
                "Area": "Sociologica",
                "Nome": "SCIENZE DEL TURISMO E COMUNITÀ LOCALE",
                "Dipartimento": "DIPARTIMENTO DI SOCIOLOGIA E RICERCA SOCIALE",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[581] GIURISPRUDENZA",
                "Area": "Giuridica",
                "Nome": "GIURISPRUDENZA",
                "Dipartimento": "DIPARTIMENTO DI GIURISPRUDENZA (SCHOOL OF LAW)",
                "tipo": "Laurea Magistrale Ciclo Unico 5 anni",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[E0201Q] BIOTECNOLOGIE",
                "Area": "Scientifica",
                "Nome": "BIOTECNOLOGIE",
                "Dipartimento": "DIPARTIMENTO DI BIOTECNOLOGIE E BIOSCIENZE",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[E1301Q] SCIENZE BIOLOGICHE",
                "Area": "Scientifica",
                "Nome": "SCIENZE BIOLOGICHE",
                "Dipartimento": "DIPARTIMENTO DI BIOTECNOLOGIE E BIOSCIENZE",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[E1401A] SCIENZE DEI SERVIZI GIURIDICI",
                "Area": "Giuridica",
                "Nome": "SCIENZE DEI SERVIZI GIURIDICI",
                "Dipartimento": "DIPARTIMENTO DI GIURISPRUDENZA (SCHOOL OF LAW)",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[E1501N] SCIENZE DEL TURISMO E COMUNITÀ LOCALE",
                "Area": "Sociologica",
                "Nome": "SCIENZE DEL TURISMO E COMUNITÀ LOCALE",
                "Dipartimento": "DIPARTIMENTO DI SOCIOLOGIA E RICERCA SOCIALE",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[E1502N] SCIENZE DEL TURISMO E COMUNITÀ LOCALE (NETTUNO)",
                "Area": "Sociologica",
                "Nome": "SCIENZE DEL TURISMO E COMUNITÀ LOCALE",
                "Dipartimento": "DIPARTIMENTO DI SOCIOLOGIA E RICERCA SOCIALE",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[E1601N] SCIENZE DELL'ORGANIZZAZIONE",
                "Area": "Sociologica",
                "Nome": "SCIENZE DELL'ORGANIZZAZIONE",
                "Dipartimento": "DIPARTIMENTO DI SOCIOLOGIA E RICERCA SOCIALE",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[E1801M] MARKETING, COMUNICAZIONE AZIENDALE E MERCATI GLOBALI",
                "Area": "Economico statistica",
                "Nome": "MARKETING, COMUNICAZIONE AZIENDALE E MERCATI GLOBALI",
                "Dipartimento": "DIPARTIMENTO DI ECONOMIA, METODI QUANTITATIVI E STRATEGIE DI IMPRESA",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[E1802M] ECONOMIA E AMMINISTRAZIONE DELLE IMPRESE",
                "Area": "Economico statistica",
                "Nome": "ECONOMIA E AMMINISTRAZIONE DELLE IMPRESE",
                "Dipartimento": "DIPARTIMENTO DI SCIENZE ECONOMICO-AZIENDALI E DIRITTO PER L ECONOMIA   ",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[E1803M] ECONOMIA DELLE BANCHE, DELLE ASSICURAZIONI E DEGLI INTERMEDIARI FINANZIARI",
                "Area": "Economico statistica",
                "Nome": "ECONOMIA DELLE BANCHE, DELLE ASSICURAZIONI E DEGLI INTERMEDIARI FINANZIARI",
                "Dipartimento": "DIPARTIMENTO DI SCIENZE ECONOMICO-AZIENDALI E DIRITTO PER L ECONOMIA  ",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[E1901R] SCIENZE DELL'EDUCAZIONE",
                "Area": "Formazione",
                "Nome": "SCIENZE DELL'EDUCAZIONE",
                "Dipartimento": "DIPARTIMENTO DI SCIENZE UMANE PER LA FORMAZIONE",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[E2001R] COMUNICAZIONE INTERCULTURALE",
                "Area": "Formazione",
                "Nome": "COMUNICAZIONE INTERCULTURALE",
                "Dipartimento": "DIPARTIMENTO DI SCIENZE UMANE PER LA FORMAZIONE",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[E2003P] COMUNICAZIONE E PSICOLOGIA",
                "Area": "Psicologica",
                "Nome": "COMUNICAZIONE E PSICOLOGIA",
                "Dipartimento": "DIPARTIMENTO DI PSICOLOGIA",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 1
            },
            {
                "cds": "[E2004P] SCIENZE PSICOSOCIALI DELLA COMUNICAZIONE",
                "Area": "Psicologica",
                "Nome": "SCIENZE PSICOSOCIALI DELLA COMUNICAZIONE",
                "Dipartimento": "DIPARTIMENTO DI PSICOLOGIA",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[E2401P] SCIENZE E TECNICHE PSICOLOGICHE",
                "Area": "Psicologica",
                "Nome": "SCIENZE E TECNICHE PSICOLOGICHE      ",
                "Dipartimento": "DIPARTIMENTO DI PSICOLOGIA",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[E2701Q] SCIENZA DEI MATERIALI",
                "Area": "Scientifica",
                "Nome": "SCIENZA DEI MATERIALI",
                "Dipartimento": "DIPARTIMENTO DI SCIENZA DEI MATERIALI",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[E2702Q] SCIENZE E TECNOLOGIE CHIMICHE",
                "Area": "Scientifica",
                "Nome": "SCIENZE E TECNOLOGIE CHIMICHE",
                "Dipartimento": "DIPARTIMENTO DI SCIENZA DEI MATERIALI",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[E3001Q] FISICA",
                "Area": "Scientifica",
                "Nome": "FISICA",
                "Dipartimento": "DIPARTIMENTO DI FISICA",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[E3002Q] OTTICA E OPTOMETRIA",
                "Area": "Scientifica",
                "Nome": "OTTICA E OPTOMETRIA",
                "Dipartimento": "DIPARTIMENTO DI SCIENZA DEI MATERIALI",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[E3101Q] INFORMATICA",
                "Area": "Scientifica",
                "Nome": "INFORMATICA",
                "Dipartimento": "DIPARTIMENTO DI INFORMATICA, SISTEMISTICA E COMUNICAZIONE",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[E3201Q] SCIENZE E TECNOLOGIE PER L'AMBIENTE",
                "Area": "Scientifica",
                "Nome": "SCIENZE E TECNOLOGIE PER L'AMBIENTE",
                "Dipartimento": "DIPARTIMENTO DI SCIENZE DELL AMBIENTE E DELLA TERRA (DEPARTMENT OF EARTH AND ENVIRONMENTAL SCIENCES - DISAT)",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[E3301M] ECONOMIA E COMMERCIO",
                "Area": "Economico statistica",
                "Nome": "ECONOMIA E COMMERCIO",
                "Dipartimento": "DIPARTIMENTO DI STATISTICA E METODI QUANTITATIVI",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[E3401Q] SCIENZE E TECNOLOGIE GEOLOGICHE",
                "Area": "Scientifica",
                "Nome": "SCIENZE E TECNOLOGIE GEOLOGICHE",
                "Dipartimento": "DIPARTIMENTO DI SCIENZE DELL AMBIENTE E DELLA TERRA (DEPARTMENT OF EARTH AND ENVIRONMENTAL SCIENCES - DISAT)",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[E3501Q] MATEMATICA",
                "Area": "Scientifica",
                "Nome": "MATEMATICA",
                "Dipartimento": "DIPARTIMENTO DI MATEMATICA E APPLICAZIONI",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[E3901N] SERVIZIO SOCIALE",
                "Area": "Sociologica",
                "Nome": "SERVIZIO SOCIALE",
                "Dipartimento": "DIPARTIMENTO DI SOCIOLOGIA E RICERCA SOCIALE",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[E4001N] SOCIOLOGIA",
                "Area": "Sociologica",
                "Nome": "SOCIOLOGIA",
                "Dipartimento": "DIPARTIMENTO DI SOCIOLOGIA E RICERCA SOCIALE",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[E4101B] SCIENZE STATISTICHE ED ECONOMICHE",
                "Area": "Economico statistica",
                "Nome": "SCIENZE STATISTICHE ED ECONOMICHE",
                "Dipartimento": "DIPARTIMENTO DI ECONOMIA, METODI QUANTITATIVI E STRATEGIE DI IMPRESA",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[E4102B] STATISTICA E GESTIONE DELLE INFORMAZIONI",
                "Area": "Economico statistica",
                "Nome": "STATISTICA E GESTIONE DELLE INFORMAZIONI",
                "Dipartimento": "DIPARTIMENTO DI STATISTICA E METODI QUANTITATIVI",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[F0101R] SCIENZE ANTROPOLOGICHE ED ETNOLOGICHE",
                "Area": "Formazione",
                "Nome": "SCIENZE ANTROPOLOGICHE ED ETNOLOGICHE",
                "Dipartimento": "DIPARTIMENTO DI SCIENZE UMANE PER LA FORMAZIONE",
                "tipo": "Corso di Laurea Magistrale",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[F0601Q] BIOLOGIA",
                "Area": "Scientifica",
                "Nome": "BIOLOGIA",
                "Dipartimento": "DIPARTIMENTO DI BIOTECNOLOGIE E BIOSCIENZE",
                "tipo": "Corso di Laurea Magistrale",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[F0802Q] BIOTECNOLOGIE INDUSTRIALI",
                "Area": "Scientifica",
                "Nome": "BIOTECNOLOGIE INDUSTRIALI",
                "Dipartimento": "DIPARTIMENTO DI BIOTECNOLOGIE E BIOSCIENZE",
                "tipo": "Corso di Laurea Magistrale",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[F0901D] BIOTECNOLOGIE MEDICHE",
                "Area": "Medica",
                "Nome": "BIOTECNOLOGIE MEDICHE",
                "Dipartimento": "DIPARTIMENTO DI MEDICINA E CHIRURGIA (SCHOOL OF MEDICINE AND SURGERY)",
                "tipo": "Corso di Laurea Magistrale",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[F1601M] ECONOMIA E FINANZA",
                "Area": "Economico statistica",
                "Nome": "ECONOMIA E FINANZA",
                "Dipartimento": "DIPARTIMENTO DI STATISTICA E METODI QUANTITATIVI",
                "tipo": "Corso di Laurea Magistrale",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[F1701Q] FISICA",
                "Area": "Scientifica",
                "Nome": "FISICA",
                "Dipartimento": "DIPARTIMENTO DI FISICA",
                "tipo": "Corso di Laurea Magistrale",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[F1801Q] INFORMATICA",
                "Area": "Scientifica",
                "Nome": "INFORMATICA",
                "Dipartimento": "DIPARTIMENTO DI INFORMATICA, SISTEMISTICA E COMUNICAZIONE",
                "tipo": "Corso di Laurea Magistrale",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[F4001Q] MATEMATICA",
                "Area": "Scientifica",
                "Nome": "MATEMATICA",
                "Dipartimento": "DIPARTIMENTO DI MATEMATICA E APPLICAZIONI",
                "tipo": "Corso di Laurea Magistrale",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[F4901N] TURISMO, TERRITORIO E SVILUPPO LOCALE",
                "Area": "Sociologica",
                "Nome": "TURISMO, TERRITORIO E SVILUPPO LOCALE",
                "Dipartimento": "DIPARTIMENTO DI SOCIOLOGIA E RICERCA SOCIALE",
                "tipo": "Corso di Laurea Magistrale",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[F5101P] PSICOLOGIA CLINICA, DELLO SVILUPPO E NEUROPSICOLOGIA",
                "Area": "Psicologica",
                "Nome": "[F5101P] PSICOLOGIA CLINICA, DELLO SVILUPPO E NEUROPSICOLOGIA",
                "Dipartimento": "DIPARTIMENTO DI PSICOLOGIA",
                "tipo": "Corso di Laurea Magistrale",
                "Lingua": "Italiano",
                "disattivato": 1
            },
            {
                "cds": "[F5102P] PSICOLOGIA DEI PROCESSI SOCIALI, DECISIONALI E DEI COMPORTAMENTI ECONOMICI",
                "Area": "Psicologica",
                "Nome": "PSICOLOGIA DEI PROCESSI SOCIALI, DECISIONALI E DEI COMPORTAMENTI ECONOMICI",
                "Dipartimento": "DIPARTIMENTO DI PSICOLOGIA",
                "tipo": "Corso di Laurea Magistrale",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[F5103P] PSICOLOGIA DELLO SVILUPPO E DEI PROCESSI EDUCATIVI",
                "Area": "Psicologica",
                "Nome": "PSICOLOGIA DELLO SVILUPPO E DEI PROCESSI EDUCATIVI",
                "Dipartimento": "DIPARTIMENTO DI PSICOLOGIA",
                "tipo": "Corso di Laurea Magistrale",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[F5104P] PSICOLOGIA CLINICA E NEUROPSICOLOGIA NEL CICLO DI VITA",
                "Area": "Psicologica",
                "Nome": "PSICOLOGIA CLINICA E NEUROPSICOLOGIA NEL CICLO DI VITA",
                "Dipartimento": "DIPARTIMENTO DI PSICOLOGIA",
                "tipo": "Corso di Laurea Magistrale",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[F5301Q] SCIENZA DEI MATERIALI",
                "Area": "Scientifica",
                "Nome": "SCIENZA DEI MATERIALI",
                "Dipartimento": "DIPARTIMENTO DI SCIENZA DEI MATERIALI",
                "tipo": "Corso di Laurea Magistrale",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[F5401Q] SCIENZE E TECNOLOGIE CHIMICHE",
                "Area": "Scientifica",
                "Nome": "SCIENZE E TECNOLOGIE CHIMICHE",
                "Dipartimento": "DIPARTIMENTO DI SCIENZE DELL AMBIENTE E DELLA TERRA (DEPARTMENT OF EARTH AND ENVIRONMENTAL SCIENCES - DISAT)",
                "tipo": "Corso di Laurea Magistrale",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[F5602M] INTERNATIONAL ECONOMICS - ECONOMIA INTERNAZIONALE",
                "Area": "Economico statistica",
                "Nome": "INTERNATIONAL ECONOMICS - ECONOMIA INTERNAZIONALE",
                "Dipartimento": "DIPARTIMENTO DI ECONOMIA, METODI QUANTITATIVI E STRATEGIE DI IMPRESA",
                "tipo": "Corso di Laurea Magistrale",
                "Lingua": "Inglese",
                "disattivato": 0
            },
            {
                "cds": "[F5701R] FORMAZIONE E SVILUPPO DELLE RISORSE UMANE",
                "Area": "Formazione",
                "Nome": "FORMAZIONE E SVILUPPO DELLE RISORSE UMANE",
                "Dipartimento": "DIPARTIMENTO DI SCIENZE UMANE PER LA FORMAZIONE",
                "tipo": "Corso di Laurea Magistrale",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[F5801Q] ASTROFISICA E FISICA DELLO SPAZIO",
                "Area": "Scientifica",
                "Nome": "ASTROFISICA E FISICA DELLO SPAZIO",
                "Dipartimento": "DIPARTIMENTO DI FISICA",
                "tipo": "Corso di Laurea Magistrale",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[F6302N] MANAGEMENT E DESIGN DEI SERVIZI",
                "Area": "Economico statistica",
                "Nome": "MANAGEMENT E DESIGN DEI SERVIZI",
                "Dipartimento": "DIPARTIMENTO DI SCIENZE ECONOMICO-AZIENDALI E DIRITTO PER L ECONOMIA",
                "tipo": "Corso di Laurea Magistrale",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[F7401Q] SCIENZE E TECNOLOGIE GEOLOGICHE",
                "Area": "Scientifica",
                "Nome": "SCIENZE E TECNOLOGIE GEOLOGICHE",
                "Dipartimento": "DIPARTIMENTO DI SCIENZE DELL AMBIENTE E DELLA TERRA (DEPARTMENT OF EARTH AND ENVIRONMENTAL SCIENCES - DISAT)",
                "tipo": "Corso di Laurea Magistrale",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[F7501Q] SCIENZE E TECNOLOGIE PER L'AMBIENTE E IL TERRITORIO",
                "Area": "Scientifica",
                "Nome": "SCIENZE E TECNOLOGIE PER L'AMBIENTE E IL TERRITORIO",
                "Dipartimento": "DIPARTIMENTO DI SCIENZE DELL AMBIENTE E DELLA TERRA (DEPARTMENT OF EARTH AND ENVIRONMENTAL SCIENCES - DISAT)",
                "tipo": "Corso di Laurea Magistrale",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[F7502Q] MARINE SCIENCES - SCIENZE MARINE",
                "Area": "Scientifica",
                "Nome": "MARINE SCIENCES - SCIENZE MARINE",
                "Dipartimento": "DIPARTIMENTO DI SCIENZE DELL AMBIENTE E DELLA TERRA (DEPARTMENT OF EARTH AND ENVIRONMENTAL SCIENCES - DISAT)",
                "tipo": "Corso di Laurea Magistrale",
                "Lingua": "Inglese",
                "disattivato": 0
            },
            {
                "cds": "[F7601M] ECONOMIA DEL TURISMO",
                "Area": "Economico statistica",
                "Nome": "ECONOMIA DEL TURISMO",
                "Dipartimento": "DIPARTIMENTO DI ECONOMIA, METODI QUANTITATIVI E STRATEGIE DI IMPRESA",
                "tipo": "Corso di Laurea Magistrale",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[F7701M] SCIENZE ECONOMICO-AZIENDALI",
                "Area": "Economico statistica",
                "Nome": "SCIENZE ECONOMICO-AZIENDALI",
                "Dipartimento": "DIPARTIMENTO DI SCIENZE ECONOMICO-AZIENDALI E DIRITTO PER L ECONOMIA",
                "tipo": "Corso di Laurea Magistrale",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[F7702M] MARKETING E MERCATI GLOBALI",
                "Area": "Economico statistica",
                "Nome": "MARKETING E MERCATI GLOBALI",
                "Dipartimento": "DIPARTIMENTO DI ECONOMIA, METODI QUANTITATIVI E STRATEGIE DI IMPRESA",
                "tipo": "Corso di Laurea Magistrale",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[F8202B] SCIENZE STATISTICHE ED ECONOMICHE",
                "Area": "Economico statistica",
                "Nome": "SCIENZE STATISTICHE ED ECONOMICHE",
                "Dipartimento": "DIPARTIMENTO DI ECONOMIA, METODI QUANTITATIVI E STRATEGIE DI IMPRESA",
                "tipo": "Corso di Laurea Magistrale",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[F8203B] BIOSTATISTICA",
                "Area": "Economico statistica",
                "Nome": "BIOSTATISTICA",
                "Dipartimento": "DIPARTIMENTO DI STATISTICA E METODI QUANTITATIVI",
                "tipo": "Corso di Laurea Magistrale",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[F8204B] SCIENZE STATISTICHE ED ECONOMICHE",
                "Area": "Economico statistica",
                "Nome": "SCIENZE STATISTICHE ED ECONOMICHE",
                "Dipartimento": "DIPARTIMENTO DI ECONOMIA, METODI QUANTITATIVI E STRATEGIE DI IMPRESA",
                "tipo": "Corso di Laurea Magistrale",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[F8501R] SCIENZE PEDAGOGICHE",
                "Area": "Formazione",
                "Nome": "SCIENZE PEDAGOGICHE",
                "Dipartimento": "DIPARTIMENTO DI SCIENZE UMANE PER LA FORMAZIONE",
                "tipo": "Corso di Laurea Magistrale",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[F8701N] PROGRAMMAZIONE E GESTIONE DELLE POLITICHE E  DEI SERVIZI SOCIALI",
                "Area": "Sociologica",
                "Nome": "PROGRAMMAZIONE E GESTIONE DELLE POLITICHE E  DEI SERVIZI SOCIALI",
                "Dipartimento": "DIPARTIMENTO DI SOCIOLOGIA E RICERCA SOCIALE",
                "tipo": "Corso di Laurea Magistrale",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[F8801N] SOCIOLOGIA",
                "Area": "Sociologica",
                "Nome": "SOCIOLOGIA",
                "Dipartimento": "DIPARTIMENTO DI SOCIOLOGIA E RICERCA SOCIALE",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[F9201P] TEORIA E TECNOLOGIA DELLA COMUNICAZIONE",
                "Area": "Scientifica",
                "Nome": "TEORIA E TECNOLOGIA DELLA COMUNICAZIONE",
                "Dipartimento": "DIPARTIMENTO DI INFORMATICA, SISTEMISTICA E COMUNICAZIONE",
                "tipo": "Corso di Laurea Magistrale",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[G8501R] SCIENZE DELLA FORMAZIONE PRIMARIA",
                "Area": "Formazione",
                "Nome": "SCIENZE DELLA FORMAZIONE PRIMARIA",
                "Dipartimento": "DIPARTIMENTO DI SCIENZE UMANE PER LA FORMAZIONE",
                "tipo": "Laurea Magistrale Ciclo Unico 5 anni",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[H4101D] MEDICINA E CHIRURGIA",
                "Area": "Medica",
                "Nome": "MEDICINA E CHIRURGIA      ",
                "Dipartimento": "DIPARTIMENTO DI MEDICINA E CHIRURGIA (SCHOOL OF MEDICINE AND SURGERY)",
                "tipo": "Laurea Magistrale Ciclo Unico 6 anni",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[H4601D] ODONTOIATRIA E PROTESI DENTARIA",
                "Area": "Medica",
                "Nome": "ODONTOIATRIA E PROTESI DENTARIA",
                "Dipartimento": "DIPARTIMENTO DI MEDICINA E CHIRURGIA (SCHOOL OF MEDICINE AND SURGERY)",
                "tipo": "Laurea Magistrale Ciclo Unico 6 anni  ",
                "Lingua": null,
                "disattivato": 0
            },
            {
                "cds": "[I0101D] INFERMIERISTICA (ABILITANTE ALLA PROFESSIONE SANITARIA DI INFERMIERE)",
                "Area": "Medica",
                "Nome": "INFERMIERISTICA (ABILITANTE ALLA PROFESSIONE SANITARIA DI INFERMIERE)",
                "Dipartimento": "DIPARTIMENTO DI MEDICINA E CHIRURGIA (SCHOOL OF MEDICINE AND SURGERY)",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[I0102D] OSTETRICIA (ABILITANTE ALLA PROFESSIONE SANITARIA DI OSTETRICA/O)",
                "Area": "Medica",
                "Nome": "OSTETRICIA (ABILITANTE ALLA PROFESSIONE SANITARIA DI OSTETRICA/O)",
                "Dipartimento": "DIPARTIMENTO DI MEDICINA E CHIRURGIA (SCHOOL OF MEDICINE AND SURGERY)",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[I0201D] FISIOTERAPIA (ABILITANTE ALLA PROFESSIONE SANITARIA DI FISIOTERAPISTA)",
                "Area": "Medica",
                "Nome": "FISIOTERAPIA (ABILITANTE ALLA PROFESSIONE SANITARIA DI FISIOTERAPISTA)",
                "Dipartimento": "DIPARTIMENTO DI MEDICINA E CHIRURGIA (SCHOOL OF MEDICINE AND SURGERY)",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[I0202D] TERAPIA DELLA NEURO E PSICOMOTRICITÀ DELL'ETÀ EVOLUTIVA (ABILITANTE ALLA PROFESSIONE SANITARIA DI TERAPISTA DELLA NEURO E PSICOMOTRICITÀ DELL'ETÀ EVOLUTIVA)",
                "Area": "Medica",
                "Nome": "TERAPIA DELLA NEURO E PSICOMOTRICITÀ DELL'ETÀ EVOLUTIVA (ABILITANTE ALLA PROFESSIONE SANITARIA DI TERAPISTA DELLA NEURO E PSICOMOTRICITÀ DELL'ETÀ EVOLUTIVA)",
                "Dipartimento": "DIPARTIMENTO DI MEDICINA E CHIRURGIA (SCHOOL OF MEDICINE AND SURGERY)",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[I0301D] IGIENE DENTALE (ABILITANTE ALLA PROFESSIONE SANITARIA DI IGIENISTA DENTALE)",
                "Area": "Medica",
                "Nome": "IGIENE DENTALE (ABILITANTE ALLA PROFESSIONE SANITARIA DI IGIENISTA DENTALE)",
                "Dipartimento": "DIPARTIMENTO DI MEDICINA E CHIRURGIA (SCHOOL OF MEDICINE AND SURGERY)",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[I0302D] TECNICHE DI LABORATORIO BIOMEDICO (ABILITANTE ALLA PROFESSIONE SANITARIA DI TECNICO DI LABORATORIO BIOMEDICO)",
                "Area": "Medica",
                "Nome": "TECNICHE DI LABORATORIO BIOMEDICO (ABILITANTE ALLA PROFESSIONE SANITARIA DI TECNICO DI LABORATORIO BIOMEDICO)",
                "Dipartimento": "DIPARTIMENTO DI MEDICINA E CHIRURGIA (SCHOOL OF MEDICINE AND SURGERY)",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[I0303D] TECNICHE DI RADIOLOGIA MEDICA, PER IMMAGINI E RADIOTERAPIA (ABILITANTE ALLA PROFESSIONE SANITARIA DI TECNICO DI RADIOLOGIA MEDICA, PER IMMAGINI E RADIOTERAPIA )",
                "Area": "Medica",
                "Nome": "TECNICHE DI RADIOLOGIA MEDICA, PER IMMAGINI E RADIOTERAPIA (ABILITANTE ALLA PROFESSIONE SANITARIA DI TECNICO DI RADIOLOGIA MEDICA, PER IMMAGINI E RADIOTERAPIA)",
                "Dipartimento": "DIPARTIMENTO DI SCIENZE DELLA SALUTE",
                "tipo": "Laurea triennale (DM 270)",
                "Lingua": "Italiano",
                "disattivato": 0
            },
            {
                "cds": "[K0101D] SCIENZE INFERMIERISTICHE E OSTETRICHE",
                "Area": "Medica",
                "Nome": "SCIENZE INFERMIERISTICHE E OSTETRICHE",
                "Dipartimento": "DIPARTIMENTO DI MEDICINA E CHIRURGIA (SCHOOL OF MEDICINE AND SURGERY)",
                "tipo": "Corso di Laurea Magistrale",
                "Lingua": "Italiano",
                "disattivato": 0
            }
        ];
        $scope.area_dip = [
            ['Economico statistica', 'DIPARTIMENTO DI ECONOMIA, METODI QUANTITATIVI E STRATEGIE DI IMPRESA'],
            ['Economico statistica', 'DIPARTIMENTO DI SCIENZE ECONOMICO-AZIENDALI E DIRITTO PER L ECONOMIA'],
            ['Economico statistica', 'DIPARTIMENTO DI STATISTICA E METODI QUANTITATIVI'],
            ['Formazione', 'DIPARTIMENTO DI SCIENZE UMANE PER LA FORMAZIONE'],
            ['Giuridica', 'DIPARTIMENTO DI GIURISPRUDENZA (SCHOOL OF LAW)'],
            ['Medica', 'DIPARTIMENTO DI MEDICINA E CHIRURGIA (SCHOOL OF MEDICINE AND SURGERY)'],
            ['Medica', 'DIPARTIMENTO DI SCIENZE DELLA SALUTE'],
            ['Psicologica', 'DIPARTIMENTO DI PSICOLOGIA'],
            ['Scientifica', 'DIPARTIMENTO DI BIOTECNOLOGIE E BIOSCIENZE'],
            ['Scientifica', 'DIPARTIMENTO DI FISICA'],
            ['Scientifica', 'DIPARTIMENTO DI INFORMATICA, SISTEMISTICA E COMUNICAZIONE'],
            ['Scientifica', 'DIPARTIMENTO DI MATEMATICA E APPLICAZIONI'],
            ['Scientifica', 'DIPARTIMENTO DI SCIENZA DEI MATERIALI'],
            ['Scientifica', 'DIPARTIMENTO DI SCIENZE DELL AMBIENTE E DELLA TERRA (DEPARTMENT OF EARTH AND ENVIRONMENTAL SCIENCES - DISAT)'],
            ['Sociologica', 'DIPARTIMENTO DI SOCIOLOGIA E RICERCA SOCIALE']
        ];

        $scope.selCds = [];

        $scope.slider = {
            value: 50,
            options: {
                floor: 0,
                ceil: 100,
                step: 1,
                precision: 1,
                translate: function(value) {
                    return 'peso voto: ' + value +"% - " + (100-value) + "% :peso giorni "
                },
                onChange: function() {
                    $scope.setPesiViz5($scope.slider.value/100)
                },
            }
        };

        $scope.pesoViz5 = $scope.slider.value;

        $scope.clearCdsName = function(s) {
            const l = 65;
            if (s.length > l){
                return s.slice(0, l-4) + "..."
            }
            return s
        };

        let viz1;
        $scope.initViz1 = function() {
            let containerDiv = document.getElementById("containerQuery1"),
                url = "https://public.tableau.com/views/Report-COVID19/Foglio1?:language=it-IT&publish=yes&:display_count=n&:origin=viz_share_link";
            viz1  = new tableau.Viz(containerDiv, url);
        };

        let viz2;
        $scope.initViz2 = function() {
            let containerDiv = document.getElementById("containerQuery2"),
                url = "https://public.tableau.com/views/Report-COVID19/Foglio2?:language=it-IT&publish=yes&:display_count=n&:origin=viz_share_link";
            viz2 = new tableau.Viz(containerDiv, url);

        };

        let viz3;
        $scope.initQueryRT = function() {
            let containerDiv = document.getElementById("containerQueryRT"),
                url = "https://public.tableau.com/views/Report-COVID19/dash_rt_medio";
            viz3 = new tableau.Viz(containerDiv, url);
        };

        let viz4;
        $scope.initQuery4 = function() {
            let containerDiv = document.getElementById("containerQuery4"),
                url = "https://public.tableau.com/views/homework-BI/Sheet6";
            viz4 = new tableau.Viz(containerDiv, url);
        };

        let viz5;
        $scope.initQuery5 = function() {
            let containerDiv = document.getElementById("containerQuery5"),
                url = "https://public.tableau.com/views/homework-BI/Dashboard5";
            viz5 = new tableau.Viz(containerDiv, url);
        };

        let viz6;
        $scope.initQuery6= function() {
            let containerDiv = document.getElementById("containerQuery6"),
                url = "https://public.tableau.com/views/homework-BI/Dashboard4";
            viz6 = new tableau.Viz(containerDiv, url);
        };

        let viz7;
        $scope.initQuery7 = function() {
            let containerDiv = document.getElementById("containerQuery7"),
                url = "https://public.tableau.com/views/homework-BI/Sheet10";
            viz7 = new tableau.Viz(containerDiv, url);
        };

        $scope.chooseCds = function() {
            viz1.getWorkbook().getActiveSheet().applyFilterAsync("CDS", $scope.selCds, tableau.FilterUpdateType.REPLACE);
            viz2.getWorkbook().getActiveSheet().applyFilterAsync("Corso di studi", $scope.selCds, tableau.FilterUpdateType.REPLACE);
            viz3.getWorkbook().getActiveSheet().getWorksheets()[0].applyFilterAsync("Cds", $scope.selCds, tableau.FilterUpdateType.REPLACE);
            viz4.getWorkbook().getActiveSheet().applyFilterAsync("Cds", $scope.selCds, tableau.FilterUpdateType.REPLACE);
            viz5.getWorkbook().getActiveSheet().getWorksheets()[0].applyFilterAsync("Cds", $scope.selCds, tableau.FilterUpdateType.REPLACE);
            viz6.getWorkbook().getActiveSheet().getWorksheets()[0].applyFilterAsync("Cds", $scope.selCds, tableau.FilterUpdateType.REPLACE);
            viz7.getWorkbook().getActiveSheet().applyFilterAsync("Cds", $scope.selCds, tableau.FilterUpdateType.REPLACE);
            $scope.setParameterViz(viz3,'Limit', Math.min(10, $scope.selCds.length));
        };

        $scope.setParameterViz = function (viz, param, value) {
            viz.getWorkbook().changeParameterValueAsync(param, value);
        };

        $scope.setPesiViz5 = function(value) {
            viz5.getWorkbook().changeParameterValueAsync('peso voto', String(value).replace(".", ","));
            viz5.getWorkbook().changeParameterValueAsync('peso giorni', String(1-value).replace(".", ","));
        }
    });
