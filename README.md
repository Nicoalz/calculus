# calculus

C'est un mini-jeu de calcul mental en javascript. <br> 
Choissisez une difficulté puis cliquez sur la bonne réponse. <br>
Il y a 10 questions. <br>

## Jouer :

Vous pouvez tester ce mini-jeu en cliquant [ici](https://calculus.nicolasbordeaux.tk/)

## Explications :

Chaque difficulté est composée de 3 paramètres : <br>
les opérateurs possibles, le nombre minimum et le nombre maximum.
- Facile : "+" et "-" entre 1 et 10
- Moyen : "+" et "-" entre 1 et 50
- Difficile : "+", "-", "*", "/" entre 1 et 100

<hr>

Ma fonction generateQuestion prend donc en paramètres les opérateurs, la valeur min et la valeur max.<br>
Je génére aléatoirement deux nombres, qui sont compris entre la valeur min et la valeur max.<br>
Puis je choisis aléatoirement un opérateur entre les opérateurs disponibles. <br> 

Ma question est donc : "nombre1" "operateur" "nombre2" <br>

En mode facile et moyen la réponse est forcément un entier positif.<br>
En mode difficile la réponse reste un entier mais peut être positive ou négative.<br>

J'ai donc ma question et ma réponse, je dois maintenant générer mes propositions.

<hr>

Ma fonction generatePropositions prend en paramètres la réponse à la question définie.<br>

A l'originie je souhaitais générer 3 propositions aléatoires qui sont comprises entre (réponse-5) et (réponse+5) mais la bonne réponse était facilement trouvable en calculant seulement les deux derniers chiffres de chaque nombre (exemple : 74 * 53 = 3922. On calcule 4 * 3 = 12. On pouvait garder seulement la réponse qui finit par un 2 ) <br>
J'ai donc décidé de garder 2 propositions comme cela et de générer une troisième réponse qui correspond à la bonne réponse + 10. <br>
Si une des propositions correspond à la bonne réponse ou a déjà été générée, je ne la rajoute pas dans les propisitions et j'en génère une nouvelle.

Ensuite je mélange les propositions, puis je les affiche.