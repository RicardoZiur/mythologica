# Prompts para generar los retratos de personajes de Mitología China con Gemini

Mismo formato que los libros anteriores: un prompt por personaje, retrato de cuerpo completo,
formato vertical. Se generan con **Gemini** — pega el prompt completo directo en el chat. Si
el resultado no convence, pedile a Gemini 2-3 variaciones o ajustá algún detalle del prompt.

## Después de generar cada imagen

1. Descarga el archivo.
2. Renómbralo exactamente como el `slug` del personaje (ej. `sun-wukong.jpg`).
3. Guárdalo en una carpeta local `mitologia-china/` — cuando tengas todos, avisame y los subo
   al sitio.

## Portada — `portada-fondo.jpg`

Fondo de la tapa del libro (flipbook y PDF): un degradado oscuro se aplica encima por CSS, más
fuerte hacia abajo, para que el título dorado se lea bien. Proporción recomendada: vertical
alta (9:16 o 1:2).

```
Semi-realistic fantasy digital painting, epic wide vertical composition, dramatic dusk lighting with a deep crimson and jade sky, silhouette of misty jagged karst mountains layered into the distance in the style of classical Chinese ink painting, a great coiled dragon shape faintly visible winding through the clouds near the upper sky, a calm river reflecting the sky in the foreground, drifting mist between the peaks, atmospheric haze, painterly rendering, highly detailed digital art, trending on artstation, cinematic wide dynamic range, no text or writing anywhere in the image, no visible human figures, crowds or faces, keep the lower half of the frame calm, dark and uncluttered (it will be covered by a title later), deep crimson red and jade green and warm gold color palette, sense of ancient mythic grandeur across misty mountains
```

Después de generarla: renómbrala `portada-fondo.jpg` y guárdala junto con los personajes, en
la carpeta `mitologia-china/`.

## El emblema (`portada-emblema.png`)

No hace falta pedírselo a Gemini — lo genero yo mismo con código (mismo método que los otros
libros). Para China voy a usar un dragón chino enroscado en círculo (long), el símbolo más
reconocible de la mitología china y presente en varias de las historias del libro (Ryūjin no
existe acá, pero sí Sun Wukong, Ao Guang y el propio motivo del dragón imperial).

## Nota sobre personajes sin forma humana o híbridos

Llevan `NOT human, NOT humanoid, no human face, no human anatomy` incorporado directo en su
prompt: **Taotie**, **Qiongqi**, **Taowu** (los Cuatro Perils sin Hundun, que aparece como
figura ligeramente antropomorfa), **Xiangliu** y **Yayu** (criaturas puramente animales o
monstruosas). **Hundun**, **Nian**, **Jiangshi**, **Huli Jing** y **Shan Xiao** son híbridos o
conservan cierta forma humanoide. Varios dioses masculinos llevan `a MALE deity` explícito para
evitar que Gemini los genere como mujeres por defecto.

---

## Dioses (15)

