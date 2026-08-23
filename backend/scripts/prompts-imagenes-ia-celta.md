# Prompts para generar los retratos de personajes de Mitología Celta con Gemini

Mismo formato que los libros anteriores: un prompt por personaje, retrato de cuerpo completo,
formato vertical. Se generan con **Gemini** — pega el prompt completo directo en el chat. Si
el resultado no convence, pedile a Gemini 2-3 variaciones o ajustá algún detalle del prompt.

## Después de generar cada imagen

1. Descarga el archivo.
2. Renómbralo exactamente como el `slug` del personaje (ej. `cu-chulainn.jpg`).
3. Guárdalo en una carpeta local `mitologia-celta/` — cuando tengas todos, avisame y los subo
   al sitio.

## Portada — `portada-fondo.jpg`

Fondo de la tapa del libro (flipbook y PDF): un degradado oscuro se aplica encima por CSS, más
fuerte hacia abajo, para que el título dorado se lea bien. Proporción recomendada: vertical
alta (9:16 o 1:2).

```
Semi-realistic fantasy digital painting, epic wide vertical composition, dramatic twilight lighting with a deep teal and violet sky, silhouette of ancient standing stones (a stone circle) atop misty green hills layered into the distance, faint ghostly wisps of mist swirling low across moorland, a single ancient gnarled oak tree silhouetted on a ridge, drifting fog between the hills, atmospheric haze, painterly rendering, highly detailed digital art, trending on artstation, cinematic wide dynamic range, no text or writing anywhere in the image, no visible human figures, crowds or faces, keep the lower half of the frame calm, dark and uncluttered (it will be covered by a title later), deep forest green and misty teal and warm bronze gold color palette, sense of ancient mythic mystery across a fog-bound Celtic landscape
```

Después de generarla: renómbrala `portada-fondo.jpg` y guárdala junto con los personajes, en
la carpeta `mitologia-celta/`.

## El emblema (`portada-emblema.png`)

No hace falta pedírselo a Gemini — lo genero yo mismo con código (mismo método que los otros
libros). Para Celta voy a usar un triskel (triple espiral céltica), uno de los símbolos más
antiguos y reconocibles de toda la tradición celta, presente en piedras y manuscritos desde
hace más de dos mil años.

## Nota sobre personajes sin forma humana o híbridos

Llevan `NOT human, NOT humanoid, no human face, no human anatomy` incorporado directo en su
prompt: **Cù Sìth**, **Each-Uisge** y **Kelpie** (en su forma equina, la más icónica de cada
uno), **Oilliphéist** (serpiente/dragón acuático puro) y **Afanc** (bestia lacustre). **Balor**,
**Dullahan**, **Banshee**, **Sluagh**, **Cichol Gricenchos**, **Púca** y **Abhartach**
conservan forma humanoide o parcialmente humana. Varios dioses y héroes masculinos llevan
`a MALE deity` / `unmistakably male` explícito para evitar que Gemini los genere como mujeres
por defecto.

---

## Titanes / Primordiales (5)

