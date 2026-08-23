# Prompts para generar los retratos de personajes de Mitología Sumeria con Gemini

Mismo formato que `prompts-imagenes-ia-azteca.md` y el resto de los libros: un prompt por
personaje, retrato de cuerpo completo, formato vertical. **A diferencia de los libros
anteriores, estas imágenes se generan con Gemini** (no Leonardo.ai), así que no hace falta
configurar modelo/preset/Alchemy — solo pega el prompt completo (positivo + la nota de
"evitar" si aplica) directo en el chat de Gemini. Si el resultado no te convence, pedile a
Gemini que genere 2-3 variaciones o ajustá algún detalle del prompt y volvé a intentar.

## Después de generar cada imagen

1. Descarga el archivo.
2. Renómbralo exactamente como el `slug` del personaje (ej. `gilgamesh.jpg`).
3. Guárdalo en una carpeta local `mitologia-sumeria/` — cuando tengas todos, avisame y los subo
   al sitio.

## Portada — `portada-fondo.jpg`

Fondo de la tapa del libro (flipbook y PDF): un degradado oscuro se aplica encima por CSS, más
fuerte hacia abajo, para que el título dorado se lea bien — por eso el prompt evita poner
detalle importante en la mitad inferior. Proporción recomendada: vertical alta (9:16 o 1:2).
El emblema (`portada-emblema.png`) ya está resuelto — lo generé yo mismo con código, no hace
falta pedírselo a Gemini.

```
Semi-realistic fantasy digital painting, epic wide vertical composition, dramatic dusk lighting with a deep amber and indigo sky, silhouette of a massive ancient stepped ziggurat temple tower against the twilight, the Tigris and Euphrates rivers reflecting the sky in the foreground, distant palm groves and reed marshes along the riverbanks, a bright eight-pointed star and a crescent moon glowing above the ziggurat, atmospheric dust and haze, painterly rendering, highly detailed digital art, trending on artstation, cinematic wide dynamic range, no text or writing anywhere in the image, no visible human figures, crowds or faces, keep the lower half of the frame calm, dark and uncluttered (it will be covered by a title later), deep amber gold and indigo blue and warm terracotta color palette, sense of ancient sacred grandeur, the birthplace of the first cities
```

Después de generarla: renómbrala `portada-fondo.jpg` y guárdala junto con los personajes, en
la carpeta `mitologia-sumeria/`.

## Nota sobre personajes sin forma humana

**El Toro del Cielo**, **Anzu**, **Mushussu**, **Kur** y **Tiamat** (monstruos y primordiales sin
apariencia humana) ya llevan `NOT human, NOT humanoid, no human face, no human anatomy`
incorporado directo en su prompt — no hace falta agregar nada a mano. **Apsu** es la excepción:
se representa como un híbrido reptil-tritón (torso humanoide con escamas, cola serpentina/de
pez, alas), así que no lleva esa aclaración.

---

## Dioses (17)

### Anu
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Mesopotamian jewelry with lapis lazuli and gold, layered fringed royal robes, a horned crown (the horned tiara that marks Mesopotamian gods), Ziggurat of Uruk in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep indigo night sky and gold and lapis blue color palette, an ancient distant sky-father god enthroned high above the clouds, remote and serene, holding a scepter, more a presence than a participant
```

### Enlil
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, muscular commanding build, ornate Mesopotamian jewelry with lapis lazuli and gold, a horned crown, layered fringed robes billowing as if caught in wind, storm clouds and the Ekur temple of Nippur in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, storm grey and electric blue and gold color palette, a stern authoritative storm god commanding the wind itself, one hand raised as if pronouncing a decree that cannot be questioned
```

### Enki
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, lean wise build, ornate Mesopotamian jewelry with lapis lazuli and gold, flowing robes patterned with wave and fish motifs, streams of water flowing from his shoulders full of tiny fish, the E-abzu temple of Eridu in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep teal and turquoise and gold color palette, a clever knowing smile, a god of wisdom and fresh water radiating calm cunning intelligence
```

### Ninhursag
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, full maternal build, ornate Mesopotamian jewelry with lapis lazuli and carnelian, a headdress shaped like mountain peaks, robes embroidered with sprouting plants and roots, rocky foothills and green terraced fields in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, earthy terracotta and moss green and gold color palette, a serene powerful mother goddess of the earth, plants visibly sprouting where her feet touch the ground
```

