// CALVIN VAN - CODINGWCAL GITHUB

setcps(.4) //CPM or BPM

// CORE PARTS
let drums =
  s("bd ~ bd ~ sd ~ ~ bd ~ bd bd ~ sd ~ bd ~")
    .chunk(8, x =>
      arrange(
        [7, x],
        [1, s("~ ~ sd ~ ~ ~ ~ ~").gain(.6)]
      )
    )

let hats =
  s("hh*8")
    .gain("<.25 .3 .27 .3>")
    .chunk(2, x => stack(
      x,
      s("~ ~ ~ ~ ~ ~ hh hh").gain(.2)
    ))

let shaker =
  s("sh*16")
    .slow(4)
    .when("<0 1>/2", x => x.late(1/64))
    .hpf(3000)
    .gain(.1)

let chords =
  note("<[d2,f3,a3,c4] [f2,a3,c4,e4] [e2,g3,b3,d4] [d2,f3,a3,c4]>")
    .sound("piano")
    .slow(2)

let bass =
  note("<~ d1 f1 e1 d1>")
    .sound("bass")
    .slow(2)
    .gain(.9)

let top =
  note("~ ~ a4 ~ ~ ~ c5 ~")
    .sound("epiano")
    .slow(4)
    .gain(.35)
    .room(.4)

// SECTIONS
let intro =
  stack(
    chords.gain(.16).lpf(500).room(.8).delay(.3),
    s("vinyl").gain(.12).slow(8)
  )

let build =
  stack(
    chords.gain(.2).lpf("<600 900>").room(.6).delay(.22),
    hats.gain(.3),
    shaker.gain(.12),
    s("vinyl").gain(.1).slow(8)
  )

let drop =
  stack(
    drums,
    hats,
    shaker,
    chords,
    chords.gain(.25).lpf(900).room(.5).delay(.2),
    bass,
    top
  )

let breakdown =
  stack(
    chords.gain(.16).lpf(500).room(.8).delay(.3),
    shaker.gain(.1),
    s("vinyl").gain(.12).slow(8)
  )

// ARRANGEMENT
arrange(
  [4, intro],
  [8, build],
  [8, drop],
  [4, breakdown],
  [8, drop]
)
