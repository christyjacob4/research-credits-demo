export const suffixes = [
  ".png",
  "_GT0.jpg",
  "_GT0.jpg",
  ".png",
  ".jpg",
  ".png"
];
export const filenames = [
  "b01-009",
  "g06-047p",
  "l07-138",
  "e06-006",
  "e01-018",
  "h06-000",
  "e07-012",
  "f07-088a",
  "c04-050",
  "h02-019"
];
export const folders = ["1", "2", "3", "4", "5", "6"];
export const textContent = [
  {
    heading: "Input Image",
    body: "This is the image from the IAM Dataset that is input to our pipeline."
  },
  {
    heading: "Handwritten Text Detection",
    body:
      "Next, we use a pixel level classifier to detect the handwritten and printed text regions in the image. This classifer was trained on the IAM dataset."
  },
  {
    heading: "Baseline Detection",
    body: "We use the same architecture as the printed or handwritten text classifier in order to detect baselines in the given input. This classifier was trained on the cBAD dataset of ICDAR 2017 competition."
  },
  {
    heading: "Connected Components",
    body: "The connected components of the handwritten text part of the image are identified and grouped using the baselines obtained in the previous step. The result produces line-wise connected components."
  },
  {
    heading: "Word Detection",
    body: "We merge the line-wise connected components to obtain word-level outputs. This is useful because general Handwritten Text Recognition mechanisms can be used from this point onwards."
  },
  {
    heading: "Output",
    body: "The HTR model employs a CNN that feeds its output to an RNN and finally, a beam search mechanism is applied to generate the output word."
  }
];