### Inanna
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, elegant powerful build, extravagant ornate Mesopotamian jewelry with lapis lazuli gold and carnelian, an elaborate horned crown, richly layered fringed robes, an eight-pointed star (Venus) glowing behind her head, the Eanna temple of Uruk in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep crimson and gold and lapis blue color palette, a fierce beautiful goddess of love and war, one hand holding a bundle of reeds, the other resting near a sheathed blade, commanding and seductive at once
```

### Utu
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, athletic radiant build, ornate Mesopotamian jewelry with gold and sunstone, rays of light emanating from his shoulders, holding a serrated saw-blade weapon, the sun rising over the E-babbar temple of Sippar in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, blazing gold and warm amber and deep blue color palette, a just radiant sun god with an unwavering gaze that sees through any lie
```

### Nanna
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, elderly dignified build, ornate Mesopotamian jewelry with lapis lazuli, a long beard rendered as if made of lapis lazuli threads, a crescent moon crown, riding atop a winged bull faintly visible behind him, the Ekishnugal ziggurat of Ur under a night sky in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pale silver-blue and deep indigo and soft gold color palette, a serene ancient moon god sailing the night sky in a crescent-shaped barque
```

### Ereshkigal
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, tall gaunt regal build, dark ornate Mesopotamian jewelry in obsidian and bone, a crown of shadow, robes that fade into darkness at the hem, the seven gates of the underworld faintly visible in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, obsidian black and bone white and deep violet color palette, an implacable pale-faced queen of the dead seated on a throne of stone, eyes carrying "the look of death"
```

### Nergal
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, powerful war-scarred build, dark ornate Mesopotamian armor and jewelry, an axe resting on one shoulder, fourteen shadowy demon-shapes faintly visible behind him, the Meslam temple of Kutha wreathed in heat-haze in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, blood red and ash black and molten orange color palette, a fierce god of war and plague, midday sun distorted by heat behind him, both destroyer and, in his eyes, something newly softened
```

### Ninurta
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, muscular warrior build, ornate Mesopotamian armor and jewelry with bronze and lapis lazuli, holding a mace and bow, an eagle-headed standard behind him, a mountain battlefield in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, bronze and storm grey and deep green color palette, a triumphant young warrior god of war and agriculture, one foot planted on a fallen stone tablet, plow and weapon both visible in his gear
```

### Dumuzi
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, lean youthful shepherd build, simple but finely woven robes with a shepherd's crook, a small flock of sheep faintly visible in the misty background, reed marshes and a pastoral riverside landscape, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm wheat gold and soft green and dusk violet color palette, a beautiful young shepherd god with a gentle uneasy expression, as if sensing a shadow he cannot yet name
```

### Nisaba
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, slender scholarly build, ornate Mesopotamian jewelry, a headdress of wheat and barley stalks, holding a stylus and a clay tablet covered in cuneiform, fields of grain and a scribal school in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, golden wheat and warm clay and lapis blue color palette, a wise composed goddess of writing and grain, mid-inscription on her tablet
```

### Ninkasi
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, warm approachable build, simple ornate Mesopotamian jewelry, robes dusted with grain, holding a large ceremonial cup overflowing with beer, brewing vats and barley fields in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, amber gold and warm brown and soft cream color palette, a cheerful goddess of beer offering a cup with an inviting smile, steam rising gently from the brew
```

### Geshtinanna
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, graceful build, ornate Mesopotamian jewelry, robes woven with grapevine patterns, holding a small tablet as if interpreting a dream, vineyards under a dusky sky in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep wine red and twilight violet and gold color palette, a sorrowful devoted goddess of wine and dreams, a single vine curling protectively around her arm
```

