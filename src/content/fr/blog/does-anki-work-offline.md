---
title: "Anki fonctionne-t-il hors ligne en 2026 ? Ordinateur, iPhone, Android et synchronisation"
description: "Oui : les applications Anki installées sur ordinateur, iPhone, iPad et Android permettent d’utiliser une collection locale hors ligne. Découvrez ce qui nécessite internet, comment synchroniser ensuite et comment préparer les médias."
date: "2026-08-16"
image: "/blog/does-anki-work-offline.png"
keywords:
  - "Anki fonctionne-t-il hors ligne"
  - "utiliser Anki hors ligne"
  - "AnkiMobile hors ligne"
  - "AnkiDroid hors ligne"
  - "synchronisation Anki hors ligne"
  - "AnkiWeb hors ligne"
  - "utiliser Anki sans internet"
---

Anki n’a pas besoin de contacter un serveur pour afficher votre prochaine carte. **Les applications Anki installées fonctionnent hors ligne en 2026 :** Anki sur Windows, macOS et Linux ; AnkiMobile sur iPhone et iPad ; et AnkiDroid sur Android. Chacune utilise une collection enregistrée sur l’appareil. Vous pouvez donc réviser, créer des notes et effectuer les modifications courantes sans internet.

Un point peut facilement vous prendre au dépourvu : AnkiWeb fonctionne différemment. C’est le service de révision et de synchronisation accessible dans un navigateur, pas une application Anki utilisable hors ligne. Une application installée ne peut par ailleurs utiliser que les paquets et les médias déjà présents sur cet appareil précis.

**Informations vérifiées le 16 août 2026.**

![Une personne effectuant des recherches sur le terrain ajoute une entrée à une archive locale de photos, de sons et de textes alors que la liaison radio en montagne est coupée](/blog/does-anki-work-offline.png)

## La réponse rapide, application par application

