# Prompts para generar los retratos de personajes de Mitología Africana con Gemini

Mismo formato que los libros anteriores: un prompt por personaje, retrato de cuerpo completo,
formato vertical. Se generan con **Gemini** — pega el prompt completo directo en el chat. Si
el resultado no convence, pedile a Gemini 2-3 variaciones o ajustá algún detalle del prompt.

## Después de generar cada imagen

1. Descarga el archivo.
2. Renómbralo exactamente como el `slug` del personaje (ej. `shango.jpg`).
3. Guárdalo en una carpeta local `mitologia-africana/` — cuando tengas todos, avisame y los
   subo al sitio.

## Portada — `portada-fondo.jpg`

Fondo de la tapa del libro (flipbook y PDF): un degradado oscuro se aplica encima por CSS, más
fuerte hacia abajo, para que el título dorado se lea bien. Proporción recomendada: vertical
alta (9:16 o 1:2).

```
Semi-realistic fantasy digital painting, epic wide vertical composition, dramatic dusk lighting with a deep crimson and burnt orange sky, silhouette of an ancient baobab tree on a savanna ridge, distant flat-topped acacia trees scattered across golden grassland, a wide slow river reflecting the sky in the foreground, drifting dust and haze between the horizon, atmospheric haze, painterly rendering, highly detailed digital art, trending on artstation, cinematic wide dynamic range, no text or writing anywhere in the image, no visible human figures, crowds or faces, keep the lower half of the frame calm, dark and uncluttered (it will be covered by a title later), deep crimson red and warm ochre gold and dusty savanna green color palette, sense of ancient mythic grandeur across the African savanna at dusk
```

Después de generarla: renómbrala `portada-fondo.jpg` y guárdala junto con los personajes, en
la carpeta `mitologia-africana/`.

## El emblema (`portada-emblema.png`)

No hace falta pedírselo a Gemini — lo genero yo mismo con código (mismo método que los otros
libros). Para Africana voy a usar el símbolo Adinkra Sankofa (un pájaro mirando hacia atrás
mientras camina hacia adelante), uno de los símbolos más reconocibles y cargados de significado
de toda la tradición akan, que representa aprender del pasado para construir el futuro.

## Nota sobre personajes sin forma humana o híbridos

Llevan `NOT human, NOT humanoid, no human face, no human anatomy` incorporado directo en su
prompt: **Grootslang** (híbrido elefante-serpiente), **Impundulu** (ave pura), **Mokele-mbembe**
y **Ninki Nanka** (criaturas puramente animales/dracónicas). **Kaggen** (mantis con capacidad de
forma humana), **Anansi** (araña con capacidad de forma humana), **Adze**, **Tikoloshe**,
**Aigamuxa**, **Popobawa**, **Obayifo**, **Eloko** y **Mamlambo** conservan forma humanoide o
son cambiaformas explícitos. Varios dioses y héroes masculinos llevan `a MALE deity` /
`unmistakably male` explícito para evitar que Gemini los genere como mujeres por defecto.

---

## Titanes / Primordiales (5)