### Ninlil
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, youthful graceful build, ornate Mesopotamian jewelry, wind-swept translucent robes, standing at the edge of a sacred canal, reeds bending in the wind around her, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pale wind-blue and soft grain gold and grey color palette, a young goddess of grain and air, expression caught between innocence and quiet apprehension
```

### Ninsun
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, regal maternal build, ornate Mesopotamian jewelry, a headdress with subtle wild-cow horn motifs, robes of royal Uruk, standing atop a temple rooftop under open sky as if in prayer, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, soft ivory and gold and dawn blue color palette, a wise protective mother goddess with hands raised in supplication toward the sun
```

### Marduk
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, powerful commanding build, elaborate ornate Mesopotamian armor and jewelry with gold and lapis lazuli, four eyes and four ears subtly implied through divine markings, wielding a bow and a net woven of storm winds, the Esagila temple of Babylon in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, royal gold and storm blue and deep crimson color palette, a triumphant young king-god standing over the vast defeated coils of a sea dragon
```

---

## Titanes / Primordiales (5)

### Nammu
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, an ancient formless build, robes that dissolve into dark water at the edges, no solid ground beneath her, endless dark primordial ocean stretching in every direction in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, void black and deep teal and faint silver color palette, an ancient serene primordial sea goddess, her lower body merging seamlessly into the endless dark water she embodies
```

### Ki
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a solid earthen build, robes textured like cracked soil and stone, half-emerged from the ground itself, the horizon split between an early cracked-open sky and dark earth in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep umber brown and stone grey and faint dawn gold color palette, the primordial earth herself taking barely-human shape, roots and stone visible fused into her form
```

### Apsu
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic underwater bioluminescent lighting, a towering reptilian dragon-warrior hybrid build, a draconic horned head with two long curved horns sweeping backward, glowing red-violet eyes, segmented crustacean-like armored exoskeleton covering a muscular humanoid torso and arms, large translucent fan-shaped fins glowing teal along the shoulders and back like ribbed wings, clawed hands gripping a massive serrated organic blade, a long serpentine eel-like tail coiling below in place of legs with smaller tendrils near its base, small fish and rising bubbles drifting through the deep water around him, jagged underwater rock formations in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep ocean teal and glowing cyan and dark abyssal blue color palette, an ancient armored sea-dragon deity risen from the depths of the primordial freshwater ocean, powerful and serene despite his fearsome bladed weapon
```

### Tiamat
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a colossal draconic primordial form, NOT human, NOT humanoid, no human face, no human anatomy, a vast serpentine sea-dragon body coiling endlessly, scales like storm-dark waves, eleven monstrous offspring faintly visible swimming in her wake, a boundless primordial salt ocean in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep abyssal black and storm blue and venomous green color palette, the primordial chaos-dragon of the sea, mouth open in a furious roar wide enough to swallow a god whole
```

### Qingu
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, an imposing but uneasy build, ill-fitting ornate armor too grand for him, the Tablets of Destiny hanging from a chain on his chest glowing with borrowed authority, a monstrous army of Tiamat's creatures in silhouette in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, tarnished gold and deep red and shadow black color palette, a general elevated beyond his own strength, gripping the Tablets with visible uncertainty beneath his commanding pose
```

---

## Héroes (10)

### Gilgamesh
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a colossal muscular build two-thirds divine, ornate royal Mesopotamian jewelry and a fringed kingly robe, holding a massive bronze axe, the walls of Uruk in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, royal gold and bronze and deep blue color palette, a magnificent powerful king of Uruk with a curled ceremonial beard, equal parts regal and restless
```

### Enkidu
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a powerfully built wild-man physique, entire body covered in long shaggy hair, a pair of small curved bull horns emerging from his brow, simple animal-hide garments, wild animals of the steppe faintly visible around his feet, tall grasslands under open sky in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, earthy green and warm brown and dawn gold color palette, a wild untamed man of the steppe, expression caught between animal instinct and dawning human awareness
```

