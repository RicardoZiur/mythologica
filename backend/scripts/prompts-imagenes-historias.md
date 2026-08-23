# Prompts para generar imágenes de historias y cosmogonías con Leonardo.ai

A diferencia de `prompts-imagenes-ia*.md` (que son retratos de personaje, formato vertical),
estos son **prompts de escena**: el momento más icónico de cada historia, en formato
horizontal panorámico, con varios personajes y acción — pensados como ilustración de
apertura de cada historia (o portada de sección para las cosmogonías).

**Aviso importante**: hoy la tabla `historias` no tiene un campo de imagen ni el flipbook
tiene un lugar donde mostrarlas (a diferencia de `personajes.imagen_principal`, que sí se
muestra). Estos prompts están listos para que generes las imágenes cuando quieras, pero para
que aparezcan en el sitio hace falta agregar esa función (columna en la base + subida +
render en `app.js`/`pdf.js`). Avísame si querés que la arme y las conectamos.

**Aviso sobre el recorte del banner (2026-08-21)**: el `.historia-banner` se muestra con
`object-fit:cover` en una caja MUY panorámica — hasta ~2.7:1 en el PDF (el ancho útil de la
hoja entre 150-260px de alto), más angosta pero igual de ancha en el flipbook. Una imagen
generada en 16:9 o 3:2 "normal" es más alta de lo que esa caja necesita, así que el recorte
centrado le come la parte de arriba y de abajo — típicamente la cabeza de un personaje "en lo
alto" o un elemento flotando por encima de la escena. Desde este aviso, los prompts nuevos
piden explícitamente `aspect ratio approximately 21:9` y mantienen toda la acción clave en una
franja horizontal baja al centro del cuadro (evitando composiciones "altas": alguien trepado,
algo flotando arriba de otra cosa, un grupo disperso en vertical). Si una imagen ya generada
se ve con partes importantes cortadas, ese es el motivo — pedile a Gemini que la regenere con
el prompt actualizado.

**Aviso sobre bordes difuminados (2026-08-23)**: la frase original que pedia mantener la
accion en "una franja horizontal baja... nada importante cerca del borde superior o inferior"
hacia que Gemini interpretara eso como una instruccion visual -- difuminando o desvaneciendo
literalmente los bordes de arriba y abajo de la imagen (como una vineta), en vez de solo ubicar
ahi la composicion. Todos los prompts se reescribieron para separar ambas cosas explicitamente:
primero piden que la imagen entera este nitida de borde a borde sin vineta ni desenfoque, y
recien despues piden la ubicacion de la accion en la franja central. Si una imagen sale con los
bordes borrosos pese a esto, pedile a Gemini especificamente que la regenere "sin desenfoque ni
vineta en los bordes, toda la imagen nitida".

## 1. Configuración recomendada en Leonardo.ai

- **Modelo**: "Leonardo Phoenix 1.0" — si el resultado no convence, prueba "AlbedoBase XL".
- **Preset/Style**: "Illustration" o "Dynamic".
- **Alchemy**: activado.
- **Proporción**: **3:2 o 16:9 (horizontal)** — a diferencia de los retratos, estas son escenas panorámicas.
- Genera 2-4 variaciones por historia y quédate con la mejor.

## 2. Prompt negativo (pégalo una sola vez, sirve para las 114 escenas — salvo Sumeria, que se genera con Gemini)

```
text, watermark, signature, blurry, extra limbs, extra fingers, deformed hands, deformed
faces, cropped, modern clothing, cartoon, anime, 3d render, low detail, plain background,
photo, too many indistinct background figures, disfigured crowd, incoherent anatomy
```

## 3. Después de generar cada imagen

1. Descarga el archivo.
2. Renómbralo exactamente como el `slug` de la historia (ej. `origen-del-cosmos.jpg`).
3. Guárdalo por ahora en una carpeta local aparte (ej. `backend/public/images/<libro>/historias/`)
   — todavía no hay endpoint para subirlas, así que no hace falta apurarse con esto hasta
   que conectemos la función.

---

## 4. Mitología Griega (20 historias)