### Cailleach — `cailleach.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), harsh winter lighting, an ELDERLY FEMALE giantess build, weathered blue-grey skin, wild white hair whipped by wind, a single piercing eye, rust-red teeth, ragged dark plaid robes, gripping an enormous stone hammer, a snow-swept mountain range being shaped by her passing in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, frost blue and slate grey and rust red color palette, the ancient hag of winter who shapes the very mountains, primal and formidable, unmistakably an ancient crone
```

### Ler — `ler.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dim oceanic lighting, a MALE deity, an ancient distant build barely coalescing from sea foam and mist, a flowing cloak that merges into churning grey waves, a weathered driftwood staff, the vast open ocean fading into fog in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep slate grey and sea foam white and muted teal color palette, the primordial and half-forgotten lord of the sea itself, distant and ancient, unmistakably male
```

### Ériu — `eriu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), soft golden dusk lighting, a regal FEMALE build, flowing green and earth-toned robes embroidered with spiral patterns, a crown of woven grain and wildflowers, standing atop a green hill overlooking the whole island, patchwork fields and misty coastline in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, emerald green and warm gold and soft earth brown color palette, the sovereign goddess who gives Ireland her name, nurturing and regal
```

### Domnu — `domnu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), murky abyssal lighting, an ancient FEMALE build emerging from dark churning waters, pale grey-green skin, tangled dark hair like seaweed, a jagged crown of barnacle and bone, deep ocean trench glowing faintly in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, abyssal black and murky teal and bone white color palette, the primordial mother of the chaotic Fomorians from the deep, ancient and unsettling
```

### Cesair — `cesair.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), stormy dramatic lighting, a determined FEMALE build, simple weathered traveling robes, windswept dark hair, standing at the prow of a wooden ark-like vessel, a great flood and distant misty coastline in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, storm grey and deep ocean blue and weathered wood brown color palette, the first legendary settler to reach Ireland's shores, resolute and pioneering
```

## Dioses (15)

### El Dagda — `dagda.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), warm hearty lighting, a MALE deity, a massive robust bearded build, a rough brown tunic, gripping an enormous double-headed club that drags a furrow in the earth behind him, a bottomless bronze cauldron resting nearby, rolling green hills in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, earthy brown and warm bronze and forest green color palette, the great father-god of abundance and plenty, jovial and immensely powerful, unmistakably male
```

### Morrígan — `morrigan.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), ominous dusk lighting, a fierce FEMALE build, dark flowing war-tattered robes, pale striking features, a cloak of black raven feathers spreading like wings, standing over a misty river ford, ravens circling above in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, crow black and blood red and pale grey color palette, the shapeshifting goddess of war, fate and prophecy, chilling and commanding
```

### Lugh — `lugh.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), radiant golden lighting, a MALE deity, a lean athletic warrior build with a striking youthful face, ornate bronze and gold Celtic armor, an unerring spear crackling with light, a sling coiled at his belt, a bright sun-like glow surrounding him, misty green hills in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, radiant gold and bronze and sky blue color palette, the god of every skill and mastery, brilliant and unstoppable, unmistakably male
```

### Brigid — `brigid.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), warm firelit lighting, a graceful FEMALE build, flowing white and gold robes, a crown of gentle flame, holding a sacred perpetual flame in cupped hands, a shallow holy well nearby, reed crosses woven at her feet, soft misty countryside in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm flame gold and pure white and soft green color palette, the goddess of the sacred flame, healing and poetry, warm and luminous
```

### Nuada — `nuada.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic regal lighting, a MALE deity, a dignified kingly warrior build, fine bronze and silver Celtic armor, a gleaming silver prosthetic arm, gripping an unerring sword radiating faint light, a stone throne in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, polished silver and deep bronze and royal blue color palette, the once and rightful king wielding the sword of victory, noble and resolute, unmistakably male
```

### Danu — `danu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), ethereal flowing lighting, an ancient serene FEMALE build, flowing river-like translucent robes that blend into a winding river, long hair merging with flowing water, standing where a river meets fertile green land, misty valley in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, river silver and lush green and soft mist white color palette, the ancestral mother goddess of an entire divine people, ancient and nurturing
```

### Manannán mac Lir — `manannan-mac-lir.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), misty oceanic lighting, a MALE deity, a tall commanding build, a flowing sea-green and silver cloak of mist, riding a great pale horse atop cresting waves as if galloping on solid ground, a swordless magical crane-skin bag at his hip, the veiled horizon between worlds in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, sea green and misty silver and deep navy color palette, the guardian god of the sea and the Otherworld's threshold, mysterious and majestic, unmistakably male
```

### Ogma — `ogma.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), warm dramatic lighting, a MALE deity, an immensely muscular sun-bronzed build, a lion-skin cloak, fine chains of amber and gold linking from his smiling mouth to the ears of entranced followers, standing beside a tall stone carved with ogham script, misty hillside in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, sun-bronze and amber gold and stone grey color palette, the god of eloquence, strength and the sacred ogham script, commanding and charismatic, unmistakably male
```

### Aengus — `aengus.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), soft dreamlike lighting, a youthful graceful MALE build, elegant pale robes adorned with small carved birds, four songbirds circling his head representing kisses turned to birds, a small harp at his side, a glowing misty dream-like landscape in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, soft rose gold and pale cream and sky blue color palette, the youthful god of love, dreams and poetic inspiration, gentle and enchanting, unmistakably male
```

### Dian Cécht — `dian-cecht.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), soft healing lighting, an elderly wise MALE build, simple herb-stained robes, a satchel of medicinal herbs, kneeling beside a glowing stone healing well, sprigs of healing plants growing around him, misty countryside in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, soft healing green and pale silver and earthy brown color palette, the great physician-god whose well restores the fallen, wise and precise, unmistakably male
```

### Goibniu — `goibniu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), glowing forge lighting, a MALE deity, a powerful stocky blacksmith build, soot-streaked bronze-toned skin, a leather apron, gripping a massive hammer over a glowing anvil, sparks flying, an unerring blade cooling nearby, a feast hall glow in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, forge orange and deep bronze and iron grey color palette, the master smith whose weapons never miss, powerful and precise, unmistakably male
```

### Epona — `epona.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), warm pastoral lighting, a graceful FEMALE build, flowing earth-toned riding robes, seated gracefully upon a magnificent white mare, a woven cornucopia of fruit resting in her lap, a herd of horses grazing in green pastures in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm chestnut brown and pure white and lush green color palette, the protective goddess of horses and abundance, gentle and dignified
```

### Cernunnos — `cernunnos.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dappled forest lighting, a MALE deity, a powerful build seated cross-legged, tall branching stag antlers crowning his head, a torc held in one hand and a ram-horned serpent coiled in the other, surrounded by wild forest animals, a deep ancient forest in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep forest green and antler brown and warm gold color palette, the horned lord of wild animals and the forest, primal and serene, unmistakably male
```

### Rhiannon — `rhiannon.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), golden dusk lighting, a graceful FEMALE build, flowing pale gold riding robes, seated elegantly upon an unnaturally swift white horse moving at an unhurried walk, small songbirds trailing behind her, a misty Welsh hillside in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pale gold and soft white and misty lavender color palette, the otherworldly horsewoman who endures injustice with quiet dignity, serene and unhurried
```

### Arawn — `arawn.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), cold misty lighting, a MALE deity, a regal stern build, grey and silver royal hunting attire, a crown befitting the Otherworld, flanked by pale white hounds with striking red ears, a shadowy misty Otherworld forest in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pale grey and deep silver and blood red color palette, the sovereign king of the Otherworld Annwn, solemn and honorable, unmistakably male
```

## Héroes (10)

### Cú Chulainn — `cu-chulainn.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), intense battle-lit lighting, a MALE warrior, a young lean muscular build mid-transformation, one eye bulging and one sunken in battle fury, hair standing on end with a faint glow, ornate bronze Celtic warrior gear, gripping the barbed spear Gáe Bulg, a war chariot silhouette in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, blood bronze and storm grey and pale battle-light color palette, the greatest hero of Ulster consumed by his own battle fury, fierce and unstoppable, unmistakably male
```

### Fionn mac Cumhaill — `fionn-mac-cumhaill.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), warm woodland lighting, a MALE warrior, a mature powerful build, fine leather and bronze hunting attire, a hand raised with thumb touching his lips in a gesture of prophetic insight, a great salmon carved into his belt buckle, a band of warriors faintly visible in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, forest green and warm bronze and river silver color palette, the wise leader of the Fianna touched by the salmon's knowledge, thoughtful and formidable, unmistakably male
```

### Diarmuid Ua Duibhne — `diarmuid-ua-duibhne.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), romantic golden lighting, a MALE warrior, a strikingly handsome lean build, fine bronze-trimmed leather armor, a lock of hair falling artfully over one side of his forehead concealing a faint glowing mark, gripping an ornate sword, a misty forest glade in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm gold and forest green and bronze color palette, the irresistibly charmed warrior burdened by his own beauty, alluring and conflicted, unmistakably male
```

### Oisín — `oisin.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), soft golden lighting, a MALE build, a lean poetic warrior figure, fine Celtic robes with a small harp slung across his back, standing beside a magnificent white horse from the Otherworld, misty green hills fading into golden light in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm gold and misty white and soft green color palette, the poet-warrior torn between two worlds and centuries, wistful and noble, unmistakably male
```

### Deirdre — `deirdre.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), somber twilight lighting, a strikingly beautiful FEMALE build, flowing dark red and white robes evoking blood on snow, long dark hair, a single raven feather woven into her hair, standing alone on a windswept cliff, a distant misty coastline in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, blood red and snow white and raven black color palette, the tragic beauty whose birth fulfilled a fatal prophecy, sorrowful and hauntingly beautiful
```

### Étaín — `etain.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), luminous ethereal lighting, a radiant FEMALE build, flowing iridescent robes shimmering like butterfly wings, delicate wing-like patterns catching the light at her shoulders, standing amid drifting golden light motes, a soft misty Otherworld glow in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, iridescent gold and soft amber and pale rose color palette, the reborn goddess who transcended transformation and forgetting, luminous and serene
```

### Bran mac Febail — `bran-mac-febail.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), misty seafaring lighting, a MALE build, a weathered determined voyager, simple Celtic seafaring attire, holding aloft a silver branch heavy with white blossoms, standing at the prow of a currach boat, an endless misty ocean in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, silver mist and deep ocean blue and pale blossom white color palette, the voyager who sailed to the Otherworld and back, wonder-struck and resolute, unmistakably male
```

### Pwyll — `pwyll.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), misty twilight lighting, a MALE build, a noble hunter's figure, fine grey and green Welsh hunting attire, standing beside pale hounds with striking red ears, a mysterious rider on a white horse faintly visible in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, misty grey and forest green and pale gold color palette, the honorable prince who traded places with the lord of the Otherworld, steady and honest, unmistakably male
```

### Branwen — `branwen.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), somber overcast lighting, a beautiful sorrowful FEMALE build, fine but travel-worn royal robes, a small starling perched on her outstretched hand, standing at a rugged coastline between two lands, a distant ship on grey seas in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, muted grey and pale gold and soft sea blue color palette, the princess whose sorrow sparked a devastating war between islands, gentle and heartbroken
```

### Culhwch — `culhwch.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), adventurous golden lighting, a young determined MALE build, fine Welsh warrior attire, a boar-hunting spear in hand, a small comb and shears tucked at his belt, a great tusked boar silhouette faintly visible in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm gold and forest green and bronze color palette, the determined suitor who completed impossible tasks for love, brave and resolute, unmistakably male
```

## Monstruos (12)

### Balor — `balor.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), ominous dark lighting, a MALE giant build, immense and towering, weathered grey-green skin, a single massive closed eye dominating his forehead with a heavy drooping lid requiring a hook to lift, dark jagged Fomorian armor, a faint deadly glow beginning to show beneath the closing lid, a storm-wracked battlefield in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, storm grey and sickly green and deadly amber color palette, the fearsome one-eyed king whose gaze alone destroys armies, dreadful and immense, unmistakably male
```

### Dullahan — `dullahan.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), eerie moonlit lighting, NOT human, NOT humanoid in the traditional sense, a headless rider figure atop a jet-black horse, a decayed grinning severed head held aloft under one arm glowing faintly like a lantern, a whip made of a twisted spine, a dark country lane in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, midnight black and sickly pale yellow and cold moon silver color palette, the headless death-herald of Irish folklore, chilling and inexorable
```

### Banshee — `banshee.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), pale moonlit lighting, a gaunt spectral FEMALE build, long wild grey hair flowing loose, tattered pale grey robes, mouth open mid-wail, standing beside a moonlit river washing bloodstained cloth, a darkened ancestral house in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pale spectral grey and moon silver and faint blood red color palette, the wailing spirit who mourns a coming death, mournful and haunting
```

### Sluagh — `sluagh.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dark stormy lighting, NOT human, NOT humanoid, a swirling flock of dark spectral bird-like restless spirits, ragged wing-like tattered forms, faint pale glowing eyes scattered through the mass, flying low from the west across a stormy night sky, a darkened moor in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, storm black and pale spectral grey and faint sickly green color palette, the restless host of the wandering dead, dreadful and chaotic
```

### Cù Sìth — `cu-sith.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), misty moonlit lighting, NOT human, NOT humanoid, a massive dog the size of a young bull, thick dark forest-green shaggy fur, curled tail over its back, folded ears, glowing pale eyes, standing silent on a misty highland moor, distant hills in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep forest green and misty grey and pale moon white color palette, the silent green hound whose triple bark foretells death, eerie and immense
```

### Each-Uisge — `each-uisge.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dark loch-side lighting, NOT human, NOT humanoid, a sleek powerful black horse with dripping wet glistening skin, strands of algae tangled in its mane, standing at the edge of a deep dark loch, ripples and mist rising from the water in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, obsidian black and deep loch blue and pale mist grey color palette, the deceptive water horse that drags riders to a watery death, alluring and deadly
```

### Kelpie — `kelpie.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), misty riverside lighting, NOT human, NOT humanoid, a wild black horse with a tangled dripping mane, glistening wet coat, standing beside a fast-flowing river, mist rising off the rushing water in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep river black and misty teal and pale foam white color palette, the shapeshifting water spirit of Scotland's rivers, wild and treacherous
```

### Oilliphéist — `oilliphéist.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic murky lighting, NOT human, NOT humanoid, a colossal serpentine dragon-like creature coiling through deep river water, dark green-black scales, glowing pale eyes, its immense body carving a channel through the landscape, misty riverbanks in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep river black and mossy green and pale mist grey color palette, the colossal beast whose passing carved Ireland's rivers, ancient and immense
```

### Cichol Gricenchos — `cichol-gricenchos.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), murky primordial lighting, a MALE Fomorian build, a twisted torso with no functional legs, dragging himself across the ground, grey-green weathered skin, jagged primitive dark armor, a chaotic misty primordial coastline in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, murky grey-green and chaotic black and pale bone white color palette, the first Fomorian king who resisted Ireland's earliest settlers, primal and unsettling, unmistakably male
```

### Afanc — `afanc.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), murky lake lighting, NOT human, NOT humanoid, a massive beaver-crocodile hybrid creature with thick armored hide, huge webbed claws, a heavy flat tail, emerging from a churning flooded lake, submerged trees and rising water in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, murky lake brown and deep green and pale foam white color palette, the monstrous lake creature whose thrashing floods the valleys, immense and destructive
```

### Púca — `puca.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), mischievous moonlit lighting, a shifting dark shape mid-transformation between a sleek black horse and a shadowy goat-like figure, glowing golden eyes constant through every form, a wild hedgerow and harvest field in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, shadow black and golden amber and misty grey color palette, the impish shapeshifting trickster spirit of the Irish countryside, playful and unpredictable
```

### Abhartach — `abhartach.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dark grave-lit lighting, a MALE build, unnervingly small in stature, pale grey withered undead skin, tattered ancient burial robes, sharp yellowed teeth, clawed hands reaching, a great stone slab tomb overgrown with thorn and ash trees in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, corpse grey and dried blood red and mossy stone green color palette, the tyrant who rose from death demanding blood tribute, dreadful and small, unmistakably male
```

## Mortales (5)

### Gráinne — `grainne.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic dusk lighting, a determined beautiful FEMALE build, fine royal Irish robes, a bold defiant expression, standing at the edge of a torchlit banquet hall, a misty forest escape route in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep royal purple and warm torchlight gold and forest green color palette, the willful princess who defied her own betrothal, bold and resolute
```

### Naoise — `naoise.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), warm dusk lighting, a MALE warrior, a young handsome build, fine Ulster warrior attire, a protective stance beside two brothers faintly visible, a distant fortress in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm bronze and deep forest green and dusk purple color palette, the beloved warrior betrayed by a broken royal promise, noble and doomed, unmistakably male
```

### Conchobar mac Nessa — `conchobar-mac-nessa.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic royal lighting, a MALE build, a mature commanding kingly figure, fine red and gold Ulster royal robes, a heavy jeweled crown, seated upon a carved wooden throne in a great feasting hall, warriors of the Red Branch faintly visible in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, royal crimson and warm gold and deep oak brown color palette, the powerful king of Ulster whose jealousy fractured his own kingdom, commanding and severe, unmistakably male
```

### Medb — `medb.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic battle lighting, a powerful commanding FEMALE build, ornate bronze and crimson battle regalia, a spear held ready, standing before a vast assembled army, a great brown bull silhouette in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, battle crimson and bronze and storm grey color palette, the fierce warrior queen of Connacht who answered to no man, formidable and proud
```

### San Brendan el Navegante — `brendan-el-navegante.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), misty dawn lighting, a MALE build, an elderly weathered monk, simple brown woolen robes, a wooden staff topped with a small cross, standing at the prow of a leather currach boat, a whale-like island shape faintly visible beneath calm waters in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, misty dawn grey and deep ocean blue and pale gold color palette, the monk who sailed the Atlantic seeking a promised paradise, humble and wonder-struck, unmistakably male
```
