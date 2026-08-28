# Prompts para generar las 47 imágenes de Mitología Egipcia con Leonardo.ai

Cada personaje trae su **prompt completo ya armado**, listo para copiar y pegar directo en
el campo de texto de Leonardo.ai — no hace falta combinar piezas a mano.

## Qué cambió (y por qué)

Mismo ajuste que se aplicó al archivo de Grecia, por los mismos dos problemas:

1. **Todo salía demasiado musculoso por defecto.** Ahora **cada prompt especifica el tipo
   de cuerpo exacto** de ese personaje (esbelto, regio, enjuto, fornido, grácil, etc.), y el
   prompt negativo compartido desalienta el físico genérico de culturista.
2. **Las entidades primordiales sin forma humana definida corren el riesgo de salir como
   una persona con textura rara** si el prompt no lo niega explícitamente. Nun, la entidad
   más abstracta de este libro (las aguas primigenias del caos, anteriores a la creación),
   ahora tiene un prompt mucho más insistente en que **no es una persona**, sin rostro, sin
   género, sin anatomía reconocible — con una línea de negative prompt extra solo para esa
   imagen.

## 1. Configuración recomendada en Leonardo.ai

- **Modelo**: "Leonardo Phoenix 1.0" — si el resultado no convence, prueba "AlbedoBase XL" o
  "Leonardo Diffusion XL".
- **Preset/Style**: "Illustration" o "Dynamic" (evita "PhotoReal": queremos pintura, no foto).
- **Alchemy**: activado.
- **Proporción**: 2:3 o 3:4 (vertical, para que entre el cuerpo completo).
- Genera 2-4 variaciones por personaje y quédate con la mejor.
- Si el resultado sigue saliendo demasiado musculoso pese al prompt, sube el peso de esa
  parte de la frase con paréntesis, ej. `(slender graceful build:1.4)`.

## 2. Prompt negativo (pégalo una sola vez en el campo "Negative Prompt")

```
text, watermark, signature, blurry, extra limbs, extra fingers, deformed hands, cropped,
modern clothing, cartoon, anime, 3d render, low detail, plain background, photo, Greek
clothing, Roman clothing, generic bodybuilder physique, identical muscular build on every
character, overly sexualized pose
```

Para **Nun** (ver más abajo), agrega además, solo para esa generación puntual:
`human, woman, man, person, human face, human body, human anatomy`

Para los dioses con cabeza de animal (Anubis, Horus, Thot, Sejmet, Bastet, Jnum), cada prompt
ya incluye `"animal-headed deity, human body"` para que el modelo no dibuje un animal
completo ni una cabeza humana por error.

## 3. Después de generar cada imagen

1. Descarga el archivo.
2. Renómbralo exactamente como el `slug` indicado (ej. `ra.jpg`).
3. Colócalo en `backend/public/images/mitologia-egipcia/`.

---

## 4. Prompts completos por personaje

### Dioses