### ⭐ El origen del cosmos (cosmogonía) — `origen-del-cosmos.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Greek temple ruins and epic landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, void black and deep indigo and starlight silver and earthy green
color palette, vast primordial void of Chaos giving birth to Gaia (the earth) and Uranus
(the starry sky) emerging from swirling darkness, the first divine forms taking shape from
formless void, cosmic dawn of creation
```

### La Titanomaquia — `titanomaquia.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Greek temple ruins and epic landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, storm-cloud grey and electric blue and bronze color palette, epic
ten-year war between the Titans led by Cronus and the young Olympian gods led by Zeus,
lightning bolts crashing from the sky, mountains hurled as weapons, chaotic battlefield of
gods and giants
```

### El reparto del cosmos — `reparto-del-cosmos.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Greek temple ruins and epic landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, royal gold and deep aquamarine and obsidian black color palette,
Zeus, Poseidon and Hades standing together dividing the cosmos by lot, Zeus claiming the sky
with lightning, Poseidon the churning sea with his trident, Hades the shadowy underworld,
three thrones of power
```

### Perseo y la cabeza de Medusa — `perseo-y-medusa.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Greek temple ruins and epic landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, emerald green and antique gold and midnight blue color palette,
Perseus holding up the severed snake-haired head of Medusa with his face turned away,
reflective bronze shield in his other hand, Medusa's headless body crumpling in a cave
```

### Teseo y el Minotauro — `teseo-y-el-minotauro.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Greek temple ruins and epic landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, royal blue and bronze and torchlit amber color palette, Theseus
locked in combat with the bull-headed Minotaur deep inside the stone labyrinth, golden
thread trailing behind him on the ground, torchlit corridors
```

### Los Doce Trabajos de Heracles — `doce-trabajos-de-heracles.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Greek temple ruins and epic landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, tawny lion gold-brown and bronze and deep red color palette,
Heracles wrestling the Nemean lion with his bare hands, the lion's pelt already draped over
one shoulder as if from a previous moment, symbolic montage energy of his twelve labors
```

### Jasón y el Vellocino de Oro — `jason-y-el-vellocino-de-oro.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Greek temple ruins and epic landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, sea blue and antique gold and weathered brown color palette, Jason
reaching to grasp the glowing Golden Fleece hanging from a tree guarded by a coiled serpent,
the ship Argo and the Argonauts waiting in the misty background
```

### La guerra de Troya — `guerra-de-troya.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Greek temple ruins and epic landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, bronze and crimson red and ash grey color palette, the wooden
horse of Troy being pulled through the city gates at dusk, the walls of Troy looming,
warriors hidden in shadow, the burning city implied on the horizon
```

### La Odisea: el regreso de Odiseo — `odisea-regreso-de-odiseo.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Greek temple ruins and epic landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, weathered sea grey and deep blue and foam white color palette,
Odysseus lashed to the mast of his ship, straining against the ropes as the Sirens sing from
the rocks, his crew rowing with wax-sealed ears, stormy sea
```

### El rapto de Perséfone — `rapto-de-persefone.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Greek temple ruins and epic landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, obsidian black and spring lilac-pink and pale gold color palette,
Hades in his dark chariot pulled by black horses erupting from a chasm in the earth to seize
Persephone from a flowering field, flowers scattering, Demeter reaching after her in the
distance
```

### Orfeo y Eurídice — `orfeo-y-euridice.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Greek temple ruins and epic landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, violet and deep gold and twilight blue color palette, Orpheus
looking back over his shoulder at the ghostly translucent figure of Eurydice just as she
begins to fade back into the shadows of the underworld, his lyre still in hand
```

### Ío y los cien ojos de Argos — `io-y-argos.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Greek temple ruins and epic landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, warm brown and cream white and iridescent violet-blue color
palette, Io transformed into a white heifer standing in a meadow, watched over by the
hundred-eyed giant Argos Panoptes, Hermes approaching in disguise with his flute in the
distance
```

### Belerofonte y la Quimera — `belerofonte-y-la-quimera.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Greek temple ruins and epic landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, sky blue and cloud white and fire orange-red color palette,
Bellerophon riding the winged horse Pegasus, thrusting a lead-tipped spear into the
fire-breathing mouth of the Chimera below
```

### El amor de Ares y Afrodita — `amor-de-ares-y-afrodita.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Greek temple ruins and epic landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, rose pink and molten bronze and crimson red color palette, Ares
and Aphrodite caught together in an invisible golden net forged by Hephaestus, suspended
above a bed, the assembled Olympian gods looking on from the doorway in laughter
```

### Ícaro y el vuelo hacia el sol — `icaro-y-el-vuelo.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Greek temple ruins and epic landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, sunset gold and ivory white and fading amber color palette, Icarus
flying too close to the sun on wings of feathers and wax, individual feathers beginning to
melt and fall away, the sea far below, his father Daedalus reaching after him
```

### Atalanta y la carrera de las manzanas doradas — `atalanta-carrera-manzanas.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Greek temple ruins and epic landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, forest green and bronze and golden amber color palette, Atalanta
and Hippomenes racing at full sprint down an ancient track, a golden apple rolling on the
ground behind them as she stoops to pick it up
```

### Tifón contra Zeus — `tifon-contra-zeus.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Greek temple ruins and epic landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, volcanic red and ash black and electric blue-white color palette,
Zeus hurling multiple lightning bolts at once against the monstrous serpent-headed giant
Typhon, who towers with a hundred hissing snake heads and wings, storm and fire clashing
```

### El nacimiento de Dioniso — `nacimiento-de-dioniso.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Greek temple ruins and epic landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, blinding gold and deep purple and ivory white color palette, Zeus
in blinding divine radiance opening his own thigh to reveal the infant Dionysus sewn safely
inside, Semele's mortal form consumed by golden light in the background
```

### Ártemis y Acteón — `artemis-y-acteon.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Greek temple ruins and epic landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, forest green and silver and moonlit blue color palette, Artemis,
startled while bathing in a forest pool, casting a curse toward the hunter Actaeon as
antlers begin to sprout from his head, his hunting dogs already turning toward him with
hostile eyes
```

### Edipo y la Esfinge — `edipo-y-la-esfinge.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Greek temple ruins and epic landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, sandy gold and bronze and royal purple color palette, Oedipus
standing before the Sphinx perched on a rocky outcrop outside Thebes, the creature's lion
body and eagle wings and woman's face fixed in an enigmatic stare, bones of failed
travelers scattered below
```

---

## 5. Mitología Egipcia (21 historias)

### ⭐ La cosmogonía heliopolitana (cosmogonía) — `cosmogonia-heliopolitana.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Egyptian temple architecture and Nile landscape backdrop with hieroglyphic carvings, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, dawn gold and void indigo and deep teal color palette, Atum
standing alone atop the first mound of dry earth rising from the dark endless waters of Nun,
golden light radiating from him as the first act of creation begins
```

### El asesinato de Osiris — `asesinato-de-osiris.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Egyptian temple architecture and Nile landscape backdrop with hieroglyphic carvings, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, deep black and gold and desert red color palette, Osiris lying
inside an ornately decorated wooden coffin at a banquet, Set and his conspirators sealing
the lid shut, about to cast it into the Nile
```

### Isis y la resurrección de Osiris — `resurreccion-de-osiris.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Egyptian temple architecture and Nile landscape backdrop with hieroglyphic carvings, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, lapis lazuli blue and gold and green-tinted color palette, Isis in
the form of a kite-bird hovering with beating wings over the reassembled body of Osiris on a
funerary bier, magic swirling around her, breathing life back into him
```

### El nacimiento de Horus en los pantanos — `nacimiento-de-horus.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Egyptian temple architecture and Nile landscape backdrop with hieroglyphic carvings, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, papyrus green and lapis blue and gold color palette, Isis
cradling the infant Horus protectively among tall papyrus reeds in the hidden marshes of
Jemis, magical wards glowing faintly around them
```

### Las contiendas de Horus y Set — `contiendas-de-horus-y-set.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Egyptian temple architecture and Nile landscape backdrop with hieroglyphic carvings, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, Nile blue-green and desert red and gold color palette, Horus and
Set locked in combat transformed into hippopotamuses beneath the surface of the Nile, Isis
on the riverbank with a spear raised
```

### La destrucción de la humanidad — `destruccion-de-la-humanidad.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Egyptian temple architecture and Nile landscape backdrop with hieroglyphic carvings, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, blood red and gold and sun-disk orange color palette, the lioness
goddess Sekhmet rampaging across a blood-red battlefield of fleeing humans, Ra watching
gravely from the sky above, fields flooded with red-dyed beer in the distance
```

### Isis y el nombre secreto de Ra — `nombre-secreto-de-ra.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Egyptian temple architecture and Nile landscape backdrop with hieroglyphic carvings, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, solar gold and obsidian black and venomous green color palette,
an elderly Ra writhing in agony from serpent venom while Isis stands calmly over him, a
small magical serpent coiled nearby, other gods gathered in alarm
```

### El viaje nocturno de Ra y la serpiente Apofis — `viaje-nocturno-de-ra.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Egyptian temple architecture and Nile landscape backdrop with hieroglyphic carvings, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, venomous black and solar gold and dull red color palette, Ra's
solar barque sailing through the dark waters of the underworld, Set standing at the prow
spearing the massive coiled serpent Apophis as it rises to attack
```

### El pesaje del corazón — `pesaje-del-corazon.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Egyptian temple architecture and Nile landscape backdrop with hieroglyphic carvings, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, obsidian black and gold and bone white color palette, Anubis
carefully balancing a human heart on a golden scale against a single white feather, Thot
recording the result with a reed pen, the monster Ammit crouched waiting nearby
```

### El cuento de los dos hermanos — `cuento-de-los-dos-hermanos.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Egyptian temple architecture and Nile landscape backdrop with hieroglyphic carvings, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, earthy green and Nile brown and cedar gold color palette, Bata
standing on the far riverbank among crocodile-infested waters, holding his own heart aloft
toward a tall cedar tree, his accusing brother left behind on the opposite shore
```

### El cuento de Sinuhé — `cuento-de-sinuhe.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Egyptian temple architecture and Nile landscape backdrop with hieroglyphic carvings, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, desert tan and royal gold and weathered bronze color palette, an
aged Sinuhé kneeling before the Egyptian pharaoh's throne after decades of exile, desert and
foreign lands visible behind him in memory, finally home
```

### Setna y el Libro de Thot — `setna-y-el-libro-de-thot.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Egyptian temple architecture and Nile landscape backdrop with hieroglyphic carvings, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, midnight blue and gold and faded papyrus tan color palette, Setna
descending into a torchlit tomb guarded by coiling serpents, reaching for a glowing ancient
papyrus scroll resting on a stone altar
```

### Shu separa el cielo de la tierra — `shu-separa-a-geb-y-nut.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Egyptian temple architecture and Nile landscape backdrop with hieroglyphic carvings, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, midnight blue and moss green and pale gold color palette, Shu
straining with his arms raised overhead, lifting the star-covered body of Nut high into the
sky while Geb's earthen form stretches below, the first sky and earth being separated
```

### Geb desafía a Shu por la corona — `la-corona-robada-de-shu.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Egyptian temple architecture and Nile landscape backdrop with hieroglyphic carvings, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, deep moss green and dull red and bronze color palette, Geb
reaching to seize a floating golden crown as serpents erupt furiously from the cracked earth
around him, one striking toward him
```

### Isis y los siete escorpiones de Serket — `isis-y-los-siete-escorpiones.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Egyptian temple architecture and Nile landscape backdrop with hieroglyphic carvings, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, amber orange and lapis blue and desert night color palette, Isis
walking wearily along a desert road at night with the infant Horus, seven scorpions
following protectively in formation around her feet
```

### El veredicto de Neith — `veredicto-de-neith.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Egyptian temple architecture and Nile landscape backdrop with hieroglyphic carvings, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, deep red and black and aged gold color palette, the ancient
goddess Neith seated in judgment as a scroll bearing her verdict is presented to a tribunal
of gods, Horus and Set standing on opposite sides awaiting the decision
```

### Sobek y el rescate de la mano de Horus — `sobek-y-la-mano-de-horus.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Egyptian temple architecture and Nile landscape backdrop with hieroglyphic carvings, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, murky green and gold and Nile brown color palette, Sobek the
crocodile god emerging from the murky waters of the Nile, gently holding a severed hand in
his jaws, presenting it toward a distant tribunal of gods
```

### Los prodigios de Djedi ante el faraón Jufu — `prodigios-de-djedi.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Egyptian temple architecture and Nile landscape backdrop with hieroglyphic carvings, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, aged parchment beige and royal gold and soft grey color palette,
the elderly magician Djedi standing before the pharaoh's court, reuniting the severed head
of a goose with its body in a glowing burst of magic, the court watching in astonishment
```

### El mago Ubaoner y el cocodrilo de cera — `mago-ubaoner-cocodrilo-de-cera.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Egyptian temple architecture and Nile landscape backdrop with hieroglyphic carvings, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, murky green and dark bronze and black color palette, a small wax
crocodile figurine transforming into a massive real crocodile the instant it touches lake
water, jaws closing around a fleeing man on the shore
```

### El nacimiento de los reyes divinos — `nacimiento-de-los-reyes-divinos.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Egyptian temple architecture and Nile landscape backdrop with hieroglyphic carvings, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, warm terracotta and lapis blue and soft gold color palette, Isis,
Nephthys and Khnum disguised as traveling musicians assisting at the bedside of Ruddjedet,
three faint golden auras hovering above her as her children are born
```

### El viaje de Khonsu a la lejana Bajtan — `viaje-de-khonsu-a-bakhtan.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Egyptian temple architecture and Nile landscape backdrop with hieroglyphic carvings, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, pale silver-blue and gold and deep navy color palette, the moon
god Khonsu's statue arriving in a grand procession at a foreign palace, a shadowy hostile
spirit recoiling and fleeing from a princess's bedside
```

---

## 6. Mitología Hindú (19 historias)

### ⭐ La creación por el sacrificio de Purusha (cosmogonía) — `creacion-por-el-sacrificio-de-purusha.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved Hindu temple architecture and cosmic/celestial landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, cosmic gold and deep indigo and starlight white color palette, the
cosmic being Purusha, vast and many-headed, being ritually sacrificed by the gods on sacred
ground, the sun, moon and stars bursting forth from his dismembered form
```

### ⭐ El batido del océano de leche (cosmogonía) — `batido-del-oceano-de-leche.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved Hindu temple architecture and cosmic/celestial landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, deep ocean blue and gold and lotus pink color palette, devas and
asuras pulling opposite ends of the great serpent Vasuki wrapped around Mount Mandara,
churning the cosmic ocean of milk as Lakshmi rises from the foam on a lotus, Vishnu as a
giant turtle supporting the mountain beneath
```

### El nacimiento de Ganesha y su cabeza de elefante — `nacimiento-de-ganesha.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved Hindu temple architecture and cosmic/celestial landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, warm red and gold and ash grey color palette, Parvati's
grief-stricken face as Shiva, trident lowered, places a freshly severed elephant's head onto
Ganesha's body to restore him to life
```

### El destierro de Rama al bosque — `destierro-de-rama.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved Hindu temple architecture and cosmic/celestial landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, dawn gold and forest green and royal blue color palette, Rama, Sita
and Lakshmana walking away from the golden palace of Ayodhya into the wilderness at dawn,
the grieving King Dasharatha watching from the palace gates
```

### Hanuman y el salto a Lanka — `hanuman-y-el-salto-a-lanka.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved Hindu temple architecture and cosmic/celestial landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, warm orange-red and deep ocean blue and gold color palette, Hanuman
leaping across a vast ocean toward the island of Lanka, his form growing colossal mid-flight,
mountains and sea monsters visible far below
```

### La caída de Ravana y el regreso de Rama — `caida-de-ravana.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved Hindu temple architecture and cosmic/celestial landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, deep crimson and gold and fire orange color palette, Rama drawing
back a glowing divine arrow aimed at the ten-headed Ravana across a burning battlefield, the
stone bridge to Lanka visible in the background
```

### Indra, Ahalya y la maldición de los mil ojos — `indra-ahalya-y-la-maldicion.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved Hindu temple architecture and cosmic/celestial landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, pale stone grey and soft gold and forest green color palette, a
radiant stone figure of a woman cracking and coming back to life the instant Rama's foot
touches it in a quiet forest clearing
```

### El nacimiento de Krishna y la huida a Gokul — `nacimiento-de-krishna.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved Hindu temple architecture and cosmic/celestial landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, deep stormy blue and gold and cosmic indigo color palette, Vasudeva
wading through a raging flooded river at night carrying the infant Krishna above his head in
a basket, the cosmic serpent Shesha spreading its hood overhead to shield them from the rain
```

### Las hazañas del joven Krishna en Vraja — `hazanas-del-joven-krishna.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved Hindu temple architecture and cosmic/celestial landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, wheat gold and storm grey and peacock blue-green color palette, the
young Krishna lifting the entire Govardhana mountain with one raised finger, sheltering a
crowd of villagers and cattle beneath it as a storm rages around them
```

### La muerte de Kamsa — `muerte-de-kamsa.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved Hindu temple architecture and cosmic/celestial landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, royal gold and deep crimson and iron grey color palette, the young
Krishna gripping the tusks of a charging war elephant sent to kill him in a crowded royal
arena, the tyrant Kamsa watching in horror from his throne
```

### Krishna y el Bhagavad Gita en el campo de batalla — `bhagavad-gita-en-kurukshetra.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved Hindu temple architecture and cosmic/celestial landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, cosmic gold and deep blue and radiant white color palette, Krishna
revealing his cosmic universal form (Vishvarupa) to a stunned Arjuna on a chariot in the
middle of the Kurukshetra battlefield, containing the entire universe within his glowing
silhouette
```

### El juego de dados y la humillación de Draupadi — `juego-de-dados-y-draupadi.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved Hindu temple architecture and cosmic/celestial landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, deep crimson and gold and fire orange color palette, Draupadi
standing defiantly in a royal court as an endless cascade of sari fabric unspools from her,
Dushasana staggering back exhausted, the Pandava brothers watching in fury
```

### La gran guerra de Kurukshetra — `gran-guerra-de-kurukshetra.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved Hindu temple architecture and cosmic/celestial landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, royal blue and bronze and battlefield grey color palette, a vast
battlefield of Kurukshetra filled with warring chariots and armies, Arjuna and Karna locked
in an archery duel at the center beneath a smoke-filled sky
```

### Karna, el héroe trágico del sol — `karna-el-heroe-tragico.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved Hindu temple architecture and cosmic/celestial landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, solar gold and bronze and dawn crimson color palette, Karna kneeling
at dawn in prayer to the sun facing his birth father Surya glowing on the horizon, his golden
armor and earrings gleaming, torn between two loyalties
```

### Durga y la derrota del demonio búfalo Mahishasura — `durga-y-mahishasura.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved Hindu temple architecture and cosmic/celestial landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, crimson red and gold and deep saffron color palette, the ten-armed
goddess Durga astride a roaring lion, plunging her trident into the half-transformed
buffalo-demon Mahishasura at the climax of a nine-day battle
```

### Kali y la furia que no podía detenerse — `kali-y-la-furia-imparable.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved Hindu temple architecture and cosmic/celestial landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, obsidian black and blood red and bone white color palette, the
fierce dark goddess Kali frozen mid-stride with her tongue out in shock, having just stepped
onto the chest of Shiva lying calmly in her destructive path
```

### El castigo de Hiranyakashipu y el avatar Narasimha — `hiranyakashipu-y-narasimha.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved Hindu temple architecture and cosmic/celestial landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, dark bronze and gold and twilight orange color palette, Narasimha,
half-man half-lion, bursting out from a shattered stone pillar to seize the demon king
Hiranyakashipu across his lap in the twilight doorway
```

### Surya, Chandra y el ritmo del cielo — `surya-chandra-y-el-ritmo-del-cielo.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved Hindu temple architecture and cosmic/celestial landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, pale silver-blue and solar gold and deep indigo color palette, the
moon god Chandra waning and fading into darkness in the night sky while his many wives, the
nakshatra stars, plead below, Surya's golden chariot crossing the opposite horizon
```

### Shiva, Kama y las cenizas del deseo — `shiva-kama-y-las-cenizas-del-deseo.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved Hindu temple architecture and cosmic/celestial landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, deep ash grey and fire orange and rose pink color palette, Shiva's
third eye blazing open in sudden fury, a burst of fire consuming the small winged figure of
Kama mid-flight, his bow and flower arrow falling to the ground
```

---

## 7. Mitología Nórdica (20 historias)

### ⭐ La creación del mundo del cuerpo de Ymir (cosmogonía) — `creacion-del-mundo-de-ymir.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved wooden hall architecture and icy/stormy Norse landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, pale ice blue and ash grey and deep black color palette, the
three brothers Odin, Vili and Ve standing over the fallen colossal form of the primordial
giant Ymir, his body already transforming into mountains and seas as the world is formed
from his remains
```

### ⭐ La creación de Ask y Embla (cosmogonía) — `creacion-de-ask-y-embla.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved wooden hall architecture and icy/stormy Norse landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, warm bark brown and pale green and dawn gold color palette, Odin
and his two brothers kneeling on a windswept shore, breathing life into two carved tree
trunks that are becoming the first man and woman
```

### Odín y el pozo de la sabiduría de Mímir — `odin-y-el-pozo-de-mimir.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved wooden hall architecture and icy/stormy Norse landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, deep teal and silver and ancient bronze color palette, Odin
kneeling at the edge of a glowing well beneath the roots of a colossal tree, his own severed
eye sinking into the dark water
```

### Odín y las runas: nueve noches en el árbol del mundo — `odin-y-las-runas.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved wooden hall architecture and icy/stormy Norse landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, deep indigo and silver starlight and ash grey color palette, Odin
hanging upside down, pierced by his own spear, suspended from the vast branches of Yggdrasil
against a starry sky, glowing runic symbols beginning to swirl around him
```

### La construcción de las murallas de Asgard — `murallas-de-asgard.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved wooden hall architecture and icy/stormy Norse landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, stone grey and gold and storm blue color palette, a massive stone
wall around Asgard nearly complete, a giant stonemason directing an enormous horse hauling
boulders, Thor's hammer raised in the background
```

### Cómo Thor obtuvo su martillo Mjölnir — `forja-de-mjolnir.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved wooden hall architecture and icy/stormy Norse landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, molten orange and iron grey and ember red color palette, two
dwarves working at a blazing forge, a fly biting at one dwarf's eyelid as he hammers out a
short-handled hammer glowing with power
```

### El robo del martillo de Thor — `robo-del-martillo-de-thor.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved wooden hall architecture and icy/stormy Norse landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, icy blue and gold and deep crimson color palette, Thor disguised
in a bridal veil and jewelry seated at a giant's wedding feast, Mjölnir being placed onto his
lap by unsuspecting attendants
```

### Los hijos monstruosos de Loki y Angrboda — `hijos-de-loki-y-angrboda.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved wooden hall architecture and icy/stormy Norse landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, dark iron grey and deep red and black color palette, Odin standing
before three monstrous children — a massive wolf pup, a serpent, and a half-pale
half-decayed girl — deciding the fate of each beneath a stormy sky
```

### El encadenamiento de Fenrir y el sacrificio de Týr — `encadenamiento-de-fenrir.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved wooden hall architecture and icy/stormy Norse landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, dark charcoal grey and iron and blood red color palette, the
massive wolf Fenrir straining against the thin magical ribbon Gleipnir, jaws closing down on
Týr's arm as the gods look on in tense silence
```

### La muerte de Baldr — `muerte-de-baldr.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved wooden hall architecture and icy/stormy Norse landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, radiant white and gold and pale grey color palette, Hödr releasing
a mistletoe dart guided by Loki's hand, Baldr collapsing among the gathered gods who had been
throwing harmless objects at him moments before
```

### Hermod cabalga a Hel para rescatar a Baldr — `hermod-cabalga-a-hel.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved wooden hall architecture and icy/stormy Norse landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, deep violet and silver and storm grey color palette, Hermod on the
eight-legged horse Sleipnir crossing a golden bridge over a dark river into the shadowy realm
of Hel, pleading before her throne
```

### El castigo de Loki — `castigo-de-loki.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved wooden hall architecture and icy/stormy Norse landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, emerald green and black and venomous glow color palette, Loki
bound to jagged rocks in a dark cave, a venomous serpent coiled above his face, his wife
Sigyn holding a bowl to catch the dripping poison
```

### Thor y el viaje a Utgard — `thor-en-utgard.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved wooden hall architecture and icy/stormy Norse landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, deep forest green and stone grey and iron color palette, Thor
straining to lift a small grey cat off the ground in a giant's hall, unaware it is the World
Serpent Jörmungandr in disguise, giants watching with hidden amusement
```

### La forja del collar Brísingamen — `collar-brisingamen.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved wooden hall architecture and icy/stormy Norse landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, rose gold and deep red and amber color palette, Freyja asleep in
her chamber as Loki, transformed into a fly, delicately unclasps the glowing Brísingamen
necklace from her neck
```

### Freyr y Gerd: el amor que costó una espada — `freyr-y-gerd.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved wooden hall architecture and icy/stormy Norse landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, radiant silver and pale gold and icy white color palette, Freyr
gazing from Odin's high seat across the nine worlds at the radiant giantess Gerd, whose bare
arms illuminate the sky and sea below
```

### Sigurd y el dragón Fafnir — `sigurd-y-fafnir.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved wooden hall architecture and icy/stormy Norse landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, dull gold and dark green and bronze color palette, Sigurd
thrusting his sword Gram upward from a hidden trench into the soft underbelly of the massive
dragon Fafnir passing overhead
```

### Sigurd, Brynhild y la maldición del oro — `sigurd-brynhild-maldicion-del-oro.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved wooden hall architecture and icy/stormy Norse landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, fiery orange and silver armor and deep red color palette, Sigurd,
disguised by magic as Gunnar, riding through a towering wall of flame toward the sleeping
valkyrie Brynhild on the other side
```

### La muerte de Ragnar Lodbrok en el foso de serpientes — `muerte-de-ragnar-lodbrok.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved wooden hall architecture and icy/stormy Norse landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, weathered brown and iron grey and venomous green color palette,
the aged Viking Ragnar Lodbrok surrounded by venomous serpents in a stone pit, reciting his
final poem with unshaken defiance
```

### ⭐ El Ragnarök: el destino final de los dioses — `ragnarok.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved wooden hall architecture and icy/stormy Norse landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, volcanic red and ash black and electric storm color palette, the
final battle of Ragnarök: Odin charging into the jaws of Fenrir on the burning plain of
Vígrid while Thor battles the coiling World Serpent Jörmungandr nearby, the sky ablaze with
fire and lightning
```

### ⭐ El renacimiento del mundo tras el Ragnarök (cosmogonía) — `renacimiento-tras-ragnarok.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient carved wooden hall architecture and icy/stormy Norse landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, fresh green and dawn gold and pale sky blue color palette, a lush
green new earth rising from calm ocean waters after the fires of Ragnarök have faded, two
young gods walking together across untouched grass toward a golden dawn
```

---

## 8. Mitología Azteca (18 historias)

Colección ampliada en dos tandas: las primeras 10 (ver nota original en
`prompts-imagenes-ia-azteca.md` sobre priorizar contenido bien documentado por sobre forzar
la paridad de 20) más estas 8 adicionales, todas centradas en mitos de dioses ya presentes en
el libro, siempre sobre relatos con buen respaldo en fuentes reales.

### ⭐ Los Cinco Soles (cosmogonía) — `los-cinco-soles.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesoamerican stepped pyramid architecture and volcanic/starry landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, blazing gold and ember orange and deep night blue color palette, the
humble sore-covered god Nanahuatzin leaping into a great sacrificial bonfire at Teotihuacan
while the proud god Tecuciztecatl hesitates behind him, the darkened sky above about to
erupt with a new sun
```

### ⭐ El nacimiento de Huitzilopochtli (teogonía) — `nacimiento-de-huitzilopochtli.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesoamerican stepped pyramid architecture and volcanic/starry landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, turquoise blue and solar gold and blood red color palette, Huitzilopochtli
bursting fully-armed from Coatlicue at the moment of birth, the fire serpent Xiuhcoatl
already decapitating his sister Coyolxauhqui as her four hundred brothers scatter in terror
up the slopes of Coatepec
```

### La fundación de Tenochtitlan (fundación) — `fundacion-de-tenochtitlan.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesoamerican stepped pyramid architecture and volcanic/starry landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, dawn gold and lake blue and nopal green color palette, a group of
weary mexica pilgrims kneeling in awe on a marshy islet as an eagle lands on a nopal cactus
growing from bare rock, sunrise breaking over the lake behind them
```

### La caída de Tollan (tragedia) — `caida-de-tollan.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesoamerican stepped pyramid architecture and volcanic/starry landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, faded gold and shadow black and pulque amber color palette, the
disguised old man Tezcatlipoca offering a cup of pulque to the weakened priest-king Topiltzin
Quetzalcoatl inside a once-glorious Toltec hall now dimmed with shadow
```

### El descenso de Quetzalcoatl al Mictlán (cosmogonía) — `descenso-al-mictlan.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesoamerican stepped pyramid architecture and volcanic/starry landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, bone white and obsidian black and violet underworld glow color palette, Quetzalcoatl
fleeing through a cavernous underworld carrying broken bones, tripping into a hidden pit as
the skeletal Mictlantecuhtli watches from a shadowy throne
```

### El origen del maguey y el pulque (amor) — `origen-del-maguey-y-el-pulque.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesoamerican stepped pyramid architecture and volcanic/starry landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, teal green and starlit violet and earthy brown color palette, the
goddess Mayahuel and Quetzalcoatl intertwined as the branches of a single tree in the night
sky, skeletal tzitzimime star-demons circling closer, about to discover the disguise
```

### ⭐ La leyenda de Ixtaccíhuatl y Popocatépetl (amor) — `ixtaccihuatl-y-popocatepetl.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesoamerican stepped pyramid architecture and volcanic/starry landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, pale ivory and ember orange and twilight violet color palette, the
warrior Popocatépetl kneeling with a burning torch beside the peacefully resting body of
princess Ixtaccíhuatl atop a snow-capped mountain, both silhouettes already beginning to
transform into the shapes of two great volcanoes
```

### La venganza de Copil (tragedia) — `venganza-de-copil.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesoamerican stepped pyramid architecture and volcanic/starry landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, marsh green and blood red and dusk purple color palette, mexica
priests casting a still-beating heart into the reeds of a misty lake at dusk, a single nopal
cactus already sprouting from the water where it lands
```

### El abandono de Malinalxochitl (tragedia) — `abandono-de-malinalxochitl.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesoamerican stepped pyramid architecture and volcanic/starry landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, desert amber and shadow blue and starlight silver color palette, the
sorceress Malinalxochitl asleep alone in a desert camp as the silhouettes of the departing
mexica caravan disappear into the night, scorpions and serpents coiling protectively near her
```

### La princesa desollada de Culhuacán (tragedia) — `princesa-desollada-de-culhuacan.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesoamerican stepped pyramid architecture and volcanic/starry landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, torchlight orange and deep red and shadow black color palette, lord
Achitométl recoiling in horror at a torch-lit ceremony as he recognizes his daughter's face,
the surrounding mexica priests frozen mid-dance
```

### El descubrimiento del maíz (cosmogonía) — `descubrimiento-del-maiz.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesoamerican stepped pyramid architecture and volcanic/starry landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, earthy gold and deep cave brown and maize yellow color palette, a tiny black
ant carrying an oversized golden kernel of maize emerging from a narrow crack in a great
mountain, a red ant guiding beside it, the gathered gods of Tamoanchan waiting in the misty
distance
```

### El encuentro de Mixcóatl y Chimalma (amor) — `encuentro-de-mixcoatl-y-chimalma.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesoamerican stepped pyramid architecture and volcanic/starry landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, starlit indigo and bronze and earthy red color palette, the huntress
Chimalma catching a glowing arrow mid-air with her round shield, four more arrows already
embedded harmlessly around her feet, the star-cloaked hunter god Mixcóatl lowering his bow in
the misty forest ahead
```

### La cacería de los Centzon Mimixcoa (heroica) — `caceria-de-los-centzon-mimixcoa.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesoamerican stepped pyramid architecture and volcanic/starry landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, night-sky indigo and bronze and blood red color palette, the star-cloaked
hunter god Mixcóatl drawing his bow against a fleeing cloud-serpent warrior hiding among dark
boulders, the newborn sun Tonatiuh glowing motionless on the horizon behind him
```

### La huida del joven Nezahualcóyotl (heroica) — `huida-del-joven-nezahualcoyotl.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesoamerican stepped pyramid architecture and volcanic/starry landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, forest green and shadow black and moonlit silver color palette, a young
prince crouched motionless inside the hollow trunk of a great tree, peering through a narrow
crack as armed tepanec warriors pass within arm's reach in the moonlit forest
```

### Tlalocan, el paraíso de Tláloc (otro) — `tlalocan-paraiso-de-tlaloc.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesoamerican stepped pyramid architecture and volcanic/starry landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, lush emerald green and turquoise and golden light color palette, an eternal
spring paradise of blooming trees heavy with fruit and butterflies drifting over endless
fields of maize, Tláloc and Chalchiuhtlicue standing together at its radiant heart
```

### El viaje diario del sol (otro) — `viaje-diario-del-sol.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesoamerican stepped pyramid architecture and volcanic/starry landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, blazing solar gold and deep dusk violet and warm amber color palette, Tonatiuh
carried high across the sky in a radiant disk, a procession of triumphant warriors escorting
him toward the zenith while the pale spectral Cihuateteo wait at the horizon for the descent
```

### La confesión ante Tlazolteotl (otro) — `confesion-ante-tlazolteotl.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesoamerican stepped pyramid architecture and volcanic/starry landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, dusky violet and earthy brown and pale incense-smoke grey color palette, an
elderly penitent kneeling bare-shouldered before a priest of Tlazolteotl inside a
torchlit temple, incense smoke curling upward, the goddess's presence implied in a faint
glowing silhouette behind the altar
```

### La caída final de Tollan bajo Huémac (tragedia) — `caida-final-de-tollan-bajo-huemac.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesoamerican stepped pyramid architecture and volcanic/starry landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, ash grey and dying ember orange and faded gold color palette, the exiled ruler
Huémac standing alone at the mouth of a cave near Chapultepec, the crumbling silhouette of
Tollan's stepped pyramids visible and abandoned in the smoky distance behind him
```

---

## 9. Mitología Sumeria (16 historias)

**Nota:** este libro se ilustra con Gemini, no con Leonardo.ai — no hace falta la configuración
de la sección 1, solo pega cada prompt completo directo en el chat.

### ⭐ La creación desde las aguas de Nammu (cosmogonía) — `creacion-desde-las-aguas-de-nammu.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesopotamian ziggurat architecture and river/desert landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, void black and deep teal and dawn gold color palette, a vast primordial ocean giving birth to the fused mass of sky and earth, the young storm god Enlil straining to force them apart with his bare hands, the first sliver of light breaking through
```

### ⭐ El Enuma Elish: la batalla de Marduk contra Tiamat (cosmogonía) — `enuma-elish-marduk-contra-tiamat.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesopotamian ziggurat architecture and river/desert landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, storm blue and molten gold and abyssal black color palette, Marduk casting a vast net woven of wind over the colossal sea-dragon Tiamat, an arrow already loosed toward her open jaws, the primordial ocean churning violently around them
```

### El diluvio de Ziusudra (tragedia) — `el-diluvio-de-ziusudra.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesopotamian ziggurat architecture and river/desert landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, storm grey and deep flood blue and faint gold color palette, a massive sealed cubic ark tossed on flood waters that cover the entire world, a lone raven flying from an open hatch toward a sliver of dry land on the horizon
```

### El encuentro de Gilgamesh y Enkidu (heroica) — `el-encuentro-de-gilgamesh-y-enkidu.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesopotamian ziggurat architecture and river/desert landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, bronze and dusty gold and deep night blue color palette, Gilgamesh and Enkidu locked in a violent wrestling clash in a narrow doorway during a wedding feast, onlookers scattering, dust rising around their straining bodies
```

### La expedición al Bosque de los Cedros (heroica) — `la-expedicion-al-bosque-de-los-cedros.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesopotamian ziggurat architecture and river/desert landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, deep forest green and bronze and storm grey color palette, Gilgamesh and Enkidu standing over the felled monstrous guardian Humbaba beneath towering ancient cedar trees, eight powerful winds visibly swirling around the clearing
```

### El Toro del Cielo (heroica) — `el-toro-del-cielo.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesopotamian ziggurat architecture and river/desert landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, night blue and burning gold and blood red color palette, Enkidu gripping the horns and tail of a colossal celestial bull while Gilgamesh drives a bronze sword into the back of its neck, the walls of Uruk cracking in the background, Inanna watching furious from the ramparts
```

### La muerte de Enkidu (tragedia) — `la-muerte-de-enkidu.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesopotamian ziggurat architecture and river/desert landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, dim ash grey and fading amber and deep violet color palette, Gilgamesh kneeling beside the dying Enkidu on a modest bed, torchlight flickering, grief and disbelief plain on the king's face
```

### Gilgamesh y la flor de la eterna juventud (tragedia) — `gilgamesh-y-la-flor-de-la-eterna-juventud.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesopotamian ziggurat architecture and river/desert landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, deep sea teal and pale gold and grey color palette, Gilgamesh kneeling by a still pool watching in horror as a serpent slithers away with a glowing thorned plant, its old skin left shed behind on the stones
```

### ⭐ El descenso de Inanna al inframundo (tragedia) — `el-descenso-de-inanna-al-inframundo.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesopotamian ziggurat architecture and river/desert landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, obsidian black and deep violet and faint lapis blue color palette, Inanna passing through the seventh gate of the underworld stripped of her last royal insignia, Ereshkigal watching coldly from a bone-pale throne ahead
```

### La condena de Dumuzi (tragedia) — `la-condena-de-dumuzi.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesopotamian ziggurat architecture and river/desert landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, deep crimson and shadow black and dull gold color palette, gaunt gallu demons dragging Dumuzi from his own throne as Inanna points at him with cold fury, Geshtinanna rushing in from the doorway too late to stop it
```

### Inanna y los Me de la civilización (otro) — `inanna-y-los-me-de-la-civilizacion.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesopotamian ziggurat architecture and river/desert landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, warm amber and lapis blue and gold color palette, Inanna loading glowing sacred tablets and vessels onto the Boat of Heaven while a slumped, deeply drunk Enki toasts her from his banquet table in Eridu
```

### Enki y Ninhursag en Dilmun (amor) — `enki-y-ninhursag-en-dilmun.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesopotamian ziggurat architecture and river/desert landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, lush emerald green and soft gold and pale blue color palette, a lush primordial paradise garden where eight strange new plants sprout from the earth, a weakened Enki lying among them as Ninhursag approaches with healing hands outstretched
```

### El mito de Anzu (heroica) — `el-mito-de-anzu.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesopotamian ziggurat architecture and river/desert landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, storm grey and electric gold and deep violet color palette, Ninurta riding the south wind against the colossal storm-bird Anzu on a jagged mountaintop, glowing tablets clutched in the monster's talons, arrows dissolving mid-air around them
```

### Etana y el águila (heroica) — `etana-y-el-aguila.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesopotamian ziggurat architecture and river/desert landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, sky blue and warm gold and cloud white color palette, King Etana clutching the neck of a great eagle as they climb high above a shrinking earth, clouds streaming past below them
```

### Adapa y el pan de la vida (tragedia) — `adapa-y-el-pan-de-la-vida.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesopotamian ziggurat architecture and river/desert landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, celestial gold and pale cloud white and deep blue color palette, Adapa standing before the enthroned sky god Anu, waving away a offered plate of glowing bread and a cup of shimmering water, a look of dawning doubt on his face
```

### Nergal y Ereshkigal (amor) — `nergal-y-ereshkigal.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Mesopotamian ziggurat architecture and river/desert landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, obsidian black and molten red and deep violet color palette, Nergal standing over a fallen Ereshkigal with an axe raised, the blow frozen mid-swing as their eyes meet, fourteen demons watching motionless at the throne room's edge
```

---

## 10. Mitología Maya (18 historias)

**Nota:** este libro se ilustra con Gemini, no con Leonardo.ai — no hace falta la configuración
de la sección 1, solo pega cada prompt completo directo en el chat.

### ⭐ La creación del mundo (cosmogonía) — `la-creacion-del-mundo.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic composition, ancient Maya jungle and stepped pyramid landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, void black and jade teal and dawn gold color palette, mountains and forested land rising instantly from a calm primordial sea as three divine presences speak the word "earth" into the darkness, mist parting to reveal the first shoreline
```

### Los hombres de barro y madera (cosmogonía) — `los-hombres-de-barro-y-madera.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Maya jungle and stepped pyramid landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, storm grey and dull ember red and obsidian black color palette, wooden humanoid figures fleeing in panic as a monstrous eagle tears at their eyes and a great jaguar lunges from the shadows, their own household tools and animals turning against them, a flood rising in the background
```

### ⭐ La derrota de Vucub-Caquix (heroica) — `la-derrota-de-vucub-caquix.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Maya jungle and stepped pyramid landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, garish jeweled gold and jade green and deep red color palette, two young hero twins disguised as elderly healers prying jeweled teeth from the jaws of a monstrous vain macaw demon perched in a fruit tree, its silver eyes dimming as its false splendor is stripped away
```

### La derrota de Zipacná (heroica) — `la-derrota-de-zipacna.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Maya jungle and stepped pyramid landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, stone grey and earthy brown and jade green color palette, a colossal muscular giant with skin textured like cracked stone and packed earth, wearing a crude necklace of large uncut jade stones and animal teeth and a rough woven loincloth, crushed beneath an entire artificial mountain collapsing on top of him at the bottom of a ravine, two young hero twins clad in full jaguar-pelt warrior suits with jaguar-head hoods framing their faces and red-orange ritual paint on their cheeks watching triumphantly from the ridge above
```

### La derrota de Cabracán (heroica) — `la-derrota-de-cabrakan.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Maya jungle and stepped pyramid landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, dusty ochre and stone grey and dull gold color palette, a mighty colossal muscular giant with skin textured like cracked stone and packed earth, wearing a crude necklace of large uncut jade stones and animal teeth and a rough woven loincloth, collapsing weakly to his knees mid-stride, cracked earth radiating around him, two young hero twins clad in full jaguar-pelt warrior suits with jaguar-head hoods framing their faces and red-orange ritual paint on their cheeks binding his arms as he loses his strength
```

### La muerte de Hun-Hunahpú y Vucub-Hunahpú (tragedia) — `la-muerte-de-hun-hunahpu-y-vucub-hunahpu.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Maya jungle and stepped pyramid landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, obsidian black and bone white and deep violet color palette, a severed head hanging among round fruit in a barren tree that has burst into bloom overnight, the shadowy lords of the underworld watching from a stone throne in the background
```

### Ixquic y el árbol de las calabazas (otro) — `ixquic-y-el-arbol-de-las-calabazas.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic composition, ancient Maya jungle and stepped pyramid landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, deep violet dusk and pale jade and soft gold color palette, a young woman reaching toward a skull hidden among calabash fruit as it speaks and spits into her open palm, owl messengers watching silently from a nearby branch
```

### El nacimiento de los gemelos y los hermanos simios (heroica) — `el-nacimiento-de-los-gemelos-y-los-hermanos-simios.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Maya jungle and stepped pyramid landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm gold and jade green and deep brown color palette, a low leafy tree branch stretching horizontally across the middle of the frame with two elder brothers clinging to it at mid-height, their bodies already transforming into spider monkeys, two young hero twins standing on the ground looking up at them, their grandmother laughing beside them, the tree's upper branches and roots left out of frame so the group stays centered in a tight horizontal band
```

### La convocatoria a Xibalbá (heroica) — `la-convocatoria-a-xibalba.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Maya jungle and stepped pyramid landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, warm gold and deep jungle green and dusk violet color palette, two young hero twins playing a fierce ballgame on a stone court as owl messengers descend from a dark crack opening in the earth beside them, their grandmother watching anxiously from a doorway
```

### Las casas de tormento (heroica) — `las-casas-de-tormento.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic chiaroscuro lighting, dynamic multi-figure composition, a dark low-ceilinged stone chamber interior, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, obsidian black and deep crimson and bone white color palette, a monstrous bat-headed guardian lunging low and sideways at chest height toward two hero twins crouched at ground level partly hidden inside hollow blowguns lying on the stone floor, one twin's severed head resting nearby on the ground, the chamber's ceiling and depth left out of frame so the action stays centered in a tight horizontal band
```

### ⭐ La derrota final de los señores de Xibalbá (heroica) — `la-derrota-final-de-los-senores-de-xibalba.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic chiaroscuro lighting, dynamic multi-figure composition, a dark low stone throne hall interior, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, obsidian black and molten gold and deep violet color palette, two disguised hero twins performing a miraculous sacrifice-and-revival trick close to the ground, one twin frozen mid-strike over a kneeling supreme lord who has just requested the same fate, a tight cluster of a few astonished underworld lords seated low nearby watching, the hall's tall walls and ceiling left out of frame so the group stays centered in a tight horizontal band
```

### Los gemelos se convierten en el Sol y la Luna (cosmogonía) — `los-gemelos-se-convierten-en-el-sol-y-la-luna.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic composition, ancient Maya jungle and stepped pyramid landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, blazing gold and silver moonlight and deep indigo color palette, two hero twins ascending together from a dark underworld crevice into an open sky, one already transforming into a blazing sun and the other into a glowing moon, tiny star-lights gathering around them
```

### ⭐ La creación de los hombres de maíz (cosmogonía) — `la-creacion-de-los-hombres-de-maiz.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Maya jungle and stepped pyramid landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, warm maize gold and jade green and soft dawn light color palette, an elderly goddess grinding white and yellow maize into fine dough as four newly formed human figures rise from the paste, animals watching from the edge of a hidden split mountain in the background
```

### La niebla sobre los ojos de los primeros hombres (cosmogonía) — `la-niebla-sobre-los-ojos-de-los-primeros-hombres.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Maya jungle and stepped pyramid landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, pale mist grey and warm maize gold and soft indigo color palette, four maize-born men staring in awe at a vast horizon stretching in every direction, a divine breath of thick mist rolling toward their wide open eyes to dim their unlimited sight
```

### Kukulkán y la serpiente de luz (fundación) — `kukulkan-y-la-serpiente-de-luz.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic composition, ancient Maya jungle and stepped pyramid landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, emerald green and warm gold and deep violet dusk color palette, a great stepped pyramid at dusk, its stairway shadow forming the unmistakable coiling body of a descending feathered serpent meeting a carved stone head at the base, worshippers gathered small and reverent below
```

### Chaac y el origen de la lluvia (otro) — `chaac-y-el-origen-de-la-lluvia.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic composition, ancient Maya jungle and stepped pyramid landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, storm grey and electric blue and jade green color palette, four identical rain gods in red, white, black and yellow regalia striking heavy storm clouds with stone axes from the four corners of the sky, rain beginning to fall over a parched maize field below
```

### ⭐ La leyenda de Sac-Nicté y Canek (amor) — `la-leyenda-de-sac-nicte-y-canek.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Maya jungle and stepped pyramid landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, warm ivory and jade green and deep crimson color palette, a young prince pulling his bride away from a wedding altar mid-ceremony, the humiliated groom rising in fury as startled guests scatter around the stone temple courtyard
```

### El origen de la Xtabay (tragedia) — `el-origen-de-la-xtabay.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), all key elements kept within a low horizontal band across the vertical center of the frame, nothing important near the very top or bottom edge, dramatic chiaroscuro lighting, dynamic composition, a low ground-level view at the base of a great ceibo tree trunk, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, pale moonlight silver and jade green and deep violet color palette, two matching low graves side by side at ground level, a fragrant white flower blooming from one and a beautiful scentless cactus flower from the other, a pale seductive figure kneeling low beside the second grave as if just emerging from the mist rather than floating above it, the tree's tall trunk and canopy left out of frame so the scene stays centered in a tight horizontal band
```

---

## 11. Mitología Japonesa (18 historias)

**Nota:** este libro se ilustra con Gemini, no con Leonardo.ai — no hace falta la configuración
de la sección 1, solo pega cada prompt completo directo en el chat. Todas las escenas ya piden
`aspect ratio approximately 21:9` y la acción contenida en una franja horizontal baja desde el
inicio (ver el aviso sobre el recorte del banner más arriba) — no hace falta corregirlas después.

### ⭐ La creación del mundo (cosmogonía) — `la-creacion-del-mundo-sintoista.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic celestial lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, deep ocean teal and celestial gold and soft white color palette, two primordial deities standing on a floating bridge dipping a long jeweled spear into a churning primordial sea, glowing droplets falling from its tip solidifying into the first island below
```

### La muerte de Izanami y el descenso a Yomi (tragedia) — `la-muerte-de-izanami-y-el-descenso-a-yomi.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic dark chiaroscuro lighting, dynamic composition, a shadowy underworld cavern passage, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, obsidian black and sickly grey and faint ember orange color palette, a horrified male deity fleeing with a small burning torch as a decaying female figure shrieks in fury behind him, a massive boulder ready to seal the passage between them
```

### Susanoo y la serpiente Yamata-no-Orochi (heroica) — `susanoo-y-la-serpiente-yamata-no-orochi.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic tense lighting, dynamic multi-figure composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, serpent green and sake amber and blood red color palette, a storm god poised with a raised sword beside eight great sake vats where the drooping drunken heads of a colossal eight-headed serpent lie slumped along a low fence line
```

### La cueva celestial de Amaterasu (otro) — `la-cueva-celestial-de-amaterasu.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic dark-to-golden lighting, dynamic multi-figure composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, obsidian black and blazing gold and warm crimson color palette, a goddess peering out through a narrow gap in a sealed cave entrance toward her own dazzling reflection in a hanging bronze mirror, a dancing female figure and a crowd of laughing deities gathered low before the cave mouth
```

### ⭐ El descenso de Ninigi a la tierra (fundación) — `el-descenso-de-ninigi-a-la-tierra.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic golden celestial lighting, dynamic multi-figure composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm gold and soft cloud white and deep green color palette, a young celestial prince and his retinue stepping down through parting clouds onto a mountain peak, guided by a red-faced long-nosed deity pointing the way forward
```

### Konohanasakuya-hime y la prueba del fuego (amor) — `konohanasakuya-hime-y-la-prueba-del-fuego.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic firelit lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, blazing orange fire and cherry blossom pink and ash grey color palette, a serene pregnant goddess seated calm and unburned at the center of a small wooden hut fully engulfed in flame, a stunned prince watching helplessly from just outside
```

### Umisachihiko y Yamasachihiko (heroica) — `umisachihiko-y-yamasachihiko.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic underwater-surface lighting, dynamic multi-figure composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, coral red and ocean teal and warm gold color palette, a hunter prince kneeling before a dragon king who presses a recovered fishhook and two glowing tide jewels into his hands, a coral palace wall low behind them
```

### El nacimiento del emperador Jimmu (fundación) — `el-nacimiento-del-emperador-jimmu.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic golden dawn lighting, dynamic composition, a misty mountain pass, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm gold and deep forest green and bronze color palette, a young armored prince following a three-legged crow gliding low just ahead of him through a narrow mountain trail, a hidden valley opening beyond
```

### ⭐ Urashima Taro y el palacio del dragón (tragedia) — `urashima-taro-y-el-palacio-del-dragon.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic bittersweet lighting, dynamic composition, a quiet beach at dusk, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm coral and pale smoke white and deep sunset orange color palette, an old fisherman opening a small lacquered box on a beach, a burst of pale smoke rolling low across the sand as his hands and face age instantly before his own eyes
```

### Momotarō y la conquista de la isla de los oni (heroica) — `momotaro-y-la-conquista-de-la-isla-de-los-oni.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic battle lighting, dynamic multi-figure composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, peach pink and iron grey and blood red color palette, a determined young hero and his dog, monkey and pheasant companions storming through a breached iron gate as red demons scatter before them
```

### Kintarō, el niño dorado de las montañas (heroica) — `kintaro-el-nino-dorado-de-las-montanas.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, warm forest lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, forest green and bright red and warm brown color palette, a stocky red-bibbed boy wrestling a large bear to the ground while a monkey and a mountain witch look on, low forest ferns filling the foreground
```

### Issun-bōshi, el guerrero de una pulgada (heroica) — `issun-boshi-el-guerrero-de-una-pulgada.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic dynamic lighting, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, demon red and needle silver and warm rice cream color palette, a tiny warrior leaping from the gaping mouth of a recoiling giant demon, a small mallet tumbling from the demon's grasp onto the ground below
```

### Shuten-dōji, el señor demonio del monte Ōe (heroica) — `shuten-doji-el-senor-demonio-del-monte-oe.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic torchlit lighting, dynamic multi-figure composition, a low fortress hall interior, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, blood red and torchlight orange and iron black color palette, disguised warrior monks raising cups of drugged sake toward a massive slumping demon lord and his collapsing drunken retainers around a low banquet table
```

### Watanabe no Tsuna y el brazo del oni en Rashōmon (heroica) — `watanabe-no-tsuna-y-el-brazo-del-oni-en-rashomon.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic dark nocturnal lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, obsidian black and steel grey and deep crimson color palette, a samurai gripping a drawn sword low beside a severed clawed demon arm on the ground, the dark base of the Rashōmon gate looming just behind him
```

### ⭐ Tamamo-no-Mae, la zorra de nueve colas (tragedia) — `tamamo-no-mae-la-zorra-de-nueve-colas.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic opulent lighting, dynamic composition, a low imperial court hall, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, golden fox fur and deep imperial crimson and pale ivory color palette, a beautiful court lady's nine fox tails spilling into view low behind her painted screen as a startled onmyōji astrologer points in sudden revelation
```

### Abe no Seimei, el hijo de la zorra (otro) — `abe-no-seimei-el-hijo-de-la-zorra.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic soft melancholic lighting, dynamic composition, a low traditional room interior, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, soft fox white and warm lantern amber and pale indigo color palette, a young boy staring in shock as his mother's form shifts into a pale fox low beside a garden screen, a farewell poem faintly visible as brushstrokes on the panel behind her
```

### Namazu y los terremotos bajo el archipiélago (otro) — `namazu-y-los-terremotos-bajo-el-archipielago.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic subterranean lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, murky brown and stone grey and warrior bronze color palette, a colossal catfish coiled beneath a cracking landscape, a small stone deity pressing a single sacred stone firmly down where its head meets its tail
```

### La emperatriz Jingū y la conquista prometida por los dioses (fundación) — `la-emperatriz-jingu-y-la-conquista-prometida.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic naval battle lighting, dynamic multi-figure composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, deep ocean blue and warrior bronze and gold color palette, an armored pregnant empress standing at the prow of her flagship holding two glowing tide jewels aloft, a low fleet of ships crossing a suddenly receding tideline toward a distant shore
```

---

## 12. Mitología China (18 historias)

**Nota:** este libro se ilustra con Gemini, no con Leonardo.ai — no hace falta la configuración
de la sección 1, solo pega cada prompt completo directo en el chat. Todas las escenas ya piden
`aspect ratio approximately 21:9` y la acción contenida en una franja horizontal baja desde el
inicio (ver el aviso sobre el recorte del banner más arriba).

### ⭐ Pangu y la creación del mundo (cosmogonía) — `pangu-y-la-creacion-del-mundo.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic cosmic lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, cosmic gold and deep earth brown and soft void black color palette, a colossal giant with arms and legs braced low between a rising golden sky and a settling dark earth, fragments of a shattered cosmic egg shell scattered around his feet
```

### Nüwa crea a la humanidad (cosmogonía) — `nuwa-crea-a-la-humanidad.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic warm lighting, dynamic composition, a low riverbank, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm amber clay and soft gold and jade green color palette, a serpent-tailed goddess kneeling low at a riverbank shaping small clay figures that rise and walk on their own, a trailing cord dripping mud droplets that become more figures in the distance
```

### Gonggong y la inclinación del cielo (tragedia) — `gonggong-y-la-inclinacion-del-cielo.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic catastrophic lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, storm grey and flood blue and molten crack orange color palette, a furious serpent-bodied god ramming his head low into the base of a great stone pillar, the pillar cracking and floodwater and fire beginning to spill through a widening rift in the sky above
```

### Fuxi y los ocho trigramas (fundación) — `fuxi-y-los-ocho-trigramas.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic contemplative lighting, dynamic composition, a low riverbank, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm amber gold and deep river blue and soft jade color palette, a serpent-tailed sage kneeling low studying glowing trigram patterns on the shell of a great tortoise emerging from the water beside him
```

### ⭐ Houyi derriba nueve soles (heroica) — `houyi-derriba-nueve-soles.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic blazing lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, blazing gold and deep crimson and warm bronze color palette, an archer drawing his bow low against a cracked parched earth as several golden crow-suns tumble from a blazing sky, one last sun remaining steady above
```

### Chang'e vuela a la luna (tragedia) — `chang-e-vuela-a-la-luna.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic bittersweet twilight lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, pale moonlight silver and warm dusk orange and soft cloud white color palette, a woman rising weightlessly just above a low rooftop, her sleeves trailing, reaching one last time toward a husband below with an empty vial at his feet, a pale moon glowing low on the horizon behind her
```

### El diluvio domado por Yu el Grande (heroica) — `el-diluvio-domado-por-yu-el-grande.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic determined lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, earthy brown and river blue and warm gold color palette, an exhausted man digging a canal low through a muddy landscape, floodwater draining away in a controlled channel toward a distant sea, his own house passing unentered in the low background
```

### El Emperador Amarillo contra Chiyou (heroica) — `el-emperador-amarillo-contra-chiyou.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic battle lighting, dynamic multi-figure composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, bronze and blood red and thick grey fog color palette, an armored sovereign beside a small south-pointing chariot leading troops low through thinning battle fog toward a horned warlord collapsing under a final blow
```

### El nacimiento de Nezha y su desafío al Rey Dragón (heroica) — `el-nacimiento-de-nezha-y-su-desafio-al-rey-dragon.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic tense lighting, dynamic composition, a low shoreline, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, blazing red and deep ocean teal and warm gold color palette, a small fierce child warrior standing low at the water's edge facing down a rising dragon prince, red silk ribbons trailing across the sand between them
```

### Sun Wukong y el caos en el cielo (heroica) — `sun-wukong-y-el-caos-en-el-cielo.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic chaotic lighting, dynamic multi-figure composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm gold and jade green and deep bronze color palette, a golden-furred monkey warrior standing triumphant low among overturned peach trees and scattered celestial guards, a three-eyed god approaching from one side with a spear lowered
```

### Jing Wei rellena el mar (tragedia) — `jing-wei-rellena-el-mar.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic quiet melancholic lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, deep ocean blue and warm earth brown and soft white color palette, a small determined bird gliding low just above churning waves, a tiny pebble falling from its beak into the vast water below
```

### Kuafu persigue al sol (tragedia) — `kuafu-persigue-al-sol.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic scorching lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, blazing orange and cracked earth brown and dusty gold color palette, an exhausted giant collapsing low onto cracked dry ground, his wooden staff falling from his hand and already sprouting into a low line of peach trees beside him
```

### ⭐ La leyenda de la serpiente blanca (amor) — `la-leyenda-de-la-serpiente-blanca.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic tense lighting, dynamic composition, a low lakeside willow grove, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, pure white and soft jade green and pale silver color palette, a woman in white robes shifting mid-transformation into a pale serpent low beside a startled husband, a stern monk watching from a nearby pagoda base
```

### La tejedora y el pastor de bueyes (amor) — `la-tejedora-y-el-pastor-de-bueyes.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic starlit lighting, dynamic multi-figure composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, silver starlight and soft cloud white and warm gold color palette, two lovers reaching toward each other low across a shimmering river of stars, a line of magpies forming a living bridge just beneath their outstretched hands
```

### Meng Jiangnü y la Gran Muralla (tragedia) — `meng-jiangnu-y-la-gran-muralla.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic sorrowful lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, stone grey and deep sorrow blue and pale ivory color palette, a grieving woman kneeling low before a freshly collapsed section of a massive stone wall, pale bones just visible among the low rubble
```

### Xu Fu y la búsqueda del elixir de la inmortalidad (otro) — `xu-fu-y-la-busqueda-del-elixir-de-la-inmortalidad.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic seafaring lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, deep ocean teal and warm ship wood brown and pale misty gold color palette, a large wooden fleet sailing low across calm water toward three faint mountain silhouettes rising from mist on the horizon
```

### Dong Yong y la hada tejedora (amor) — `dong-yong-y-la-hada-tejedora.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic warm domestic lighting, dynamic composition, a low humble cottage interior, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm earthy brown and soft silk white and pale gold color palette, a celestial weaver working a loom at impossible speed low beside a humble farmer, a finished bolt of shimmering silk already piling at their feet
```

### Bao Zheng, el juez que juzga a vivos y muertos (otro) — `bao-zheng-el-juez-que-juzga-a-vivos-y-muertos.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic severe lighting, dynamic composition, a low judgment hall, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, obsidian black and deep crimson and pale moon white color palette, a stern magistrate with a crescent mark on his brow seated low at a judgment table, a translucent spirit and a kneeling living petitioner both awaiting his verdict on opposite sides
```

---

## 13. Mitología Celta (18 historias)

**Nota:** este libro se ilustra con Gemini, no con Leonardo.ai — no hace falta la configuración
de la sección 1, solo pega cada prompt completo directo en el chat. Todas las escenas ya piden
`aspect ratio approximately 21:9` y la acción contenida en una franja horizontal baja desde el
inicio (ver el aviso sobre el recorte del banner más arriba).

### ⭐ La llegada de los Tuatha Dé Danann (fundación) — `la-llegada-de-los-tuatha-de-danann.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic misty dawn lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, misty teal and warm gold and deep green color palette, a line of radiant robed figures emerging low out of a rolling bank of mist onto green hills, a burning ship silhouette smoldering faintly behind them on a distant shore
```

### La primera batalla de Mag Tuired (heroica) — `la-primera-batalla-de-mag-tuired.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic battle lighting, dynamic multi-figure composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, bronze and storm grey and blood red color palette, two armies of Iron Age Celtic warriors clashing low across a misty plain, NOT Greek hoplites, NOT Roman legionaries, no Corinthian helmets, no phalanx formations, long flowing hair and mustaches, bronze torcs at their necks, flowing cloaks, round shields decorated with Celtic spiral and knotwork patterns, leather and bronze Celtic armor, a purple-cloaked silver-armed king in ornate bronze and silver Celtic armor staggering back as his sword arm falls, a rival warrior standing over him with a bloodied blade
```

### El nacimiento de Lugh (cosmogonía) — `el-nacimiento-de-lugh.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic moonlit lighting, dynamic composition, a low rocky shoreline, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, deep ocean navy and pale moon silver and warm gold color palette, a small infant wrapped in cloth drifting low on dark waves toward an outstretched hand reaching from a boat, a distant glass tower fading into mist on the horizon behind
```

### ⭐ La segunda batalla de Mag Tuired (heroica) — `la-segunda-batalla-de-mag-tuired.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic explosive lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, radiant gold and storm grey and deadly amber color palette, a young warrior in golden bronze armor and a flowing blue cape slinging a stone low toward a collapsing one-eyed giant in dark jagged grey-green armor whose massive eyelid tears open, a beam of light punching backward through the giant's own retreating army in the distance
```

### La forja del brazo de plata de Nuada (otro) — `la-forja-del-brazo-de-plata-de-nuada.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic forge lighting, dynamic composition, a low smith's forge, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, forge orange and polished silver and deep bronze color palette, a grey-bearded smith in a leather apron hammering a glowing silver arm low over an anvil, a wounded king watching with his sleeve pinned empty at his side, sparks scattering across the low foreground
```

### El cortejo de Étaín (amor) — `el-cortejo-de-etain.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic golden hall lighting, dynamic composition, a low great hall interior, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm gold and iridescent butterfly blue and pale ivory color palette, a noble figure reaching low across a chessboard toward one identical woman among fifty seated in a row, a pale butterfly motif glowing faintly above her chosen hand
```

### El nacimiento de Cú Chulainn (fundación) — `el-nacimiento-de-cu-chulainn.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic mystical dawn lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm gold and misty grey and pale green color palette, a lone house dissolving into mist low on a hillside at dawn, a woman kneeling beside an abandoned infant with a mare and two foals standing nearby
```

### Cú Chulainn y el perro de Culann (heroica) — `cu-chulainn-y-el-perro-de-culann.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic tense twilight lighting, dynamic composition, a low fortress gate, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, dusk purple and bronze and pale moon white color palette, a small determined boy standing his ground low before an enormous lunging hound, a heavy wooden gate and torches glowing faintly behind him
```

### ⭐ La razzia de las vacas de Cooley (heroica) — `la-razzia-de-las-vacas-de-cooley.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic battle-fury lighting, dynamic multi-figure composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, blood bronze and storm grey and pale battle-light color palette, a lone warrior with wild glowing hair and a crimson battle-aura mid-transformation standing alone at a river ford low blocking a vast invading army, a great brown bull silhouette faintly visible on a distant hill behind the enemy ranks
```

### La muerte de Cú Chulainn (tragedia) — `la-muerte-de-cu-chulainn.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic somber dusk lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, dusk grey and dried blood red and pale moon white color palette, a mortally wounded warrior in bronze Celtic armor bound upright low against a standing stone with his own belt, a single raven landing silently on his shoulder as distant enemies watch from afar
```

### ⭐ Deirdre de las Tristezas (tragedia) — `deirdre-de-las-tristezas.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic sorrowful twilight lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, blood red and snow white and raven black color palette, a raven-haired grieving woman in a red and white gown kneeling low over a fallen warrior in a green fur-lined cloak at a fortress gate, armed men lowering their weapons around her in the fading light, a raven perched on the wall above
```

### Fionn mac Cumhaill y el salmón del conocimiento (heroica) — `fionn-mac-cumhaill-y-el-salmon-del-conocimiento.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic firelit riverside lighting, dynamic composition, a low riverside campfire, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, forge orange and river silver and deep green color palette, a young man pressing a burned thumb to his lips low beside a roasting salmon over a campfire, an old druid watching in surprise from across the flames
```

### Diarmuid y Gráinne (amor) — `diarmuid-y-grainne.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic torchlit night lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm torchlight gold and forest green and deep night blue color palette, a leather-armored warrior with a distinctive mark upon his forehead and a purple-and-gold robed noblewoman with a fur-trimmed green cloak fleeing low together into a dark forest on horseback, torches and armed warriors gathering in confusion at a banquet hall entrance behind them
```

### Oisín y la tierra de la eterna juventud (otro) — `oisin-y-la-tierra-de-la-eterna-juventud.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic bittersweet golden lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm gold and misty white and pale grey color palette, a rider on a white horse falling low toward the ground as a broken saddle strap trails behind, his youthful form already beginning to wither with age mid-fall
```

### La navegación de Bran mac Febail (otro) — `la-navegacion-de-bran-mac-febail.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic misty seafaring lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, sea green and misty silver and deep navy color palette, a small worn wicker currach boat carrying a grey-cloaked traveler holding a blossoming silver branch, gliding low across calm waves beside a ghostly sea-green robed figure with flowing wind-swept hair galloping a pale white horse directly atop the water's surface, a veiled misty horizon ahead
```

### Pwyll y Rhiannon (amor) — `pwyll-y-rhiannon.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic golden dusk lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, pale gold and misty lavender and soft white color palette, a green-cloaked mounted man reining in his horse low behind a golden-robed woman on an unhurried pale mare who can never be overtaken, small birds trailing behind her in flight, an ancient burial mound rising gently in the misty background
```

### Branwen, hija de Llŷr (tragedia) — `branwen-hija-de-llyr.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic overcast sorrowful lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, muted grey and pale gold and deep sea blue color palette, a dark-haired grieving woman in a muted grey-green robe releasing a small starling low from her open hand at a rugged coastline, warships massing faintly on the grey horizon behind her
```

### Culhwch y Olwen (heroica) — `culhwch-y-olwen.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic adventurous lighting, dynamic multi-figure composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm gold and forest green and bronze color palette, a young warrior and a small band of companions closing in low on a massive tusked boar fleeing through shallow water, a comb and shears glinting faintly among its bristling back
```

---

## 14. Mitología Mapuche (18 historias)

**Nota:** este libro se ilustra con Gemini, no con Leonardo.ai — no hace falta la configuración
de la sección 1, solo pega cada prompt completo directo en el chat. Todas las escenas ya piden
`aspect ratio approximately 21:9` y la acción contenida en una franja horizontal baja desde el
inicio (ver el aviso sobre el recorte del banner más arriba).

### ⭐ La lucha de Trentren Vilu y Caicai Vilu (cosmogonía) — `la-lucha-de-trentren-vilu-y-caicai-vilu.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic stormy lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, golden earth and dark storm teal and pale foam white color palette, a golden-green serpent coiling low to lift a ridge of hills as a dark serpent churns rising floodwater from the opposite side, tiny figures climbing to safety on the rising slope between them
```

### El origen de Ngenechen y los cuatro rostros (cosmogonía) — `el-origen-de-ngenechen-y-los-cuatro-rostros.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic radiant dawn lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, radiant gold and pure white and soft earth brown color palette, four translucent figures (an elder man, an elder woman, a young man, a young woman) standing low in a line over a newly formed valley, their forms merging into a single luminous presence at the center
```

### Antü y Kuyen, el sol y la luna (otro) — `antu-y-kuyen-el-sol-y-la-luna.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic dawn-to-dusk lighting split across the frame, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm solar gold and pale lunar silver and deep twilight blue color palette, a radiant sun figure and a pale moon figure passing low over misty hills at the horizon line where day meets night
```

### El nacimiento de los pillanes (cosmogonía) — `el-nacimiento-de-los-pillanes.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic volcanic lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, molten orange and volcanic black and deep ember red color palette, a great ember-cracked figure low along a mountain range pouring glowing light into a line of distant smoking volcanic peaks
```

### Meulen contra el wekufe (otro) — `meulen-contra-el-wekufe.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic dawn whirlwind lighting, dynamic composition, a low traditional ruka dwelling, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, pale dust gold and shadow black and soft dawn white color palette, a swirling whirlwind of golden dust sweeping low across a small dwelling, a dissolving shadowy shape being scattered at its edge
```

### La ira del Cherufe (tragedia) — `la-ira-del-cherufe.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic tense volcanic lighting, dynamic multi-figure composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, molten orange and deep earth brown and pale offering gold color palette, a small community climbing low along a volcanic ridge carrying baskets of fruit and silverwork toward a smoking crater, tense faces lit by distant glowing light
```

### La llegada del Piuchén (otro) — `la-llegada-del-piuchen.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic tense night lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, midnight black and sickly pale green and moon silver color palette, a winged serpent silhouette gliding low across a moonlit rural landscape, a small dwelling with a faint protective glow visible below its path
```

### El origen del Chonchón (otro) — `el-origen-del-chonchon.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic eerie night lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, midnight black and pale moon silver and sickly grey color palette, a severed head with enlarged ear-wings flying low back toward a forest clearing, its hidden headless body already missing from its resting place below
```

### ⭐ La victoria de Pelantaro en Curalaba (heroica) — `la-victoria-de-pelantaro-en-curalaba.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic dawn battle lighting, dynamic multi-figure composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, dawn gold and deep bronze and storm grey color palette, warriors surging low out of the misty treeline into a sleeping Spanish encampment at dawn, a distant line of colonial forts silhouetted and beginning to fall on the horizon
```

### El cautiverio y la venganza de Lautaro (heroica) — `el-cautiverio-y-la-venganza-de-lautaro.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic tense lighting, dynamic composition, a low colonial encampment, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, earthy bronze and deep green and dusty gold color palette, a young captive quietly observing mounted soldiers drilling low across a colonial camp, his watchful eyes the clear focus amid the routine activity around him
```

### La muerte de Pedro de Valdivia en Tucapel (heroica) — `la-muerte-de-pedro-de-valdivia-en-tucapel.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic exhausting battle lighting, dynamic multi-figure composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, blood bronze and storm grey and dusty gold color palette, successive waves of warriors emerging low from the treeline against an exhausted retreating column of soldiers, a fallen banner trampled in the foreground dust
```

### La prueba del tronco y la elección de Caupolicán (heroica) — `la-prueba-del-tronco-y-la-eleccion-de-caupolican.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic strained daylight lighting, dynamic multi-figure composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, earthy bronze and warm gold and muted green color palette, a lone straining warrior bearing a massive tree trunk low across his shoulders before a watching crowd, an elder gesturing approval from beside him
```

### El sacrificio de Galvarino (tragedia) — `el-sacrificio-de-galvarino.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic defiant lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, deep bronze and blood red and storm grey color palette, a warrior with daggers bound to both forearm stumps striding low back onto a battlefield, fellow warriors turning to watch him return with clear astonishment
```

### La furia de Fresia (tragedia) — `la-furia-de-fresia.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic tense torchlit lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, deep crimson and bronze and storm grey color palette, a fierce woman thrusting a small child low into the arms of a bound captive warrior, onlookers frozen in shock at the edges of the torchlit scene
```

### ⭐ La última noche de Lautaro y Guacolda (tragedia) — `la-ultima-noche-de-lautaro-y-guacolda.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic somber dusk lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, dusk purple and dying firelight orange and deep forest green color palette, a couple sitting quietly beside a dying campfire low in a war camp, distant torches of an approaching ambush barely visible through the trees behind them
```

### Janequeo, la toqui que no se rindió (heroica) — `janequeo-la-toqui-que-no-se-rindio.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic mountain battle lighting, dynamic multi-figure composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, deep bronze and mountain grey and ember orange color palette, a woman warrior directing fighters low along a mountain ridge as a distant fort burns below in the valley
```

### Millalobo y la Pincoya (amor) — `millalobo-y-la-pincoya.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic soft moonlit lighting, dynamic composition, a low moonlit beach, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, pale gold and soft ocean teal and pearl white color palette, a golden sea king rising low from gentle waves toward a dancing sea maiden on wet sand, schools of fish glimmering faintly in the shallow water between them
```

### El secreto de la Recta Provincia y el Caleuche (otro) — `el-secreto-de-la-recta-provincia-y-el-caleuche.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic eerie luminous night lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, pale spectral gold and deep ocean black and soft mist white color palette, a small fishing boat drifting low toward a glowing ghostly ship on dark channel waters, a lone fisherman reaching toward the light with clear unease
```

---

## 15. Mitología Africana (18 historias)

**Nota:** este libro se ilustra con Gemini, no con Leonardo.ai — no hace falta la configuración
de la sección 1, solo pega cada prompt completo directo en el chat. Todas las escenas ya piden
`aspect ratio approximately 21:9` y la acción contenida en una franja horizontal baja desde el
inicio (ver el aviso sobre el recorte del banner más arriba).

### ⭐ La creación de Mawu-Lisa y la serpiente Aido-Hwedo (cosmogonía) — `la-creacion-de-mawu-lisa-y-la-serpiente-aido-hwedo.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic cosmic lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, deep midnight blue and radiant gold and soft void black color palette, on one side a dark-skinned goddess with long braided hair in deep blue and silver moonlit robes, on the other a dark-skinned bearded god in golden fire-patterned robes radiating sunlight, the two divine figures walking low together along the coiled body of a vast cosmic serpent, mountains and rivers taking shape in the terrain beneath its winding path
```

### Cómo Anansi ganó las historias del mundo (otro) — `como-anansi-gano-las-historias-del-mundo.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic warm lighting, dynamic multi-figure composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm amber gold and deep earth brown and soft jungle green color palette, a grinning dark-skinned man with extra thin spider-like limbs, wrapped in a patterned amber cloth and beaded jewelry, presenting a bound python, a sealed calabash, a trapped leopard and a stuck wooden doll low before an elderly dark-skinned sky god with a long flowing white beard and hair, seated on a throne of clouds wrapped in deep blue starry constellation-patterned robes, a glowing golden storybook covered in luminous symbols open on the clouds below him
```

### La creación de la humanidad por Obatala (cosmogonía) — `la-creacion-de-la-humanidad-por-obatala.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic warm lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm clay ochre and pure white and soft gold color palette, a dark-skinned deity in a tall pointed white beaded headdress with a beaded veil over his face and flowing white ceremonial robes shaping rows of clay human figures low along newly formed ground, a palm wine cup tipped over beside unfinished figures
```

### El nacimiento de Shango (otro) — `el-nacimiento-de-shango.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic catastrophic lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, blazing orange and deep storm grey and radiant gold color palette, a muscular dark-skinned king in a red beaded crown and red beaded regalia standing low before a burning palace as lightning bursts from his raised hands into the sky above
```

### Oshun y la crisis de la fertilidad (otro) — `oshun-y-la-crisis-de-la-fertilidad.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic parched lighting, dynamic multi-figure composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, dusty cracked brown and pale gold and soft river blue color palette, a group of divine figures kneeling low in supplication before a dark-skinned woman in golden embroidered robes with peacock feathers in her braided hair, beside a single trickling river returning to flow
```

### Ogún abre camino a través de la selva (otro) — `ogun-abre-camino-a-traves-de-la-selva.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic determined lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, deep forest green and iron grey and warm forge orange color palette, a rugged dark-skinned warrior in a green cloth wrap with palm-fiber strands at his wrists swinging a forged machete low through dense tangled jungle vines, a line of divine figures following through the newly opened path behind him
```

### Eshu y el sombrero de dos colores (otro) — `eshu-y-el-sombrero-de-dos-colores.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic warm daylight lighting, dynamic composition, a low farming path, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm crimson and shadow black and soft field green color palette, a dark-skinned traveler with dreadlocks in a red-and-black split cap and layered red, black and gold robes walking low along a path between two farmers each glancing up from opposite fields
```

### La venganza de Oba (tragedia) — `la-venganza-de-oba.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic tense lighting, dynamic composition, a low royal dining hall, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, deep crimson and storm grey and pale gold color palette, a horrified muscular king in a red beaded crown recoiling low from an offered bowl of soup, a woman veiled in dusty rose and coral pink fleeing toward a distant turbulent river in the misty background
```

### Oya y las batallas de Shango (heroica) — `oya-y-las-batallas-de-shango.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic battle lighting, dynamic multi-figure composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, deep maroon and storm grey and blazing gold color palette, NOT wearing metal armor or European-style plate armor, a fierce dark-skinned woman with wild flowing dreadlocked hair wrapped in flowing maroon and copper cloth robes with layered coral bead necklaces charging low at the front of a battle line with a raised sword, a muscular king in a red beaded crown and red beaded ceremonial regalia wielding a double-headed axe crackling with lightning striking behind her, opposing warriors in traditional West African wrapper cloths and beaded jewelry scattering in the ranks ahead
```

### Moremi y el secreto de los invasores (heroica) — `moremi-y-el-secreto-de-los-invasores.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic torchlit night lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm torch orange and deep royal blue and soft ash grey color palette, a dark-skinned woman in blue and gold royal wrapper with coral beaded jewelry holding a burning torch aloft low before a line of raffia-covered invader masks crumbling into ash, a besieged city wall fading into smoke behind her