### Utnapishtim
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, an ageless serene build, simple flowing ancient robes, standing at the mouth of distant rivers where no other mortal has ever set foot, a great cubic ark faintly visible in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pale mist grey and soft gold and deep river blue color palette, the one mortal made immortal, calm and unhurried, a man who has already outlived every ending
```

### Lugalbanda
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a lean resilient warrior build, simple royal Mesopotamian travel garments, a colossal storm-bird nest faintly visible on a mountain crag behind him, rugged mountain terrain in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, stone grey and warm ember orange and deep blue color palette, a determined resourceful king abandoned in the mountains, kneeling in devotion beside a small sacred fire
```

### Etana
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a dignified but visibly anxious royal build, fine Mesopotamian royal robes, gripping tightly onto the feathers of a great eagle mid-flight beneath him, the earth shrinking far below into the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, sky blue and cloud white and warm gold color palette, a king clinging to an eagle's back as they ascend toward the heavens, awe and vertigo both visible on his face
```

### Adapa
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a modest scholarly fisherman-priest build, simple sacred robes, a fishing net and a small offering of fish at his feet, the fresh waters of Eridu in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, muted teal and sandy beige and soft gold color palette, the wisest of mortals, calm and earnest, unknowingly standing at the threshold of a choice that will cost humanity its immortality
```

### Shamhat
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a graceful confident build, fine temple robes and ornate Mesopotamian jewelry, standing at the edge of a watering hole in the wild steppe, animals watching warily from a distance in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm rose and sandy gold and deep green color palette, a serene sacred priestess extending a hand toward the wilderness, poised between two worlds
```

### Siduri
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a warm matronly build, simple fine robes, standing behind a rustic tavern counter at the edge of the world, a vast unknown sea beyond a garden wall in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm amber and dusk violet and soft gold color palette, a wise divine tavern-keeper offering a cup of wine with a knowing, gently sympathetic expression
```

### Urshanabi
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a weathered sturdy boatman build, simple practical river garments, holding a long wooden punting pole, standing on a small boat over deathly still black water in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep obsidian black and pale grey and faint gold color palette, the only ferryman able to cross the Waters of Death, calm and unreadable, at home in a place no other living being can survive
```

### Ninshubur
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a lean determined build, simple fine attendant's robes, carrying a small ceremonial staff of office, standing amid several distant temple silhouettes as if mid-journey between them in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, muted violet and dusty gold and grey color palette, a loyal steadfast attendant dressed in mourning robes, resolute expression of someone who will not stop until her mission is done
```

---

## Monstruos (11)

### Humbaba
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a massive hulking monstrous build, a face made entirely of twisted coiling intestine-like folds instead of normal features, clawed hands, standing among colossal cedar trees in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep forest green and sickly grey and dull red color palette, the monstrous guardian of the Cedar Forest, terrifying and immense, roaring amid ancient towering trees
```

### El Toro del Cielo
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, NOT human, NOT humanoid, no human face, no human anatomy, a colossal celestial bull with a hide like carved stone and eyes like burning stars, cracks of light glowing along its horns, the walls of Uruk crumbling beneath its hooves in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep night blue and burning gold and ash grey color palette, a monstrous celestial bull mid-charge, the earth splitting open beneath its front hooves
```

### Anzu
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, NOT human, NOT humanoid, no human face, no human anatomy, a colossal storm-bird with the head of a lion and vast feathered wings crackling with lightning, gripping glowing stone tablets in its talons, dark thunderclouds in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, storm grey and electric violet and molten gold color palette, a colossal thunderbird mid-shriek, wings spread wide against a churning storm sky
```

### Lamashtu
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a gaunt monstrous humanoid build, a lioness head with donkey teeth and ears, bird talons instead of feet, long clawed fingers, nursing a pig and a dog simultaneously at her breasts, a swampy nocturnal landscape in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, sickly green and bruised purple and bone white color palette, a horrifying demoness stalking through the marsh at night, inverted maternal imagery designed to unsettle
```

