# Prompts para generar los retratos de personajes de Demonología con Gemini

Mismo formato que los libros anteriores: un prompt por personaje, retrato de cuerpo completo,
formato vertical. Se generan con **Gemini** — pega el prompt completo directo en el chat. Si
el resultado no convence, pedile a Gemini 2-3 variaciones o ajustá algún detalle del prompt.

## Después de generar cada imagen

1. Descarga el archivo.
2. Renómbralo exactamente como el `slug` del personaje (ej. `lucifer.jpg`).
3. Guárdalo en una carpeta local `demonologia/` — cuando tengas todos, avisame y los subo al
   sitio.

## Portada — `portada-fondo.jpg`

Fondo de la tapa del libro (flipbook y PDF): un degradado oscuro se aplica encima por CSS, más
fuerte hacia abajo, para que el título dorado se lea bien. Proporción recomendada: vertical
alta (9:16 o 1:2).

```
Semi-realistic fantasy digital painting, epic wide vertical composition, dramatic lighting with a deep crimson and obsidian black sky, a vast cracked obsidian plain fading into distant smoking fissures glowing faintly with ember light, jagged dark rock formations silhouetted against the horizon, drifting sulfurous haze low across the ground, atmospheric haze, painterly rendering, highly detailed digital art, trending on artstation, cinematic wide dynamic range, no text or writing anywhere in the image, no visible human figures, crowds or faces, keep the lower half of the frame calm, dark and uncluttered (it will be covered by a title later), deep crimson red and obsidian black and molten ember orange color palette, sense of ancient forbidden grandeur across an infernal landscape
```

Después de generarla: renómbrala `portada-fondo.jpg` y guárdala junto con los personajes, en
la carpeta `demonologia/`.

## El emblema (`portada-emblema.png`)

No hace falta pedírselo a Gemini — lo genero yo mismo con código (mismo método que los otros
libros). Para Demonología voy a usar el Sello de Salomón invertido (una estrella de cinco
puntas dentro de un círculo doble), el símbolo más directamente asociado a la propia tradición
de invocación y dominio de demonios que da origen a buena parte de este libro.

## Nota importante sobre el tono de este libro

A diferencia de los demás libros del catálogo, varios personajes de Demonología son figuras
históricas reales (Papas, santos, reyes, víctimas de casos documentados) tratadas con el mismo
criterio enciclopédico y respetuoso que el resto — ni sensacionalista ni irreverente. Al generar
sus retratos, priorizá una estética digna y seria por sobre cualquier tono de terror barato,
sobre todo para **León XIII, San Ciriaco, Jacobo VI y I, Urbain Grandier, Jeanne des Anges,
Matthew Hopkins, Cotton Mather y Anneliese Michel** — son figuras históricas, no monstruos.

## Nota sobre personajes sin forma humana o híbridos

Llevan `NOT human, NOT humanoid, no human face, no human anatomy` incorporado directo en su
prompt: **Leviatán** y **Behemot** (bestias primordiales puras). **Bael**, **Furfur**,
**Andras**, **Buer**, **Pazuzu** y **Krampus** conservan formas híbridas humanoides con rasgos
animales marcados. Varios príncipes y demonios masculinos llevan `a MALE figure` /
`unmistakably male` explícito para evitar ambigüedad de género donde el texto lo especifica.

---

## Primordiales (5)