### Mawu — `mawu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), cool moonlit lighting, a serene FEMALE build, dark brown skin, African facial features, flowing deep blue and silver robes, a crescent moon glowing softly behind her head, standing atop the coiled body of an immense cosmic serpent, a star-filled night sky in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep midnight blue and pale silver and soft violet color palette, the primordial mother of the moon and the night who shaped the world, serene and ancient
```

### Lisa — `lisa.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), radiant solar lighting, a MALE deity, dark brown skin, African facial features, a powerful radiant build, robes woven from golden fire, a blazing sun disc glowing behind his head, standing atop the coiled body of an immense cosmic serpent, a bright daytime sky in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, radiant gold and warm ember orange and deep bronze color palette, the primordial father of the sun and fire who shaped the world, powerful and ancient, unmistakably male
```

### Nyame — `nyame.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), vast celestial lighting, a MALE deity, dark brown skin, African facial features, a distant majestic elderly build, flowing robes that fade into clouds at the hem, seated far above a golden storybook-like glow representing countless tales, a vast sky in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep sky blue and warm gold and soft white cloud color palette, the distant supreme god of the sky and origin of all stories, vast and serene, unmistakably male
```

### Unkulunkulu — `unkulunkulu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), warm earthy dawn lighting, a MALE build, dark brown skin, African facial features, an ancient dignified figure emerging from a great bed of tall reeds, simple earth-toned wrap, a calm wise expression, a chameleon resting on a nearby branch, misty grassland in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm earthy gold and reed green and soft dawn light color palette, the first ancestor who emerged from the primordial reeds, ancient and foundational, unmistakably male
```

### /Kaggen — `kaggen.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), warm golden lighting, NOT human, NOT humanoid, a large upright praying mantis with an unusually wise and expressive posture, delicate folded forelegs, standing before a great eland antelope in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm gold and soft sage green and dusty desert tan color palette, the trickster creator spirit of the San people in the form of a mantis, clever and gentle
```

## Dioses (15)

### Olodumare — `olodumare.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), vast radiant lighting, a MALE deity, an elderly majestic build, dark brown skin, African facial features, a dignified bearded face partly dissolving into radiant light, robes that dissolve into pure light at the edges, floating above a vast golden void, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, radiant gold and pure white and soft void black color palette, the supreme trascendent source of all existence, vast and unknowable, unmistakably male
```

### Obatala — `obatala.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), soft radiant lighting, a MALE deity, dark brown skin, African facial features, a dignified statuesque build, a tall pointed conical white beaded headdress with a small ornament at its tip and a dense beaded fringe veil hanging down over his face obscuring his features, an elaborate wide flowing pure white ceremonial robe with a bell-shaped pleated flared hem covered in scalloped embroidered patterns, one hand resting confidently on his hip, the other gripping a tall ceremonial staff (opa) topped with an ornate finial and hung with small bells, entirely rendered in luminous white and pale silver tones as if carved from polished ivory, standing solemnly over newly formed land in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pure white and soft ivory and pale silver color palette, the orisha creator who shaped the first human bodies, regal and dignified, unmistakably male
```

### Yemoja — `yemoja.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic oceanic lighting, a graceful maternal FEMALE build, dark brown skin, African facial features, flowing blue and white robes evoking waves, layered strands of crystal beads, holding a hand mirror, standing at the edge of a calm river meeting the sea, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep ocean blue and pearl white and soft silver color palette, the mother orisha of rivers and the sea, nurturing and vast
```

### Oshun — `oshun.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), warm golden lighting, a graceful FEMALE build, dark brown skin, African facial features, flowing yellow and gold robes, brass bracelets and a peacock feather fan, honey dripping gently from one hand, standing beside a calm golden river, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm gold and honey amber and soft river blue color palette, the orisha of love, beauty and the sweet river, radiant and alluring
```

### Shango — `shango.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic storm lighting, a MALE deity, dark brown skin, African facial features, a powerful muscular warrior build, red and white beaded regalia, gripping a double-headed axe crackling with electricity, a ram standing beside him, storm clouds and lightning in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, storm grey and blazing red and deep gold color palette, the orisha king of thunder and lightning, fierce and commanding, unmistakably male
```

### Ogún — `ogun.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic forge lighting, a MALE deity, dark brown skin, African facial features, a powerful rugged warrior build, flowing green cloth wrap and sash draped over his shoulder and waist, strands of raw palm frond fiber (mariwo) at his wrists and ankles, gripping a heavy forged machete, cutting through dense jungle vegetation, misty forest in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep forest green and iron grey and forge orange color palette, the orisha of iron who opened the path through the primordial jungle, rugged and relentless, unmistakably male
```

### Eshu — `eshu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dynamic crossroads lighting, a lithe androgynous figure, dark brown skin, African facial features, a two-toned red and black cap, a walking staff, standing at a crossroads where paths diverge, a mischievous knowing smile, misty countryside in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep crimson and shadow black and warm dust gold color palette, the orisha guardian of crossroads and messenger between worlds, playful and unpredictable
```

### Oya — `oya.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic tempest lighting, a fierce commanding FEMALE build, dark brown skin, African facial features, flowing maroon and copper robes whipped by wind, gripping a sword raised high, a violent whirlwind swirling around her, storm clouds in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep maroon and copper orange and storm grey color palette, the orisha of storms and transformative change, fierce and unstoppable
```

### Orunmila — `orunmila.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), soft wise lighting, a MALE deity, dark brown skin, African facial features, a dignified calm elderly build, simple green and yellow robes, holding a divination chain (opele) and a tray of sacred seeds, a serene knowing expression, misty countryside in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, soft sage green and warm gold and pale ivory color palette, the orisha of wisdom and the Ifá oracle, calm and all-knowing, unmistakably male
```

### Osanyin — `osanyin.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dappled forest lighting, a MALE deity, dark brown skin, African facial features, an ordinary human-sized but deliberately lopsided asymmetrical body (NOT a giant, NOT a cyclops, a normal humanoid frame with mismatched sides), a single normal-sized eye set in its regular position on one side of an otherwise humanoid face while the other eye socket is closed and smooth, one small withered ear on one side of his head paired with one unnaturally large prominent ear on the other side, one fully formed muscular arm on one side while the other side of his torso tapers smoothly with no arm at all, one strong leg planted on the ground while he balances his weight by leaning on a tall wooden staff instead of a second leg, robes woven from leaves and vines, the staff he leans on topped with a small bird figure (opa osanyin), deep forest in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep forest green and earthy brown and soft gold color palette, the orisha guardian of medicinal herbs and forest knowledge, strange and knowing, unmistakably male
```

### Oba — `oba.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), somber river lighting, a sorrowful dignified FEMALE build, dark brown skin, African facial features, flowing dusty rose and coral pink robes with rusty brown accents, a cloth veil partially covering one side of her head, gripping a golden sword, standing at a turbulent river confluence, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, dusty rose pink and rusty brown and muted river grey color palette, the orisha of the turbulent river born from heartbreak and betrayal, sorrowful and proud
```

### Aganju — `aganju.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic desert heat lighting, a MALE deity, dark brown skin, African facial features, a rugged powerful build, flowing deep red robes with maroon accents, gripping two matching battle axes crossed or held one in each hand, a small ferryman's boat resting at a river crossing behind him, a vast arid volcanic landscape in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep red and maroon and volcanic ember orange color palette, the orisha of the wilderness and volcanic desert, solitary and enduring, unmistakably male
```

### Anansi — `anansi.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), warm storytelling lighting, a clever humanoid figure with subtle spider-like features (extra shadowed limbs, small multifaceted eyes), dark brown skin, African facial features, fine patterned cloth wrap, a mischievous clever grin, an intricate web glowing faintly in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm amber gold and deep earth brown and soft web silver color palette, the trickster spider god who owns all the world's stories, cunning and endlessly clever
```

### Mami Wata — `mami-wata.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic moonlit water lighting, a hypnotically beautiful FEMALE build, dark brown skin, African facial features, long lustrous dark hair, the lower body transitioning into a shimmering fish or serpent tail, holding a mirror and comb, a large serpent coiled around her torso, calm dark water in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep water black and pearl silver and soft moonlight blue color palette, the pan-African spirit of water, wealth and beguiling danger, mesmerizing and mysterious
```

### Amadioha — `amadioha.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic thunderous lighting, a MALE deity, dark brown skin, African facial features, a powerful stern build, dark ceremonial regalia with brass ornaments, a ram standing beside him, a bolt of lightning striking the ground near his feet, storm clouds in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, storm grey and blazing white lightning and deep bronze color palette, the Igbo god of thunder who punishes liars and oath-breakers, stern and absolute, unmistakably male
```

## Héroes (10)

### Sundiata Keita — `sundiata-keita.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic dawn lighting, a MALE build, dark brown skin, African facial features, a powerful regal figure gripping a bent iron bar with one hand, fine West African royal robes, a determined triumphant expression, a distant savanna kingdom in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm gold and deep bronze and savanna green color palette, the lion of Mali who overcame every hardship to found an empire, powerful and unbreakable, unmistakably male
```

### Mansa Musa — `mansa-musa.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic radiant lighting, a MALE build, dark brown skin, African facial features, a dignified regal figure in opulent gold-threaded robes, an ornate gold crown, holding a large gold nugget, a caravan of camels fading into the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, radiant gold and deep royal purple and warm bronze color palette, the emperor whose wealth was the greatest ever known, magnificent and generous, unmistakably male
```

### Shaka Zulu — `shaka-zulu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic battle lighting, a MALE warrior, dark brown skin, African facial features, a powerful commanding build, traditional Zulu warrior regalia with a cowhide shield, gripping the short iklwa spear, an army in disciplined formation in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep bronze and earthy red and storm grey color palette, the king who revolutionized the art of war, formidable and commanding, unmistakably male
```

### Moremi Ajasoro — `moremi-ajasoro.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic torchlit lighting, a determined dignified FEMALE build, dark brown skin, African facial features, fine Yoruba royal wrapper and beaded jewelry, holding a burning torch, a raffia-covered mask fading into ash in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm torch orange and deep royal blue and soft ash grey color palette, the queen who sacrificed everything to save her city, brave and resolute
```

### Nzinga Mbandi — `nzinga-mbandi.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic regal lighting, a commanding dignified FEMALE build, dark brown skin, African facial features, fine royal Central African regalia with beaded jewelry, seated upright on an improvised throne, a stern unshakeable expression, a colonial negotiation scene in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep royal red and warm bronze and storm grey color palette, the queen who never negotiated from a position of weakness, shrewd and unyielding
```

### Yaa Asantewaa — `yaa-asantewaa.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic dignified lighting, a fierce commanding FEMALE build, dark brown skin, African facial features, fine kente cloth robes, gripping a ceremonial sword raised high, a golden stool glowing faintly in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm gold and deep crimson kente and earthy bronze color palette, the queen mother who led her people to war for the sacred golden stool, fierce and inspiring
```

### Osei Tutu — `osei-tutu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic celestial lighting, a MALE build, dark brown skin, African facial features, a dignified regal figure kneeling with a golden stool descending onto his lap from a lightning-lit sky, fine ceremonial kente robes, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, radiant gold and storm grey and deep kente crimson color palette, the founding king who received the sacred golden stool from the sky, awestruck and reverent, unmistakably male
```

### Behanzin — `behanzin.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic defiant lighting, a MALE build, dark brown skin, African facial features, a powerful regal warrior figure, fine Dahomey royal regalia, gripping a ceremonial sword, ranks of female Amazon warriors faintly visible in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep royal red and bronze and storm grey color palette, the last independent king who resisted colonization to the end, defiant and unbroken, unmistakably male
```

### Askia Mohammed — `askia-mohammed.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic scholarly lighting, a MALE build, dark brown skin, African facial features, a dignified regal figure in fine Islamic Sahelian robes, holding a manuscript, the mud-brick towers of Timbuktu in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm sandstone gold and deep indigo and soft ivory color palette, the emperor who expanded Songhai into a center of learning, dignified and expansive, unmistakably male
```

### Samory Touré — `samory-toure.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic strategic lighting, a MALE build, dark brown skin, African facial features, a sharp commanding figure, a flowing wide-sleeved Mandinka boubou robe in deep indigo and white, an embroidered West African Muslim cap (kufi), a leather bandolier vest sewn with small protective gris-gris amulet pouches across his chest, gripping a locally forged rifle in one hand and a curved sword at his side, a mobile war camp with makeshift weapon workshops in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep indigo blue and warm ivory and earthy bronze color palette, the resistance leader who evaded conquest for nearly two decades, sharp and relentless, unmistakably male
```

## Monstruos (12)

### Grootslang — `grootslang.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic cavern lighting, NOT human, NOT humanoid, a colossal hybrid beast with a wrinkled grey elephantine head bearing two massive curved ivory tusks and small deep-set hypnotic eyes, its thick front legs ending in elephant-like feet, its hide transitioning down its long sinuous body into dark iridescent serpent scales that taper into a massive coiled snake tail, the tail wrapped possessively around a glittering hoard of uncut diamonds, standing at the mouth of a deep vertical sinkhole cave (evoking the legendary Wondergat) with rocky walls disappearing into darkness in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep cave black and brilliant diamond white and weathered elephant grey color palette, the primordial beast the gods tried and failed to unmake, ancient, cunning and immense`
```

