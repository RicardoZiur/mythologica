# Prompts para generar los retratos de personajes de Mitología Japonesa con Gemini

Mismo formato que los libros anteriores: un prompt por personaje, retrato de cuerpo completo,
formato vertical. Se generan con **Gemini** — pega el prompt completo directo en el chat. Si
el resultado no convence, pedile a Gemini 2-3 variaciones o ajustá algún detalle del prompt.

## Después de generar cada imagen

1. Descarga el archivo.
2. Renómbralo exactamente como el `slug` del personaje (ej. `amaterasu.jpg`).
3. Guárdalo en una carpeta local `mitologia-japonesa/` — cuando tengas todos, avisame y los
   subo al sitio.

## Portada — `portada-fondo.jpg`

Fondo de la tapa del libro (flipbook y PDF): un degradado oscuro se aplica encima por CSS, más
fuerte hacia abajo, para que el título dorado se lea bien — por eso el prompt evita poner
detalle importante en la mitad inferior. Proporción recomendada: vertical alta (9:16 o 1:2).

```
Semi-realistic fantasy digital painting, epic wide vertical composition, dramatic dusk lighting with a deep crimson and indigo sky, silhouette of a towering torii gate standing at the edge of a calm sea, Mount Fuji rising snow-capped in the misty distance, cherry blossom petals drifting on the wind, a colossal full moon glowing behind layered storm clouds painted in the style of classical Japanese ukiyo-e woodblock art, faint golden clouds (kirikane style) framing the upper sky, atmospheric haze, painterly rendering, highly detailed digital art, trending on artstation, cinematic wide dynamic range, no text or writing anywhere in the image, no visible human figures, crowds or faces, keep the lower half of the frame calm, dark and uncluttered (it will be covered by a title later), deep crimson and indigo and warm gold color palette, sense of ancient sacred mystery at the edge between sea and sky
```

Después de generarla: renómbrala `portada-fondo.jpg` y guárdala junto con los personajes, en
la carpeta `mitologia-japonesa/`.

## El emblema (`portada-emblema.png`)

No hace falta pedírselo a Gemini — lo genero yo mismo con código (mismo método que los otros
libros: SVG + Puppeteer, un solo ícono sólido dorado más un anillo de marcas). Para Japonesa
voy a usar el crisantemo de dieciséis pétalos (菊花紋章), el símbolo imperial japonés más
reconocible, coherente con que buena parte del libro gira en torno al linaje de Amaterasu.

## Nota sobre personajes sin forma humana o híbridos

Llevan `NOT human, NOT humanoid, no human face, no human anatomy` incorporado directo en su
prompt: **Yamata-no-Orochi**, **Nue**, **Namazu** y el **Baku** (criaturas puramente animales o
quiméricas sin torso humano). **Kappa**, **Tengu**, **Oni**, **Tsuchigumo** y **Rokurokubi** son
híbridos humanoides (conservan anatomía humana parcial). Varios kami masculinos llevan la
aclaración `a MALE deity` explícita en el prompt para evitar que Gemini los genere como mujeres
por defecto (ver la corrección hecha antes con Kukulkán en el libro Maya).

---

## Dioses (15)