#### Ra (`ra.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Egyptian jewelry (gold collars, armlets, faience beads) and linen garment details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, solar gold and sun-disk orange and ivory white color palette, falcon-headed sun god, animal-headed deity, human body with a lean regal build, radiant sun disk crown encircled by a cobra (uraeus), golden pharaonic kilt, solar barque faintly visible behind him
```

#### Osiris (`osiris.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Egyptian jewelry and linen garment details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, green-tinted skin and gold and deep black color palette, mummified king god with green skin and a still, slender wrapped build (deliberately rigid, not muscular), tightly wrapped white and gold linen shroud from the waist down, holding the crook and flail crossed over his chest, tall white Atef crown with ostrich feathers
```

#### Isis (`isis.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Egyptian jewelry and linen garment details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, lapis lazuli blue and gold and ivory white color palette, elegant graceful goddess with a slender build in a fitted white linen gown, throne-shaped headdress (hieroglyph of her name), vulture wings partly spread in gold, cow horns with a sun disk above her head, protective and maternal expression
```

#### Set (`set.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Egyptian jewelry and linen garment details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, desert red and black and sandstone ochre color palette, fierce wiry god with the head of the unidentified "Set animal" (long curved snout, tall square ears), animal-headed deity, human body with a lean sinewy build (not bulky), dark red skin, holding a was-scepter, swirling desert sandstorm in the background
```

#### Horus (`horus.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Egyptian jewelry and linen garment details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, sky blue and gold and falcon brown color palette, falcon-headed god, animal-headed deity, human body with a lean poised build, one eye marked as the Eye of Horus (Wadjet), double crown of Upper and Lower Egypt, wings partly spread, poised and regal
```

#### Anubis (`anubis.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Egyptian jewelry and linen garment details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, obsidian black and gold and deep red color palette, jackal-headed god, animal-headed deity, human body with a lean athletic build, black jackal head with tall alert ears, golden collar and armlets, holding a golden scale, necropolis and torches in the background
```

#### Thot (`thot.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Egyptian jewelry and linen garment details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, ibis white and silver-blue and gold color palette, ibis-headed god, animal-headed deity, human body with a slender scholarly build, long curved white beak, holding a scribe's palette and reed pen, crescent moon and lunar disk above his head, papyrus scrolls nearby
```

#### Maat (`maat.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate fabric details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pure white and gold and sky blue color palette, serene slender goddess with a single tall ostrich feather rising from her headband, simple elegant white linen gown, golden ankh in one hand, calm and balanced expression, scales faintly visible nearby
```

#### Hathor (`hathor.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Egyptian jewelry and linen garment details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, turquoise and gold and warm rose color palette, beautiful graceful goddess with cow horns cradling a golden sun disk on her head, elaborate broad collar necklace, holding a sistrum rattle, warm joyful expression, floral motifs
```

#### Sejmet (`sejmet.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Egyptian jewelry and linen garment details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, blood red and gold and sun-disk orange color palette, lioness-headed goddess, animal-headed deity, human body with a powerful athletic build (fierce warrior goddess), fierce golden eyes, red sun disk crown with a rearing cobra, imposing stance, faint red mist around her
```

#### Bastet (`bastet.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Egyptian jewelry and linen garment details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm bronze and turquoise and gold color palette, elegant slender cat-headed goddess, animal-headed deity, human body, sleek black-furred feline head, gold nose ring, holding a sistrum, adorned with turquoise faience jewelry, gentle watchful expression
```

#### Amón (`amon.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Egyptian jewelry and linen garment details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, royal blue and gold and deep violet color palette, majestic god with a tall dignified build wearing a tall crown of two straight parallel plumes, dark blue-skinned or ram-horned variant, richly detailed golden pharaonic regalia, an aura of hidden, invisible power
```

#### Ptah (`ptah.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Egyptian jewelry and linen garment details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, turquoise-green and gold and deep blue color palette, still dignified god with a slender rigid mummy-like build tightly wrapped in a form-fitting shroud from the shoulders down, skull cap, holding a scepter combining the was, djed and ankh symbols, craftsman's tools faintly carved in the background
```

#### Jnum (`jnum.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Egyptian jewelry and linen garment details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, Nile blue-green and clay brown and gold color palette, ram-headed god, animal-headed deity, human body with a stocky powerful potter's build, horizontally curved ram horns, seated at a potter's wheel shaping a small clay figure, flowing water motifs of the Nile nearby
```

### Primordiales

#### Nun (`nun.jpg`)
```
Semi-realistic fantasy digital painting, dramatic chiaroscuro lighting, ancient Egyptian temple columns dissolving into dark endless water in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, void indigo and deep teal and silver mist color palette, absolutely NOT a person and NOT humanoid: a vast, formless mass of dark endless primeval water with no face, no gender, no limbs, no skin, no human anatomy whatsoever, semi-transparent watery texture with no solid ground, only the faintest suggestion of a presence within the infinite dark water, stars faintly reflected on the surface
```
**Negative prompt extra solo para esta imagen** (agrégalo al negative prompt compartido antes de generar): `human, woman, man, person, human face, human body, human anatomy, humanoid figure`

#### Atum (`atum.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Egyptian jewelry and linen garment details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, dawn gold and deep bronze and ivory color palette, ancient self-created god with a lean primordial build standing atop a single mound of dry earth rising from dark water, double crown, serene and powerful expression, faint golden light emanating from his body
```

### Monstruos

#### Apofis (`apofis.jpg`)
```
Semi-realistic fantasy digital painting, dramatic chiaroscuro lighting, ancient Egyptian temple columns in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, venomous black and sickly green and dull red color palette, colossal serpent of chaos coiling through darkness, rough scaled hide, glowing malevolent red eyes, jaws open wide enough to swallow a sun disk, underworld cavern background, entirely non-humanoid
```

#### Amit (`amit.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, ancient Egyptian temple columns in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, swamp green and bone white and deep red color palette, composite monster with a crocodile head, lioness forequarters, and hippopotamus hindquarters, crouched and watchful beside a golden scale, sharp teeth, dim torch-lit judgment hall, entirely non-humanoid
```

### Héroes

#### Imhotep (`imhotep.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate fabric details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, limestone beige and gold and deep teal color palette, dignified bald priest-architect with a slender scholarly build, seated pose, papyrus scroll of architectural plans on his lap, simple white linen kilt, a small step pyramid visible in the background, wise composed expression
```

#### Setna (`setna.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Egyptian jewelry and linen garment details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, midnight blue and gold and faded papyrus tan color palette, young noble prince-magician with a lean elegant build, richly embroidered kilt, holding a glowing ancient papyrus scroll (the Book of Thoth), tomb entrance with carved serpents behind him, curious and slightly reckless expression
```

#### Djedi (`djedi.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate fabric details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, aged parchment beige and faded gold and soft grey color palette, extremely old but vigorous magician with a frail slender build, long white beard, simple linen robe, one hand extended over a goose whose severed head is being magically reattached, calm confident expression
```

#### Ubaoner (`ubaoner.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate fabric details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, murky green and dark bronze and black color palette, stern lector-priest with a lean composed build, formal leopard-skin sash over a white kilt, holding a small wax crocodile figurine, a real crocodile emerging from lake water behind him, composed vengeful expression
```

### Mortales

#### Sinuhé (`sinuhe.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate fabric details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, desert tan and weathered bronze and faded blue color palette, weathered wiry middle-aged Egyptian official dressed partly in foreign Levantine robes over an Egyptian kilt, standing between a desert dune and a distant view of the Nile, contemplative homesick expression
```

#### Bata (`bata.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate fabric details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, earthy green and wheat gold and cedar brown color palette, humble lean young herdsman, simple linen kilt, standing beside cattle, a tall cedar tree with a glowing flower in the background (his hidden heart), gentle but sorrowful expression
```

#### Khufu (`khufu.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Egyptian jewelry and linen garment details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, royal gold and limestone white and deep blue color palette, powerful middle-aged pharaoh with a dignified mature build seated on a throne, full royal regalia and false beard, curious attentive expression, a small model of a pyramid faintly visible in the background
```

#### Ruddjedet (`ruddjedet.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate fabric details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm terracotta and soft gold and ivory color palette, humble pregnant Egyptian woman in simple linen dress, gentle radiant expression, three faint golden auras hinting at her unborn children, modest household setting
```

### Nuevos dioses (segunda tanda)

#### Neftis (`neftis.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Egyptian jewelry and linen garment details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, dark grey-blue and silver and muted gold color palette, solemn slender goddess wearing the hieroglyph of a basket atop a house as her headdress, mourning posture with hawk wings partly spread in silver and grey tones, subdued funerary jewelry
```

#### Geb (`geb.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep moss green and earthy brown and ochre color palette, reclining or kneeling earth god with a broad heavy build, green-brown skin textured like soil (not smooth human skin), plants and small trees sprouting from his limbs, a goose perched near him, calm massive presence
```

#### Nut (`nut.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, midnight blue and silver starlight and deep indigo color palette, elongated arched slender female figure covered in stars and constellations across dark blue skin (not ordinary human skin), celestial and weightless pose, faint golden sun disk near her mouth
```

#### Shu (`shu.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pale sky blue and white and soft gold color palette, slender airy god with a single tall ostrich feather on his head, arms raised overhead as if holding up the sky, luminous airy atmosphere, light streaming around him
```

#### Tefnut (`tefnut.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, lioness tawny and deep teal and silver color palette, lioness-headed goddess, animal-headed deity, human body with a lean powerful build, damp glistening skin, droplets of water and mist swirling around her, fierce yet serene expression
```

#### Sobek (`sobek.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, murky green and gold and Nile brown color palette, crocodile-headed god, animal-headed deity, human body with a powerful thick-set build, rough scaled green skin, sharp teeth, holding a was-scepter, reeds and river water in the background
```

#### Neith (`neith.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Egyptian jewelry and linen garment details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep red and black and aged gold color palette, ancient dignified goddess with a lean weathered build in archaic robes, holding a crossed bow and arrows, weaving shuttle at her belt, wise weathered expression, red crown of Lower Egypt
```

#### Seshat (`seshat.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate fabric details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, ivory white and gold and pale green color palette, elegant slender goddess wearing a seven-pointed star emblem atop a pair of horns as her headdress, holding a notched palm rib and scribal tools, papyrus and star-charts nearby
```

#### Serket (`serket.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Egyptian jewelry and linen garment details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, amber orange and black and gold color palette, slender goddess with a scorpion perched atop her head as a crown, graceful protective outstretched arms, faint glowing scorpions around her
```

#### Tueris (`tueris.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep teal and bronze and pale gold color palette, upright pregnant hippopotamus goddess with lion limbs and a crocodile-textured back, heavy rounded build (fitting her hippo nature), fierce yet gentle expression, protective stance, household amulet motifs
```

#### Khonsu (`khonsu.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Egyptian jewelry and linen garment details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pale silver-blue and gold and deep navy color palette, youthful slender god wrapped in mummy-like bandages from the waist down, side-lock of youth, crescent moon cradling a full lunar disk above his head, serene nocturnal glow
```

#### Mut (`mut.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Egyptian jewelry and linen garment details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, royal purple and gold and deep blue color palette, regal goddess with a tall statuesque build wearing the double crown of Egypt, vulture headdress, richly detailed broad collar, dignified maternal expression, Theban temple columns behind her
```

#### Heka (`heka.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep violet and black and glowing gold color palette, mysterious lean abstract god with arms raised overhead gripping two intertwined serpents, faint magical glow surrounding his hands, ancient and abstract presence, minimal ornamentation
```

### Primordiales y seres sagrados (segunda tanda)

#### Bennu (`bennu.jpg`)
```
Semi-realistic fantasy digital painting, dramatic chiaroscuro lighting, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, fire gold and deep crimson and ash grey color palette, large heron-like sacred bird with two long crest feathers, wreathed in soft flames that do not consume it, perched on a pyramidal benben stone, radiant dawn light, entirely non-humanoid
```

### Héroes (segunda tanda)

#### (ya incluidos arriba: Djedi, Ubaoner)

### Mortales (segunda tanda)

#### (ya incluidos arriba: Khufu, Ruddjedet)

### Primordiales (tercera tanda)

#### Heh (`heh.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, dawn gold and pale ivory and soft bronze color palette, kneeling primordial god holding a notched palm rib in each raised hand, calm eternal expression, faint infinite starry void behind him, ancient abstract presence
```

### Nuevos dioses (tercera tanda)

#### Bes (`bes.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Egyptian jewelry and linen garment details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm amber and deep gold and dusty red color palette, dwarf god facing directly forward toward the viewer (not in profile, unlike most Egyptian deities), grotesque leonine mane and protruding tongue, bowed muscular legs, feathered crown, holding a knife in one hand, deliberately fierce comical expression
```

#### Wadyet (`wadjet.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Egyptian jewelry and linen garment details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, emerald green and gold and papyrus reed color palette, dignified goddess with a lean poised build wearing a rearing cobra crown, red crown of Lower Egypt, papyrus marshes of the delta in the background, protective fierce expression
```

#### Min (`min.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Egyptian jewelry details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, harvest gold and deep black and earthy brown color palette, still mummiform fertility god with a tightly wrapped rigid build (not muscular), one arm raised overhead holding a flail, tall crown of two straight plumes, sheaves of grain nearby
```

### Monstruos (tercera tanda)

#### Ajej (`akhekh.jpg`)
```
Semi-realistic fantasy digital painting, dramatic chiaroscuro lighting, ancient Egyptian temple columns dissolving into swirling chaos in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, venomous black and dull bronze and ash grey color palette, griffin-like chaos creature with a long serpentine body, sharp bird-of-prey head and wings, clawed talons, coiling menacingly through darkness, entirely non-humanoid
```

### Mortales (tercera tanda)

#### Hatshepsut (`hatshepsut.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Egyptian jewelry and linen garment details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, royal gold and limestone white and deep blue color palette, dignified female pharaoh with a regal poised build wearing full royal regalia and the ceremonial false beard, double crown, calm commanding expression, her own mortuary temple faintly visible in the background
```

#### Ramsés II (`ramses-ii.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Egyptian jewelry and linen garment details, ancient Egyptian temple columns with hieroglyphic carvings in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm gold and deep bronze and desert red color palette, powerful mature pharaoh with a commanding dignified build wearing full royal war regalia and the blue Khepresh war crown, holding a khopesh sword, colossal seated statues of Abu Simbel faintly visible in the background
```

---

**Nota**: los campos `dominio`, `simbolos` y `descripcion_corta` de cada personaje están en la
base de datos (tabla `personajes`, filtrando por `libro_id` del libro `mitologia-egipcia`) por
si quieres ajustar algún prompt con más detalle antes de generarlo.

## 5. Portada del libro y emblema/logo

Igual que se hizo para Mitología Griega: dos imágenes aparte de los personajes.

- **`portada-fondo.jpg`** — el fondo de la tapa del libro (se usa tanto en el flipbook como
  en el PDF, con un degradado oscuro ya aplicado por CSS encima, más fuerte hacia abajo, para
  que el título dorado se lea bien). Por eso el prompt evita poner figuras o detalle
  importante en la mitad inferior del encuadre.
- **`portada-emblema.png`** — un sello/emblema circular, estilo grabado, pensado para verse
  bien chico (se muestra como un círculo de ~84px). Por eso pide línea limpia y alto
  contraste en vez de textura pintada.

Proporción recomendada para la portada: **vertical alta (tipo 9:16 o 1:2)** — igual que en
Grecia, sube una imagen bastante más alta que ancha para que cubra toda la tapa del libro.
Para el emblema: **cuadrada 1:1**, va a recortarse en círculo después.

### Portada — `portada-fondo.jpg`
```
Semi-realistic fantasy digital painting, epic wide vertical composition, dramatic golden-hour and starlit lighting, ancient Egyptian temple silhouettes with towering obelisks and pylon gates carved with hieroglyphics, the Nile river reflecting a warm sunset sky that fades into a starry night sky toward the top, distant pyramids on the horizon, drifting sand and atmospheric haze, painterly rendering, highly detailed digital art, trending on artstation, cinematic wide dynamic range, no text or writing anywhere in the image, no visible human figures, crowds or faces, keep the lower half of the frame calm, dark and uncluttered (it will be covered by a title later), solar gold and lapis lazuli blue and deep obsidian black color palette, sense of ancient sacred grandeur
```

### Emblema circular — `portada-emblema.png`
```
Flat vector-style emblem design, circular seal/medallion composition, perfectly centered and symmetrical, thin gold line engraving on a solid dark obsidian black circular background, a stylized scarab beetle with outspread wings cradling a small sun disk above an ankh symbol, surrounded by a thin double ring border with small hieroglyphic-inspired marks, minimalist elegant linework (not painterly, not photographic, not 3d), high contrast gold linework on black, no text or writing anywhere in the image, no human figures, clean crisp edges suitable for a small circular logo
```
**Negative prompt extra solo para el emblema** (agrégalo al negative prompt compartido antes de generar): `painterly texture, gradient shading, photo-realistic, 3d render, blurry lines, soft edges, clutter outside the circle`

### Después de generar
Renómbralas exactamente `portada-fondo.jpg` y `portada-emblema.png` y colócalas en
`backend/public/images/mitologia-egipcia/` (misma carpeta que los personajes).

## 6. Las historias ya tienen sus prompts

Ojo: los prompts de las 21 historias egipcias **ya están hechos** — no en este archivo, sino
en `backend/scripts/prompts-imagenes-historias.md`, sección "5. Mitología Egipcia (21
historias)". Ese archivo cubre las escenas panorámicas (formato horizontal) de las historias
de los 4 libros en un solo lugar, separado de los retratos de personaje. Ahí también hay un
aviso pendiente: hoy la tabla `historias` no tiene campo de imagen ni el flipbook tiene dónde
mostrarlas — avísame cuando quieras que arme esa conexión.

## 7. Si prefieres buscar imágenes manualmente en vez de generarlas

Mismos criterios técnicos que en Grecia:

- **Formato**: `.jpg`.
- **Tamaño mínimo**: 800×1200px (proporción 2:3, vertical, cuerpo completo).
- **Tamaño ideal**: 1000×1500px.
- **Peso máximo recomendado por imagen**: ~500 KB.
- **Nombre del archivo**: exactamente el `slug` del personaje, ej. `ra.jpg`, `sejmet.jpg`.
- Guárdalas en `backend/public/images/mitologia-egipcia/` — el backend ya las sirve
  automáticamente en `http://localhost:3001/images/mitologia-egipcia/nombre.jpg`.