### Yu Huang — `yu-huang.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic celestial lighting, a MALE deity, an elderly dignified regal build, elaborate imperial dragon robes in deep gold and crimson, a beaded imperial crown with hanging strands (mianguan), seated upon a celestial throne carved with clouds and dragons, a vast heavenly court fading into golden mist in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, imperial gold and deep crimson and soft cloud white color palette, the supreme sovereign of heaven presiding over the cosmic bureaucracy, serene and absolute, unmistakably male
```

### Xi Wangmu — `xi-wangmu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic celestial lighting, a regal FEMALE build, elaborate flowing court robes in deep purple and gold phoenix patterns, an ornate crown, holding a branch heavy with glowing pink peaches, a phoenix perched nearby, the misty peaks of Mount Kunlun in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep purple and peach pink and soft gold color palette, the supreme queen mother of the west, guardian of immortality, majestic and serene
```

### Guanyin — `guanyin.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, soft radiant lighting, a serene graceful FEMALE build, flowing white and gold robes, multiple gentle arms fanned behind her like a halo, holding a vase of pure water and a willow branch, standing on a single lotus blossom floating on calm water, soft clouds in the misty background, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pure white and soft gold and pale lotus pink color palette, the bodhisattva of infinite compassion, serene and boundlessly gentle
```

### Erlang Shen — `erlang-shen.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chiaroscuro lighting, a MALE deity, a powerful warrior build in ornate golden armor, a third vertical eye glowing in the center of his forehead, gripping a three-pointed double-edged spear, a fierce celestial hound standing alert beside him, misty mountain peaks in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep bronze and jade green and gold color palette, the fierce demon-hunting god of three eyes, vigilant and formidable, unmistakably male
```

### Zhurong — `zhurong.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic firelit lighting, a MALE deity, a powerful build with a human face atop a partially beast-like frame, ornate flame-patterned robes, riding two coiling fire dragons, roaring flames swirling around him in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, blazing red and molten orange and deep gold color palette, the fierce god of fire commanding twin dragons, intense and radiant, unmistakably male
```

### Leigong — `leigong.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic lightning-lit lighting, a bird-like demonic MALE figure with a hawk's beak-like face, blue-grey skin, sharp claws, feathered wings on his back, a ring of small drums encircling him, gripping mallets mid-strike, storm clouds in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, storm grey and electric white and deep indigo color palette, the fierce Duke of Thunder executing celestial justice, wild and formidable, unmistakably male
```

### Dianmu — `dianmu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic lightning-lit lighting, an elegant FEMALE build, flowing brightly colored silk robes, holding a glowing bronze mirror in each hand casting flashes of light, standing amid storm clouds crackling with light, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, electric white and deep storm indigo and soft gold color palette, the elegant Mother of Lightning revealing truth before the thunder falls, sharp and luminous
```

### Caishen — `caishen.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, warm golden lighting, a MALE deity, a dignified robust build, fine formal court robes with gold thread, holding a golden ingot in one hand and a ruyi scepter in the other, surrounded by scattered gold coins and treasure chests in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm gold and deep crimson and soft bronze color palette, the generous god of wealth and prosperity, warm and abundant, unmistakably male
```

### Tudigong — `tudigong.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, warm gentle lighting, a MALE deity, a kindly elderly build, simple humble robes, a long white beard, a warm approachable smile, holding a small wooden staff, standing before a small modest roadside shrine in a rice paddy in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm earthy brown and rice paddy green and soft gold color palette, the humble beloved guardian of a single village or plot of land, gentle and approachable, unmistakably male
```

### Yan Wang — `yan-wang.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic dark chiaroscuro lighting, a MALE deity, a stern imposing build, formal judicial imperial robes in black and deep red, an ornate judge's hat, holding a massive ledger book of the dead, seated upon a shadowy underworld throne in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, obsidian black and deep crimson and pale gold color palette, the impartial supreme judge of the dead, severe and utterly fair, unmistakably male
```

### Mazu — `mazu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic seaside lighting, a serene FEMALE build, ornate red and gold ceremonial robes, a beaded imperial-style headdress, standing on a rocky coastal cliff, two fierce guardian generals with sharp eyes and ears flanking her at a distance, a fleet of small ships safely crossing calm seas in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep ocean blue and warm red and soft gold color palette, the protective goddess of the sea watching over sailors, calm and vigilant
```

### Chang'e — `chang-e.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, cool ethereal moonlight lighting, a graceful FEMALE build, flowing pale silk robes with subtle silver embroidery, long flowing sleeves drifting weightlessly, a small white jade rabbit beside her, standing within a frozen palace of pale stone on the moon, Earth faintly visible glowing far below in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pale silver moonlight and soft white and cool blue color palette, the lonely goddess of the moon gazing down at the world she left behind, serene and melancholic
```

### Zao Jun — `zao-jun.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, warm domestic firelit lighting, a MALE deity, a modest dignified build, simple household official robes, holding a small scroll of records, standing beside a warm kitchen hearth fire in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm hearth orange and soft brown and pale gold color palette, the quiet observant god of the household kitchen, watchful and dutiful, unmistakably male
```

### Yue Lao — `yue-lao.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, soft moonlit lighting, a MALE deity, an elderly gentle build, long flowing white beard, simple scholarly robes, holding a large book of destined marriages in one hand and a bundle of glowing red thread in the other, standing beneath a full moon in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, soft moonlight silver and warm red thread and pale gold color palette, the wise old matchmaker binding fated lovers together, gentle and all-knowing, unmistakably male
```

### Wenchang Wang — `wenchang-wang.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic scholarly lighting, a MALE deity, a dignified scholarly build, fine formal court robes, holding a writing brush and a scroll, a small star constellation glowing faintly above his head, stacks of books and examination papers in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep indigo and warm ink black and soft gold color palette, the patron god of literature and examinations, composed and wise, unmistakably male
```

---

## Titanes / Primordiales (5)

### Pangu — `pangu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic cosmic lighting, a MALE giant, a colossal muscular build, simple primal wrappings, gripping a massive stone axe, standing with arms raised pushing apart swirling golden sky above and dark earth below, fragments of a cracked cosmic egg shell scattered in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, cosmic gold and deep earth brown and soft void black color palette, the primordial giant separating heaven and earth with sheer effort, immense and eternal, unmistakably male
```

### Nüwa — `nuwa.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic celestial lighting, a graceful FEMALE build with a human torso fused to a long serpent's tail, ornate primordial jewelry, holding a glowing molten stone of five colors, patching a visible crack in the sky above her, a newly formed landscape in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm amber gold and jade green and soft five-colored glow palette, the primordial creator goddess mending the broken sky, powerful and nurturing
```

### Fuxi — `fuxi.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic celestial lighting, a MALE deity with a human torso fused to a long serpent's tail intertwined with Nüwa's, ornate primordial robes, holding a carved tablet marked with the eight trigrams, a mystical tortoise emerging from a river in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm amber gold and deep river blue and soft jade color palette, the first sovereign reading the patterns of the cosmos, wise and contemplative, unmistakably male
```

### Gonggong — `gonggong.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic chaotic lighting, a MALE deity with a human face, wild red hair, and a long serpent's body coiling beneath him, riding a dark dragon, floodwaters churning violently around him, a distant mountain pillar cracking in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, storm grey and flood blue and deep crimson color palette, the rebellious god of chaotic floodwaters mid-fury, wild and untamed, unmistakably male
```

### Hundun — `hundun.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic primordial lighting, NOT human, NOT humanoid, no human face, no human anatomy, a glowing formless yellow sack-like being with six stubby legs and four small wings, completely faceless with no eyes, ears, nose or mouth, floating in a swirling void of pure chaos, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, glowing amber yellow and deep void black and soft grey color palette, the primordial embodiment of formless chaos before any order existed, strange and complete in its own way
```

---

## Héroes (10)

### Sun Wukong — `sun-wukong.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic dynamic lighting, a MALE monkey-humanoid, a lean muscular build covered in golden-brown fur, a monkey face with sharp intelligent eyes, wearing golden armor and a phoenix-feather cap, gripping a long iron staff that narrows at both ends, standing atop a swirling cloud, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm gold and deep bronze and jade green color palette, the mischievous and powerful Monkey King mid-leap, fierce and irrepressible, unmistakably male
```

### Houyi — `houyi.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic heroic lighting, a MALE archer, a powerful athletic build, fine ancient warrior garments, drawing a great bow aimed skyward, nine falling suns like golden crows tumbling from a blazing sky in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, blazing gold and deep crimson and warm bronze color palette, the divine archer saving the world from nine burning suns, focused and resolute, unmistakably male
```

### Yu el Grande — `yu-el-grande.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic determined lighting, a MALE hero, a weathered strong build, simple practical work robes, holding a large digging tool, standing knee-deep in a controlled canal with floodwaters receding around him, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, earthy brown and river blue and warm gold color palette, the tireless engineer who tamed the great flood, exhausted but unyielding, unmistakably male
```

### Nezha — `nezha.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dynamic dramatic lighting, a MALE child warrior, a lean youthful build, simple red silk sash wrapped around his torso, standing on two glowing wind-and-fire wheels, gripping a flaming spear, ribbons of red silk flowing around him mid-flight, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, blazing red and molten gold and soft cloud white color palette, the fearless child god defying heaven and sea alike, bold and rebellious, unmistakably male
```

### Otohime — `otohime.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic historical lighting, a young FEMALE spirit, a graceful ethereal build with a coral-red gown, long hair streaming like feathers, transformed mid-flight into a great white crane, an autumn field in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm coral red and pure white and soft autumn gold color palette, a grateful crane spirit repaying a debt of kindness, gentle and quietly sorrowful
```

### Jing Wei — `jing-wei.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic determined lighting, NOT human, NOT humanoid, no human face, no human anatomy, a small bird with mottled dark head plumage, a white beak, and bright red legs, carrying a tiny pebble in its beak, flying resolutely over a vast churning ocean in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep ocean blue and warm earth brown and soft white color palette, a small determined bird endlessly attempting to fill the sea, tiny and unshakeably resolute
```

### Kuafu — `kuafu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic scorching lighting, a MALE giant, a colossal muscular build, simple primal wrappings, gripping a massive wooden staff, running with desperate determination beneath a blazing sun low on the horizon, a dried riverbed in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, blazing orange sun and cracked earth brown and dusty gold color palette, a giant desperately chasing the sun itself, exhausted yet unwilling to stop, unmistakably male
```

### Bai Suzhen — `bai-suzhen.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic elegant lighting, a beautiful FEMALE figure in flowing white silk robes, pale luminous skin, a faint serpentine shimmer beneath her clothing, standing at the edge of the West Lake beneath willow trees, misty water in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, pure white and soft jade green and pale silver color palette, an ancient serpent spirit who became a devoted wife, elegant and quietly powerful
```

### Zhinu — `zhinu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic celestial lighting, a graceful FEMALE build, an elegant flowing celestial gown woven from shimmering cloud-silk, seated at a heavenly loom, threads of starlight running through her fingers, the Milky Way glowing behind her in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, silver starlight and soft cloud white and pale gold color palette, the celestial weaver princess longing for her distant love, serene yet wistful
```

### Niulang — `niulang.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, warm pastoral lighting, a MALE peasant, a humble sturdy build, simple worn farming clothes, standing beside a loyal old ox, holding two small baskets balanced on a shoulder pole, a wide starry sky beginning to appear in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm earthy brown and soft starlight and pale gold color palette, a humble devoted farmer gazing toward the heavens for his lost love, gentle and steadfast, unmistakably male
```

### Huangdi — `huangdi.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic imperial lighting, a MALE sovereign, a powerful dignified build, ornate ancient royal armor and robes in yellow and bronze, holding a ceremonial sword, standing beside a compass-cart with a figure always pointing south, distant battlefield mist in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, imperial yellow and bronze and deep earth brown color palette, the legendary founding sovereign of Chinese civilization, resolute and visionary, unmistakably male
```

---

## Monstruos (12)

### Nian — `nian.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic nocturnal lighting, a fearsome beast with a lion-like mane and a bull's muscular body, sharp curved horns, glowing eyes, recoiling from a wall of bright red paper decorations and firelight, sparks of firecrackers exploding around it, a dark village in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep midnight black and blazing firecracker red and warm gold color palette, an ancient beast frightened away by red, fire and noise, monstrous yet retreating
```

### Taotie — `taotie.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic ornamental lighting, NOT human, NOT humanoid, no human face, no human anatomy, a symmetrical monstrous devouring face with bulging eyes, curved horns, and an enormous gaping fanged mouth, no body visible beyond the head itself, rendered like an ancient bronze ritual vessel motif come to life, atmospheric haze, centered symmetrical composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, ancient bronze patina green and deep gold and obsidian black color palette, a monstrous symbol of endless gluttony devouring even itself, unsettling and ornate
```

### Jiangshi — `jiangshi.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic eerie moonlit lighting, a stiff reanimated corpse wearing formal Qing dynasty official robes, greenish-grey rigid skin, arms extended stiffly forward, a yellow paper talisman stuck to its forehead, hopping through a misty graveyard in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, sickly green and faded Qing robe blue and pale moonlight color palette, a rigid hopping undead creature drained of color, eerie and unnaturally stiff
```

### Huli Jing — `huli-jing.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic mysterious lighting, a strikingly beautiful FEMALE figure in elegant flowing robes, a faint fox tail and pointed ears subtly visible, sharp knowing amber eyes, standing at the edge of a moonlit forest in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm fox-fur amber and soft moonlight silver and deep forest green color palette, an ancient fox spirit balanced between wisdom and temptation, alluring and enigmatic
```

### Baigujing — `baigujing.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic unsettling lighting, a gaunt demonic figure made of bleached ancient bones barely covered by tattered pale robes, a serene deceptive mask-like face, standing at a crossroads path in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, bone white and pale grey and faint ghostly blue color palette, a bone spirit disguised as an innocent traveler, deceptively gentle yet hollow
```

### Niu Mo Wang — `niu-mo-wang.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic powerful lighting, a massive demon with a bull's head, thick curved horns, a muscular humanoid body in ornate dark armor, gripping a heavy iron rod, a flaming mountain in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep iron black and blazing orange and dull crimson color palette, a powerful bull demon king ruling his fiery domain, formidable and prideful
```

### Qiongqi — `qiongqi.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic ominous lighting, NOT human, NOT humanoid, no human face, no human anatomy, a winged beast with a tiger-like body covered in bristling spines, sharp fangs, dragging a freshly hunted animal toward unseen wicked figures, a barren rocky landscape in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, dull tiger orange and iron grey and dried blood red color palette, a perverse beast that rewards cruelty and devours virtue, unsettling and inverted
```

### Taowu — `taowu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic stubborn ominous lighting, NOT human, NOT humanoid, no human face, no human anatomy, a massive tiger-bodied beast with long shaggy fur, huge protruding tusks, and an unnervingly long tail, standing defiantly and unmoving in a barren landscape in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep tiger brown and dull grey and faint amber color palette, an incorrigibly stubborn beast that never learns from correction, immovable and ancient
```

### Shan Xiao — `shan-xiao.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic forest lighting, a small mischievous spirit covered in shaggy fur with an almost-human face, notably standing on a single leg, crouched near a campfire of burning bamboo, dense southern Chinese forest in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep forest green and warm firelight orange and earthy brown color palette, a mischievous one-legged mountain goblin startled by cracking bamboo, sly and skittish
```

### Chiyou — `chiyou.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic fierce battle lighting, a MALE warlord, a massive muscular build covered in natural armor-like hide, bronze horns curving from his head, gripping crude bronze weapons, thick war fog swirling around him in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, bronze and blood red and thick grey fog color palette, the horned warlord commanding storm and battle fog, ferocious and unbreakable, unmistakably male
```

### Xiangliu — `xiangliu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic toxic lighting, NOT human, NOT humanoid, no human face, no human anatomy, a colossal serpent with nine distinct human-like heads arranged along a single sinuous body, poisonous fumes rising from a swamp beneath it, a ruined landscape in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, sickly toxic green and murky swamp brown and deep venom black color palette, a nine-headed serpent poisoning the earth it touches, immense and corrosive
```

### Yayu — `yayu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic predatory lighting, NOT human, NOT humanoid, no human face, no human anatomy, a monstrous creature with a dragon-like head and the powerful body of an ox, sharp teeth bared, charging across a barren famine-stricken landscape in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, dull ochre and deep dragon green and dusty grey color palette, a ravenous beast devouring everything in a starving land, relentless and feral
```

---

## Mortales (5)

### Meng Jiangnü — `meng-jiangnu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic sorrowful lighting, a grieving FEMALE figure, a simple traveling dress, kneeling beside a crumbling section of a massive grey stone wall, bones faintly visible among the rubble, an overcast sky in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, stone grey and deep sorrow blue and pale ivory color palette, a devastated widow whose grief broke the Great Wall itself, heartbroken and resolute
```

### Zhang Daoling — `zhang-daoling.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic mystical mountain lighting, a MALE Taoist master, a dignified elderly build, flowing Taoist ceremonial robes, holding a jade tablet and a ritual sword, standing before a mountain shrine wreathed in mist in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep indigo and soft mountain mist grey and pale gold color palette, the founding master of organized Taoism receiving divine revelation, serene and authoritative, unmistakably male
```

### Xu Fu — `xu-fu.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic seafaring lighting, a MALE alchemist, a scholarly build, fine formal Qin-era robes, standing at the prow of a large wooden ship, gazing toward three misty mountain silhouettes rising from the sea in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, deep ocean teal and warm ship wood brown and pale misty gold color palette, an alchemist sailing toward legendary islands of immortality, hopeful and resolute, unmistakably male
```

### Bao Zheng — `bao-zheng.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, dramatic severe lighting, a MALE magistrate, a stern dignified build, formal black judicial robes with a red sash, a pale crescent moon mark on his forehead, holding a judicial tablet, seated at an imposing judgment table in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, obsidian black and deep crimson and pale moon white color palette, the incorruptible judge feared by the powerful, stern and utterly fair, unmistakably male
```

### Dong Yong — `dong-yong.jpg`
```
Semi-realistic fantasy digital painting, full body portrait, warm humble lighting, a MALE peasant, a young humble build, simple worn farming clothes, kneeling respectfully beside an elegant celestial weaver at a loom, a small rustic home in the misty background, atmospheric haze, centered composition, highly detailed digital art, painterly rendering, trending on artstation, cinematic lighting, warm earthy brown and soft silk white and pale gold color palette, a devoted filial son rewarded with a fleeting celestial marriage, humble and sincere, unmistakably male
```
