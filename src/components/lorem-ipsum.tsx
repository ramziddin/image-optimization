import { randomFromArray } from "../utilities/random-from-array"

const loremIpsumTexts = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti iste, dicta ipsam consequatur ut repudiandae sint aspernatur modi reprehenderit velit ducimus ea saepe eum voluptatum hic tempora unde recusandae!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quae laborum qui distinctio autem sunt alias ut culpa reprehenderit nulla neque provident consequuntur, natus doloribus voluptatibus? Porro doloremque eum voluptatum.",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo molestiae nisi tempore doloremque, delectus sapiente est harum, cupiditate possimus eum omnis eius? Labore vel quis eius quisquam, eos modi quasi.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam est unde quibusdam commodi officia quia ducimus aut odio deserunt. Corrupti omnis praesentium voluptas laudantium minus accusamus consequuntur qui id veniam.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eum perspiciatis dolor beatae, quidem ab iste officiis quas dolorem eius sapiente doloribus maxime inventore ullam reprehenderit, distinctio est exercitationem. Deleniti?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente incidunt adipisci eveniet accusamus doloribus dicta corrupti odit consequuntur harum. Saepe esse excepturi magni, eos quo est beatae quae libero in.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius praesentium excepturi fugit error ea atque perspiciatis quaerat, doloribus iure officia facere fugiat iusto quibusdam assumenda repellendus quis optio et corrupti?",
]

export function LoremIpsum() {
  return <p>{randomFromArray(loremIpsumTexts)}</p>
}
