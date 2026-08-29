# Prompts para generar las 47 imágenes de Mitología Hindú con Leonardo.ai

Cada personaje trae su **prompt completo ya armado**, listo para copiar y pegar directo en
el campo de texto de Leonardo.ai — no hace falta combinar piezas a mano.

**Excepción — los 11 personajes agregados para llegar a 47** (Hiranyagarbha, Aditi,
Vishwakarma, Dhanvantari, Ushas, Bhishma, Nala, Vritra, Putana, Damayanti, Shakuntala) se
generan con **Gemini**, no Leonardo.ai: pegá el prompt completo directo en el chat, no hace
falta el negative prompt de la sección 2 ni la configuración de Leonardo — el propio prompt
ya trae la instrucción de con qué nombre guardar el archivo al final.

## Qué cambió (y por qué)

Mismo ajuste que se aplicó a los archivos de Grecia y Egipto, por los mismos dos problemas:

1. **Todo salía demasiado musculoso por defecto.** Ahora **cada prompt especifica el tipo
   de cuerpo exacto** de ese personaje (esbelto, regio, enjuto, fornido, grácil, etc.), y el
   prompt negativo compartido desalienta el físico genérico de culturista.
2. **Las entidades primordiales sin forma humana definida corren el riesgo de salir como
   una persona con textura rara** si el prompt no lo niega explícitamente. Purusha, el ser
   cósmico anterior a la creación, ahora tiene un prompt mucho más insistente en que **no es
   una persona corriente**, sino una masa cósmica que apenas sugiere una silueta — con una
   línea de negative prompt extra solo para esa imagen.

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
text, watermark, signature, blurry, extra limbs (unless specified), extra fingers, deformed
hands, cropped, modern clothing, cartoon, anime, 3d render, low detail, plain background,
photo, Greek clothing, Egyptian clothing, generic bodybuilder physique, identical muscular
build on every character, overly sexualized pose
```

Para **Purusha** (ver más abajo), agrega además, solo para esa generación puntual:
`ordinary human, human woman, human man, single person, human face, human anatomy`

Para los dioses de varios brazos (Vishnu, Shiva, Durga, Kali, Ganesha, etc.), cada prompt ya
incluye `"multiple arms, each hand holding a different sacred object"` para que el modelo no
simplifique la figura a dos brazos por defecto.

## 3. Después de generar cada imagen

1. Descarga el archivo.
2. Renómbralo exactamente como el `slug` indicado (ej. `shiva.jpg`).
3. Colócalo en `backend/public/images/mitologia-hindu/`.

---

## 4. Prompts completos por personaje

### Dioses

#### Brahma (`brahma.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Indian jewelry (gold armlets, layered necklaces, jeweled crowns) and rich silk garment details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, cream white and gold and soft crimson color palette, serene four-headed god with a slender elderly sage build, each face looking a different direction, long white beard, seated on a lotus, holding the Vedas and a water pot, swan perched nearby
```

#### Vishnu (`vishnu.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Indian jewelry and rich silk garment details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep blue skin and gold and lotus pink color palette, blue-skinned god with a graceful regal build (not bulky) and four arms, multiple arms, each hand holding a different sacred object: a conch shell, a discus, a mace and a lotus, ornate crown, reclining or standing pose, serene majestic expression
```

#### Shiva (`shiva.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Indian jewelry and rich silk garment details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, ash grey-white and deep blue and silver color palette, ash-covered ascetic god with a lean gaunt yogic build (a meditating ascetic, not a bodybuilder), matted hair with crescent moon and flowing river, third eye on forehead, serpent coiled around neck, trident in hand, tiger skin garment, meditative pose
```

#### Saraswati (`saraswati.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Indian jewelry and rich silk garment details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pure white and gold and pale sky blue color palette, graceful slender goddess in flowing white silk, seated on a lotus or white swan, playing a veena (stringed instrument), serene intellectual expression, peacock feather details
```

#### Lakshmi (`lakshmi.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Indian jewelry and rich silk garment details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, rose pink and gold and deep red color palette, radiant graceful goddess with four arms, multiple arms, each hand holding something different, seated on a blooming lotus, golden coins pouring from one hand, elephants at her sides spraying water, richly jeweled crown and silk saree
```

#### Parvati (`parvati.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Indian jewelry and rich silk garment details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm rose and gold and deep green color palette, elegant motherly goddess with a soft graceful build in a rich red and gold saree, gentle serene expression, seated near a Himalayan mountain backdrop, ornate bridal jewelry
```

#### Ganesha (`ganesha.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Indian jewelry and rich silk garment details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm red and gold and ivory color palette, elephant-headed god, animal-headed deity, human body with a round gentle belly (not muscular, a warm approachable build), one broken tusk, four arms, multiple arms, each hand holding something different: a modak sweet, an axe and a lotus, small mouse at his feet, warm gentle expression
```

#### Kartikeya (`kartikeya.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Indian jewelry and rich silk garment details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, crimson red and gold and peacock blue-green color palette, youthful six-headed war god with a lean athletic build in ornate golden armor, holding a glowing spear (vel), peacock mount beside him, fierce noble expression
```

#### Indra (`indra.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Indian jewelry and rich silk garment details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, storm grey-blue and gold and electric white color palette, powerful crowned king god with a commanding regal build (mature, not a bodybuilder) holding a glowing lightning bolt (vajra), richly jeweled royal garments, white multi-trunked elephant Airavata beside him, commanding stormy sky background
```

#### Agni (`agni.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Indian jewelry and rich silk garment details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, fire orange-red and gold and ash grey color palette, fierce lean two-headed fire god wreathed in flames, red skin glowing like embers, riding a ram, flames forming a halo behind him
```

#### Varuna (`varuna.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Indian jewelry and rich silk garment details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep ocean teal and silver and pale foam white color palette, regal god with a tall dignified build holding a noose (pasha), seated upon Makara (a crocodile-fish hybrid creature), flowing sea-blue robes, calm authoritative expression, ocean waves in background
```

#### Vayu (`vayu.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate fabric details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pale sky blue and white and silver color palette, swift ethereal god with a lean windswept build mid-motion, flowing scarves and hair swept by wind, holding a rippling banner, translucent windy aura surrounding him
```

#### Surya (`surya.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Indian jewelry and rich silk garment details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, solar gold and crimson and radiant orange color palette, radiant god with a lean powerful build riding a golden chariot pulled by seven horses, driven by the charioteer Aruna, blinding golden aura, lotus in each hand
```

#### Chandra (`chandra.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Indian jewelry and rich silk garment details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pale silver-blue and white and deep indigo color palette, serene slender moon god riding a chariot pulled by white antelopes, crescent moon crown, cool luminous glow, night sky background
```

#### Yama (`yama.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Indian jewelry and rich silk garment details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, dark green-grey and black and deep red color palette, stern dark-skinned god with an imposing lean build riding a black buffalo, holding a noose and a mace, judge-like severe expression, shadowy underworld atmosphere
```

#### Kubera (`kubera.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Indian jewelry and rich silk garment details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, rich gold and emerald green and bronze color palette, corpulent wealthy god with a round heavy-set build (not muscular, a treasure-hoarder physique) adorned with heavy jewelry, holding a mongoose that spits gold coins, seated on treasure, opulent yaksha palace background
```

#### Kama (`kama.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Indian jewelry and rich silk garment details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, soft rose pink and gold and spring green color palette, youthful slender handsome god holding a sugarcane bow and flower-tipped arrows, riding a parrot, surrounded by blossoming flowers, gentle romantic expression
```

#### Durga (`durga.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Indian jewelry and rich silk garment details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, crimson red and gold and deep saffron color palette, fierce graceful ten-armed warrior goddess, multiple arms, each hand holding a different weapon gifted by the gods, riding a roaring lion, ornate golden crown, radiant divine energy around her
```

#### Kali (`kali.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Indian jewelry details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, obsidian black and blood red and bone white color palette, wild lean dark-skinned goddess with a garland of skulls, lolling red tongue, multiple arms, each hand holding a different object: a sword and a severed head, standing triumphant, chaotic battlefield energy
```

#### Vishwakarma (`vishwakarma.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Indian jewelry and craftsman's tool details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, forge bronze and gold and deep amber color palette, dignified artisan god with a strong steady build, holding a mace and measuring tools, a half-forged glowing discus weapon on an anvil beside him, focused masterful expression Save the generated image file as "vishwakarma.jpg".
```

#### Dhanvantari (`dhanvantari.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Indian jewelry and rich silk garment details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep blue skin and gold and soft white color palette, blue-skinned divine physician with a graceful regal build and four arms, multiple arms, holding a golden pot of nectar, medicinal herbs and a leech, serene healing expression, ocean waves faintly visible behind him Save the generated image file as "dhanvantari.jpg".
```

#### Ushas (`ushas.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic radiant dawn lighting, intricate ornate Indian jewelry and flowing silk garment details, ancient carved Hindu temple architecture dissolving into a rosy dawn sky in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, soft rose gold and pale amber and warm white color palette, radiant dawn goddess with a graceful youthful build driving a shimmering chariot pulled by red-hued cattle, darkness parting before her, eternally youthful serene expression Save the generated image file as "ushas.jpg".
```

### Semidioses

#### Hanuman (`hanuman.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate fabric details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm orange-red and gold and deep brown color palette, muscular monkey-headed god, animal-headed deity, human body (this powerful build fits his legend of superhuman strength), orange-red fur, holding a mace (gada), leaping pose mid-flight over an ocean, devoted fierce expression
```

#### Rama (`rama.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Indian jewelry and rich silk garment details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep blue skin and gold and forest green color palette, blue-skinned noble prince with a lean composed build holding a bow and arrow, calm regal composure, simple yet royal silk garments, forest backdrop hinting at exile
```

#### Krishna (`krishna.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Indian jewelry and rich silk garment details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep blue skin and gold and peacock blue-green color palette, blue-skinned youthful graceful god playing a flute, peacock feather in his crown, serene playful smile, pastoral or battlefield chariot backdrop depending on scene
```

#### Sita (`sita.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Indian jewelry and rich silk garment details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, soft gold and deep red and earthy green color palette, graceful slender princess in rich red and gold silk, serene dignified expression, standing near a furrow of tilled earth, lotus motifs
```

### Primordiales y seres sagrados

#### Purusha (`purusha.jpg`)
```
Semi-realistic fantasy digital painting, dramatic chiaroscuro lighting, ancient carved Hindu temple architecture dissolving into stars and galaxies in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, cosmic gold and deep indigo and starlight white color palette, absolutely NOT an ordinary human and NOT a single person: a vast transcendent cosmic mass suggesting a thousand faint heads and eyes dissolving into stars and galaxies, no single recognizable face, no ordinary human anatomy, an abstract cosmic being whose form is the entire universe rather than a human body, surrounded by swirling cosmic energy
```
**Negative prompt extra solo para esta imagen** (agrégalo al negative prompt compartido antes de generar): `ordinary human, human woman, human man, single person, human face, human anatomy`

#### Shesha (`shesha.jpg`)
```
Semi-realistic fantasy digital painting, dramatic chiaroscuro lighting, ancient carved Hindu temple architecture in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep cosmic blue and silver and pale gold color palette, colossal thousand-headed cosmic serpent coiled endlessly, floating on dark primordial waters, subtle luminous scales, infinite and serene, entirely non-humanoid
```

#### Hiranyagarbha (`hiranyagarbha.jpg`)
```
Semi-realistic fantasy digital painting, dramatic chiaroscuro lighting, ancient carved Hindu temple architecture dissolving into primordial cosmic waters in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, radiant gold and deep cosmic indigo and pale starlight color palette, absolutely NOT an ordinary human and NOT a single person: a colossal glowing golden cosmic egg floating on dark primordial waters, faint suggestion of a universe swirling within its translucent golden shell, no human face, no human anatomy, ancient and abstract presence Save the generated image file as "hiranyagarbha.jpg".
```

#### Aditi (`aditi.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Indian jewelry and rich silk garment details, ancient carved Hindu temple architecture dissolving into a boundless starry sky in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep cosmic blue and gold and soft starlight color palette, majestic primordial mother goddess with a tall serene build, arms open wide as if embracing the infinite sky, faint radiant solar figures gathered around her, boundless nurturing expression Save the generated image file as "aditi.jpg".
```

### Monstruos

#### Ravana (`ravana.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Indian jewelry and rich silk garment details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep crimson and black and gold color palette, powerful ten-headed demon king with an imposing muscular build (this build fits his legend of supernatural strength), twenty arms, multiple arms, ornate dark golden crown and jewelry, flying chariot in the background, arrogant commanding expression
```

#### Hiranyakashipu (`hiranyakashipu.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Indian jewelry and dark armor details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, dark bronze and black and dull red color palette, tyrannical demon king with a heavy imposing build in heavy dark armor and jewelry, cruel triumphant expression, seated on an imposing throne, ominous palace pillar beside him
```

#### Mahishasura (`mahishasura.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, dark maroon and black and bronze color palette, hybrid demon warrior mid-transformation between buffalo and human form, buffalo horns and features blending with a powerful muscular body, battle-ready fierce stance, entirely monstrous rather than conventionally human
```

#### Kamsa (`kamsa.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate dark armor details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, dark iron grey and black and dull crimson color palette, cruel tyrant king with a heavy imposing build in heavy dark armor, scowling paranoid expression, shadowy prison-like palace background
```

#### Vritra (`vritra.jpg`)
```
Semi-realistic fantasy digital painting, dramatic chiaroscuro lighting, ancient carved Hindu temple architecture dissolving into a parched cracked landscape in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, dark bronze and dull red and ash grey color palette, NOT human, NOT humanoid, colossal serpentine asura coiled around a vast mountain, trapped waters faintly visible swirling within its immense body, glowing malevolent eyes, entirely non-humanoid Save the generated image file as "vritra.jpg".
```

#### Putana (`putana.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic eerie chiaroscuro lighting, intricate fabric details, ancient carved Hindu temple architecture in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, sickly pale green and dark shadow and dull gold color palette, monstrous demoness mid-transformation from a beautiful nurse into a colossal grotesque hag, poisoned breast faintly visible, clawed hands, unsettling deceptive expression Save the generated image file as "putana.jpg".
```

### Héroes

#### Arjuna (`arjuna.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Indian jewelry and armor details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, royal blue and bronze and gold color palette, noble lean warrior prince drawing a great bow (Gandiva), focused determined expression, standing on a war chariot, Kurukshetra battlefield in the background
```

#### Bhima (`bhima.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate fabric and armor details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep red and bronze and dark green color palette, enormous heavily muscular warrior (this extreme build fits his legend of supernatural strength) wielding a massive mace (gada), fierce intense expression, torn simple warrior garments, battlefield dust and energy around him
```

#### Karna (`karna.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate golden armor details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, solar gold and bronze and deep crimson color palette, lean golden-armored warrior with radiant sun-blessed earrings and armor fused to his skin, holding a bow, noble yet melancholic expression, dawn light behind him
```

#### Yudhishthira (`yudhishthira.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Indian jewelry and rich silk garment details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, ivory white and gold and pale blue color palette, calm dignified king with a lean composed build in simple elegant white and gold robes, holding dice loosely as a subtle symbol, serene just expression, chariot hovering slightly above ground
```

#### Prahlada (`prahlada.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate fabric details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, soft gold and ivory and gentle green color palette, young slender serene devotee in simple robes, hands folded in prayer, calm unshaken expression amid chaotic dangerous surroundings, faint protective golden glow
```

#### Bhishma (`bhishma.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic somber chiaroscuro lighting, intricate ornate armor details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, iron grey and deep crimson and pale gold color palette, elderly dignified warrior patriarch with a tall gaunt build, long white beard, resting upon a bed of countless embedded arrows, calm resolute expression, Kurukshetra battlefield in the background Save the generated image file as "bhishma.jpg".
```

#### Nala (`nala.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Indian jewelry and royal garment details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep royal blue and gold and dusty amber color palette, noble king with a lean handsome build, a set of dice resting on a table before him, troubled conflicted expression, palace hall fading into a distant forest in the background Save the generated image file as "nala.jpg".
```

### Mortales

#### Draupadi (`draupadi.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Indian jewelry and rich silk garment details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep crimson and gold and fire orange color palette, regal fierce slender princess emerging from ritual flames, richly embroidered red and gold saree, loose unbound hair, intense determined expression
```

#### Dasharatha (`dasharatha.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Indian jewelry and rich silk garment details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, aged gold and deep maroon and ivory color palette, elderly grieving king with a frail dignified build in royal robes, ornate but heavy crown, sorrowful weary expression, palace throne room background
```

#### Damayanti (`damayanti.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate Indian jewelry and rich silk garment details, ancient carved Hindu temple architecture with stone pillars and lotus motifs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep rose red and gold and soft ivory color palette, graceful poised princess in a richly embroidered silk saree, standing before a row of identical suitors, discerning confident expression, ceremonial svayamvara hall in the background Save the generated image file as "damayanti.jpg".
```

#### Shakuntala (`shakuntala.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic soft forest lighting, intricate simple fabric and floral details, ancient carved Hindu temple architecture dissolving into a lush forest hermitage in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, soft forest green and warm gold and gentle rose color palette, graceful young woman in simple forest garments adorned with flowers, a ring glinting on one hand, deer and birds gathered peacefully around her, gentle wistful expression Save the generated image file as "shakuntala.jpg".
```

---

**Nota**: los campos `dominio`, `simbolos` y `descripcion_corta` de cada personaje están en la
base de datos (tabla `personajes`, filtrando por `libro_id` del libro `mitologia-hindu`) por
si quieres ajustar algún prompt con más detalle antes de generarlo.

## 5. Portada del libro y emblema/logo

Igual que en los libros anteriores: dos imágenes aparte de los personajes.

- **`portada-fondo.jpg`** — el fondo de la tapa del libro (flipbook y PDF), con un degradado
  oscuro ya aplicado por CSS encima, más fuerte hacia abajo, para que el título dorado se lea
  bien. Por eso el prompt evita poner detalle importante en la mitad inferior del encuadre.
- **`portada-emblema.png`** — un sello/emblema circular, estilo grabado, pensado para verse
  bien chico (se muestra como un círculo de ~84px). Línea limpia y alto contraste, no textura
  pintada.

Proporción recomendada para la portada: **vertical alta (tipo 9:16 o 1:2)**. Para el emblema:
**cuadrada 1:1**, se recorta en círculo después.

### Portada — `portada-fondo.jpg`
```
Semi-realistic fantasy digital painting, epic wide vertical composition, dramatic golden-hour and starlit lighting, silhouettes of carved Hindu temple towers (shikhara spires) with stone pillars and lotus motifs reflected on the still surface of a sacred river, distant snow-capped Himalayan peaks fading into a starry night sky toward the top, floating lotus flowers drifting on the water, soft mist and incense haze, painterly rendering, highly detailed digital art, trending on artstation, cinematic wide dynamic range, no text or writing anywhere in the image, no visible human figures, crowds or faces, keep the lower half of the frame calm, dark and uncluttered (it will be covered by a title later), deep saffron gold and lotus pink and cosmic indigo color palette, sense of ancient sacred grandeur
```

### Emblema circular — `portada-emblema.png`
```
Flat vector-style emblem design, circular seal/medallion composition, perfectly centered and symmetrical, thin gold line engraving on a solid dark obsidian black circular background, a sacred Om symbol at the center rising from an open lotus flower in bloom, surrounded by a thin double ring border decorated with small dot-and-petal motifs evenly spaced like a mandala, minimalist elegant linework (not painterly, not photographic, not 3d), high contrast gold linework on black, no text or writing anywhere in the image, no human figures, clean crisp edges suitable for a small circular logo
```
**Negative prompt extra solo para el emblema** (agrégalo al negative prompt compartido antes de generar): `painterly texture, gradient shading, photo-realistic, 3d render, blurry lines, soft edges, clutter outside the circle`

### Después de generar
Renómbralas exactamente `portada-fondo.jpg` y `portada-emblema.png` y colócalas en
`backend/public/images/mitologia-hindu/` (misma carpeta que los personajes).

## 6. Las historias ya tienen sus prompts

Los prompts de las 19 historias hindúes **ya están hechos** — no en este archivo, sino en
`backend/scripts/prompts-imagenes-historias.md`, sección "6. Mitología Hindú (19 historias)".
Ese archivo cubre las escenas panorámicas (formato horizontal) de las historias de los 4
libros en un solo lugar, separado de los retratos de personaje.

## 7. Si prefieres buscar imágenes manualmente en vez de generarlas

Mismos criterios técnicos que en los libros anteriores:

- **Formato**: `.jpg`.
- **Tamaño mínimo**: 800×1200px (proporción 2:3, vertical, cuerpo completo).
- **Tamaño ideal**: 1000×1500px.
- **Peso máximo recomendado por imagen**: ~500 KB.
- **Nombre del archivo**: exactamente el `slug` del personaje, ej. `shiva.jpg`, `hanuman.jpg`.
- Guárdalas en `backend/public/images/mitologia-hindu/` — el backend ya las sirve
  automáticamente en `http://localhost:3001/images/mitologia-hindu/nombre.jpg`.