### Amaterasu — `amaterasu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic radiant lighting, a graceful regal FEMALE build, an elaborate twelve-layered junihitoe court kimono in white and gold with sun-ray patterns, an ornate golden crown with hanging beaded strands, holding a round bronze mirror radiating blazing sunlight, a halo of golden sunbeams behind her head, wisps of clouds parting around her in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, blazing gold and warm white and soft crimson color palette, the supreme sun goddess radiating overwhelming light, serene and majestic Save the generated image file as "amaterasu.jpg".
```

### Susanoo — `susanoo.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic stormy lighting, a MALE deity, a powerful muscular build with a wild windswept build, layered samurai-style armor in deep sea blue and storm grey, wielding a long straight sword dripping with rain, crashing ocean waves and dark storm clouds swirling around him, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, storm blue and foam white and deep grey color palette, an impetuous storm god mid-tempest, fierce and untamed, unmistakably male Save the generated image file as "susanoo.jpg".
```

### Tsukuyomi — `tsukuyomi.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), cool pale moonlight lighting, a MALE deity, a slender elegant build, dark formal court robes patterned with silver crescent moons, a straight ceremonial sword at his hip, an aura of pale blue moonlight surrounding him, a full moon glowing directly behind his head, a quiet night sky in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, silver moonlight and deep indigo and pale blue color palette, an enigmatic distant moon god, calm and unreadable, unmistakably male Save the generated image file as "tsukuyomi.jpg".
```

### Inari — `inari.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), warm dramatic lighting, an androgynous graceful build, flowing white and vermilion robes patterned with rice stalks, a tall court headdress, two white fox (kitsune) spirits sitting attentively at either side, holding a sheaf of golden rice, a tunnel of endless vermilion torii gates fading into the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, vermilion red and golden rice and warm white color palette, a serene deity of abundance and harvest, benevolent and ageless Save the generated image file as "inari.jpg".
```

### Raijin — `raijin.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic lightning-lit chiaroscuro, a MALE deity, a muscular demonic build with dark blue-grey skin, wild hair, sharp claws and fangs, a ring of small taiko drums encircling his body like a halo carried on his back, gripping drumsticks mid-strike, crackling lightning bolts arcing between the drums, storm clouds swirling in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, storm grey and electric white and deep indigo color palette, a ferocious thunder god mid-strike, wild and explosive, unmistakably male Save the generated image file as "raijin.jpg".
```

### Fujin — `fujin.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic windswept lighting, a MALE deity, a muscular demonic build with pale green skin, wild hair streaming sideways, carrying an enormous cloth sack knotted at both ends over his shoulders, wind visibly howling from the open bag, storm clouds and swirling gusts in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pale jade green and storm grey and soft white color palette, a wild wind god unleashing gales from his sack, dynamic and untamed, unmistakably male Save the generated image file as "fujin.jpg".
```

### Hachiman — `hachiman.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a MALE deity, a powerful warrior build in ornate samurai armor (ō-yoroi) with gold accents, holding a long bow and a quiver of arrows, a white dove perched on one shoulder, a war banner with eight tomoe emblems fluttering in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep crimson and gold and warm bronze color palette, a stern noble war god protecting only just causes, disciplined and resolute Save the generated image file as "hachiman.jpg".
```

### Ebisu — `ebisu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), warm cheerful lighting, a MALE deity, a plump jovial build, simple fine court robes and a tall black eboshi hat, a wide permanent smile, holding a fishing rod in one hand and a large red tai fish tucked under the other arm, a small wooden boat and calm sea in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm coral red and soft gold and sea blue color palette, the smiling god of fishermen and good fortune, jolly and approachable Save the generated image file as "ebisu.jpg".
```

### Daikokuten — `daikokuten.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), warm golden lighting, a MALE deity, a robust stocky build, simple dark court robes, a round soft cap, standing atop two large bales of rice, carrying a bulging treasure sack over one shoulder, holding a small golden mallet raised to strike, scattered gold coins in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm gold and deep brown and soft cream color palette, a jolly generous god of wealth and abundance, warm and prosperous Save the generated image file as "daikokuten.jpg".
```

### Benzaiten — `benzaiten.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), elegant flowing lighting, a graceful FEMALE build, ornate flowing celestial robes in white and turquoise, playing a biwa lute cradled in her arms, a small white serpent coiled gently around one wrist, standing at the edge of a tranquil lake with a small torii-topped island in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, turquoise blue and soft white and pale gold color palette, an elegant goddess of music, water and eloquence, serene and inspired Save the generated image file as "benzaiten.jpg".
```

### Bishamonten — `bishamonten.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a MALE deity, a powerful armored build in ornate Buddhist guardian armor, holding a small golden pagoda in one hand and a halberd in the other, a fierce protective glare, storm clouds over a northern mountain in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep crimson and gold and stone grey color palette, a stern guardian deity of the north, disciplined and incorruptible, unmistakably male Save the generated image file as "bishamonten.jpg".
```

### Konohanasakuya-hime — `konohanasakuya-hime.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), soft dreamlike lighting, a graceful youthful FEMALE build, an elegant kimono covered in blooming cherry blossom patterns, cherry petals drifting and swirling around her, standing before snow-capped Mount Fuji at dawn, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, soft pink blossom and snow white and pale gold color palette, a radiant goddess of fleeting beauty, delicate yet quietly resolute Save the generated image file as "konohanasakuya-hime.jpg".
```

### Ryūjin — `ryujin.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic underwater lighting, a MALE deity, a powerful regal build wrapped partially in the coiling body of a great sea dragon, jade and coral ornaments, holding two glowing tide jewels, an underwater palace of red and white coral in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep ocean teal and coral red and pearl white color palette, a majestic dragon king of the sea, ancient and commanding, unmistakably male Save the generated image file as "ryujin.jpg".
```

### Tenjin — `tenjin.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic chiaroscuro lighting, a MALE deity, a dignified scholarly build, formal Heian-era court robes, holding a writing brush and a branch of blooming plum blossoms, an ox lying calmly at his feet, faint lightning crackling in a stormy sky in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep indigo and plum blossom pink and gold color palette, a dignified scholar-god of learning, wise and composed, unmistakably male Save the generated image file as "tenjin.jpg".
```

### Sarutahiko — `sarutahiko.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic radiant lighting, a MALE deity, a tall powerful build, a bright red face with an extremely long nose, wild eyebrows, ornate ancient ceremonial robes, holding a long spear, standing at a glowing celestial crossroads illuminating both sky and earth simultaneously, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, vermilion red and gold and soft white color palette, an imposing guide deity lighting the way between worlds, proud and welcoming, unmistakably male Save the generated image file as "sarutahiko.jpg".
```

---

## Titanes / Primordiales (5)

### Izanagi — `izanagi.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic celestial lighting, a MALE deity, a powerful dignified build, ancient flowing primordial robes, holding a long jeweled spear dripping with seawater, standing on the Floating Bridge of Heaven above a churning primordial ocean, a newly formed island emerging from the water below in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep ocean teal and celestial gold and soft white color palette, the primordial father god shaping the world with his spear, powerful and deliberate, unmistakably male Save the generated image file as "izanagi.jpg".
```

### Izanami — `izanami.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic celestial lighting, a graceful FEMALE build, ancient flowing primordial robes, standing beside a great celestial pillar, gentle light surrounding her form, a newly formed island and calm primordial sea in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm gold and soft teal and pale ivory color palette, the primordial mother goddess who gave birth to the islands of Japan, serene and nurturing Save the generated image file as "izanami.jpg".
```

### Kunitokotachi — `kunitokotachi.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic primordial lighting, a MALE deity, a tall formless-edged build with a body that seems to emerge directly from reeds and mist, ancient bark-like textured robes, standing at the exact boundary where a chaotic swirling sky separates from newly solid earth, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, earthy green and misty grey and pale gold color palette, the first deity to take solid form as heaven and earth divide, ancient and foundational, unmistakably male Save the generated image file as "kunitokotachi.jpg".
```

### Ame-no-Minakanushi — `ame-no-minakanushi.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic celestial lighting, a MALE deity, an abstract regal build partially dissolving into pure starlight at the edges, simple luminous robes, standing motionless at the exact center of a vast swirling star field, no ground visible beneath him, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep cosmic indigo and starlight white and faint gold color palette, the silent central master of the heavens, still and absolute, unmistakably male Save the generated image file as "ame-no-minakanushi.jpg".
```

### Takamimusubi — `takamimusubi.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic celestial lighting, a MALE deity, a dignified elder build, formal ancient celestial robes, holding a glowing red thread that stretches upward into the sky and downward toward the earth, standing within the heavenly assembly hall of Takamagahara in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm gold and deep celestial blue and soft crimson color palette, a strategist deity weaving the threads of divine destiny, composed and authoritative, unmistakably male Save the generated image file as "takamimusubi.jpg".
```

---

## Héroes (10)

### Ninigi — `ninigi.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic celestial descending lighting, a MALE deity, a young regal build, fine ceremonial court robes, holding a bronze mirror, a straight sword and a curved jewel (the Three Sacred Treasures), descending through parting clouds toward a mountain peak below, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm gold and soft cloud white and deep green color palette, the celestial grandson descending to found the imperial line, solemn and determined, unmistakably male Save the generated image file as "ninigi.jpg".
```

### Yamato Takeru — `yamato-takeru.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic battle lighting, a MALE warrior, a powerful youthful build, ornate ancient Japanese armor, wielding a straight sacred sword, a burning field of dry grass being cut back by the wind around him, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep crimson fire and bronze armor and ash grey color palette, a fierce young warrior prince surviving flame and blade alike, restless and formidable, unmistakably male Save the generated image file as "yamato-takeru.jpg".
```

### Momotarō — `momotaro.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), warm heroic lighting, a MALE youth, a determined youthful build, simple traveling clothes with a banner reading no legible text tied to his back bearing a peach motif, gripping a short sword, a loyal dog, monkey and pheasant standing beside him, a distant demon fortress on a rocky island in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm peach pink and earthy brown and sky blue color palette, a brave peach-born boy leading his animal companions to battle, courageous and kind, unmistakably male Save the generated image file as "momotaro.jpg".
```

### Urashima Tarō — `urashima-taro.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic underwater-surface lighting, a MALE young fisherman, a humble build, simple fisherman's clothing, kneeling beside a great sea turtle at the shoreline, an ornate small lacquered box tucked under one arm, a glowing coral palace faintly visible beneath the waves in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep ocean teal and warm coral and soft gold color palette, a kind young fisherman bound for a fate beyond time, gentle and curious, unmistakably male Save the generated image file as "urashima-taro.jpg".
```

### Kintarō — `kintaro.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), warm forest lighting, a MALE child, a stocky powerfully built young boy, a bright red bib marked with a simple kanji-style character across his chest, wild dark hair, gripping a huge axe over one shoulder with ease, a bear and a monkey playing beside him in a mountain forest in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, forest green and bright red and warm brown color palette, a superhumanly strong mountain child at home among wild animals, joyful and fearless, unmistakably male Save the generated image file as "kintaro.jpg".
```

### Jimmu — `jimmu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic golden lighting, a MALE deity-king, a powerful regal build, ancient ceremonial armor and robes, holding a ceremonial bow, a three-legged crow (Yatagarasu) flying just ahead guiding the way, misty mountain passes in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm gold and deep forest green and bronze color palette, the legendary first emperor guided toward his destined throne, resolute and destined, unmistakably male Save the generated image file as "jimmu.jpg".
```

### Otohime — `otohime.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic underwater lighting, an elegant FEMALE build, a flowing gown patterned with fish scales and coral motifs, an ornate coral and pearl crown, standing within a grand palace of red and white coral beneath the sea, schools of colorful fish drifting in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, coral red and pearl white and deep ocean teal color palette, the gracious princess of the dragon palace beneath the waves, warm and regal Save the generated image file as "otohime.jpg".
```

### Hoori — `hoori.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic lighting, a MALE prince, a lean hunter's build, fine hunting garments, holding two glowing tide jewels in cupped hands, a recovered fishhook glinting at his belt, a mountain forest fading into ocean waves in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, forest green and ocean teal and warm gold color palette, the hunter prince who mastered the tides of the sea, determined and quietly powerful, unmistakably male Save the generated image file as "hoori.jpg".
```

### Hoderi — `hoderi.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic seaside lighting, a MALE prince, a lean fisherman's build, fine fishing garments, holding a fishing rod and net, standing on rocks at the edge of the sea, waves crashing dramatically in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, ocean blue and warm sand and coral color palette, the proud fisherman prince humbled by the tides, stubborn pride giving way to reluctant respect, unmistakably male Save the generated image file as "hoderi.jpg".
```

### Issun-bōshi — `issun-boshi.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), whimsical warm lighting, a MALE tiny warrior barely the height of a finger, a tiny determined figure, a sewing needle held like a sword at his hip, a rice-straw sheath, standing confidently atop a small soup bowl boat with a chopstick oar, a vast tatami floor stretching into the misty background at giant scale around him, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm rice-paper cream and small needle silver and soft gold color palette, a fearless miniature warrior undaunted by his size, bold and clever, unmistakably male Save the generated image file as "issun-boshi.jpg".
```

---

## Monstruos (12)

### Yamata-no-Orochi — `yamata-no-orochi.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic ominous lighting, NOT human, NOT humanoid, no human face, no human anatomy, a colossal eight-headed, eight-tailed serpent sprawling across eight valleys and hills at once, eyes glowing red like cherries, moss and pine trees growing along its immense coiled back, eight large sake vats faintly visible beneath its lowered heads in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep serpent green and blood red and murky brown color palette, a monstrous primordial serpent about to fall into a drunken stupor, immense and terrifying Save the generated image file as "yamata-no-orochi.jpg".
```

### Tsuchigumo — `tsuchigumo.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic dark lighting, a monstrous hybrid with a distorted humanoid torso fused to a massive spider body with multiple long segmented legs, an unsettling almost-human face with fangs, thick webbing draped across a hidden underground lair in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, obsidian black and sickly grey and dull red color palette, a monstrous spider yokai lurking in ambush, patient and predatory Save the generated image file as "tsuchigumo.jpg".
```

### Nue — `nue.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic nocturnal lighting, NOT human, NOT humanoid, no human face, no human anatomy, a chimeric creature with the head of a monkey, the body of a tanuki, the legs and claws of a tiger, and a serpent for a tail, perched on a palace rooftop under a black cloud at night, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, midnight black and sickly amber and pale grey color palette, an ominous chimera whose cry foretells misfortune, eerie and unnatural Save the generated image file as "nue.jpg".
```

### Kappa — `kappa.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic riverside lighting, a small humanoid amphibious creature with greenish scaled skin, a turtle-like shell on its back, a duck-like beak, webbed clawed hands, a shallow water-filled dish set into the top of its head, crouched at the edge of a river holding a cucumber, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, murky river green and shell brown and pale water blue color palette, a mischievous water imp caught between danger and comic courtesy, sly and unpredictable Save the generated image file as "kappa.jpg".
```

### Tengu — `tengu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic mountain lighting, a humanoid mountain spirit with a bright red face and an extremely long nose, wearing the robes and small black cap of a yamabushi ascetic monk, large feathered wings folded at his back, holding a large feathered fan, standing on a rocky sacred mountain peak in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, vermilion red and forest green and gold color palette, a proud guardian spirit of the sacred mountains, stern and formidable Save the generated image file as "tengu.jpg".
```

### Oni — `oni.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic fierce lighting, a hulking demon with bright red skin, two sharp curved horns, prominent fangs, wild black hair, wearing only a tiger-pelt loincloth, gripping a massive spiked iron club (kanabō) over one shoulder, a cracked stone ground in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, blood red and iron grey and tiger stripe orange color palette, a fearsome demon radiating raw brute strength, savage and imposing Save the generated image file as "oni.jpg".
```

### Yuki-onna — `yuki-onna.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), cold ethereal lighting, a hauntingly beautiful FEMALE spirit with pale ice-white skin, long black hair, a pure white kimono blending into a snowstorm around her, breath visible as freezing mist, standing motionless in a heavy snowfall at night, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pale ice white and deep midnight blue and soft silver color palette, a beautiful and deadly spirit of the winter snow, serene and lethal Save the generated image file as "yuki-onna.jpg".
```

### Rokurokubi — `rokurokubi.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic nocturnal lighting, an ordinary-looking woman by day, at night her neck stretching unnaturally long and serpentine, her head floating apart from her sleeping body illuminated by a small lantern, a dim traditional house interior in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep shadow black and pale skin tone and warm lantern amber color palette, an unsettling yokai whose true nature only shows after dark, eerie and quietly tragic Save the generated image file as "rokurokubi.jpg".
```

### Tamamo-no-Mae — `tamamo-no-mae.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic opulent court lighting, a stunningly beautiful FEMALE courtesan in elaborate Heian-era court robes, nine golden-white fox tails fanning out dramatically behind her, sharp knowing fox eyes, an imperial palace hall in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, golden fox fur and deep imperial crimson and pale ivory color palette, a bewitching nine-tailed fox spirit disguised as flawless court beauty, elegant and quietly menacing Save the generated image file as "tamamo-no-mae.jpg".
```

### Namazu — `namazu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic subterranean lighting, NOT human, NOT humanoid, no human face, no human anatomy, a colossal catfish with long whiskers coiled beneath the entire landscape, a small sacred stone pinning down the point where its head meets its tail, cracks of shaking earth radiating outward, dim underground caverns in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, murky brown and stone grey and dull gold color palette, a colossal catfish whose slightest movement shakes the earth, restless and immense Save the generated image file as "namazu.jpg".
```

### Baku — `baku.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic soft nocturnal lighting, NOT human, NOT humanoid, no human face, no human anatomy, a gentle chimeric creature with an elephant-like trunk, a bear's body, a tiger's legs, and an ox tail, standing calmly beside a sleeping child's futon at night, faint wisps of dark dream-smoke being inhaled through its trunk, a softly lit bedroom in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, soft indigo night and warm lantern gold and pale grey color palette, a benevolent dream-eating spirit consuming a nightmare, gentle and protective Save the generated image file as "baku.jpg".
```

### Shuten-dōji — `shuten-doji.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic fierce firelit lighting, a massive demon lord with red skin, both a childlike and monstrous face at once, long wild hair, ornate dark robes over a muscular frame, gripping a large cup of sake in one hand and a heavy iron club in the other, a mountain fortress hall lit by torches in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, blood red and torchlight orange and iron black color palette, the terrifying supreme lord of all oni, gluttonous and merciless Save the generated image file as "shuten-doji.jpg".
```

---

## Mortales (5)

### Emperatriz Jingū — `jingu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic naval battle lighting, a FEMALE warrior empress, a strong regal build, ornate campaign armor over fine robes, a stone visibly tied at her waist beneath her armor, holding two glowing tide jewels, a fleet of ships crossing a controlled sea in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep ocean blue and warrior bronze and gold color palette, a fierce pregnant warrior empress commanding the tides of war, resolute and formidable Save the generated image file as "jingu.jpg".
```

### Watanabe no Tsuna — `watanabe-no-tsuna.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic nocturnal lighting, a MALE samurai, a disciplined lean build, fine dark samurai armor, gripping a drawn sword with a severed demon arm clutched in his other hand, the looming dark silhouette of the Rashōmon gate in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, obsidian black and steel grey and deep crimson color palette, an unshakeable samurai who cut down a demon in the dark, calm and disciplined, unmistakably male Save the generated image file as "watanabe-no-tsuna.jpg".
```

### Minamoto no Yorimitsu — `minamoto-no-yorimitsu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic heroic lighting, a MALE samurai commander, a strong composed build, fine ornate samurai armor, gripping a bloodied sword, a severed demon head trophy wrapped and bound at his side, a mountain fortress burning in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep crimson and steel grey and torch gold color palette, the legendary demon-slaying commander after his greatest victory, stoic and formidable, unmistakably male Save the generated image file as "minamoto-no-yorimitsu.jpg".
```

### Abe no Seimei — `abe-no-seimei.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), dramatic mystical lighting, a MALE onmyōji sorcerer, a slender elegant build, fine white and indigo court robes, holding ofuda paper talismans fanned between his fingers, a glowing five-pointed star (gobōsei) seal floating before him, faint translucent shikigami spirits swirling in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep indigo and pale silver and soft white color palette, the legendary sorcerer commanding unseen spirits, composed and otherworldly, unmistakably male Save the generated image file as "abe-no-seimei.jpg".
```

### Takenouchi no Sukune — `takenouchi-no-sukune.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, vertical portrait orientation (taller than wide, aspect ratio approximately 2:3), warm dignified lighting, a MALE elder minister, an extremely aged but upright build, an extraordinarily long flowing white beard, fine formal court robes, holding a wooden staff in one hand and cradling an infant gently in the other arm, a grand imperial court hall in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm ivory and soft gold and deep court crimson color palette, an ancient loyal minister who served five emperors, wise and enduring, unmistakably male Save the generated image file as "takenouchi-no-sukune.jpg".
```
