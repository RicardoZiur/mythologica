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
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, an elderly dignified build, ornate Maya jade and jaguar-pelt regalia, a headdress combining serpent and sky motifs, deep wrinkles suggesting immense age and wisdom, a two-headed celestial serpent arching faintly overhead in the misty background, a stepped stone temple silhouette below, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep jade green and warm gold and indigo color palette, a serene ancient sky god radiating quiet supreme authority, one hand raised as if teaching
```

### Ixchel — `ixchel.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, kneeling in profile, dramatic chiaroscuro lighting, a graceful mature build with warm sun-touched skin, deep blue hair swept back beneath an elaborate serpent headdress, a large stylized serpent head with an open jaw curling forward above her brow rendered in carved silver and pewter tones, oversized ornate silver disc earspools, a heavy layered silver and pewter collar and armbands, a wrapped blue skirt with red trim and silver belt ornaments, cradling a small white rabbit gently against her chest, a colossal full moon glowing directly behind her filling the background, faint nebula-like wisps of deep teal violet and blue haze surrounding the moon, dark atmospheric night sky, centered composition with the moon as a halo behind her head, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep indigo and pale moonlight silver and warm skin tones color palette, a serene lunar goddess of medicine and childbirth, eyes closed in quiet devotion, tender and nurturing
```

### Kukulkán — `kukulkan.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a MALE deity, a muscular regal masculine build with a strong-jawed bearded warrior-priest face, broad shoulders and bare muscular torso, wrapped in the coiling body of an enormous feathered serpent, iridescent quetzal-feather scales, jade and gold male regalia, a stepped pyramid with a serpent-shaped shadow on its staircase in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, emerald green and turquoise and gold color palette, a majestic feathered serpent god of wind and knowledge, unmistakably male, commanding and powerful, wind visibly stirring the surrounding mist
```

### Chaac — `chaac.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a MALE deity, a powerful muscular greenish-toned build, waist-deep emerging from crashing ocean waves, a towering ornate feathered headdress in deep magenta and purple plumes crowning an elaborate carved monster mask that covers his upper face like a helmet, the mask with bulging goggle-like eyes, curling nostril ornaments and sharp jutting fangs, an ornate jade and gold collar with a round central pendant, feathered pauldrons at the shoulders, a carved jade face medallion at his belt, a deep purple wrapped loincloth, one hand raised with fingers splayed as if commanding the storm, the other gripping a long wooden-shafted spear tipped with a serrated obsidian blade, turbulent grey-blue waves swirling around his waist, atmospheric haze, centered composition, highly detailed digital illustration, bold painterly linework, trending on artstation, cinematic lighting, muted olive green and deep magenta and stormy blue-grey color palette, a fierce ancient rain god risen from the sea, imposing and otherworldly, water streaming off his weapon
```

### Ah Puch — `ah-puch.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a gaunt skeletal build with patches of decaying flesh, a headdress adorned with small bells and owl feathers, dark bone jewelry, an owl and a dog faintly visible at his sides, the deepest level of a shadowy underworld in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, bone white and obsidian black and sickly green color palette, an unsettling lord of death, calm and utterly patient, bells faintly visible mid-chime
```

### Yum Kaax — `yum-kaax.jpg`
```
Flat vector illustration in the style of ancient Maya codex and painted vase art, bold clean black outlines, simple flat color fills with no gradients or shading, a young MALE god seated cross-legged in strict profile view, warm tan-gold skin, an ornate feathered headdress with a red bird crest and dotted black accents, a large round jade earspool, a layered necklace of round jade and gold beads, bare muscular torso, a red loincloth patterned with small yellow squares, holding a small bowl or cacao pod topped with sprouting green leaves and a red bud cupped gently in both hands, plain white or neutral background, centered composition, stylized ancient Maya glyph-art aesthetic, warm earthy palette of tan, red, jade green, gold and black outline, a gentle young maize god presenting his offering with quiet reverence
```

### Ek Chuah — `ek-chuah.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a wiry travel-hardened build, dark weathered skin, simple traveling robes, a merchant's pack and walking staff, cacao pods hanging from a nearby branch, a long jungle trade road stretching into the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep cacao brown and jade green and dusty gold color palette, a watchful patron of merchants and cacao, mid-stride on a long journey, alert and resourceful
```

### Buluc Chabtán — `buluc-chabtan.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a lean aggressive build, war paint and bone ornaments, gripping a spear in one hand and a burning torch in the other, a distant village silhouette engulfed in flame in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, ash grey and burning orange and dried-blood red color palette, a menacing god of sudden violence and fire, firelight flickering harshly across his face
```

### Ixtab — `ixtab.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a slender pale build, closed serene eyes, a faint dark mark of decay across her face and torso, simple flowing white burial garments, a soft rope coiled gently around one arm rather than threatening, a calm starry sky in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pale moonlight silver and deep indigo and soft violet color palette, a gentle goddess offering quiet rest rather than judgment, peaceful rather than frightening
```

### Hun-Camé — `hun-came.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a regal decayed build, skeletal patches beneath dark ornate underworld regalia, jade death-mask jewelry, seated upon a throne of carved bone and stone, the shadowy council hall of Xibalbá in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, obsidian black and bone white and deep violet color palette, an imperious supreme lord of the underworld, cold amusement in his expression as if already anticipating a trick
```

### Vucub-Camé — `vucub-came.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a regal decayed build mirroring his co-ruler, dark ornate underworld regalia, jade death-mask jewelry, seated on a matching throne of carved bone and stone, glowing torture-house silhouettes faintly visible in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, obsidian black and deep crimson and bone white color palette, the second supreme lord of Xibalbá, sly and calculating, hands steepled as if plotting the next trial
```

### Los Bacab — `bacab.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, four identical elderly divine figures standing at the four corners of the frame, each wearing regalia in a different color (red, white, black, yellow), arms raised together supporting an invisible weight above them, the starry sky resting on their shoulders, a landscape split into four directions in the misty background, atmospheric haze, symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep sky blue and earthy gold and stone grey color palette, four ancient sky-bearers straining calmly under the eternal weight of the heavens
```

### Kinich Ahau — `kinich-ahau.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a powerful regal build, a square stylized face with pronounced crossed eyes and a hooked nose, a radiant sun-disk headdress, jade and gold jewelry, blazing midday light over a stone temple in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, blazing gold and deep amber and sky blue color palette, a majestic noon sun god radiating overwhelming light, regal and unwavering
```

### Ah Mucen Cab — `ah-mucen-cab.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a slender inverted figure descending head-first from the sky, insect-like golden markings on his limbs, delicate translucent wing-like adornments, a swarm of small stingless bees drifting around him, flowering trees and hanging hives in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, honey gold and soft amber and jade green color palette, a strange gentle god of bees descending upside-down from the heavens, serene despite the odd pose
```

### Xamán Ek — `xaman-ek.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a slender vigilant build, dark traveling robes patterned with small stars, a single bright star glowing fixed above his head while other faint stars swirl slowly around him, a jungle trade path under a night sky in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep midnight blue and silver starlight and warm gold color palette, a calm watchful guide god standing motionless as a fixed point in the turning sky
```

---

## Titanes / Primordiales (5)

### Hurakán — `hurakan.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a vast formless build wreathed in three swirling forms of lightning, a single implied leg beneath a storm-wind lower body, no solid ground beneath him, a churning primordial dark sea under a lightning-lit sky in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, storm black and electric violet and gold color palette, the Heart of Sky given form from pure lightning and wind, immense and elemental, the moment of creation crackling around him
```

### Gucumatz — `gucumatz.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, NOT human, NOT humanoid, no human face, no human anatomy, a colossal serpent body entirely covered in iridescent quetzal feathers, coiling gracefully through calm dark primordial waters, faint ripples of emerging land visible beneath the surface in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep teal and emerald green and soft gold color palette, the feathered serpent of the primordial waters, serene and fluid, gliding just above the birth of the first shoreline
```

### Tepeu — `tepeu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a dignified deliberative build, austere ancient regal robes without excess ornament, hands clasped as if mid-conversation with unseen companions, a formless dark primordial void in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep indigo and muted gold and soft grey color palette, the Sovereign of the creation council, composed and authoritative, an aura of quiet deliberation rather than raw power
```

### Xmucané — `xmucane.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, an elderly wise build, simple woven robes dusted with maize flour, hands cupped around scattered maize kernels and tzité seeds as if divining, a stone grinding tool resting nearby, a modest home altar in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm maize gold and earthy brown and soft grey color palette, an ancient grandmother goddess reading fate in scattered kernels, tender and inscrutable
```

### Xpiyacoc — `xpiacoc.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, an elderly wise build mirroring Xmucané, simple woven robes, tzité seeds held in one weathered hand, a modest divination altar with a stone grinding tool nearby, a quiet dawn light in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm dawn gold and earthy brown and soft grey color palette, an ancient grandfather god of divination, calm and patient, eyes half closed as if reading an unseen pattern
```

---

## Héroes (10)

### Hunahpú — `hunahpu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a lean athletic youthful build, simple woven garments with small jaguar-spot markings, a blowgun held ready across one shoulder, a quiver of darts at his hip, a ballgame court and jungle clearing in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm gold and jade green and deep brown color palette, a sharp-eyed young hero hunter, confident and alert, mid-aim with his blowgun
```

### Ixbalanqué — `xbalanque.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a lean athletic youthful build mirroring his twin, simple woven garments with small jaguar-spot markings, a blowgun slung across his back, a calculating watchful stance, the same ballgame court and jungle clearing in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm gold and jade green and deep brown color palette, the more cunning of the twin heroes, a faint knowing smile, already three steps ahead
```

### Hun-Hunahpú — `hun-hunahpu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a lean athletic mature build, fine woven ballgame garments and simple jade jewelry, a rubber ball and protective yoke resting at his feet, a stone ballcourt under open sky in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm gold and jade green and dusk violet color palette, a passionate skilled ballplayer, joy and pride on his face, unaware of the danger his game is about to summon
```

### Vucub-Hunahpú — `vucub-hunahpu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a lean athletic build mirroring his brother, fine woven ballgame garments and simple jade jewelry, standing beside the same stone ballcourt, a rubber ball held loosely in one hand, atmospheric haze in the misty background, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm gold and jade green and dusk violet color palette, a loyal devoted brother and fellow ballplayer, a quieter more watchful presence beside his sibling
```

### Ixquic — `ixquic.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a graceful youthful build, a simple huipil, one hand extended curiously toward an unseen branch, a barren calabash tree with a faint skull hidden among its round fruit in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep violet dusk and pale jade and soft gold color palette, a curious determined young woman reaching toward forbidden fruit, quiet resolve beneath her curiosity
```

### Balam Quitzé — `balam-quitze.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a powerful newly-formed build with a subtle maize-colored skin tone, simple woven garments, eyes wide open as if seeing the entire world at once, a sacred bundle held reverently against his chest, mountains and horizon visible in every direction in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm maize gold and jade green and deep brown color palette, the first true man of maize, awe and boundless vision in his expression
```

### Balam Acab — `balam-acab.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a powerful newly-formed build with a subtle maize-colored skin tone, simple woven garments, eyes wide open with the same boundless vision as his brothers, standing beside three faint silhouettes of his fellow first men, an open horizon in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm maize gold and jade green and deep brown color palette, the second true man of maize, calm dignity, a founding patriarch's steady gaze
```

### Mahucutah — `mahucutah.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a powerful newly-formed build with a subtle maize-colored skin tone, plain unadorned woven garments, an unpolished direct bearing, standing at the edge of a wide open landscape in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm maize gold and jade green and deep brown color palette, the third true man of maize, blunt and grounded, a quiet strength in his stance
```

### Iqui Balam — `iqui-balam.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a powerful newly-formed build with a subtle maize-colored skin tone, simple woven garments, completing a group of four identical founding figures at the edge of the frame, a wide horizon under early light in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm maize gold and jade green and dawn gold color palette, the fourth and final true man of maize, serene and complete, the last piece of a founding whole
```

### Hun Batz y Hun Chouén — `hunbatz-hunchouen.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, two graceful spider-monkey humanoid figures with long tails and elongated limbs, holding a reed flute and a carving tool respectively, delicate jade ornaments despite their simian features, perched together on a jungle branch in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm brown fur tones and jade green and soft gold color palette, two elegant monkey-gods of music and craft, mid-performance, wistful and skilled despite their transformed bodies
```

---

## Monstruos (12)

### Vucub-Caquix — `vucub-caquix.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, NOT human, NOT humanoid, no human face, no human anatomy, a monstrous oversized macaw demon with silver metallic eyes and teeth studded with jewels, gaudy oversized plumage in unnatural gem tones, perched atop a nance fruit tree in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, garish gold and jeweled turquoise and deep red color palette, a vain false-sun demon bird preening its bejeweled feathers, arrogance radiating from its posture
```

### Zipacná — `zipacna.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a colossal muscular giant build, skin textured like cracked stone and packed earth, dragging an enormous felled tree trunk over one shoulder with ease, freshly reshaped mountains visible in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, stone grey and earthy brown and dull gold color palette, an arrogant mountain-making giant, immense and careless of his own strength, a cruel satisfied smirk
```

### Cabracán — `cabrakan.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a colossal muscular giant build mirroring his brother, cracked earth radiating outward from beneath each footstep, a mountain crumbling into rubble behind him in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, stone grey and dusty ochre and dull red color palette, a boastful earthquake giant mid-stomp, ground splitting apart beneath his feet, prideful sneer on his face
```

### Camazotz — `camazotz.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a muscular humanoid build with a monstrous bat head and enormous leathery wings, a curved obsidian blade for a nose, jade death ornaments, hanging upside down from the ceiling of a dark cavern chamber in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, obsidian black and deep crimson and bone white color palette, a terrifying death-bat guardian of the underworld, poised mid-strike, silent and merciless
```

### Xecotcovach — `xecotcovach.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, NOT human, NOT humanoid, no human face, no human anatomy, a monstrous oversized eagle with obsidian-sharp talons and burning eyes, diving with wings folded through a stormy sky in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, ash grey and burning amber and obsidian black color palette, a merciless divine punisher-eagle plunging from the clouds, talons extended for the strike
```

### Cotzbalam — `cotzbalam.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, NOT human, NOT humanoid, no human face, no human anatomy, a monstrous oversized jaguar with jagged obsidian-edged claws and fangs, muscles coiled mid-pounce, a dark ruined jungle clearing in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep jungle green and obsidian black and blood red color palette, a savage divine punisher-jaguar caught mid-leap, pure predatory fury
```

### Tucumbalam — `tucumbalam.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, NOT human, NOT humanoid, no human face, no human anatomy, a monstrous hybrid beast with long jagged claws and thick tapir-like legs, a low hunched menacing posture, a shadowy ruined clearing in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, murky brown and obsidian black and sickly grey color palette, a strange lumbering divine punisher-beast advancing steadily, unnatural and relentless
```

### Sisimite — `sisimite.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a massive hulking humanoid build entirely covered in thick shaggy hair, unusually large backward-facing feet, glowing dim eyes in a shadowed face, standing among dense misty mountain forest in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep forest brown and mossy green and pale mist grey color palette, a reclusive giant guardian of the wild mountains, watchful and silent, blending into the shadows of the trees
```

### Xtabay — `xtabay.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a strikingly beautiful pale-skinned build with long flowing dark hair, an elegant white huipil, standing seductively at the base of a great ceibo tree at night, bird-of-prey talons subtly visible where her feet should be, a lonely moonlit path in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pale moonlight silver and deep violet and jade green color palette, a hauntingly beautiful night spirit combing her hair, alluring and quietly menacing
```

### Kisin — `kisin.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a gaunt decayed humanoid build with cracked earth-toned skin, a fierce hostile expression, standing amid a jagged earthquake fissure splitting the jungle floor, a distant sun faintly visible being obscured in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, cracked earth brown and sickly grey and dull ember red color palette, a hostile earthquake demon reaching toward the sun in defiance, raw destructive fury
```

### Wahyob — `way.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a lean humanoid build fused with jaguar and serpent features, decayed patches of skin, ornate Maya glyph markings tattooed across its body, crouched low as if mid-transformation, a dark royal chamber dissolving into shadow in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep obsidian black and jade green and dull crimson color palette, an unsettling co-essence spirit caught between human and animal form, eerie and watchful
```

### Pájaro Muán — `muan.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, NOT human, NOT humanoid, no human face, no human anatomy, a large dark owl with an ornate feathered crest and unnervingly intelligent eyes, perched silently on a dead branch under a full moon in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep midnight blue and ash grey and pale moon silver color palette, an ominous messenger owl of the death gods, still and watchful, an unmistakable omen
```

---

## Mortales (5)

### Sac-Nicté — `sac-nicte.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, an elegant youthful build, an elaborate royal huipil and jade bridal jewelry, a white flower woven into her hair, a torn wedding canopy and a fleeing figure faintly visible in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm ivory and jade green and soft gold color palette, a beautiful princess caught between duty and love, torn emotion visible on her face
```

### Canek — `canek.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a bold athletic youthful build, fine royal warrior garments, a determined outstretched hand as if reaching for someone, a grand ceremonial hall in chaos in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm bronze and jade green and deep red color palette, a daring prince mid-rescue, fierce devotion and urgency in his expression
```

### Ah Ulil — `ah-ulil.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a proud regal build, fine ceremonial wedding garments now in disarray, clenched fists, standing alone before an empty altar, a distant war party gathering in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep crimson and stone grey and dull gold color palette, a humiliated lord consumed by wounded pride, cold fury barely contained
```

### Xkeban — `xkeban.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a warm approachable build, simple humble garments, kneeling gently to offer food to a stray dog, a small modest home in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm amber and soft white and jade green color palette, a quietly compassionate woman caring for the forgotten, genuine tenderness in her expression despite a weary world around her
```

### Utz-Colel — `utz-colel.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, an elegant poised build, immaculate fine garments and refined jewelry, arms crossed with a cold dismissive posture, turning away from an unseen beggar, a pristine but sterile courtyard in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pale ivory and cold silver and muted violet color palette, an outwardly perfect woman with an unmistakably cold, distant expression
```