### ⭐ El ascenso de Sundiata Keita (heroica) — `el-ascenso-de-sundiata-keita.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic triumphant lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm gold and deep bronze and savanna green color palette, a dark-skinned young man in a lion-pelt mantle rising low to his feet gripping a bending iron bar, a stunned royal court watching from either side of the scene
```

### La peregrinación de Mansa Musa a La Meca (otro) — `la-peregrinacion-de-mansa-musa-a-la-meca.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic radiant desert lighting, dynamic multi-figure composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm gold and desert ochre and deep royal purple color palette, an immense caravan of camels laden with gold moving low across a desert horizon, a dark-skinned regal figure in a purple and gold robe and a bird-topped jeweled crown distributing gold to grateful crowds along the roadside
```

### Shaka y la reforma del ejército zulu (heroica) — `shaka-y-la-reforma-del-ejercito-zulu.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic disciplined lighting, dynamic multi-figure composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, deep bronze and earthy red and storm grey color palette, ranks of barefoot dark-skinned Zulu warriors bare-chested with cowhide-patterned isicholo shields (black and white patterned oxhide), short iklwa stabbing spears, animal-skin ibheshu loincloths, and cow-tail ishoba tufts tied around their upper arms and knees, forming a curved horn-shaped battle formation low across open grassland, a muscular commander in a leopard-skin mantle and a headring with tall feathers directing them with a raised iklwa spear and a black-and-white cowhide shield
```

### ⭐ Yaa Asantewaa y la Guerra del Taburete de Oro (heroica) — `yaa-asantewaa-y-la-guerra-del-taburete-de-oro.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic defiant lighting, dynamic multi-figure composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm gold and deep kente crimson and storm grey color palette, a fierce dark-skinned queen mother in multicolor kente cloth robes and coral beaded jewelry raising a sword low before a hesitant council of seated elders, a golden stool glowing faintly at the center between them
```

### Nzinga y el trono improvisado (heroica) — `nzinga-y-el-trono-improvisado.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic tense negotiation lighting, dynamic composition, a low colonial meeting room, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, deep royal red and warm bronze and storm grey color palette, a regal dark-skinned woman in a deep red velvet robe and beaded crown seated calmly low upon a servant positioned on hands and knees, facing a startled seated colonial governor across a table
```

### La fuga de Yennenga (heroica) — `la-fuga-de-yennenga.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic dawn lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm dawn gold and earthy bronze and misty green color palette, a lone dark-skinned warrior woman in bronze armor and a flowing green cape galloping low on horseback across open wilderness at dawn, a distant royal court fading into mist behind her
```

### El descenso del Taburete de Oro sobre Osei Tutu (fundación) — `el-descenso-del-taburete-de-oro-sobre-osei-tutu.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic thunderous lighting, dynamic multi-figure composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, radiant gold and storm grey and deep kente crimson color palette, a golden stool descending low through a lightning-lit sky onto the lap of a kneeling dark-skinned king in multicolor kente robes, gathered clan leaders watching in awe on either side
```

### La resistencia final de Behanzin (tragedia) — `la-resistencia-final-de-behanzin.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic somber battle lighting, dynamic multi-figure composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, deep royal red and smoky grey and bronze color palette, ranks of dark-skinned West African facial features Dahomey Amazon (Agojie) women warriors in dark blue and white belted tunics, cartridge belts and cloth headwraps, gripping machetes and old muskets, making a final defiant stand low before an advancing colonial column, a dark-skinned king with West African facial features in a deep maroon gold-embroidered Dahomey royal robe and a feathered crown gripping a curved sword and watching resolutely from the center of the line
```

---

## 16. Demonología (18 historias)

**Nota:** este libro se ilustra con Gemini, no con Leonardo.ai — no hace falta la configuración
de la sección 1, solo pega cada prompt completo directo en el chat. Todas las escenas ya piden
`aspect ratio approximately 21:9` y la acción contenida en una franja horizontal baja desde el
inicio (ver el aviso sobre el recorte del banner más arriba). Varias escenas involucran figuras
históricas reales (León XIII, Jacobo VI y I, los juicios de Loudun y Salem) — mantené el mismo
tono digno y serio del resto del libro, sin sensacionalismo.

### ⭐ La caída de Lucifer, la estrella de la mañana (tragedia) — `la-caida-de-lucifer-la-estrella-de-la-manana.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic falling lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, fading radiant gold and deep abyssal black and pale starlight color palette, a beautiful winged figure falling low across a darkening sky, feathers scattering into embers as the light around him fades toward shadow below
```

### El origen de Lilith, la primera mujer (cosmogonía) — `el-origen-de-lilith-la-primera-mujer.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic desert dawn lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm desert gold and deep midnight blue and pale dawn white color palette, a determined woman walking low away from a lush garden toward a distant desert horizon, a garden gate closing softly behind her
```

### El combate final entre Leviatán y Behemot (otro) — `el-combate-final-entre-leviatan-y-behemot.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic apocalyptic lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, abyssal black and earthy bronze and molten ember color palette, a colossal sea serpent and a colossal land beast clashing low where the shoreline meets the water, waves and dust rising together around the point of impact
```

### Los ángeles vigilantes y la caída de Azazel (otro) — `los-angeles-vigilantes-y-la-caida-de-azazel.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic somber lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, dusty desert tan and deep shadow black and pale ember color palette, a bound winged figure being lowered low into a rocky desert abyss by an armored angel, sharp stones piling around him in the pit below
```

### Asmodeo y las siete noches de bodas de Sara (tragedia) — `asmodeo-y-las-siete-noches-de-bodas-de-sara.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic smoky lighting, dynamic composition, a low bridal chamber, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, deep crimson and smoky grey and warm bronze color palette, a young groom burning fish organs low over glowing coals as a three-headed shadow recoils and flees through a window behind him
```

### La transformación de Astarté en Astaroth (otro) — `la-transformacion-de-astarte-en-astaroth.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic transformative lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, ancient temple gold and deep venomous green and shadow black color palette, an ancient goddess statue on one side cracking low into a winged dragon-riding figure on the other, a ruined temple fading into a medieval grimoire page between them
```

### Belcebú, el señor de las moscas de Ecrón (otro) — `belcebu-el-senor-de-las-moscas-de-ecron.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic ancient lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, sandstone gold and deep shadow black and sickly green color palette, a robed prophet blocking low a group of royal messengers on a dusty road, a distant temple of an ancient foreign god fading into haze behind them
```

### ⭐ El rey Salomón ata a los setenta y dos espíritus (heroica) — `el-rey-salomon-ata-a-los-setenta-y-dos-espiritus.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic regal lighting, dynamic multi-figure composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm gold and deep royal purple and bronze color palette, a crowned king raising a glowing signet ring low before a line of kneeling demonic figures at the base of a rising temple, a sealed bronze vessel resting at his feet
```

### ⭐ El pacto de Fausto con Mefistófeles (tragedia) — `el-pacto-de-fausto-con-mefistofeles.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic candlelit forest lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm candle gold and deep forest black and blood crimson color palette, a scholar signing a contract in blood low at a small table facing a dark cloaked figure, a lone candle flickering between them in a moonlit forest clearing
```

### La creación de Baphomet por Éliphas Lévi (otro) — `la-creacion-de-baphomet-por-eliphas-levi.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic scholarly lighting, dynamic composition, a low candlelit study desk, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm candle gold and deep ink black and soft symbolic silver color palette, an occultist sketching low a symmetrical goat-headed figure on a large parchment, bookshelves of esoteric texts fading into shadow behind him
```

### La visión del Papa León XIII (otro) — `la-vision-del-papa-leon-xiii.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic reverent lighting, dynamic composition, a low church altar, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, pure white and warm gold and soft heavenly light color palette, an elderly pope standing frozen low before an altar, a faint glowing vision of a heavenly exchange shimmering just above the incense smoke
```

### Los juicios de brujas de North Berwick y el rey Jacobo (otro) — `los-juicios-de-brujas-de-north-berwick-y-el-rey-jacobo.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic stormy lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, deep royal navy and storm grey and pale candle gold color palette, a king observing low an interrogation inside a torchlit stone chamber, a storm-wracked ship faintly visible through a narrow window behind him
```

### Las posesiones del convento de Loudun (tragedia) — `las-posesiones-del-convento-de-loudun.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic somber convent lighting, dynamic multi-figure composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, deep habit black and warm candle gold and soft stone grey color palette, robed nuns gathered low around an altar during a solemn public rite, a crowd of onlookers watching from the shadowed edges of a stone chapel
```

### El auge y la caída de Matthew Hopkins (tragedia) — `el-auge-y-la-caida-de-matthew-hopkins.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic grim lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, deep Puritan black and pale grey and muted earth tone color palette, a stern robed figure standing low beside a village pond where a bound accused woman is lowered into the water, villagers watching grimly from the bank
```

### Los juicios de brujas de Salem (tragedia) — `los-juicios-de-brujas-de-salem.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic somber colonial lighting, dynamic multi-figure composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, deep Puritan black and warm parchment gold and muted grey color palette, a courtroom scene low with a young accuser pointing across a wooden table, somber magistrates and a modest colonial meeting house fading into the background
```

### Pazuzu contra Lamashtu (otro) — `pazuzu-contra-lamashtu.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic protective lighting, dynamic composition, a low ancient birthing chamber, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, dusty desert tan and deep storm grey and pale ember color palette, a winged wind demon amulet glowing low above a sleeping mother and infant, a shadowy lion-headed shape recoiling just outside the doorway
```

### Krampus y las noches de diciembre (otro) — `krampus-y-las-noches-de-diciembre.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic wintry torchlit lighting, dynamic multi-figure composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, deep winter black and warm torchlight orange and pale snow white color palette, a horned chained figure and a gentle bearded elder walking low together through a snowy alpine village street, lantern-lit windows glowing along the row of houses behind them
```

### El exorcismo de Anneliese Michel (tragedia) — `el-exorcismo-de-anneliese-michel.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic somber candlelit lighting, dynamic composition, a low modest bedroom, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, muted soft grey and pale candle gold and gentle ivory color palette, two solemn robed figures praying quietly low beside a bed, a small worn cross and a single candle resting on a nearby nightstand, treated with dignity and restraint
```

---

## 17. Angelología (18 historias)

**Nota:** este libro se ilustra con Gemini, no con Leonardo.ai — no hace falta la configuración
de la sección 1, solo pega cada prompt completo directo en el chat. Todas las escenas ya piden
`aspect ratio approximately 21:9` y la acción contenida en una franja horizontal baja desde el
inicio (ver el aviso sobre el recorte del banner más arriba). Varias escenas involucran figuras
bíblicas y coránicas veneradas (María de Nazaret en particular) — mantené un tono digno,
luminoso y respetuoso, sin nada provocador.

### ⭐ La visión de los serafines de Isaías (otro) — `la-vision-de-los-serafines-de-isaias.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic blazing radiant lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, blazing gold and radiant white and soft ember orange color palette, a kneeling prophet low before a great glowing throne wreathed in smoke, six-winged burning figures circling just above him, one descending with a glowing ember held in tongs
```

### La visión del carro de Ezequiel (otro) — `la-vision-del-carro-de-ezequiel.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic stormy radiant lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, storm grey and radiant gold and deep sapphire blue color palette, a robed prophet collapsed low on a riverbank before four towering many-faced beings and wheels covered in eyes, a glowing sapphire throne shimmering faintly above them
```

### ⭐ La transformación de Enoc en Metatrón (otro) — `la-transformacion-de-enoc-en-metatron.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic radiant transformative lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, radiant gold and soft cloud white and warm amber color palette, a robed man ascending low through parting clouds, wings and eyes beginning to bloom across his form as a crown of light settles onto his head
```

### La caída de los ángeles vigilantes (tragedia) — `la-caida-de-los-angeles-vigilantes.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic somber lighting, dynamic multi-figure composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, dusty desert tan and deep shadow black and pale ember color palette, four armored winged figures gathering low before a radiant throne, a bound dark figure being lowered into a rocky abyss in the distance behind them
```

### ⭐ Miguel derrota al dragón (heroica) — `miguel-derrota-al-dragon.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic radiant battle lighting, dynamic multi-figure composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, radiant gold and deep storm black and blazing white color palette, an armored winged warrior driving a blazing sword low into a great falling seven-headed dragon, scattered stars trailing from its tail toward the earth below
```

### La lucha de Jacob con el ángel (otro) — `la-lucha-de-jacob-con-el-angel.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic dawn lighting, dynamic composition, a low riverside ford, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm dawn gold and deep river blue and soft mist grey color palette, two figures locked in a determined struggle low beside a river at first light, one radiant and winged, neither yielding as the sun begins to rise behind them
```

### Los tres visitantes de Abraham (otro) — `los-tres-visitantes-de-abraham.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic warm hospitable lighting, dynamic multi-figure composition, a low desert tent, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm earthy gold and soft desert tan and pale sky blue color palette, an elderly man bowing low before three robed travelers seated beneath an oak tree, a tent flap open behind him with a listening figure just visible inside
```

### El rescate de Lot en Sodoma (tragedia) — `el-rescate-de-lot-en-sodoma.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic urgent fiery lighting, dynamic multi-figure composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, blazing ember orange and deep smoky black and pale urgent gold color palette, two winged figures pulling a fleeing family low away from a burning city gate, a single figure turning back to look despite the urgency
```

### Agar y el ángel del desierto (otro) — `agar-y-el-angel-del-desierto.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic desert dawn lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm desert gold and pale dawn blue and soft sand tan color palette, a kneeling woman low beside a child under a bush, a radiant winged figure pointing toward a well that shimmers into visibility in the sand nearby
```

### Gedeón y la señal del fuego (heroica) — `gedeon-y-la-senal-del-fuego.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic warm rustic lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm ember gold and earthy green and soft dusk grey color palette, a farmer kneeling low before a rock as fire bursts upward consuming an offering, a winged figure standing calmly beside an ancient oak tree nearby
```

### Elías alimentado por el ángel (otro) — `elias-alimentado-por-el-angel.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic soft desert dawn lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm amber gold and soft desert tan and pale dawn blue color palette, an exhausted man lying low beneath a solitary tree, a gentle winged figure touching his shoulder beside a simple cake and jar of water
```

### Daniel y la interpretación de Gabriel (otro) — `daniel-y-la-interpretacion-de-gabriel.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic radiant visionary lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, radiant gold and deep royal purple and pale silver color palette, a robed man kneeling low beside a river, a swift-flying radiant winged figure descending to touch his shoulder and speak
```

### El anuncio a Zacarías (otro) — `el-anuncio-a-zacarias.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic soft reverent lighting, dynamic composition, a low temple altar, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm gold and deep temple crimson and soft ivory color palette, an elderly priest recoiling low in astonishment beside an incense altar, a radiant winged figure standing calmly at his side
```

### ⭐ La Anunciación a María (otro) — `la-anunciacion-a-maria.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic soft radiant lighting, dynamic composition, a low humble room, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, soft radiant gold and gentle sky blue and pure white color palette, a young woman in modest blue robes standing serenely low with hands folded, a radiant winged figure kneeling respectfully before her with a white lily, treated with traditional reverent iconography
```

### Harut y Marut en Babilonia (tragedia) — `harut-y-marut-en-babilonia.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic ancient lighting, dynamic composition, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm sandstone gold and deep shadow black and pale sky blue color palette, two winged figures standing low before a gathered crowd in ancient Babylon, one raising a hand in solemn warning as a ziggurat fades into haze behind them
```

### Múnkar y Nakir interrogan a los muertos (otro) — `munkar-y-nakir-interrogan-a-los-muertos.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic eerie moonlit lighting, dynamic composition, a low graveyard, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, deep midnight black and pale lightning silver and dull iron grey color palette, two dark stern winged figures standing low beside an open grave, glowing eyes fixed on a faint translucent figure rising to answer
```

### La magia enoquiana de John Dee y Edward Kelley (otro) — `la-magia-enoquiana-de-john-dee-y-edward-kelley.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic mystical candlelit lighting, dynamic composition, a low candlelit study, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, deep mystical indigo and warm candle gold and soft crystal silver color palette, two scholars seated low at a table around a glowing crystal orb, faint unknown celestial letters shimmering in the air above it
```

### La visión celestial de Emanuel Swedenborg (otro) — `la-vision-celestial-de-emanuel-swedenborg.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), the entire image in crisp sharp focus edge to edge with absolutely no blur, no vignette, no soft focus and no fading anywhere in the frame, all key figures and action simply composed within the vertical-center band of the frame so nothing important is placed right at the very top or bottom edge, dramatic radiant visionary lighting, dynamic composition, a low candlelit dining room, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, radiant gold and deep scholarly navy and soft heavenly white color palette, a seated scholar low at a table frozen in wonder, a luminous figure and faint conversing angels shimmering into view beside him
```

---

## 18. Resumen

| Libro | Historias | Cosmogonías destacadas |
|---|---|---|
| Griega | 20 | El origen del cosmos |
| Egipcia | 21 | La cosmogonía heliopolitana |
| Hindú | 19 | La creación por el sacrificio de Purusha, El batido del océano de leche |
| Nórdica | 20 | La creación del mundo de Ymir, La creación de Ask y Embla, El renacimiento tras el Ragnarök |
| Azteca | 18 | Los Cinco Soles, El descenso de Quetzalcoatl al Mictlán, El descubrimiento del maíz |
| Sumeria | 16 | La creación desde las aguas de Nammu, El Enuma Elish |
| Maya | 18 | La creación del mundo, La creación de los hombres de maíz, La derrota final de los señores de Xibalbá |
| Japonesa | 18 | La creación del mundo, La cueva celestial de Amaterasu, El descenso de Ninigi a la tierra |
| China | 18 | Pangu y la creación del mundo, Houyi derriba nueve soles, La leyenda de la serpiente blanca |
| Celta | 18 | La llegada de los Tuatha Dé Danann, La segunda batalla de Mag Tuired, Deirdre de las Tristezas |
| Mapuche | 18 | La lucha de Trentren Vilu y Caicai Vilu, La victoria de Pelantaro en Curalaba, La última noche de Lautaro y Guacolda |
| Africana | 18 | La creación de Mawu-Lisa y la serpiente Aido-Hwedo, El ascenso de Sundiata Keita, Yaa Asantewaa y la Guerra del Taburete de Oro |
| Demonología | 18 | La caída de Lucifer, El rey Salomón ata a los setenta y dos espíritus, El pacto de Fausto con Mefistófeles |
| Angelología | 18 | La visión de los serafines de Isaías, La transformación de Enoc en Metatrón, Miguel derrota al dragón |

**Total: 258 escenas.** Como es mucho volumen, si querés priorizar, las marcadas con ⭐
(cosmogonías + momentos clave) son las más importantes para tener primero — funcionan bien
como portada de cada libro o apertura de la sección de historias en el flipbook.

**Con Angelología se completa todo el pipeline de libros planeado** (ver memoria del proyecto)
— los 10 libros nuevos, más los 5 ya existentes del catálogo original, quedan con contenido,
prompts y emblema listos, a la espera de que se generen y suban las imágenes de cada uno.
