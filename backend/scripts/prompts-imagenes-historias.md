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
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), all key figures and action kept within a low horizontal band across the vertical center of the frame, nothing important near the very top or bottom edge, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Maya jungle and stepped pyramid landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, warm gold and jade green and deep brown color palette, a low leafy tree branch stretching horizontally across the middle of the frame with two elder brothers clinging to it at mid-height, their bodies already transforming into spider monkeys, two young hero twins standing on the ground looking up at them, their grandmother laughing beside them, the tree's upper branches and roots left out of frame so the group stays centered in a tight horizontal band
```

### La convocatoria a Xibalbá (heroica) — `la-convocatoria-a-xibalba.jpg`
```
Semi-realistic fantasy digital painting, wide cinematic scene, dramatic chiaroscuro lighting, dynamic multi-figure composition, ancient Maya jungle and stepped pyramid landscape backdrop, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, cinematic wide-angle framing, no text or writing anywhere in the image, warm gold and deep jungle green and dusk violet color palette, two young hero twins playing a fierce ballgame on a stone court as owl messengers descend from a dark crack opening in the earth beside them, their grandmother watching anxiously from a doorway
```

### Las casas de tormento (heroica) — `las-casas-de-tormento.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), all key figures and action kept within a low horizontal band across the vertical center of the frame, nothing important near the very top or bottom edge, dramatic chiaroscuro lighting, dynamic multi-figure composition, a dark low-ceilinged stone chamber interior, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, obsidian black and deep crimson and bone white color palette, a monstrous bat-headed guardian lunging low and sideways at chest height toward two hero twins crouched at ground level partly hidden inside hollow blowguns lying on the stone floor, one twin's severed head resting nearby on the ground, the chamber's ceiling and depth left out of frame so the action stays centered in a tight horizontal band
```

### ⭐ La derrota final de los señores de Xibalbá (heroica) — `la-derrota-final-de-los-senores-de-xibalba.jpg`
```
Semi-realistic fantasy digital painting, ultra-wide panoramic banner composition, aspect ratio approximately 21:9 (much wider than tall), all key figures and action kept within a low horizontal band across the vertical center of the frame, nothing important near the very top or bottom edge, dramatic chiaroscuro lighting, dynamic multi-figure composition, a dark low stone throne hall interior, atmospheric haze, highly detailed digital art, painterly rendering, trending on artstation, no text or writing anywhere in the image, obsidian black and molten gold and deep violet color palette, two disguised hero twins performing a miraculous sacrifice-and-revival trick close to the ground, one twin frozen mid-strike over a kneeling supreme lord who has just requested the same fate, a tight cluster of a few astonished underworld lords seated low nearby watching, the hall's tall walls and ceiling left out of frame so the group stays centered in a tight horizontal band
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

## 11. Resumen

| Libro | Historias | Cosmogonías destacadas |
|---|---|---|
| Griega | 20 | El origen del cosmos |
| Egipcia | 21 | La cosmogonía heliopolitana |
| Hindú | 19 | La creación por el sacrificio de Purusha, El batido del océano de leche |
| Nórdica | 20 | La creación del mundo de Ymir, La creación de Ask y Embla, El renacimiento tras el Ragnarök |
| Azteca | 18 | Los Cinco Soles, El descenso de Quetzalcoatl al Mictlán, El descubrimiento del maíz |
| Sumeria | 16 | La creación desde las aguas de Nammu, El Enuma Elish |
| Maya | 18 | La creación del mundo, La creación de los hombres de maíz, La derrota final de los señores de Xibalbá |

**Total: 132 escenas.** Como es mucho volumen, si querés priorizar, las marcadas con ⭐
(cosmogonías + momentos clave) son las más importantes para tener primero — funcionan bien
como portada de cada libro o apertura de la sección de historias en el flipbook.
