import hockey from "./assets/ice-hockey.png";
import jav from "./assets/javelin-throw.png";
import shoot from "./assets/shooting-range.png";
import wrest from "./assets/wrestling.png";
import silver from "./assets/silver-medal.png";
import bronze from "./assets/bronze-medal.png";

export const profile = [
  {
    title: "Javelin",
    spot: "2nd",
    image: jav,
    medal: silver,
  },
  {
    title: "Hockey",
    spot: "3rd",
    image: hockey,
    medal: bronze,
  },
  {
    title: "Shooting",
    spot: "3rd",
    image: shoot,
    medal: bronze,
  },
  {
    title: "Wrestling",
    spot: "3rd",
    image: wrest,
    medal: bronze,
  },
];

export const sportsDet = {
  javelin: {
    title: "JAVELIN",
    description:
      " Neeraj Chopra Out of his six throws, five turned out to be fouls, and it was evident that he was not at his very best.But it needed only a solitary throw of 89.45 metres in his second attempt to put him into a silver medal winning position",
  },
  hockey: {
    title: "HOCKEY",
    description:
      "India, who won a bronze medal at Tokyo 2020 to end a 41-year-long medal drought in hockey, secured their second successive medal in the sport at the Summer Games and 13th overall. Heading into Paris 2024, India were the most successful hockey team in Olympic history with eight gold, one silver and three bronze medals.",
  },
  shooting: {
    title: "SHOOTING",
    description:
      "Manu Bhaker, who had to endure a heartbreaking campaign at Tokyo 2020, spearheaded the Indian campaign with two medals. She won an individual bronze in the womens 10m air pistol event before pairing up with Sarabjot Singh to claim another in the 10m air pistol mixed team. The duo beat the Republic of Korea in the bronze medal match.With the two podium finishes, Manu Bhaker became the first Indian to win two medals at the same edition of the Olympics since Indias independence in 1947. She could have had a third in the 25m pistol event but finished agonisingly short after losing a shoot-off for the bronze.",
  },
  wrestling: {
    title: "WRESTLING",
    description:
      "Vinesh Phogat qualified for the gold medal bout in the womens 50kg event but failed the weigh in on the morning of her medal match and was disqualified.  Aman Sehrawat went on to win a bronze in the mens 57kg category and also became Indias youngest Olympic medal winner at 21 years and 24 days old.",
  },
};
