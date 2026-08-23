# Prompts para generar los retratos de personajes de Mitología Maya con Gemini

Mismo formato que `prompts-imagenes-ia-sumeria.md` y el resto de los libros: un prompt por
personaje, retrato de cuerpo completo, formato vertical. Se generan con **Gemini** — pega el
prompt completo directo en el chat. Si el resultado no convence, pedile a Gemini 2-3
variaciones o ajustá algún detalle del prompt.

## Después de generar cada imagen

1. Descarga el archivo.
2. Renómbralo exactamente como el `slug` del personaje (ej. `hunahpu.jpg`).
3. Guárdalo en una carpeta local `mitologia-maya/` — cuando tengas todos, avisame y los subo
   al sitio.

## Portada — `portada-fondo.jpg`

Fondo de la tapa del libro (flipbook y PDF): un degradado oscuro se aplica encima por CSS, más
fuerte hacia abajo, para que el título dorado se lea bien — por eso el prompt evita poner
detalle importante en la mitad inferior. Proporción recomendada: vertical alta (9:16 o 1:2).

```
Semi-realistic fantasy digital painting, epic wide vertical composition, dramatic dusk lighting with a deep jade green and violet sky, silhouette of a massive stepped Maya pyramid rising from dense jungle canopy, a feathered serpent shadow winding down its staircase in the fading light, thick tropical mist drifting between towering ceiba trees, a still dark cenote pool faintly visible reflecting the sky in the foreground, fireflies and distant stars beginning to appear, atmospheric haze, painterly rendering, highly detailed digital art, trending on artstation, cinematic wide dynamic range, no text or writing anywhere in the image, no visible human figures, crowds or faces, keep the lower half of the frame calm, dark and uncluttered (it will be covered by a title later), deep jade green and violet and warm gold color palette, sense of ancient sacred mystery swallowed by the jungle
```

Después de generarla: renómbrala `portada-fondo.jpg` y guárdala junto con los personajes, en
la carpeta `mitologia-maya/`.

## El emblema (`portada-emblema.png`)

No hace falta pedírselo a Gemini — lo genero yo mismo con código (mismo método que los otros
6 libros: SVG + Puppeteer, un solo ícono sólido dorado más un anillo de marcas). Para Maya usé
el glifo del sol maya (Kin / Ahau), con sus cuatro pétalos característicos.

## Nota sobre personajes sin forma humana o híbridos

Llevan `NOT human, NOT humanoid, no human face, no human anatomy` incorporado directo en su
prompt: **Vucub-Caquix**, **Xecotcovach**, **Cotzbalam**, **Tucumbalam** y el **Pájaro Muán**
(todos animales o aves monstruosas puras). **Camazotz** y los **Wahyob** son híbridos
humanoides (torso humano con rasgos animales) y sí conservan anatomía humana parcial, igual
que Pazuzu en el libro de Sumeria. **Zipacná**, **Cabracán**, **Sisimite** y **Kisin** son
gigantes o demonios humanoides de gran tamaño, con anatomía humana pero de escala monstruosa.

---

## Dioses (15)

