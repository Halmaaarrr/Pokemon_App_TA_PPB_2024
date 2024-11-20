import React from 'react';
import './GalleryPage.css'; // Pastikan Anda menambahkan styling untuk halaman Gallery

const GalleryPage = () => {
  const images = [
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/3bfcc4360c44f37815dc1e59f75818935cbfc41b.png',
      name: 'Mega Venusaur', 
      description: 'Mega Venusaur is a powerful grass/poison-type Pokémon with a large flower on its back.' 
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/285395ca77d82861fd30cea64567021a50c1169c.png',
      name: 'Charmeleon',  
      description: 'Charmeleon is a fire-type Pokémon, known for its fiery tail and fierce nature.' 
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/6b55babb3825ef9fa9e5d9ff44a14bdb8406ce97.png',
      name: 'Venusaur Gigantamax', 
      description: 'Venusaur Gigantamax has a huge flower and even more intense powers when it grows to massive size.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png',
      name: 'Bulbasaur', 
      description: 'Bulbasaur is a Grass/Poison-type Pokémon with a plant bulb on its back that grows as it evolves.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/d0ee81f16175c97770192fb691fdda8da1f4f349.png',
      name: 'Charmander', 
      description: 'Charmander is a Fire-type Pokémon known for the flame on its tail, which burns brighter with its health.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png',
      name: 'Squirtle', 
      description: 'Squirtle is a Water-type Pokémon that uses its powerful squirting water to defend itself and attack opponents.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/ca3db4aad5c85a525d9be86852b26db1db7a22c0.png',
      name: 'Mega Charizard X', 
      description: 'Mega Charizard X is a Fire/Dragon-type Pokémon with enhanced power, a black and blue appearance, and the ability to unleash devastating fire and dragon-based attacks.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/0aa78a0061bda9d88cbb0bbf739cd9cc56522fe9.png',
      name: 'Mega Charizard Y', 
      description: 'Mega Charizard Y is a Fire/Flying-type Pokémon with a bright, fiery appearance and increased special attack power, known for its powerful flames and the Drought ability that intensifies sunlight.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/2fd12098f15628cce80d411e090189aeb7d758ff.png',
      name: 'Charizard Gigantamax', 
      description: 'Charizard Gigantamax is a Fire/Flying-type Pokémon that transforms into a massive, dragon-like form with an enormous fiery tail and the unique G-Max Move "G-Max Wildfire," which deals damage over time while burning opponents.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/2fe157db59153af8abd636ab03c7df6f28b08242.png',
      name: 'Blastoise', 
      description: 'Blastoise is a Water-type Pokémon known for its powerful water cannons mounted on its shell, which it uses to shoot high-pressure water jets in battle.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/00186af714a048895ba8116e71b08671c3cfb8f5.png',
      name: 'Mega Blastoise', 
      description: 'Mega Blastoise is a Water-type Pokémon that gains enhanced firepower with its larger cannons, allowing it to unleash devastating Hydro Cannons during battles.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/50eba0f85c4e9a039be078e7de0b10acc7323264.png',
      name: 'Blastoise Gigantamax', 
      description: 'Blastoise Gigantamax is a Water-type Pokémon that grows to an enormous size, with its cannons becoming even larger and capable of unleashing the G-Max Move "G-Max Hydrosnipe".'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/68f0cec6bcba20a0c53db3d8cfce81bd319d2c82.png',
      name: 'Caterpie', 
      description: 'Caterpie is a tiny, green Bug-type Pokémon known for its large eyes and its ability to evolve into Metapod, which eventually becomes Butterfree.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/05fd4676fa4a4b58288510a97a5211e066e02464.png',
      name: 'Metapod', 
      description: 'Metapod is the cocoon stage of Caterpie, serving as the transitional form before it evolves into Butterfree.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/eacd20285cb634ba9fea41fc0fa13871c2fcbc66.png',
      name: 'Butterfree', 
      description: 'Butterfree is a Bug/Flying-type Pokémon with large, colorful wings, known for its speed and agility as it flits about, spreading spores and powder to incapacitate foes.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/b76026363e301dbd8ac3f084e7d242232c46c95f.png',
      name: 'Butterfree Gigantamax', 
      description: 'Butterfree Gigantamax is a massive version of Butterfree with enhanced wings that creates a storm of poisonous spores as part of its G-Max Move "G-Max Befuddle".'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/dd41f31a3c97f1f9d998361b125362584873157b.png',
      name: 'Kakuna', 
      description: 'Kakuna is the cocoon form of Weedle, serving as a transition before it evolves into Beedrill.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/70f4206271b72492c9ba71d708d6183a80ba0e96.png',
      name: 'Beedrill', 
      description: 'Beedrill is a Bug/Poison-type Pokémon with sharp, dangerous stingers on its arms and its tail, often seen attacking in swarms to protect its nest.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/e12ce48ab99b2df6fbbc1e97038c4f6e192d09d7.png',
      name: 'Mega Beedrill', 
      description: 'Mega Beedrill is a Bug/Poison-type Pokémon with enhanced speed and attack, becoming a much more aggressive and dangerous version of its normal form.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/0e7c6e616404c683f00701b591eeab56e465641a.png',
      name: 'Pidgey', 
      description: 'Pidgey is a Normal/Flying-type Pokémon known for its quick movements and ability to adapt to various environments, often seen in forests and fields.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/a2935587b7c61e6e6da88da3578d700c133246e5.png',
      name: 'Pidgeotto', 
      description: 'Pidgeotto is the evolved form of Pidgey, a more powerful Normal/Flying-type Pokémon with larger wings, known for its impressive speed and agility in battle.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/01e13954dff668c1420407c98b308c81b83f6dda.png',
      name: 'Pidgeot', 
      description: 'Pidgeot is the final evolution of Pidgey, a powerful Normal/Flying-type known for its incredible speed and soaring abilities in battle.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/dd6ab4ce8e7d05fb74e50cf66764e3ed8e11a097.png',
      name: 'Mega Pidgeot', 
      description: 'Mega Pidgeot is a stronger, enhanced form of Pidgeot, with improved stats and a more majestic appearance, highlighted by its larger wings and sharper features.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/3e4b38ab7545ebd938154d9aed9502cb068569d6.png',
      name: 'Rattata', 
      description: 'Rattata is a quick and agile Normal-type Pokémon, known for its speedy movements and its tendency to attack in swarms.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/3567693e3479fb0cf15b9ec84ee8a033aa7b4310.png',
      name: 'Rattata Alola', 
      description: 'Rattata in the Alola region is a Dark/Normal-type variant with a more aggressive nature, adapted to the island environment.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/e97c62e4e4b46017be60806d00f4d389d003f115.png',
      name: 'Raticate', 
      description: 'Raticate is the evolved form of Rattata, a stronger Normal-type Pokémon known for its fierce bites and powerful physical attacks.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/a30454b7040a4a517bfe0914777e2e7c045f6c65.png',
      name: 'Raticate Alola', 
      description: 'The Alola variant of Raticate is a Dark/Normal-type, distinguished by its larger size and a more menacing appearance compared to the standard version.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/e815cb4b8ba9c2d0841dfa364c87164880944e3a.png',
      name: 'Spearow', 
      description: 'Spearow is a small, aggressive Normal/Flying-type Pokémon known for its sharp beak and its ability to fly at high speeds.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/8b326a6f77b73b3c250ba95f3a97fc21b28c8f4b.png',
      name: 'Fearow', 
      description: 'Fearow is the evolved form of Spearow, a larger and more powerful Normal/Flying-type known for its ability to quickly strike from the skies.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/ad90ec632849d032615d707ebe8ad741651eee06.png',
      name: 'Ekans', 
      description: 'Ekans is a Poison-type Pokémon resembling a snake, known for its ability to constrict prey and its deceptive movements.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/eb3c14ed44c1e4a2ba4c2d7970cddf07cd8ef67f.png',
      name: 'Arbok', 
      description: 'Arbok is the evolved form of Ekans, a Poison-type Pokémon with a terrifying hood and a fearsome presence in battle.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/2b3f6ff00db7a1efae21d85cfb8995eaff2da8d8.png',
      name: 'Pikachu', 
      description: 'Pikachu is the Electric-type mascot of the Pokémon franchise, known for its cute appearance and ability to generate powerful electric shocks.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/a90881f103830615ee7f85e16fe9f586d41f2332.png',
      name: 'Pikachu Gigantamax', 
      description: 'Gigantamax Pikachu is a massive, special form of Pikachu with an oversized body and enhanced abilities in battle.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/9c28defa939e230800ec0d0c421d9f82c60df77a.png',
      name: 'Raichu', 
      description: 'Raichu is the evolved form of Pikachu, an Electric-type Pokémon known for its speed and powerful electric attacks.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/8be55a3ff2b24890fac0b9e2415dda9d0f893c1f.png',
      name: 'Raichu Alola', 
      description: 'The Alola variant of Raichu is an Electric/Psychic-type with a unique surfing ability, adapted to the Alola region.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/f5fcf7a292a180320138ace7235f8a2c16f6594a.png',
      name: 'Sandshrew', 
      description: 'Sandshrew is a small, Ground-type Pokémon that burrows underground and is known for its protective armor-like skin.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/d00d72f082b7dae546fa8bd5cf09fcfe53ffcae8.png',
      name: 'Sandslash', 
      description: 'Sandslash is the evolved form of Sandshrew, a strong Ground-type with sharp claws and the ability to dig at incredible speeds.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/f3d8e45646fb05516dff845922c3d62d9aa33cbe.png',
      name: 'Nidorino', 
      description: 'Nidorino is a Poison-type Pokémon known for its aggressive nature and sharp horn, used in battle to deliver powerful attacks.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/fed980fd2341745923812e9dcd88a039aaaf36ea.png',
      name: 'Nidorina', 
      description: 'Nidorina is the evolved form of Nidoran♀, a Poison-type Pokémon with enhanced abilities and a protective nature for its young.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/ce24d9eb27f4e554ea5bd29840a35957f7bd9d30.png',
      name: 'Nidoking', 
      description: 'Nidoking is the final evolution of Nidorino, a dual-type Poison/Ground Pokémon known for its strength and intimidating presence.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/f285c634efd141918f6ad066a6f59c20746d9050.png',
      name: 'Vulpix', 
      description: 'Vulpix is a Fire-type Pokémon with six beautiful tails, known for its playful and elegant nature.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/cc96e6a4eee980724ebd725bb8785334d3290074.png',
      name: 'Ninetales', 
      description: 'Ninetales is the evolved form of Vulpix, a majestic Fire-type Pokémon with multiple tails and mystical abilities.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/b3724395d41de1d0def948966c69148bd9f0f9c1.png',
      name: 'Wigglytuff', 
      description: 'Wigglytuff is a Normal/Fairy-type Pokémon known for its soft body and ability to put foes to sleep with its lullaby-like voice.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/5d54b9d9cefa287ea258517537ba26f4103dda36.png',
      name: 'Zubat', 
      description: 'Zubat is a Poison/Flying-type Pokémon with bat-like wings, known for its ability to navigate using echolocation.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/cedbf9afd3155d3df1e2ffebf049902598ebd74b.png',
      name: 'Golbat', 
      description: 'Golbat is the evolved form of Zubat, a larger, more aggressive Poison/Flying-type Pokémon with a strong bite.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/6bad448cb0997a928b94e72b67eacb861271f796.png',
      name: 'Oddish', 
      description: 'Oddish is a Grass/Poison-type Pokémon resembling a small plant with leaves, known for its ability to release spores.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/62973d0fc5f9bd5d8c819b8c885bd1f216983ff1.png',
      name: 'Gloom', 
      description: 'Gloom is the evolved form of Oddish, a Grass/Poison-type Pokémon that exudes a pungent odor as a defense mechanism.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/a95af5f577260373074117cb756e5ea38cd674ef.png',
      name: 'Viveplume', 
      description: 'Vileplume is the final evolution of Oddish, a Grass/Poison-type Pokémon with a massive flower on its head that releases toxic spores.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/837bcac8efc9329d9e3b9e46e95670a5d493b60a.png',
      name: 'Paras', 
      description: 'Paras is a Bug/Grass-type Pokémon with mushrooms growing on its back, which help it survive by absorbing nutrients from its host.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/8b550ab54d22a87dc784ee1af6cff4ad33aa10a2.png',
      name: 'Venonat', 
      description: 'Venonat is a Bug/Poison-type Pokémon with large, compound eyes and an ability to release toxic powders to disable foes.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/c57d464a64424f031a9872f2ec3f7c0b8052d3c1.png',
      name: 'Venomoth', 
      description: 'Venomoth is the evolved form of Venonat, a Bug/Poison-type Pokémon with large wings and powerful psychic abilities.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/583fa625d6fda586a5734f5f9e455952aa6af15f.png',
      name: 'Diglett', 
      description: 'Diglett is a small, Ground-type Pokémon known for its ability to tunnel through the earth at high speeds.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/6ea01871238908780334293e6407033650d803a9.png',
      name: 'Meowth', 
      description: 'Meowth is a mischievous Normal-type Pokémon that loves to collect shiny objects and is known for its playful behavior.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/bff57f3b31012cef1da149224a84180492f90ed4.png',
      name: 'Meowth Gigantamax', 
      description: 'Gigantamax Meowth is a special form of Meowth with a giant, long body and enhanced powers in battle.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/8da0bb6b5587f2150f41b08e0d61a80827d7229f.png',
      name: 'Persian', 
      description: 'Persian is the evolved form of Meowth, a sleek, elegant Normal-type Pokémon known for its speed and grace.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/0783062d0d860b8ae7d8e859241a700359c4d981.png',
      name: 'Psyduck', 
      description: 'Psyduck is a Water-type Pokémon with a constant headache that occasionally leads to powerful psychic abilities.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/0dd5b6e921f55c5d49978b84ee66e458336518ae.png',
      name: 'Golduck', 
      description: 'Golduck is the evolved form of Psyduck, a Water-type Pokémon known for its fast swimming and ability to release psychic energy.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/00fb5703d7c2b7a89933bbed89f4c84e48c59ea2.png',
      name: 'Mankey', 
      description: 'Mankey is a Fighting-type Pokémon known for its short temper and aggressive nature, often seen causing trouble.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/37a3edfcf9c5cbdb68bcf8945ff89fe2999e5a30.png',
      name: 'Primeape', 
      description: 'Primeape is the evolved form of Mankey, a powerful Fighting-type with a fiery temperament and strong physical attacks.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/da2fce266d1c13743742451617b2976d6bfd483d.png',
      name: 'Poliwrath', 
      description: 'Poliwrath is a Water/Fighting-type Pokémon with muscular arms, known for its strength and agility in the water.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/5d05e6f2393a6a72fb36da26a79fd3db95ae7412.png',
      name: 'Abra', 
      description: 'Abra is a Psychic-type Pokémon known for its ability to teleport instantly when threatened.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/96613b8fe63edfdf800cde823078fadc6ea9aae9.png',
      name: 'Kadabra', 
      description: 'Kadabra is the evolved form of Abra, a Psychic-type Pokémon with powerful telekinetic abilities.'
    },
    {
      src: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/265d42cf68deea0a54dacf3a4f1953198f55ad53.png',
      name: 'Alakazam', 
      description: 'Alakazam is the final evolution of Abra, a Psychic-type Pokémon with extreme intelligence and powerful psychic powers.'
    },
    {
      src: '',
      name: '', 
      description: ''
    },
    {
      src: '',
      name: '', 
      description: ''
    },
    {
      src: '',
      name: '', 
      description: ''
    },
    {
      src: '',
      name: '', 
      description: ''
    },
    {
      src: '',
      name: '', 
      description: ''
    },
    {
      src: '',
      name: '', 
      description: ''
    },
    {
      src: '',
      name: '', 
      description: ''
    },
  ];

  return (
    <div className="gallery-page">
      <h2 className="gallery-title">Pokémon Gallery</h2>
      <div className="gallery-container">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image.src} alt={`Pokemon ${index + 1}`} className="gallery-image" />
            <p className="gallery-name">{image.name}</p>  {/* Nama Pokémon ditambahkan di bawah gambar */}
            <p className="gallery-description">{image.description}</p> {/* Deskripsi Pokémon ditambahkan di bawah nama */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