### Adze — `adze.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), eerie dim lighting, a gaunt humanoid figure mid-transformation from a firefly, dark brown skin, African facial features, faintly glowing patches on dark skin, elongated clawed fingers, crouched near a sleeping village hut at night, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep night black and faint firefly gold and pale grey color palette, the vampiric spirit who slips through cracks as a glowing firefly, unsettling and hungry
```

### Tikoloshe — `tikoloshe.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dim eerie lighting, NOT quite human, a small hairy simian-like creature with mischievous glinting eyes, crouched near a riverbank at night, a raised sleeping hut on bricks faintly visible in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, murky river brown and shadow black and pale moon grey color palette, the mischievous water spirit invisible to adult eyes, small and unsettling
```

### Impundulu — `impundulu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic storm lighting, NOT human, NOT humanoid, a large striking black and white bird with sharp talons crackling with electricity, wings spread wide mid-flight through storm clouds, lightning flashing in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, storm black and pure white and electric blue color palette, the lightning bird bound to witches across generations, dreadful and electric
```

### Aigamuxa — `aigamuxa.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), harsh desert lighting, a humanoid MALE figure, dark brown skin, African facial features, an entirely smooth blank face with no eyes at all where eyes would normally be (just skin, nose and mouth, no eye sockets), walking in an inverted crab-like crouch with his hands planted on the sand and his legs bent sharply upward and forward over his own body so the soles of his bare feet face toward the viewer at roughly head height, one single unsettling eye embedded in the center of each foot's sole staring forward to see the path ahead, long sinewy limbs, atop a wind-swept sand dune, a featureless desert in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, dusty desert tan and pale bone white and deep shadow color palette, the dune-dwelling predator who must contort his body just to see, strange and unsettling, unmistakably male
```

### Popobawa — `popobawa.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), eerie moonlit lighting, NOT a literal bat animal, a humanoid MALE figure crouched hunched low on a large rock with knees bent wide and clawed feet gripping the stone, a gaunt lean muscular body with visible ribs, dark wrinkled leathery tan-brown bat-like skin, a bat-like face with a short wrinkled snout, small fanged mouth, and two large pointed bat ears rising from the top of his head, only ONE single eye in total on his entire face, a lone large glowing yellow-green eye centered in the middle of his forehead, completely smooth unbroken skin with no eye sockets at all on the left and right sides of his face where two normal eyes would otherwise be, enormous leathery bat wing membranes stretched from his long arms down to his ankles, draping around and behind him like a great tattered cape with the reddish inner membrane just visible, a simple dark tattered loincloth at his waist, long clawed hands hanging low, standing on a bare rock outcrop against a plain hazy backdrop, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, weathered tan brown and deep wing-red and pale moonlight color palette, the shapeshifting bat-winged terror of Zanzibar's night, crouched and predatory, unmistakably male
```

### Mokele-mbembe — `mokele-mbembe.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), murky swamp lighting, NOT human, NOT humanoid, a colossal creature with a bulky elephant-like body, a long flexible neck, and a thick powerful tail, wading through a dense misty swamp, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, murky swamp green and deep brown and pale mist grey color palette, the colossal beast of the Congo basin's deepest waters, immense and elusive
```

### Ninki Nanka — `ninki-nanka.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic murky river lighting, NOT human, NOT humanoid, a colossal dragon-like reptilian creature with a long serpentine body and a horse-like head, emerging from misty river waters, dense riverside vegetation in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, murky river green and deep scale black and pale mist white color palette, the dragon of the river whose gaze alone brings death or madness, dreadful and immense
```

### Abiku — `abiku.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), ethereal soft lighting, a small ghostly translucent child figure with an ancient knowing gaze, dark brown skin and African facial features beneath the translucency, faint spectral marks on pale skin, standing at the threshold between a warm home and a misty spirit realm, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, soft spectral white and warm hearth gold and pale mist grey color palette, the spirit child bound to a cycle of birth and death, haunting and sorrowful
```

### Obayifo — `obayifo.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), eerie glowing lighting, a gaunt humanoid figure with an unsettling faint inner glow beneath the skin, dark brown skin beneath the glow, African facial features, crouched near withering crops at night, a sleeping village in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, sickly pale glow and deep night black and withered brown color palette, the witch who drains life force from people and crops alike, unsettling and hungry
```

### Eloko — `eloko.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dappled dim jungle lighting, a small humanoid figure entirely covered in grass, leaves and moss, dark brown skin, African facial features, holding a small ritual bell, an unnervingly wide grin, dense tropical forest in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep jungle green and mossy brown and pale mist grey color palette, the small forest spirit whose hypnotic song lures travelers to their doom, small and unsettling
```

### Mamlambo — `mamlambo.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic murky river lighting, a serpentine FEMALE figure with a long sinuous body emerging from a wide river, dark brown skin and African facial features on her human half, glinting scales, an ambivalent alluring expression, misty riverbank in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, murky river green and pale gold and deep shadow black color palette, the river spirit who grants wealth or claims the unwary, ambivalent and dangerous
```

## Mortales (5)

### Balla Fasseke — `balla-fasseke.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), warm firelit lighting, a MALE build, dark brown skin, African facial features, a dignified griot figure, fine woven robes, holding a traditional kora, storytelling before a gathered crowd in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm firelight gold and deep earth brown and soft ivory color palette, the first great griot who preserved the epic of an empire, wise and eloquent, unmistakably male
```

### Yennenga — `yennenga.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic dawn lighting, a determined FEMALE warrior build, dark brown skin, African facial features, fine traditional armor and a spear, mounted on a galloping horse, an unknown misty wilderness in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm dawn gold and earthy bronze and misty green color palette, the warrior princess who rode toward her own destiny, bold and determined
```

### Amina de Zazzau — `amina-de-zazzau.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic regal lighting, a commanding FEMALE build, dark brown skin, African facial features, fine Hausa royal warrior regalia, gripping a spear, defensive earthen city walls in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep bronze and sandstone gold and storm grey color palette, the warrior queen who fortified her cities with walls of earth, formidable and shrewd
```

### Kimpa Vita — `kimpa-vita.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic radiant lighting, a serene resolute FEMALE build, dark brown skin, African facial features, simple flowing white robes, one hand raised as if mid-vision, a ruined ancient capital city in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pure white and warm gold and soft ruin grey color palette, the prophetess who defied colonial religious authority, serene and unwavering
```

### Idia — `idia.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic regal lighting, a dignified commanding FEMALE build, dark brown skin, African facial features, fine coral bead regalia and an ornate ivory-style headdress, a stern watchful expression, a royal Benin court in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep coral red and warm ivory and bronze gold color palette, the first queen mother whose strategy secured a kingdom, formidable and dignified
```
