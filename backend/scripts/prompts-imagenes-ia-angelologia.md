# Prompts para generar los retratos de personajes de Angelología con Gemini

Mismo formato que los libros anteriores: un prompt por personaje, retrato de cuerpo completo,
formato vertical. Se generan con **Gemini** — pega el prompt completo directo en el chat. Si
el resultado no convence, pedile a Gemini 2-3 variaciones o ajustá algún detalle del prompt.

## Después de generar cada imagen

1. Descarga el archivo.
2. Renómbralo exactamente como el `slug` del personaje (ej. `miguel.jpg`).
3. Guárdalo en una carpeta local `angelologia/` — cuando tengas todos, avisame y los subo al
   sitio.

## Portada — `portada-fondo.jpg`

Fondo de la tapa del libro (flipbook y PDF): un degradado oscuro se aplica encima por CSS, más
fuerte hacia abajo, para que el título dorado se lea bien. Proporción recomendada: vertical
alta (9:16 o 1:2).

```
Semi-realistic fantasy digital painting, epic wide vertical composition, dramatic radiant dawn lighting with a deep celestial blue and warm gold sky, towering columns of soft luminous cloud rising toward an unseen radiant source of light, faint silhouettes of distant mountain peaks below the clouds, drifting golden haze, atmospheric haze, painterly rendering, highly detailed digital art, trending on artstation, cinematic wide dynamic range, no text or writing anywhere in the image, no visible human figures, crowds or faces, keep the lower half of the frame calm, dark and uncluttered (it will be covered by a title later), deep celestial blue and radiant gold and soft cloud white color palette, sense of ancient sacred grandeur across the highest heavens
```

Después de generarla: renómbrala `portada-fondo.jpg` y guárdala junto con los personajes, en
la carpeta `angelologia/`.

## El emblema (`portada-emblema.png`)

No hace falta pedírselo a Gemini — lo genero yo mismo con código (mismo método que los otros
libros). Para Angelología voy a usar un par de alas extendidas enmarcando un halo circular, el
símbolo más directamente reconocible de lo angelical en general, más allá de cualquier
tradición específica.

## Nota importante sobre el tono de este libro

Igual que Demonología, varios personajes de Angelología son figuras históricas reales (santos,
Papas, teólogos, profetas y patriarcas bíblicos y coránicos) tratadas con el mismo criterio
enciclopédico y respetuoso que el resto del catálogo — ni sensacionalista ni irreverente.
Priorizá siempre una estética digna, luminosa y serena por sobre cualquier tono de terror,
sobre todo para **Enoc, Jacob, Abraham, Daniel, Zacarías, María de Nazaret, Agar, Elías, Lot,
Gedeón, Pseudo-Dionisio Areopagita, Tomás de Aquino, Emanuel Swedenborg, John Dee y Gregorio
Magno**. Para **María de Nazaret** en particular, seguí la iconografía tradicional respetuosa
de la Anunciación (manto azul y blanco, gesto sereno, sin nada provocador). **No se incluyó al
profeta Mahoma como personaje** de este libro, respetando el rechazo generalizado dentro del
islam a su representación visual.

## Nota sobre personajes sin forma humana o híbridos

Llevan `NOT human, NOT humanoid, no human face, no human anatomy` incorporado directo en su
prompt: **Los Ofanim** (ruedas puras cubiertas de ojos) y **Las Cuatro Criaturas Vivientes**
(seres híbridos de cuatro rostros). **Los Serafines**, **Los Querubines Bíblicos**, **Rahab** y
**Malaj HaMavet** conservan formas humanoides con rasgos alados o híbridos marcados. Casi todos
los ángeles llevan `androgynous` o un marcador explícito de género según lo indicado en su
propia ficha, dado que la tradición angelical los describe generalmente sin sexo biológico
fijo, salvo cuando el propio texto los describe con un género predominante.

---

## Primordiales (5)

