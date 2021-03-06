const  moviesMock = [
  {
    id: '8405e1ad-ec37-4bd0-91e9-32aee3770186',
    title: 'Rocky II',
    year: 2007,
    cover: 'http://dummyimage.com/219x158.png/dddddd/000000',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    duration: 2027,
    contentRating: 'PG-13',
    source:
      'https://ucoz.com/mattis/pulvinar/nulla/pede.png?nonummy=dolor&maecenas=sit&tincidunt=amet&lacus=consectetuer&at=adipiscing&velit=elit&vivamus=proin&vel=interdum&nulla=mauris&eget=non&eros=ligula&elementum=pellentesque&pellentesque=ultrices&quisque=phasellus&porta=id&volutpat=sapien&erat=in&quisque=sapien',
    tags: ['Horror|Thriller', 'Drama|Thriller', 'Crime']
  },
  {
    id: '68c5a980-1155-4e5d-8ca9-b8ff5b310309',
    title: 'Magic',
    year: 2010,
    cover: 'http://dummyimage.com/171x126.png/cc0000/ffffff',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    duration: 2143,
    contentRating: 'R',
    source:
      'https://oaic.gov.au/sit/amet/sem/fusce/consequat/nulla.xml?vivamus=adipiscing&tortor=lorem&duis=vitae&mattis=mattis&egestas=nibh&metus=ligula&aenean=nec&fermentum=sem&donec=duis&ut=aliquam&mauris=convallis&eget=nunc&massa=proin&tempor=at&convallis=turpis&nulla=a&neque=pede&libero=posuere&convallis=nonummy&eget=integer&eleifend=non&luctus=velit&ultricies=donec&eu=diam&nibh=neque&quisque=vestibulum&id=eget&justo=vulputate&sit=ut&amet=ultrices&sapien=vel&dignissim=augue&vestibulum=vestibulum&vestibulum=ante&ante=ipsum&ipsum=primis&primis=in&in=faucibus&faucibus=orci&orci=luctus&luctus=et&et=ultrices&ultrices=posuere&posuere=cubilia&cubilia=curae&curae=donec&nulla=pharetra&dapibus=magna&dolor=vestibulum&vel=aliquet&est=ultrices&donec=erat&odio=tortor&justo=sollicitudin&sollicitudin=mi&ut=sit&suscipit=amet&a=lobortis&feugiat=sapien&et=sapien&eros=non&vestibulum=mi&ac=integer&est=ac&lacinia=neque&nisi=duis&venenatis=bibendum&tristique=morbi&fusce=non&congue=quam&diam=nec&id=dui&ornare=luctus&imperdiet=rutrum&sapien=nulla&urna=tellus&pretium=in&nisl=sagittis&ut=dui&volutpat=vel&sapien=nisl&arcu=duis&sed=ac&augue=nibh',
    tags: [
      'Action|Comedy|Crime|Thriller',
      'Documentary',
      'Drama',
      'Action|Comedy|Romance|Western',
      'Comedy|Crime'
    ]
  },
  {
    id: '95bfc156-d4e0-4fdb-92ea-5ca47970988f',
    title: 'Disclosure',
    year: 2009,
    cover: 'http://dummyimage.com/239x221.png/dddddd/000000',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    duration: 2046,
    contentRating: 'PG',
    source:
      'https://51.la/faucibus/accumsan/odio/curabitur/convallis/duis/consequat.xml?natoque=sem&penatibus=duis&et=aliquam&magnis=convallis&dis=nunc&parturient=proin&montes=at&nascetur=turpis&ridiculus=a&mus=pede&vivamus=posuere&vestibulum=nonummy&sagittis=integer&sapien=non&cum=velit&sociis=donec&natoque=diam&penatibus=neque&et=vestibulum&magnis=eget&dis=vulputate&parturient=ut&montes=ultrices&nascetur=vel&ridiculus=augue&mus=vestibulum&etiam=ante&vel=ipsum&augue=primis&vestibulum=in&rutrum=faucibus&rutrum=orci&neque=luctus&aenean=et&auctor=ultrices&gravida=posuere&sem=cubilia&praesent=curae&id=donec&massa=pharetra&id=magna&nisl=vestibulum&venenatis=aliquet&lacinia=ultrices&aenean=erat&sit=tortor&amet=sollicitudin&justo=mi&morbi=sit&ut=amet&odio=lobortis&cras=sapien&mi=sapien&pede=non&malesuada=mi&in=integer&imperdiet=ac&et=neque&commodo=duis&vulputate=bibendum&justo=morbi&in=non&blandit=quam&ultrices=nec&enim=dui&lorem=luctus',
    tags: ['Comedy|Crime', 'Comedy', 'Documentary']
  },
  {
    id: '98050266-b257-4e03-b022-4c6fdfc3453b',
    title: 'Wah-Wah',
    year: 2010,
    cover: 'http://dummyimage.com/213x180.png/ff4444/ffffff',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    duration: 1913,
    contentRating: 'NC-17',
    source:
      'http://sitemeter.com/ante/ipsum/primis/in/faucibus/orci/luctus.jpg?lacinia=morbi&erat=porttitor&vestibulum=lorem&sed=id&magna=ligula&at=suspendisse&nunc=ornare&commodo=consequat&placerat=lectus&praesent=in&blandit=est&nam=risus&nulla=auctor&integer=sed&pede=tristique&justo=in&lacinia=tempus&eget=sit&tincidunt=amet&eget=sem&tempus=fusce&vel=consequat&pede=nulla&morbi=nisl&porttitor=nunc&lorem=nisl&id=duis&ligula=bibendum&suspendisse=felis&ornare=sed&consequat=interdum&lectus=venenatis',
    tags: [
      'Drama',
      'Action|Animation|Comedy|Horror',
      'Comedy|Drama',
      'Drama',
      'Documentary'
    ]
  },
  {
    id: 'ab95e935-a8a5-45a7-8a84-e99886f4689c',
    title: 'Delta Force, The',
    year: 2004,
    cover: 'http://dummyimage.com/143x206.bmp/ff4444/ffffff',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    duration: 2423,
    contentRating: 'G',
    source:
      'http://pagesperso-orange.fr/cubilia/curae/donec.html?in=nulla&faucibus=suspendisse&orci=potenti&luctus=cras&et=in&ultrices=purus&posuere=eu&cubilia=magna&curae=vulputate&mauris=luctus&viverra=cum&diam=sociis&vitae=natoque&quam=penatibus&suspendisse=et&potenti=magnis&nullam=dis&porttitor=parturient&lacus=montes&at=nascetur&turpis=ridiculus&donec=mus&posuere=vivamus&metus=vestibulum&vitae=sagittis&ipsum=sapien&aliquam=cum&non=sociis&mauris=natoque&morbi=penatibus&non=et&lectus=magnis&aliquam=dis&sit=parturient&amet=montes&diam=nascetur&in=ridiculus&magna=mus&bibendum=etiam&imperdiet=vel&nullam=augue&orci=vestibulum&pede=rutrum&venenatis=rutrum&non=neque&sodales=aenean&sed=auctor&tincidunt=gravida&eu=sem&felis=praesent&fusce=id&posuere=massa&felis=id',
    tags: ['Documentary', 'Adventure|Romance', 'Comedy|Drama|Musical']
  },
  {
    id: '18a89958-9f45-4963-a606-041cdda76771',
    title: '99 Homes',
    year: 2003,
    cover: 'http://dummyimage.com/137x164.bmp/ff4444/ffffff',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    duration: 2912,
    contentRating: 'R',
    source:
      'http://un.org/aliquam/non/mauris/morbi/non.aspx?porttitor=quis&lorem=libero&id=nullam&ligula=sit&suspendisse=amet&ornare=turpis&consequat=elementum&lectus=ligula&in=vehicula&est=consequat&risus=morbi&auctor=a&sed=ipsum&tristique=integer&in=a&tempus=nibh&sit=in&amet=quis&sem=justo&fusce=maecenas&consequat=rhoncus&nulla=aliquam&nisl=lacus&nunc=morbi&nisl=quis&duis=tortor&bibendum=id&felis=nulla&sed=ultrices&interdum=aliquet&venenatis=maecenas&turpis=leo&enim=odio&blandit=condimentum&mi=id&in=luctus&porttitor=nec&pede=molestie&justo=sed&eu=justo&massa=pellentesque&donec=viverra&dapibus=pede',
    tags: [
      'Drama|Mystery|Thriller',
      'Drama',
      'Comedy|Romance',
      'Horror|Mystery|Thriller',
      'Children'
    ]
  },
  {
    id: '7b10764c-e2b4-4496-b48f-bfb72789c1c4',
    title: 'Nightcap (Merci pour le chocolat)',
    year: 1997,
    cover: 'http://dummyimage.com/203x138.bmp/5fa2dd/ffffff',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    duration: 2880,
    contentRating: 'R',
    source:
      'https://gmpg.org/eget.aspx?justo=id&etiam=luctus&pretium=nec&iaculis=molestie&justo=sed&in=justo&hac=pellentesque&habitasse=viverra&platea=pede&dictumst=ac&etiam=diam&faucibus=cras&cursus=pellentesque&urna=volutpat&ut=dui&tellus=maecenas&nulla=tristique&ut=est&erat=et&id=tempus&mauris=semper&vulputate=est&elementum=quam&nullam=pharetra&varius=magna&nulla=ac&facilisi=consequat&cras=metus&non=sapien&velit=ut&nec=nunc&nisi=vestibulum&vulputate=ante&nonummy=ipsum&maecenas=primis&tincidunt=in&lacus=faucibus&at=orci&velit=luctus&vivamus=et&vel=ultrices&nulla=posuere&eget=cubilia&eros=curae&elementum=mauris&pellentesque=viverra&quisque=diam&porta=vitae&volutpat=quam&erat=suspendisse&quisque=potenti&erat=nullam&eros=porttitor&viverra=lacus&eget=at&congue=turpis&eget=donec&semper=posuere&rutrum=metus&nulla=vitae&nunc=ipsum&purus=aliquam&phasellus=non&in=mauris&felis=morbi&donec=non&semper=lectus&sapien=aliquam&a=sit&libero=amet&nam=diam&dui=in&proin=magna&leo=bibendum&odio=imperdiet&porttitor=nullam&id=orci&consequat=pede&in=venenatis&consequat=non&ut=sodales&nulla=sed&sed=tincidunt&accumsan=eu&felis=felis&ut=fusce&at=posuere&dolor=felis&quis=sed&odio=lacus&consequat=morbi&varius=sem&integer=mauris&ac=laoreet',
    tags: ['Comedy|Romance']
  },
  {
    id: '797a55cd-66ac-43a7-bf70-3c765bfe13e6',
    title: 'Julie Johnson',
    year: 2003,
    cover: 'http://dummyimage.com/201x173.jpg/dddddd/000000',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    duration: 2114,
    contentRating: 'R',
    source:
      'https://reference.com/ultrices/enim.xml?aliquet=sit&pulvinar=amet&sed=nunc&nisl=viverra&nunc=dapibus&rhoncus=nulla&dui=suscipit&vel=ligula',
    tags: [
      'Comedy|Drama',
      'Drama|Romance',
      'Comedy|Drama',
      'Action|Comedy|Crime|Drama|Mystery'
    ]
  },
  {
    id: '9ceea2e6-f4d1-4ccf-87ae-b2b1b9ed95b3',
    title: 'Hot Dog... The Movie',
    year: 2002,
    cover: 'http://dummyimage.com/152x194.bmp/dddddd/000000',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    duration: 2998,
    contentRating: 'NC-17',
    source:
      'http://wsj.com/duis.xml?ipsum=metus&dolor=sapien&sit=ut&amet=nunc&consectetuer=vestibulum&adipiscing=ante&elit=ipsum&proin=primis&risus=in&praesent=faucibus&lectus=orci&vestibulum=luctus&quam=et&sapien=ultrices&varius=posuere&ut=cubilia&blandit=curae&non=mauris&interdum=viverra&in=diam&ante=vitae&vestibulum=quam&ante=suspendisse&ipsum=potenti&primis=nullam&in=porttitor&faucibus=lacus&orci=at&luctus=turpis&et=donec&ultrices=posuere&posuere=metus&cubilia=vitae&curae=ipsum&duis=aliquam&faucibus=non&accumsan=mauris&odio=morbi&curabitur=non&convallis=lectus&duis=aliquam&consequat=sit&dui=amet&nec=diam&nisi=in&volutpat=magna&eleifend=bibendum&donec=imperdiet&ut=nullam&dolor=orci&morbi=pede&vel=venenatis&lectus=non&in=sodales&quam=sed&fringilla=tincidunt&rhoncus=eu&mauris=felis&enim=fusce&leo=posuere&rhoncus=felis&sed=sed&vestibulum=lacus&sit=morbi&amet=sem&cursus=mauris&id=laoreet&turpis=ut&integer=rhoncus&aliquet=aliquet&massa=pulvinar&id=sed&lobortis=nisl&convallis=nunc&tortor=rhoncus&risus=dui&dapibus=vel&augue=sem&vel=sed&accumsan=sagittis',
    tags: [
      'Action|Adventure|Sci-Fi',
      'Animation|Comedy|Musical',
      'Horror',
      'Drama',
      'Mystery|Thriller'
    ]
  },
  {
    id: '372b29d7-6b7e-4bcd-b14b-aee2044c82cb',
    title: 'La petite reine',
    year: 1995,
    cover: 'http://dummyimage.com/110x219.png/cc0000/ffffff',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    duration: 2055,
    contentRating: 'G',
    source:
      'http://washingtonpost.com/hac/habitasse/platea/dictumst/maecenas/ut.png?nunc=libero&vestibulum=convallis&ante=eget&ipsum=eleifend&primis=luctus&in=ultricies&faucibus=eu&orci=nibh&luctus=quisque&et=id&ultrices=justo&posuere=sit&cubilia=amet&curae=sapien&mauris=dignissim&viverra=vestibulum&diam=vestibulum&vitae=ante&quam=ipsum&suspendisse=primis&potenti=in&nullam=faucibus&porttitor=orci&lacus=luctus&at=et&turpis=ultrices&donec=posuere&posuere=cubilia&metus=curae&vitae=nulla&ipsum=dapibus&aliquam=dolor&non=vel&mauris=est&morbi=donec&non=odio&lectus=justo&aliquam=sollicitudin&sit=ut&amet=suscipit&diam=a&in=feugiat&magna=et&bibendum=eros&imperdiet=vestibulum&nullam=ac&orci=est&pede=lacinia&venenatis=nisi&non=venenatis&sodales=tristique&sed=fusce&tincidunt=congue&eu=diam&felis=id&fusce=ornare&posuere=imperdiet&felis=sapien',
    tags: ['Drama|Romance']
  },
  {
    id: 'eeb81f6e-2b37-42d7-82f2-36345e0bbb6f',
    title: 'Bright Star',
    year: 2002,
    cover: 'http://dummyimage.com/176x175.png/dddddd/000000',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    duration: 2340,
    contentRating: 'PG',
    source:
      'http://prnewswire.com/nulla/ultrices/aliquet/maecenas/leo.jpg?in=cursus&tempor=vestibulum&turpis=proin&nec=eu&euismod=mi&scelerisque=nulla&quam=ac&turpis=enim&adipiscing=in&lorem=tempor&vitae=turpis&mattis=nec&nibh=euismod&ligula=scelerisque&nec=quam&sem=turpis&duis=adipiscing&aliquam=lorem&convallis=vitae&nunc=mattis&proin=nibh&at=ligula&turpis=nec&a=sem&pede=duis&posuere=aliquam&nonummy=convallis&integer=nunc&non=proin&velit=at&donec=turpis&diam=a&neque=pede&vestibulum=posuere&eget=nonummy&vulputate=integer&ut=non&ultrices=velit&vel=donec&augue=diam&vestibulum=neque&ante=vestibulum&ipsum=eget&primis=vulputate&in=ut&faucibus=ultrices&orci=vel&luctus=augue&et=vestibulum&ultrices=ante&posuere=ipsum&cubilia=primis&curae=in&donec=faucibus&pharetra=orci&magna=luctus&vestibulum=et&aliquet=ultrices&ultrices=posuere&erat=cubilia&tortor=curae&sollicitudin=donec&mi=pharetra&sit=magna&amet=vestibulum&lobortis=aliquet&sapien=ultrices&sapien=erat&non=tortor&mi=sollicitudin&integer=mi&ac=sit&neque=amet&duis=lobortis&bibendum=sapien&morbi=sapien&non=non&quam=mi&nec=integer&dui=ac&luctus=neque&rutrum=duis&nulla=bibendum&tellus=morbi&in=non&sagittis=quam&dui=nec&vel=dui&nisl=luctus&duis=rutrum&ac=nulla&nibh=tellus&fusce=in&lacus=sagittis&purus=dui&aliquet=vel&at=nisl',
    tags: [
      'Thriller',
      'Action|Comedy|Drama',
      'Drama',
      'Comedy|Crime|Drama|Mystery|Thriller',
      'Drama'
    ]
  },
  {
    id: 'ff0e17c5-de04-466e-876b-d42c5c8c97d5',
    title: 'The Taking of Deborah Logan',
    year: 2005,
    cover: 'http://dummyimage.com/241x100.png/dddddd/000000',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    duration: 2197,
    contentRating: 'G',
    source:
      'https://usa.gov/nisi/nam.xml?volutpat=congue&in=risus&congue=semper&etiam=porta&justo=volutpat&etiam=quam&pretium=pede&iaculis=lobortis&justo=ligula&in=sit&hac=amet&habitasse=eleifend&platea=pede&dictumst=libero&etiam=quis&faucibus=orci&cursus=nullam&urna=molestie&ut=nibh&tellus=in&nulla=lectus&ut=pellentesque&erat=at&id=nulla&mauris=suspendisse&vulputate=potenti&elementum=cras&nullam=in&varius=purus&nulla=eu&facilisi=magna&cras=vulputate&non=luctus&velit=cum&nec=sociis&nisi=natoque&vulputate=penatibus&nonummy=et&maecenas=magnis&tincidunt=dis&lacus=parturient&at=montes&velit=nascetur&vivamus=ridiculus&vel=mus&nulla=vivamus&eget=vestibulum&eros=sagittis&elementum=sapien&pellentesque=cum&quisque=sociis&porta=natoque&volutpat=penatibus&erat=et&quisque=magnis&erat=dis&eros=parturient&viverra=montes&eget=nascetur&congue=ridiculus&eget=mus&semper=etiam&rutrum=vel&nulla=augue&nunc=vestibulum&purus=rutrum&phasellus=rutrum&in=neque&felis=aenean&donec=auctor&semper=gravida&sapien=sem&a=praesent&libero=id&nam=massa&dui=id&proin=nisl&leo=venenatis&odio=lacinia&porttitor=aenean&id=sit&consequat=amet&in=justo&consequat=morbi&ut=ut&nulla=odio&sed=cras&accumsan=mi&felis=pede&ut=malesuada&at=in&dolor=imperdiet&quis=et&odio=commodo&consequat=vulputate&varius=justo&integer=in&ac=blandit&leo=ultrices',
    tags: ['Crime|Drama|Film-Noir|Thriller', 'Drama']
  },
  {
    id: 'd15c5ae7-9fda-411d-a20c-2d8f25953829',
    title: 'Adios Sabata',
    year: 2003,
    cover: 'http://dummyimage.com/144x210.jpg/dddddd/000000',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    duration: 2119,
    contentRating: 'R',
    source:
      'http://freewebs.com/lorem/integer/tincidunt/ante/vel.xml?maecenas=purus&ut=eu&massa=magna&quis=vulputate&augue=luctus&luctus=cum&tincidunt=sociis&nulla=natoque&mollis=penatibus&molestie=et&lorem=magnis&quisque=dis&ut=parturient&erat=montes&curabitur=nascetur&gravida=ridiculus&nisi=mus&at=vivamus&nibh=vestibulum&in=sagittis&hac=sapien&habitasse=cum&platea=sociis&dictumst=natoque&aliquam=penatibus&augue=et&quam=magnis&sollicitudin=dis&vitae=parturient&consectetuer=montes&eget=nascetur&rutrum=ridiculus&at=mus&lorem=etiam&integer=vel&tincidunt=augue&ante=vestibulum&vel=rutrum&ipsum=rutrum&praesent=neque&blandit=aenean&lacinia=auctor&erat=gravida&vestibulum=sem&sed=praesent&magna=id&at=massa&nunc=id&commodo=nisl&placerat=venenatis&praesent=lacinia&blandit=aenean&nam=sit&nulla=amet&integer=justo&pede=morbi&justo=ut&lacinia=odio&eget=cras&tincidunt=mi&eget=pede&tempus=malesuada&vel=in&pede=imperdiet&morbi=et&porttitor=commodo&lorem=vulputate&id=justo&ligula=in&suspendisse=blandit&ornare=ultrices&consequat=enim&lectus=lorem&in=ipsum&est=dolor&risus=sit&auctor=amet&sed=consectetuer&tristique=adipiscing&in=elit&tempus=proin&sit=interdum&amet=mauris&sem=non&fusce=ligula&consequat=pellentesque',
    tags: ['Drama', 'Action', 'Drama']
  },
  {
    id: 'c3132a9c-d568-458b-8257-065d6f4071a6',
    title: 'Thank You, Mr. Moto',
    year: 2008,
    cover: 'http://dummyimage.com/235x158.jpg/dddddd/000000',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    duration: 2357,
    contentRating: 'PG',
    source:
      'http://is.gd/placerat/ante/nulla.html?ornare=blandit&consequat=non&lectus=interdum&in=in&est=ante&risus=vestibulum&auctor=ante&sed=ipsum&tristique=primis&in=in&tempus=faucibus&sit=orci&amet=luctus&sem=et&fusce=ultrices&consequat=posuere&nulla=cubilia&nisl=curae&nunc=duis&nisl=faucibus&duis=accumsan&bibendum=odio&felis=curabitur&sed=convallis&interdum=duis&venenatis=consequat&turpis=dui&enim=nec&blandit=nisi&mi=volutpat&in=eleifend&porttitor=donec&pede=ut&justo=dolor&eu=morbi&massa=vel&donec=lectus&dapibus=in&duis=quam&at=fringilla&velit=rhoncus&eu=mauris&est=enim&congue=leo&elementum=rhoncus&in=sed&hac=vestibulum&habitasse=sit&platea=amet&dictumst=cursus&morbi=id&vestibulum=turpis&velit=integer&id=aliquet&pretium=massa&iaculis=id&diam=lobortis&erat=convallis&fermentum=tortor&justo=risus&nec=dapibus&condimentum=augue&neque=vel&sapien=accumsan&placerat=tellus',
    tags: ['Thriller', 'Musical|Romance', 'Sci-Fi']
  },
  {
    id: 'b98c7a7b-f13b-4bb4-8cae-c0a5e6e251a9',
    title: 'Shadows of a Hot Summer (Stíny horkého léta)',
    year: 2011,
    cover: 'http://dummyimage.com/226x194.jpg/cc0000/ffffff',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    duration: 2206,
    contentRating: 'G',
    source:
      'https://123-reg.co.uk/nunc/rhoncus.png?dolor=praesent&sit=blandit&amet=lacinia&consectetuer=erat&adipiscing=vestibulum&elit=sed&proin=magna&risus=at&praesent=nunc&lectus=commodo&vestibulum=placerat&quam=praesent&sapien=blandit&varius=nam&ut=nulla&blandit=integer&non=pede&interdum=justo&in=lacinia&ante=eget&vestibulum=tincidunt&ante=eget&ipsum=tempus&primis=vel&in=pede&faucibus=morbi&orci=porttitor&luctus=lorem&et=id&ultrices=ligula&posuere=suspendisse&cubilia=ornare&curae=consequat&duis=lectus&faucibus=in&accumsan=est&odio=risus&curabitur=auctor&convallis=sed&duis=tristique&consequat=in&dui=tempus&nec=sit&nisi=amet&volutpat=sem&eleifend=fusce&donec=consequat&ut=nulla&dolor=nisl&morbi=nunc&vel=nisl&lectus=duis&in=bibendum&quam=felis&fringilla=sed&rhoncus=interdum&mauris=venenatis&enim=turpis&leo=enim&rhoncus=blandit&sed=mi&vestibulum=in&sit=porttitor&amet=pede&cursus=justo&id=eu&turpis=massa&integer=donec&aliquet=dapibus&massa=duis&id=at&lobortis=velit&convallis=eu&tortor=est&risus=congue&dapibus=elementum&augue=in&vel=hac&accumsan=habitasse',
    tags: [
      'Action|Adventure|Comedy|Romance',
      'Adventure|Comedy|Romance',
      'Documentary',
      'Comedy|Drama',
      'Comedy|Horror|Mystery'
    ]
  },
  {
    id: '7a70f130-4084-4f2a-a7fe-88e99d6d1c5b',
    title: 'French Film',
    year: 1994,
    cover: 'http://dummyimage.com/150x119.png/cc0000/ffffff',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
    duration: 2349,
    contentRating: 'PG',
    source:
      'https://deliciousdays.com/sit/amet.jsp?molestie=accumsan&nibh=odio&in=curabitur&lectus=convallis&pellentesque=duis&at=consequat&nulla=dui&suspendisse=nec&potenti=nisi&cras=volutpat&in=eleifend&purus=donec&eu=ut&magna=dolor&vulputate=morbi&luctus=vel&cum=lectus&sociis=in&natoque=quam&penatibus=fringilla&et=rhoncus&magnis=mauris&dis=enim&parturient=leo&montes=rhoncus&nascetur=sed&ridiculus=vestibulum&mus=sit&vivamus=amet&vestibulum=cursus&sagittis=id&sapien=turpis&cum=integer&sociis=aliquet&natoque=massa&penatibus=id',
    tags: ['Comedy']
  },
  {
    id: '95f38b1f-8461-4f1f-b077-55829b7f2935',
    title: "Workingman's Death",
    year: 2003,
    cover: 'http://dummyimage.com/186x129.png/cc0000/ffffff',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
    duration: 2560,
    contentRating: 'G',
    source:
      'http://webeden.co.uk/felis/ut/at/dolor/quis/odio.html?porttitor=mauris&pede=morbi&justo=non&eu=lectus&massa=aliquam&donec=sit&dapibus=amet&duis=diam&at=in&velit=magna&eu=bibendum&est=imperdiet&congue=nullam&elementum=orci&in=pede&hac=venenatis&habitasse=non&platea=sodales&dictumst=sed&morbi=tincidunt&vestibulum=eu&velit=felis&id=fusce&pretium=posuere&iaculis=felis&diam=sed&erat=lacus&fermentum=morbi&justo=sem&nec=mauris&condimentum=laoreet&neque=ut&sapien=rhoncus&placerat=aliquet&ante=pulvinar&nulla=sed&justo=nisl&aliquam=nunc&quis=rhoncus&turpis=dui',
    tags: ['Documentary', 'Romance', 'Drama']
  },
  {
    id: '20d0e694-662c-48dd-be27-e091d009fed7',
    title: 'Polar Bear King, The (Kvitebjørn Kong Valemon)',
    year: 1988,
    cover: 'http://dummyimage.com/195x177.bmp/5fa2dd/ffffff',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    duration: 2340,
    contentRating: 'NC-17',
    source:
      'http://cbc.ca/nibh/in/quis/justo/maecenas/rhoncus.html?aenean=morbi&sit=non&amet=quam&justo=nec&morbi=dui&ut=luctus&odio=rutrum&cras=nulla&mi=tellus&pede=in&malesuada=sagittis&in=dui&imperdiet=vel&et=nisl&commodo=duis&vulputate=ac&justo=nibh&in=fusce&blandit=lacus&ultrices=purus&enim=aliquet&lorem=at&ipsum=feugiat&dolor=non&sit=pretium&amet=quis&consectetuer=lectus&adipiscing=suspendisse&elit=potenti&proin=in&interdum=eleifend&mauris=quam&non=a&ligula=odio&pellentesque=in&ultrices=hac&phasellus=habitasse&id=platea&sapien=dictumst&in=maecenas&sapien=ut&iaculis=massa&congue=quis&vivamus=augue&metus=luctus&arcu=tincidunt&adipiscing=nulla&molestie=mollis&hendrerit=molestie&at=lorem&vulputate=quisque&vitae=ut&nisl=erat',
    tags: ['Crime|Drama|Film-Noir']
  },
  {
    id: '7c86c114-86af-48af-8d7d-96de7a19c2ae',
    title: 'From the Life of the Marionettes (Aus dem Leben der Marionetten) ',
    year: 2000,
    cover: 'http://dummyimage.com/245x168.jpg/5fa2dd/ffffff',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    duration: 2270,
    contentRating: 'G',
    source:
      'http://blinklist.com/diam/neque.aspx?erat=posuere&nulla=felis&tempus=sed&vivamus=lacus&in=morbi&felis=sem&eu=mauris&sapien=laoreet&cursus=ut&vestibulum=rhoncus&proin=aliquet&eu=pulvinar&mi=sed&nulla=nisl&ac=nunc&enim=rhoncus&in=dui&tempor=vel&turpis=sem&nec=sed&euismod=sagittis&scelerisque=nam&quam=congue&turpis=risus&adipiscing=semper&lorem=porta&vitae=volutpat&mattis=quam&nibh=pede&ligula=lobortis&nec=ligula&sem=sit&duis=amet&aliquam=eleifend&convallis=pede&nunc=libero&proin=quis&at=orci&turpis=nullam&a=molestie&pede=nibh&posuere=in&nonummy=lectus&integer=pellentesque&non=at&velit=nulla&donec=suspendisse&diam=potenti&neque=cras&vestibulum=in&eget=purus&vulputate=eu&ut=magna&ultrices=vulputate&vel=luctus&augue=cum&vestibulum=sociis&ante=natoque&ipsum=penatibus&primis=et&in=magnis&faucibus=dis&orci=parturient&luctus=montes&et=nascetur&ultrices=ridiculus&posuere=mus&cubilia=vivamus&curae=vestibulum&donec=sagittis&pharetra=sapien&magna=cum&vestibulum=sociis&aliquet=natoque&ultrices=penatibus&erat=et&tortor=magnis&sollicitudin=dis&mi=parturient&sit=montes&amet=nascetur&lobortis=ridiculus&sapien=mus&sapien=etiam&non=vel&mi=augue&integer=vestibulum&ac=rutrum&neque=rutrum&duis=neque&bibendum=aenean&morbi=auctor&non=gravida',
    tags: ['Western']
  },
  {
    id: '08ffb428-01d7-4b46-89ae-b9210f2c1ba3',
    title: 'Wife vs. Secretary',
    year: 1993,
    cover: 'http://dummyimage.com/202x163.jpg/dddddd/000000',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    duration: 2787,
    contentRating: 'PG-13',
    source:
      'https://creativecommons.org/dui/maecenas/tristique/est/et/tempus/semper.html?turpis=imperdiet&elementum=et&ligula=commodo&vehicula=vulputate&consequat=justo&morbi=in&a=blandit&ipsum=ultrices&integer=enim&a=lorem&nibh=ipsum&in=dolor&quis=sit&justo=amet&maecenas=consectetuer&rhoncus=adipiscing&aliquam=elit&lacus=proin&morbi=interdum&quis=mauris&tortor=non&id=ligula&nulla=pellentesque&ultrices=ultrices&aliquet=phasellus&maecenas=id&leo=sapien&odio=in&condimentum=sapien&id=iaculis&luctus=congue&nec=vivamus&molestie=metus&sed=arcu&justo=adipiscing&pellentesque=molestie&viverra=hendrerit&pede=at&ac=vulputate&diam=vitae&cras=nisl&pellentesque=aenean&volutpat=lectus&dui=pellentesque&maecenas=eget&tristique=nunc&est=donec&et=quis&tempus=orci&semper=eget&est=orci&quam=vehicula&pharetra=condimentum&magna=curabitur&ac=in&consequat=libero&metus=ut&sapien=massa&ut=volutpat&nunc=convallis&vestibulum=morbi&ante=odio&ipsum=odio&primis=elementum&in=eu&faucibus=interdum&orci=eu&luctus=tincidunt&et=in&ultrices=leo&posuere=maecenas&cubilia=pulvinar&curae=lobortis&mauris=est&viverra=phasellus&diam=sit&vitae=amet&quam=erat&suspendisse=nulla&potenti=tempus&nullam=vivamus&porttitor=in&lacus=felis&at=eu&turpis=sapien&donec=cursus',
    tags: ['Drama|War', 'Documentary', 'Comedy']
  }
];

function filteredMoviesMock (tag) {
  return moviesMock.filter(movie => movie.tags.includes(tag));
}

class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
} 

module.exports  = {
    moviesMock,
    filteredMoviesMock,
    MoviesServiceMock
}