export const meta = [
  {
    gt:
      "The Archbishop has long been a courageous fighter against apartheid He must be heard with attention On purely practical grounds he holds that it would be a mistake to expel South Africa weakening the whites who are working for a change of policy In his view it would also be against the interests of the Africans",
    prediction:
      "The Archbishop has long been a courageous fighter against apartheid He must be heard with attention On purely practical grounds he holds that it would be a mistake to expel South Africa weakening the whites who are working for a change of policy In his view it would also be against the interests of the Africans",
    edit_distance: 0.0,
    wer: 0.0,
    bleu: 1.0
  },
  {
    gt:
      "This remarkable man of medicine whom Sir Francis Burdett described to Anglesey a year or two later as more like a God upon earth than a human being had an increasing number of disciples among unorthodox medical men in the cities of Europe One of these was the Neapolitan Dr Giuseppe Mauro whom Anglesey consulted in May 1834",
    prediction:
      "This remarkable man of medicine whom Sir Francis Burdett described to Anglesey a year or two later as more like a God upon earth than a human being  had an increasing number of disciples among unorthodox medical men in the cities of Europe One of these was the Neapolitan Dr Giuseppe Mauro whom Anglesey consulted in May 1834",
    edit_distance: 0.003076923076923077,
    wer: 0.0,
    bleu: 0.9829064027289661
  },
  {
    gt:
      "It was a warm still evening the plop of fish and the gentle putter of the engine were infinitely soothing after city noises and I began to look forward to my life on the water At last he pronounced me riverworthy and wanted to know when I would be moving in",
    prediction:
      "It was a warm  still evening  the plop Of fish and the gentle putter of the engine were infinitely soothing after City noises and I began to look forward to my life on the water At last he pronounced me riverworthy and wanted to know when I would be moving in",
    edit_distance: 0.015503875968992248,
    wer: 0.0,
    bleu: 0.9238357148883655
  },
  {
    gt:
      "The effect of bottom congestion due to the light pressure is inevitably mixed with that of the suitability of ground for spawning Both result in crowding so there is no need to try to separate them thank Heaven A good picture of this is seen on the 150 miles of spawning grounds from the Viking in the north down to the Klondykes and the Reef along the western edge of the Norwegian Deep",
    prediction:
      "The effect of bottom congestion due to the light pressure is inevitably mixed with that of the suitability of ground for spawning Both result in crowding  so there is no need to try to separate them thank Heavenly A good picture of this is seen on the 150 miles of spawning grounds from the Viking in the north down to the Klondykes and the Reef along the western edge of the Norwegian Deep",
    edit_distance: 0.007731958762886598,
    wer: 0.0136986301369863,
    bleu: 0.9728825120183872
  },
  {
    gt:
      "We read with sympathy an advertisement in the reign of Charles 2 stating Lost a lawn 1hand- kercher with a broad hem laced round with fine Point lace about four fingers broad and among the effects left by Nell Gwyn is an unpaid bill for scarlet satin shoes with silver lace The records of these tender trifles are very touching but then lace does place upon everything a delicate sentiment",
    prediction:
      "We read with sympathy an advertisement in the reign of Charles 2 stating Lost a lawn 1hand kercher with a broad hem laced round with fine Point lace about four fingers broad and among the effects left by Nell Gwyn is an unpaid bill for scarlet satin shoes with silver lace The records of these tender trifles are very touching but then lace does place upon everything a delicate sentiment",
    edit_distance: 0.002564102564102564,
    wer: 0.014285714285714285,
    bleu: 0.9857142857142858
  },
  {
    gt:
      "To provide fuller information about certain types of dangerous occurrence Section 65 of the Factories Act 1937 requires notification of certain specified occurrences to H.M. District Inspectors of Factories whether or not they result in injury Appendix 20 gives figures of dangerous occurrences reported in 1960 the types of occurrence which have to be reported are set out in the heading to the Appendix",
    prediction:
      "To provide fuller information about certain types of dangerous occurrence Section 65 of the Factories Act 1937 requires notification of certain specified occurrences to H.M. District Inspectors of Factories whether or not they result in injury Appendix 20 gives figures of dangerous occurrences reported in 1960 the types of occurrence which have to be reported are set out in the heading to the Appendix",
    edit_distance: 0.012345679012345678,
    wer: 0.015625,
    bleu: 0.9540889651876513
  },
   {
    gt:
      `From the day it hatches in the spring until it dies in the late autumn the praying mantis satisfies its voracity by eating other insects Nine blowflies may be consumed at one sitting and the fully adult 2 1/2-in.-long insect is able to keep a firm hold on one grasshopper while eating another According to Dr. Max Beier in Fang- heuschrecken Die Neue Brehm Bu"ckerei 1952 the praying mantis is trecking northwards`,
    prediction:
      `From the day it hatches in the spring until it dies   the late autumn the praying mantis satisfies its voracity by eating other insects Nine blowflies may be consumed at one sitting and the fully adult  2 12 in long insect is able to keep a firm hold on one I rashper white eating another According to Dr Max Beier in Fang heuschrecken   Die Neue Brehm Bckerei  192 the praying mantis is trecking northwards`,
    edit_distance: 0.050724637681159424,
    wer: 0.1388888888888889,
    bleu: 0.8078410499018616
  },
   {
    gt:
      "A fascinating study also opens up in the dietary welcomed by men of genius as well as the foods for which they have had an aversion Shelley for example had a great contempt for animal food believing that it impaired the intellectual faculties Bunyan's break- fast and supper consisted of a piece of coarse bread and a bowl of milk",
    prediction:
      "A fascinating study also opens up in the dietary welcomed by men of genius I as well as the foods for which they have I had an aversion Shelley for example I had a great contempt for animal I food believing that it impaired the intellectual focusaris break I fast and supper consisted of a I piece of coarse bread and a  bowl of milk",
    edit_distance: 0.0755287009063444,
    wer: 0.13333333333333333,
    bleu: 0.8595955471341615
  },
   {
    gt:
      "Their offering last night differed little from their earlier act on this show a week or so ago But the Mudlarks with Jeff Mudd out of the Army and back with sister Mary and brother Fred were in bright zestful form Why only two numbers though It was not enough A FAIR COP the B Whitehall farce last night looked like a rabbit warren in a field of corn",
    prediction:
      "Their offering last right differed little from their earlier act on this show a week or so ago But the Mudlarks with Jeff Mudd out of the Army and backstage with sister Mary and brother Fred were in brig be zestful form Why only hewers numbers  though  It way not enor  A FAIR Copthorne  the B B  Whitehall farce last night looked like a rabbit warren in a field of corn",
    edit_distance: 0.09116809116809117,
    wer: 0.13043478260869565,
    bleu: 0.8118648489003237
  },
   {
    gt:
      "5 We recommended that in general any drug or pharmaceutical preparation which has an action on the central nervous system and is liable to produce physical or psychological deterioration should be confined to supply on prescription and that an independent expert body should be responsible for advising which substances should be so controlled 6 As an interim and urgent measure the Secretary of State for the Home Department on the recommendation of the Poisons Board has",
    prediction:
      "E We recommended that in general any doing or pharmaceutical cat preparation which has an action on the central nervous system and is liable to producephysical or psychological deterioration should be confinedtsitsits supply on prescription and that an independent export body should be responsible for advising which substances should be so controlled 6 As an interim and urgent measure the Secretary of State for the Home Departme I on the recommendation of the Poisons Board has",
    edit_distance: 0.040169133192389,
    wer: 0.13157894736842105,
    bleu: 0.8947368421052632
  }
];