### Metatrón — `metatron.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, radiant celestial lighting, an androgynous majestic figure seated on a throne beside an even greater unseen radiant light, countless eyes subtly visible within layered wings, a crown inscribed with glowing letters, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, radiant gold and deep celestial blue and pure white color palette, the highest angel closest to the divine throne, vast and serene
```

### Sandalfón — `sandalfon.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, soft radiant lighting, an androgynous towering figure whose head fades into distant clouds far above the frame, gathering countless small glowing wisps of light (prayers) into a woven crown, a vast landscape far below at his feet, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm gold and soft cloud white and pale sky blue color palette, the colossal angel who gathers the prayers of humanity, gentle and immense
```

### Shejiná — `shekinah.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, warm radiant lighting, a graceful FEMALE presence formed partly of soft luminous cloud and fire, flowing radiant robes, a gentle warm glow surrounding her entirely, standing above a humble tabernacle in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm gold and soft radiant white and gentle rose color palette, the indwelling presence of the divine among humanity, warm and immanent
```

### Los Serafines de la Visión de Isaías — `serafines.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, blazing radiant lighting, an androgynous six-winged figure wreathed in flame, two wings covering the face, two covering the feet, two spread wide for flight, holding a glowing ember with tongs, smoke swirling in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, blazing gold and deep ember orange and pure white color palette, the burning ones who cry holy before the throne, ardent and overwhelming
```

### Las Cuatro Criaturas Vivientes de Ezequiel — `criaturas-vivientes.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic stormy radiant lighting, NOT human, NOT humanoid, a towering winged being with four faces simultaneously visible (a man, a lion, an ox and an eagle), four wings touching the wings of unseen companions, standing beside interlocking wheels covered entirely in eyes, a glowing sapphire throne faintly visible above in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, storm grey and radiant gold and deep sapphire blue color palette, the primordial bearers of the divine throne, vast and awe-inspiring
```

## Grandes arcángeles y ángeles nombrados (15)

### Miguel — `miguel.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic radiant battle lighting, a MALE figure, a powerful commanding warrior build with large luminous wings, fine celestial armor, gripping a blazing sword raised high, a defeated dark serpentine shape faintly visible beneath his feet, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, radiant gold and pure white and deep celestial blue color palette, the great commander of the heavenly armies, formidable and triumphant, unmistakably male
```

### Gabriel — `gabriel.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, soft radiant lighting, an androgynous graceful figure with large luminous wings, flowing pale robes, holding a lily and a trumpet, a gentle radiant expression, soft golden light in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm gold and pure white and soft sky blue color palette, the great messenger of decisive revelations, gentle and radiant
```

### Rafael — `rafael.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, warm traveling lighting, an androgynous figure with large luminous wings, simple traveler's robes disguising his true nature, holding a fish and a walking staff, a young companion faintly visible walking beside him in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm amber gold and soft earth brown and pale sky blue color palette, the healing angel who walked disguised among mortals, warm and reassuring
```

### Uriel — `uriel.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, radiant cosmic lighting, an androgynous figure with large luminous wings wreathed in starlight, robes patterned with constellations, holding a flame that reveals the movements of sun, moon and stars, a vast cosmic backdrop in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep cosmic indigo and radiant gold and starlight silver color palette, the angel of cosmic wisdom and revelation, vast and illuminating
```

### Raguel — `raguel.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, stern radiant lighting, an androgynous figure with large luminous wings, formal disciplined robes, a stern watchful expression, observing a distant assembly of angels in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep silver grey and radiant gold and pale blue color palette, the angel who watches over the conduct of the angels themselves, stern and vigilant
```

### Remiel — `remiel.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, soft hopeful lighting, an androgynous figure with large luminous wings, flowing pale robes, gently guiding a faint translucent soul-like light upward, soft clouds in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, soft pale gold and gentle white and pale rose color palette, the angel of hope and true visions, gentle and reassuring
```

### Saraqael — `saraqael.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dim watchful lighting, an androgynous figure with large luminous wings, formal watchful robes, a thoughtful contemplative expression, faint translucent spirit-forms visible in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, muted silver grey and soft gold and pale blue color palette, the angel who watches over the spirits that transgress, watchful and solemn
```

### Israfil — `israfil.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic radiant lighting, a MALE figure, an immense powerful build with vast luminous wings, holding a great trumpet raised to his lips, poised and ready, a vast sky in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, radiant gold and deep sky blue and pure white color palette, the angel who will sound the trumpet of the end of the world, immense and poised, unmistakably male
```

### Azrael — `azrael.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, somber radiant lighting, a MALE figure, a tall solemn build with countless subtle eyes woven into vast dark-feathered wings, flowing dark robes, a compassionate solemn expression, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep twilight indigo and soft silver and muted gold color palette, the angel of death who separates soul from body with compassion, solemn and inevitable, unmistakably male
```

### Malik — `malik.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic severe fiery lighting, a MALE figure, a towering stern build with dark powerful wings, standing before great gates wreathed in flame, an unyielding severe expression, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep ember red and obsidian black and dull bronze color palette, the unyielding guardian of Hell's gates, severe and implacable, unmistakably male
```

### Ridwán — `ridwan.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, radiant welcoming lighting, an androgynous figure with vast luminous wings, standing before great gates wreathed in light and blossoming gardens, a warm welcoming expression, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, radiant gold and lush garden green and pure white color palette, the joyful guardian of Paradise's gates, warm and welcoming
```

### Múnkar y Nakir — `munkar-y-nakir.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic eerie lighting, two dark stern androgynous figures standing side by side, thunderous presence, glowing eyes like lightning, dark iron-toned features, a solemn graveyard at night in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep midnight black and pale lightning silver and dull iron grey color palette, the twin examiners of the newly dead, dreadful and exacting
```

### Harut y Marut — `harut-y-marut.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic ancient lighting, two androgynous winged figures standing together, ancient Babylonian robes, one gesturing a warning, an ancient ziggurat fading into haze in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm sandstone gold and deep shadow black and pale sky blue color palette, the two angels sent to Babylon as a deliberate test, solemn and cautionary
```

### Jofiel — `jofiel.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, radiant lighting, an androgynous graceful figure with luminous wings, gripping a rotating sword of fire, standing guard before a lush garden gate, a serene yet vigilant expression, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, radiant gold and lush garden green and soft ember orange color palette, the angel of beauty and wisdom guarding the gate of Eden, graceful and vigilant
```

### Chamuel — `chamuel.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, warm gentle lighting, an androgynous figure with soft luminous wings, flowing warm-toned robes, a compassionate gentle expression, hands clasped in comfort, soft warm light in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm rose gold and soft ivory and gentle amber color palette, the angel of love and reconciliation, tender and comforting
```

## Héroes: profetas y patriarcas que se encontraron con ángeles (10)

### Enoc — `enoc.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, radiant transformative lighting, a MALE figure, a dignified robed elder mid-transformation, one side still fully human, the other beginning to glow with angelic radiance and faint wings emerging, ascending through parting clouds, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, radiant gold and soft cloud white and warm amber color palette, the man who walked with God and was transformed, awestruck and radiant, unmistakably male
```

### Jacob — `jacob.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic dawn lighting, a MALE figure, a rugged determined build gripping firmly onto a luminous winged opponent, both locked in a struggle at a riverside ford at first light, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm dawn gold and deep river blue and soft mist grey color palette, the patriarch who wrestled through the night and prevailed, determined and unyielding, unmistakably male
```

### Abraham — `abraham.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, warm hospitable lighting, a MALE figure, a dignified elderly patriarch bowing in welcome before three robed travelers, a tent and oak trees in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm earthy gold and soft desert tan and pale sky blue color palette, the patriarch who welcomed three heavenly visitors with generous hospitality, warm and reverent, unmistakably male
```

### Daniel — `daniel.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic visionary lighting, a MALE figure, a dignified robed prophet kneeling low, a radiant winged figure of overwhelming brilliance approaching from the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, radiant gold and deep royal purple and pale silver color palette, the prophet whose visions were interpreted by Gabriel himself, awestruck and receptive, unmistakably male
```

### Zacarías — `zacarias.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, soft reverent lighting, a MALE figure, a dignified elderly priest in formal temple robes, a censer of incense in hand, a startled reverent expression, a luminous winged figure beside the altar in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm gold and deep temple crimson and soft ivory color palette, the priest struck silent by his own doubt, reverent and astonished, unmistakably male
```

### María de Nazaret — `maria.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, soft radiant lighting, a serene young FEMALE figure in traditional modest blue and white robes, hands folded gently over her chest, a serene humble expression, a luminous winged figure kneeling respectfully in the misty background, a white lily nearby, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, soft radiant gold and gentle sky blue and pure white color palette, treated with traditional reverent iconography, serene and humbly accepting
```

### Agar — `agar.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, warm desert dawn lighting, a resilient FEMALE figure kneeling beside a well of water in the desert, a luminous winged figure appearing above her in the misty background, an expression of relief and wonder, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm desert gold and pale dawn blue and soft sand tan color palette, the woman who saw God and lived, resilient and awestruck
```

### Elías — `elias.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, soft desert dawn lighting, a MALE figure, an exhausted robed prophet lying beneath a solitary broom tree, a gentle luminous winged figure touching his shoulder, a simple cake and jar of water nearby, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm amber gold and soft desert tan and pale dawn blue color palette, the exhausted prophet restored by an angel's simple kindness, weary and comforted, unmistakably male
```

### Lot — `lot.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic urgent lighting, a MALE figure, a frightened robed man being pulled forward by two luminous winged figures, a burning city glowing in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, blazing ember orange and deep smoky black and pale urgent gold color palette, the man rescued from a doomed city just in time, urgent and fearful, unmistakably male
```

### Gedeón — `gedeon.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, warm rustic lighting, a MALE figure, a humble farmer kneeling before a rock, fire erupting from the stone consuming an offering, a luminous winged figure standing beside an oak tree in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm ember gold and earthy green and soft dusk grey color palette, the reluctant hero given an undeniable sign, humble and awestruck, unmistakably male
```

## Monstruos: las formas angelicales más extrañas y temibles (12)

### Los Ofanim — `ofanim.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, radiant cosmic lighting, NOT human, NOT humanoid, an intricate wheel within a wheel entirely covered in eyes along its rim, glowing faintly, moving in perfect synchrony beside a towering four-faced being in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, radiant gold and deep sapphire blue and pale ivory color palette, the primordial wheels that bear the divine throne, alien and awe-inspiring
```

### Los Querubines Bíblicos — `querubines.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic radiant lighting, a towering winged guardian with four faces (man, lion, ox and eagle), four powerful wings, a body covered entirely in eyes, gripping a revolving sword of fire, guarding a garden gate in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, blazing gold and deep garden green and pale ember orange color palette, the true biblical guardian, nothing like the cherub babies of later art, imposing and alien
```

### Los Erelim — `erelim.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic somber lighting, a powerful androgynous winged warrior figure weeping openly, strong armored build contrasted with visible tears, standing amid distant ruins in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep bronze and muted grey and soft pale gold color palette, the valiant ones whose strength is expressed through grief, powerful and sorrowful
```

### Camael — `camael.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic severe lighting, a MALE figure, a stern powerful warrior build with dark red-tinged wings, gripping a blazing sword, an unyielding severe expression, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep crimson and dark bronze and shadow black color palette, the angel of severity who executes strict judgment, formidable and exacting, unmistakably male
```

### Dumah — `dumah.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dim solemn lighting, an androgynous shadowy winged figure standing utterly still beside a silent grave, a finger raised to unseen lips in a gesture of silence, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep shadow black and pale moonlight silver and muted grey color palette, the angel of the silence of the grave, still and solemn
```

### Gadreel — `gadreel.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic somber lighting, a MALE figure, a fallen winged figure with dark-tinged feathers, holding a forged iron sword and shield, a shadowy expression of guilt, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep iron grey and dull bronze and shadow black color palette, the watcher accused of teaching humanity the tools of war, guilty and fallen, unmistakably male
```

### Rahab — `rahab.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic oceanic lighting, a proud serpentine winged figure rising defiantly from churning primordial waters, dark scaled skin, a moment before destruction, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep ocean black and stormy teal and pale foam white color palette, the proud angel of primordial chaos who defied the order of creation, defiant and doomed
```

### Sariel — `sariel.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, cool moonlit lighting, an androgynous winged figure bathed in pale lunar light, an ambiguous expression between loyalty and doubt, a crescent moon glowing behind him, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pale moonlight silver and deep midnight blue and soft grey color palette, the angel of ambiguous nature associated with the moon, mysterious and uncertain
```

### El Malaj HaMavet — `malaj-hamavet.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic somber lighting, a towering dark-robed winged figure covered in countless subtle eyes, gripping a sword with a single glowing drop suspended from its tip, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep shadow black and pale silver and muted gold color palette, the folkloric angel of death who watches all things, vast and inevitable
```

### Laila — `lailah.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, soft nocturnal lighting, a gentle androgynous winged figure cradling a faint glowing light representing an unborn soul, guiding it past visions of paradise and shadow, a starry night sky in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep night indigo and soft starlight silver and gentle gold color palette, the angel who teaches every soul before birth and erases the memory, tender and mysterious
```

### Temeluco — `temeluchus.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic severe fiery lighting, a MALE figure, a stern towering winged figure administering judgment amid smoke and flame, an unyielding severe expression, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep ember red and obsidian black and dull bronze color palette, the angel who administers punishment fitted precisely to each sin, severe and exacting, unmistakably male
```

### Nuriel — `nuriel.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic fiery stormy lighting, a towering androgynous figure wreathed entirely in fire, hailstones swirling violently around him, an overwhelming radiant presence, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, blazing ember orange and storm grey and pale hail white color palette, the fiery angel of hail and violent storms, overwhelming and immense
```

## Mortales: teólogos y místicos históricos (5)

### Pseudo-Dionisio Areopagita — `pseudo-dionisio-areopagita.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, warm scholarly lighting, a MALE figure, a dignified early Byzantine monk-scholar in simple formal robes, writing carefully in a manuscript, a diagram of nine concentric circles glowing faintly in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm parchment gold and deep Byzantine indigo and soft ivory color palette, the anonymous author who systematized the nine choirs of angels, thoughtful and deliberate, unmistakably male
```

### Tomás de Aquino — `tomas-de-aquino.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, warm scholarly lighting, a MALE figure, a dignified Dominican friar in a simple black and white habit, writing in a large volume, a subtle glowing diagram of angelic hierarchy faintly visible in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm parchment gold and deep scholarly black and soft ivory color palette, the Angelic Doctor who defined the philosophy of angels, thoughtful and rigorous, unmistakably male
```

### Emanuel Swedenborg — `emanuel-swedenborg.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, radiant visionary lighting, a MALE figure, a dignified 18th-century Swedish scholar in formal period attire, an expression of serene wonder, faint luminous figures of angels visible conversing with him in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, radiant gold and deep scholarly navy and soft heavenly white color palette, the scientist who conversed directly with angels, serene and transformed, unmistakably male
```

### John Dee — `john-dee.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic mystical lighting, a MALE figure, a dignified Elizabethan scholar in formal dark robes, gazing intently into a glowing crystal orb, symbols of an unknown celestial alphabet faintly visible in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep mystical indigo and warm candle gold and soft crystal silver color palette, the scholar who sought to speak the language of angels, intent and searching, unmistakably male
```

### Gregorio Magno — `gregorio-magno.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic reverent lighting, a MALE figure, a dignified early medieval pope in formal white and gold papal vestments, holding an open manuscript, a diagram of nine ordered choirs glowing softly in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pure white and warm gold and soft heavenly light color palette, the pope who refined the order of the nine celestial choirs, solemn and authoritative, unmistakably male
```
