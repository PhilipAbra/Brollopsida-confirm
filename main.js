var express = require('express')
var path = require('path')

var app = express()
app.use(express.static(path.resolve(__dirname, 'dist')))
app.use(express.json())

app.post('/api/login', (req, res) => {
  const user = tryLogin(req.body)
  if (!user) {
    res.status(400)
    res.send({ message: 'Wrong credentials'})
    return
  }

  res.send(user)
})

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen('80')

const tryLogin = user => {
  if (!user.password || user.password.toLowerCase() !== 'love' || !user.username) {
    return false
  }

  let found = grouped
    .flatMap(userArray => {
      if (userArray.find(u => u.mail.toLowerCase() === user.username.toLowerCase())) {
        return userArray
      }

      return null
    })
    .filter(val => !!val)

  if (found.length < 1) {
    return false
  }

  return found
}

const grouped = [
  [ { mail: 'oskarhansai@hotmail.com', name: 'Oskar Pettersson', living: 0 } ],
  [ { mail: 'frida.ekholm20@gmail.com', name: 'Frida Ekholm', living: 0 } ],
  [ { mail: 'naimnayeri@msn.com', name: 'Naim Nayeri', living: 0 } ],
  [ { mail: 'Sandra_eriksson@icloud.com', name: 'Sandra Eriksson', living: 0 } ],
  [ { mail: 'hannaa_andersson@hotmail.com', name: 'Hanna Andersson', living: 0 },
    { mail: 'viktor.sjoberg@hotmail.com', name: 'Viktor Maisey', living: 0} ],
  [
    {
      mail: 'ingmarie.larsson5@Hotmail.com',
      name: 'Ing-Marie Larsson',
      living: 1
    }
  ],
  [ { mail: 'johankratz@hotmail.com', name: 'Johan Kratz', living: 0 },
    { mail: 'Andrea.elfman@gmail.com', name: 'Andrea Elfman', living: 0 } ],
  [ { mail: 'hanna.adelstal@gmail.com', name: 'Hanna Adelstål', living: 0 } ],
  [ { mail: 'ann-catrine.larsson@karlstad.se', name: 'Ann-Catrine Larsson', living: 1 } ],
  [ { mail: 'navid_92@hotmail.com', name: 'Navid Nayeri', living: 0 } ],
  [ { mail: 'Emma.bjorkman@svenskfast.se', name: 'Emma Björkman', living: 0 } ],
  [ { mail: 'josephine.andersson@abgsc.se', name: 'Josephine Andersson', living: 0 } ],
  [ { mail: 'jakob.andersson@se.ey.com', name: 'Jakob Andersson', living: 0 } ],
  [
    { mail: 'thelma.bjorklund@gmail.com', name: 'Thelma Björklund', living: 0 },
    { mail: 'didrikhelsing@gmail.com', name: 'Didrik Helsing', living: 0 }
  ],
  [
    {
      mail: 'elaredovisning@gmail.com',
      name: 'Eva-Lena Andersson',
      living: 1
    },
    {
      mail: '',
      name: 'Lars-Gunnar Andersson',
      living: 1,
    }
  ],
  [
    { mail: 'Philip.abrahamsson@live.se', name: 'Philip Abrahamsson', living: 0 },
    { mail: 'rebecca.tornroos@gmail.com', name: 'Rebecca Törnroos', living: 0 }
  ],
  [
    { mail: 'sofie@sofiewallner.com', name: 'Sofie Wallner Eriksson', living: 1 },
    { mail: 'magrob123@gmail.com', name: 'Magnus Wallner Eriksson', living: 1 }
  ],
  [
    { mail: 'jonandreas.axelsson@gmail.com', name: 'Andreas Axelsson', living: 0 }
  ],
  [
    { mail: 'm.ejderhamn@gmail.com', name: 'Marcus Ejderhamn', living: 1 },
    { mail: 'ellielouiseday@gmail.com', name: 'Ellie Day', living: 1 }
  ],
  [ { mail: 'Saraahlgren@live.com', name: 'Sara Ahlgren', living: 0 } ],
  [ { mail: 'pima59@gmail.com', name: 'Pia Maisey-Sjöberg', living: 1 },
    { mail: '', name: 'Pär-Åke Sjöberg', living: 1 } ],
  [
    { mail: 'tomas.fallman@note.eu', name: 'Tomas Fällman', living: -1 },
    { mail: 'emeliefalm@icloud.com', name: 'Emelie Fällman', living: -1 },
    { mail: 'anneli.fallman@icloud.com', name: 'Anneli Fällman', living: -1 },
    { mail: 'linneapro@hotmail.com', name: 'Linnea Fällman', living: -1 }
  ],
  [
    { mail: 'henrik.steinholtz@gmail.com', name: 'Sofia Steinholtz', living: 1 },
    { mail: 'henrik.steinholtz@gmail.com', name: 'Henrik Steinholtz', living: 1 }
  ],
  [ { mail: 'o.warnqvist@hotmail.com', name: 'Oscar warnqvist', living: 0 } ],
  [
    { mail: 'idawestermark_@hotmail.com', name: 'Ida Westermark', living: 0 },
    { mail: 'gustaf.hallen@hotmail.com', name: 'Gustaf Hallén', living: 0 }
  ],
  [
    { mail: 'amandarandau@hotmail.com', name: 'Amanda Randau', living: 1 },
    { mail: 'sebastian.hallsbo@gmail.com', name: 'Sebastian Hallsbo', living: 1 }
  ],
  [
    { mail: 'andre.persson89@gmail.com', name: 'André Persson', living: 0 },
    { mail: 'elinsofiasvahn@gmail.com', name: 'Elin Svahn', living: 0 }
  ],
  [
    { mail: 'johannes.karlstrom@sakra.se', name: 'Johannes Karlström', living: -1 },
    { mail: 'melander.johanna@hotmail.se', name: 'Johanna Melander', living: -1 }
  ],
  [
    { mail: 'Martin.nilsson590@gmail.com', name: 'Martin Nilsson', living: 0 },
    { mail: 'Fanny.sahl@hotmail.com', name: 'Fanny sahl', living: 0 }
  ],
  [
    { mail: 'annelie.granholm@hotmail.com', name: 'Marcus', living: 1 },
    { mail: 'annelie.granholm@seb.se', name: 'Annelie Granholm', living: 1 }
  ],
  [
    { mail: 'Rebeccabohlin@hotmail.com', name: 'Rebecca Bohlin', living: 1 },
    { mail: 'hellberg.v@gmail.com', name: 'Viktor Hellberg', living: 1 }
  ],
  [
    {
      mail: 'louise.backenskiold@gmail.com',
      name: 'Louise Backenskiöld',
      living: 0
    }
  ],
  [
    { mail: 'emmaisabellelfstrom@outlook.com', name: 'Emma Elfström', living: 0 },
    { mail: 'andersson.henrik@live.se', name: 'Henrik Andersson', living: 0 }
  ],
  [
    { mail: 'lovis.warnestad@hotmail.com', name: 'Lovisa Warnestad', living: 0 },
    { mail: 'niklaswessmark@hotmail.com', name: 'Niklas wessmark', living: 0 }
  ],
  [
    {
      mail: 'Kristoffer.stenback@hotmail.com',
      name: 'Kristoffer Stenback',
      living: 1
    },
    { mail: 'S_sculac@hotmail.com', name: 'Sandra Sculac', living: 1 }
  ],
  [
    { mail: 'isabellelindgrenn@gmail.com', name: 'Isabelle Lindgren', living: 0 },
    { mail: 'green.pontus@gmail.com', name: 'Pontus Green', living: 0 }
  ],
  [
    { mail: 'Jacob.furster@outlook.com', name: 'Jacob', living: 0 },
    { mail: 'Juliaasson@hotmail.com', name: 'Julia Andersson', living: 0 }
  ],
  [ { mail: 'Helene.sjoberg60@telia.com', name: 'Helene Sjöberg', living: 1 } ],
  [
    { mail: 'Nicklas.lindberg@live.com', name: 'Nicklas Lindberg', living: 0 },
    { mail: 'ethelaliciaalmqvist@gmail.com', name: 'Alicia Almqvist', living: 0 }
  ],
  [ { mail: 'maisey@live.se', name: 'Martin Maisey Sjöberg', living: 0 },
    { mail: '', name: 'Lovisa Henricsson', living: 0 } ],
  [
    { mail: 'LINDAJAKOBSSON92@hotmail.com', name: 'Linda Jakobsson', living: 0 },
    {
      mail: 'trotzenfeldtdavid@gmail.com',
      name: 'David Trotzenfeldt',
      living: 0
    }
  ],
  [
    {
      mail: 'majapalmerwalther@gmail.com',
      name: 'Maja Palmér Walther',
      living: 0
    }
  ],
  [
    { mail: 'Jorgen.tudeen@gmail.com', name: 'Jörgen Tudeen', living: 1 },
    { mail: 'Cathrin.uebel@gmail.com', name: 'Cathrin Uebel', living: 1 }
  ],
  [ { mail: 'callejohansson_@hotmail.com ', name: 'Calle Johansson', living: 0 },
    { mail: 'fatima1970@hotmail.no', name: 'Fatima Derbitchev', living: 0 } ],
  [ { mail: 'perssonjohannes@outlook.com', name: 'Johannes Persson', living: 1, paid: true },
    { mail: '', name: 'Emelie Fransson', living: 1, paid: true } ],
  [ { mail: 'Therese.sahlin@hotmail.com', name: 'Therese Sahlin', living: 0 } ],
  [ { mail: 'grabiella.flam@academy.se', name: 'Grabiella Flam', living: -1 },
    { mail: '', name: 'Mischa Flam', living: -1 } ]
]