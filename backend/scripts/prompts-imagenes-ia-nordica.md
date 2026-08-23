# Prompts para generar las 36 imágenes de Mitología Nórdica con Leonardo.ai

Cada personaje trae su **prompt completo ya armado**, listo para copiar y pegar directo en
el campo de texto de Leonardo.ai — no hace falta combinar piezas a mano.

## Qué cambió (y por qué)

Mismo ajuste que se aplicó a los archivos de Grecia, Egipto e India, por los mismos dos
problemas:

1. **Todo salía demasiado musculoso por defecto.** Ahora **cada prompt especifica el tipo
   de cuerpo exacto** de ese personaje (esbelto, regio, enjuto, fornido, grácil, etc.), y el
   prompt negativo compartido desalienta el físico genérico de culturista.
2. **Las entidades primordiales sin forma humana definida corren el riesgo de salir como
   una persona con textura rara** si el prompt no lo niega explícitamente. Ymir, el gigante
   primordial anterior a la creación, ahora tiene un prompt más insistente en que **no es una
   persona corriente**, sino una masa informe de hielo y sombra — con una línea de negative
   prompt extra solo para esa imagen.

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
clothing, Egyptian clothing, Indian clothing, horned viking helmet (historically inaccurate
cliché), generic bodybuilder physique, identical muscular build on every character, overly
sexualized pose
```

Para **Ymir** (ver más abajo), agrega además, solo para esa generación puntual:
`ordinary human, human woman, human man, single person, human face, human anatomy`

## 3. Después de generar cada imagen

1. Descarga el archivo.
2. Renómbralo exactamente como el `slug` indicado (ej. `odin.jpg`).
3. Colócalo en `backend/public/images/mitologia-nordica/`.

---

## 4. Prompts completos por personaje

### Dioses

#### Odín (`odin.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate Norse jewelry (braided silver and gold armbands, carved bone and antler details) and fur-trimmed garment details, ancient carved wooden hall architecture with rune-inscribed pillars in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep grey-blue and silver and ash white color palette, one-eyed elderly god with a lean weathered wanderer's build (not muscular), wide-brimmed hat casting a shadow over the missing eye, long grey beard, dark cloak, spear in hand, two ravens perched on his shoulders, two wolves at his feet
```

#### Frigg (`frigg.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate Norse jewelry and fur-trimmed garment details, ancient carved wooden hall architecture with rune-inscribed pillars in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pale ivory and silver and soft blue color palette, regal slender queen with elegant pale robes, spinning distaff in hand, a ring of keys at her belt, calm all-knowing expression, misty hall background
```

#### Thor (`thor.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate Norse jewelry and fur-trimmed garment details, ancient carved wooden hall architecture with rune-inscribed pillars in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, storm grey and crimson red and bronze color palette, muscular red-bearded god (this powerful build fits his role as protector) gripping a short-handled hammer, iron gauntlets, a wide belt, storm clouds and lightning in the background, fierce determined expression
```

#### Loki (`loki.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate Norse jewelry and fur-trimmed garment details, ancient carved wooden hall architecture with rune-inscribed pillars in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, emerald green and black and flame orange color palette, slender sharp-featured god with a lithe wiry build (a trickster, not a warrior) and a sly smile, dark green and black attire, flickering flame-like aura, shape-shifting energy swirling around him
```

#### Baldr (`baldr.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate Norse jewelry and fur-trimmed garment details, ancient carved wooden hall architecture with rune-inscribed pillars in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, radiant white and gold and pale blue color palette, radiantly handsome slender young god glowing with soft golden-white light, flowing pale robes, serene gentle expression, flowers blooming faintly around him
```

#### Hödr (`hodr.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate fabric details, ancient carved wooden hall architecture with rune-inscribed pillars in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pale grey and deep blue and faded silver color palette, blind slender young god with closed or clouded eyes, simple dark robes, holding a bow uncertainly, melancholic isolated expression
```

#### Váli (`vali.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate fur and fabric details, ancient carved wooden hall architecture with rune-inscribed pillars in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, dark crimson and bronze and ash grey color palette, young fierce lean warrior god, unkempt hair and beard, simple furs, intense focused expression, battle-ready stance
```

#### Týr (`tyr.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate armor details, ancient carved wooden hall architecture with rune-inscribed pillars in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, iron grey and deep red and bronze color palette, stern lean one-handed warrior god, missing right hand, sword in his remaining hand, scarred noble face, battlefield backdrop
```

#### Heimdall (`heimdall.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate golden armor details, ancient carved wooden hall architecture with rune-inscribed pillars in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, golden white and sky blue and silver color palette, vigilant golden-toothed god with an alert poised build standing at a rainbow bridge, holding a great horn, gleaming armor, piercing watchful eyes
```

#### Freyr (`freyr.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate Norse jewelry and fur-trimmed garment details, ancient carved wooden hall architecture with rune-inscribed pillars in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, wheat gold and forest green and warm amber color palette, handsome god with a warm generous build holding a golden boar, surrounded by ripening wheat fields, warm generous expression, antler and harvest motifs
```

#### Freyja (`freyja.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate Norse jewelry and fur-trimmed garment details, ancient carved wooden hall architecture with rune-inscribed pillars in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, rose gold and deep red and amber color palette, beautiful graceful goddess wearing an ornate glittering necklace, cloak of falcon feathers, riding a chariot pulled by two large cats, fierce yet radiant expression
```

#### Njörd (`njord.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate fabric details, ancient carved wooden hall architecture with rune-inscribed pillars in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep sea blue and silver and foam white color palette, weathered lean seafaring god, flowing sea-blue robes, standing on a ship's prow, calm ocean and gulls in the background
```

#### Bragi (`bragi.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate fabric details, ancient carved wooden hall architecture with rune-inscribed pillars in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm amber and gold and deep brown color palette, dignified slender bearded god holding a harp, runes faintly glowing on his tongue, welcoming noble expression, great wooden hall background
```

#### Idun (`idun.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate fabric details, ancient carved wooden hall architecture with rune-inscribed pillars in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, golden yellow and soft green and ivory color palette, youthful graceful slender goddess holding a basket of glowing golden apples, warm eternal-youth radiance, orchard-like background
```

#### Sif (`sif.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate fabric details, ancient carved wooden hall architecture with rune-inscribed pillars in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, golden wheat and warm bronze and earthy green color palette, elegant slender goddess with long flowing golden hair like wheat, simple earth-toned gown, standing in a golden field
```

#### Vidar (`vidar.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate fur details, ancient carved wooden hall architecture with rune-inscribed pillars in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep forest green and iron grey and dark brown color palette, silent powerful god (a quiet, restrained strength, not a showy bodybuilder) in simple rugged furs, one oversized reinforced shoe, standing alone in a dense wild thicket, stoic intense expression
```

#### Forseti (`forseti.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate fabric details, ancient carved wooden hall architecture with silver roof and golden pillars in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, silver white and pale gold and soft blue color palette, calm lean just god seated in a hall with silver roof and golden pillars, serene impartial expression, scales of judgment nearby
```

#### Hel (`hel.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate fabric details, ancient carved wooden hall architecture in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, half pale ivory and half decayed black-blue (deliberate contrast) color palette, woman whose one half of the body is pale and slender and alive, the other half decayed and corpse-like, seated on a throne in a cold dark hall
```

#### Skadi (`skadi.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate fur and leather details, ancient carved wooden hall architecture in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, icy blue and silver and white fur color palette, athletic lean huntress goddess in white fur and leather, bow in hand, skis nearby, standing on a snowy mountain peak, fierce independent expression
```

#### Gerd (`gerd.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate fabric details, ancient carved wooden hall architecture in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, radiant silver and pale gold and icy white color palette, strikingly beautiful slender giantess whose bare arms seem to glow with light, pale flowing garments, frost and light motifs, serene captivating expression
```

#### Hermod (`hermod.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate fabric details, ancient carved wooden hall architecture in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep violet and silver and storm grey color palette, determined lean young messenger god riding an eight-legged horse, cloak billowing, urgent resolute expression, dark misty underworld path behind him
```

### Primordiales y seres sagrados

#### Ymir (`ymir.jpg`)
```
Semi-realistic fantasy digital painting, dramatic chiaroscuro lighting, ancient carved wooden hall architecture dissolving into ice and mist in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pale ice blue and ash grey and deep black color palette, absolutely NOT an ordinary human and NOT a single person: a colossal primordial being formed of swirling ice and shadow, vast featureless form with no face, no gender, no defined limbs, no human anatomy whatsoever, an ancient inhuman presence emerging from mist and frost, formless and immense
```
**Negative prompt extra solo para esta imagen** (agrégalo al negative prompt compartido antes de generar): `ordinary human, human woman, human man, single person, human face, human anatomy`

#### Audhumla (`audhumla.jpg`)
```
Semi-realistic fantasy digital painting, dramatic chiaroscuro lighting, ancient carved wooden hall architecture in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pale ivory and icy blue and soft grey color palette, enormous primordial cow standing amid melting ice blocks, four rivers of milk flowing from her, a faint humanoid figure emerging from the ice nearby, entirely non-humanoid herself
```

#### Angrboda (`angrboda.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate fur details, ancient carved wooden hall architecture dissolving into dark forest in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, dark iron grey and deep red and black color palette, fierce tall giantess with an imposing rugged build in dark rugged furs, standing in a shadowy forest of Jötunheim, three shadowy monstrous shapes faintly visible around her
```

#### Mímir (`mimir.jpg`)
```
Semi-realistic fantasy digital painting, dramatic chiaroscuro lighting, ancient carved wooden hall architecture with twisted tree roots in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep teal and silver and ancient bronze color palette, wise ancient severed head resting beside a glowing well beneath twisted tree roots, no body, serene knowing expression, faint magical glow
```

### Monstruos

#### Fenrir (`fenrir.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, ancient carved wooden hall architecture in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, dark charcoal grey and black and blood red color palette, colossal monstrous wolf straining against a thin magical ribbon binding its jaws, glowing feral red eyes, immense powerful form, entirely non-humanoid
```

#### Jörmungandr (`jormungandr.jpg`)
```
Semi-realistic fantasy digital painting, dramatic chiaroscuro lighting, ancient carved wooden hall architecture dissolving into ocean horizon in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep ocean green and black and storm grey color palette, colossal serpent coiled around the entire horizon of the ocean, biting its own tail, scales glistening with sea spray, entirely non-humanoid
```

#### Nídhögg (`nidhogg.jpg`)
```
Semi-realistic fantasy digital painting, dramatic chiaroscuro lighting, ancient carved wooden hall architecture with massive twisted tree roots in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, swamp black and sickly green and bone white color palette, dragon-like serpent gnawing at massive twisted tree roots, corpses faintly visible nearby, dark cold underworld cavern, entirely non-humanoid
```

#### Surt (`surt.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, ancient carved wooden hall architecture cracking apart in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, volcanic red and black and molten orange color palette, colossal fire giant with a towering inhuman build wreathed in flame, wielding a blazing sword brighter than the sun, cracked molten earth beneath him
```

#### Fafnir (`fafnir.jpg`)
```
Semi-realistic fantasy digital painting, dramatic chiaroscuro lighting, ancient carved wooden hall architecture in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, dull gold and dark green and iron grey color palette, massive dragon coiled protectively over a hoard of gold, scaled hide with a faint humanoid dwarf-like face, greedy malevolent eyes, entirely non-humanoid body
```

### Semidioses

#### Brynhild (`brynhild.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate silver armor details, ancient carved wooden hall architecture dissolving into a wall of flame in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, fiery orange and silver armor and deep red color palette, fierce lean valkyrie in silver armor, standing before a towering wall of flame, spear in hand, proud sorrowful expression
```

### Héroes

#### Sigurd (`sigurd.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate armor details, ancient carved wooden hall architecture in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, bronze and deep red and iron grey color palette, young lean heroic warrior holding a reforged sword, dragon blood on his fingertips, birds perched nearby, determined noble expression
```

#### Gunnar (`gunnar.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate ornate garment details, ancient carved wooden hall architecture in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, royal blue and gold and bronze color palette, noble Burgundian king with a dignified lean build in rich formal attire, calculating conflicted expression, great wooden hall behind him
```

#### Ragnar Lodbrok (`ragnar.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate fur and leather details, ancient carved wooden hall architecture dissolving into stormy sea in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, weathered brown and iron grey and deep red color palette, weathered fierce Viking chieftain with a lean rugged build in a distinctive fur garment, longship and stormy sea in the background, defiant unshaken expression
```

### Mortales

#### Ask (`ask.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate fabric details, ancient carved wooden hall architecture dissolving into a windswept shore in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm bark brown and pale green and earthy gold color palette, the first man, a lean figure with a slightly wooden/bark-like texture to the skin (not ordinary smooth human skin), simple humble garments, standing on a windswept shore beside a fallen tree trunk
```

#### Embla (`embla.jpg`)
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, intricate fabric details, ancient carved wooden hall architecture dissolving into a windswept shore in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, soft elm brown and warm green and pale gold color palette, the first woman, a graceful figure with a slightly wooden/bark-like texture to the skin (not ordinary smooth human skin), simple humble garments, standing on a windswept shore beside a fallen tree trunk
```