### Itzamná — `itzamna.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, an elderly dignified build, ornate Maya jade and jaguar-pelt regalia, a headdress combining serpent and sky motifs, deep wrinkles suggesting immense age and wisdom, a two-headed celestial serpent arching faintly overhead in the misty background, a stepped stone temple silhouette below, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep jade green and warm gold and indigo color palette, a serene ancient sky god radiating quiet supreme authority, one hand raised as if teaching Save the generated image file as "itzamna.jpg".
```

### Ixchel — `ixchel.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), kneeling in profile, dramatic chiaroscuro lighting, a graceful mature build with warm sun-touched skin, deep blue hair swept back beneath an elaborate serpent headdress, a large stylized serpent head with an open jaw curling forward above her brow rendered in carved silver and pewter tones, oversized ornate silver disc earspools, a heavy layered silver and pewter collar and armbands, a wrapped blue skirt with red trim and silver belt ornaments, cradling a small white rabbit gently against her chest, a colossal full moon glowing directly behind her filling the background, faint nebula-like wisps of deep teal violet and blue haze surrounding the moon, dark atmospheric night sky, centered composition with the moon as a halo behind her head, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep indigo and pale moonlight silver and warm skin tones color palette, a serene lunar goddess of medicine and childbirth, eyes closed in quiet devotion, tender and nurturing Save the generated image file as "ixchel.jpg".
```

### Kukulkán — `kukulkan.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a MALE deity, a muscular regal masculine build with a strong-jawed bearded warrior-priest face, broad shoulders and bare muscular torso, wrapped in the coiling body of an enormous feathered serpent, iridescent quetzal-feather scales, jade and gold male regalia, a stepped pyramid with a serpent-shaped shadow on its staircase in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, emerald green and turquoise and gold color palette, a majestic feathered serpent god of wind and knowledge, unmistakably male, commanding and powerful, wind visibly stirring the surrounding mist Save the generated image file as "kukulkan.jpg".
```

### Chaac — `chaac.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a MALE deity, a powerful muscular greenish-toned build, waist-deep emerging from crashing ocean waves, a towering ornate feathered headdress in deep magenta and purple plumes crowning an elaborate carved monster mask that covers his upper face like a helmet, the mask with bulging goggle-like eyes, curling nostril ornaments and sharp jutting fangs, an ornate jade and gold collar with a round central pendant, feathered pauldrons at the shoulders, a carved jade face medallion at his belt, a deep purple wrapped loincloth, one hand raised with fingers splayed as if commanding the storm, the other gripping a long wooden-shafted spear tipped with a serrated obsidian blade, turbulent grey-blue waves swirling around his waist, atmospheric haze, centered composition, highly detailed digital illustration, bold painterly linework, trending on artstation, cinematic lighting, muted olive green and deep magenta and stormy blue-grey color palette, a fierce ancient rain god risen from the sea, imposing and otherworldly, water streaming off his weapon Save the generated image file as "chaac.jpg".
```

### Ah Puch — `ah-puch.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a gaunt skeletal build with patches of decaying flesh, a headdress adorned with small bells and owl feathers, dark bone jewelry, an owl and a dog faintly visible at his sides, the deepest level of a shadowy underworld in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, bone white and obsidian black and sickly green color palette, an unsettling lord of death, calm and utterly patient, bells faintly visible mid-chime Save the generated image file as "ah-puch.jpg".
```

### Yum Kaax — `yum-kaax.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a MALE deity, a youthful serene build, skin the warm color of ripe maize, an ornate feathered headdress crowned with a red bird crest rising above his brow, a large round jade earspool, a layered necklace of round jade and gold beads, bare muscular torso, a red loincloth patterned with small yellow squares, holding a small bowl or cacao pod topped with sprouting green leaves and a red bud cupped gently in both hands, lush maize fields under bright sun in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, verdant green and golden yellow and warm earth color palette, a gentle young god of maize presenting his offering with quiet reverence, fragile beauty barely holding its ground against unseen threats Save the generated image file as "yum-kaax.jpg".
```

### Ek Chuah — `ek-chuah.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a MALE deity, a wiry travel-hardened build, dark umber weathered skin, a long curved hooked nose, a red headwrap banded with white stripes topped with a single long green feather plume, round turquoise earrings, a collar and pauldrons shaped like split cacao pods in deep red, banded red and white cuffs on both wrists, a jade bead bracelet, a belt with a carved jade buckle and hanging cacao-pod hip ornaments, a skirt of layered green palm leaves, red and white banded leg wraps and anklets, a woven merchant's pack slung on his back, gripping a tall wooden staff topped with a cacao-pod guard and a pale obsidian blade with dark cacao sap dripping down the shaft, mid-stride on a long jungle trade road stretching into the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep cacao brown and jade green and dusty red color palette, a watchful patron of merchants and cacao, alert and resourceful, a sly knowing grin Save the generated image file as "ek-chuah.jpg".
```

### Buluc Chabtán — `buluc-chabtan.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a lean aggressive build, war paint and bone ornaments, gripping a spear in one hand and a burning torch in the other, a distant village silhouette engulfed in flame in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, ash grey and burning orange and dried-blood red color palette, a menacing god of sudden violence and fire, firelight flickering harshly across his face Save the generated image file as "buluc-chabtan.jpg".
```

### Ixtab — `ixtab.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a slender regal build with a classic Maya profile, an ornate jade and bone diadem crowning her head, large round jade earspools, a layered necklace of jade beads and small carved shell pendants, closed serene eyes, dark ritual markings of decay patterned like painted glyphs across her pale face and torso, an intricately woven huipil patterned with small skull and rope motifs, a sacred rope draped ceremonially around her neck and coiled gently down one arm like a stole rather than a noose, standing with quiet dignity beneath a calm starry night sky in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pale moonlight silver and deep indigo and jade green color palette, a gentle Maya goddess offering quiet rest rather than judgment, dignified and serene rather than frightening Save the generated image file as "ixtab.jpg".
```

### Hun-Camé — `hun-came.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a regal decayed build, skeletal patches beneath dark ornate underworld regalia, jade death-mask jewelry, seated upon a throne of carved bone and stone, the shadowy council hall of Xibalbá in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, obsidian black and bone white and deep violet color palette, an imperious supreme lord of the underworld, cold amusement in his expression as if already anticipating a trick Save the generated image file as "hun-came.jpg".
```

### Vucub-Camé — `vucub-came.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a regal decayed skeletal build matching his co-ruler, dark ornate underworld regalia, jade death-mask jewelry, standing rather than seated, gripping a tall staff topped with a rattling row of small human skulls, a live owl messenger perched on one shoulder, the shadowy torture-house halls of Xibalbá in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, obsidian black and deep crimson and bone white color palette, the second supreme lord of Xibalbá, sly and calculating, a slow cruel smile as if already plotting the next trial Save the generated image file as "vucub-came.jpg".
```

### Los Bacab — `bacab.jpg`
```
Semi-realistic fantasy digital painting, full body group portrait, tall vertical composition, richly detailed illustrative style, four identical muscular Maya warrior-gods standing each on their own separate moss-covered rock outcrop above a cascading jungle waterfall, evenly spaced across the frame, feet planted firm and bare, each wearing an elaborate tall feathered headdress in turquoise and gold, large round jade earspools with hanging beads, a heavy layered necklace of jade and gold discs, a round turquoise pectoral medallion on the chest, gold armbands and wristbands with carved spiral motifs, a white and gold woven kilt belted with an ornate buckle, carved gold shin guards, all four straining upward with both arms fully raised overhead, their hands together supporting a massive carved stone slab representing the surface of the earth, intricate sun-glyph and turtle carvings visible on the underside of the slab, above the slab a small layered world of jungle greenery under a swirling cosmic sky filled with a blazing sun, glowing planets and tiny distant animal spirits, below the warriors a lush jungle ravine with multiple waterfalls, a winding river and gnarled tree roots forming a natural bridge, small carved stone masks nestled among the foliage, atmospheric haze, symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, lush emerald green and turquoise and warm gold color palette, four ancient sky-bearers straining calmly under the eternal weight of the heavens, grounded and unshakeable Save the generated image file as "bacab.jpg".
```

### Kinich Ahau — `kinich-ahau.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a powerful regal build, a square stylized face with pronounced crossed eyes and a hooked nose, a radiant feathered sun-disk headdress rimmed with quetzal plumes, large round jade earspools, a wide collar of jade and gold sun-disk medallions, an intricately woven kilt with sun-glyph motifs, jade and gold bracelets and anklets, blazing midday light over a stone temple in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, blazing gold and deep amber and sky blue color palette, a majestic noon sun god radiating overwhelming light, regal and unwavering Save the generated image file as "kinich-ahau.jpg".
```

### Ah Mucen Cab — `ah-mucen-cab.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a slender inverted figure descending head-first from the sky, insect-like golden markings on his limbs, a small jade and gold headband with delicate translucent wing-like adornments fanning from it, round jade earspools, a woven waist-wrap patterned with honeycomb motifs, jade bead anklets, a swarm of small stingless bees drifting around him, flowering trees and hanging hives in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, honey gold and soft amber and jade green color palette, a strange gentle god of bees descending upside-down from the heavens, serene despite the odd pose Save the generated image file as "ah-mucen-cab.jpg".
```

### Xamán Ek — `xaman-ek.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a slender vigilant build, a dark woven traveling cloak patterned with small embroidered stars over a simple loincloth, round jade earspools, a modest jade bead necklace, a walking staff with a carved star finial, a single bright star glowing fixed above his head while other faint stars swirl slowly around him, a jungle trade path under a night sky in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep midnight blue and silver starlight and warm gold color palette, a calm watchful guide god standing motionless as a fixed point in the turning sky Save the generated image file as "xaman-ek.jpg".
```

---

## Titanes / Primordiales (5)

### Hurakán — `hurakan.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a MALE deity, a towering muscular humanoid torso and arms with storm-blue glowing skin, crackling cyan lightning arcing across his chest, arms and clenched raised hand, a tall dark headdress of jagged feathers and curved horn-like ornaments, an ornate collar and pectoral armor of carved gold and jade set with deep red gemstones, a single armored gauntlet on one forearm, his lower body dissolving below the waist into a colossal swirling hurricane vortex of dark storm clouds and howling wind in place of legs, the cyclone churning down into a violent storm-lashed primordial ocean, jagged dark rocks jutting from the churning water at its base, forked lightning splitting a bruised violet-grey sky in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, electric cyan and storm violet-grey and deep gold color palette, the Heart of Sky given form from pure lightning and wind, immense and elemental, the moment of creation crackling around him Save the generated image file as "hurakan.jpg".
```

### Gucumatz — `gucumatz.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, NOT human, NOT humanoid, no human face, no human anatomy, a colossal serpent body entirely covered in iridescent quetzal feathers, coiling gracefully through calm dark primordial waters, faint ripples of emerging land visible beneath the surface in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep teal and emerald green and soft gold color palette, the feathered serpent of the primordial waters, serene and fluid, gliding just above the birth of the first shoreline Save the generated image file as "gucumatz.jpg".
```

### Tepeu — `tepeu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a MALE deity, a dignified regal build, a tall ornate feathered headdress in deep indigo and gold quetzal plumes rising above a jade royal diadem, large round jade earspools with hanging beads, a wide layered pectoral collar of carved jade discs and gold, gold and jade armbands and wristbands, a richly woven indigo cape embroidered with geometric glyph patterns draped over one shoulder, an elaborate woven kilt with a carved jade belt buckle, hands clasped as if mid-conversation with unseen companions, a formless dark primordial void in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep indigo and muted gold and soft grey color palette, the Sovereign of the creation council, composed and authoritative, an aura of quiet deliberation rather than raw power Save the generated image file as "tepeu.jpg".
```

### Xmucané — `xmucane.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, an elderly wise build, a woven huipil patterned with small maize-kernel motifs dusted with fine flour, round jade earspools, a simple necklace of jade and bone beads, a woven head-cloth, hands cupped around scattered maize kernels and tzité seeds as if divining, a stone grinding tool resting nearby, a modest home altar in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm maize gold and earthy brown and soft grey color palette, an ancient grandmother goddess reading fate in scattered kernels, tender and inscrutable Save the generated image file as "xmucane.jpg".
```

### Xpiyacoc — `xpiacoc.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, an ELDERLY MALE grandfather, unmistakably masculine, a wizened old man's face with a long thin white beard and deep wrinkles, a lean weathered elderly male torso, a woven loincloth and shoulder wrap patterned with small glyph motifs, round jade earspools, a simple necklace of jade and bone beads, a modest woven headband, tzité seeds held in one weathered hand, a modest divination altar with a stone grinding tool nearby, a quiet dawn light in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm dawn gold and earthy brown and soft grey color palette, an ancient grandfather god of divination, calm and patient, eyes half closed as if reading an unseen pattern Save the generated image file as "xpiacoc.jpg".
```

---

## Héroes (10)

### Hunahpú — `hunahpu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a lean athletic youthful build, wearing a full jaguar-pelt warrior suit with the jaguar's own head worn as a hood framing his face, orange and red ritual paint markings across his cheeks and chest, a turquoise and jade belt buckle over the pelt, a small leather and jade pouch at his hip, an ornate carved jaguar-head shoulder ornament with pale feathers fanning from it, jade and bronze bands on his wrists and ankles, sandals with turquoise trim, gripping a blowgun ready in one hand, a round jade and gold shield slung on his back bearing a carved jaguar-face emblem, a ballgame court and jungle clearing in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm gold and jade green and deep brown color palette, a sharp-eyed young hero hunter clad as a jaguar warrior, confident and alert, mid-aim with his blowgun Save the generated image file as "hunahpu.jpg".
```

### Ixbalanqué — `xbalanque.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a lean athletic youthful build mirroring his twin, wearing a full jaguar-pelt warrior suit with the jaguar's own head worn as a hood framing his face, orange and red ritual paint markings across his cheeks and chest, a turquoise and jade belt buckle over the pelt, a small leather and jade pouch at his hip, an ornate carved jaguar-head shoulder ornament with pale feathers fanning from it, jade and bronze bands on his wrists and ankles, sandals with turquoise trim, a blowgun slung across his back, a round jade and gold shield held loosely at his side bearing a carved jaguar-face emblem, a calculating watchful stance, the same ballgame court and jungle clearing in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm gold and jade green and deep brown color palette, the more cunning of the twin heroes clad as a jaguar warrior, a faint knowing smile, already three steps ahead Save the generated image file as "xbalanque.jpg".
```

### Hun-Hunahpú — `hun-hunahpu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a lean athletic mature build, a carved stone ballgame yoke belt around his waist, protective deerhide kneepads and wristguards, round jade earspools, a jade bead necklace, a woven feathered headband, a rubber ball resting at his feet, a stone ballcourt under open sky in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm gold and jade green and dusk violet color palette, a passionate skilled ballplayer, joy and pride on his face, unaware of the danger his game is about to summon Save the generated image file as "hun-hunahpu.jpg".
```

### Vucub-Hunahpú — `vucub-hunahpu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a slightly stockier athletic build than his brother, a carved stone ballgame yoke belt around his waist worn lower and heavier, protective deerhide kneepads and thick wristguards, round jade earspools, a simple bone and jade bead necklace, a plain woven headband without feathers, crouched low in a ready defensive stance at the edge of the stone ballcourt, both hands braced against his knees, sweat visible on his brow, a bruise faintly visible on one shoulder from a previous play, atmospheric haze in the misty background, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm gold and jade green and dusk violet color palette, a loyal devoted brother and fellow ballplayer, a quieter more watchful presence, weathered and steady Save the generated image file as "vucub-hunahpu.jpg".
```

### Ixquic — `ixquic.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a graceful youthful build, a huipil woven with small geometric glyph patterns, round jade earspools, a simple jade bead necklace, a woven hair wrap, one hand extended curiously toward an unseen branch, a barren calabash tree with a faint skull hidden among its round fruit in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep violet dusk and pale jade and soft gold color palette, a curious determined young woman reaching toward forbidden fruit, quiet resolve beneath her curiosity Save the generated image file as "ixquic.jpg".
```

### Balam Quitzé — `balam-quitze.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), standing atop a high mountain peak at dawn, dramatic golden backlight, a powerful newly-formed build with a subtle maize-colored skin tone, a jaguar-pelt cloak draped over one shoulder in honor of his name, a woven loincloth patterned with small maize motifs, round jade earspools, a jade bead necklace, a simple feathered headband, arms spread wide with eyes wide open as if seeing the entire world at once from horizon to horizon, a small sacred cloth-wrapped bundle tied securely at his hip, an endless landscape of mountains, valleys and rivers stretching in every direction below him in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm maize gold and jade green and dawn amber color palette, the first true man of maize and founding patriarch, awe and boundless vision in his expression, a faint knowing smile Save the generated image file as "balam-quitze.jpg".
```

### Balam Acab — `balam-acab.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), standing alone beneath a full moon in a dark jungle clearing at night, cool moonlit rim lighting, a powerful newly-formed build with a subtle maize-colored skin tone, a dark jaguar-pelt sash worn diagonally across his chest in honor of his name, his own eyes faintly luminous like a jaguar's night vision, a woven loincloth patterned with small maize motifs, round jade earspools, a jade bead necklace, no headband, hair loose, one hand resting on the trunk of a ceiba tree as if listening to the night, dense silhouettes of jungle trees in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep midnight blue and pale silver moonlight and jade green color palette, the second true man of maize, watchful and quiet, a founding patriarch attuned to the dark Save the generated image file as "balam-acab.jpg".
```

### Mahucutah — `mahucutah.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), standing barefoot on a cracked rocky outcrop, arms crossed firmly over his chest, dramatic chiaroscuro lighting, a stocky powerful newly-formed build with a subtle maize-colored skin tone, tousled uncombed hair true to his name, no headband or headdress at all, a plain rough-woven loincloth with no ornament, small unpolished jade earspools, no necklace, an unpolished direct bearing, a hard unwavering stare straight ahead, a wide open landscape of bare stone and distant mountains in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm maize gold and stone grey and deep brown color palette, the third true man of maize, blunt and grounded, a quiet unshakeable strength in his stance Save the generated image file as "mahucutah.jpg".
```

### Iqui Balam — `iqui-balam.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), standing alone on an open plain gazing straight upward at a full moon, moonlight pooling on his upturned face, a slender youthful build with a subtle maize-colored skin tone, pale silvery jaguar-spot markings painted along his arms and shoulders, a woven loincloth patterned with small maize motifs, small round jade earspools, a single pale shell pendant, no headband, both arms relaxed at his sides, a small crescent moon glyph carved into a stone marker at his feet, an open plain stretching to a soft horizon in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pale silver moonlight and soft jade green and deep indigo color palette, the fourth and final true man of maize, serene and complete, quiet wonder in his upturned gaze Save the generated image file as "iqui-balam.jpg".
```

### Hun Batz y Hun Chouén — `hunbatz-hunchouen.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, two graceful spider-monkey humanoid figures with long tails and elongated limbs, holding a reed flute and a carving tool respectively, delicate jade ornaments despite their simian features, perched together on a jungle branch in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm brown fur tones and jade green and soft gold color palette, two elegant monkey-gods of music and craft, mid-performance, wistful and skilled despite their transformed bodies Save the generated image file as "hunbatz-hunchouen.jpg".
```

---

## Monstruos (12)

### Vucub-Caquix — `vucub-caquix.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, NOT human, NOT humanoid, no human face, no human anatomy, a monstrous oversized macaw demon with silver metallic eyes and teeth studded with jewels, gaudy oversized plumage in unnatural gem tones, perched atop a nance fruit tree in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, garish gold and jeweled turquoise and deep red color palette, a vain false-sun demon bird preening its bejeweled feathers, arrogance radiating from its posture Save the generated image file as "vucub-caquix.jpg".
```

### Zipacná — `zipacna.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a colossal muscular giant build, skin textured like cracked stone and packed earth, a crude necklace of large uncut jade stones and animal teeth, a rough woven loincloth, dragging an enormous felled tree trunk over one shoulder with ease, freshly reshaped mountains visible in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, stone grey and earthy brown and dull gold color palette, an arrogant mountain-making giant, immense and careless of his own strength, a cruel satisfied smirk Save the generated image file as "zipacna.jpg".
```

### Cabracán — `cabrakan.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a colossal muscular giant build mirroring his brother, a crude necklace of large uncut jade stones and animal teeth, a rough woven loincloth, cracked earth radiating outward from beneath each footstep, a mountain crumbling into rubble behind him in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, stone grey and dusty ochre and dull red color palette, a boastful earthquake giant mid-stomp, ground splitting apart beneath his feet, prideful sneer on his face Save the generated image file as "cabrakan.jpg".
```

### Camazotz — `camazotz.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a muscular humanoid build with a monstrous bat head and enormous leathery wings, a curved obsidian blade for a nose, round jade earspools, a heavy collar of jade skull pendants, carved bone bracelets, hanging upside down from the ceiling of a dark cavern chamber in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, obsidian black and deep crimson and bone white color palette, a terrifying death-bat guardian of the underworld, poised mid-strike, silent and merciless Save the generated image file as "camazotz.jpg".
```

### Xecotcovach — `xecotcovach.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, NOT human, NOT humanoid, no human face, no human anatomy, a monstrous oversized eagle with obsidian-sharp talons and burning eyes, diving with wings folded through a stormy sky in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, ash grey and burning amber and obsidian black color palette, a merciless divine punisher-eagle plunging from the clouds, talons extended for the strike Save the generated image file as "xecotcovach.jpg".
```

### Cotzbalam — `cotzbalam.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, NOT human, NOT humanoid, no human face, no human anatomy, a monstrous oversized jaguar with jagged obsidian-edged claws and fangs, muscles coiled mid-pounce, a dark ruined jungle clearing in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep jungle green and obsidian black and blood red color palette, a savage divine punisher-jaguar caught mid-leap, pure predatory fury Save the generated image file as "cotzbalam.jpg".
```

### Tucumbalam — `tucumbalam.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, NOT human, NOT humanoid, no human face, no human anatomy, a monstrous hybrid beast with long jagged claws and thick tapir-like legs, a low hunched menacing posture, a shadowy ruined clearing in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, murky brown and obsidian black and sickly grey color palette, a strange lumbering divine punisher-beast advancing steadily, unnatural and relentless Save the generated image file as "tucumbalam.jpg".
```

### Sisimite — `sisimite.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a massive hulking humanoid build entirely covered in thick shaggy hair, unusually large backward-facing feet, glowing dim eyes in a shadowed face, standing among dense misty mountain forest in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep forest brown and mossy green and pale mist grey color palette, a reclusive giant guardian of the wild mountains, watchful and silent, blending into the shadows of the trees Save the generated image file as "sisimite.jpg".
```

### Xtabay — `xtabay.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a strikingly beautiful pale-skinned build with long flowing dark hair, an elegant white huipil woven with fine geometric trim, round jade earspools, a delicate necklace of jade beads, standing seductively at the base of a great ceibo tree at night, bird-of-prey talons subtly visible where her feet should be, a lonely moonlit path in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pale moonlight silver and deep violet and jade green color palette, a hauntingly beautiful night spirit combing her hair, alluring and quietly menacing Save the generated image file as "xtabay.jpg".
```

### Kisin — `kisin.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a gaunt decayed humanoid build with cracked earth-toned skin, a crude necklace of bone and dark obsidian shards, a tattered woven loincloth, a fierce hostile expression, standing amid a jagged earthquake fissure splitting the jungle floor, a distant sun faintly visible being obscured in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, cracked earth brown and sickly grey and dull ember red color palette, a hostile earthquake demon reaching toward the sun in defiance, raw destructive fury Save the generated image file as "kisin.jpg".
```

### Wahyob — `way.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a lean humanoid build fused with jaguar and serpent features, decayed patches of skin, ornate Maya glyph markings tattooed across its body, round jade earspools, a jade and obsidian bead necklace, crouched low as if mid-transformation, a dark royal chamber dissolving into shadow in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep obsidian black and jade green and dull crimson color palette, an unsettling co-essence spirit caught between human and animal form, eerie and watchful Save the generated image file as "way.jpg".
```

### Pájaro Muán — `muan.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, NOT human, NOT humanoid, no human face, no human anatomy, a large dark owl with an ornate feathered crest and unnervingly intelligent eyes, perched silently on a dead branch under a full moon in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep midnight blue and ash grey and pale moon silver color palette, an ominous messenger owl of the death gods, still and watchful, an unmistakable omen Save the generated image file as "muan.jpg".
```

---

## Mortales (5)

### Sac-Nicté — `sac-nicte.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, an elegant youthful build, an elaborate royal huipil woven with fine geometric bridal patterns, a feathered bridal headdress, round jade earspools, a layered jade and gold bridal necklace, a white flower woven into her hair, a torn wedding canopy and a fleeing figure faintly visible in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm ivory and jade green and soft gold color palette, a beautiful princess caught between duty and love, torn emotion visible on her face Save the generated image file as "sac-nicte.jpg".
```

### Canek — `canek.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a bold athletic youthful build, a feathered warrior headdress, round jade earspools, a jade and shell warrior collar, a woven kilt with warrior glyph motifs, a determined outstretched hand as if reaching for someone, a grand ceremonial hall in chaos in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm bronze and jade green and deep red color palette, a daring prince mid-rescue, fierce devotion and urgency in his expression Save the generated image file as "canek.jpg".
```

### Ah Ulil — `ah-ulil.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, an older heavyset regal build, a thin dark mustache and short beard, a tall rigid gold and turquoise ceremonial headdress now knocked askew, large square jade earspools, a wide stiff collar of gold discs and turquoise mosaic, an ornate ruler's cloak now torn at one shoulder, gripping a broken ceremonial scepter in one clenched fist, standing rigid before an overturned altar, a distant war party gathering behind him in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep crimson and stone grey and dull gold color palette, an older humiliated lord consumed by wounded pride, cold fury barely contained beneath a rigid regal mask Save the generated image file as "ah-ulil.jpg".
```

### Xkeban — `xkeban.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a warm approachable build, a simple undyed woven huipil, a single modest jade bead necklace, small plain earspools, kneeling gently to offer food to a stray dog, a small modest home in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm amber and soft white and jade green color palette, a quietly compassionate woman caring for the forgotten, genuine tenderness in her expression despite a weary world around her Save the generated image file as "xkeban.jpg".
```

### Utz-Colel — `utz-colel.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, an elegant poised build, an immaculate finely woven huipil with intricate geometric trim, a fine feathered headpiece, round jade earspools, a layered jade and gold necklace, arms crossed with a cold dismissive posture, turning away from an unseen beggar, a pristine but sterile courtyard in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pale ivory and cold silver and muted violet color palette, an outwardly perfect woman with an unmistakably cold, distant expression Save the generated image file as "utz-colel.jpg".
```