Le [site officiel d’Anki](https://apps.ankiweb.net/) présente l’application pour ordinateur, AnkiMobile pour iOS, AnkiDroid pour Android et AnkiWeb comme les éléments d’un même écosystème. Mais leurs possibilités hors ligne diffèrent.

| Application ou service | Fonctionne hors ligne ? | Ce que vous pouvez faire sans internet | Ce qui nécessite une connexion |
| --- | --- | --- | --- |
| **Anki sur ordinateur**, sous Windows, macOS ou Linux | **Oui.** La collection et le dossier des médias sont stockés localement. | Réviser les cartes, ajouter des notes, modifier le contenu des notes et utiliser les médias déjà enregistrés sur l’ordinateur. | Télécharger des paquets partagés, synchroniser avec AnkiWeb et récupérer les ressources qu’une carte ou un module complémentaire demande à un service en ligne. |
| **AnkiMobile** sur iPhone ou iPad | **Oui.** L’application conserve une collection locale. | Réviser les cartes locales, ajouter des notes, modifier le contenu des notes, écouter les sons et afficher les images déjà présents sur l’appareil. | Terminer la synchronisation initiale de la collection et des médias, utiliser AnkiWeb et accéder aux ressources distantes. |
| **AnkiDroid** sur Android | **Oui.** AnkiDroid conserve sa collection sur l’appareil Android. | Réviser les cartes locales, ajouter des notes, modifier le contenu des notes et utiliser les médias présents sur l’appareil. | Synchroniser ou télécharger les éléments manquants, récupérer des paquets partagés et utiliser les fonctionnalités des cartes qui dépendent du réseau. |
| **AnkiWeb** dans un navigateur | **Aucun mode hors ligne.** C’est un service de révision et de synchronisation en ligne. | Ne comptez pas l’utiliser une fois la connexion coupée. | Disposer d’une connexion internet ou passer à une application installée et préparée à l’avance. |

Vous pouvez donc utiliser Anki hors ligne si vous utilisez une application installée qui contient déjà la bonne collection. AnkiWeb, dans un navigateur, nécessite toujours une connexion.

## Les révisions et les modifications hors ligne restent d’abord sur l’appareil

Quand vous répondez aux cartes hors ligne, Anki enregistre ces révisions dans la collection locale. La planification des prochaines révisions se poursuit à partir de cet état local. Les nouvelles notes et les modifications courantes sont elles aussi enregistrées localement. Rien n’apparaît sur un autre appareil tant que vous ne vous êtes pas reconnecté et n’avez pas synchronisé.

La synchronisation avec AnkiWeb est facultative si vous n’étudiez que sur un appareil. Elle sert à transférer les changements de la collection entre les appareils. Le [manuel de synchronisation d’Anki](https://docs.ankiweb.net/syncing.html) indique que, dans des circonstances normales, les révisions et les modifications de notes effectuées à plusieurs endroits peuvent être fusionnées. Si la même carte a été révisée sur deux appareils, les deux réponses restent dans son historique de révision, et l’état correspondant à la réponse la plus récente est retenu.

Cette routine permet de limiter les conflits de synchronisation évitables :

1. Synchronisez l’appareil avant de quitter une connexion fiable.
2. Révisez, ajoutez des notes ou corrigez le texte des cartes hors ligne.
3. Reconnectez-vous et synchronisez cet appareil avant de reprendre sur un autre.
4. Laissez l’autre appareil terminer sa propre synchronisation avant d’y effectuer de nouvelles modifications.

Les changements de structure de la collection demandent plus de prudence. Ajouter un champ, supprimer un modèle de carte, modifier des types de notes et effectuer d’autres opérations similaires peut nécessiter une synchronisation à sens unique plutôt qu’une fusion. Une synchronisation à sens unique vous demande de conserver soit la collection locale, soit celle d’AnkiWeb ; les changements de l’autre côté peuvent être remplacés.

Vous pouvez donc continuer vos révisions et vos modifications de notes habituelles pendant un voyage, mais reportez les changements complexes de types de notes et de modèles si plusieurs appareils hors ligne accumulent des modifications différentes. Si Anki vous demande d’envoyer ou de télécharger une collection, prenez le temps d’identifier celle qui contient le travail à conserver avant de choisir le sens du transfert.

## Les médias ne sont locaux qu’une fois arrivés sur l’appareil

Anki stocke les sons et les images séparément des données de la collection. Sur ordinateur, la [documentation sur les médias](https://docs.ankiweb.net/media.html) explique que les fichiers joints ou collés dans une note sont copiés dans le dossier local `collection.media`. Une fois le fichier multimédia présent dans ce dossier, la carte n’a plus besoin d’internet pour le charger.

Le point fragile est la préparation. La synchronisation de la collection et celle des médias sont distinctes : les sons et les images peuvent encore être en cours de transfert alors que les cartes sont déjà visibles. Le [guide de synchronisation d’AnkiMobile](https://docs.ankimobile.net/syncing.html) prévient que des médias peuvent manquer tant que la première synchronisation n’est pas entièrement terminée. Voir tous les paquets dans la liste ne prouve pas qu’une collection riche en images ou en sons est prête.

Avant de passer hors ligne :

- synchronisez l’appareil sur lequel vous avez ajouté les médias ;
- attendez la fin de sa synchronisation des médias ;
- synchronisez l’appareil que vous emporterez et attendez aussi la fin du transfert ;
- ouvrez des cartes utilisant chacun des types d’images et de sons dont vous aurez besoin ;
- lancez la vérification des médias (**Check Media**), lorsqu’elle est disponible, pour repérer les notes qui font référence à des fichiers manquants.

Cette dernière vérification compte particulièrement avec les paquets partagés. Il arrive que l’auteur du paquet n’ait jamais inclus une image référencée. Répéter la synchronisation ne permettra alors pas de la télécharger.

Des médias locaux ne rendent pas toutes les cartes autonomes. Un modèle de carte peut faire référence à une image, un script, une police ou une autre ressource hébergée sur le web. Les dictionnaires en ligne, les téléchargements de paquets partagés et les modules complémentaires qui appellent des API distantes nécessitent toujours une connexion. La synthèse vocale dépend de la voix et de la plateforme : une voix système installée peut fonctionner hors ligne, tandis qu’une voix fournie par un service en ligne ne le peut pas. Testez la fonctionnalité précise dont vous avez besoin au lieu de supposer que toutes les voix ou tous les modules complémentaires se comportent de la même manière.

## Comment synchroniser Anki après un travail hors ligne

La synchronisation après un travail hors ligne se déroule en deux temps : vous travaillez localement, puis vous synchronisez par le réseau.

Quand la connexion revient, synchronisez l’appareil qui contient votre travail hors ligne. Attendez la fin de la synchronisation de la collection et de celle des médias. Synchronisez ensuite l’appareil suivant avant d’y réviser ou d’y effectuer des modifications. Cet ordre facilite l’identification de l’état le plus récent si Anki vous demande de résoudre un conflit.

Vérifiez le résultat au lieu de vous contenter de la fin de l’animation :

- retrouvez une note ajoutée hors ligne ;
- vérifiez qu’un champ modifié contient bien le nouveau texte ;
- consultez l’historique de révision ou l’échéance d’une carte à laquelle vous avez répondu ;
- ouvrez au moins une image ou un fichier audio nouvellement ajouté sur le second appareil.

Si vous avez modifié la même note sur deux appareils, relisez la note finale au lieu de supposer que la fusion a conservé la formulation souhaitée. Si un bouton de synchronisation rouge ou un choix d’envoi ou de téléchargement complet apparaît, ne cliquez pas par habitude. Un téléchargement complet remplace les modifications de la collection locale ; un envoi complet remplace la collection d’AnkiWeb avant que les autres appareils ne la téléchargent.

## Sans accès régulier à internet, transférez la collection sous forme de fichier

Anki permet de transférer une collection entre appareils sans accès régulier à AnkiWeb. Il s’agit toutefois de passer le relais d’un appareil à l’autre, pas de fusionner les changements de plusieurs appareils.

Le [guide de transfert de collection d’AnkiMobile](https://docs.ankimobile.net/collection-transfer.html) utilise un fichier `collection.colpkg` contenant tous les paquets et les informations de planification. Vous exportez la collection actuelle, transférez le fichier avec AirDrop ou le partage de fichiers, puis l’importez sur l’autre appareil. Le [manuel d’AnkiDroid](https://docs.ankidroid.org/manual.html) décrit une procédure similaire par USB pour transférer la collection entre Android et un ordinateur.

L’importation d’un fichier de collection complète remplace la collection déjà présente sur l’appareil de destination. Elle ne peut pas combiner deux collections modifiées indépendamment hors ligne. Désignez un appareil comme référence actuelle : exportez sa collection, importez-la sur l’appareil suivant, effectuez vos modifications sur celui-ci, puis transférez la collection plus récente sur le premier appareil avant de l’utiliser de nouveau.

Cette méthode est utile pour le travail de terrain, à bord d’un navire, sur un site isolé ou avec un réseau restreint, lorsqu’un transfert de fichier occasionnel est possible mais que la synchronisation régulière dans le cloud ne l’est pas. Pour un vol ou un trajet quotidien ordinaire, terminer la synchronisation AnkiWeb avant le départ est plus simple.

## La synchronisation n’est pas une sauvegarde d’Anki

La synchronisation aligne les données de vos appareils. Une suppression accidentelle ou une modification indésirable peut donc se propager à tous les appareils synchronisés.

Les applications Anki installées conservent des sauvegardes locales, mais les médias demandent une attention particulière. Par exemple, le [guide des préférences d’AnkiMobile](https://docs.ankimobile.net/preferences.html) indique que ses sauvegardes automatiques incluent les cartes et les statistiques, mais pas les sons ni les images. Un export complet de la collection incluant les médias répond à un autre besoin que la synchronisation et l’historique des sauvegardes automatiques.

Si reconstruire le paquet vous demanderait beaucoup de travail, conservez régulièrement un export complet avec les médias ailleurs que sur votre appareil du quotidien. Le [guide de sauvegarde des cartes de révision](/blog/how-to-back-up-flashcards/) explique plus largement comment compléter cette copie de restauration avec du texte dans un format portable et les fichiers sources d’origine.

## Un essai de dix minutes en mode avion

Faites cet essai sur l’ordinateur portable, le téléphone ou la tablette que vous emporterez. Un test réussi sur ordinateur ne vous dit rien sur l’état du dossier des médias de votre téléphone.

1. Avec une connexion internet, ouvrez l’application Anki installée et synchronisez. S’il s’agit d’un nouvel appareil, terminez d’abord le téléchargement initial de la collection.
2. Attendez la fin de la synchronisation des médias. Ne vous arrêtez pas dès que les noms des paquets apparaissent.
3. Ouvrez chaque paquet dont vous aurez besoin. Testez quelques cartes avec des images, des sons, des polices personnalisées et les comportements particuliers des modèles sur lesquels vous comptez.
4. Activez le mode avion ou désactivez autrement toutes les connexions réseau.
5. Fermez complètement Anki, rouvrez l’application et commencez à réviser le paquet dont vous avez besoin. Cette étape permet de vérifier que vous pouvez réviser hors ligne sans dépendre d’un écran déjà ouvert.
6. Révisez plusieurs cartes. Ajoutez une note de test clairement identifiable et effectuez une modification de texte sans conséquence.
7. Quittez l’application et rouvrez-la tout en restant hors ligne. Vérifiez que les révisions, la nouvelle note, la modification et les médias locaux sont toujours présents.
8. Essayez les dictionnaires, les voix de synthèse vocale et les modules complémentaires que vous prévoyez d’utiliser. Notez les éléments qui nécessitent le réseau.
9. Reconnectez-vous et synchronisez cet appareil. Attendez la fin des étapes de synchronisation de la collection et des médias.
10. Synchronisez un second appareil, puis vérifiez qu’il contient la note de test, la modification, l’état de révision et les médias avant de supprimer le contenu de test.

Ne profitez pas de cet essai pour remanier les types de notes sur deux appareils. Il sert à vérifier que tout fonctionne pour votre voyage : la bonne collection est présente localement, les médias importants s’ouvrent, le travail hors ligne est conservé après un redémarrage et la synchronisation ultérieure le transmet à l’autre appareil.

## Anki peut vous accompagner en voyage si vous préparez l’appareil

Les applications Anki installées conviennent bien aux voyages si vous souhaitez disposer d’une collection locale complète plutôt que d’un petit ensemble de cartes en cache. Les limites sont concrètes : la collection et les médias doivent être présents sur l’appareil à l’avance, AnkiWeb reste accessible uniquement en ligne et les fonctionnalités des cartes qui dépendent du réseau nécessitent toujours une connexion.

Si vous hésitez entre plusieurs outils pour voyager, le [comparatif des applications de cartes de révision hors ligne](/blog/best-offline-flashcards-app/) applique les mêmes tests de cartes, de modification, de progression, de médias et de synchronisation ultérieure à cinq produits. Si vous envisagez de changer d’outil d’étude pour d’autres raisons que la connectivité, consultez [Anki et Nibomo : le comparatif](/blog/anki-vs-flashcards-open-source-app/).

En pratique, Anki fonctionne hors ligne sur ordinateur, iPhone, iPad et Android dès que l’appareil concerné contient la collection et les médias dont vous avez besoin. Synchronisez avant de partir, faites un essai en mode avion et, au retour de la connexion, synchronisez d’abord l’appareil qui contient votre travail hors ligne.
