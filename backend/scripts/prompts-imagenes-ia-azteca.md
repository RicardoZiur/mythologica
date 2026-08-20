# Prompts para generar las 47 imágenes de Mitología Azteca con Leonardo.ai

Cada personaje trae su **prompt completo ya armado**, listo para copiar y pegar directo en
el campo de texto de Leonardo.ai — no hace falta combinar piezas a mano. Mismo formato que
`prompts-imagenes-ia.md` (Griega), `prompts-imagenes-ia-egipcia.md`, `-hindu.md` y
`-nordica.md`, para que las cinco colecciones se sientan como parte del mismo libro-marca.

## Sobre la cantidad (47, no 54)

A diferencia de los otros libros, **no se forzó la paridad exacta** con Mitología Griega
(54 personajes). La documentación confiable de figuras aztecas individuales —sobre todo
"monstruos" con nombre propio y mito bien registrado— es más escasa que en la tradición
griega, y se priorizó mantener solo contenido bien respaldado por fuentes reales (Códice
Florentino, historiadores como Miguel León-Portilla) en vez de rellenar con figuras
inventadas o muy poco documentadas. Desglose: 15 dioses, 5 primordiales, 10 héroes,
12 monstruos, 5 mortales.

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
clothing, Egyptian clothing, generic bodybuilder physique, identical muscular build on every
character, overly sexualized pose
```

Para **Cipactli**, **Tlaltecuhtli** (monstruos primordiales sin forma humana) y
**Quetzalcoatl** (representado aquí como serpiente emplumada, no humanoide), agrega además,
solo para esas generaciones puntuales:
`human, human face, human body, human anatomy, humanoid`

Para los personajes con rasgos de animal (Xolotl, Tepeyollotl, Ahuízotl), cada prompt ya
incluye una aclaración de qué parte es animal y qué parte no, para que el modelo no dibuje
un animal completo ni una figura humana sin esos rasgos.

## 3. Después de generar cada imagen

1. Descarga el archivo.
2. Renómbralo exactamente como el `slug` indicado (ej. `huitzilopochtli.jpg`).
3. Colócalo en `backend/public/images/mitologia-azteca/`.

---

## 4. Prompts completos por personaje

### Dioses

#### Huitzilopochtli (`huitzilopochtli.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec jewelry (jade, turquoise, gold discs) and feathered garment details, ancient Mesoamerican stepped pyramid ruins with carved stone reliefs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, turquoise blue and solar gold and obsidian black color palette, fierce young war god with an athletic battle-ready build, hummingbird feather headdress, blue body paint on one leg, wielding the Xiuhcoatl fire serpent as a weapon, solar rays radiating behind him
```

#### Tezcatlipoca (`tezcatlipoca.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec jewelry and feathered garment details, ancient Mesoamerican stepped pyramid ruins with carved stone reliefs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, obsidian black and smoky grey and blood red color palette, lean predatory night god with a sleek nocturnal-jaguar build, one foot replaced by a smoking obsidian mirror disc, obsidian mirror on his chest, black and red facial paint, glowing amber eyes, swirling smoke around him
```

#### Quetzalcoatl (`quetzalcoatl.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a colossal feathered serpent deity, NOT humanoid, no human anatomy, sinuous serpent body covered in iridescent emerald and turquoise quetzal feathers instead of scales, feathered wings along its length, ancient Mesoamerican stepped pyramid ruins with carved stone reliefs in the misty background, atmospheric haze, centered dynamic coiled composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, emerald green and turquoise and gold color palette, serpent coiling gracefully through swirling wind and mist, Venus star glowing faintly in the dawn sky above, feathers catching golden light
```

#### Tlaloc (`tlaloc.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec jewelry and feathered garment details, ancient Mesoamerican stepped pyramid ruins with carved stone reliefs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep blue and jade green and storm grey color palette, stocky powerful rain god with a sturdy grounded build, large circular goggle-shaped eyes, prominent jaguar fangs, holding a lightning serpent staff, torrential rain and lightning bolts around him
```

#### Tonatiuh (`tonatiuh.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec jewelry and feathered garment details, ancient Mesoamerican stepped pyramid ruins with carved stone reliefs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, blazing solar gold and amber orange and eagle-feather brown color palette, radiant warrior sun god with a powerful solar build, golden sun-disk headdress with radiating rays, obsidian blade tongue, eagle feather cloak, intense piercing gaze
```

#### Coatlicue (`coatlicue.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec jewelry and feathered garment details, ancient Mesoamerican stepped pyramid ruins with carved stone reliefs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, earthy brown and deep red and serpent-green color palette, terrifying imposing earth mother goddess with a heavy monumental build, skirt woven of writhing living serpents, necklace of human hands and hearts, clawed feet and hands, twin serpent heads where her own head would be
```

#### Coyolxauhqui (`coyolxauhqui.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec jewelry and feathered garment details, ancient Mesoamerican stepped pyramid ruins with carved stone reliefs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, silver moonlight and midnight blue and gold color palette, fierce warrior moon goddess with an athletic warrior build, golden bell ornaments on her cheeks, crescent moon headdress, warrior armor and shield, large full moon glowing behind her
```

#### Xochiquetzal (`xochiquetzal.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec jewelry and feathered garment details, ancient Mesoamerican stepped pyramid ruins with carved stone reliefs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm floral pink and gold and butterfly-wing iridescent color palette, graceful youthful beauty goddess with a soft elegant build, adorned with fresh marigold flowers and quetzal feathers, embroidered huipil garment, butterflies fluttering around her
```

#### Mictlantecuhtli (`mictlantecuhtli.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec jewelry and feathered garment details, ancient Mesoamerican stepped pyramid ruins with carved stone reliefs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, bone white and deep violet and obsidian black color palette, skeletal death god with a gaunt bony build, exposed ribcage and bone ornaments, necklace of human eyeballs, paper collar, owl feather headdress, standing at the dark entrance to the underworld
```

#### Chalchiuhtlicue (`chalchiuhtlicue.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec jewelry and feathered garment details, ancient Mesoamerican stepped pyramid ruins with carved stone reliefs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, jade green and deep aquamarine and pearl color palette, elegant flowing water goddess with a graceful fluid build, jade-green skirt and headdress flowing like water, standing waist-deep in a moonlit lake, water swirling around her hands
```

#### Xipe Totec (`xipe-totec.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec jewelry and feathered garment details, ancient Mesoamerican stepped pyramid ruins with carved stone reliefs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, golden ochre and blood red and maize gold color palette, solemn ritual god with a wiry unsettling build, wearing a flayed golden skin over his own body with visible stitched seams, holding a rattle staff, standing amid sprouting maize plants
```

#### Xochipilli (`xochipilli.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec jewelry and feathered garment details, ancient Mesoamerican stepped pyramid ruins with carved stone reliefs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, vibrant coral and marigold gold and butterfly-wing color palette, joyful youthful art god with a light playful build, adorned with colorful flowers and butterflies, seated on an ornate floral throne, holding a feathered fan, musical instruments nearby
```

#### Tlazolteotl (`tlazolteotl.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec jewelry and feathered garment details, ancient Mesoamerican stepped pyramid ruins with carved stone reliefs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, muted violet and earthy brown and smoky black color palette, mysterious purification goddess with a solemn full-figured build, black band painted around her mouth, holding a ceremonial broom, headdress of raw unspun cotton, dim copal incense smoke around her
```

#### Mayahuel (`mayahuel.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec jewelry and feathered garment details, ancient Mesoamerican stepped pyramid ruins with carved stone reliefs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, teal green and soft violet and moonlit silver color palette, fertile nurturing plant goddess with a soft abundant build, emerging from and intertwined with a large blue agave maguey plant, jade ornaments, small rabbit-spirit figures around her feet
```

#### Xolotl (`xolotl.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec jewelry and feathered garment details, ancient Mesoamerican stepped pyramid ruins with carved stone reliefs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep indigo and bone white and twilight purple color palette, animal-headed deity, human body with a lean twin-like build, dog-shaped head, backward-facing feet, dark ornate jewelry, standing at a torch-lit threshold to the underworld
```

### Primordiales

#### Ometeotl (`ometeotl.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, dual being with both masculine and feminine features merged into one androgynous figure, intricate ornate Aztec jewelry and feathered garment details, cosmic starry void of the thirteenth heaven in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, cosmic black and starlight silver and dual gold-and-shadow color palette, ancient primordial dual deity with a timeless ethereal build, half-body glowing gold and half in shadow, seated at the center of a swirling cosmic duality, no clear age or single gender
```

#### Tonacatecuhtli (`tonacatecuhtli.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec jewelry and feathered garment details, cosmic starry void of the thirteenth heaven in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm gold and cosmic indigo color palette, ancient paternal creator god with a dignified elder build, richly layered ceremonial regalia, calm commanding presence, cosmic clouds swirling around him
```

#### Tonacacihuatl (`tonacacihuatl.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec jewelry and feathered garment details, cosmic starry void of the thirteenth heaven in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm gold and cosmic indigo color palette, ancient maternal creator goddess with a serene matronly build, richly layered ceremonial regalia, nurturing calm expression, cosmic clouds swirling around her
```

#### Centéotl (`centeotl.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec jewelry and feathered garment details, ancient Mesoamerican stepped pyramid ruins with carved stone reliefs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, maize gold and earthy green and warm amber color palette, youthful agricultural god with a lithe graceful build, corn maize cobs sprouting from an elaborate headdress, standing amid a lush cultivated field at golden hour
```

#### Mixcóatl (`mixcoatl.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec jewelry and feathered garment details, starry night sky over an arid desert landscape in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep night blue and dusty red-and-white and starlight silver color palette, ancestral hunter god with a rugged athletic build, red and white striped facial paint, holding a bow and arrows, the Milky Way visible as a glowing band across the sky behind him
```

### Héroes

#### Topiltzin Quetzalcóatl (`topiltzin-quetzalcoatl.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec jewelry and feathered garment details, ancient Mesoamerican stepped pyramid ruins with carved stone reliefs in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, jade green and gold and ivory white color palette, wise priest-king with a dignified slender build, elaborate feathered headdress and priestly robes, holding a ceremonial staff, standing before a golden-age Toltec temple in full bloom
```

#### Chimalma (`chimalma.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec jewelry and feathered garment details, dense misty forest in the background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, forest green and earthy brown and arrow-shaft tan color palette, determined mortal woman with a resilient graceful build, holding a shield with five arrows caught against it, standing firm in a forest clearing at dusk
```

#### Huémac (`huemac.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec jewelry and feathered garment details, crumbling Mesoamerican pyramid ruins in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, faded royal gold and decaying grey and dust brown color palette, troubled aging king with a weary once-powerful build, ornate but tarnished royal regalia, standing amid the crumbling ruins of a declining city
```

#### Tenoch (`tenoch.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec jewelry and feathered garment details, misty lake islet with reeds in the background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, earthy green and lake blue and dawn gold color palette, resolute priest-leader with a weathered determined build, simple priestly garments, pointing toward a distant eagle on a cactus, standing at the edge of a marshy lake at sunrise
```

#### Copil (`copil.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec jewelry and feathered garment details, misty battlefield near a lake in the background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, vengeful crimson and shadow black and warrior bronze color palette, fierce shaman-warrior with a lean vengeful build, war paint and warrior regalia, holding a weapon raised in defiance, stormy sky behind him
```

#### Malinalxóchitl (`malinalxochitl.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec jewelry and feathered garment details, desert with scorpions and serpents in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, venomous green and desert amber and shadow purple color palette, powerful sorceress with a striking commanding build, serpents and scorpions coiling around her arms, elaborate dark ceremonial dress, desert dunes under a full moon behind her
```

#### Cuauhcóatl (`cuauhcoatl.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec jewelry and feathered garment details, misty marshland at night in the background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, night blue and eagle-feather brown and gold color palette, elderly wise priest with a frail dignified build, simple priestly robes, eagle-serpent motif on his staff, standing in reverence beneath a starlit sky over the marsh
```

#### Axolohua (`axolohua.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec jewelry and feathered garment details, misty lake water in the background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, lake blue and jade green and misty grey color palette, elderly priest wading through water with a wiry weathered build, simple priestly robes soaked at the hem, gazing into a swirling whirlpool in the lake
```

#### Nezahualcóyotl (`nezahualcoyotl.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec jewelry and feathered garment details, elegant Texcoco palace gardens in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, royal turquoise and coyote tan and gold color palette, wise poet-king with a lean contemplative build, elaborate royal headdress, holding a codex or writing implement, coyote motif subtly worked into his regalia, tranquil garden setting
```

#### Acamapíchtli (`acamapichtli.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec jewelry and feathered garment details, early Tenochtitlan cityscape with canals in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, royal gold and reed-green and lake blue color palette, dignified young ruler with a composed regal build, holding a bundle of reeds (a play on his name), simple but authoritative royal attire, canals of the young city behind him
```

### Monstruos

#### Cipactli (`cipactli.jpg`)
```
Semi-realistic fantasy digital painting, wide dramatic scene, chiaroscuro lighting, a colossal non-human primordial sea monster, NOT a person, no human anatomy, crocodile-fish-toad hybrid creature covered in mouths and eyes at every joint, floating on vast primordial dark waters, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, void black and murky green and bone white color palette, endless hungry maw, ancient and monstrous, dwarfing the ocean around it
```

#### Tlaltecuhtli (`tlaltecuhtli.jpg`)
```
Semi-realistic fantasy digital painting, wide dramatic scene, chiaroscuro lighting, a colossal non-human primordial earth monster, NOT a person, no human anatomy, giant toad-and-caiman hybrid creature covered in devouring mouths at every joint, sprawled across a churning primordial sea, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, earthy brown and deep red and murky black color palette, torn and dismembered form beginning to shape mountains and rivers, ancient and monstrous
```

#### Tzitzimitl (`tzitzimitl.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, skeletal female star-demon with a gaunt bony build, intricate bone jewelry and skull ornaments, dark eclipse sky in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, obsidian black and bone white and eclipse-red color palette, clawed skeletal hands, skirt of skulls and crossbones, emerging from the darkness of a solar eclipse
```

#### Ahuízotl (`ahuizotl.jpg`)
```
Semi-realistic fantasy digital painting, full body creature portrait, dramatic chiaroscuro lighting, animal creature, NOT humanoid, small dog-sized aquatic beast with sleek dark wet fur, human-like hands on all four paws and one additional grasping hand at the tip of its long prehensile tail, murky lake water in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep water black and wet obsidian sheen color palette, lurking half-submerged in dark water, eyes glowing faintly beneath the surface
```

#### Itzpapálotl (`itzpapalotl.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, skeletal warrior goddess with a fierce lean build, wings made of sharp obsidian blades shaped like a butterfly, intricate bone and obsidian ornaments, mythical paradise garden with strange flowers in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, obsidian black and blood red and butterfly-iridescent color palette, clawed hands, part skeletal-part beautiful woman, dramatic wingspan
```

#### Centzon Totochtin (`centzon-totochtin.jpg`)
```
Semi-realistic fantasy digital painting, wide dynamic scene, dramatic chiaroscuro lighting, a group of minor rabbit-headed deities of varied builds, intricate ornate Aztec jewelry, festive Mesoamerican courtyard in the misty background, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm amber and earthy brown and pale moonlight color palette, animal-headed deities, human bodies, rabbit heads with wild varied expressions from joyful to violent, surrounded by ceremonial pulque vessels
```

#### Centzon Mimixcoa (`centzon-mimixcoa.jpg`)
```
Semi-realistic fantasy digital painting, wide dynamic scene, dramatic chiaroscuro lighting, a group of star-warrior spirits with athletic builds, intricate ornate Aztec warrior jewelry and cloud-serpent motifs, starry northern night sky in the misty background, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, night blue and cloud-white and silver starlight color palette, warriors armed with bows scattering into the night sky, ethereal and fading into stars
```

#### Náhual (`nahual.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, mid-transformation figure, half human sorcerer half jaguar, dynamic transformation pose, intricate ornate Aztec jewelry, dense misty jungle at night in the background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, jaguar-spot black and gold and moonlit silver color palette, piercing feline eyes, one side human one side animal, moonlight cutting across the transformation
```

#### Coyotlináhual (`coyotlinahual.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, coyote-featured artisan sorcerer with a lean craftsman build, intricate feathered garments he is crafting, feather-work workshop in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm amber gold and feather-iridescent teal and earthy brown color palette, coyote-like facial features, hands delicately arranging quetzal feathers into an elaborate garment, workshop filled with colorful feathers
```

#### Chaneques (`chaneques.jpg`)
```
Semi-realistic fantasy digital painting, wide scene, dramatic chiaroscuro lighting, small child-sized or elderly-dwarf nature spirits, mischievous expressions, intricate natural adornments of leaves and vines, lush misty forest with a hidden cave in the background, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, forest green and earthy brown and dappled sunlight gold color palette, small guardian spirits peeking from behind roots and rocks, playful yet watchful
```

#### Tepeyólotl (`tepeyollotl.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, animal-featured deity, humanoid body with a jaguar head and powerful build, intricate ornate Aztec jewelry, dark cave interior with glowing crystals in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, jaguar-spot black and earthy stone grey and ember orange color palette, animal-headed deity, human body, jaguar head with piercing eyes, standing at the mouth of a rumbling cave, faint cracks of light from a tremor
```

#### Cihuateteo (`cihuateteo.jpg`)
```
Semi-realistic fantasy digital painting, wide dramatic scene, dramatic chiaroscuro lighting, ghostly female spirits with pale skeletal-tinged faces and warrior builds, white ceremonial garments, misty crossroads at night in the background, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pale moonlight white and shadow grey and faint blood red color palette, spectral warrior women descending at dusk, honored yet unsettling presence, standing at a lonely crossroads
```

### Mortales

#### Ixtaccíhuatl (`ixtaccihuatl.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec jewelry and feathered garment details, snow-capped mountain peak in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pale ivory white and soft violet twilight and mountain grey color palette, serene mortal princess with a graceful reclining build, resting peacefully atop a mountain as if asleep, delicate royal garments, a distant volcano visible on the horizon
```

#### Popocatépetl (`popocatepetl.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec jewelry and feathered warrior garment details, volcanic mountain with glowing embers in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, ember orange and volcanic black and smoky grey color palette, mournful warrior with a strong grieving build, kneeling and holding a burning torch, smoke rising behind him from the volcano he became
```

#### Xóchitl, doncella del pulque (`xochitl-doncella.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec jewelry and feathered garment details, maguey agave field in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm amber gold and agave teal-green and earthy brown color palette, humble young maiden with a graceful modest build, offering a ceremonial vessel of pulque, simple woven garments, standing among tall maguey plants at sunset
```

#### Quetzalpétlatl (`quetzalpetlatl.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec jewelry and feathered garment details, dim palace interior in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, muted violet and dim gold and shadowy grey color palette, sorrowful young noblewoman with a delicate somber build, elegant Toltec royal garments, holding a ceremonial cup, downcast troubled expression
```

#### La princesa desollada de Culhuacán (`princesa-de-culhuacan.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, body type and physique matching the character's own nature and role rather than a uniform idealized build, intricate ornate Aztec royal jewelry and feathered garment details, torch-lit temple interior in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep red and gold and shadow black color palette, solemn young princess with a graceful noble build, elegant pre-Hispanic royal garments and jade jewelry, dignified sorrowful expression, standing in a firelit ceremonial hall
```

## 5. Si prefieres buscar imágenes manualmente en vez de generarlas

Si algún personaje ya tiene arte histórico/arqueológico de dominio público suficientemente
claro (por ejemplo, Coatlicue o la Piedra del Sol, ambas piezas reales del Museo Nacional de
Antropología), puedes usar una fotografía de la pieza en vez de generarla con IA — mantiene
la autenticidad del libro. Para el resto, sin representación artística tradicional
reconocible, la generación con IA sigue siendo la opción más práctica.
