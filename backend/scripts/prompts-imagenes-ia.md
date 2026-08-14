# Prompts para generar las 54 imágenes con Leonardo.ai

Cada personaje trae su **prompt completo ya armado**, listo para copiar y pegar directo en
el campo de texto de Leonardo.ai — no hace falta combinar piezas a mano.

## Qué cambió (y por qué)

Dos problemas detectados generando las primeras imágenes:

1. **Todo salía demasiado musculoso.** El bloque de estilo nunca decía nada sobre tipo de
   cuerpo, así que el modelo asumía por defecto un físico de "héroe de gimnasio" para
   cualquier dios o personaje. Ahora **cada prompt especifica el tipo de cuerpo exacto** que
   le corresponde a ese personaje (esbelto, regio, enjuto, fornido, grácil, etc.), y el
   prompt negativo compartido además desalienta el físico genérico de culturista por defecto.
2. **Caos (y por extensión cualquier entidad primordial sin forma) salía como una persona.**
   El modelo, sin una negación explícita, interpreta "figura" como "persona con textura
   rara" en vez de algo verdaderamente no-humano. Los primordiales más abstractos (Caos,
   y en menor medida Urano y Gea) ahora tienen prompts mucho más insistentes en que **no
   es un ser humano**, sin rostro, sin género, sin anatomía reconocible — y traen además una
   línea de negative prompt extra solo para esa imagen.

## 1. Configuración recomendada en Leonardo.ai

- **Modelo**: "Leonardo Phoenix 1.0" (mejor detalle y coherencia de texto/formas) —
  si el resultado no convence, prueba "AlbedoBase XL" o "Leonardo Diffusion XL".
- **Preset/Style**: "Illustration" o "Dynamic" (evita "PhotoReal": queremos pintura, no foto).
- **Alchemy**: activado (mejora mucho el detalle y la iluminación).
- **Proporción**: 2:3 o 3:4 (vertical, para que entre el cuerpo completo).
- Genera 2-4 variaciones por personaje y quédate con la mejor — no siempre la primera es la mejor.
- Si el resultado sigue saliendo demasiado musculoso pese al prompt, sube el peso de esa
  parte de la frase con paréntesis, ej. `(slender graceful build:1.4)`.

## 2. Prompt negativo (pégalo una sola vez en el campo "Negative Prompt")

```
text, watermark, signature, blurry, extra limbs, extra fingers, deformed hands, cropped,
modern clothing, cartoon, anime, 3d render, low detail, plain background, photo, generic
bodybuilder physique, identical muscular build on every character, overly sexualized pose
```

Para **Caos** (ver más abajo), agrega además, solo para esa generación puntual:
`human, woman, man, person, human face, human body, human anatomy`

## 3. Después de generar cada imagen

1. Descarga el archivo.
2. Renómbralo exactamente como el `slug` indicado (ej. `zeus.jpg`).
3. Colócalo en `backend/public/images/mitologia-griega/`.

---

## 4. Prompts completos por personaje

### Dioses olímpicos