### Pazuzu
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a scaled humanoid build with a lion's head, bulging eyes, clawed bird feet, a scorpion tail, vast leathery wings spread wide, a dry windswept desert landscape in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, dusty ochre and ash grey and deep red color palette, the fearsome king of wind demons, simultaneously monstrous and strangely protective, standing as a guardian ward
```

### Mushussu
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, NOT human, NOT humanoid, no human face, no human anatomy, a serpentine dragon body with lion forelegs, eagle hind legs, a scorpion-tipped tail and a forked tongue, glazed brick temple walls patterned with rosettes in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep turquoise and gold and terracotta color palette, a proud dragon-serpent guardian pacing before the gates of Babylon
```

### Namtar
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a gaunt spectral humanoid build, tattered dark robes, a face like a shifting shadow with no fixed features, sixty small glowing sigils of disease faintly orbiting around him, the dim halls of the underworld in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, sickly grey-green and obsidian black and faint violet color palette, the silent bureaucratic demon of fate and plague, expressionless and utterly inevitable
```

### Los demonios gallu
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a group of gaunt hollow-eyed humanoid demons, grey desiccated skin, ragged featureless robes, dragging heavy iron chains, the dark gates of the underworld in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, ash grey and obsidian black and dull rust color palette, a cluster of merciless underworld enforcers advancing in unison, utterly without expression or mercy
```

### Los hombres-escorpión
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a hybrid build with a muscular human torso and a massive armored scorpion lower body and tail, ornate ancient guardian markings, standing before a colossal dark mountain gate at the edge of the world in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep amber and obsidian black and pale starlight color palette, a formidable pair of scorpion-guardians blocking a mountain pass, terrible but watchful rather than purely hostile
```

### Kur
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, NOT human, NOT humanoid, no human face, no human anatomy, a vast primordial serpent-dragon coiling through subterranean darkness, scales like raw stone, large jagged bat-like wings unfurled from its upper coils, glowing faint cracks of underworld light along its body, a deep underground river in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep cavern black and dull ember red and stone grey color palette, an ancient formless winged dragon of the underworld rising from black water, hurling stones from below
```

### Los Lahmu
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a powerfully built humanoid figure with extremely long curled hair and beard covering much of his body, simple woven kilt, standing guard at an ornate temple threshold, the Abzu temple gate in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm bronze and deep teal and soft gold color palette, a benevolent hairy primordial guardian holding the temple doorpost steady, calm watchful protector rather than threat
```

---

## Mortales (5)

### Sargón de Akkad
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a strong regal build, fine royal Akkadian robes and a distinctive braided beard, standing before a grand palace, the Euphrates river faintly visible in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, royal gold and deep river blue and warm bronze color palette, a self-made king radiating quiet unshakeable confidence, having risen from nothing to found the first empire
```

### Ku-Baba
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a sturdy confident build, simple fine robes that hint at humble tavern-keeper origins beneath newly acquired royal jewelry, holding a ceremonial cup in one hand and a scepter in the other, the city walls of Kish in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm amber and royal gold and deep brown color palette, a formidable self-made queen, equal parts tavern-keeper and monarch, utterly at ease on her throne
```

### Enmerkar
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a lean scholarly-royal build, fine Uruk royal robes, holding a fresh clay tablet and a reed stylus as if inventing writing on the spot, the ziggurat of Uruk in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm clay tan and royal gold and deep blue color palette, an inventive determined king pressing the first written signs into wet clay, a look of sudden realization on his face
```

### Ur-Nammu
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a dignified devout royal build, fine ceremonial robes, holding an inscribed law tablet, the ziggurat of Ur under a somber sky in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, muted gold and stone grey and deep violet color palette, a solemn just king presenting his code of law, an undertone of quiet foreboding despite his piety
```

### Enheduanna
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a graceful dignified build, elaborate high priestess robes and a distinctive round headdress, holding a clay tablet inscribed with a hymn, the moon temple of Ur under a starlit sky in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep lapis blue and silver moonlight and warm gold color palette, a composed high priestess and poet, tablet held close to her chest, an expression of fierce devotion and quiet authority
```
