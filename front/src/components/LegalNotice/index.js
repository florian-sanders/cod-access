import React, { useEffect } from 'react';
import './styles.scss';

const LegalNotice = () => {
  useEffect(() => {
    document.title = 'Mentions légales - Cod\'Access';
  });

  return (
    <section className="legal-notice">
      <h1 className="title-h1 center">Mentions Légales</h1>
      <p className="legal-notice__text">Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs et visiteurs du site : www.codaccess.com les informations suivantes :</p>
      <h2 className="title-h2">1. Informations légales :</h2>
      <ul className="legal-notice__list">
        <li>Statut du propriétaire : particulier</li>
        <li>Le Propriétaire est : team a11y</li>
        <li>Adresse postale du propriétaire : in the cloud 75000 paris</li>
        <li>Le Créateur du site est : a11y-team.com</li>
        <li>Le Responsable de la  publication est : a11y-team</li>
        <li>Contacter le responsable de la publication : cod.access11@gmail.com</li>
        <li>Le responsable de la publication est une personne physique</li>
        <li>Le Webmaster est  : a11y-team</li>
        <li>Contacter le Webmaster :  cod.access11@gmail.com</li>
        <li>L’hebergeur du site est : aws amazon 75000 paris</li>
      </ul>

      <h2 className="title-h2">2. Présentation et principe :</h2>
      <p className="legal-notice__text">
        Est désigné ci-après : Utilisateur, tout internaute se connectant et utilisant le site susnommé : www.codaccess.com.
        Le site www.codaccess.com regroupe un ensemble de services, dans l'état,  mis à la disposition des utilisateurs. Il est ici précisé que ces derniers doivent rester courtois et faire preuve de bonne foi tant envers les autres utilisateurs qu'envers le webmaster du site www.codaccess.com. Le site www.codaccess.com est mis à jour régulièrement par a11y-team.<br></br>
        Team a11y s’efforce de fournir sur le site www.codaccess.com des informations les plus précises possibles (sous réserve de modifications apportées depuis leur mise en ligne), mais ne saurait garantir l'exactitude, la complétude et l'actualité des informations diffusées sur son site, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations. En conséquence, l'utilisateur reconnaît utiliser ces informations données (à titre indicatif, non exhaustives et susceptibles d'évoluer) sous sa responsabilité exclusive.
      </p>

      <h2 className="title-h2">3. Accessibilité :</h2>
      <p className="legal-notice__text">
        Le site www.codaccess.com est par principe accessible aux utilisateurs 24/24h, 7/7j, sauf interruption, programmée ou non, pour les besoins de sa maintenance ou en cas de force majeure. En cas d’impossibilité d’accès au service, www.codaccess.com s’engage à faire son maximum afin de rétablir l’accès au service et s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention.  N’étant soumis qu’à une obligation de moyen, www.codaccess.com ne saurait être tenu pour responsable de tout dommage, quelle qu’en soit la nature, résultant d’une indisponibilité du service.
      </p>

      <h2 className="title-h2">4. Propriété intellectuelle :</h2>
      <p className="legal-notice__text">
        La team a11y est propriétaire exclusif de tous les droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, tant sur la structure que sur les textes, images, graphismes, logo, icônes, sons, logiciels…
        Toute reproduction totale ou partielle du site www.codaccess.com, représentation, modification, publication, adaptation totale ou partielle de l'un quelconque de ces éléments, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de team a11y, propriétaire du site à l'email : cod.access11@gmail.com, à défaut elle sera considérée comme constitutive d’une contrefaçon et passible de poursuite conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
      </p>

      <h2 className="title-h2">5. Liens hypertextes et cookies :</h2>
      <p className="legal-notice__text">
        Le site www.codaccess.com contient un certain nombre de liens hypertextes vers d’autres sites (partenaires, informations …) mis en place avec l’autorisation de team a11y. Cependant, team a11y n’a pas la possibilité de vérifier l'ensemble du contenu des sites ainsi visités et décline donc toute responsabilité de ce fait quand aux risques éventuels de contenus illicites.<br></br>
        L’utilisateur est informé que lors de ses visites sur le site www.codaccess.com, un ou des cookies sont susceptibles de s’installer automatiquement sur son ordinateur par l'intermédiaire de son logiciel de navigation. Un cookie est un bloc de données qui ne permet pas d'identifier l'utilisateur, mais qui enregistre des informations relatives à la navigation de celui-ci sur le site. <br></br>
        Le paramétrage du logiciel de navigation permet d’informer de la présence de cookie et éventuellement, de la refuser de la manière décrite à l’adresse suivante : www.cnil.fr.
      </p>
      <p className="legal-notice__text">
        L’utilisateur peut toutefois configurer le navigateur de son ordinateur pour refuser l’installation des cookies, sachant que le refus d'installation d'un cookie peut entraîner l’impossibilité d’accéder à certains services. Pour tout bloquage des cookies, tapez dans votre moteur de recherche : bloquage des cookies sous IE ou firefox et suivez les instructions en fonction de votre version.
      </p>

      <h2 className="title-h2">6. Protection des biens et des personnes - gestion des données personnelles :</h2>
      <p className="legal-notice__text">
        En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l'article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.<br></br>
        Sur le site www.codaccess.com, team a11y ne collecte des informations personnelles ( suivant l'article 4 loi n°78-17 du 06 janvier 1978) relatives à l'utilisateur que pour le besoin de certains services proposés par le site www.codaccess.com. <br></br>L'utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu'il procède par lui-même à leur saisie. Il est alors précisé à l'utilisateur du site www.codaccess.com l’obligation ou non de fournir ces informations.<br></br>
        Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, tout utilisateur dispose d’un droit d’accès, de rectification, de suppression et d’opposition aux données personnelles le concernant.
      </p>
      <p className="legal-notice__text">
        Pour l’exercer, adressez votre demande à www.codaccess.com par email : cod.access11@gmail.com ou par écrit dûment signée, accompagnée d’une copie du titre d’identité avec signature du titulaire de la pièce, en précisant l’adresse à laquelle la réponse doit être envoyée.
      </p>
      <p className="legal-notice__text">
        Aucune information personnelle de l'utilisateur du site www.codaccess.com n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l'hypothèse du rachat du site www.codaccess.com et de ses droits autorise team a11y à transmettre les dites informations à l'éventuel acquéreur qui serait à son tour tenu à la même obligation de conservation et de modification des données vis à vis de l'utilisateur du site www.codaccess.com.
        Le site www.codaccess.com est en conformité avec le RGPD voir notre politique RGPD  pas de rgpd.
      </p>
      <p className="legal-notice__text">
        Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.
      </p>
    </section>
  );
};

export default LegalNotice;