---

**Nota**: los campos `dominio`, `simbolos` y `descripcion_corta` de cada personaje están en la
base de datos (tabla `personajes`, filtrando por `libro_id` del libro `mitologia-nordica`) por
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
Semi-realistic fantasy digital painting, epic wide vertical composition, dramatic cold twilight and aurora lighting, silhouette of a massive ancient carved wooden hall (Valhalla-like) with a great gnarled world-tree towering behind it, snow-capped fjord mountains and a frozen dark sea below, a green and violet aurora borealis swirling across a starry night sky toward the top, drifting snow and atmospheric haze, painterly rendering, highly detailed digital art, trending on artstation, cinematic wide dynamic range, no text or writing anywhere in the image, no visible human figures, crowds or faces, keep the lower half of the frame calm, dark and uncluttered (it will be covered by a title later), icy blue and aurora green-violet and pale gold color palette, sense of ancient sacred grandeur and cold majesty
```

### Emblema circular — `portada-emblema.png`
```
Flat vector-style emblem design, circular seal/medallion composition, perfectly centered and symmetrical, thin gold line engraving on a solid dark obsidian black circular background, a stylized Mjolnir hammer at the center flanked by two facing ravens with wings spread, surrounded by a thin double ring border inscribed with small Elder Futhark rune characters evenly spaced around the circle, minimalist elegant linework (not painterly, not photographic, not 3d), high contrast gold linework on black, no readable text or writing anywhere in the image (the runes are decorative symbols, not legible words), no human figures, clean crisp edges suitable for a small circular logo
```
**Negative prompt extra solo para el emblema** (agrégalo al negative prompt compartido antes de generar): `painterly texture, gradient shading, photo-realistic, 3d render, blurry lines, soft edges, clutter outside the circle`

### Después de generar
Renómbralas exactamente `portada-fondo.jpg` y `portada-emblema.png` y colócalas en
`backend/public/images/mitologia-nordica/` (misma carpeta que los personajes).

## 6. Las historias ya tienen sus prompts

Los prompts de las 20 historias nórdicas **ya están hechos** — no en este archivo, sino en
`backend/scripts/prompts-imagenes-historias.md`, sección "7. Mitología Nórdica (20 historias)".
Ese archivo cubre las escenas panorámicas (formato horizontal) de las historias de los 4
libros en un solo lugar, separado de los retratos de personaje.

## 7. Si prefieres buscar imágenes manualmente en vez de generarlas

Mismos criterios técnicos que en los libros anteriores:

- **Formato**: `.jpg`.
- **Tamaño mínimo**: 800×1200px (proporción 2:3, vertical, cuerpo completo).
- **Tamaño ideal**: 1000×1500px.
- **Peso máximo recomendado por imagen**: ~500 KB.
- **Nombre del archivo**: exactamente el `slug` del personaje, ej. `odin.jpg`, `thor.jpg`.
- Guárdalas en `backend/public/images/mitologia-nordica/` — el backend ya las sirve
  automáticamente en `http://localhost:3001/images/mitologia-nordica/nombre.jpg`.