#### Afrodita (`afrodita.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, rose pink and warm gold and pearl white color palette, goddess of ethereal beauty with a graceful slender figure, flowing gown, standing near a giant seashell, doves fluttering around her, golden wavy hair, pearl jewelry
```

#### Apolo (`apolo.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, solar gold and amber and ivory white color palette, radiant young sun god with a lean elegant build (graceful, not bulky), laurel wreath crown, holding a lyre, solar glowing aura, classic Greek tunic
```

#### Ares (`ares.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, crimson red and iron black and bronze color palette, war god with a fierce expression and a battle-hardened muscular build, scarred skin, armor, crested helmet, spear in hand, burning battlefield background
```

#### Ártemis (`artemis.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, silver and moonlit blue and forest green color palette, lean athletic huntress goddess built for speed and agility (not bulky), short tunic, silver bow and quiver of arrows, a deer at her side, crescent moon in the background
```

#### Atenea (`atenea.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, bronze and royal blue and olive gold color palette, armored warrior goddess with a poised disciplined build (strategic and composed, not bulky), Corinthian helmet, shield bearing a gorgon head (the aegis), spear, an owl on her shoulder, olive branch
```

#### Deméter (`demeter.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, harvest amber and wheat gold and earthy brown color palette, mature serene goddess with a soft matronly figure, gown with wheat motifs, crown of wheat stalks, overflowing cornucopia of fruits
```

#### Dioniso (`dioniso.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep purple and wine burgundy and grape violet color palette, young charismatic wine god with a soft youthful build (not muscular), crown of grapevine leaves and grapes, half-open tunic, thyrsus staff, a leopard nearby
```

#### Hades (`hades.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, obsidian black and deep violet and pale spectral blue color palette, somber gaunt dark-bearded god with a lean austere build (not muscular), black robe with obsidian details, helm of invisibility in hand, Cerberus nearby, underworld background
```

#### Hefesto (`hefesto.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, molten orange and iron grey and ember red color palette, stocky bearded blacksmith god with a powerful uneven build and a slight limp, leather apron, hammer and anvil, forge sparks and fire, half-forged armor
```

#### Hera (`hera.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, ivory white and royal gold and sapphire blue color palette, regal majestic queen with a tall elegant statuesque figure (not muscular), golden diadem crown, gala gown, scepter in hand, a peacock with fanned tail beside her, throne in background
```

#### Hermes (`hermes.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, azure blue and silver and quicksilver white color palette, agile smiling young messenger god with a lithe slender build made for speed (not bulky), winged sandals, winged helmet, caduceus staff with intertwined serpents, traveler's tunic
```

#### Hestia (`hestia.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm amber and terracotta and firelight orange color palette, serene humble goddess with a soft gentle build, simple veil, warm-toned gown, holding a bowl with an eternal flame, cozy hearth atmosphere
```

#### Perséfone (`persefone.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, half pale spring lilac-pink and half obsidian black (deliberate contrast) color palette, slender ethereal woman blending spring beauty and underworld darkness, half floral spring gown, half dark shadowy cloak, pomegranate in hand
```

#### Poseidón (`poseidon.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep aquamarine and sea-foam white and dark teal color palette, sea god with a wave-like flowing beard and a powerful weathered build (mature, not bodybuilder), golden trident, scaled armor, a sea horse nearby, stormy ocean background
```

#### Zeus (`zeus.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, storm-cloud grey and electric blue-white and royal gold color palette, powerful older king with an imposing white beard and a commanding regal build (mature and dignified, not a bodybuilder), laurel crown, royal cloak, glowing lightning bolt in hand, majestic eagle beside him
```

### Titanes y primordiales

#### Cronos (`cronos.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, dark bronze and ash grey and faded gold color palette, ancient gaunt titanic figure with a severe weathered build (thin and time-worn, NOT muscular), severe expression, curved scythe, worn dark robes, hourglass and time motifs
```

#### Rea (`rea.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, terracotta earth and warm gold and moss green color palette, majestic maternal titaness with a soft dignified build, gown of stone and earth tones, mural crown shaped like towers, a lion at her side
```

#### Caos (`caos.jpg`)
```
Semi-realistic fantasy digital painting, dramatic chiaroscuro lighting, ancient Greek temple ruins dissolving into starlit void in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, void black and deep indigo and starlight silver color palette, absolutely NOT a person and NOT humanoid: a vast formless mass of swirling dark mist, void and newborn stars with no face, no gender, no limbs, no skin, no human anatomy whatsoever, pure abstract primordial matter with only the barest, faintest hint of a silhouette dissolving at the edges into starlit darkness, cosmic nebula texture throughout
```
**Negative prompt extra solo para esta imagen** (agrégalo al negative prompt compartido antes de generar): `human, woman, man, person, human face, human body, human anatomy, humanoid figure`

#### Gea (`gea.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, mossy green and umber brown and warm ochre color palette, colossal woman-shaped being made entirely of earth, roots, stone and vegetation (bark and soil texture standing in for skin, not smooth human skin), crown of trees and mountains, serene ancient face barely visible beneath moss and stone
```

#### Urano (`urano.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, midnight blue and silver starlight and deep indigo color palette, colossal man-shaped being made of night sky and constellations (his entire body is starfield and cosmic dust, not human musculature), hair like the Milky Way, starry cloak, towering formless presence above the world
```

### Héroes

#### Aquiles (`aquiles.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, bronze and crimson red and iron grey color palette, young battle-hardened muscular warrior (this build fits his legend), Greek armor, shield, sword raised, fierce expression, battlefield of Troy, emphasis on his vulnerable heel
```

#### Atalanta (`atalanta.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, forest green and bronze and earthy brown color palette, lean fast-runner woman mid-run or hunting pose (built for speed, not bulky), short practical tunic, bow, tied-back hair, forest background, the Calydonian boar in the distance
```

#### Belerofonte (`belerofonte.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, sky blue and cloud white and bronze color palette, young hero with a lean athletic build riding or standing beside Pegasus (white winged horse), spear in hand, the Chimera battling in the background
```

#### Heracles (`heracles.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, tawny lion gold-brown and bronze and deep red color palette, man of immense supernatural strength with an extreme heavily muscular build (this extreme build fits his legend specifically -- he is the exception, not the rule), Nemean lion pelt over shoulders and head like a hood, giant club
```

#### Ícaro (`icaro.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, sunset gold and ivory white and fading amber color palette, slender young man with wings of feathers and wax, flying near the sun, feathers beginning to melt and fall, sea far below
```

#### Jasón (`jason.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, sea blue and antique gold and weathered brown color palette, young cloaked hero with a lean princely build holding the glowing golden fleece, the ship Argo and the sea in the background
```

#### Odiseo (`odiseo.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, weathered sea grey and deep blue and leather brown color palette, mature cunning man with a wiry weathered build (a clever survivor, not a bodybuilder), traveler's cloak, bow in hand, ship and stormy sea in the background, calculating expression
```

#### Orfeo (`orfeo.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, violet and deep gold and twilight blue color palette, melancholic slender young musician with a graceful build, lyre in hand, playing before the gates of the underworld, animals and shadows listening enchanted
```

#### Perseo (`perseo.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, silver and bronze and midnight blue color palette, young hero with a lean agile build, winged sandals, polished mirror-like shield, holding Medusa's severed head, curved sword (harpe)
```

#### Teseo (`teseo.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, royal blue and bronze and stone grey color palette, determined hero with an athletic build emerging from a dark labyrinth, golden thread tied to his hand, bloodied sword, defeated minotaur behind him
```

### Monstruos

#### Argos Panoptes (`argos-panoptes.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, indigo and iridescent violet-blue and dark bronze color palette, giant humanoid whose entire skin is covered with dozens of open watchful eyes across his whole body, standing in a field, unsettling and inhuman despite the humanoid shape
```

#### Caribdis (`caribdis.jpg`)
```
Semi-realistic fantasy digital painting, dramatic chiaroscuro lighting, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep navy and sea-foam white and storm grey color palette, monstrous sea entity fused with a huge dark whirlpool, not humanoid at all -- jaws of water and foam forming a maw within the vortex, swallowing a ship
```

#### Cerbero (`cerbero.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, charcoal black and ember red and bone white color palette, colossal three-headed dog, fierce fangs, broken chains, dark fur, underworld fire in the background
```

#### Cíclopes (`ciclopes.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, earthy brown and volcanic rust orange and stone grey color palette, hulking giant with a single huge eye in the middle of his forehead, rough uneven brutish build (not a sculpted bodybuilder), holding a blacksmith's hammer, volcanic cave background
```

#### Equidna (`equidna.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep plum purple and iridescent violet-green scales and black color palette, woman from the waist up, giant serpent body from the waist down, seductive and dangerous expression, dark cave
```

#### Escila (`escila.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, stormy blue-grey and deep teal and foam white color palette, sea monster with a female torso and six ferocious canine heads emerging from her waist, tentacles, cliff and rough sea, distinctly monstrous rather than conventionally human
```

#### Esfinge (`esfinge.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, sandy gold and bronze and desert amber color palette, creature with the body of a lion, eagle wings, and the face and bust of an enigmatic woman, sitting on rocky ruins
```

#### Hidra de Lerna (`hidra-de-lerna.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, toxic green and black and swamp brown color palette, giant serpent with multiple (7-9) intertwined heads, venomous scales, dark swamp background, no humanoid features at all
```

#### Medusa (`medusa.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, emerald green and antique gold color palette (paleta exacta de la imagen de referencia que compartiste), slender woman with living venomous snakes for hair, stone-turning gaze, use the reference image you shared as a direct guide for style, pose and color
```

#### Minotauro (`minotauro.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, ochre red and bronze and dark umber color palette, creature with a powerfully built human body (this muscular build fits his bestial rage) and the head of a bull, nose ring, double-bladed axe (labrys), stone labyrinth walls
```

#### Polifemo (`polifemo.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, earthy brown and dull moss green and stone grey color palette, enormous brutal cyclops with a heavy uneven shepherd's build (not a sculpted physique), single eye, rustic shepherd appearance, club, cave with sheep, hostile expression
```

#### Quimera (`quimera.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, fire orange-red and goat brown and serpent black-green color palette, hybrid creature with a lion's head and forebody, a goat's head emerging from its back, a serpent tail, breathing fire, entirely non-humanoid
```

#### Sirenas (`sirenas.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, coral pink and aqua blue-green and pearl white color palette, hybrid women with human torsos and bird-like bodies and wings, perched on rocks by the sea, singing, shipwreck debris nearby
```

#### Tifón (`tifon.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, volcanic red and ash black and sulfur yellow color palette, colossal terrifying being with a hundred serpent heads emerging from his shoulders and fingers, membranous wings, wrapped in fire and storm, monstrous scale dwarfing any human form
```

### Mortales

#### Acteón (`acteon.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, intricate fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, forest green and earthy brown and ivory (antlers) color palette, young lean hunter mid-transformation into a stag (antlers emerging from his head, fur beginning to cover his skin), forest, expression of horror
```

#### Andrómeda (`andromeda.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, intricate fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, ivory white and dusty rose and pale gold color palette, beautiful slender young Ethiopian princess, chained to a rock by the sea, torn gown, a sea monster lurking in the background
```

#### Ariadna (`ariadna.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, crimson red and gold and Cretan blue color palette, graceful Cretan princess holding a golden ball of thread, standing at the entrance of a labyrinth, ornate Minoan gown
```

#### Dédalo (`dedalo.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, intricate fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, bronze and tan leather and warm ochre color palette, mature lean craftsman with an ingenious expression, craftsman's tools and blueprints, half-built wax and feather wings, inventor's workshop
```

#### Edipo (`edipo.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, royal purple and gold and stone grey color palette, young king with a lean regal build facing the Sphinx, thoughtful and determined expression, ruins of Thebes in the background, royal crown
```

#### Eurídice (`euridice.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, intricate fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pale blue-grey and ghostly white and faded lilac color palette, ethereal slender melancholic woman, semi-transparent and ghostly (alluding to her state among the dead), withered flowers, dim underworld light
```

#### Hipómenes (`hipomenes.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, intricate fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, gold and ivory white and sandy amber color palette, determined lean young runner (built for speed, not bulky), golden apples in his hands (Aphrodite's gift), ancient racetrack, crowd in the background
```

#### Ío (`io.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, intricate fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm brown and cream white and soft amber color palette, woman with an anguished expression, cow horns and ears emerging (mid-transformation), pleading gaze toward the sky
```

#### Medea (`medea.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, obsidian black and deep violet and venomous green (magic aura only) color palette, woman with an intense powerful gaze, dark gown with golden motifs, holding herbs and a ritual dagger, magical aura around her hands
```

#### Sémele (`semele.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, intricate ornate jewelry and fabric details, ancient Greek temple ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, blinding gold and ivory white and warm amber color palette, Theban princess engulfed in blinding golden light (Zeus's divine form), slender figure, ecstatic and tragic expression, radiance consuming her
```

---

**Nota**: los campos `dominio`, `simbolos` y `descripcion_corta` de cada personaje están en la base de datos
(tabla `personajes`) por si quieres ajustar algún prompt con más detalle antes de generarlo.

## 5. Si prefieres buscar imágenes manualmente en vez de generarlas

Tamaños y formato de referencia para que se vean bien tanto en el flipbook web como en el PDF impreso:

- **Formato**: `.jpg` (fotografías/ilustraciones con muchos tonos) — evita `.png` salvo que necesites transparencia, porque pesa más.
- **Tamaño mínimo**: 800×1200px (proporción 2:3, vertical, cuerpo completo).
- **Tamaño ideal**: 1000×1500px — buen balance entre nitidez en el PDF y peso del archivo.
- **Peso máximo recomendado por imagen**: ~500 KB (si es más pesada, comprímela; con 54 imágenes un peso alto hace lento el flipbook y el PDF).
- **Nombre del archivo**: debe ser exactamente el `slug` del personaje (columna de la tabla de arriba), ej. `zeus.jpg`, `hidra-de-lerna.jpg`.
- Guárdalas en `backend/public/images/mitologia-griega/` — el backend ya las sirve automáticamente ahí.