### Leviatán — `leviatan.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic deep-sea lighting, NOT human, NOT humanoid, a colossal twisting serpentine sea monster with impenetrable overlapping dark scales like rows of shields, coiling up out of dark churning ocean depths, faint fire glowing from its nostrils, a stormy sea in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, abyssal black and deep storm teal and molten ember color palette, the primordial serpent of the sea's depths, ancient and unconquerable Save the generated image file as "leviatan.jpg".
```

### Behemot — `behemot.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic earthy lighting, NOT human, NOT humanoid, a colossal land beast resembling a massive hippopotamus-bull hybrid grazing on grass like an ox, limbs like bars of iron and bones like tubes of bronze visible through weathered hide, a powerful tail stiff as a cedar tree, its belly low against a vast reed marsh, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, earthy bronze and murky marsh green and pale bone white color palette, the primordial beast of the land, immense and immovable Save the generated image file as "behemot.jpg".
```

### Abadón — `abaddon.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic apocalyptic lighting, a MALE figure, a dark winged angelic build with a stern commanding presence, dark battle-worn robes, gripping a key to a bottomless abyss, a swarm of monstrous armored locusts shaped like horses prepared for battle rising behind him, each locust wearing a small golden crown with a human face, long women's hair, lion's teeth, iron breastplates and a scorpion's stinging tail, smoke pouring from the pit in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep smoky black and ember red and pale bone grey color palette, the angel of the abyss commanding the apocalyptic plague, dreadful and commanding, unmistakably male Save the generated image file as "abaddon.jpg".
```

### Samael — `samael.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic ambiguous twilight lighting, a MALE figure, a tall stern angelic build with dark feathered wings tinged with a faint Mars-red glow, holding a sword wreathed in venomous mist, a serpent coiled at his feet, a dusk sky in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep twilight purple and venomous green and pale silver color palette, the accusing angel of death, stern and ambivalent, unmistakably male Save the generated image file as "samael.jpg".
```

### Lilith — `lilith.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic moonlit desert lighting, a striking dignified FEMALE build, long dark flowing hair, simple dark flowing robes, an unbroken proud gaze, small dark feathered wings folded at her back, clawed taloned bird-like feet in place of human feet, flanked symmetrically by two watchful owls perched to either side of her, standing atop two reclining lions, a vast moonlit desert wilderness stretching toward the Red Sea in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep midnight blue and pale desert sand and soft moonlight silver color palette, the first woman who chose independence over submission, ancient and commanding, proud and unyielding Save the generated image file as "lilith.jpg".
```

## Grandes príncipes y gobernantes infernales (15)

### Lucifer — `lucifer.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic radiant-to-dark lighting, a MALE figure, an extraordinarily beautiful angelic build with large dark-feathered wings tinged with fading light, fine regal dark robes, a single star glowing faintly above his head, standing at the edge of a great fall from a bright sky into darkness, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, fading radiant gold and deep abyssal black and pale starlight color palette, the fallen morning star consumed by pride, tragic and magnificent, unmistakably male Save the generated image file as "lucifer.jpg".
```

### Satán — `satan.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic adversarial lighting, a MALE figure, a commanding dark regal build, flowing dark robes, a stern accusing expression, standing before an unseen celestial court as if presenting a case, a desert crossroads in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep obsidian black and dusty desert tan and pale ember red color palette, the great adversary and accuser, cold and commanding, unmistakably male Save the generated image file as "satan.jpg".
```

### Belcebú — `beelzebub.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic murky lighting, a MALE figure, a corpulent regal build seated upon a dark throne, robes crawling faintly with insect motifs, a swarm of flies faintly visible around him, the ruined oracle-temple of an ancient Philistine city in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, sickly green-black and deep bronze and dusty grey color palette, the prince of demons and lord of corruption, bloated and imperious, unmistakably male Save the generated image file as "beelzebub.jpg".
```

### Asmodeo — `asmodeo.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic infernal lighting, a MALE figure, a powerful build with three heads (bull, man and ram) atop broad shoulders, a serpent's tail, goose feet, ornate dark armor, gripping a spear, riding a dragon-like infernal beast, faint acrid smoke from a burning fish heart and liver drifting nearby as if driving him away, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep crimson and dark bronze and smoky black color palette, the jealous prince of lust and games of chance, possessive and fierce, unmistakably male Save the generated image file as "asmodeo.jpg".
```

### Belial — `belial.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic persuasive lighting, TWO beautiful angelic figures seated together in a chariot wreathed in fire, elegant charming builds in fine dark regal robes, eloquent knowing smiles, a shadowy assembly gathered to listen in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep shadow black and rich crimson and pale gold color palette, the eloquent prince of iniquity and deception, charming and dangerous, unmistakably male Save the generated image file as "belial.jpg".
```

### Astaroth — `astaroth.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic eerie lighting, an androgynous foul winged figure of deceptive underlying beauty, riding a dragon-like infernal beast, gripping a venomous serpent in one hand, a faint noxious haze suggesting an unbearable stench surrounding him, a protective magic ring glowing faintly nearby, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep venomous green and pale bronze and shadow black color palette, the great duke who reveals hidden secrets, beautiful and perilous Save the generated image file as "astaroth.jpg".
```

### Mammón — `mammon.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic golden lighting, a MALE figure, a stooped hunched build with eyes cast permanently downward, never looking upward even toward the light, robes woven from coins and gold thread, surrounded by piles of glittering treasure, a dark palace under construction in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm greedy gold and deep shadow black and dull bronze color palette, the prince of avarice hoarding endless wealth, greedy and pragmatic, unmistakably male Save the generated image file as "mammon.jpg".
```

### Belfegor — `belfegor.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic dim lighting, an androgynous figure mid-transformation between a beautiful alluring maiden (his disguise for investigating earthly marriage) and a slouched indolent true form, holding a strange ingenious labor-saving device, reclining amid untouched work in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, muted grey and dull gold and soft shadow color palette, the prince of sloth who tempts with clever inventions, languid and deceptive Save the generated image file as "belfegor.jpg".
```

### Paimon — `paimon.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic ceremonial lighting, an androgynous crowned figure with an ambiguous youthful face, riding a dromedary camel, a retinue of musicians with thunderous instruments in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep crimson and warm gold and shadow black color palette, the great king who teaches all arts and sciences, regal and exacting Save the generated image file as "paimon.jpg".
```

### Bael — `bael.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic eerie lighting, NOT fully human, a figure with three simultaneous heads (a man, a toad and a cat) atop one dark-robed body, a hoarse commanding presence, a shadowy throne room in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep shadow black and pale bronze and murky green color palette, the first king who grants wisdom and invisibility, strange and ancient Save the generated image file as "bael.jpg".
```

### Moloc — `moloch.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic firelit lighting, a MALE figure, a towering imposing hollow bronze idol build with a bull-like head, arms outstretched forward to receive offerings, a great fire burning visibly within his own hollow chest and belly, ceremonial drums faintly visible nearby, standing in the Valley of Hinnom, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, blazing ember orange and dark bronze and deep shadow black color palette, the devourer demanding cruel sacrifice, imposing and dreadful, unmistakably male Save the generated image file as "moloch.jpg".
```

### Baphomet — `baphomet.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic symmetrical lighting, an androgynous figure with a goat's head, a burning torch glowing between the two horns, a humanoid torso with both masculine and feminine features, large membranous wings, a pentagram glowing on the forehead, one arm pointing upward toward a white moon and one downward toward a black moon, a caduceus-like staff rising from the lap, seated in perfect symmetrical balance, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep balanced black and pale moonlight silver and warm torch gold color palette, the symbol of cosmic equilibrium between opposites, serene and symbolic Save the generated image file as "baphomet.jpg".
```

### Pazuzu — `pazuzu-demonologia.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic windswept lighting, a lean humanoid figure with a canine or lion-like head, scaled skin, taloned bird-like feet, two pairs of outstretched wings, a scorpion tail, standing amid a swirling desert windstorm, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, dusty desert tan and deep storm grey and pale bone white color palette, the king of wind demons, paradoxically protective and dreadful Save the generated image file as "pazuzu-demonologia.jpg".
```

### Naamah — `naamah.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic seductive moonlit lighting, a striking FEMALE build, flowing dark seductive robes, an alluring knowing gaze, singing with her mouth slightly open as if her voice itself were a lure, faint bronze metalworking tools of her brother Tubal-Cain visible nearby, standing in a shadowy moonlit chamber, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep midnight purple and pale moonlight silver and soft shadow black color palette, the seductive queen who generates spirits of the night, alluring and dangerous Save the generated image file as "naamah.jpg".
```

### Azazel — `azazel.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic desert twilight lighting, a MALE figure, a tall fallen-angel build with weathered dark wings, holding forged weapons and cosmetic vials, a lone scapegoat visible far below at the base of a rocky desert cliff, standing at the edge of a rocky desert abyss, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, dusty desert tan and deep shadow black and pale ember color palette, the fallen angel who taught forbidden crafts to humanity, proud and doomed, unmistakably male Save the generated image file as "azazel.jpg".
```

## Héroes: exorcistas, sabios y domadores de demonios (10)

### El Rey Salomón — `solomon.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic regal lighting, a MALE figure, a dignified wise elderly-adjacent king, fine ancient Israelite royal robes, holding aloft a glowing signet ring, a bronze vessel sealed at his feet, the Temple of Jerusalem under construction in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm gold and deep royal purple and bronze color palette, the wise king who bound seventy-two spirits to his will, commanding and serene, unmistakably male Save the generated image file as "solomon.jpg".
```

### Fausto — `fausto.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic candlelit study lighting, a MALE figure, a gaunt scholarly build in dark Renaissance robes, a quill dipped in blood signing a contract, a black poodle watching from a shadowy corner, shelves of ancient books in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm candle gold and deep scholarly brown and shadow black color palette, the scholar who traded his soul for forbidden knowledge, tormented and ambitious, unmistakably male Save the generated image file as "fausto.jpg".
```

### Johann Weyer — `johann-weyer.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic scholarly lighting, a MALE figure, a dignified Renaissance physician build in dark formal robes, writing in a large catalog book, a study filled with manuscripts in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm parchment gold and deep scholarly brown and soft ink black color palette, the physician who catalogued demons and defended the accused, thoughtful and compassionate, unmistakably male Save the generated image file as "johann-weyer.jpg".
```

### Girolamo Menghi — `girolamo-menghi.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic solemn lighting, a MALE figure, a dignified Franciscan friar in a simple brown habit, holding a crucifix and an open ritual book, a modest chapel in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm candle gold and deep friar brown and soft ivory color palette, the friar who practiced and codified the rite of exorcism, resolute and devout, unmistakably male Save the generated image file as "girolamo-menghi.jpg".
```

### El Papa León XIII — `leon-xiii.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic reverent lighting, a MALE figure, a dignified elderly pope in formal white papal vestments, hands clasped in prayer, a faint vision of a heavenly conversation glowing softly in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pure white and warm gold and soft heavenly light color palette, the pontiff who composed the prayer against evil after a troubling vision, solemn and dignified, unmistakably male Save the generated image file as "leon-xiii.jpg".
```

### Honorio de Tebas — `honorius-de-tebas.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic mysterious lighting, a MALE figure, an ambiguous shadowy papal-robed figure, holding an ornate grimoire bound in dark leather, a dim scriptorium in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep shadow black and warm parchment gold and soft candle glow color palette, the legendary attributed author of a forbidden grimoire, enigmatic and uncertain, unmistakably male Save the generated image file as "honorius-de-tebas.jpg".
```

### Éliphas Lévi — `eliphas-levi.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic scholarly lighting, a MALE figure, a dignified 19th-century occultist build in a formal dark frock coat, sketching the horned goat-headed figure of his own design on a large parchment, a study filled with esoteric symbols in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm candle gold and deep scholarly black and soft symbolic silver color palette, the occultist who designed the modern image of Baphomet, thoughtful and deliberate, unmistakably male Save the generated image file as "eliphas-levi.jpg".
```

### San Ciriaco — `san-ciriaco.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), soft reverent lighting, a MALE figure, a dignified early Christian deacon in simple ancient robes, holding a small cross, a gentle protective expression, a Roman-era setting in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm ivory and soft gold and pale sky blue color palette, the martyr invoked for protection against possession, gentle and devout, unmistakably male Save the generated image file as "san-ciriaco.jpg".
```

### Jacobo VI y I — `jaime-vi-i.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic regal lighting, a MALE figure, a dignified 16th-century king in fine formal royal attire, holding an open treatise, a stormy sea faintly visible in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep royal navy and warm gold and storm grey color palette, the monarch who wrote a treatise on witchcraft and demonology, stern and scholarly, unmistakably male Save the generated image file as "jaime-vi-i.jpg".
```

### Miguel Pselo — `miguel-psellos.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic Byzantine lighting, a MALE figure, a dignified Byzantine scholar in fine formal robes, holding a manuscript, an ornate Constantinople courtyard in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep Byzantine gold and rich purple and soft ivory color palette, the polymath who classified demons by element, erudite and composed, unmistakably male Save the generated image file as "miguel-psellos.jpg".
```

## Monstruos y demonios menores (12)

### Íncubo — `incubo.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dim eerie moonlit lighting, a MALE figure, a shadowy winged humanoid form looming faintly over a sleeping figure, dark leathery wings, glowing faint eyes, a dark bedroom in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep shadow black and pale moonlight silver and faint ember glow color palette, the demon that visits sleeping women, oppressive and unsettling, unmistakably male Save the generated image file as "incubo.jpg".
```

### Súcubo — `sucubo.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dim eerie moonlit lighting, a strikingly beautiful FEMALE build with subtle dark wings, flowing translucent dark robes, a hypnotic alluring gaze, a dark bedroom in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep shadow black and pale moonlight silver and soft seductive violet color palette, the demon that visits sleeping men, alluring and draining Save the generated image file as "sucubo.jpg".
```

### Furfur — `furfur.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic storm lighting, NOT human, NOT humanoid, a winged stag with a tail of burning flame, standing within a glowing magic triangle, storm clouds and lightning in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, storm grey and ember orange and deep gold color palette, the count who commands storms and reveals hidden truths, wild and evasive Save the generated image file as "furfur.jpg".
```

### Andras — `andras.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic ominous lighting, a dark angelic figure with an owl's head, gripping a bright sharp sword, riding atop a fierce black wolf, a shadowy battlefield in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep shadow black and pale steel silver and dull crimson color palette, the marquis who sows fatal discord, dreadful and unpredictable Save the generated image file as "andras.jpg".
```

### Vassago — `vassago.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), soft benevolent lighting, an androgynous princely figure with a gentle knowing expression, fine dignified regal robes, a scrying mirror glowing faintly, a calm misty landscape in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, soft gold and pale silver and calm blue color palette, the rare demon prince of an unusually benevolent nature, gentle and revealing Save the generated image file as "vassago.jpg".
```

### Buer — `buer.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic radiant lighting, NOT fully human, a single head at the center of a star-shaped or wheel-like form, five goat-like legs radiating outward from the body like the points of a star, rolling and moving atop a glowing pentacle, herbs and medicinal plants in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm gold and deep amber and soft herb green color palette, the president who teaches philosophy and heals the sick, wise and strange Save the generated image file as "buer.jpg".
```

### Gremory — `gremory.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic desert dusk lighting, a beautiful FEMALE build wearing a ducal crown, riding a camel across a desert landscape, glinting hidden treasure faintly visible in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm desert gold and deep dusk purple and soft treasure bronze color palette, the duchess who reveals love and hidden treasure, alluring and knowing Save the generated image file as "gremory.jpg".
```

### Marbas — `marbas.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic transformative lighting, a powerful lion mid-transformation into a humanoid figure, mechanical gears and tools faintly visible in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep bronze and tawny gold and soft shadow color palette, the president who causes and cures disease, dual-natured and cunning Save the generated image file as "marbas.jpg".
```

### Empusa — `empusa.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), eerie moonlit lighting, a hauntingly beautiful FEMALE figure mid-transformation, one leg of bronze and one of donkey dung barely visible beneath flowing robes, sharp fangs just showing in a seductive smile, a lonely moonlit road in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pale moonlight silver and deep shadow black and dull bronze color palette, the shapeshifting devourer of lone travelers, seductive and dreadful Save the generated image file as "empusa.jpg".
```

### Mara — `mara.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dim oppressive moonlit lighting, a shadowy humanoid FEMALE figure crouched heavily atop a sleeping person's chest, dark flowing wisps trailing from her form, a dark bedroom in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep night black and pale moonlight silver and faint shadow violet color palette, the spirit who sits upon the sleeper's chest bringing nightmares, oppressive and heavy Save the generated image file as "mara.jpg".
```

### Krampus — `krampus.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic wintry torchlit lighting, NOT fully human, a large horned goat-like figure covered in dark shaggy fur, a long pointed tongue, dragging heavy rattling chains, gripping a bundle of birch switches, a snowy alpine village in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep winter black and warm torchlight orange and pale snow white color palette, the punisher of misbehaving children during the winter season, wild and folkloric Save the generated image file as "krampus.jpg".
```

### Ifrit — `ifrit.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic blazing lighting, a MALE figure, a towering muscular build made entirely of smokeless flame (as all jinn are said to be created), glowing ember eyes, ancient ruins faintly visible in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, blazing ember orange and deep smoky black and molten gold color palette, the most powerful class of fire spirit, proud and formidable, unmistakably male Save the generated image file as "ifrit.jpg".
```

## Mortales: figuras históricas de casos documentados (5)

### Urbain Grandier — `urbain-grandier.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic somber lighting, a MALE figure, a dignified 17th-century French priest in simple dark clerical robes, a calm resigned expression, a shadowy courtroom in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep shadow black and warm candle gold and muted grey color palette, the priest condemned in a deeply unjust trial, dignified and resigned, unmistakably male Save the generated image file as "urbain-grandier.jpg".
```

### Sor Jeanne des Anges — `jeanne-des-anges.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic somber convent lighting, a FEMALE figure, a dignified 17th-century French nun in a simple dark habit, a complex conflicted expression, a shadowy convent chapel in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep habit black and warm candle gold and soft ivory color palette, the mother superior at the center of a documented case of collective possession, conflicted and complex Save the generated image file as "jeanne-des-anges.jpg".
```

### Matthew Hopkins — `matthew-hopkins.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic stern lighting, a MALE figure, a severe 17th-century English Puritan build in formal dark period attire, a wide-brimmed black hat, a stern cold expression, an English village in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep Puritan black and pale grey and muted earth tone color palette, the self-proclaimed witch hunter of 17th-century England, cold and severe, unmistakably male Save the generated image file as "matthew-hopkins.jpg".
```

### Cotton Mather — `cotton-mather.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic solemn lighting, a MALE figure, a dignified colonial Puritan minister in formal dark period robes, holding an open religious tract, a colonial New England town in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep Puritan black and warm parchment gold and muted grey color palette, the influential preacher of colonial Massachusetts, solemn and complex, unmistakably male Save the generated image file as "cotton-mather.jpg".
```

### Anneliese Michel — `anneliese-michel.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), soft somber lighting, a FEMALE figure, a gaunt fragile young woman in simple 1970s clothing, a sorrowful gentle expression, a modest German household in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, muted soft grey and pale candle gold and gentle ivory color palette, treated with dignity and compassion as a tragic historical figure, fragile and sorrowful Save the generated image file as "anneliese-michel.jpg".
```
